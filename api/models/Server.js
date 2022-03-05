const express = require('express')
const cors = require('cors')
const fileupload = require('express-fileupload')
const conection = require('../db/conection')

const facts = []
const clients = []

class Server {
  constructor () {
    this.app = express()

    this.PORT = process.env.PORT || 5000
    this.paths = {
      events: '/events',
      facts: '/fact',
      status: '/status',
      uploads: '/uploads',
      login: '/login'
    }

    this.dbconnect()

    this.middlewares()

    this.routes()
  }

  dbconnect () {
    conection()
  }

  middlewares () {
    this.app.use(express.static('../frontend-local-storage/build'))
    this.app.use(fileupload())
    this.app.use(express.json())
    this.app.use(cors())
  }

  routes () {
    this.app.use(this.paths.events, require('../routes/events'))
    this.app.use(this.paths.facts, require('../routes/fact'))
    this.app.use(this.paths.status, require('../routes/status'))
    this.app.use(this.paths.uploads, require('../routes/uploads'))
    this.app.use(this.paths.login, require('../routes/login'))
  }

  listen () {
    this.app.listen(this.PORT, () => console.log(`Server running on port ${this.PORT}`))
  }
}

module.exports = { Server, facts, clients }
