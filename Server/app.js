const dotenv = require('dotenv'); 
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({ path:'./config.env'});

const DB = process.env.DATABASE; 
const PORT = process.env.PORT;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('connection successful');
}).catch((e) => {
    console.log('no connection')
});

// middelware

const middelware = (req, res, next) => {
    console.log('hello my middelware')
    next();
}

app.get('/', (req, res)=> {
    res.send("This is Home Page");
})

app.get('/about', middelware, (req, res)=> {
    res.send("This is About Page");
})

app.get('/contact', (req, res)=> {
    res.send("This Contact Page");
})

app.get('/login', (req, res)=> {
    res.send("This is Login Page");
})

app.get('/signup', (req, res)=> {
    res.send("This is SignUp page");
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})