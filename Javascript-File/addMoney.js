document.getElementById('btn-add-money')
.addEventListener('click', function(e){
    e.preventDefault();

    const addMoney = getInputValueById('input-add-money');
    const pin = getInputValueById('input-password-addMoney');

    if(isNaN(addMoney)){
        alert('failed to add money');
    }
    if(pin === 123){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = addMoney + balance;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const p = document.createElement('p');
        p.innerHTML = `
        <div class = "bg-purple-300 p-2 rounded mb-1">
            <h4 class="text-xl font-bold">Add Money</h4>
            <p>${addMoney} GBP. New Balance ${newBalance}</p>
        </div>
        `;

        // should be a common function
        document.getElementById('transaction-section').appendChild(p);

    }
    else{
        alert('Wrong Password');
    }
});

