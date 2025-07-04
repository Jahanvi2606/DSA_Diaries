function sumofallelementsofanArray(n, i=0){
    if(n.length === i) return 0;

    return n[i] + sumofallelementsofanArray(n ,i+1);
}


let n  =[1,2,5,6,7,9,11,10,16];
console.log(sumofallelementsofanArray(n));