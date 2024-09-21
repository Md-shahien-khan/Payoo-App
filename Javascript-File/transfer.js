document.getElementById('btn-transfer')
.addEventListener('click', function(e){
    e.preventDefault();

    const transferInput = getInputValueById('input-transfer');
    const accountNumber = getInputValueById('input-transfer-account-number');
    const transferPin = getInputValueById('input-pin-transfer');

    if(isNaN(transferInput)){
        alert('failed to cash out');
    }
    if(transferPin === 123 && accountNumber === 101010){
        const balance = getTextFieldValueById('account-balance');

        if(transferInput > balance){
            alert('you do not have that amount to cash out');
            return;
        }
        const newBalance = balance - transferInput;

        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerHTML = `
        <div class = "bg-pink-300 p-2 rounded mb-1">
            <h4 class="text-xl font-bold">Money Transfer</h4>
            <p>${transferInput} GBP. New Balance ${newBalance}</p>
        </div>
        `;

        // should be a common function
        document.getElementById('transaction-section').appendChild(p);
    }
    else{
        alert('Wrong Pin');
    }
});