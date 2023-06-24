const express = require("express");
const pestleRoutes = express.Router();
const PestleController = require("../controllers/PestleController");

pestleRoutes.route("/").get(PestleController.getData);

module.exports = pestleRoutes;
