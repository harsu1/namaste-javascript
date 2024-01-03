function DeleteElement(arr,position){
    if(position<0||position>=arr.length){
        console.log("Invalid position. Element cannot be deleted");
        return arr;
    }

    let newArray=[];
    for(let i=0; i<arr.length;i++){
        if(i!==position){
            newArray.push(arr[i]);
        }
    }
    console.log(`Element at position ${position} deleted.`);
    return newArray;
}

let myArray = [1, 2, 3, 4, 5];
let deletePosition = 4;

let modifiedArray = DeleteElement(myArray, deletePosition);
console.log("Modified Array:", modifiedArray);