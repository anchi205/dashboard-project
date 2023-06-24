const express = require("express");
const topicRoutes = express.Router();
const TopicController = require("../controllers/TopicController");

topicRoutes.route("/").get(TopicController.getData);

module.exports = topicRoutes;
