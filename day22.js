//Day 22 - DOM Manipulation
//Making web pages interactive

console.log("=== DAY 22: DOM MANIPULATION ===");

// 1. CHANGE TEXT ON PAGE
function changeGreeting() {
    let greetingElement = document.getElementById("greeting");
    greetingElement.innerHTML = "Welcome to interactive JavaScript!";
    greetingElement.style.color = "blue";
}

// Call it automatically when page loads
setTimeout(changeGreeting, 2000); // Changes after 2 seconds

// 2. BUDGET CALCULATOR (Your real data)
function calculateSavings() {
    // Get values from input fields
    let income = document.getElementById("income").value;
    let expenses = document.getElementById("expenses").value;
    
    // Calculate
    let savings = income - expenses;
    
    // Display result on page
    let output = document.getElementById("output");
    output.innerHTML = `
        <h3>Budget Results:</h3>
        <p>Income: ₦${income}</p>
        <p>Expenses: ₦${expenses}</p>
        <p><strong>Savings: ₦${savings}</strong></p>
    `;
    
    // Change color based on result
    if(savings > 0) {
        output.style.backgroundColor = "#d4edda"; // green
        output.innerHTML += "<p>✓ You're saving money!</p>";
    } else {
        output.style.backgroundColor = "#f8d7da"; // red
        output.innerHTML += "<p>⚠ You're spending too much!</p>";
    }
}

// 3. TODO LIST (Interactive version)
let tasks = [];

function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;
    
    if(task !== "") {
        tasks.push(task);
        input.value = ""; // Clear input field
        displayTasks();
    } else {
        alert("Please enter a task!");
    }
}

function displayTasks() {
   let output = document.getElementById("output");

   if(tasks.length === 0) {
         output.innerHTML = "<p>No tasks added yet. Add one!</p>";
   } else {
        let html = "<h3>Your Tasks:</h3><ul style='list-style: none; padding: 0;'>";
        for(let i = 0; i < tasks.length; i++) {
            html += `
                <li style="padding: 10px; margin: 5px 0; background: #f8f9fa; border-radius: 5px; display: flex; justify-content: space-between; align-items: center;">
                    <span id="task-${i}">${i + 1}. ${tasks[i]}</span>
                    <div>
                        <button onclick="editTask(${i})" style="background: #ffc107; color: black; border: none; padding: 5px 15px; border-radius: 3px; cursor: pointer; margin-right: 5px;">Edit</button>
                        <button onclick="deleteTask(${i})" style="background: #dc3545; color: white; border: none; padding: 5px 15px; border-radius: 3px; cursor: pointer;">Delete</button>
                    </div>
                </li>
            `;
        }
        html += "</ul>";
        output.innerHTML = html;
    }
}
function editTask(index) {
    let taskSpan = document.getElementById("task-" + index);
    let currentTask = tasks[index];
    //replace task text with input field
    taskSpan.innerHTML = `
        <input type="text" id="edit-Input-${index}" value="${currentTask}" style="padding: 5px; font-size: 14px; border: 1px solid #007bff; border-radius: 3px; width: 300px;"/>
        <button onclick="saveTask(${index})" style="background: #28a745; color: white; border: none; padding: 5px 15px; border-radius: 3px; cursor: pointer; margin-left: 5px;">Save</button>
    `;
    //focus on input field
    document.getElementById(`edit-Input-` + index).focus();
}
function saveTask(index) {
    let inputField = document.getElementById("edit-Input-" + index);
    let newTask = inputField.value;

    if(newTask !== "") {
        tasks[index] = newTask; // Update the task
        displayTasks();
    } else {
        alert("Task cannot be empty!");
    }
}
function deleteTask(index) {
    tasks.splice(index, 1); // Remove task from array
    displayTasks();
}


function clearTasks() {
    tasks = [];
    displayTasks();
}