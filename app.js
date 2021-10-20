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

// creat ul
let ul = document.createElement("ul");
body1.append(heading, input, bttn, ul);

// creat list
let renderList = () => {
  for (let index = 0; index < todos.length; index++) {
    let list = document.createElement("li");
    list.textContent = `${todos[index]}`;
    ul.appendChild(list);
    let deleteBttn = document.createElement("button");
    deleteBttn.textContent = "delete";
    deleteBttn.className = "del";
    list.append(deleteBttn);
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

 // delete List Item
 let deleteListItem = () => {
    
    
  };
 

bttn.addEventListener("click", addToList);
