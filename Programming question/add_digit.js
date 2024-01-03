let sumofDigit=(n)=>{
 let remainder,sumOfDigits=0;
 while(n){
 remainder=n%10;
 sumOfDigits=sumOfDigits+remainder;
 n=Math.floor(n/10);
 }
 console.log(sumOfDigits);
};
sumofDigit(555);
//Another way by using split() and reduce()

var n=222;
var sum = n.toString().split('').map(Number).reduce(function(a,b){return a+b;},0);
console.log(sum);
