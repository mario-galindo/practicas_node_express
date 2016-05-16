var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/fotos");

/*
  String
  Number
  Date
  Buffer
  Boolean
  Mixed
  Objectid
  Array
*/

var userSchema = {
  name:String,
  username:String,
  password:String,
  age:Number,
  email:String,
  date_of_birth:Date
}

var User = mongoose.model("User",userSchema);

module.exports.User = User;

//Collections => tablas
//documentos => filas
