const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const bodyPaser = require('body-parser')



// Creating one
router.post('/register', async (req, res) => {
    console.log(req.body)
    UserModel.create(req.body)
    //res.json({status: 'ok'})
    
  })





module.exports = router