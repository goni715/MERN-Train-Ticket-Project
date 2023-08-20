//Basic Import
const express = require('express');
const app = new express();
const authRouter = require('./src/routes/AuthRoute');
const userRouter = require('./src/routes/UserRoute');
const varaRouter = require('./src/routes/VaraRoute')
const bogieRouter = require('./src/routes/BogieRoute')
const classRouter = require('./src/routes/ClassRoute');
const trainRouter = require('./src/routes/TrainRoute');
const dbConnect = require('./src/utility/dbConnect');


const bodyParser = require('body-parser');
const boolParser = require('express-query-boolean');

//Security Middleware Import
const rateLimit = require('express-rate-limit');
const helemet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const morgan = require("morgan");
const cors = require('cors');

//Database Library Import
const mongoose = require('mongoose');


//Security Middleware Implementation
app.use(morgan("dev"));
app.use(cors())
app.use(helemet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())
app.use(cors())

//RequestBodySizeIncrease//Body Parser Implementation
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
//boolean parser//req-query
app.use(boolParser());



//Request Rate Limit Implementation

const Limiter = rateLimit({
    windowMs: 15 * 60 * 1000,   //15 Minutes
    max: 300000000   //Limit each IP to 100 requests per windowMs
})
app.use(Limiter);



//MongoDB(mongoose) Atlas Database Connection
dbConnect();


// usage of routes
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/train', trainRouter)
app.use('/api/class', classRouter)
app.use('/api/bogie', bogieRouter)
app.use('/api/vara', varaRouter)





//Undefined Route
app.use('*',(req,res)=>{
    res.status(404).json({status:"Fail", data:"Route Not Found"});
});


module.exports=app;