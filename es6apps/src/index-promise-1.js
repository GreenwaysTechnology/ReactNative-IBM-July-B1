
function blockMe(message) {
    console.log(message)
}

function sayGreet() {
    return Promise.reject('oops,something went wrong')   //returns promise object with rejection
}



function main() {
    blockMe('start')
    sayGreet().catch(err => console.log(err))
    blockMe('end')
}
main()
