//  const GITHUB_API="https://api.github.com/users/akshaymarch7";

//  const user=fetch(GITHUB_API);

//  console.log(user);
 
const p1=new Promise((resolve, reject)=>{
   setTimeout(()=>resolve("p1 success"),3000);
   //setTimeout(()=>reject("p1 Fail"),1000);
});

const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("p2 success"),4000);
    //setTimeout(()=>rejcect("p2 Fail"),3000);
})
const p3= new Promise((resolve,reject)=>{
    //setTimeout(()=>resolve("p3 success"),3000);
    setTimeout(()=>reject("p3 Fail"),2000);
})

Promise.race([p1,p2,p3]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
});