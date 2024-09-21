document.getElementById('btn-add-money')
.addEventListener('click', function(e){
    e.preventDefault();

    const addMoney = getInputValueById('input-add-money');
    const pin = getInputValueById('input-password-addMoney');

    // if((nun))
    if(pin === 123){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = addMoney + balance;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong Password');
    }
});

