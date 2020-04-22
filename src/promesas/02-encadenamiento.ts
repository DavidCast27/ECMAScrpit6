
(() => {

    let promesa1 = () => new Promise((resolve, reject) => resolve('primer promesa'));

    let promesa2 = (msg) => new Promise((resolve, reject) => resolve(`${msg} segunda promesa`));

    let promesa3 = (msg) => new Promise((resolve, reject) => resolve(`${msg} tecera promesa`));

    
    promesa1().then((res) => {
        return promesa2(res)
    }).then(res2=>{
        return promesa3(res2);
    }).then(res3 =>{
        console.log(`al final sale ${res3}`);
    })

    // es lo mismo solo que  aca se genera encadenamineto e identacion similar a lo que ocurre con los callbacks
    promesa1().then((res) => {
        return promesa2(res).then(res2=>{
            return promesa3(res2);
        }).then(res3 =>{
            console.log(`al final sale ${res3}`);
        })
    });


})();




