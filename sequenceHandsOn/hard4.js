"use strict";
let a = 3;
let b = 4;
let c = 5;
if (a + b > c && a + c > b && b + c > a) {
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    console.log("Area of Triangle:", area);
}
else {
    console.log("Invalid Triangle");
}
