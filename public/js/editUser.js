const editUserHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#editUserName").value.trim();
    const email = document.getElementById("editUserEmail").value.trim();
    const id = document.getElementById("userId").innerText;

    console.log(username, email)

    const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        body: JSON.stringify({username, email}),
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
    .querySelector("#saveEditUser")
    .addEventListener("click", editUserHandler);