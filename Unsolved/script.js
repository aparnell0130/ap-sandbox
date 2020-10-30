//create variable to get elements
var calculateBtn = document.getElementById('submit');
var totalInput = document.getElementsByClassName('total');
var tipInput = document.getElementsByClassName('tip');
var tipAmount = document.getElementById('tip-amount');
var newTotal = document.getElementById('new-total');

// create function to calculate tip
function calculateTip(event) {
    event.preventDefault();
    var totalInputNum = parseInt(totalInput.value)
    var tipInputNum = parseInt(tipInput.value)

    var tipPercent = totalInputNum*(tipInputNum/100);
    // console.log(tipPercent, totalInput, tipInput);
    console.log(tipPercent)
    // return;
}

calculateBtn.addEventListener('click', calculateTip)