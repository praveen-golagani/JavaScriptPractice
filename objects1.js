// object is a collection of prop
let person_obj = {
    first_name : 'Praveen',
    last_name :"Golagani",
    fullname : function(){
        console.log(this.first_name+this.last_name)
    }
}
console.log(person_obj.fullname())
console.log(person_obj.first_name)
console.log(person_obj['last_name'])
person_obj.last_name = 'g'
person_obj.bike = 'classic'
person_obj.year = 2016
console.log(person_obj.bike)
console.log(person_obj)

delete person_obj.year
console.log(person_obj)

// check prop exists and iterate over all objects

//'prop' in 'object name'  //returns true if present else false
console.log('last_name' in person_obj)
console.log('year' in person_obj)

//enhanced for loop - print keys
for (let k in person_obj){
    console.log(k)
}
// print values
for (let k in person_obj){
    console.log(person_obj[k])
}
