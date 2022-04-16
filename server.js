//Server
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
// Dependencies
const path = require('path')
const dbConn = require('./db/db.js')


//paths
app.use(express.static(path.join(__filename, 'public')))

app.get('/', (req , res) =>{
    res.sendFile('index.html')
})

app.listen(PORT, () =>{
    console.log(`Server listening on PORT ${PORT}`)
})