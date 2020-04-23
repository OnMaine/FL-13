let billAmount = parseFloat(prompt('What is your total bill?'));
let tipAmount = parseFloat(prompt('How much do you want to tip'));

if(isNaN(billAmount) || isNaN(tipAmount)){
     alert('Invalid input data');
} else if (billAmount < 0 || tipAmount < 0){
         alert('Invalid input data');
    } else {
        alert(
          `Check number: ${billAmount} \nTip: ${tipAmount} \nTip amount: ${tip} \nTotal sum to pay: ${tipTotal}`
        );



    let tip = tipAmount / 100;
    let tipTotal = tip * billAmount;

    console.log('The tip is ' + tipTotal);
    console.log('The total bill is ' + finalCost(billAmount, tipTotal));
}

function finalCost(billAmount, tipTotal) {
  return billAmount + tipTotal;
}
