
function blockMe(message) {
    console.log(message)
}

// function sayGreet(greet) {
//     setTimeout(greet, 0, 'hello')
// }
function sayGreet() {
    return Promise.resolve('hello')   //returns promise object with success
}



function main() {
    blockMe('start')
    //sayGreet(res => console.log(res))
    sayGreet().then(res => console.log(res))
    blockMe('end')
}
main()
