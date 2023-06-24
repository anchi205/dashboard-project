const Analytics = require("../models/analytic_model");

module.exports = {
  async getData(req, res) {
    const topicName = req.query.topicName;
    const filteredDataByTopic = await Analytics.find({ topic: topicName });

    const relevancedata = filteredDataByTopic.map((item) => {
      return item.relevance;
    });
    const likelihooddata = filteredDataByTopic.map((item) => {
      return item.likelihood;
    });
    const intensitydata = filteredDataByTopic.map((item) => {
      return item.intensity;
    });
    const topicData = filteredDataByTopic.map((item) => {
      return item.topic;
    });
    const impactData = filteredDataByTopic.map((item) => {
      return item.impact;
    });
    const countryData = filteredDataByTopic.map((item) => {
      return item.country;
    });
    const regionData = filteredDataByTopic.map((item) => {
      return item.region;
    });
    const insightData = filteredDataByTopic.map((item) => {
      return { item: item.insight, url: item.url };
    });

    if (!filteredDataByTopic) {
      return res.status(200).json({
        status: false,
        message: "No data Found",
      });
    } else {
      return res.status(200).json({
        status: true,
        message: "Filtered Data by Topic",
        data: {
          relevance: relevancedata,
          likelihood: likelihooddata,
          intensity: intensitydata,
          topic: topicData,
          impact: impactData,
          country: countryData,
          region: regionData,
          insight: insightData,
        },
      });
    }
  },
};
