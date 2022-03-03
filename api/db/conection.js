// mongoose conection
const mongoose = require('mongoose')
require('dotenv').config()

const conection = () => {
    mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Conectado a la base de datos'))
    .catch(err => console.log(err))
}

module.exports = conection