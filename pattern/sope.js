// function a(){
//     var b=10;
//     c();
//     function c(){

//     }
// }
// a();
// console.log(b);
// const x = "declared outside function";

// exampleFunction();

// function exampleFunction() {
//   console.log("Inside function");
//   console.log(x);
// }

// console.log("Outside function");
// console.log(x);

//let a=20;
// {
//     let a=3;
//     console.log(a);
// }
// console.log(a);

function outer() {

    let x = 10;
    
    function inner() {
    var y=5;
    console.log(x+y);
     x = 20;
    }
    
     
    
    return inner;
    
    
    }
    
    var innerFunc = outer();
    
    innerFunc();
    innerFunc();
