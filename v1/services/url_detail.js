const url_scheme = require('../modules/url_table')

exports.set_url = async function(_url,_data,next){
    //console.log(_url,_data)
    let newContacts = new url_scheme({
        url : _url,
        scheme : _data.scheme,
        host : _data.host,
        path : _data.path,
        query : _data.query
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

exports.get_all_url = async function(data){
    url_scheme.find((err,res)=>{
        if (err){
            data(err,null)
        }else{
            data(null,res)
        }
    })
}
