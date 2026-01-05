//Day 18 - goal tracker 
//Track my daily goal and progress
console.log("=== DAY 18: GOAL TRACKER ===");
console.log("")
// my daily goals
let dailyGoals= [
    {
        goal: "code for 2 hours",
    target: 2,
    actual: 0,
    completed: false
    },
    {
    goal: "Gym workout",
    target: 1,
    actual: 0,
    completed: false
    },
    {
        goal: "sleep before 11 PM",
        target: 23,
        actual: 0,
        completed: false
    }
]
//function to update progress
function updateProgress(goalIndex, actualValue){
    dailyGoals[goalIndex].actual = actualValue
    //check if goal met
    if(actualValue >= dailyGoals[goalIndex].target){
        dailyGoals[goalIndex].completed = true
        console.log("Goal completed: " + dailyGoals[goalIndex].goal)
    } else {
        console.log("progress updated : " + dailyGoals[goalIndex].goal)
    }
}
//function to show all goals
function showGoals(){

    console.log("")
    console.log("=== Daily Goals ===")
    for(let i = 0; i < dailyGoals.length; i++){
        let goal = dailyGoals[i]
        let status = goal.completed ? "done" : "in progress"
        let progress = goal.actual + "/" + goal.target + "" +goal.unit
        console.log((i + 1)+". " + goal.goal + " : " + progress + " - " + status)
    }
    console.log("")
}
//function to calculate compiletion rate
function calculateCompletionRate(){
    let completed = 0
    for(let i = 0; i < dailyGoals.length; i++){
        if(dailyGoals[i].completed){
            completed++
        }
    }
    let rate = (completed / dailyGoals.length) * 100
    return Math.round(rate)
}

        //function to show summary
function showSummary(){
    let rate = calculateCompletionRate()
    let completed = 0
    for(let i = 0; i < dailyGoals.length; i++){
        if(dailyGoals[i].completed){
            completed++
        }
    }
    console.log("=== Daily Goals Summary ===")
    console.log("Goals completed: " + completed + "/" + dailyGoals.length)
    console.log("Completion rate: " + rate + "%")
    if (rate === 100){
        console.log("perfect! all goals achieved!")
        } else if (rate >= 75){
            console.log("Great day keep pushing!")
        }else if (rate >= 50){
            console.log("Good effort! can do better")
    }else {
        console.log("Need to improve tomorrow")
    }
    console.log("")
}
//simulate a day
console.log("===STARTING MY DAY===")
showGoals()
//update progress throught the day
console.log("=== MORNING ===")
updateProgress(0, 1) // coded for 1 hour
showGoals()
console.log("=== AFTERNOON ===")
updateProgress(1, 1) // completed gym workout
updateProgress(0, 2) // coded for 2 hours
showGoals()
console.log("=== EVENING ===")
updateProgress(2, 500) //save 500
showGoals()
console.log("=== NIGHT ===")
updateProgress(2, 23) // slept before 11 PM
showGoals()
//final summary
showSummary()