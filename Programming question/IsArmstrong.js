function isArmstrong(number){
    const digits =number.toString().split('');
    const order=digits.length;
    const sum= digits.reduce(
        (acc,digits)=>
             acc+ Math.pow(parseInt(digits),order),0);

    if(sum===number){
        console.log(number +'is an Armstrong number');

    }
    else{
        console.log(number+'is not an Armstrong number');
    }
}
isArmstrong(123);