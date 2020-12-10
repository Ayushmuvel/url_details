const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const connectDB = require('./config/mongo_con') //connect to mongoes DB
connectDB()

//const {conn_port} = require('./config/sys_vari');

//adding express 
var app = express();
app.use(express.static('v1/public'));

//adding middle wear - cors
app.use(cors());

//body parsera
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);

// calling routes files
var log_in = require('./v1/routes/log_in');
var get_url = require('./v1/routes/url');

// redirecting routes
app.use('/login',log_in) 
app.use('/url',get_url) 

// end point 
app.get('/',(req,res)=>{
    res.send('it work')
  })
var conn_port = process.env.PORT
// defining port to listen
app.listen(conn_port||3000,()=>{
    console.log("server started at port "+ conn_port||3000);
  })
