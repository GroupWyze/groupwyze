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
                Authorization: "Bearer LaMQ3ScIVzzTB_hjnUtFt7WrrJYwh-2ZbU5adBYbUUDIpNFhClGFdU6e-_j7Y0unMX48ZaPCPyaQt3IP6kDZm-jTaoeQzJ-NL6ikemAEALXeVZQtG4_QVx_uCVI_WXYx"
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
        axios.get('https://api.yelp.com/v3/businesses/' + req.params.yelp_id, {
            headers: {
                Authorization: "Bearer LaMQ3ScIVzzTB_hjnUtFt7WrrJYwh-2ZbU5adBYbUUDIpNFhClGFdU6e-_j7Y0unMX48ZaPCPyaQt3IP6kDZm-jTaoeQzJ-NL6ikemAEALXeVZQtG4_QVx_uCVI_WXYx"
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