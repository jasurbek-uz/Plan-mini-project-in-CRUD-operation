console.log("FrontEnd qismi ishga tushdi")

function itemTemplate(item) {
    return `<li style="margin-bottom: 4px;"
    class="list-group-item list-group-item-info align-items-center d-flex justify-content-between">
    <span class="item-text">
        ${item.plan}
    </span>
    <div>
        <button data-id="${item.id}" class="edit-me btn btn-secondary"
            style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">Edit</button>
        <button data-id="${item.id}" class="delete-me btn btn-danger"
            style="border-radius: 4px; margin-top: 10px; padding: 2px 10px 2px 10px">
            delete
        </button>
    </div>
</li>`;
}

let createField = document.getElementById("create-field")
 
document
.getElementById("create-form")
.addEventListener("sumbit", function(e){
e.preventDefault();

axios
.post("/create-item", { reja: createField.value })
.then((response) => {
    document
    .getElementById("item-list")
    .insertAdjacentHTML("beforeend", itemTemplate(response.data));
    createField.value = "";
    createField.focus();
});
.catch((err) =>{
    console.log("iltimos qaytadan harakat qiling!");
});
});