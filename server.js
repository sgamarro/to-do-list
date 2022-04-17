//Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
// Dependencies
const path = require('path')
const dbConn = require('./db/db.js')



//paths
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname, './public/index'))
})

app.listen(PORT, () =>{
    console.log(`Server listening on PORT ${PORT}`)
})