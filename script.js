// Selectors
const locateFirstDiv = document.querySelector("#todo-list");
let addToDo = document.querySelector("#submit-to-do");
let input = document.querySelector("#new-todo-input");

// Event Listeners
addToDo.addEventListener("click", (e) => {
  // ---> so far, nothing should happen here when the button is clicked. page refresh cancelled.
  e.preventDefault();
  // creates variable that takes the input value and stores it
  const task = input.value;
  // if there's nothing typed, it console logs "add a task pls" , otherwise, you did a good job
  if (!task) {
    console.log("add a task pls"); //logging instead of alert is a personal choice
  } else {
    console.log("Good job!");
  }
  // now we have to move the value we stored in the checklist
  const task_el = document.querySelector("#todo-list");

  console.log(task_el);
  // creates a new task line (I copy-pasted from index.html the code for input-group). Inside, we made a list and integrated the value saved in "task" as a string.
  // task_el.innerHTML += createTask(task);
  createToDo(task);
});




// Functions

/* here we create the function that we're gonna call in the click event abobe. 
 the var that contain the query selector must be delared globally otherwise there's an error ? */
const createToDo = (task) => {
  const firstDiv = document.createElement("div"); 
  //firstDiv.classList("input-group"); 
  const secondDiv = document.createElement("div");
  //secondDiv.classList("input-group-text");
  const checkbox = document.createElement("input");
  //checkbox.classList("form-check-input mt-0");
  const taskList = document.createElement("li");
  //taskList.classList("form-control");
  taskList.innerText = task;
  const buttonEdit = document.createElement("button");
  const buttonDelete = document.createElement("button")
  locateFirstDiv.append(firstDiv);
  firstDiv.append(secondDiv, taskList, buttonEdit, buttonDelete);
  secondDiv.append(checkbox);
};


// const createTask = (task) => {
//   return `<div class="input-group">
// <div class="input-group-text high-priority">
//   <input class="form-check-input mt-0" type="checkbox" value="" />
// </div>
// <li
//   class="form-control"
// /> ${task}
// </li>
// <button class="btn btn-outline-secondary" type="button" id="edit">
//   <i class="bx bx-edit-alt"></i>
// </button>
// <button class="btn btn-outline-secondary" type="button" id="delete">
//   <i class="bx bx-trash"></i>
// </button>
// </div>`;
// };
