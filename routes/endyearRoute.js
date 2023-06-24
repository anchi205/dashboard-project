const express = require("express");
const endyearRoutes = express.Router();
const EndyearController = require("../controllers/EndyearController");

endyearRoutes.route("/").get(EndyearController.getData);

module.exports = endyearRoutes;
