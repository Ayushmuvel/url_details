const mongoose = require("mongoose");
const {mongo_url} = require('./sys_vari')

//connect to mongooseDB
const connectBD = async function(){
    console.log('connectig to MongoDB')
    await mongoose.connect(mongo_url,{useNewUrlParser: true,useUnifiedTopology: true });
    console.log('connected to MongoDB')
}
module.exports  = connectBD;