const login = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        // this should be handled via html element instead of an alert
        window.alert("email and password fields cannot be empty");
    }

    try {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
        console.log(response);
        if (!response.ok) {
            // this should be an element of some sort, not a window alert
            window.alert("Login failed. Please try again.");
        }
        window.location.replace(`/dashboard`)
    } catch (err) {
        console.error(err);
    }
};

document.querySelector(".login-form").addEventListener("submit", login);
