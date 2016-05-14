var http = require('http'),
    fs = require('fs');

    //Version Sincrona
    //var html = fs.readFileSync("./index.html")

    //Version Asincrona
    fs.readFile("./index.html",function(err,data){

      http.createServer(function(req,res){
        res.writeHead(200,{"Content-Type":"application/json"})
        res.write(JSON.stringify({nombre:"Mario",username:"marioga"}));
        res.end()
      }).listen(3000);

    })
