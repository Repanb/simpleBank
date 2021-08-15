document.getElementById('login-submit').addEventListener('click', function () {
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    //hard code
    if (userEmail == 'santan@baap.com' && userPassword == 'secret') {
        window.location.href = 'account.html';
    }
    else {
        alert('invalid user name or password');
    }
});

