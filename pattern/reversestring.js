 var str= "how are you Harsh";
var savedstr=
 str.split(" ").map(function(word){
       return word.split("").reverse().join("")
 })
console.log( savedstr.join(" "));