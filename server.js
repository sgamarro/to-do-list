//Server
const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const flash = require('express-flash')
var logger = require('morgan');
const session = require('express-session')
const PORT = process.env.PORT || 5000
// Dependencies
const path = require('path')
const dbConn = require('./db/db.js')
const indexRoute = require('./routes/index.js')



//paths
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(logger('dev'))
app.use(session({
    cookie: {
      secure:true, 
      maxAge: 60000 },
    store: new session.MemoryStore,
    saveUninitialized: true,
    resave: 'true',
    secret: 'secret'
}))
//views
app.use(flash())

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', indexRoute)


app.listen(PORT, () =>{
    console.log(`Server listening on PORT ${PORT}`)
})