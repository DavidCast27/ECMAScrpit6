(() => {
    const DateProxy = new Proxy(Date,{
        construct(target,args){
            console.log(target);
            console.log("Creamos una fecha");
            //comento esta linea de codigo como mejora, ya que el target es el metodo que se va  ausar osea el Date
        
            //return new Date(args);
            return new target(args);
            // se comenta esta linea de codigo para typescript deje correr
            // return new Date(...args);
        }
    });

    let fecha = new DateProxy(2019,6,7);
    console.log(fecha);


})();