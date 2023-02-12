document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawFiled = document.getElementById('withdraw-filed');
    const newWithdrawAmountString = withdrawFiled.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    const WithdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = WithdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    
    withdrawFiled.value = '';
    
    if(newWithdrawAmount > previousBalanceTotal){
        alert('bap er bank e ato taka nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    WithdrawTotalElement.innerText = currentWithdrawTotal;
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    balanceTotalElement.innerText = newBalanceTotal

})