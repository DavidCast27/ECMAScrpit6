
(() => {

    //spread
    function suma(x, y, z) {
        return x + y + z;
    }

    let numeros = [0, 2, 4];


    // suma(...numeros);

    function f(v, w, x, y, z) { console.log(z); }
    // f (-1,...numeros,...[3]);

    let num1 = [1, 2, 3];
    let num2 = [4, 5, 6];
    num1.push(...num2);
    for (let index = 0; index < num1.length; index++) {
        const element = num1[index];
        document.write(`<p> ${element}<p>`)
    }

    const length = (...arreglo) => console.log(arreglo.length);

    length();
    length(5);
    length(3, 4, 5, 2, 12);
    length(...[1, 2, 3, 4, 2, 5, 2, 1]);
    length([1, 2, 3, 1, 5]);
    length([1, 2, 3, 1, 5], [21312, 1]);

    console.warn('multiplicador');
    const multiplicador = (multiplicador: number, ...numeros: number[]) => numeros.map((elemento) => multiplicador * elemento);
    let salida = multiplicador(2, 3, 2, 2);
    let salida2 = multiplicador(2, 3, 2, 2);
    console.log(salida);

    console.warn('ordenador');

    const ordenar = (...numeros) => numeros.sort();
    console.log(ordenar(5, 2, 1));







})();


