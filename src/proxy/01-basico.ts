(() => {
 
    const target = function(nombre, apellidos){
        console.log("Mi nombre es ",nombre,apellidos);
    }

    
   /**
    * la idea del handler es poder hacer validaciones antes de ejecutarse el llamado al target
    * antes de ejectar el back
    * 
    *  */ 
    
    const handler = {
        apply: function(target, valor, args){
            console.log('el valor es ', valor);
            console.log(`Se ha llamado la función ${target.name} con los parámetros ${args}`);
            return target(...args);
        }
    }

    var proxy = new Proxy(target,handler);
    proxy("Pedro","Picapiedra"); 

})();




