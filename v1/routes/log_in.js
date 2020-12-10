const express = require("express");
const router = express.Router();

const {check_login,create_new_log,all_login_details} = require('../controller/login_get_id')

router.get('/',(req,res)=>{
    res.render('v1/public/html/login_page')
})

router.post('/',check_login,(req,res)=>{
    //console.log(req.body)
})

router.get('/get_id',all_login_details,(req,res)=>{
    res.render('v1/public/html/get_login_id')
})

router.get('/create',(req,res)=>{
    res.render('v1/public/html/new_log_in')
})

router.post('/create',create_new_log,(req,res)=>{
    //console.log(req.body)
    res.render('v1/public/html/login_page')
})

module.exports = router;