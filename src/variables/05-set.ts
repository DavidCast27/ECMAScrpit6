(() => {

    const set = new Set();

    set.add('cadena1').add('cadena2').add('cadena1');

    console.log(set.size);
    console.log(set.size === 2);
    console.log(set.has('hola'));
    console.log(set.has('cadena1'));


})();

