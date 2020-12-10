const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);

const log_in_data = mongoose.Schema({
    url : {
        type:String,
        required:true
    },
    scheme : {
        type:String,
        required:true
    },
    host : {
        type:String,
        required:true
    },
    path : {
        type:String,
        required:true
    },
    query : {
        type:String,
        required:true
    }
});

module.exports = mongoose.model('url_data',log_in_data,);