const addCollectionHandler = async (event) => {

    const name = document.querySelector("#collection").value.trim();
    const description = document.querySelector("#collectionDescription").value.trim();
    const private = document.querySelector('#collectionPrivate:checked') ? true : false;
    const username = document.querySelector('#userName').innerText;
    console.log(document.getElementById('userName').innerText);

    // make sure a collection name has been provided at a minimum.
    if (!name) {
        fieldWarning.textContent = "Please provide a collection name.";
        return;
    }

    const response = await fetch("/api/collections", {
        method: "POST",
        body: JSON.stringify({name, description, private}),
        headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
        alert("Please review input information.")
    } else {
        document.location.replace(`/${username}/dashboard`);
    }
};

document
    .querySelector("#save-button")
    .addEventListener("click", addCollectionHandler);
