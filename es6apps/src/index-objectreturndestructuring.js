// function getStock() {
//     return {
//         id: 1,
//         symbol: 'google',
//         qty: 10,
//         price: 100
//     }
// }
// console.log(getStock())

// function getStock(id = 1, symbol = 'google', qty = 10, price = 100) {
//     return {
//         id: id,
//         symbol: symbol,
//         qty: qty,
//         price: price
//     }
// }
// console.log(getStock())
// console.log(getStock(2,'microsoft',200,400))

// function getStock(id = 1, symbol = 'google', qty = 10, price = 100) {
//     //key:value
//     //if key and value is same , remove any one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }
// console.log(getStock())
// console.log(getStock(2, 'microsoft', 200, 400))

// const getStock = (id = 1, symbol = 'google', qty = 10, price = 100) => {
//     //key:value
//     //if key and value is same , remove any one
//     return {
//         id,
//         symbol,
//         qty,
//         price
//     }
// }

const getStock = (id = 1, symbol = 'google', qty = 10, price = 100) => ({
    id,
    symbol,
    qty,
    price
})

console.log(getStock())
console.log(getStock(2, 'microsoft', 200, 400))