//Async work flow

function blockMe(message) {
    console.log(message)
}

//greet is variable holding function
//in async context , that function is called as "listener /callback"
//how to turn the the function into callback/listener.. , you need to bind that funciton
//with any async apis - like timer,websocket,ajax
function sayGreet(greet) {
    //use timer api
    setTimeout(greet, 5000)
}

function main() {
    blockMe('start')
    sayGreet(function () {
        console.log('greet')
    })
    blockMe('end')
}
main()