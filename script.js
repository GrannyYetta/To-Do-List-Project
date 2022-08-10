const locateFirstDiv = document.querySelector("#todo-list");

// First, we gitve the "Add To Do"-button functionality
let addToDo = document.querySelector("#submit-to-do");

let input = document.querySelector("#new-todo-input");

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

const createToDo = (task) => {
  const firstDiv = document.createElement("div");
  console.log(task);
  console.log("I would like to keep it on");
  const secondDiv = document.createElement("div");
  const checkbox = document.createElement("input");
  const taskList = document.createElement("li");
  taskList.innerText = task;
  locateFirstDiv
    .append(firstDiv)
    .append(secondDiv)
    .append(checkbox)
    .append(taskList);
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
