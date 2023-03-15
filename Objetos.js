// var deportes = {conBalon: ['Futbol','Basketball','Golf'],
//     sinBalon: ['Boxeo','Surf','Ciclismo'],
// };

// var persona = {nombre: 'Juan', apellido: 'Perez', edad: 25, estudios: { esProgramador: true }};
// persona.nombre = 'Martin';
// persona.genero = 'Masculino';
// persona['estaturaenmetros']= 1.8;
// console.log(persona);
// delete persona.genero;
// console.log(persona);

// HAS OWN PROPERTY
// var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
// console.log(libro.hasOwnProperty('nombre'));

//KEYS
// var libro = {autor: 'Borges', genero: 'Policial', año: 1990};
// console.log(Object.keys(libro));
// console.log(Object.values(libro));

// // For (var propiedad in objeto)
// for(let propiedades in libro){
//     console.log('La propiedad es: ' + propiedades);
//     console.log('El valor de la propiedad es: ' + libro[propiedades]);
// }

//This
var videojuego = {nombre:'Counter Strike', 
    genero: 'Accion', 
    lanzamiento: 2012,
    empresa: 'Valve',
    info: function(){console.log('Empresa creadora '+ this.empresa +' lanzo el juego el año '+ this.lanzamiento)}
};
videojuego.info();
