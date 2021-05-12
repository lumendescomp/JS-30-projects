const panels = document.querySelectorAll('.panel')

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleOpenActive));

function toggleOpen() {
    this.classList.toggle('open')
}

function toggleOpenActive(e) {
    if (e.propertyName.includes('flex'))
        this.classList.toggle('open-active')
}


const secondP = document.querySelectorAll('p')
secondP.forEach(p => p.addEventListener('click', toggleOP))

function toggleOP() {
    this.classList.toggle('op')
}