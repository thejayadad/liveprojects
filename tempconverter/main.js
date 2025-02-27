document.getElementById('convertBtn').addEventListener('click', function() {
    // Get the value from the input
    const celsius = parseFloat(document.getElementById('celsius').value);
    
    // Check if the input is a valid number
    if (!isNaN(celsius)) {
      // Convert Celsius to Fahrenheit
      const fahrenheit = (celsius * 9/5) + 32;
  
      // Display the result
      document.getElementById('result').textContent = `${celsius}°C is equal to ${fahrenheit}°F`;
    } else {
      // Display error if input is not a valid number
      document.getElementById('result').textContent = 'Please enter a valid number.';
    }
  });
  