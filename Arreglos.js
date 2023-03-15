var miArreglo = [];
miArreglo [1] = 'papa';
miArreglo [3] = 'zanahoria';
miArreglo [2] = 'brocoli';
miArreglo [0] = 'albahaca';

miArreglo.includes('papa');
onsole.log(miArreglo.includes('papa'));
miArreglo.push('Tomate');
miArreglo.unshift('Lechuga');

miArreglo.pop();
miArreglo.shift();
console.log(miArreglo);

console.log(miArreglo[1]);
console.log(miArreglo.length);

EVERY
var numeros = [ 10, 6, 8, 9, 43 ];
console.log(numeros.every((num)=>num>5));

Split y Join
var palabra = 'Henry'
var arregloSeparado = palabra.split('');
console.log(arregloSeparado);
console.log(arregloSeparado.join(''));

FOREACH
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach(function cb(num){console.log(num+1);});

MAP
var numeros = [1,2,3,4,5];
var nuevosNumeros = numeros.map((num) => {if(num>2){ return num=num+10;}return num;})
console.log(nuevosNumeros);

FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('viti');
}
console.log(arr);