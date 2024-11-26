const express=require ("express")

const app=express()
app.set("view engine","ejs")

app.get("/",(req,res)=> {
  res.render("home",{name:"hamara ghar"})
})
 app.get("/list",(req,res)=>{
    const guests=[{
        name:"poonam",
        mobile:"9876543210",
       food:true
     },
     {
         name:"rakesh",
         mobile:"1234567890",
        food:false
     }
 ]
 res.render("welcome",{guests})
 })


app.listen(3000,"localhost",()=>{
    console.log("http://localhost:3000")
})