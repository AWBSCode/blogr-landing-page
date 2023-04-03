let i = document.querySelector('.fa-solid')
let mobileNav = document.querySelector('.mobile-nav')
let isOpen = false

function showNav() {
    if (!isOpen) {
        mobileNav.style.display = 'block'
        i.className = 'fa-solid fa-circle-xmark'
        console.log(i);
        isOpen = true
    } else {
        mobileNav.style.display = 'none'
        i.className = 'fa-solid fa-bars'
        isOpen = false
    }
}