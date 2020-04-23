let billAmount = parseFloat(prompt('What is your total bill?'));
let tipPersent = parseFloat(prompt('How much do you want to tip'));
let tip = tipPersent / 100;
let tipTotal = tip * billAmount;
let finalCost = billAmount + tipTotal;


if (isNaN(billAmount) || isNaN(tipPersent)) {
  alert('Invalid input data');
} else if (billAmount < 0 || tipPersent < 0 || tipPersent >100){
  alert('Invalid input data');
} else {
  alert(`Check number: ${billAmount} \nTip: ${tipPersent}% \nTip amount: ${tipTotal.toFixed(2)} \nTotal sum to pay: ${finalCost.toFixed(2)}`);

    console.log('The billAmount is ' + billAmount);
    console.log('The tipAmount is ' + tipPersent);
    console.log('The tip is ' + tipTotal);
    console.log('The total sum to pay is ' + finalCost);
}
