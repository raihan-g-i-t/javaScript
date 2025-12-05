let nums = [2, 5, 7, 9];
let target = 7;
let i, j;

// console.log(nums.indexOf(5));
// console.log(index);
// console.log(nums.length);
// for(i=0; i<nums.length; i++){
// }

for(i=0; i<nums.length; i++){
    for(j=i+1; j<nums.length; j++){
        if(nums[i]+nums[j]==target){
            returnIndex = [i, j];
            break;
        }
    }
}
console.log(returnIndex);

