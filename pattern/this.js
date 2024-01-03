//'this' Keywords in javascript (Implicit Binding)

//Explain 'this keyword?

// this keyword is reference object context

//this in function inside Object

// let user={
//     name:'Piyush',
//     age:24,
//     getDetails(){
//         console.log(this.name)
//     }
// }

// user.getDetails();


//ques:1> What is Output?

const user3={
    firstname:'Piyush!',
    getname(){
        const firstName="PiyushKumar!";
        return this.firstname;
    },

};

console.log(user3.getname())//


//Ques-2 what is the result of accessing it ref? why?

function makeuser(){
    return {
        name:"john",
        ref:this,
    };

}

let user4 =makeuser();
console.log(user.ref.name); //It will print empty . Because pointing to window object

//Ques-3 What is th e output?

const user={
    name:"piyush agarwal!",
    logMessage(){
        console.log(this.name);// what  is logged
    },
}
setTimeout(user.logMessage,1000);// it will print nothing or undefinde  becauuse settimeout using use.Logmessage as a callback


//Ques-4
const usrp={
    name:"Harsh sahu",
    greet(){
        return `Hello, ${this.name}!`;
    },
    farewell:()=>{
        return `Bye, ${this.name}!`;
    }
}
console.log(usrp.greet());//Hello piyush

console.log(usrp.farewell());//nothing or undefind

//Ques-5 Create an Object Calculator

let calculator={
    read(){
        this.a=+prompt("a= ",0);
        this.b=+rompt("b= ",0);
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
};
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());


//Ques 6 what will outPut
var length=4;

function callback(){
    console.log(this.length);
}

const object={
    length:5,
    method(fn){
        fn();
    },
};

object.method(callback)

//value of this depend upon in which context this is used

const user5={
    name:"harsh sahu",
    printName:function(){
        console.log('upper: ',this);

        const printAgain=function(){
            console.log('inner: ',this);
        }
        printAgain();
    }
}
user5.printName();

//here inner this will log window object because it refrencing to global context
//in upper this will log user 5 object

//Arrow function ke andar khud ka ka this nahi hota hai. here in this not have own context