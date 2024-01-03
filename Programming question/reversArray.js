// using for loop

let orginalArray=[1,2,3,4];

let reversedArray=[];
for(let i=orginalArray.length-1;i>=0;i--){
    reversedArray.push(orginalArray[i]);
}
console.log("reversed Array: "+ reversedArray)