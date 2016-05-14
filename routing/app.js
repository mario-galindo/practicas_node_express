var express = require("express");

var app = express();

app.set("view engine","jade");

//HTTP es el protocolo por medio del cual se hacen la peticiones
//Verbos HTTP => GET / POST / PUT / PATCH / OPTIONS /HEADERS / DELETE
//Cuando accedemos a una url la peticion por defaul es GET
//Arquitectura REST

app.get("/",function(req,res){
  res.render("index");
})

app.post("/",function(req,res){
  res.render("form");
})

app.get("/algo",function(req,res){
  res.render("form");
})

app.get("/:nombre",function(req,res){
  res.render("form",{nombre: req.params.nombre});
})

app.listen(3000);
