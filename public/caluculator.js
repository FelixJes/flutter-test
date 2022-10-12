
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post('/',function(req , res){

 var num1 = Number(req.body.num1);
 var num2 = Number(req.body.num2);

 var result = num1 + num2


 res.send("Result is " + result);
});

app.get('/bmicalculator',function(req,res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req,res){
 var height = parseFloat(req.body.height); 
 var weight = parseFloat(req.body.weight);

  console.log(req.body.height);
  console.log(req.body.weight);


 var BMI =  weight / ((height/100) * (height/100));

  res.send("Your BMI value is " + BMI);
});

app.listen(3000, function(){
 console.log('sever started');
});

