document.getElementById('calculateTipBtn').addEventListener('click', function() {
    // Get the values from the input fields
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
  
    // Check if the inputs are valid numbers
    if (!isNaN(billAmount) && !isNaN(tipPercentage) && billAmount > 0 && tipPercentage >= 0) {
      // Calculate the tip and total
      const tipAmount = (billAmount * tipPercentage) / 100;
      const totalAmount = billAmount + tipAmount;
  
      // Display the result
      document.getElementById('tipResult').textContent = `Tip: $${tipAmount.toFixed(2)} | Total: $${totalAmount.toFixed(2)}`;
    } else {
      // Display error if inputs are invalid
      document.getElementById('tipResult').textContent = 'Please enter valid values for the bill and tip percentage.';
    }
  });
  