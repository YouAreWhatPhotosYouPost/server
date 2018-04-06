const mongoose = require('mongoose')
const Schema = mongoose.Schema

let historySchema = mongoose.Schema({
    image: {
        type: Schema.Types.ObjectId,
        ref: "images"
    },
    quote: {
        type: Schema.Types.ObjectId,
        ref: "quotes"
    },
    music: [{
        type: Schema.Types.ObjectId,
        ref: "musics"
    }],
}, {
    timestamps: true
})

let history = mongoose.model('history', historySchema)

module.exports = history