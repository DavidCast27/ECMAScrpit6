(() => {
    let x = 10;
    let y = 20;

    //Antes
    console.warn('Antes');
    const objAntes = { x: x, y: y };
    console.log(objAntes);

    //Ahora
    console.warn('Ahora');
    const objAhora = { x, y }
    console.log(objAhora);


    //METODOS DE DEFINICION DE PROPIEDADES

    const objMetodosAntes = {
        suma: function (a, b) { return a + b },
        multiplica: function (a, b) { return a * b },
        num: function* (x, y) { }
    }
    const objMetodosAhora = {
        suma(a, b) { return console.log(a + b) },
        multiplica(a, b) { return console.log(a * b) },
        *num(x, y) { }
    }

    objMetodosAhora.suma(1, 2)
    objMetodosAhora.multiplica(1, 2)

    //  PROPIEDADES CALCULADAS
    //Ahora
    const num = ()=> Math.floor(Math.random()*10);

    const objCalculo = {
        valor :'foo',
        ['id'+ num()]:4
    }
    console.log(objCalculo);

    const o1= {a:1};
    const o2= {b:2};
    const o3= {c:3};

    let objAssing = Object.assign(o1,o2,o3);
    console.log(objAssing);
    console.log(o1);


    const o11= {a:1,b:1,c:1};
    const o12= {a:2,b:2};
    const o13= {c:3};

    let objAssing2 = Object.assign({},o11,o12,o13);
    console.log(objAssing2);
      console.log(o11);

})();

