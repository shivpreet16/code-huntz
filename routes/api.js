const express = require('express')
const router = express.Router()

const getAnswer = require('../controllers/api.js')

router.post('/',getAnswer)

module.exports = router