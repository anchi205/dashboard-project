const express = require("express");
const sourceRoutes = express.Router();
const SourceController = require("../controllers/SourceController");

sourceRoutes.route("/").get(SourceController.getData);

module.exports = sourceRoutes;
