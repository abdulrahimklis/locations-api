const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create location schema and model
const LocationSchema = new Schema({
    lon: {
        type: String
    },
    lat: {
        type: String,
    },
    alias: {
        type: String
    },
    category: {
        type: String
    }
});

const Location = mongoose.model('location', LocationSchema);

module.exports = Location;