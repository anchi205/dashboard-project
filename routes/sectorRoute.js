const express = require("express");
const sectorRoutes = express.Router();
const SectorController = require("../controllers/SectorController");

sectorRoutes.route("/").get(SectorController.getData);

module.exports = sectorRoutes;
