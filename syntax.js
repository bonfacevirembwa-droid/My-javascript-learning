let myName = "Brian";
const age =20;
console.log(myName)
//statements
let x=5;
let y=10;
let sum=x+y;
console.log(sum);
//this is a single comment
console.log("I will run");
//console.log("I will NOT run");
console.log("I will run too");

/*
This is a multi-line comment
console.log("I will NOT run");
console.log("I will NOT run");
console.log("I will NOT run");
*/

//variable swapping
let a=5;
let b=10;
let c=a;
a=b;
b=c;
console.log("a=" + a);
console.log("b=" + b);
console.log("c=" + c);
//pro way of swapping
let e = 5;
let f= 10;

[e, f] = [f, e]; // magic swap!

console.log("e=" + e);
console.log("f=" + f);