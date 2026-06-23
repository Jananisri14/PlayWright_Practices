import PromptSync from "prompt-sync";
const prompt=PromptSync()
let name:string=String(prompt("Enter a Name:"))
let items:number=Number(prompt("Enter a no of Items:"))
if(items<10){
    let calculate=items*12;
    console.log(name+" "+calculate)
}
else if(items>99){
    let calculate=items*7;
    console.log(name+" "+calculate)
}
else{
    let calculate=items*10;
    console.log(name+" "+calculate)

}