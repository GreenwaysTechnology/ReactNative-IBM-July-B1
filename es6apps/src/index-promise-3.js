
function blockMe(message) {
    console.log(message)
}


function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            setTimeout(resolve, 5000, 'login is success')
        } else {
            setTimeout(reject, 5000, 'login is failed')
        }
    })

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
