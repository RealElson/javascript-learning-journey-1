//  DAY 20 TODO List PART 2
// ADD COMPLETION TRACKING
console.log("=== DAY 20: TODO LIST with Completion Tracking ===");
//NOW EACH TASK IS AN OBJECT WITH DESCRIPTION AND COMPLETION STATUS
let todo = [];
//function to add task
function addTodo(task){
    let NewTodo = {
        task: task,
        completed: false
    };
    todo.push(NewTodo);
    console.log("Added : " + task);
}
//function to show all tasks
function showTodos(){
    console.log("\n=== TODO LIST ===");
    if(todo.length === 0){
        console.log("No tasks yet!");
    } else {
        for(let i = 0; i < todo.length; i++){
            let status = todo[i].completed ? "DONE" : "TODO";
            console.log((i + 1) + ". [" + status + "] " + todo[i].task);
        }
    }
    console.log("");
}
function completedTodo(index){
    if(index < 0 && index >= todo.length){
        todo[index].completed = true;
        console.log("completed: " + todo[index].task);
    } else {
        console.log("Invalid task index");
    }
}
function showprogress(){
    let completed = 0;
    for(let i = 0; i < todo.length; i++){
        if(todo[i].completed){
            completed++;
        }
    }
    let total = todo.length;
    let rate = Math.round((completed / total) * 100);
    console.log("=== Progress ===");
    console.log("Completed " + completed + "/" + total );
    console.log("Completion Rate: " + rate + "%");
    console.log("");
}
//test the todo functions
console.log("\n-- MORNING--");
addTodo("Code for 2 hours");
addTodo("Go to the gym");
addTodo("Work at Eden juice Bar");
showTodos();
console.log("-- AFTERNOON (completed coding) --");
completedTodo(0); //complete first task
showTodos();
showprogress();
console.log("-- EVENING (completed gym) --");
completedTodo(1); //complete second task
showTodos();
showprogress();
console.log("-- NIGHT (added more tasks) --");
addTodo("Learn solidity");
addTodo("Sleep before 11 PM");
addTodo("Read a book");
addTodo("Eat healthy");
addTodo("drink enoungh water");
showTodos()
showprogress();