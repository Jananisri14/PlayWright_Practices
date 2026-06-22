function somefunction(): void {
    if (true) {
        var localvar: number = 1000;
        console.log(localvar);
}
console.log(localvar);
function nested(): void {
        console.log(localvar);
    }
    nested();
}
somefunction();