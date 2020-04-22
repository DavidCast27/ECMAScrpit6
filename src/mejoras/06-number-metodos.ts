
(() => {


    Number.isNaN(42) === false
    Number.isNaN(NaN) === true

    Number.isFinite(Infinity) === false
    Number.isFinite(-Infinity) === false
    Number.isFinite(NaN) === false
    Number.isFinite(123) === true

    Number.isSafeInteger(42) === true
    Number.isSafeInteger(9007199254740991) === true
    Number.isSafeInteger(9007199254740992) === false

    //epcilon
    console.log(0.1 + 0.2 === 0.3);
    console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);


})();





