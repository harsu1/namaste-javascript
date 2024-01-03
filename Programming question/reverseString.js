const str='HelloHarsh';
// const reversedString=str.split('').reduce((acc,char)=>char+acc, "");
const reversedString=str.split('').reverse().join('');
console.log(reversedString);