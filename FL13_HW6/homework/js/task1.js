let billAmount = parseFloat(prompt('What is your total bill?'));
let tipPersent = parseFloat(prompt('How much do you want to tip'));
let tip = tipPersent / 100;
let tipTotal = tip * billAmount;
let finalCost = billAmount + tipTotal;

if (isNaN(billAmount) || isNaN(tipPersent)) {
  alert('Invalid input data');
} else if (billAmount < 0 || tipPersent < 0 || tipPersent > 100){
  alert('Invalid input data');
} else {
  alert(`Check number: ${billAmount} \nTip: ${tipPersent}% \nTip amount: ${tipTotal.toFixed(2)} \nTotal sum to pay: ${finalCost.toFixed(2)}`);
}
