const mongoose = require('mongoose');
const config = require('./config');
const dbName = 'exam-prep-tutorials';

module.exports = () => {
    return mongoose.connect(config.dbURL + dbName, { useNewUrlParser: true, useUnifiedTopology: true },
        console.log('***Database is READY!***'));
};