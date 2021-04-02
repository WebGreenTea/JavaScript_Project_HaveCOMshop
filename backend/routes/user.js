const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const bodyPaser = require('body-parser')
var md5 = require('md5');


// Creating one
router.post('/register', async (req, res) => {
    console.log(req.body)
    req.body.password = md5(req.body.password)
    console.log(req.body.password)
    
    try{
        const response = await UserModel.create(req.body)
        console.log('user created successfully'+ response)
        res.json({status: 'ok'})
    }catch(error){
        console.log(error)
        return res.json({status:'error'})
    }
    
    
    //res.json({status: 'ok'})
    
  })





module.exports = router