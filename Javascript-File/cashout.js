document.getElementById('btn-cash-out')
.addEventListener('click', function(e){
    e.preventDefault();

    const cashOutInput = getInputValueById('input-cash-out');
    const cashOutPin = getInputValueById('input-password-cashOut');
    
    if(cashOutPin === 123){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashOutInput;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong Pin');
    }
});