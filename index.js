require('dotenv').config();
const express=require('express');
const connectDB=require('./config/db');

const app=express();

connectDB();
app.use(express.json());
app.use(express.urlencoded({extended:true}))


app.listen(3000,(req,res)=>{
    console.log('server started')
})