//Day 17 - week3 progress Review
// Reflect on what i've learned what's next
console.log("=== Day 17 - Week 3 Progress Review ===")
console.log("")
//what I've built so far in week 3
let week3Projects = [
    {day: 15, project: "calculator", completed: true, rating: "A"},
    {day: 16, project: "todo list", completed: true, rating: "A"},
    {day: 17, project: "progress review", completed: true, rating: "A"},
    {day: 18, project: "pending", completed: false, rating: "-"},
    {day: 19, project: "pending", completed: false, rating: "-"},
    {day: 20, project: "pending", completed: false, rating: "-"},
    {day: 21, project: "pending", completed: false, rating: "-"}
];
//calculate progress
let completed = 0;
let total = week3Projects.length;
for (let i = 0; i < week3Projects.length; i++) {
    if (week3Projects[i].completed) {
        completed++;
    }
}
let percentcompleted = (completed / total) * 100;
console.log(`Days Completed: ${completed}/${total}`);
console.log(`Progress: ${Math.round(percentcompleted)}%`);
console.log("")
//show each day
console.log("=== Week 3 Breakdown ===");
for(let i = 0; i < week3Projects.length; i++) {
    let status = week3Projects[i].completed ? "Done" : "Todo";
    console.log(`Day ${week3Projects[i].day}: ${week3Projects[i].project} - ${status} (Grade: ${week3Projects[i].rating})`);
}
console.log("")
//my learning reflection
console.log("=== what I've learned ===");
console.log("1. functions - how to create reusable code blocks");
console.log("2. arrays - how to store list of data");
console.log("3. objects - how to structure complex data");
console.log("4. loops - how to repeat actions");
console.log("5. building real projects - calculator, todo list");
console.log("6. Debugging with firends - collaboration helps");
console.log("")
//challenges faced
console.log("=== Challenges Faced ===");
console.log("1. syntax errors(typos, Capitalization)");
console.log("2. Time management (coding late at night)");
console.log("3. Behind schedule (should be done with  week3)");
console.log("4. variable naming (case sensitive issues)");
console.log("")
// my goals for  the rest of the week 3
console.log("=== Goals for Days 18-21 ===");
console.log("1. Complete Days 18-21 by Sunday december 29th");
console.log("2. build 2-3 more small projects");
console.log("3. review all concepts learned so far");
console.log("4. start week 4 strongly on Monday december 30th");
console.log("")
//curerent status
let today = "friday december 27th 2025";
let time = "8:00 AM";
let dayIntoplan = 17;
let daysBehind = 10;
console.log("=== Current Status ===")
console.log("Today: " + today);
console.log("Time: " + time);
console.log("Days behind schedule: " + daysBehind);
console.log(" But I'm Executing that's what matters!")
console.log(" ")
console.log("=== Day 17 Complete ===")