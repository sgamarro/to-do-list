const mysql = require('mysql')
require('dotenv').config()

var connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: process.env.SQL_KEY,
    database: 'todo_list'

})

connection.connect((err) => {  
    if(!!err){
        console.log (err)
    }else{
        console.log('Connected to db');
    }

})

module.exports = connection