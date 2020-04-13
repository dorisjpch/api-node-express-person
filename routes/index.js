const express = require('express')
const router = express.Router()

router.use('/api/people', require('./routes'))

module.exports = router