let billAmount = parseFloat(prompt('What is your total bill?'));
let tipPersent = parseFloat(prompt('How much do you want to tip'));
const maxPersent = 100;
const floatNumber = 2;
let tip = tipPersent / maxPersent;
let tipTotal = tip * billAmount;
let finalCost = billAmount + tipTotal;

if (isNaN(billAmount) || isNaN(tipPersent)) {
  alert('Invalid input data');
} else if (billAmount < 0 || tipPersent < 0 || tipPersent > maxPersent){
  alert('Invalid input data');
} else {
  alert(`Check number: ${+billAmount}\
     \nTip: ${+tipPersent}%\
     \nTip amount: ${+tipTotal.toFixed(floatNumber)}\
     \nTotal sum to pay: ${+finalCost.toFixed(floatNumber)}`);
}
