const p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("promis Resolved");
    },10000)
    
});

//await only be used inside an async func
// async function handlePromise(){
//     const val =await p;
//     console.log("Namste harsh");
//     console.log(val);
// }
// handlePromise();

// Older way to handling promises

// function getdata(){
//     //here js Engine will not wait for Promise to be Resolved
//     p.then((res) => console.log(res));
//     console.log("Namste harsh");
// }
// getdata();

const API_URL="https://api.github.com/users/harsu1"
async function handlePromise(){
 try{
    const data=await fetch(API_URL)
   const jsonValue= await data.json()

   console.log(jsonValue);
 }catch(err){
    console.log(err);
 }
    
}
handlePromise();

