// ===============================
// My Profile Card - Final Project
// Covers: JS Syntax, Statements, Comments, Variables, Let, Const, Types, Output
// Author: You
// ===============================

// JS Const - these never change (String Type)
const firstName = "Bonface";
const lastName = "Virembwa";

// JS Let - these CAN change (Number, Boolean, String Types)
let age = 19;
let city = "Kakamega";
let isLearningJS = true;

// JS Statements - building new values from old ones
let fullName = firstName + " " + lastName; // Statement 1
let nextYearAge = age + 1;                 // Statement 2
let bio = "I am " + fullName + " from " + city; // Statement 3

// JS Output + JS Types - showing results
console.log("--- MY PROFILE ---");
console.log("Name: " + fullName);
console.log("Type of fullName: " + typeof fullName); // Should be string

console.log("Bio: " + bio);
console.log("Age now: " + age);
console.log("Next year: " + nextYearAge);
console.log("Type of age: " + typeof age); // Should be number

console.log("Lives in: " + city);
console.log("Learning JS? " + isLearningJS);
console.log("Type of isLearningJS: " + typeof isLearningJS); // Should be boolean