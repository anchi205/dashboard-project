const Analytics = require("../models/analytic_model");

module.exports = {
  async getData(req, res) {
    const countryName = req.query.countryName;
    const filteredDataByCountry = await Analytics.find({
      country: countryName,
    });

    const intensitydata = filteredDataByCountry.map((item) => {
      return item.intensity;
    });
    const likelihooddata = filteredDataByCountry.map((item) => {
      return item.likelihood;
    });
    const relevancedata = filteredDataByCountry.map((item) => {
      return item.relevance;
    });
    const startyearData = filteredDataByCountry.map((item) => {
      return item.start_year;
    });
    const countryData = filteredDataByCountry.map((item) => {
      return item.country;
    });
    const topicData = filteredDataByCountry.map((item) => {
      return item.topic;
    });
    const regionData = filteredDataByCountry.map((item) => {
      return item.region;
    });
    const insightData = filteredDataByCountry.map((item) => {
      return { item: item.insight, url: item.url };
    });

    if (!filteredDataByCountry) {
      return res.status(200).json({
        status: false,
        message: "No data Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Filtered Data by Country",
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
