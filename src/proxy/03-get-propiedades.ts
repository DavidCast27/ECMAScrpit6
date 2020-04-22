(() => {
    const auto = {
        placas: "123abc",
        marca: "Ford",
        anio: 2015,
        modelo: "T",
        color: "Negro"
    }

    const handler = {
        get:function(target, prop, proxy){
            console.warn(proxy);
            
            if (prop==="marca") {
                return `Auto marca: ${target[prop]}`;
            } else if (prop==="modelo") {
                return `Auto modelo: ${target[prop]}`;
            } else if (prop==="todo") {
                return `Auto modelo: ${target["marca"]} ${target["modelo"]} ${target["color"]}`;
            } else {
                return target[prop];
            }
        }
    }

    var miAuto = new Proxy(auto,handler);

    console.log(miAuto.marca);
    console.log(miAuto.modelo);
    console.log(miAuto.todo);
    console.log(miAuto.placas);

    console.log(miAuto.asa);

    


})();




