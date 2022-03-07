const { Router } = require('express')
const eventsHandler = require('../controllers/events')

const router = Router()

router.get('/:username', eventsHandler)

module.exports = router
