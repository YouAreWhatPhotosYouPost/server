const mongoose = require('mongoose')
const Schema = mongoose.Schema

let imageSchema = mongoose.Schema({
    emotions: Schema.Types.Mixed,
    urlImage: {
        type: String,
        required: [true, 'Link required']
    }
}, {
    timestamps: true
})

let image = mongoose.model('images', imageSchema)

module.exports = image