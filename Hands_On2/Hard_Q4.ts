import PromptSync from "prompt-sync";
const prompt=PromptSync()
let income = Number(prompt("Enter annual income: "));
let tax = 0;

if (income <= 250000) {
    console.log("You are exempted from tax");
}
else if (income <= 500000) {
    tax = (income - 250000) * 0.10;
    console.log("Tax amount is", tax);
}
else if (income <= 1200000) {
    tax = 250000 * 0.10 + (income - 500000) * 0.20;
    console.log("Tax amount is", tax);
}
else {
    tax = 250000 * 0.10 + 700000 * 0.20 + (income - 1200000) * 0.30;
    console.log("Tax amount is", tax);
}