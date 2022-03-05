const { Router } = require('express')
const uploads = require('../controllers/uploads')

const router = Router()

router.post('/', uploads)

module.exports = router
