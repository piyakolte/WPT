const express=require("express")
const router=express.Router()
const mysql=require("mysql2")
const path=require('path')
const basePath=path.join(process.cwd(),"pages")
const {getConnection}=require("../db")

router.get('/', function (req, res) {
    res.sendFile (path.join(basePath,"register.html"))
  
})
router.post('/', function (req, res) {
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
    console.error(err)
  res.sendFile (path.join(basePath,"register.html"))
}
})

module.exports=router