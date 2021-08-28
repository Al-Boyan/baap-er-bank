//handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balancePreviousTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = balancePreviousTotal + newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;

    depositInput.value = '';
});

//handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {

    const newWithdraw = document.getElementById('withdraw-input');
    const newWithdrawText = newWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    const previousWithdraw = document.getElementById('withdraw-total');
    const previousWithdrawText = previousWithdraw.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    previousWithdraw.innerText = newWithdrawTotal;

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balancePreviousTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = balancePreviousTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;

    newWithdraw.value = '';
})