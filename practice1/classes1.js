class Car{
    make = 2024

    //get keyword of a method is best for property
    get location(){
        return "India"
    }

    //constructor is a method which executes by default when you create object of the class
    constructor(first_name,last_name){
        this.first_name = first_name
        this.last_name = last_name
    }

   fullname(){
    console.log(this.first_name+this.last_name)
   }
}
module.exports = Car  // main export statemnt to export to any other class
let car_obj1 = new Car('prav','een')
let car_obj2 = new Car('praveen','golagani')
console.log(car_obj1.make)
console.log(car_obj1.location)
car_obj1.fullname()
car_obj2.fullname()

