//Currying in Javascript
//Question 1-sum(2)(6)(1)

function sum(a){
    return function(b){
        return function(c){
            return a+b+c;

        };
    };
}

console.log(sum(2)(4)(6));

//Ques converts f(a,b,c) into f(a)(b)(c)

function curry(func){
    return function curriedFunc(...args) {
        if(func.length>=args.length){
            return func(...args);
        }
        else{
            return function(...next){
              return curriedFunc(...args, ...next);
            };
        }
    };
}

const sum= (a,b,c)=>a+b+c;
const totalSum =curry(sum);
console.log(totalSum(1)(2)(3));