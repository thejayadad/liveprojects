document.getElementById('addTaskBtn').addEventListener('click', addTask);

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="task-text">${taskText}</span>
      <button class="delete-btn">Delete</button>
    `;
    taskList.appendChild(li);
    taskInput.value = '';

    // Mark task as completed
    li.querySelector('.task-text').addEventListener('click', () => {
      li.querySelector('.task-text').classList.toggle('completed');
    });

    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });
  }
}
