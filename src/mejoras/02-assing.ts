
(() => {
 
    let dest = {quux :0};
    let src1 = {foo: 1, bar: 2};
    let src2 = {foo: 3, bar: 4};
    Object.assign(dest,src1,src2);
    console.log(dest);

})();





