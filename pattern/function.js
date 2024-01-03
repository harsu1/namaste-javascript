// a();
// b();
// //function statement
// function a(){
//     console.log("a is called");

// }
// //function expression
// var b = function (){
//     console.log("b is called");
// }

//in function a() is treated like Normal function
//but in function b is declared in a variable thats why it will be act like a variabele

//function declaration

//function statement and  function declaration both same things

//Anonymous function -> a function without name
// function (){

// }

//Named function expression
// var b = function xyz(){
//     console.log("b is called");
// }
//If we call directly xyz(); then it will through an error not defined because it is in local memory


//diffrence between parameter and Argument?

//first class function-- Ability to be used like values
//first class citizens -- same as first class

//___________________________________

//Arrow function vs Normal function.

//1>Synatax

//Es5
var add=function(x,y){
    return x+y
};
//ES6
var add=(x,y)=> x+y;

//Arrow function cannot be used as constructor
class Animal{
    constructor(name, numsofleg){
        this.name=name
        this.numsofleg=numsofleg
    }
    sayname(){
        console.log(`mY NAME IS ${this.name}`)
    }
}

const dog=new Animal("Bingo",4)
const Bird=new Animal('mew',2)

dog.sayname()

