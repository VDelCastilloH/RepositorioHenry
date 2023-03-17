// FUNCION CONSTRUCTORA
function Persona (nombre,apellido,edad,profesion){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.profesion = profesion;

    this.info = function(){
        console.log('Nombre: '+ this.nombre + ' Apellido: ' + this.apellido);
    }
}

 var victor = new Persona ('Victor', 'Del Castillo', 40, 'Imitador de Raphael');
 victor.info();
// console.log(victor);
// console.log(victor.edad);

//EXPRESION CLASE
class Autos{
    constructor(marca, modelo, año, color){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }
    info(){
        console.log('Este auto es un '+this.marca+' modelo '+ this.modelo +' color ' +this.color);
    }
}
var ferrari = new Autos ('Ferrari', 'F40', 1990, 'Negro');
ferrari.info();