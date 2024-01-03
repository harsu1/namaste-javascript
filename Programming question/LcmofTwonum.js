function gcd(a,b){
    for(let temp=b;b!==0;){
          b=a%b;
          a=temp;
          temp=b;
    }
    return a;
}
function lcmFunction(a,b){
    const gcdValue=gcd(a,b);
    return (a*b)/gcdValue;
}
console.log(lcmFunction(12,18))