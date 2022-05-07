const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#userName').value.trim();
    const email = document.querySelector('#emailAddress').value.trim();
    const password = document.querySelector('#password').value.trim();


    if (name && email && password) {
        const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password}),
        headers: { 'Content-Type': 'application/json' },
        });
      }

      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to log in');
      }
    };

  document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);