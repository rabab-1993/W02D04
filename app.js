const body1 = document.querySelector("body");
let heading = document.createElement("h1");
heading.textContent = "To do list";
let ul = document.createElement("ul");
body1.append(heading, ul);

let todos = ['wake up', 'eat breakfast', 'code'];
 
let renderList = () => {
   
    for (let index = 0; index < todos.length; index++) {
        let list = document.createElement("li");
        list.textContent = `${todos[index]}`;
        ul.appendChild(list);
    }
}

renderList()

