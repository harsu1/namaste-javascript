function gcd(a,b){
    for(let temp=b;b!==0;){
          b=a%b;
          a=temp;
          temp=b;
    }
    return a;
}
console.log(gcd(36,60))