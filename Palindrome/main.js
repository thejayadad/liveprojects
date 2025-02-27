document.getElementById('checkButton').addEventListener('click', function() {
    // Get the input value
    const inputText = document.getElementById('inputText').value.trim();
  
    // Check if the input text is a palindrome
    const isPalindrome = inputText === inputText.split('').reverse().join('');
  
    // Display the result
    const resultElement = document.getElementById('result');
    if (isPalindrome) {
      resultElement.textContent = `"${inputText}" is a palindrome!`;
      resultElement.classList.add('success');
      resultElement.classList.remove('failure');
    } else {
      resultElement.textContent = `"${inputText}" is not a palindrome.`;
      resultElement.classList.add('failure');
      resultElement.classList.remove('success');
    }
  });
  