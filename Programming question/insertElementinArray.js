const myarray=[1,2,2];
myarray.splice(1,0,4)
console.log(myarray);

// using for loop
function insertElement(arr, element, position) {
    if (position < 0 || position > arr.length) {
        console.log("Invalid position. Element cannot be inserted.");
        return arr;
    }

    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === position) {
            newArray.push(element);
        }
        newArray.push(arr[i]);
    }

    if (position === arr.length) {
        newArray.push(element);
    }

    console.log(`Element ${element} inserted at position ${position}.`);
    return newArray;
}

// Example usage:
let myArray = [1, 2, 3, 4, 5];
let newElement = 6;
let insertPosition = 5;

let modifiedArray = insertElement(myArray, newElement, insertPosition);
console.log("Modified Array:", modifiedArray);
