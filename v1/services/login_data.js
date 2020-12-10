const login_data = require('../modules/login_data')

exports.get_login_ids = (next)=>{
    login_data.find((err,users)=>{
        if(err){
            next(err,null)
        }
        else{
            next(null,users)
        }
    })
}

exports.create_login_id = async(email,pass,next)=>{
    //console.log(email,pass)
    let newContacts = new login_data({
        email : email,
        pass : pass
    })

    await newContacts.save(async(err,res)=>{
        if(err){
            next(err)
        }
        else{
            console.log(res)
            next(null)
        }
    })
}