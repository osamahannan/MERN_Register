const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const cookieParser = require('cookie-parser');


require('../db/conn');
router.use(cookieParser());
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

            return res.status(409).json({error: "email already exist"})

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
            res.cookie("jwtoken", token, {
                expires:new Date(Date.now() + 25892000000),
                httpOnly: true
            });

            if(!isMatch) {
    
                res.status(400).json({error: "Invalid Credentials pass"})
    
            } else {
                res.json({message: "user signIn successful"})
            }
        } else {
            res.status(400).json({error: "??nvalid Credentials"})
        }

    } catch (err) {
        console.log(err);
    }
})

// About Page
router.get('/about', authenticate, async (req, res)=> {
    res.send(req.rootUser);
})

router.get('/getData', authenticate, async (req, res)=> {
    res.send(req.rootUser);
})

// Contact page
router.post('/contact', authenticate, async (req, res)=> {
    
    try {

        const {name, email, phone, message } = req.body;

        if(!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({ error: "please fill the contact form"});
        }

        const userContact = await User.findOne({_id: req.userID})

        if(userContact) {

            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();

            res.status(201).json({ message: "User Contact Successful"});
        }

    } catch (error) {
        console.log(error);
    }
})

// Logout Page
router.get('/logout', (req, res)=> {
    res.clearCookie('jwtoken', { path: '/'});
    res.status(200).send("User Logout Successful");
})

module.exports = router;