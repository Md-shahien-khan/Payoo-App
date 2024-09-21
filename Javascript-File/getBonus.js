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


        // add to transaction history
        const p = document.createElement('p');
        p.innerHTML = `
        <div class = "bg-blue-300 p-2 rounded mb-1">
            <h4 class="text-xl font-bold">Bonus Amount</h4>
            <p>10% GBP Bonus Added. New Balance ${newBalance}</p>
        </div>
        `;

        // should be a common function
        document.getElementById('transaction-section').appendChild(p);
    }
    else{
        alert('wrong pin or code');
    }
});