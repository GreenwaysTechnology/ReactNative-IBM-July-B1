//how to create object using class.

class Employee {
    //instance variables and methods
    id = 1
    name = 'Subramanian'

    //constructor
    constructor() {
        console.log('consturctor is called')
    }

    //methods
    calculateSalary() {
        return 100
    }
    calculateTax = () => {
        return 10
    }

}
//create object
//let is keyword
//emp is just variable - reference variable
//new is operator
//Employee() is constructor call
let emp = new Employee()
console.log(`${emp.id} ${emp.name} ${emp.calculateSalary()} ${emp.calculateTax()}`)