
(() => {
    class Rectangulo {

        private base: number;
        private altura: number;

        constructor(base, altura) {
            this.base = base;
            this.altura = altura;
        }

        public area() :number{
            return this.base * this.altura;
        }
    }

    let rec = new Rectangulo(3,9)
    console.log(rec.area());

})();





