// varibals

const body1 = document.querySelector("body");
let todos = ["wake up", "eat breakfast", "code", "sleeping"];
let delbtn = document.querySelector('.del');

// creating h1

let heading = document.createElement("h1");
heading.textContent = "To do list";

// creat input and buttons
let input = document.createElement("input");
let bttn = document.createElement("button");
bttn.textContent = "Add";
input.className = "form-control"
bttn.className = "btn btn-outline-secondary"

// creat ul
let ul = document.createElement("ul");
body1.append(heading, input, bttn, ul);

// creat list
let renderList = () => {
    ul.innerHTML = ""
  for (let index = 0; index < todos.length; index++) {
    let list = document.createElement("li");
    list.textContent = `${todos[index]}`;
    ul.appendChild(list);
// creat deleate bttn
    let deleteBttn = document.createElement("button");
    // deleteBttn.textContent = "delete";
    deleteBttn.className = "bi bi-trash-fill";
    list.append(deleteBttn);
    // delete List Item
    deleteBttn.addEventListener("click", (e) => {
        let delLi = e.target
        delLi.parentNode.remove()
    })
}
};
renderList();

// addToList
let addToList = (on) => {
  todos.push(input.value);
  input.value = "";
  console.log(todos);

  renderList();
};

bttn.addEventListener("click", addToList);
