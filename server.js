const express = require('express')
const path=require('path')
const app=express()
const PORT=3000
const ejs = require('ejs')

//Initialising Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

//Setting up Middleware
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json())
app.use(express.urlencoded())

//Starting the Server
app.listen(PORT,function(err){
    if(err) throw err
    console.log(`Server running at localhost:${PORT}`)
})

//Redirect to login page
app.get('/', function(req, res){
    res.redirect("/login")
})

//Set up Routers
let users=require("./usersFile.js")
const loginRouter = require("./routes/login")
app.use("/login",loginRouter)

const registerRouter = require("./routes/register")
app.use("/register",registerRouter)

const mainRouter = require("./routes/main")
app.use("/main",mainRouter)