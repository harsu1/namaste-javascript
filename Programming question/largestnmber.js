//Largest numbers between 2 numbers

largestnum=(a,b)=>{
    if(a>b){
        console.log('a is largest no.')
    }
    else{
        console.log('b is greater')
    }
}
largestnum(5,4)

//Largest numbers between 3 numbers

largestnum=(a,b,c)=>{
    if(a>b&&a>c){
        console.log('a is largest no.')
    }
    else if(b>a&&b>c){
        console.log('b is greater')
    }
    else{
        console.log('c is greater')
    }
}
largestnum(5,4,6)

//Second largest among three numbers
function secondLargestNumber(num1, num2, num3) {
    if(num1>=num2&&num1>=num3){
         if(num2>=num3){
            return num2;
         }
         else{
            return num3;
         }

    }
    else if(num2>=num1&&num2>=num3){
           if(num1>=num3){
            return num1;
           }
           else{
            return num3;
           }

    }
    else{
        if(num1>=num2){
            return num1;
        }
        else{
            return num2;
        }
    }
}

console.log(secondLargestNumber(100,20,30))