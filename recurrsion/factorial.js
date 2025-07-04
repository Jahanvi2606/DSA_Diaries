function factorialofN(n){
    if(n ===0)return 1;
    return n * factorialofN(n-1);
}



let n=4;
console.log(factorialofN(n));

