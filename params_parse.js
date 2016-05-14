function parse(req){
    var arreglo_parametros = [],parametros = {};

    if (req.url.indexOf("?" > 0)) {
      var url_data = req.url.split("?");
      var arreglo_parametros = url_data[1].split("&")
    }

    for (var j = arreglo_parametros.length-1; j >= 0; j--) {
      var parametro = arreglo_parametros[j]
      var param_data = parametro.split("=");
      parametros[param_data[0]] = param_data[1]
    }

    return parametros;
}

module.exports.name = "Mario Galindo";
module.exports.parse = parse;
