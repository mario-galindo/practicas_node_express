var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
var app = express();

//Para Servir rutas estaticas
app.use("/public",express.static('public'));

//Para manejar los datos enviado desde la vista por HTTP
app.use(bodyParser.json());     //Para peticiones aplication/json
app.use(bodyParser.urlencoded({extended:true}));

//Motor de Vistas
app.set("view engine","jade");

app.get("/",function(req,res){
  res.render("index");
})

app.get("/login",function(req,res){

  User.find(function(err,doc){
    console.log(doc);
    res.render("login");
  });

})

app.post("/users",function(req,res){
  var user = new User({email:req.body.email, password:req.body.password});

  user.save(function(){
    res.send("Guardamos tus datos!!!");
  });

})

app.listen(3000);
