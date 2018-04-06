const mongoose = require('mongoose')
const Schema = mongoose.Schema

let historySchema = mongoose.Schema({
    image: {
        type: Schema.Types.ObjectId,
        ref: "image"
    },
    quote: {
        type: Schema.Types.ObjectId,
        ref: "Quote"
    },
    music: {
        type: Schema.Types.ObjectId,
        ref: "music"
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {
    timestamps: true
})

let history = mongoose.model('history', historySchema)

module.exports = history