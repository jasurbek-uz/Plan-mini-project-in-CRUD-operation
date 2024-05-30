
console.log("FrontEnd JS ishga tushdi");

let createField = document.getElementById("create-field");

function itemTemplate(data) {
  console.log(data)
    return (`<li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${data.plan}</span>
    <div>
      <button data-id="${data._id}" class="edit-me btn btn-secondary btn-sm mr-1">
        O'zgartirish
      </button>
      <button data-id="${data._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
    </div>
  </li>`);
}

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();

  axios.post("/create-item", { plan: createField.value })
    .then((response) => {
      document.getElementById("item-list").insertAdjacentHTML(
        "beforeend",
        itemTemplate(response.data)
      );
      createField.value = "";
      createField.focus();
    })
    .catch((err) => {
      console.log("Error creating item:", err); // More specific error handling
    });
});
// delete item
document.addEventListener("click", function (e) {
  // Delete operation 
  if (e.target.classList.contains("delete-me")) {
    if (confirm("Aniq o'chirmoqchimisiz?")) {
      axios.post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => { 
          console.log("Item deleted successfully:", response.data);
          e.target.parentElement.parentElement.remove();
        })
        .catch((err) => {
          console.log("Error deleting item:", err);
        });
    }
  }

  // Edit operation 
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "Add something new or modify it!",
      e.target.parentElement.parentElement
        .querySelector(".item-text")
        .innerHTML.trim()
    );

    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);

          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerHTML = userInput;
        })
        .catch((err) => {
          console.log("Please, try again later!");
        });
    }
  }


});
// delete all operation
document.getElementById("clear-all").addEventListener("click", function(){
  axios.post("/delete-all", {delete_all:true}).then(response =>{
    alert(response.data.state);
  n
    document.querySelectorAll('.list-group-item').forEach(item => {
      item.remove();
  });
  })
})