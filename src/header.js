const body = document.querySelector('body')

const loadHeader = () => {
    const header = document.createElement('div')
    header.classList.add('header')
    header.textContent = 'Todo List'
    body.append(header)
}

export { loadHeader }