var http = require("http"),
    fs = require("fs");

    http.createServer(function(req,res){
      fs.readFile("./index.html",function(err,data){

        var html_string = data.toString();

        //Expresion regular que busca en el HTML donde haya llaves {}
        var variables = html_string.match(/[^\{\}]+(?=\})/g);

        var nombre = "Mario"
        // variable ['nombre']
        for (var i = variables.length-1; i >= 0; i--) {
          var value = eval(variables[i]);

          html_string = html_string.replace("{"+variables[i]+"}",value);
        }

        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(html_string);
        res.end();
      });
    }).listen(3000);
