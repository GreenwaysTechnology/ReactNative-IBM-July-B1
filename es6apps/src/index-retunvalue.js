//default arg
function sayHello(name = 'Default Name') {
   return name;
}
//with parameter
console.log(sayHello('Subramanian'))
//without parameter : undefined will be passed as default value
console.log(sayHello())

function multiply(a = 0, b = 0) {
    let c = a * b
    return c 
}
let res= multiply(10, 10)
console.log(res)