function sumAndAverage(numbers) {
    // Get the sum of the numbers.
    const sum = numbers.reduce((a, b) => a + b);
  
    // Get the average of the numbers.
    const average = sum / numbers.length;
  
    // Return the sum and average.
    return { sum, average };
  }
 

  const numbers = [1, 2, 3, 4, 5];

const result = sumAndAverage(numbers);

console.log(result);