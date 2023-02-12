document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // push in current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalElementString = depositTotal.innerText;
    const depositTotalElement = parseFloat(depositTotalElementString);
    
    // added total deposit amount
    const currentDepositTotal = depositTotalElement + newDepositAmount;
    depositTotal.innerText = currentDepositTotal;

    // add new deposit with previous deposit
    const previousBalanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    previousBalanceTotalElement.innerText = currentBalanceTotal

    depositField.value = '';
})