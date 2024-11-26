try{

    const mongoose =require('mongoose');
    // const MongoClient=mongo.MongoClient         //constructor
    
    
    const url ="mongodb://0.0.0.0:27017/persondb1"
    
    
    const con=mongoose.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    con.then((result)=>
    {
      console.log(result)
      console.log("connection successful")
    }).catch((err)=>
    {
       console.erroe(err)
    })

    //models class/object

    const personSchema=new mongoose.Schema({
        name: String,
        gender: String,
        
        mobile:
        {type:String,
        unique:true},
        email:
        {type:String,
         unique:true},
        password:
        {type:String},

    })
    const PersonModel=mongoose.model("person",personSchema)
    

    
    module.exports={PersonModel}
    
    }
    catch(err)
    {
        console.error(err)
    }