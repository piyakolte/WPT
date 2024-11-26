const express=require("express")
const router=express.Router()
const mysql=require("mysql2")
const path=require('path')
const basePath=path.join(process.cwd(),"pages")

const{getConnection}=require("../db")

router.get('/', function (req, res) {
    res.sendFile (path.join(basePath,"login.html"))
  
})

router.get('/list', function (req, res) {
    res.send ("list of persons....")
  
})


router.post('/', function (req, res) {
    const data=req.body
    const sql=`select * from person where email='${data.email}' and password ='${data.password}'`
  try{
    const c=getConnection()
    c.connect(function(err){
      if(err)throw(err)
      console.log("Connection successful..")
  
      c.query(sql,function(err,result){
        if(err)throw err
        console.log(result)
        if(result.length==1){
          console.log("login..")
          res.json({login:true,msg:"Person logged-in",person:result[0]})
        }
        else{
          res.json({login:false,msg:"Person not logged-in"})
          console.log("not login..")
        }
      })
    })
  }
  catch(err)
  {
    res.sendFile(path.jpoin(basePath,"login.html"))
  }
  
    
    
  })

// router.get()
// router.post()
// router.delete()
// router.put()

// console.log(module)
module.exports=router
// console.log(module)