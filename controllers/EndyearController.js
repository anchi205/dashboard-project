const Analytics = require("../models/analytic_model");

module.exports = {
  async getData(req, res) {
    const endyearName = req.query.endyearName;
    const filteredDataByEndyear = await Analytics.find({
      end_year: endyearName,
    });

    const intensitydata = filteredDataByEndyear.map((item) => {
      return item.intensity;
    });
    const likelihooddata = filteredDataByEndyear.map((item) => {
      return item.likelihood;
    });
    const relevancedata = filteredDataByEndyear.map((item) => {
      return item.relevance;
    });
    const startyearData = filteredDataByEndyear.map((item) => {
      return item.start_year;
    });
    const countryData = filteredDataByEndyear.map((item) => {
      return item.country;
    });
    const topicData = filteredDataByEndyear.map((item) => {
      return item.topic;
    });
    const regionData = filteredDataByEndyear.map((item) => {
      return item.region;
    });
    const insightData = filteredDataByEndyear.map((item) => {
      return { item: item.insight, url: item.url };
    });

    if (!filteredDataByEndyear) {
      return res.status(200).json({
        status: false,
        message: "No data Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Filtered Data by Endyear",
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
