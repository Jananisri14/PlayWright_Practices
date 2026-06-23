let a: number = 3;
let b: number = 4;
let c: number = 5;


if (a + b > c && a + c > b && b + c > a) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Area of Triangle:", area);
} 
else {
    console.log("Invalid Triangle");
}