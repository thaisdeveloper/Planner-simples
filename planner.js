const taskInput = document.querySelector('input[type="text"]');
const dateInput = document.querySelector('input[type="date"]');
const addTaskButton = document.querySelector('button');
const taskList = document.querySelector('.task-list');

addTaskButton.addEventListener('click', function() {
  const taskText = taskInput.value;
  const taskDate = dateInput.value;
  
  if (taskText.trim() !== '' && taskDate.trim() !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskText} - ${taskDate}`;
    taskList.appendChild(taskItem);
    taskInput.value = '';
    dateInput.value = '';
  }
});
