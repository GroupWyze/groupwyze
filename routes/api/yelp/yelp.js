const router = require("express").Router();
const axios = require("axios");
var db = require("../../../models");



router.route('/')
    .all(function (req, res, next) {

        next();
    })
    .get(function (req, res, next) {
        console.log(req);
        axios.get('https://api.yelp.com/v3/businesses/search', {
            params: {
                term: req.query.term,
                location: req.query.location
            },
            headers: {
                Authorization: YELP_AUTHORIZATION_HEADER
            }
        }
        )
            .then(function (response) {
                res.json(response.data.businesses);
            })
            .catch(function (error) {
                console.log(error);
            });
    });

router.route('/:yelp_id')
    .all(function (req, res, next) {
        // runs for all HTTP verbs first
        // think of it as route specific middleware!
        console.log("yelp id: " + req.params.yelp_id + " route");
        next();
    })
    .get(function (req, res, next) {
        console.log(req);
        axios.get(`https://api.yelp.com/v3/businesses/${req.params.yelp_id}`, {
            headers: {
                Authorization: process.env.YELP_AUTHORIZATION_HEADER
            }
        }
        )
            .then(function (response) {
                res.json(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    });



module.exports = router;