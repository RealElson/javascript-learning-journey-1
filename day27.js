//Day 27 - Habit Tracker
let habits = [];
let nextId = 1;
// Get elements
const habitInput = document.getElementById("habitInput");
const addBtn = document.getElementById("addBtn");
const habitList = document.getElementById("habitList");
const dateDisplay = document.getElementById("dateDisplay");
const totalHabits = document.getElementById("totalHabits");
const completedToday = document.getElementById("completedToday");
const completionRate = document.getElementById("completionRate");
// Get today's date
function getTodayDate() {
  const today = new Date();
  return today.toDateString();
}
//display current date
function displayDate() {
  const today = new Date();
  const option = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  dateDisplay.textContent = today.toLocaleDateString("en-us", options);
}
//Add habit
function addHabit() {
  const habitName = habitInput.value.trim();

  if (!habitName) {
    alert("please enter a habit name");
    return;
  }
  const habit = {
    id: nextId++,
    name: habitName,
    streak: 0,
    lastCompleted: null,
    completedToday: false,
    totalCompletions: 0,
  };
  habits.push(habit);
  habitInput.value = "";

  displayHabits();
  updateStats();
}
//Display all habits
function displayHabits() {
  habitList.innerHTML = "";

  habits.forEach((habit) => {
    const habitDiv = document.createElement("div");
    habitDiv.className = "habit-item";
    if (habit.completedToday) {
      habitDiv.classList.add("completed");
    }
    habitDiv.innerHTML = `
            <div class="habit-details">
                  <div class="habit-name">
                       ${habit.completedToday ? "✅" : ""}${habit.name}
                    </div>
                </div>
                <div class="habit-stats">
                    <span class="streak-badge">🔥${
                      habit.streak
                    } day streak</span>
                    |Total completions: ${habit.totalCompletions}
                </div>
            </div>
            <div class="habit-actions">
                    <button class="complete-btn" 
                        onclick="completeHabit(${habit.id})"
                        ${habit.completedToday ? "disabled" : ""}>
                        ${habit.completedToday ? "Done Today" : "Mark Complete"}
                    </button>
                    <button class="delete-btn" onclick="deleteHabit(${
                      habit.id
                    })">Delete</button>
            </div>
          `;
    habitList.appendChild(habitDiv);
  });
}
//complete habit
function completeHabit(id) {
  const habit = habits.find((h) => h.id === id);
  if (!habit || habit.completedToday) return;

  const today = getTodayDate();
  //check if last completed was yesterday
  if (habit.lastCompleted) {
    const lastDate = new Date(habit.lastCompleted);
    const todayDate = new Date();
    const diffTime = todayDate - lastDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 1) {
      //streak continues
      habit.streak++;
    } else if (diffDays > 1) {
      //streak broken
      habit.streak = 1;
    }
  } else {
    //First completion
    habit.streak = 1;
  }
  habit.completedToday = true;
  habit.lastCompleted = today;
  habit.totalCompletions++;

  displayHabits();
  updateStats();
}
//Delete habit
function deleteHabit(id) {
  if (confirm("Delete this habit?")) {
    habits = habits.filter((h) => h.id !== id);
    displayHabits();
    updateStats();
  }
}
//update statistics
function updateStats() {
  totalHabits.textContent = habits.length;

  const completed = habits.filter((h) => h.completedToday).length;
  completedToday.textContent = completed;

  const rate =
    habits.length > 0 ? Math.round((completed / habits.length) * 100) : 0;
  completionRate.textContent = rate + "%";
}
//Reset daily completions (call this at midnight or app start)
function resetDailyCompletions() {
  const today = getTodayDate();
  habits.forEach((habit) => {
    if (habit.lastCompleted !== today) {
      habit.completedToday = false;
    }
  });
  displayHabits();
  updateStats();
}
//Event listensers
addBtn.addEventListener("click", addHabit);
habitInput.addEventListener("keyress", function (e) {
  if (e.key === "Enter") {
    addHabit();
  }
});
//Intialize
displayDate();
resetDailyCompletions();
updateStats();
