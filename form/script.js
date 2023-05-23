'use strict'

// Get input elements
const celsiusInput = document.querySelector('.celsius--converter input');
const fahrenheitInput = document.querySelector('.fahrenheit--converter input');

// Celsius to Fahrenheit conversion function
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Update Fahrenheit input and store in sessionStorage when Celsius input changes
celsiusInput.addEventListener('input', function() {
  const celsiusValue = parseFloat(celsiusInput.value);
  
  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = convertCelsiusToFahrenheit(celsiusValue);
    fahrenheitInput.value = fahrenheitValue.toFixed(2);
    sessionStorage.setItem('fahrenheitValue', fahrenheitValue.toFixed(2));
  } else {
    fahrenheitInput.value = '';
    sessionStorage.removeItem('fahrenheitValue');
  }
});

// Retrieve and populate Fahrenheit input from sessionStorage on page load
document.addEventListener('DOMContentLoaded', function() {
  const storedFahrenheitValue = sessionStorage.getItem('fahrenheitValue');
  
  if (storedFahrenheitValue) {
    fahrenheitInput.value = storedFahrenheitValue;
  }
});
