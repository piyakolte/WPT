const mysql=require("mysql2")


const getConnection=()=>
    {
      return con =  mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "persondb1"
      });
      
    }

    module.exports={getConnection}
    