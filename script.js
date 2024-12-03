document.getElementById('loginButton').addEventListener('click', function() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Dummy validation
    if (username === 'teamuser' && password === 'team123') {
        alert('Login Successful!');
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
