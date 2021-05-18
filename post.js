// const express = require("express");
// const app = express();
// app.use(express.json());

// var students= [
//     {id: 1,name: "farah"},
//     {id:2 ,name: "aiman"},
//     {id: 3,name: "qazi"}
// ];
// app.get("/",(req,res)=>{
//     console.log("student get lists")
//     res.send("get student list"+ JSON.stringify(students))
// });

// app.post("/student",(req,res)=>{
    
//   var student ={
//       id : students.length +1, 
//       name: req.body.name  
      
//   } 
//   students.push(student)
//   console.log("the current student are" +students.length)
//     res.send("student list ")
    

// });
// app.listen(8000,function(){
//     console.log("the server up 8000")
// });