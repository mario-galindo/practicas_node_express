var express = require("express");
var bodyParser = require("body-parser");
var User = require("./models/user").User;
//var session = require("express-session");
var cookieSession = require("cookie-session");
var router_app = require("./routes_apps");
var session_middleware = require("./middlewares/session")

var app = express();

//Para Servir rutas estaticas
app.use("/public",express.static('public'));

//Para manejar los datos enviado desde la vista por HTTP
app.use(bodyParser.json());     //Para peticiones aplication/json
app.use(bodyParser.urlencoded({extended:true}));

/*
app.use(session({
    secret:"123byuhbsdah12ub",
    resave:false,
    saveUninitialized:false
}));*/

app.use(cookieSession({
    name:"session",
    keys:["llave-1","llave-2"]
}))

//Motor de Vista
app.set("view engine","jade");

app.get("/",function(req,res){
  console.log(req.session.user_id);
  res.render("index");
})

app.get("/signup",function(req,res){

  User.find(function(err,doc){
    console.log(doc);
    res.render("signup");
  });

})

app.get("/login",function(req,res){
    res.render("login");
})


app.post("/users",function(req,res){

  var user = new User({email:req.body.email,
                       password:req.body.password,
                       password_confirmation: req.body.password_confirmation,
                       username:req.body.username
                     });

  console.log(user.password_confirmation);

  user.save(function(err){
    if (err) {
      console.log(String(err))
    }
    res.send("Guardamos tus datos!!!");
  });

})


app.post("/sessions",function(req,res){
    User.findOne({email:req.body.email, password:req.body.password},function(err,doc){

        //res.send("Se encontro usuario");
        req.session.user_id = doc._id;
        res.redirect("app");

    })
})


app.use("/app",session_middleware);
app.use("/app",router_app);

app.listen(3000);
