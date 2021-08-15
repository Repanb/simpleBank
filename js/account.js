document.getElementById('deposite-submit').addEventListener('click', function () {
    //set input
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmount = parseFloat(depositeInput.value);
    if (depositeInput.value == '') {
        alert('Please enter amount')
    }
    else {
        //set deposite balance
        const previousDeposite = document.getElementById('deposite-total');
        const previousDepositeTotalText = previousDeposite.innerText;
        const previousDepositeTotal = parseFloat(previousDepositeTotalText);
        const newDepositeTotal = previousDepositeTotal + depositeAmount;
        previousDeposite.innerText = newDepositeTotal;
        //set balance total
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const totalBalance = parseFloat(balanceTotalText);
        const newTotalBalance = totalBalance + depositeAmount;
        balanceTotal.innerText = newTotalBalance;
        // clear input field
        depositeInput.value = '';
    }
});
// handling withdraw button
document.getElementById('withdraw-submit').addEventListener('click', function () {
    //set withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountText);
    if (withdrawInput.value == '') {
        alert('Please enter amount')
    }
    else {
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
    }
});
