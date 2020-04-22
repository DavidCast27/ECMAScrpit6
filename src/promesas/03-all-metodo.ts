
(() => {

    let promesa1 =  new Promise((resolve, reject) => 
    setTimeout(()=> resolve('primer promesa'),10000 ));

    let promesa2 = new Promise((resolve, reject) => 
    setTimeout(()=> reject('segunda promesa'),100 ));



    /**  si toda las promesas se resuelven de forma correcta (enviarn el resolve) se devuelve un vector
     * con el resultado de cada promesa, retorna cuando la ultima promesa resuelve
     * en caso de una de las promesas ejecute el rechazo (reject) este ejecuta el metodo catch 
     * y lanza el error sin esperar el resto de promesas
    */
   Promise.all([promesa1,promesa2])
   .then(data=> console.log(data))
   .catch(err=> console.error(err));

})();




