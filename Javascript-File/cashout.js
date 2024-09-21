document.getElementById('btn-cash-out')
.addEventListener('click', function(e){
    e.preventDefault();

    const cashOutInput = getInputValueById('input-cash-out');
    const cashOutPin = getInputValueById('input-password-cashOut');
    

    if(isNaN(cashOutInput)){
        alert('failed to cash out');
    }
    if(cashOutPin === 123){
        const balance = getTextFieldValueById('account-balance');

        if(cashOutInput > balance){
            alert('you do not have that amount to cash out');
            return;
        }
        const newBalance = balance - cashOutInput;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerHTML = `
        <div class = "bg-green-300 p-2 rounded mb-1">
            <h4 class="text-xl font-bold">Cash Out Money</h4>
            <p>${cashOutInput} GBP. New Balance ${newBalance}</p>
        </div>
        `;

        // should be a common function
        document.getElementById('transaction-section').appendChild(p);
    }
    else{
        alert('Wrong Pin');
    }
});