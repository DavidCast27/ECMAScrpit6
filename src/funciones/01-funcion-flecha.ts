//ANTES
var x = function(params) {
    return params
}
console.log(x("hola"));

// FUNCION FAT ARROW
// con un parametro
var y = (a) => a;
console.log(y("hola fat arrow"));
//con mas de un parametro
var z = (a, b) => a + b;
console.log(z("hola", " mundo"));
// sin parametros
var w = () => "sin parametros"
console.log(w());


// llamar funcion de flecha desde otra funcion
setTimeout(() => alert('Hola desde ES6'), 1000)

// 
var o = () => {
    let a = 'Hola';
    let b = 'David';
    return alert(`${a} ${b} `)
}
o();