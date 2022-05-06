const login = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
          });

    if (response.ok) {
        document.location.replace('/');
        } else {
            alert('Login failed. Please try again.')
        }
    }
}

document
  .querySelector('.login-form')
  .addEventListener('submit', login);