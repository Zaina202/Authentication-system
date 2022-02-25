const express=require('express');
const mysql=require('mysql');

const app=express();

var connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"signup_db",
    port:"3306"

})
connection.connect((err)=>{
    if(err){
        throw err
    }else{
        console.log("connected")
    }
})
connection.query('CREATE TABLE users(First_NAME VARCHAR(255) NOT NULL,Last_NAME VARCHAR(255) NOT NULL, Email VARCHAR(255) NOT NULL, Password VARCHAR(255) NOT NULL,Confirm_Password VARCHAR(255) NOT NULL)',(err,rows)=>{
    if(err){
               throw err;
            }else{
                console.log('data set bois');
                 console.log(rows);
            }
})

const port=process.env.PORT||4000;
app.listen(port);

console.log("APP is listening on port"+port)
