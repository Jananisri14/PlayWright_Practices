import PromptSync from "prompt-sync";
const prompt=PromptSync()
let age:number=Number(prompt("Enter the Age:"))
if(age>=1 && age<=12){
    console.log("Cartoon Club")
}
else if(age>=13 && age<=19){
    console.log("Teens Club")
}
else if(age>19){
    console.log("Not Allowed")
}
else{
    console.log("Invalid Age")
}