//one class can acquire the properties, methods of another class
const Car = require('./classes1')
class TATA extends Car{

    constructor(first_name,last_name){
        super(first_name,last_name)
    }

    get location(){
            return "Goa"
    }

}


let tata_obj = new TATA("pravee","g")
console.log(tata_obj.location)
tata_obj.fullname()