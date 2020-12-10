const {set_url,get_all_url} = require('../services/url_detail')

exports.get_data = (req,res,next)=>{
    var _url = req.body.find_url
    //console.log(_url)
    var data = _url.split('://')
    var _schema = data[0]
    data = data[1].split('.com')
    var _host = data[0]
    data = data[1].split('?')
    if (data[0]){
        var _path = data[0]
    }else{
        var _path = 'null'
    }
    if (data[1]){
        var _query = data[1]
    }else{
        var _query = 'null'
    }

    var _data = {scheme:_schema,host:_host,path:_path,query:_query} 

    set_url(_url,_data,(err,res_data)=>{
        if(err){
            res.send(err)
        }else{
            //console.log(res_data)
            res.render('v1/public/html/get_url_page.html',{data :{scheme:_schema,host:_host,path:_path,query:_query}})
        }
    })
}

exports.all_url = (req,res,next)=>{
    
    get_all_url((err,data)=>{
        if (err){
            res.send(err)
        }else{
            //console.log(data)
            res.render('v1/public/html/get_all_url.html',{details:data})
        }
    })
}