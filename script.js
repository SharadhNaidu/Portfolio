function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskTime = document.getElementById('taskTime');
    const taskList = document.getElementById('taskList');

    if (taskInput.value === '' || taskTime.value === '') return;

    const listItem = document.createElement('li');
    listItem.textContent = `${taskInput.value} - ${taskTime.value}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => listItem.remove();

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);

    taskInput.value = '';
    taskTime.value = '';
}
