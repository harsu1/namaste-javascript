//Async js programming

//callbacks, promises, Async & await
// const datas=[
//     {name:"Ajay",proffesion:"software Engineer"},
//     {name:"Anuj",proffesion:"software Engineer"}
// ];
// function getdatas(){
//     setTimeout(()=>{
//         let output=""
//      datas.forEach((data, index)=>{
//       output+=`<li>${data.name}</li>`;

//      });
//      document.body.innerHTML=output
//     },1000);
// }
// function createdata(newdata, callback){
//     setTimeout(() => {
//         datas.push(newdata);
//         callback();
//     }, 2000);   
// }
// getdatas();
// createdata({name:"Vivek",Proffession:"software Engineer"},getdatas)

let arr=["harsh","sahu"];

let object={
    name:"harsh",
    city:"ghaziabad",
    getIntro: function(){
        console.log(this.name + 'from' +this.city);
    }
}