const secret=Symbol("secret");
const user={ name:"Alice",[secret]:"Top_Secret"}
console.log(user[secret]);
const symbols=Object.getOwnPropertySymbols(user);
console.log(symbols);
