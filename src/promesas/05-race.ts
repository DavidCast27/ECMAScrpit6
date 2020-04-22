
(() => {

    /**
     * con el metodo race, se envian varias promesas pero solo va a devolvier la que se ejecute primero
     * Si alguno de las promesas es rechazada (reject), si el primero en responder es resuelto (resolve)
     * responde el valor del resolve, si la primera promesa en llegar es rechazada (reject) se repsonde 
     * este error
     */
 
     let p1 = new Promise((resolve,reject)=> setTimeout(() => {
         reject('uno')
     }, 500))
 
     let p2 = new Promise((resolve,reject)=> setTimeout(() => {
         resolve('dos')
     }, 1100))
 
     Promise.race([p1,p2])
     .then((valor)=>console.log(valor))
 })();
 
 
 
 
 