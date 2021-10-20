const body1 = document.querySelector("body");
let heading = document.createElement("h1");
heading.textContent = "To do list";
let ul = document.createElement("ul");
body1.append(heading, ul);

// creat list
let todos = ['wake up', 'eat breakfast', 'code'];
let renderList = () => {
    for (let index = 0; index < todos.length; index++) {
        let list = document.createElement("li");
        list.textContent = `${todos[index]}`;
        ul.appendChild(list);
    }
}

renderList()

// creat input and buttons
let input = document.createElement("input");
let bttn = document.createElement("button");
bttn.textContent = "Add";
body1.append(input, bttn)
// addToList
bttn.addEventListener("click", () => {
    todos.push(input.value);
    input.value = ""
    console.log(todos);
})

// delete List Item
// let deleteListItem = () =>{
//     let deleteBttn = document.createElement("button");
//     deleteBttn.textContent ="delete";
//     list.append(deleteBttn)
//     deleteBttn.addEventListener("click", deleteListItem)
    
// }