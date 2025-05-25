document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById('text-input');
    const checkButton = document.getElementById('check-btn');
    const result = document.getElementById('result');

    function isPalindrome(str) {
        // Remove all non-alphanumeric characters and convert to lowercase
        const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        
        // Compare the string with its reverse
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    checkButton.addEventListener('click', function() {
        // Check if input is empty
        if (!textInput.value) {
            alert('Please input a value');
            return;
        }

        const inputText = textInput.value;
        const isPal = isPalindrome(inputText);
        
        // Display the result
        result.textContent = `${inputText} is ${isPal ? '' : 'not '}a palindrome`;
    });
});