let input = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if (input.value === "") {
    alert("Please enter a task!");
  } else {
    // Create task div
    let newTask = document.createElement("div");
    newTask.classList.add("task");

    // Add text
    let taskText = document.createElement("p");
    taskText.innerText = input.value;

    // Add delete button
    let delBtn = document.createElement("button");
    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    delBtn.onclick = function () {
      newTask.remove();
    };

    // Append text and button
    newTask.appendChild(taskText);
    newTask.appendChild(delBtn);
    text.appendChild(newTask);

    // Clear input
    input.value = "";
  }
}
