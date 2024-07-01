const sayGreet = greet =>  greet()

let hai = () => console.log('hai')
sayGreet(hai)
sayGreet(() => console.log('hello'))

