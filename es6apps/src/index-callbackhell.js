//callback chaining

const getUser = (resolve, reject) => {
    console.log('getUser is called')
    let user = { name: 'admin' }
    //user = null
    if (user) {
        setTimeout(resolve, 1000, user)
    } else {
        setTimeout(reject, 1000, { message: 'User Not found' })
    }
}
const login = (user, resolve, reject) => {
    console.log('login is called')
    if (user.name === 'admin') {
        setTimeout(resolve, 1000, 'Login success')
    } else {
        setTimeout(reject, 1000, 'login failed')
    }
}
const showDashboard = (loginstatus, resolve, reject) => {
    console.log('showDashboard is called')
    if (loginstatus === 'Login success') {
        setTimeout(resolve, 1000, 'Welcome to Dashboard Page')
    } else {
        setTimeout(reject, 1000, 'Welcome to Guest Page')
    }
}



function main() {
    getUser(user => {
        login(user, (status) => {
            showDashboard(status, page => {
                console.log(page)
            }, errpage => {
                console.log(errpage)
            })
        }, err => {
            console.log(err)
        })
    }, err => {
        console.log(err)
    })
}
main()