const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    ticketId: Number,
    topics: String,
    feedbackList: {
        feedId: Number,
        respondent: String,
        feedback: String
    }
})

module.exports = mongoose.model('users', customerSchema);