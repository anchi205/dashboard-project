const Analytics = require("../models/analytic_model");

module.exports = {
  async getData(req, res) {
    const pestleName = req.query.pestleName;
    const filteredDataByPestle = await Analytics.find({ pestle: pestleName });

    const intensitydata = filteredDataByPestle.map((item) => {
      return item.intensity;
    });
    const likelihooddata = filteredDataByPestle.map((item) => {
      return item.likelihood;
    });
    const relevancedata = filteredDataByPestle.map((item) => {
      return item.relevance;
    });
    const startyearData = filteredDataByPestle.map((item) => {
      return item.start_year;
    });
    const countryData = filteredDataByPestle.map((item) => {
      return item.country;
    });
    const topicData = filteredDataByPestle.map((item) => {
      return item.topic;
    });
    const regionData = filteredDataByPestle.map((item) => {
      return item.region;
    });
    const insightData = filteredDataByPestle.map((item) => {
      return { item: item.insight, url: item.url };
    });

    if (!filteredDataByPestle) {
      return res.status(200).json({
        status: false,
        message: "No data Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Filtered Data by Pestle",
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
