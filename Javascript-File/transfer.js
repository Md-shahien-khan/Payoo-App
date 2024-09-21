document.getElementById('btn-transfer')
.addEventListener('click', function(e){
    e.preventDefault();

    const transferInput = getInputValueById('input-transfer');
    const accountNumber = getInputValueById('input-transfer-account-number');
    const transferPin = getInputValueById('input-pin-transfer');

    if(transferPin === 123 && accountNumber === 101010){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - transferInput;

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Wrong Pin');
    }
});