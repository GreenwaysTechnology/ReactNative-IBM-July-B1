
class Account {
    constructor() {
        console.log('Account')
    }
    deposit() {
        return 0
    }
}
class SavingsAccount extends Account {
    constructor() {
        //call parent class constructor
        super()
        console.log('SavingsAccount')
    }
    //override deposit
    deposit(){
        return 100
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())