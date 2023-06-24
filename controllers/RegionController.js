const Analytics = require("../models/analytic_model");

module.exports = {
  async getData(req, res) {
    const regionName = req.query.regionName;
    const filteredDataByRegion = await Analytics.find({ region: regionName });

    const intensitydata = filteredDataByRegion.map((item) => {
      return item.intensity;
    });
    const likelihooddata = filteredDataByRegion.map((item) => {
      return item.likelihood;
    });
    const relevancedata = filteredDataByRegion.map((item) => {
      return item.relevance;
    });
    const startyearData = filteredDataByRegion.map((item) => {
      return item.start_year;
    });
    const countryData = filteredDataByRegion.map((item) => {
      return item.country;
    });
    const topicData = filteredDataByRegion.map((item) => {
      return item.topic;
    });
    const regionData = filteredDataByRegion.map((item) => {
      return item.region;
    });
    const insightData = filteredDataByRegion.map((item) => {
      return { item: item.insight, url: item.url };
    });

    if (!filteredDataByRegion) {
      return res.status(200).json({
        status: false,
        message: "No data Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Filtered Data by Region",
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
