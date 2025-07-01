var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // pointer to track the place for next unique element

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;              // move i forward
            nums[i] = nums[j]; // replace with new unique element
        }
    }

    return i + 1; // total number of unique elements
};



let nums =[1,2,3,3,5,7];
let k = removeDuplicates(nums);
console.log("the array length is :", k);
console.log("the array is :",nums.slice(0,k));
