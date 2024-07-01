

let hello = () => {
    console.log('hello')
}
//calling
hello()
//here only one line of body: we can remove {}
hello = () => console.log('hello')
hello()

//args and arrow
let add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(10, 10))

//fun having return statement only we can remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(add(10, 10))

//function having single arg and no default value,we can even remove ()
let stock = a => a
console.log(stock(10))
