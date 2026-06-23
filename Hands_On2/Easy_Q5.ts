import PromptSync from "prompt-sync";
const prompt=PromptSync()
let price:number=Number(prompt("Enter the price:"));
if(price<=15000){
    console.log("Mobile chosen is within the budget")
}
else{
    console.log("Mobile chosen is beyond the budget")
}