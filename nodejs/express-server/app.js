const express = require('express')
const app = express()
const path=require('path')
const cors=require("cors")
const mysql=require("mysql2")
const bodyparser=require("body-parser")
const loginRouter=require("./routers/login")  //       ./=current folder  //import
const registerRouter=require("./routers/register")
app.use(cors("http://localhost:3000"))   //middleware
app.use(bodyparser.json())//middleware

app.use("/login",loginRouter)       //
app.use("/register",registerRouter)  



const basePath=path.join(__dirname,"pages")

const getConnection=()=>
{
  return con =  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "persondb"
  });
  
}




app.get('/', function (req, res) {
    res.sendFile (path.join(basePath,"index.html"))
})

app.get('/about', function (req, res) {
    res.sendFile (path.join(basePath,"about.html"))
 
})

app.get('/contact', function (req, res) {
    res.sendFile (path.join(basePath,"contact.html"))
 
})


app.get('/register', function (req, res) {
    res.sendFile (path.join(basePath,"register.html"))
  
})
app.post('/register', function (req, res) {
    const data=req.body
    //console.log(data)
    try{
    const c=getConnection() //getConnection object
    c.connect(function(err){
      if(err) throw err
      console.log("Connection sucessfull...")
      const sql= `insert into person(name,mobile,password,email,gender) values('${data.name}','${data.mobile}','${data.password}','${data.email}','${data.gender}')`
      c.query(sql,function(arr,result){
        if(err) throw err
        if(result.affectedRows==1)
        {
          console.log("insert....")
         // res.sendFile (path.join(basePath,"register.html"))
        res.json({affectedRows:result.affectedRows,msg:"Person registered"})
        }
        else
        {
          //res.sendFile (path.join(basePath,"register.html"))
          res.json({affectedRows:o,msg:"Person not registered"})
        console.log(" not insert....")
        }
      })
    
    })
  
}catch(err){
  res.sendFile (path.join(basePath,"register.html"))
}
})
app.get('/*', function (req, res) {
    res.sendFile (path.join(basePath,"404page.html"))
  
})

app.listen(8000,"localhost",()=>{
    console.log("http://localhost:8000")
})