




// JavaScript for login page interactivity
document.querySelector('.login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username.trim() === '' || password.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate login (replace with actual API call)
    console.log('Logging in with:', username, password);
    alert('Login successful! Redirecting...');
    // Redirect to dashboard or home page
    window.location.href = 'index.html';
});
