// document.getElementById('btn-deposit').addEventListener('click', function(){
//     const depositField = document.getElementById('deposit-field');
//     // const newDepositAmount = depositField.value; ata nibo na. kanona ata string akare acha. atake parsefloat kore number e nite hobe. 
//     const newDepositAmountString = depositField.value;
//     const newDepositAmount = parseFloat(newDepositAmountString);

//     const depositTotalElement = document.getElementById('deposit-total');
//     // const previousDepositTotal = depositTotalElement.innerText;akoi vabe previous keo number e nite hobe string theke.

//     const previousDepositTotalElementString = depositTotalElement.innerText;
//     const previousDepositTotal = parseFloat(previousDepositTotalElementString);
//     const currentDepositTotal = previousDepositTotal + newDepositAmount;

//     depositTotalElement.innerText = currentDepositTotal;
    
//     const balanceTotalElement = document.getElementById('balance-total');
//     const previousBalanceTotalString = balanceTotalElement.innerText;
//     const previousBalanceTotal = parseFloat(previousBalanceTotalString);
//     const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
//     balanceTotalElement.innerText = currentBalanceTotal; 

//     depositField.value = '';
// })


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

    // add new deposit to previous deposit
    const previousBalanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = previousBalanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    previousBalanceTotalElement.innerText = currentBalanceTotal

    depositField.value = '';
})