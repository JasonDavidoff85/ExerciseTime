const config = require('../config.json');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || config.connectionString, { useNewUrlParser: true });

module.exports = {
    Exercise: require('../models/exercise.model'),
};