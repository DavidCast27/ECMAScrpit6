(() => {

    console.warn('Ejemplo SYMBOL BASICO');
    
    const sim1 = Symbol();
    const sim2 = Symbol('foo');
    const sim3 = Symbol('foo');
    const sim4 = Symbol('bar');

    console.log(Symbol('foo') === Symbol('foo'));
    console.log(typeof sim1);

    let symObj = Object(sim1);
    console.log(typeof symObj);


    //AÑADIR UNA VARIABLE A UN SYMBOL
    console.warn('AÑADIR UNA VARIABLE A UN SYMBOL');

    let obj = {};
    obj[sim3] = 'foo';
    obj[sim4] = 'bar';

    console.log(obj);
    console.log(JSON.stringify(obj));
    console.log(Object.keys(obj));
    console.log(Object.getOwnPropertyNames(obj));
    console.log(Object.getOwnPropertySymbols(obj));


    //AÑADIR UN SYMBOL A UNA VARIABLE
    console.warn('AÑADIR UN SYMBOL A UNA VARIABLE');
    
    let obj2 = {};
    obj2['foo'] = sim3;
    obj2['bar'] = sim4;

    console.log(obj2);
    console.log(JSON.stringify(obj2));
    console.log(Object.keys(obj2));
    console.log(Object.getOwnPropertyNames(obj2));
    console.log(Object.getOwnPropertySymbols(obj2));


})();

