let fibonacci = {
    *[Symbol.iterator](){
        let pre = 0;
        let cur = 1;
        for (;;){
            [pre,cur]=[cur,pre+cur];
            yield cur; 
        }
    }
}

for (const n of fibonacci) {
    if(n> 1000)break
    console.log(n);
}