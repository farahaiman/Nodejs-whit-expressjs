// const express = require("express");
// const path = require("path");
// const app = express();


//
// app.get("/",function(req,res){
//     res.write("<h5>hello from  fun</h5>")

//     res.send();
//     // res.write("<h5>hello from  fun</h5>")

// });

//  middleware
//   console.log(path.join(__dirname, "/public"));
// const staticPath = path.join(__dirname,"/public");
// app.use(express.static(staticPath));
// app.get("/",(req,res)=>{
    

    // res.send("hello paknode")
    

// });


// app.listen(5000,function(){
//     console.log("the server up 500")
// });

//post
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
//   console.log("the current student are" +students.length);
//     res.send("student list ");
    

// });
// app.listen(8000,function(){
//     console.log("the server up 8000")
// });


// put request stand for update if u want to change samne record then use it 
const express = require("express");
const app = express();
app.use(express.json());


var students= [
    {id: 1,name: "Aliza"},
    {id:2 ,name: "aiman"},
    {id: 3,name: "hassan"}
];
app.get("/",(req,res)=>{
    console.log("student get lists")
    res.send("get student list"+ JSON.stringify(students))
});

app.post("/student",(req,res)=>{
    
  var student ={
      id : students.length +1, 
      name: req.body.name  
      
  } 
  students.push(student)
  console.log("the current student are" +students.length);
    res.send("student list ");
});
app.put("/student/:id",(req,res)=>{

 var student = students.find(s => s.id === parseInt(req.params.id)) //The parseInt() function parses a string and returns an integer.
 student.name = req.body.name
 res.send("update list.")
 console.log(req.params.id);
 res.send("okay id is resive") 
})

//delet request 
app.delete("/student/:id",(req,res)=>{

   var student = students.find(s => s.id === parseInt(req.params.id)) //The parseInt() function parses a string and returns an integer.
   var index = students.indexOf(student);
   students.splice(index,1)
   res.send("records is deleted")
})


app.listen(4000,function(){
    console.log("the server up 5000")
});