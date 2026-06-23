import PromptSync from "prompt-sync";
const prompt=PromptSync()
let total:number=Number(prompt("Enter a Total no of animals:"))
let rabbit:number=Number(prompt("Enter a Total no of rabbits:"))
let deers:number=Number(prompt("Enter a Total no of deers:"))
let squirrels:number=Number(prompt("Enter a Total no of squirrels:"))
let birds:number=Number(prompt("Enter a Total no of birds:"))
let sum=rabbit+deers+squirrels+birds;
if(total==sum){
    console.log("Baby lion is well behaved")
}
else if(total>sum){
    console.log("Baby lion is mischievous")
}
else{
    console.log("Counted wrongly")
}
