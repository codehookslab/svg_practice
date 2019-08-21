let titleEl = document.querySelector('#title')

let title = (value) => {
    titleEl.innerHTML = value;
}

let footer = (value) => {
    document.querySelector('#footer').innerHTML = value;
}

export const add = {
    title: title,
    footer: footer
}