
(() => {

    let promesa1 = function () {
        return new Promise((resolve, reject) => resolve('primera promesa lista'));
    }


    let promesa2 = function () {
        return new Promise((resolve, reject) => resolve('Segunda promesa lista'));
    }

    let promesa3 = () => new Promise((resolve, reject) => resolve('tercera promesa lista'));


    Promise.all([promesa1(),promesa2(),promesa3()])
    .then((res)=> res.forEach((msg)=> console.log(msg)))

})();




