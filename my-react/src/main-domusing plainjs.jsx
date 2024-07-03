//create dom element using plain js and how to attach on existing dom tree

function createElement() {
    const Heading = document.createElement('h1')
    Heading.innerHTML = 'Hello React!'
    //attach Heading with existing div
    const rootElement = document.getElementById('root')
    rootElement.appendChild(Heading)
}
createElement()