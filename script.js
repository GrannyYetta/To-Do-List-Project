// Selectors
const locateFirstDiv = document.querySelector("#todo-list");
let addToDo = document.querySelector("#submit-to-do");
let input = document.querySelector("#new-todo-input");
const missingTask = document.querySelector("#new-to-do");
// Event Listeners
addToDo.addEventListener("click", (e) => {
  // ---> so far, nothing should happen here when the button is clicked. page refresh cancelled.
  e.preventDefault();
  // creates variable that takes the input value and stores it
  const task = input.value;
  // if there's nothing typed, it console logs "add a task pls" , otherwise, you did a good job
  if (!task) {
    // missingTask.innerText = "Please add a task"; //logging instead of alert is a personal choice
    alert("Please add a task.");
    return;
  } else {
    console.log("Good job!");
  }
  // now we have to move the value we stored in the checklist

  // creates a new task line (I copy-pasted from index.html the code for input-group). Inside, we made a list and integrated the value saved in "task" as a string.
  // task_el.innerHTML += createTask(task);
  createToDo(task);
});

// Functions

/* here we create the function that we're gonna call in the click event abobe. 
 the var that contain the query selector must be delared globally otherwise there's an error ? */
const createToDo = (task) => {
  console.log(task);
  const firstDiv = document.createElement("div");
  firstDiv.classList.add("input-group");

  const secondDiv = document.createElement("div");
  secondDiv.classList.add("input-group-text");
  secondDiv.classList.add("low-priority");

  const checkbox = document.createElement("input");
  checkbox.classList.add("form-check-input");
  checkbox.classList.add("mt-0");
  checkbox.type = "checkbox";

  const taskList = document.createElement("p");
  taskList.classList.add("form-control");
  taskList.textContent = task;

  const buttonEdit = document.createElement("button");
  buttonEdit.classList.add("btn");
  buttonEdit.classList.add("btn-outline-secondary");

  const editIcon = document.createElement("i");
  editIcon.classList.add("bx");
  editIcon.classList.add("bx-edit-alt");

  const buttonDelete = document.createElement("button");
  buttonDelete.classList.add("btn");
  buttonDelete.classList.add("btn-outline-secondary");

  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("bx");
  deleteIcon.classList.add("bx-trash");

  locateFirstDiv.append(firstDiv);
  firstDiv.append(secondDiv, taskList, buttonEdit, buttonDelete);
  secondDiv.append(checkbox);
  buttonEdit.append(editIcon);
  buttonDelete.append(deleteIcon);

  checkbox.addEventListener("change", (e) => {
    const checkTaskOff = document.querySelector("#done-todo");
    if (checkbox.checked) {
      taskList.style.textDecoration = "line-through";
      checkTaskOff.append(firstDiv);
    } else {
      taskList.style.textDecoration = "none";
      locateFirstDiv.append(firstDiv);
    }
  });

  buttonEdit.addEventListener("click", (e) => {
    taskList.contentEditable = true;
  });

  buttonDelete.addEventListener("click", () => {
    firstDiv.remove();
  });

  input.value = "";
};

/*           <div class="input-group">
            <div class="input-group-text low-priority">
              <input class="form-check-input mt-0" type="checkbox" value="" />
            </div>
            <input
              type="text"
              class="form-control"
              placeholder="Low Priority"
            />
            <button class="btn btn-outline-secondary" type="button" id="edit">
              <i class="bx bx-edit-alt"></i>
            </button>
            <button class="btn btn-outline-secondary" type="button" id="delete">
              <i class="bx bx-trash"></i>
            </button>
          </div> */

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
