const express = require("express");
const countryRoutes = express.Router();
const CountryController = require("../controllers/CountryController");

countryRoutes.route("/").get(CountryController.getData);

module.exports = countryRoutes;
