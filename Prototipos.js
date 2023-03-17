Array.prototype.mayoresQueTres = function(){
    let arregloModificado = [];
    for(let i=0; i< this.length; i++){
        if(this[i]>3){
            arregloModificado.push(false);
        }else {
            arregloModificado.push(this[i]);
        }
    }
    return arregloModificado;
}

let arr = [10,1,2,3,5,6];
console.log(arr.mayoresQueTres());

class Latinoamerica{
    constructor(){
        this.paises= []; 
    }
}

Latinoamerica.prototype.agregaPais = function(pais){
    this.paises.push(pais);
}

let sudamerica = new Latinoamerica();
sudamerica.agregaPais('PERU');
sudamerica.agregaPais('ARGENTINA');
sudamerica.agregaPais('COLOMBIA');
sudamerica.agregaPais('BRASIL');
console.log(sudamerica.paises);