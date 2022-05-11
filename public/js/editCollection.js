const editCollectionHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#collectionName").value.trim();
    const description = document.getElementById("collectionDescription").value.trim();
    const private = document.querySelector('#collectionPrivate:checked') ? true : false;
    const id = document.querySelector('#collectionId').innerText;

    console.log(name, description)

    const response = await fetch(`/api/collections/${id}`, {
        method: "PUT",
        body: JSON.stringify({name, description, private}),
        headers: { "Content-Type": "application/json" },
    });
    console.log(response);

    if (!response.ok) {
        console.log("Please review input information.")
    } else {
        location.reload();
    }
};

document
    .querySelector("#editCollection")
    .addEventListener("click", editCollectionHandler);