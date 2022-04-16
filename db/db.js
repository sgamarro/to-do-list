const mysql = require('mysql')
var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '',
    database: ''

})

connection.connect((err) => {  
    if(!!err){
        console.log (err)
    }else{
        console.log('Connected to db');
    }

})

module.exports = connection