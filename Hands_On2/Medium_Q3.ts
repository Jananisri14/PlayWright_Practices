import PromptSync from "prompt-sync";
const prompt=PromptSync()
let option:number=Number(prompt("Enter a code:"))
switch(option){
    case 1:
        let num1:number=Number(prompt("Enter a Number1:"))
        let num2:number=Number(prompt("Enter a Number2:"))
        let add:number
        add=num1+num2;
        console.log(add)
        break
    case 2:
        let number1:number=Number(prompt("Enter a Number1:"))
        let number2:number=Number(prompt("Enter a Number2:"))
        let sum:number
        sum=number1*number2;
        console.log(sum)
        break
    case 3:
        let str1:string=String(prompt("Enter a String 1:"))
        let str2:string=String(prompt("Enter a String 2:"))
        console.log(str1+str2)
        break
}