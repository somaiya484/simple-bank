document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFiled = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('baper bank e ato taka nai')
    }

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal

    withdrawFiled.value = '';
})