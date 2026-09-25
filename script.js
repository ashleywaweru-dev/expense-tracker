const expenseForm = document.getElementById("expenseForm");
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expenseList");
const totalDisplay = document.getElementById("total");

let expenses = [];

expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const description = descriptionInput.value.trim();
    const amount = Number(amountInput.value);

    if (description === "" || amount <= 0) {
        return;
    }

    expenses.push({
        description: description,
        amount: amount
    });

    descriptionInput.value = "";
    amountInput.value = "";

    displayExpenses();
});

function displayExpenses() {
    expenseList.innerHTML = "";

    let total = 0;

    expenses.forEach(function (expense, index) {
        total += expense.amount;

        const listItem = document.createElement("li");

        listItem.innerHTML = `
            <span>${expense.description} - KSh ${expense.amount}</span>
            <button class="delete-btn" onclick="deleteExpense(${index})">
                Delete
            </button>
        `;

        expenseList.appendChild(listItem);
    });

    totalDisplay.textContent = `KSh ${total}`;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpenses();
}
