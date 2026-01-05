//Day 25 - Event Listeners
//Professional event handling

console.log("=== DAY 25: EVENT LISTENERS ===");

let tasks = [];

// Get elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const clearBtn = document.getElementById('clearBtn');
const taskList = document.getElementById('taskList');

// Add task event
addBtn.addEventListener('click', function() {
    let task = taskInput.value;
    
    if(task !== "") {
        tasks.push(task);
        taskInput.value = "";
        displayTasks();
    } else {
        alert("Please enter a task!");
    }
});

// Allow Enter key to add task
taskInput.addEventListener('keypress', function(event) {
    if(event.key === 'Enter') {
        addBtn.click();
    }
});

// Clear all tasks
clearBtn.addEventListener('click', function() {
    if(confirm("Delete all tasks?")) {
        tasks = [];
        displayTasks();
    }
});

// Display tasks
function displayTasks() {
    if(tasks.length === 0) {
        taskList.innerHTML = "<p>No tasks yet. Add one!</p>";
    } else {
        taskList.innerHTML = "";
        
        tasks.forEach((task, index) => {
            // Create task item
            let taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.id = 'task-' + index;
            
            // Task text
            let taskText = document.createElement('span');
            taskText.textContent = (index + 1) + ". " + task;
            
            // Button container
            let buttonDiv = document.createElement('div');
            
            // Edit button
            let editBtn = document.createElement('button');
            editBtn.textContent = 'Edit';
            editBtn.className = 'edit-btn';
            editBtn.addEventListener('click', function() {
                editTask(index);
            });
            
            // Delete button
            let deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.addEventListener('click', function() {
                deleteTask(index);
            });
            
            // Assemble
            buttonDiv.appendChild(editBtn);
            buttonDiv.appendChild(deleteBtn);
            taskItem.appendChild(taskText);
            taskItem.appendChild(buttonDiv);
            taskList.appendChild(taskItem);
        });
    }
}

function editTask(index) {
    let taskItem = document.getElementById('task-' + index);
    let currentTask = tasks[index];
    
    // Create input field
    let input = document.createElement('input');
    input.type = 'text';
    input.value = currentTask;
    input.id = 'edit-input-' + index;
    
    // Create save button
    let saveBtn = document.createElement('button');
    saveBtn.textContent = 'Save';
    saveBtn.className = 'save-btn';
    saveBtn.addEventListener('click', function() {
        saveTask(index);
    });
    
    // Replace content
    taskItem.innerHTML = '';
    taskItem.appendChild(input);
    taskItem.appendChild(saveBtn);
    
    input.focus();
}

function saveTask(index) {
    let input = document.getElementById('edit-input-' + index);
    let newTask = input.value;
    
    if(newTask !== "") {
        tasks[index] = newTask;
        displayTasks();
    } else {
        alert("Task cannot be empty!");
    }
}

function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Initial display
displayTasks();