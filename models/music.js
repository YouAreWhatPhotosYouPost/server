const mongoose = require('mongoose')

// let musicSchema = mongoose.Schema({
//   artistName: String,
//   trackName: String,
//   artistViewUrl: String,
//   trackViewUrl: String,
//   previewUrl: String
// },{
//   timestamps: true
// })

let musicSchema = mongoose.Schema({
  musicRecommendation: Array
},{
  timestamps: true
})

music = mongoose.model('music', musicSchema)

module.exports = music;
