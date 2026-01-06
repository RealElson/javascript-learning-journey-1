let expenses = [];
let nextId = 1;

//Get element
const amountInput = document.getElementById("amountInput");
const categoryInput = document.getElementById("categoryInput");
const descriptionInput = document.getElementById("descriptionInput");
const addBtn = document.getElementById("addBtn");
const expenseList = document.getElementById("expenseList");
const totalSpending = document.getElementById("totalSpending");
const categoryStats = document.getElementById("categoryStats");

//Add expense
function addExpense() {
  const amount = parseFloat(amountInput.value);
  const category = categoryInput.value;
  const description = descriptionInput.value;

  if (amount <= 0) {
    alert("Amount must be greater than 0");
    return;
  }
  //Create expense object
  const expense = {
    id: nextId++,
    amount: amount,
    category: category,
    description: description,
  };
  //Add to array
  expenses.push(expense);
  //clear inputs
  amountInput.value = "";
  categoryInput.value = "";
  descriptionInput.value = "";
  //update display
  displayExpenses();
  updateStats();
}
//Display all expense
function displayExpenses() {
  expenseList.innerHTML = "";

  expenses.forEach((expense) => {
    const expenseDiv = document.createElement("div");
    expenseDiv.className = "expense-item";

    expenseDiv.innerHTML = `
            <div class="expense-details">
                <strong>₦${expense.amount}</strong> - ${expense.category} - ${
      expense.description
    }
            </div>
            <button class="delete-btn" onclick="deleteExpense(${
              expense.id
            })">Delete</button>
        `;
    expenseList.appendChild(expenseDiv);
  });
}
//Delete expense
function deleteExpense(id) {
  if (confirm("Delete this expense")) {
    expenses = expenses.filter((expense) => expense.id !== id);
    displayExpenses();
    updateStats();
  }
}
//Update statistics
function updateStats() {
  //calculate total
  const total = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  totalSpending.textContent = `₦${total}`;
  // calculate by category
  const categoryTotals = {};
  expenses.forEach((expense) => {
    if (categoryTotals[expense.category]) {
      categoryTotals[expense.category] += expense.amount;
    } else {
      categoryTotals[expense.category] = expense.amount;
    }
});
  //Display category breakdown
  let categoryHTML = "";
  for (let category in categoryTotals) {
    categoryHTML += `<div>${category}: <strong>₦${categoryTotals[category]}</strong></div>`;
  }
  categoryStats.innerHTML = categoryHTML || "<div>No expense yet</div>";
}
  //Event listeners
  
  addBtn.addEventListener("click", addExpense);
  //Enter key to add
  
  descriptionInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      addExpense();
    }
  });
  
  //Initial display
  updateStats();

