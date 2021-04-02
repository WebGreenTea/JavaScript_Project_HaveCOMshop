const express = require('express')
const router = express.Router()
const UserModel = require('../models/user')
const bodyPaser = require('body-parser')
const md5 = require('md5');
const jwt = require('jsonwebtoken')

const JWT_SECRET = "kjhkjh*&^lkhlkh)(*)KLJHKHJG^%$kuhsdflsdfshbss"
// Creating one
router.post('/register', async (req, res) => {
    console.log(req.body)
    req.body.password = md5(req.body.password)
    console.log(req.body.password)

    try {
        const response = await UserModel.create(req.body)
        console.log('user created successfully' + response)
        res.json({ status: 'ok' })
    } catch (error) {
        return res.json({ status: 'error' })
    }
})
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await UserModel.findOne({ username }).lean()
    if (!user) {
        return res.json({ status: 'err', error: 'Invalid username or password' })
    }
    else if (user.password == md5(password)) {
        const token = jwt.sign({
            id: user._id,
            username: user.username
        }, JWT_SECRET
        )
        return res.json({status: 'ok',data: token})
    }
    else {
        return res.json({ status: 'err', error: 'Invalid username or password' })
    }
    //console.log(user);
})

router.post('/verify-token',async(req,res) =>{
    const token = req.body.token
    //console.log(req.body)
    const user = jwt.verify(token,JWT_SECRET)

    //console.log(user)
    return res.json({username: (user.username)})
})




module.exports = router