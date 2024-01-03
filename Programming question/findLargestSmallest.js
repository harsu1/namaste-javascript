function FindLargestSmall(arr){
    if (arr.length===0){
        console.log("Array is emplty");
        return;
    }
    let largest=arr[0];
    let smallest=arr[0];
    for(let i=1; i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
        if(arr[i]<smallest){
            smallest=arr[i]
        }
    }
    console.log("The largest element is:", largest);
    console.log("The smallest element is:", smallest);
    return {largest,smallest};
}
let myArray = [12, 45, 67, 89, 34, 56];
FindLargestSmall(myArray);