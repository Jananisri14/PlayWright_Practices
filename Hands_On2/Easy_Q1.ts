import promptSync from 'prompt-sync';

const prompt = promptSync();
const Length=prompt("Enter a length:")
const breadth=prompt("Enter a breadth:")
if(Length==breadth){
    console.log("It is a Square")
}
else{
    console.log("Not a Square")
}