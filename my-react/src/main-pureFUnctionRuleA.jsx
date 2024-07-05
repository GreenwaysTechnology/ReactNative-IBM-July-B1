//Pure function Rule A:

// //is it pure? No : immpure
// function getName(name) {
//     //here function does side effect : changing
//     return name.toUpperCase()
// }
// console.log(getName('admin'))

function getName(name) {
    return name;
}
console.log(getName('admin'))