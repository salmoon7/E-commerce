console.clear();
let mSum = (...args) =>{
    let sum=0;
    for(let i = 0; i < args.length; i++){
    sum+=args[i];
}
console.log(sum);
}
mSum(1,2,3,4,5)