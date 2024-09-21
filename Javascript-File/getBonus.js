document.getElementById('btn-bonus').addEventListener('click', function(e){
    e.preventDefault();

    const bonusCode = getInputValueById('input-bonus');
    // const bonusCodeString = parseInt(bonusCode)
    const bonusPin = getInputValueById('input-pin-bonus');

    if(bonusCode === 102024 && bonusPin === 123){
        const balance = getTextFieldValueById('account-balance');
        const bonus = (balance / 100) * 10;
        const newBalance = balance + bonus;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('wrong pin or code');
    }
});