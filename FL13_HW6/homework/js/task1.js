let billAmount = parseFloat(prompt('What is your total bill?'));
let tipPerсent = parseFloat(prompt('How much do you want to tip'));
const maxPerсent = 100;
const precisionNumber = 2;
let tip = tipPerсent / maxPerсent;
let tipTotal = tip * billAmount;
let finalCost = billAmount + tipTotal;

if (isNaN(billAmount) || isNaN(tipPerсent)) {
  alert('Invalid input data');
} else if (billAmount < 0 || tipPerсent < 0 || tipPerсent > maxPerсent) {
  alert('Invalid input data');
} else {
  alert(`Check number: ${billAmount}\
     \nTip: ${tipPerсent}%\
     \nTip amount: ${tipTotal.toFixed(precisionNumber)}\
     \nTotal sum to pay: ${finalCost.toFixed(precisionNumber)}`);
}
