import PromptSync from "prompt-sync";
const prompt=PromptSync()
let month = Number(prompt("Enter month number: "));

if (month >= 3 && month <= 5) {
    console.log("Spring");
}
else if (month >= 6 && month <= 8) {
    console.log("Summer");
}
else if (month >= 9 && month <= 11) {
    console.log("Autumn");
}
else if (month === 12 || month === 1 || month === 2) {
    console.log("Winter");
}
else {
    console.log("Invalid month");
}