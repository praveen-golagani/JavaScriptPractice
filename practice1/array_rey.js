// collections of Elements
let marks1 = Array(6)
var marks2 = new Array(20,40,50)
var marks3 = [70,80,89]
console.log(marks3[0])
console.log(marks2[2])
marks3[1] = 98
console.log(marks3.length) // length keyword
console.log(marks3)
marks3.push(67) // push works like append
console.log(marks3)
marks3.pop() //removes last ele in array
console.log(marks3)
marks3.unshift(99)// adds element in the beginning
console.log(marks3)
console.log(marks3.indexOf(70))
// element included in array or not
console.log(marks3.includes(120))
console.log(marks3.includes(98))
// slice
marks4 = marks3.slice(1,3)
console.log(marks4)
// for loop and print as individual elements
for (let m = 0;m<marks4.length;m++){
    console.log(marks4[m])
}
console.log(marks3)
//sum of elements in marks3
let sum = 0
for(let i = 0;i<marks3.length;i++){
        sum+=marks3[i]
}
console.log(sum)

// reduce for sum or multiplication
let total = marks3.reduce((ele1,ele2)=>ele1+ele2,0)
console.log(total)
// print even 
let even_score = marks3.filter(ele1=>ele1%2==0)
console.log(even_score)

//
let cube_score = even_score.map(ele=>ele*3)
console.log(cube_score)

// do even,cube,sum all in one operation
let fun = [12,13,14,16]
let sum_fun = fun.filter(ele=>ele%2==0).map(ele=>ele*3).reduce((ele1,ele2)=>ele1+ele2,0)
console.log(sum_fun)

//sort - only sort strings
let fruits = ["mango","apple","banana","water melon","jack fruit"]
fruits.sort()
console.log(fruits)
fruits.reverse()
console.log(fruits)
// ascending 
let scores = [10,33,3,56,7,97,-3,4]
console.log(scores.sort((val1,val2)=>val1-val2))
// desc
console.log(scores.sort((val1,val2)=>val2-val1))
