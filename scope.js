// var declare global
// var declared in function  - function level
// let declared within the {} is within the block scope
// var declared within {} is global 

var day = "monday"  //global

if(true){
    day = "tuesday"  //global
} 

function welcome(){
    day = "friday"    //function level
}

console.log(day)