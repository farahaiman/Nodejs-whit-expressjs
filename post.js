const express = require("express");
const app = express();
app.use(express.json());

var students= [
    {id: 1,name: "farah"},
    {id:2 ,name: "aiman"},
    {id: 3,name: "qazi"}
];

app.post("/student",(req,res)=>{
    
  var student ={
      id : students.length +1, 
      name: req.body.name
  }
    res.send("student list +1")
    

});
app.listen(5000,function(){
    console.log("the server up 500")
});