document.querySelector('#mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('#bottom').classList.toggle('mobile-menu-height');
});

document.querySelector('#mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('#mobile-menu-icon').classList.toggle('spin');
});

document.querySelector('.fa-envelope').addEventListener('click', () => {
    document.querySelector('.top-mail').classList.toggle('show-info');
});

document.querySelector('.fa-phone').addEventListener('click', () => {
    document.querySelector('.tlf').classList.toggle('show-info');
});