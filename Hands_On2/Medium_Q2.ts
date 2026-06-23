import PromptSync from "prompt-sync";
const prompt=PromptSync()
let num:number=Number(prompt("Enter a Number:"))
let val:number;
if(num%2==0){
    val=num/2;
    console.log(val)
}
else{
    val=(num*3)+1
    console.log(val)
}
