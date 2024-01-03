//Map
const arr=[5,1,3,4,8];
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}
const output1=arr.map(binary);
// console.log(output) 

//Filter odd values
function isOdd(x){
    return x%2;
}
const output =arr.filter(isOdd)
console.log(output);


//reduce it does not reduce anything

//sum or max
 const sum=arr.reduce(function(acc,curr){
      acc=acc+curr;
      return acc;
 },0);

 console.log(sum);

 // find ma by using Reduce method
 const max=arr.reduce(function(acc,curr){
   if(curr>acc){
    acc=curr;
   }
   return acc;
 },0);

 console.log(max);
