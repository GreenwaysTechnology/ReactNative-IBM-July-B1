
//default arg
function sayHello(name = 'Default Name') {
    console.log('Your name is ', name)
}
//with parameter
sayHello('Subramanian')
//without parameter : undefined will be passed as default value
sayHello()

function multiply(a = 0, b = 0) {
    let c = a * b
    console.log('Result is ', c)
}
multiply(10, 10)
multiply()