/* Create an array named studentNames with the names of your students.

Add a new student name to the beginning of the array.

Remove the last student name from the array.

Alphabetize the student names within the array.*/

student_names = ["rama rao","rahim khan","radcliff"]
student_names.unshift("Dhoni")   // add element at beginning
console.log(student_names)
student_names.pop()              // pops out last element
console.log(student_names)
// alphabetize elements in array
let alpha_names = student_names.map(ele=>ele.toUpperCase())
console.log(alpha_names)