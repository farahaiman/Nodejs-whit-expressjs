const express = require("express");
const path = require("path");
const app = express();


//
// app.get("/",function(req,res){
//     res.write("<h5>hello from  fun</h5>")

//     res.send();
//     // res.write("<h5>hello from  fun</h5>")

// });

//  middleware
  console.log(path.join(__dirname, "/public"));
const staticPath = path.join(__dirname,"/public");
app.use(express.static(staticPath));
app.get("/",(req,res)=>{
    

    res.send("hello paknode")
    

});


app.listen(5000,function(){
    console.log("the server up 500")
});