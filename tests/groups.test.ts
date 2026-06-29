import { test } from '@playwright/test';
test.describe("Login Module",()=>{
    test("Valid Login",async({page})=>{
        console.log("Valid Login");
    });
    test("INValid Login",async({page})=>{
        console.log("InValid Login");
    });
});
test.describe.only("@sanity Product Module",()=>{
    test("Search Product",async({page})=>{
        console.log("Search Product");
    });
    test("Add to product",async({page})=>{
        console.log("Add to product");
    });
});
