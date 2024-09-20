document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    
    // username and password
    const userName = document.getElementById('username-input').value;
    const passWord = document.getElementById('password-input').value;

    if(userName === 'shawon123' && passWord === '123'){
        window.location.href = '/home.html';
    }
    else{
        alert("You've put the wrong username or password");
    }

})