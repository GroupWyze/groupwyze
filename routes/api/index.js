const router = require("express").Router();
const shindigsRoutes = require("./shindigs");
const usersRoutes = require("./users");
const yelpRoutes = require("./yelp");
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
    jwksUri: `https://groupwyze.auth0.com/.well-known/jwks.json`
  }),
  // This is the identifier we set when we created the API
  audience: 'https://www.groupwyze.com',
  issuer: `https://groupwyze.auth0.com/`,
  algorithms: ['RS256']
});

router.all('*', authCheck);

// Shindig routes
router.use("/shindig", shindigsRoutes);

// User routes
router.use("/user", usersRoutes);

// Yelp routes
router.use("/yelp", yelpRoutes);

module.exports = router;