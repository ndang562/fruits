// Function to divide strings into two arrays based on even and odd lengths
function divideEvenOddLengths(strings) {
  const evenLengthStrings = [];
  const oddLengthStrings = [];

  strings.forEach(str => {
    if (str.length % 2 === 0) {
      evenLengthStrings.push(str);
    } else {
      oddLengthStrings.push(str);
    }
  });

  return {
    evenLengthStrings,
    oddLengthStrings
  };
}

// Example usage
const fruits = ['apple', 'banana', 'orange', 'kiwi', 'strawberry'];
const result = divideEvenOddLengths(fruits);
console.log('Even length strings:', result.evenLengthStrings);
console.log('Odd length strings:', result.oddLengthStrings);

