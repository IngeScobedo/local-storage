const { Schema, model } = require('mongoose')

const FileSchema = new Schema({
    content: {
        type: Object,
        required: true
    }
})

const File = model('File', FileSchema)

module.exports = File