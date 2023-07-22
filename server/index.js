const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
// const cors = require("cors");
const cookieParser = require('cookie-parser');
const app= express();
app.use(cookieParser());
// app.use(require('cookie-parser'));

// Allow requests from 'https://mern-frontend-cyan.vercel.app'
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://mern-frontend-cyan.vercel.app');
    next();
  });
  

dotenv.config({path:'./config.env'});

app.get('/', (req,res) =>{
    res.send(`Hello World.`)
});
// for connection using mongoose
require('./db/conn');

app.use(express.json());

// app.use(cors({
//     origin:"*"
// }))

// for routing using express
app.use(require('./router/auth'));
// const User = require('./model/userSchema');

const PORT = process.env.PORT;
// const DB = 'mongodb+srv://megh:Ban102002@cluster0.hmivwqh.mongodb.net/mernstack';


// const middelware = (req,res,next) =>{
//     console.log(`Hello Middelware.`)
//     next();
// }


// if(process.env.NODE_ENV === "production"){

//     app.use(express.static("client/build"));

//     app.get("*",(req,res) => {
//         res.sendFile(path.resolve(__dirname,"client","build","index.html"));
//     })
// }

// app.get('/about',middelware,(req,res)=>{
//     res.send(`About hello world`)
//     // console.log(`about..`)
// })
// app.get('/contact',middelware,(req,res)=>{
//     res.send(`contact hello world`)
// })
// app.get('/home',(req,res)=>{
//     res.send(`home hello world`)
    
// })

app.listen(PORT, () =>{
    console.log(`Server is running on ${PORT}.`)
})