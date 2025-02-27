document.getElementById('runExercise').addEventListener('click', function() {
    // Step 1: Initialize an array of numbers
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
    // Step 2: Use the filter method to keep only odd numbers
    const oddNumbers = numbers.filter(function(number) {
      return number % 2 !== 0;
    });
  
    // Step 3: Display the result
    document.getElementById('output').textContent = 'Odd Numbers: ' + oddNumbers.join(', ');
  });
  