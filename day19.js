//DAY 19 TODO List PART 1
//BUILD A SIMPLE TASK TRACKER
console.log("=== DAY 19: TODO LIST ===");
let todoList = [];
//function to add task
function addTodo(task){
    todoList.push(task)
    console.log("Added : " + task)
    console.log("current todo: ", todoList);
}
//function to show all tasks
function showTodos(){
    console.log("\n=== TODO LIST ===")
    if(todoList.length === 0){
        console.log("No tasks yet!")
    } else {
        for(let i = 0; i < todoList.length; i++){
            console.log((i + 1) + ". " + todoList[i])
        }
    }
    console.log("")
}
//function to remove task
function removeTodo(taskIndex){
    if(taskIndex < 0 || taskIndex >= todoList.length){
        console.log("Invalid task index")
        return
    }
    let removedTask = todoList.splice(taskIndex, 1)
    console.log("Removed: " + removedTask)
    console.log("current todo: ", todoList);
}
//test the todo functions
console.log("\n-- MORNING--")
addTodo("Code for 2 hours")
addTodo("Go to the gym")
addTodo("work at Eden juice bar")
showTodos()
console.log("-- Adding more tasks --")
addTodo("leran solidity")
addTodo("sleep before 11 PM")
addTodo("read a book")
addTodo("eat healthy")
showTodos()