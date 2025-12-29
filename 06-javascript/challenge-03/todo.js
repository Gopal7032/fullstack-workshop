const taskInput = document.getElementById("taskInput");
const categorySelect = document.getElementById("categorySelect");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filterButtons = document.querySelectorAll(".filter");

// localStorage for todos
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// saving to localStorage
function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// render todos
function renderTodos(filter = "All") {
  taskList.innerHTML = "";

  const filteredTodos =
    filter === "All"
      ? todos
      : todos.filter(todo => todo.category === filter);

  filteredTodos.forEach(todo => {
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    checkbox.addEventListener("change", () => {
      todo.completed = checkbox.checked;
      saveTodos();
    });

    // Task text
    const span = document.createElement("span");
    span.innerText = `${todo.text} [${todo.category}]`;

    if (todo.completed) {
      span.style.textDecoration = "line-through";
    }

    checkbox.addEventListener("change", () => {
      span.style.textDecoration = checkbox.checked
        ? "line-through"
        : "none";
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.style.marginLeft = "10px";

    deleteBtn.addEventListener("click", () => {
      todos = todos.filter(t => t.id !== todo.id);
      saveTodos();
      renderTodos(filter);
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// add new todo
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const newTodo = {
    id: Date.now(),
    text: taskText,
    category: categorySelect.value,
    completed: false
  };

  todos.push(newTodo);
  saveTodos();
  renderTodos();

  taskInput.value = "";
});

//filter todos
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;
    renderTodos(category);
  });
});



//  Initial render
renderTodos();