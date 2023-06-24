const Analytics = require("../models/analytic_model");

module.exports = {
  async getData(req, res) {
    const sourceName = req.query.sourceName;
    const filteredDataBySource = await Analytics.find({ source: sourceName });

    const intensitydata = filteredDataBySource.map((item) => {
      return item.intensity;
    });
    const likelihooddata = filteredDataBySource.map((item) => {
      return item.likelihood;
    });
    const relevancedata = filteredDataBySource.map((item) => {
      return item.relevance;
    });
    const startyearData = filteredDataBySource.map((item) => {
      return item.start_year;
    });
    const countryData = filteredDataBySource.map((item) => {
      return item.country;
    });
    const topicData = filteredDataBySource.map((item) => {
      return item.topic;
    });
    const regionData = filteredDataBySource.map((item) => {
      return item.region;
    });
    const insightData = filteredDataBySource.map((item) => {
      return { item: item.insight, url: item.url };
    });
    
    if (!filteredDataBySource) {
      return res.status(200).json({
        status: false,
        message: "No data Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Filtered Data by Source",
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
