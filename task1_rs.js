/*Create an array called expenses that contains at least 5 different expense amounts.

Calculate the total expenses by summing all the elements of the array.

Find the highest and lowest individual expenses within the array. */
let expenses = [10,49,88.4,99,4,5]
let sum = expenses.reduce((val1,val2)=>val1+val2,0)
console.log(sum)
expenses.sort((val1,val2)=>val1-val2)
console.log("highest : "+expenses[expenses.length-1])
console.log("lowest : "+expenses[0])
