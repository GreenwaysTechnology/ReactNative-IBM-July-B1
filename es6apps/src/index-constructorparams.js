//how to create object using class.

class Employee {
    //instance variables and methods
    id
    name
    //constructor
    constructor(id = 0, name = 'name') {
        this.id = id
        this.name = name
    }

    //methods
    calculateSalary() {
        return 100
    }
    calculateTax = () => {
        return 10
    }

}
//let emp = new Employee(1,'Subramanian')
let emp = new Employee()
console.log(`${emp.id} ${emp.name} ${emp.calculateSalary()} ${emp.calculateTax()}`)

emp = new Employee(1, 'Subramanian')
console.log(`${emp.id} ${emp.name} ${emp.calculateSalary()} ${emp.calculateTax()}`)