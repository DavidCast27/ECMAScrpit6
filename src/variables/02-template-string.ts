(() => {

    // tamplate String es la implementacion de back tick

    const n = 5;
    let s2 = `El valor de n es ${n}`
    console.log(s2);

    // se pueden agregar  mas de una variable
    const nombre = 'David';
    let edad = 26;
    const apellido = 'Castrillon';

    let s3 = `Mi nombre es ${nombre} ${apellido}, tengo ${edad} años`;
    console.log(s3);

})();

