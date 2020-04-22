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
            // se le añade este return ya que la propiedad set debe retornar un boolean
            // se ponene los retornos en true para evitar los errores
            if (prop==="marca" || prop==='modelo') {
                console.log(`No puede modificar la propiedad: ${prop}`);
                return true;
            } else {
                target[prop] = valor;
                return true;
            }
            
            
            
        },
        deleteProperty: function(target, prop) {
            console.log("No puedes eliminar ninguna propiedad");
            // se le añade este return ya que la propiedad deleteProperty debe retornar un boolean
            // se ponene los retornos en true para evitar los errores
            // lo ideal seria retrnar false
            return true;
        }
    }

    var miAuto = new Proxy(auto,handler);

    console.log(miAuto.todo);
    miAuto.marca = "Nizan";
    miAuto.placas = "abc123";
    console.log(miAuto.placas);

    delete miAuto.placas;

})();




