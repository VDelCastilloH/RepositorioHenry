class Persona{
    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    saluda(){
        console.log('Mi nombre es '+ this.nombre + ' y tengo ' + this.edad + ' años');
    }
}

// let vitty = new Persona ('Victor',40);
// vitty.saluda();

class Programador extends Persona{
    constructor(nombre, edad, añosDeExperiencia){
        super(nombre,edad);
        this.añosDeExperiencia = añosDeExperiencia;
    }
    codea(){
        console.log('Mi nombre es '+this.nombre+ ' y tengo '+this.añosDeExperiencia+' años de experiencia.');
    }
}

let daniel = new Programador('Daniel', 5 , 4);
daniel.saluda();
daniel.codea();
// daniel.codea();