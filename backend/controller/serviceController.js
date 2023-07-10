const asyncHandler = require('express-async-handler')

const Service =require('../model/serviceModel')

const getServices = asyncHandler (async ()=>{
    const services = await Service.find()
    res.status(200).json(services)
})

const setServices = asyncHandler(async (req, res) => {
    if (!req.body.text) {
      res.status(400)
      throw new Error('Please add a text field')
    }
  
    const service = await Service.create({
      text: req.body.text,
      user: req.user.id,
    })
  
    res.status(200).json(service)
  })
  
  module.exports = {
    getServices,
    setServices,
  }