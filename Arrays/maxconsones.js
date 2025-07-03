let maxconsone = function maxconone(num){
 let max =0;
 let curmax =0;
 for(let i=0;i<num.length;i++){
    if(num[i] === 1){
        curmax++;
        if(max<curmax){
        max = curmax;
    }
    }else{
        curmax= 0;
    }
    

 }
 return max;
}


let nums =[1,1,1,1,0,1,1,1,1,1,1];
let ans = maxconsone(nums);
console.log(ans);



// You’ve built a correct linear-scan solution

// Time: O(n)

// Space: O(1)

// Pattern used: Greedy / Counting

