let arr=[1,5,4,87,6]

// console.log(Math.max(...arr))
//by for loop

function largestElement(arr){
    let largestNum=arr[0]
    for(let i=0;i<arr.length;i++){
    if(arr[i]>largestNum){
        largestNum=arr[i];
    }

    }
    return largestNum;
}

console.log(largestElement(arr))