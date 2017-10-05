const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./models");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3333;
const app = express();

// auth0 imports

const jwt = require('express-jwt');
const cors = require('cors');
const jwks = require('jwks-rsa');

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
    jwksUri: "https://groupwyze.auth0.com/.well-known/jwks.json"
  }),
  // This is the identifier we set when we created the API
  audience: 'https://groupwyze.com',
  issuer: "https://groupwyze.auth0.com/",
  algorithms: ['RS256']
})

// TODO: Do I need to use this? 
// app.use(authCheck);

// Add routes, both API and view

// TODO: Need to add authcheck to specific APIs for user views
app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our sequelize models and then starting our Express app
// =============================================================

// setting force settings for dev vs prod env
let force;
if (process.env.NODE_ENV === "production") {
  force = true;
} else {
  force = true;
}

db.sequelize.sync({ force: force }).then(function () {
  app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
});
