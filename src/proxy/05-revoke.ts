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
            if (prop==="marca") {
                return `Auto marca: ${target[prop]}`;
            } else if (prop==="modelo") {
                return `Auto modelo: ${target[prop]}`;
            } else if (prop==="todo") {
                return `Auto modelo: ${target["marca"]} ${target["modelo"]} ${target["color"]}`;
            } else {
                return target[prop];
            }
        },
        set:function(target, prop, valor) {
            if (prop==="marca" || prop==='modelo') {
                console.log(`No puede modificar la propiedad: ${prop}`);
            } else {
                target[prop] = valor;
            }
            return true;
        },
        deleteProperty: function(target, prop) {
            console.log("No puedes eliminar ninguna propiedad");
            return true;
        }
    }

    const {proxy:miProxy, revoke} = Proxy.revocable(auto,handler);

    console.log(miProxy.todo);

    revoke();

    console.log(miProxy.todo);

})();




