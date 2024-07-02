
function increase() {

    return function () {
        console.log('increase')
    }
}
let myfun = increase()
myfun()


let decrease = () => {
    return () => {
        console.log('decrease')
    }
}
let myfun1 = decrease()
myfun1()

decrease = () => () => console.log('decrease')

let myfun3 = decrease()
myfun3()