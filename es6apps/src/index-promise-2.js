
function blockMe(message) {
    console.log(message)
}

function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')   //returns promise object with rejection
    }

}



function main() {
    blockMe('start')
    login('admin', 'admin')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    login('foo', 'bar')
        .then(res => console.log(res))
        .catch(err => console.log(err))
    blockMe('end')
}
main()
