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

        // add to transaction history
        const p = document.createElement('p');
        p.innerText = `Added : ${addMoney} GBP. Balance : ${newBalance}`;

        // should be a common function
        document.getElementById('transaction-section').appendChild(p);

    }
    else{
        alert('Wrong Password');
    }
});

