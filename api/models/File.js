const { Schema, model } = require('mongoose')

const FileSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
})

const File = model('File', FileSchema)

module.exports = File
