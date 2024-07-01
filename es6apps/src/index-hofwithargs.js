const sayGreet = greet =>  greet('greet')

let hai = (message) => console.log(message)
sayGreet(hai)
sayGreet((message) => console.log(message))

