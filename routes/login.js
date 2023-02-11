const express = require("express")
const router = express.Router()
let users=require("../usersFile.js")
router.get("/",(req,res)=>{
    //console.log(req.query)
    res.render("login",{title:"Login",text:"Don't",redirect:"register",err:req.query.err})
})
router.post("/form",(req,res)=>{
    let formUsername = req.body.username
    let formPassword = req.body.password
    let stored=false;
    for(let i=0;i<users.length;i++){
        temp=users[i]
        if(temp.username==formUsername&&temp.password==formPassword){
            //console.log("in database")
            stored=true
            res.redirect(`/main?id=${temp.id}`)
            break
        }
    }
    if(stored==false){
        res.redirect("/login?err=404")
        //res.render("login",{title:"Login",text:"Don't",redirect:"register",error:"Username and Password Not Found"})
    }
})
module.exports = router