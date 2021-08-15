//handle deposite button
document.getElementById('deposite-submit').addEventListener('click', function () {
    //get the ammout deposited
    const depositeInput = document.getElementById('deposite-input');

    const newDepositeAmountText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeAmountText);
    // console.log(newDepositeAmount);
    //update deposite total
    const depositeTotal = document.getElementById('deposite-total');

    const previousDepositeAmountText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);

    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;
    //const newDepositeTotal = parseFloat(previousDepositeAmountText + newDepositeAmountText);

    depositeTotal.innerText = newDepositeTotal;

    //update account balance
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = newBalanceTotal;


    //clear the deposite input field
    depositeInput.value = '';
});

// handling withdraw button
document.getElementById('withdraw-submit').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    console.log(function(){});

    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    console.log(newWithdrawAmount);

    // update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);


    const newWithdrawTotal = newWithdrawAmount + previousWithdrawTotal;

    withdrawTotal.innerText = newWithdrawTotal;

    // update balanece after withdraw 
    const balanceTotal = document.getElementById('balance-total');

    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    //clear the withdraw input field
    withdrawInput.value = '';
});
