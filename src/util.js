let titleEl = document.querySelector('#title')

let title = (value) => {
    titleEl.innerHTML = value;
}

export const add = {
    title: title
}