function isPalindrome(str){
    var rev=str.split('').reverse().join('');

    if(rev==str){
        return true;

    }
    return false;
}
console.log(isPalindrome("race"))