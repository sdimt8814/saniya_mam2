import mysql2 from 'mysql2'
import { hostname } from 'os'

const db = mysql2.createPool({
    hostname : 'localhost',
    user : 'root',
    password : 'nafis',
    database : 'nafis'
})

console.log("database connected successfully ")

function executeQuery(){

    const crearteTable = 'create table mayank( name varchar(20) , rollno int PRIMARY KEY , course varchar(20))'

    const insertQuery = 'insert into mayank values( ? , ? , ? )'

     db.query(insertQuery,["mayank",16811 , "bca"],(err)=>{
        if(err){
            console.log("row  not created ", err)
        }else{
            console.log("row  created successfully ")
        }

    })

}

executeQuery();