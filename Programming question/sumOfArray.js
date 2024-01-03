function sumOfArray(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
let numbers = [1, 2, 3, 4, 5];
let result = sumOfArray(numbers);
console.log("The sum of the numbers is:", result);