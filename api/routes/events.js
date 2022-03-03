const { Router } = require('express')
const eventsHandler = require('../controllers/events')

const router = Router()

router.get('/', eventsHandler)

module.exports = router