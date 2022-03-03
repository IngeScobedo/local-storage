const { Router } = require('express')
const addFact = require('../controllers/facts')
const router = Router()

router.post('/', addFact)

module.exports = router