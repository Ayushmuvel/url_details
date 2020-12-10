const {get_login_ids,create_login_id} = require('../services/login_data')

exports.check_login = async(req,res,next) => {
    var _email = req.body.email_id
    var _pass = req.body.password
    //console.log(email,pass)
    await get_login_ids((err,users)=>{
        if (err){
            res.send(err)
        }
        else{
            //console.log(users)
            var user
            for(i = 0;i<users.length;i++){
                if (users[i].email == _email)
                {
                   user = users[i]
                }
            }
            if(user){
                if(user.pass == _pass){
                    res.redirect('/url')
                }else
                res.send('wrong password')
            }else
            res.send('user not found')
        }
    })
    
}

exports.create_new_log = (req,res,next) =>{
    var email = req.body.email_id
    var pass = req.body.password
    //console.log(email,pass)
    create_login_id(email,pass,(err)=>{
        if (err){
            res.send(err)
        }
        else{
            res.redirect('/login')
        }
    })
}

exports.all_login_details = (req,res,next)=>{
    
    get_login_ids((err,details)=>{
        if(err){
            res.send(err)
        }else{
            //console.log(details)
            res.render('v1/public/html/get_login_id.html',{details:details})
        }
    })
}