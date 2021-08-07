const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send("This is Home Page");
})

app.get('/about', (req, res)=> {
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

app.listen(3000, () => {
    console.log('server is running at port 3000');
})