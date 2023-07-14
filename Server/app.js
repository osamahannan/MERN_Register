const cors = require("cors");
const dotenv = require('dotenv');
const cookieparser = require("cookie-parser");
const express = require('express');
const app = express();
app.use(cors({ origin: "*" }));
app.options("*", cors());

// middelwares
// app.options("*", cors());
dotenv.config({ path: './config.env' });
require('./db/conn');
app.use(express.json());
app.use(cookieparser());
// const User = require('./model/userSchema');
const PORT = process.env.PORT;
app.use(require('./router/auth'));

// app.get('/about', (req, res)=> {
//     res.send("This is About Page");
// })

// app.get('/contact', (req, res)=> {
//     res.send("This Contact Page");
// })

app.get('/signin', (req, res) => {
    res.send("This is Login Page");
})

app.get('/signup', (req, res) => {
    res.send("This is SignUp page");
})

app.listen(PORT, () => {
    console.log(`server is running at port ${PORT}`);
})