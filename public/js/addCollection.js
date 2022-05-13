const addCollectionHandler = async (event) => {
    const name = document.querySelector("#collection").value.trim();
    const description = document
        .querySelector("#collectionDescription")
        .value.trim();
    const private = document.querySelector("#collectionPrivate").checked;
    const username = document.querySelector("#username").innerText;

    // make sure a collection name has been provided at a minimum.
    if (!name) {
        fieldWarning.textContent = "Please provide a collection name.";
        return;
    }

    const user_id = await fetch(`/users/${username}`);

    const response = await fetch("/api/collections", {
        method: "POST",
        body: JSON.stringify({ name, description, private, user_id }),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        alert("Please review input information.");
    } else {
        document.location.replace(`/dashboard`);
    }
};

document
    .querySelector("#save-button")
    .addEventListener("click", addCollectionHandler);
