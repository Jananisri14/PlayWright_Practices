import PromptSync from "prompt-sync";
const prompt=PromptSync();
let num:number=Number(prompt("Enter a Number:"))
if(num<0){
    console.log("It is Negative Number")
}
else if(num>0){
    console.log("It is Positive Number")
}
else{
    console.log("Zero")
}