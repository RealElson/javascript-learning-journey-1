//Day 21 - Week 3 Review: Personal Dashboard
//Combine budget + goals + todos into one system

console.log("=== DAY 21: PERSONAL DASHBOARD ===");
console.log("Emmanuel's Daily Tracker");
console.log("");

// 1. BUDGET TRACKER (from earlier days)
let budget = {
    income: 45000,
    expenses: {
        transport: 12000,
        protein: 7000,
        data: 8000,
        clothes: 5000
    }
};

function calculateBudget() {
    let total = budget.expenses.transport + 
                budget.expenses.protein + 
                budget.expenses.data + 
                budget.expenses.clothes;
    let savings = budget.income - total;
    
    console.log("=== BUDGET ===");
    console.log("Income: ₦" + budget.income);
    console.log("Total Expenses: ₦" + total);
    console.log("Monthly Savings: ₦" + savings);
    console.log("");
    
    return savings;
}

// 2. DAILY GOALS (from Day 18)
let goals = [
    {goal: "Code 2 hours", target: 2, actual: 0, completed: false},
    {goal: "Gym workout", target: 1, actual: 0, completed: false},
    {goal: "Sleep by 11 PM", target: 23, actual: 0, completed: false}
];

function updateGoal(index, actualValue) {
    goals[index].actual = actualValue;
    if(actualValue >= goals[index].target){
        goals[index].completed = true;
    }
}

function showGoals() {
    console.log("=== DAILY GOALS ===");
    for(let i = 0; i < goals.length; i++){
        let status = goals[i].completed ? "✓" : "○";
        console.log(status + " " + goals[i].goal + 
                    " (" + goals[i].actual + "/" + goals[i].target + ")");
    }
    console.log("");
}

function getGoalCompletion() {
    let completed = 0;
    for(let i = 0; i < goals.length; i++){
        if(goals[i].completed){
            completed++;
        }
    }
    return Math.round((completed / goals.length) * 100);
}

// 3. TODO LIST (from Day 19-20)
let todos = [];

function addTask(task) {
    todos.push({task: task, completed: false});
}

function completeTask(index) {
    if(index >= 0 && index < todos.length){
        todos[index].completed = true;
    }
}

function showTasks() {
    console.log("=== TODO LIST ===");
    if(todos.length === 0){
        console.log("No tasks yet!");
    } else {
        for(let i = 0; i < todos.length; i++){
            let status = todos[i].completed ? "✓" : "○";
            console.log((i+1) + ". " + status + " " + todos[i].task);
        }
    }
    console.log("");
}

function getTaskCompletion() {
    if(todos.length === 0) return 0;
    let completed = 0;
    for(let i = 0; i < todos.length; i++){
        if(todos[i].completed){
            completed++;
        }
    }
    return Math.round((completed / todos.length) * 100);
}

// 4. DAILY SUMMARY
function showDashboard() {
    console.log("======================================");
    console.log("     EMMANUEL'S DAILY DASHBOARD");
    console.log("======================================");
    console.log("");
    
    calculateBudget();
    showGoals();
    showTasks();
    
    let goalRate = getGoalCompletion();
    let taskRate = getTaskCompletion();
    let overallRate = Math.round((goalRate + taskRate) / 2);
    
    console.log("=== OVERALL PROGRESS ===");
    console.log("Goals Completion: " + goalRate + "%");
    console.log("Tasks Completion: " + taskRate + "%");
    console.log("Overall Daily Progress: " + overallRate + "%");
    console.log("");
    
    if(overallRate >= 80){
        console.log("🔥 EXCELLENT DAY! Keep this energy!");
    } else if(overallRate >= 60){
        console.log("💪 Good progress! Push a bit more!");
    } else if(overallRate >= 40){
        console.log("📈 Making progress, don't stop now!");
    } else {
        console.log("⚠️  Need to push harder tomorrow!");
    }
    console.log("======================================");
}

// SIMULATE YOUR ACTUAL DAY
console.log("\n--- MORNING: Starting my day ---");
addTask("Review JavaScript");
addTask("Work at Eden Juice Bar");
addTask("Post progress on X");
showDashboard();

console.log("\n--- AFTERNOON: After coding session ---");
updateGoal(0, 2); // Coded for 2 hours
completeTask(0); // Reviewed JavaScript
showDashboard();
console.log("\n--- EVENING: After work ---");
completeTask(1); // Finished work
updateGoal(1, 1); // Did gym
showDashboard();

console.log("\n--- NIGHT: Before sleep ---");
completeTask(2); // Posted on X
updateGoal(2, 23); // Slept on time
showDashboard();