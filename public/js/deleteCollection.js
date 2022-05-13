const userWarning = document.querySelector("#matchWarning");

const deleteCollectionHandler = async (event) => {
    event.preventDefault();

    const typedName = document.querySelector("#typedName").value.trim();
    const collectionName = document.querySelector("#deleteName").innerText;
    const collectionId = document.querySelector("#deleteId").innerText;
    console.log(typedName, collectionName)


    if (typedName === collectionName) {
        const response = await fetch(`/api/collections/${collectionId}`, {
            method: "DELETE",
            body: JSON.stringify({collectionId}),
            headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
            console.log("Please review input information.")
        } else {
            document.location.replace(`/dashboard`);
        }
    }
    else {
            userWarning.textContent = "Please ensure the collection names match. (Punctuation counts)";
        }

    };



document
    .querySelector("#deleteButton")
    .addEventListener("click", deleteCollectionHandler);