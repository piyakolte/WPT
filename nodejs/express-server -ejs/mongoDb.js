try{

const mongo =require('mongodb');
const MongoClient=mongo.MongoClient         //constructor


const url ="mongodb://0.0.0.0:27017/"


const client =new MongoClient(url)

const database=client.db("persondb1")      //database object

const personCollection=database.collection("person")
const employeeCollection=database.collection("employee")

module.exports={personCollection,employeeCollection,database}

}
catch(err)
{
    console.error(err)
}