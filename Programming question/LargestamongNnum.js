function findLargest(number){

 let largest=number[0]
 for(let i=1;i<number.length;i++){
    if(number[i]>largest){
        largest=number[i];
    }

 }
 return largest;
}
const numberArray = [7, 12, 4, 19, 6, 9];
const largestNumber = findLargest(numberArray);
console.log("The largest number is: " + largestNumber);