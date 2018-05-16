const router = require("express").Router();
const axios = require("axios");
const CacheService = require("../../../utils/CacheService");
const db = require("../../../models");

const ttl = 80000;
const cache = new CacheService(ttl); // Create a new cache service instance
let data = {
  client_id: "YPDc2BG2MLxs7ohjh0ZPPF1k4PMaLFfG",
  client_secret: "9rCpCG0nFp32EZ11Him69bg5LdGyM-fimpaVcyNKsiNLmGF-B2n_7oK_Dz0UKDhT",
  audience: "https://groupwyze.auth0.com/api/v2/",
  grant_type: "client_credentials"
};

function getToken() {
  return axios.post('https://groupwyze.auth0.com/oauth/token', data)
    .then(function (response) {
      return response.data.access_token;
    })
    .catch(function (error) {
      console.log(error);
    });
}

router.route('/')
  .all(function (req, res, next) {
    next();
  })
  .get(function (req, res, next) {
    cache.get('oauth_token', getToken)
      .then(function (response) {
        axios.get(`https://groupwyze.auth0.com/api/v2/users`, {
          headers: {
            Authorization: `Bearer ${response}`
          }
        })
          .then(function (response) {
            res.json(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        return response;
      }).catch(function (error) {
        console.log(error);
      });
  });

router.route('/:oauth_user_id')
  .all(function (req, res, next) {
    // runs for all HTTP verbs first
    // think of it as route specific middleware!
    console.log("auth id: " + req.params.oauth_user_id + " route");
    next();
  })
  .get(function (req, res, next) {
    cache.get('oauth_token', getToken)
      .then(function (response) {
        axios.get(`https://groupwyze.auth0.com/api/v2/users/${req.params.oauth_user_id}`, {
          headers: {
            Authorization: `Bearer ${response}`
          }
        })
          .then(function (response) {
            res.json(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        return response;
      }).catch(function (error) {
        console.log(error);
      });
  });



module.exports = router;