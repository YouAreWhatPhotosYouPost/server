const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const quoteSchema = new Schema({
    author: String,
    quotes: String
})

const Quote = mongoose.model('Quote', quoteSchema);

module.exports = Quote;