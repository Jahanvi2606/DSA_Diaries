function remove_elelement(num ,val){
let j =0;
for(let i=0;i<num.length;i++){
 if (num[i] !== val){
    num[j] =num[i];
    j++;
 }
}
return j;

}


let nums = [1,2,5,6,8,8,4,3];
let value = 8;

let ans = remove_elelement(nums, value);
console.log("the length of final array is :" , ans , " and the final array is :", nums.slice(0 ,ans));