// function x(){
//     for(let i=0;i<=5;i++){
//     setTimeout(function (){
//         console.log(i);
//     },i*1000);
// }
// console.log("Namste Harsh");
// }
// x();

// if interviewer ask no you cant use let use var
// function x(){
  
//     for(var i=0;i<=5;i++){
//     function close(i){   
//     setTimeout(function (){
//         console.log(i);
//     },i*1000);
// }
// close(i);
// }
// console.log("Namste Harsh");
// }
// x();

function outer(){
    let a=10;
    function inner(){
        console.log(a);
        a=5
    }
    return inner;
}
var close=outer();
close();
close();
 

//closure scope chain

//Most asked Interview closure Question

//Ques 1: What will be logged to console

let count=0;
(function printCount(){
    if (count===0){
        let count=1;
        console.log(count); // this will print 1 by shadowing
    }
    console.log(count); // this will print 0 it dosnt affect
})();

// Ques 2: Write a function that would allow you to do his
function createBase(num){
    return function (num2){
     console.log(num+num2); 
    }
     
}

var addSix=createBase(6);
addSix(10);//returns 16
addSix(21);//returns 27

//Ques 3: Time Optimization

// function find(index){
//     let a=[];
//     for(let i=0; i<100000;i++){
//         a[i]=i*i;
//     }
//     console.log(a[index]);
// }

// console.time("6");
// find(6);
// co

//Ques-4 setTimeout output

function a(){
    for(var i=0;i<3;i++){
        setTimeout(function log(){
            console.log(i);//What is logged
        },i*1000);
    }
}
// it will print 3
// 3
// 3
// solution use let in place of var
//a();

// we can also print 123 by using closure without replacing Var

for(var i=0;i<3;i++){
    function inner(i){
        setTimeout(function log(){
            console.log(i); //what is logged
        }, i*1000);
    }
    inner(i);
}