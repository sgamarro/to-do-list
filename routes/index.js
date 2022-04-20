const express = require("express");
const router = express.Router();
const dbConn = require('../db/db')

router.get('/', function (req, res) {
    
        dbConn.query('SELECT * FROM to_do ORDER BY id', (err,rows) =>{
            if(err){
                req.flash('error', err)
                res.render('index', {data:''})
            }else{
                res.render('index',{data:rows});
            }
        })
    
})

router.post('/add', (req,res) =>{
    const data = req.body.chores
    let errors = false
    
    if(data.length === 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter name and author");
        // render to add.ejs with flash message
        res.render('/', {
            data:data
        })
    }

    if(!errors){
    dbConn.query('INSERT INTO to_do (chores) VALUES(?)', data, function(err, result) {
        //if(err) throw err
        if (err) {
            req.flash('error', err)

            // render to add.ejs
                res.redirect('/')
        } else {
            req.flash('success', 'Book successfully added');
            res.redirect('/');
        }
    })

}

})


module.exports = router;