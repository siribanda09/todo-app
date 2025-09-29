document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  let input = document.getElementById("taskInput");
  let taskText = input.value.trim();

  if (taskText === "") return;

  let li = document.createElement("li");
  
  // Task text span
  let span = document.createElement("span");
  span.textContent = taskText;

  // Mark complete on click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
    updateProgress();
  });

  // Delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", () => {
    li.remove();
    updateProgress();
  });
  li.appendChild(span);
  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);

  input.value = "";
  updateProgress();
}

function updateProgress() {
  let tasks = document.querySelectorAll("#taskList li");
  let completed = document.querySelectorAll("#taskList li.completed");

  let total = tasks.length;
  let done = completed.length;

  let progressText = "";

  if (total === 0) {
    progressText = "No tasks yet!";
  } else if (done === total) {
    progressText = ` All ${total} tasks completed! Great job!`;
  } else if (done > total / 2) {
    progressText = ` ${done} out of ${total} tasks done — more than halfway there!`;
  } else if (done > 0) {
    progressText = ` ${done} out of ${total} tasks done — keep going!`;
  } else {
    progressText = ` ${total} tasks pending. Start completing!`;
  }

  // Update text
  document.getElementById("progress").textContent = progressText;

  // Update progress bar
  let percentage = total === 0 ? 0 : (done / total) * 100;

  document.getElementById("progress-bar").style.width = percentage + "%";
}