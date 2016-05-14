var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use("/public",express.static('public'));
app.use(bodyParser.json());     //Para peticiones aplication/json
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","jade");

app.get("/",function(req,res){
  res.render("index");
})

app.get("/login",function(req,res){
  res.render("login");
})

app.post("/users",function(req,res){
  console.log("Contraseña: " + req.body.password)
  console.log("Contraseña: " + req.body.email)
  res.send("Recibimos tus datos");
})

app.listen(3000);
