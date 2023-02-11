const express = require("express")
const router = express.Router()
let users=require("../usersFile.js")
router.get("/",(req,res)=>{
    res.render("login",{title:"Register",text:"Already",redirect:"login",err:req.query.err})
})
router.post("/form",(req,res)=>{
    //console.log(users.includes({username:req.body.username,password:req.body.password}))
    for(let i=0;i<users.length;i++){
        let user=users[i]
        if(user.username==req.body.username){
            console.log("taken")
            res.redirect("/register?err=409")
        }else{
            let id = users.length
            users.push({id:id,username:req.body.username,password:req.body.password})
            res.redirect(`../main?id=${id}`)
        }
    }
    
    
})
module.exports = router