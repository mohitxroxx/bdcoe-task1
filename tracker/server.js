const express=require('express')
const dotenv=require('dotenv')
const morgan=require('morgan')
const colors=require('colors')
const connectDB = require('./config/db')

dotenv.config({path:'./config/config.env'})

connectDB();
const transactions=require('./routes/transactions')
const app=express();

app.use(express.json());

app.use('/api/v1/transactions',transactions)

const PORT=process.env.PORT||5000;

app.listen(PORT,console.log('ServerA Running fine in',process.env.NODE_ENV.yellow,"mode, on PORT",PORT.yellow));