(() => {

    //la destructuracion de es6 se puede hacer con arreglos y con objectos

    let [one, two, three] = [1, 2, 3];
    console.log(one);



    const modulo = {
        cuadrado(lon) { console.log(lon * lon); },
        circulo(radio) { console.log(radio * Math.PI); },
        texto(text) { console.log(text); }
    }

    // let {cuadrado, circulo, texto} = modulo;
    let { cuadrado, circulo, texto } = {
        cuadrado(lon) { console.log(lon * lon); },
        circulo(radio) { console.log(radio * Math.PI); },
        texto(text) { console.log(text); }
    }
    cuadrado(5);
    circulo(10);
    texto('Hola mundo')

    let { uno, dos, tres } = { 'uno': 1, 'dos': 2, 'tres': 3 };
    console.log(uno);


    let juana = { nombre: 'Juana', paterno: 'Perez', edad: 27 }
    let juan = { nombre: 'Juan', paterno: 'Lopez', materno: 'Perez' }

    function nombreCompleto({ nombre, paterno, materno = 'N/A' }) {
        console.log(`Hola ${nombre} ${paterno} ${materno} `);
    }
    nombreCompleto(juana);
    nombreCompleto(juan);







})();

