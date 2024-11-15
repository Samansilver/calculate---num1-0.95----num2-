const FirstNum = document.querySelector('.first');
const SecondNum = document.querySelector('.second');


function calculate() {
  // Get the values from the input fields
  const num1 = parseFloat(FirstNum.value) || 0;
  const num2 = parseFloat(SecondNum.value) || 0;
  const ResultDisplay = document.querySelector('#result');

  // Add the numbers
  const result = (num1*0.95) - num2;

  // Display the result
  ResultDisplay.textContent = `${result}`;
}

// Add event listeners to input fields
FirstNum.addEventListener('input', calculate);
SecondNum.addEventListener('input', calculate);



