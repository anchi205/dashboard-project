const mongoose = require('mongoose');

const Schema = mongoose.Schema; 
const analyticSchema = new Schema({
    end_year: String,
    intensity: Number,
    sector: String,
    topic: String,
    insight: String,
    url: String,
    region: String,
    start_year: String,
    impact: String,
    added: String,
    published: String,
    country: String,
    relevance: Number,
    pestle: String,
    source: String,
    title: String,
    likelihood: Number
});

// Compile model from schema
const Analytics = mongoose.model("Analytics",analyticSchema); 
module.exports = Analytics;