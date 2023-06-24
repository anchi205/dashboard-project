const express = require("express");
const regionRoutes = express.Router();
const RegionController = require("../controllers/RegionController");

regionRoutes.route("/").get(RegionController.getData);

module.exports = regionRoutes;
