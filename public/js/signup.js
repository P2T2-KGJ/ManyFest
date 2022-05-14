const userWarning = document.querySelector("#user-warning");
const passwordWarning = document.querySelector("#password-warning");
const fieldWarning = document.querySelector("#fields-warning");

const signupFormHandler = async (event) => {
    event.preventDefault();
    userWarning.textContent = ""
    passwordWarning.textContent = ""
    fieldWarning.textContent = ""
    
    const username = document.querySelector("#signup-name").value.trim();
    const email = document.querySelector("#signup-email").value.trim();
    const password = document.querySelector("#signup-password").value.trim();
    const passConfirm = document
        .querySelector("#signup-password-confirm")
        .value.trim();

    // make sure all fields are filled out
    if (!username || !email || !password || !passConfirm) {
        fieldWarning.textContent = "All fields must be filled out.";
        return;
    }

    // make sure password is at least 8 characters long
    if (password.length < 8) {
        passwordWarning.textContent =
            "Password must be at least 8 characters long";
            return;
    }

    // make sure password matches
    else if (password !== passConfirm) {
        passwordWarning.textContent = "Password must match.";
        return;
    }

    const response = await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify({ username, email, password }),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        userWarning.textContent = "Username or email already in use.";
        if (passwordWarning.textContent) passwordWarning.textContent = "";
        if (fieldWarning.textContent) fieldWarning.textContent = "";
    } else {
        document.location.replace(`${username}/dashboard`);
    }
};

document
    .querySelector("#signup-submit-button")
    .addEventListener("click", signupFormHandler);
