const dotenv = require('dotenv'); 
const express = require('express');
const app = express();

// middelwares
dotenv.config({ path:'./config.env'});
require('./db/conn');
app.use(express.json());
// const User = require('./model/userSchema');
const PORT = process.env.PORT;
app.use(require('./router/auth'));


const middelware = (req, res, next) => {
    console.log('hello my middelware')
    next();
}

// app.get('/', (req, res)=> {
//     res.send("This is Home Page");
// })

app.get('/about', middelware, (req, res)=> {
    res.send("This is About Page");
})

app.get('/contact', (req, res)=> {
    res.send("This Contact Page");
})

app.get('/signin', (req, res)=> {
    res.send("This is Login Page");
})

app.get('/signup', (req, res)=> {
    res.send("This is SignUp page");
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})