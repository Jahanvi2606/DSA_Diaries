function ispoweroftwo(n){
    if(n ===1) return true;
    if(n === 0 || n%2 !== 0) return false;
    return ispoweroftwo(n/2); 
}


let n = 32;
console.log(ispoweroftwo(n));


// Time & Space Complexity:
// Time Complexity: O(log n) — because you divide n by 2 each time

// Space Complexity: O(log n) — call stack grows with each division