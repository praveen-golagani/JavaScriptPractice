console.log("malli modalinde")
var a = 4 // es4 we have var
let b = 6 // from es6
const max_marks = 100 // from es6
console.log(typeof(a)) //data type
console.log(a)
let flag = true
console.log(typeof(flag))
// null and undefined
// var vs let, we cannot redeclare variable with let keyword, but its possible with var
// redeclare is diff from reassigning
//reassign and redeclare is possible in var
// only reassign is possible in let
//const cannot be reassigned and redeclare

//var has global scope
//let has block scope 
let gun = "m4";
var weapon = "code";
if(true){
    let gun = "m6";
    var weapon = "coding";
}
console.log(gun);
console.log(weapon);

console.log("-----------")
let gun1 = "m9";
var weapon1 = "cyber";
if(true){
    let gun1 = "m10";
    var weapon1 = "cybe_coding";
    console.log(gun1);
    console.log(weapon1);
}
console.log(gun1);
console.log(weapon1);