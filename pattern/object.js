// //object literals

// const mysym =Symbol("key1")
// const user={
//       name:"Harsh",
//       "full name":"harsh sahu",
//       age:18,
//       location:"kunda",
//       email:"sahuharsh164@gmail.com",
//       [mysym]: "mykey1",



// }
// //method of accessing object member
// console.log(user.email)
// console.log(user["email"])
// console.log(user["full name"])
// console.log(user[mysym])

// //sigleton object
// const tinderuser={}

// let a=null;
// console.log(typeof a);

// function solve(arr, rotations){
//     if(rotations == 0) return arr;
//     for(let i = 0; i < rotations; i++){
//       let element = arr.pop();
//       arr.unshift(element);
//     }
//     return arr;
//    }
//    solve([44, 1, 22, 111], 5);
//  console.log(null ?? "one");
//  console.log(undefined ?? "two");
 
// way to create object
//1.Object Literals
const Harsh1={
      sirname:'sahu',
      dob:15,
      college:"Rkgit"

}
// console.log(Harsh1.dob);

//@2.Constructor Function

// function Harsh(Gym,Code,Eat,sleep){
//     this.Gym=Gym;
//     this.Code=Code;
//     this.Eat=Eat;
//     this.sleep=sleep;


// }
// const day1=new Harsh("yes","yes","yes","no");
// console.log(Harsh);


// const course ={
//     coursename:"js is Hindi",
//     pr
// }
// function multipleBy5(num){
//     return num*5
// }

// multipleBy5.power=2
// console.log(multipleBy5.power);
 
// console.log(multipleBy5(5));
// console.log(multipleBy5.prototype);

// function createUser(Username,score){
//     this.Username=username
// }


//---------------PROTOTYPE-------------------------

// function BankAccount(customerName, balance=0){
//     this.customerName=customerName
//     this.accountNumber=Date.now();
//     this.balance=balance;

//     // this.deposit=function(amaount){
//     //     this.balance+=amaount;
//     // };

//     this.withdraw=function (amount){
//         this.balance-=amount;
//     };
// }

// BankAccount.prototype.deposit=function(amaount){
//     this.balance+=amaount;
// };

// const HarshAccount=new BankAccount("Harsh sahu");
// HarshAccount.deposit(500)

// console.log(HarshAccount);


// console.log(BankAccount.prototype)

 //Math.PI constant hota hai  ise change nahi kiya ja sakta
 // kyunki jab ham iski descriptor check karte hai tab usme uski writable false set rahti hai
// const descripter=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter)

const chai={
    name:'ginger chai',
    price:250,
    isAvailable:true
}
console.log(Object.getOwnPropertyDescriptor(chai,'name'));

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))


//QUES 3- WHATS THE OUTPUT OF THE FOLLOWING CODE?

const a={}
const b={key:"b"};
const c={key:"c"}

a[b]=123;
a[c]=456;

console.log(a[b]); // output will be 456

//Question - What's Json.stringify and JSON.parse
const user={
    name:"Piyush",
    age:24,
};

const strObj=JSON.stringify(user);

console.log(JSON.parse(strObj));

//Ques:- What is destructuring in Objects?
let user2={
    name:"Piyush",
    age:24,
};

const{ name}=user2;
console.log(name);

//Ques- whats the output?

let g={greeting:"Hey!"}
let f;

g=f;
f.greeting="Hello";

console.log(g.greeting);//Hello because it is reference

//Question- Whats the Output?

console.log({a:1}=={a:1});
console.log({a:1}==={a:1});//This condition will always return 'false' since JavaScript compares objects by reference, not value.

//Question what the Output

const value={number:10};

const multiply=(x={...value})=>{
    console.log((x.number *=2));
};

multiply();//20
multiply();//20
multiply(value)//40

