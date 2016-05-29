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
var posibles_valores = ["M","F"];
//var email_match = ["^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$","Coloca un email valido"]

var password_validation = {
  validator: function(p){
    return this.password_confirmation == p;
  },
  message:"Las contraseñas no son iguales"
}

var userSchema = new Schema ({
  name:String,
  last_name:String,
  username:{type:String, required:true, maxlength:[50,"El tamaño no debe ser mayor que 50"]},
  password:{
    type:String,
    minlength:[8,"El password debe ser mayor que 8"],
    validate:password_validation
  },

  age:{type:Number, min:[5,"La edad no puede ser menor que 5"], max:[100,"La edad no puede ser mayor que 100"]},
  email:{type:String,required:"El correo es obligatorio", /*match:email_match*/},
  date_of_birth:Date,
  sex:{type:String, enum:{values:posibles_valores, message:"Opcion no valida"}}
});

userSchema.virtual("password_confirmation").get(function(){
  return this.p_c;
}).set(function(password){
  this.p_c = password;
})

/*
userSchema.virtual("full_name").get(function(){
  return this.name + this.last_name
}).set(function(full_name){
  var word = full_name.split(" ");
  this.name = word[0];
  this.last_name = word[1];
})
*/


var User = mongoose.model("User",userSchema);

module.exports.User = User;

//Collections => tablas
//documentos => filas
