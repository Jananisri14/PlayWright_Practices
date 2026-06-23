import PromptSync from "prompt-sync";
const prompt=PromptSync()
let totalClasses = Number(prompt("Enter total classes held: "));
let attendedClasses = Number(prompt("Enter classes attended: "));

let percentage = (attendedClasses / totalClasses) * 100;

if (percentage >= 75) {
    console.log(percentage + "% Allowed");
}
else {
    let medicalCause = prompt("Medical cause? (Y/N): ");

    if (medicalCause === "Y") {
        console.log(percentage + "% Allowed");
    }
    else {
        console.log(percentage + "% Not Allowed");
    }
}