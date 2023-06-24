const express = require("express");
const endyearRoute = require("./endyearRoute.js");
const topicRoute = require("./topicRoute.js");
const sectorRoute = require("./sectorRoute.js");
const regionRoute = require("./regionRoute.js");
const pestleRoute = require("./pestleRoute.js");
const sourceRoute = require("./sourceRoute.js");
const countryRoute = require("./countryRoute.js");

const apiRouter = express.Router();

apiRouter.use("/filter/endyear", endyearRoute);
apiRouter.use("/filter/topic", topicRoute);
apiRouter.use("/filter/sector", sectorRoute);
apiRouter.use("/filter/region", regionRoute);
apiRouter.use("/filter/pestle", pestleRoute);
apiRouter.use("/filter/source", sourceRoute);
apiRouter.use("/filter/country", countryRoute);

module.exports = apiRouter;
