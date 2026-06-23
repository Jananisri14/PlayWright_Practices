let income: number = 3500.00;

let expenses: string[] = ["200.00", "150.50", "450.75"];

let totalExpenses = 0;

for (let expense of expenses) {
    totalExpenses += Number(expense);
}

let remainingBudget = income - totalExpenses;

console.log("Remaining Budget: $" + remainingBudget.toFixed(2));
