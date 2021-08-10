const express = require('express');
const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res)=> {
    res.send("This is Home Page from router js");
})


router.post('/register', async (req, res) => {

    const {name, email, phone, work, password, cpassword} = req.body;

    if(!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({error: "please fill all the fields"})
    }

    try {
        const userExist = await User.findOne({email:email})

        
        if(userExist) {
            return res.status(422).json({error: "email already exist"})
        }

        const user = new User({name, email, phone, work, password, cpassword})

        await user.save();
        res.status(201).json({message: "user registerd successfully"})

    }
    catch (err) {
        console.log(err);
    }
    
})

router.post('/signin', async (req, res) => {
    
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({error: "please fill all the details"})
        }

        const userLogin = await User.findOne({email:email});
        console.log(userLogin);

        if(!userLogin) {
            res.status(400).json({error: "user error"})
        } else {
            res.json({message: "user login successful"})
        }

    } catch (err) {
        console.log(err);
    }
})

module.exports = router;