// document.getElementById('btn-withdraw').addEventListener('click', function(){
//     const withdrawFiled = document.getElementById('withdraw-filed');
//     const newWithdrawAmountString = withdrawFiled.value;
//     const newWithdrawAmount = parseFloat(newWithdrawAmountString);

//     const WithdrawTotalElement = document.getElementById('withdraw-total');
//     const previousWithdrawTotalString = WithdrawTotalElement.innerText;
//     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

//     withdrawFiled.value = '';

//     if(isNaN(newWithdrawAmount)){
//         alert('Please provide a number');
//         return;
//     }

//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//     if(newWithdrawAmount > previousBalanceTotal){
//         alert('bap er bank e ato taka nai');
//         return;
//     }

//     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
//     WithdrawTotalElement.innerText = currentWithdrawTotal;
//     const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

//     balanceTotalElement.innerText = newBalanceTotal

// })








document.getElementById('btn-withdraw').addEventListener('click', function(){
    //get the input value from withdraw
    const withdrawFiled = document.getElementById('withdraw-filed');
    const withdrawFiledAmountString = withdrawFiled.value;
    const withdrawFiledAmount = parseFloat(withdrawFiledAmountString);

})