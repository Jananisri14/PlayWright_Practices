"use strict";
let products = "Pen,Pencil,Eraser";
let productList = products.split(",");
console.log("List of Products:");
for (let product of productList) {
    console.log(product);
}
