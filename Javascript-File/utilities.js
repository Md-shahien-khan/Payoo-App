function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}


function showSectionById(id){
    // hide all the section
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cashOut-section').classList.add('hidden');
    document.getElementById('transfer-section').classList.add('hidden');
    document.getElementById('get-bonus-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');
}