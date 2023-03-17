function devueloUsuario(){
    return 'Victor';
}

function devuelvoSaludo(){
    return 'Hola';
}

function Saludar(cb1,cb2){
    return cb1() + ' '+ cb2();
}

console.log(Saludar(devuelvoSaludo,devueloUsuario));
