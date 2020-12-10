const express = require("express");
const router = express.Router();
const {get_data,all_url} = require('../controller/url_edit')

router.get('/',(req,res)=>{
    res.render('v1/public/html/get_url_page.html',{data :{scheme:'',host:'',path:'',query:''}})
})

router.post('/',get_data,(req,res)=>{
    //console.log(req.body.find_url)
    res.render('v1/public/html/get_url_page')
})

router.get('/pre_url',all_url,(req,res)=>{

})

module.exports = router;