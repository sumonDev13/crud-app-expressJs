const express = require('express')
const router = express.Router()
const {
  getServices,
  setServices,
} = require('../controller/serviceController')

//const { protect } = require('../middleware/authMiddleware')

router.route('/').get(getServices).post(setServices)


module.exports = router