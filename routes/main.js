const express = require("express")
const router = express.Router()
let users = require("../usersFile.js")

router.get("/",(req,res)=>{
    let id = req.query.id
    let username = users[id].username
    res.render("main",{username:username})
})

module.exports = router