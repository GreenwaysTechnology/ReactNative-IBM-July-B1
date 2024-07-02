const getUser = () => {
    console.log('getUser is called')
    return new Promise((resolve, reject) => {
        let user = { name: 'admin' }
        //user = null
        if (user) {
            setTimeout(resolve, 1000, user)
        } else {
            setTimeout(reject, 1000, { message: 'User Not found' })
        }
    })
}
const login = user => {
    console.log('login is called')
    return new Promise((resolve, reject) => {
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, 'Login success')
        } else {
            setTimeout(reject, 1000, 'login failed')
        }
    })
}
const showDashboard = loginstatus => {
    console.log('showDashboard is called')
    return new Promise((resolve, reject) => {
        if (loginstatus === 'Login success') {
            setTimeout(resolve, 1000, 'Welcome to Dashboard Page')
        } else {
            setTimeout(reject, 1000, 'Welcome to Guest Page')
        }
    })
}



async function main() {

    //   getUser()
    //     .then(user => {
    //         return login(user)
    //     })
    //     .then(status => {
    //         return showDashboard(status)
    //     }).then(page => {
    //         console.log(page)
    //     })
    //     .catch(err => console.log(err))

    try {
        const user = await getUser()
        const status = await login(user)
        const page = await showDashboard(status)
        console.log(user, status, page)
    }
    catch (err) {
        console.log(err)
    }
}
main()