const express = require("express");
const router = express.Router();
const dbConn = require('../db/db')

router.get('/', function (req, res, next) {
    
        dbConn.query('SELECT * FROM to_do ORDER BY id', (err,rows) =>{
            if(err){
                req.flash('error', err)
                res.render('index', {data:''})
            }else{
                res.render('index',{data:rows});
            }
        })
    
})

module.exports = router;