
const login = (userName, password, success, failure) => {
    if (userName === 'admin' && password === 'admin') {
        success('login success')
    } else {
        failure('login failed')
    }

}
login('admin', 'admin', status => console.log(status), err => console.log(err))
login('foo', 'bar', status => console.log(status), err => console.log(err))