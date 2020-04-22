
function* rango (inicio, fin, incremento){
    while(inicio<= fin){
        yield inicio;
        inicio += incremento;
    }
}

for (const i of rango(0,10,2)) {
    console.log(i);
}


function* cuadrados(){
    let n = 1;
    while(true){
        var c = n * n;
        n++;
        yield c;
    }
}

var gen = cuadrados();
console.log(gen);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

