"use strict";

var fs = require('fs');
var path = require('path');

//Función que parsea el JSON de las edades

var edades =  ["18-20","20-30","30-40","40-50","50-60","60-70","70-80","80-90","90+"];
var recuento = [0,0,0,0,0,0,0,0,0];

var parseoDeFicheroYRecuento = function (nombreDeFichero) {
	
	//Path join genera la ruta del fichero, añadiendo o suprimiendo las / y espacios si son necesarios
    var fichero = path.join("./ficheros", nombreDeFichero);
	
	//Lectura sincrona del fichero
    var lectura = fs.readFileSync(fichero, 'utf-8');
    var parseoHecho = {};
	//es necesario hacer el parseo en un bloque try catch para no colgar la ejecución de la aplicación completa
    try {
        parseoHecho = JSON.parse(lectura);
    }catch (e) {
        console.log("No ha sido posible parsear el fichero proporcionado");
        console.log(e);
        return;
    }
	
	//se extraen los datos del array del json
    var array = parseoHecho.data;
	
	//se recorre cada objeto, se extrae el valor de la clave edad y se clasifica en el array de recuento
    for(var i = 0;i<array.length; i++){
        var objeto = array[i].edad;

        switch (true){
            case (objeto >=18 && objeto <20):
                recuento[0] = recuento[0]+1;
                break;
            case (objeto >=20 && objeto <30):
                recuento[1] = recuento[1]+1;
                break;
            case (objeto >=30 && objeto <40):
                recuento[2] = recuento[2]+1;
                break;
            case (objeto >=40 && objeto <50):
                recuento[3] = recuento[3]+1;
                break;
            case (objeto >=50 && objeto <60):
                recuento[4] = recuento[4]+1;
                break;
            case (objeto >=60 && objeto <70):
                recuento[5] = recuento[5]+1;
                break;
            case (objeto >=70 && objeto <80):
                recuento[6] = recuento[6]+1;
                break;
            case (objeto >=80 && objeto <90):
                recuento[7] = recuento[7]+1;
                break;
            case (objeto >=90):
                recuento[8] = recuento[8]+1;
                break;

        }
    }

    return recuento;
}


var res =  parseoDeFicheroYRecuento("generated2.json");
console.log(edades,res);

