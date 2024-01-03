let swap=(a,b)=>{
 let temp;
 temp=a;
 a=b;
 b=temp;
console.log(a,b);
    
}
swap(5,6)

//swap without third variable

let swap2=(a,b)=>{
    a=a+b;
    b=b-a;
    a=a-b;
    console.log(a,b);

}
swap2(10,8)
