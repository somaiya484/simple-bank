
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //get the input value from user
    const withdrawFiled = document.getElementById('withdraw-filed');
    const withdrawFiledAmountString = withdrawFiled.value;
    const withdrawFiledAmount = parseFloat(withdrawFiledAmountString);
    withdrawFiled.value = '';
    //check the validation of number
    if(isNaN(withdrawFiledAmount)){
        alert('Please enter a valid number');
        return
    }
    //push the value into withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // check the validation of right withdraw input
    if(withdrawFiledAmount > previousWithdrawTotal){
        alert('Your demand cross your current balance');
        return
    }
    const currentWithdrawTotal = previousWithdrawTotal + withdrawFiledAmount;
    withdrawTotal.innerText = currentWithdrawTotal;
    // cut the value from total amount of balance;
    const previousBalanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalAmountString = previousBalanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalAmountString);
    const currentBalance = previousBalanceTotalAmount - withdrawFiledAmount;
    previousBalanceTotal.innerText = currentBalance;

})