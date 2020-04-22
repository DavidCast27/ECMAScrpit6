
(() => {

    let miPromesa = new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('TODO BIEN')
        },1000);

        setTimeout(()=>{
            reject('TODO MAL')
        },1500);
     });

     miPromesa.then((res)=>{
         console.log(res);
     },(err)=>{
         console.log(err);
     })

    let miPromesa2 = new Promise(function(todoBien,todoMal){
        let resultado = false;
        if(resultado){
            todoBien('listo')
        }else{
            todoMal('algo fallo')
        }
    });

    miPromesa2.then(res=>{
        console.log(res);
    }).catch(err=>{
        console.log(err);
    })



})();





