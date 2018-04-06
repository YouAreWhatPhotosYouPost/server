const mongoose = require('mongoose')

const Schema = mongoose.Schema

let userSchema = new Schema ({
  name: String,
  email: String,
  history: [{
    type: Schema.Types.ObjectId,
    ref: 'History'
  }]
})

let user = mongoose.model('User', userSchema)

module.exports = user