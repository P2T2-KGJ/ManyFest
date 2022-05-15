const loginWarning = document.querySelector("#loginwarning");

const login = async (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        loginWarning.textContent = "Please pass a username and password";
        return;
    }

    try {
        const response = await fetch("/api/users/login", {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
        });
        console.log(response);
        if (!response.ok) {
            loginWarning.textContent = "Username and/or password is incorrect.";
        } else {
        window.location.replace(`/dashboard`)}
    } catch (err) {
        console.error(err);
    }
};

document.querySelector(".login-form").addEventListener("submit", login);
