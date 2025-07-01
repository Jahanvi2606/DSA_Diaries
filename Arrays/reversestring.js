function reverseString(s){
 let left =0;
 let right = s.length-1;
 while(left < right){
     let temp =[s[left]];
     s[left] = s[right];
     s[right] =temp;
     left ++;
     right --;
 }
 return s;
}


let string = "well";
let charArray = string.split("");         // Convert string to array
let reversedArray = reverseString(charArray);
let result = reversedArray.join("");      // Convert back to string
console.log(result);                      // Output: "llew"