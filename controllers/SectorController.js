const Analytics = require("../models/analytic_model");

module.exports = {
  async getData(req, res) {
    const sectorName = req.query.sectorName;
    const filteredDataBySector = await Analytics.find({ sector: sectorName });

    const intensitydata = filteredDataBySector.map((item) => {
      return item.intensity;
    });
    const likelihooddata = filteredDataBySector.map((item) => {
      return item.likelihood;
    });
    const relevancedata = filteredDataBySector.map((item) => {
      return item.relevance;
    });
    const startyearData = filteredDataBySector.map((item) => {
      return item.start_year;
    });
    const countryData = filteredDataBySector.map((item) => {
      return item.country;
    });
    const topicData = filteredDataBySector.map((item) => {
      return item.topic;
    });
    const regionData = filteredDataBySector.map((item) => {
      return item.region;
    });
    const insightData = filteredDataBySector.map((item) => {
      return { item: item.insight, url: item.url };
    });
    
    if (!filteredDataBySector) {
      return res.status(200).json({
        status: false,
        message: "No data Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Filtered Data by Sector",
        data: {
          intensity: intensitydata,
          likelihood: likelihooddata,
          relevance: relevancedata,
          start_year: startyearData,
          country: countryData,
          topic: topicData,
          region: regionData,
          insight: insightData,
        },
      });
    }
  },
};
