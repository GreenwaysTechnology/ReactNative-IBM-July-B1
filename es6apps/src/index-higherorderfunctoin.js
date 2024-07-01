//higher order function
//passing function as parameter
//returning function from another function

//a=x
function add(a) {
    return a + 10
}
add(10)
let x = 10
add(x)

///
//greet=hai
function sayGreet(greet) {
    greet()
}

let hai = function () {
    console.log('hai')
}
sayGreet(hai)

sayGreet(function () {
    console.log('hello')
})

