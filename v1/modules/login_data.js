const mongoose = require("mongoose");
mongoose.set('useUnifiedTopology', true);

const log_in_data = mongoose.Schema({
    email : {
        type:String,
        required:true
    },
    pass:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('login_pass',log_in_data,);