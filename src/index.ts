(() => {


    /**
     * las funciones asincronas devuelven una promesa
     */

    function funcion1() {
        return new Promise((resolve, reject)=>{
            setTimeout(resolve, 2000, "Promesa 1");
        });
    }

    function funcion2() {
        return new Promise((resolve, reject)=>{
            setTimeout(resolve, 1000, "Promesa 2");
        });
    }

    function funcion3() {
        return new Promise((resolve, reject)=>{
            setTimeout(resolve, 1000, "Promesa 3");
        });
    }

    async function promesas() {
        let promesa1 = await funcion1();
        let promesa2 = await funcion2();
        let promesa3 = await funcion3();

        console.log(promesa1,promesa2,promesa3);
    }

    promesas();
})();




