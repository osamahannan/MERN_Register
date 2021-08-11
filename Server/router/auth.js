const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res)=> {
    res.send("This is Home Page from router js");
})

// Register
router.post('/register', async (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "please fill all the fields"})
    }

    try {
        const userExist = await User.findOne({email:email})

        
        if(userExist) {

            return res.status(422).json({error: "email already exist"})

        } else if(password != cpassword) {

            return res.status(422).json({error: "password not matched"})

        } else {

            const user = new User({name, email, phone, work, password, cpassword})
    
            await user.save();
            res.status(201).json({message: "user registerd successfully"})
        }

    }
    catch (err) {
        console.log(err);
    }
    
})

//signIn
router.post('/signin', async (req, res) => {
    
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error: "please fill all the details"})
        }

        const userLogin = await User.findOne({email:email});

        if(userLogin) {

            const isMatch = await bcrypt.compare(password, userLogin.password);
            const token = await userLogin.generateAuthToken();
            // console.log(token);

            if(!isMatch) {
    
                res.status(400).json({error: "Invalid Credentials pass"})
    
            } else {
                res.json({message: "user signIn successful"})
            }
        } else {
            res.status(400).json({error: "Ïnvalid Credentials"})
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;