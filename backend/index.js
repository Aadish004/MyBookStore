const express =  require('express');
const PORT = process.env.PORT || 2000;
const app = express();
const bookRouter = require('./routes/books')
require('dotenv').config();
const mongoose = require('mongoose');
// app.get("/",(req,res)=>{
//     console.log(req)
//     return res.status(201).send("welcome to my book store")
// })

app.listen(PORT ,()=>{
    console.log(`app is listining : ${PORT}`)
})

app.use('/books',bookRouter)

mongoose.connect(process.env.DB_CONNECTION_URL).then(() =>{
    console.log("mongoDb is connected to database")
}).catch((error) =>{
    console.log(error)
})