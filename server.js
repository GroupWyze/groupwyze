const express = require("express");
const path = require("path");
const routes = require("./routes");
const db = require("./models");
var bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Add routes, both API and view
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
