const switcherEN = document.querySelector('.switcher-en');
const switcherUA = document.querySelector('.switcher-ua');

switcherEN.addEventListener('click', function () {
    document.body.classList.remove('ua');
    switcherUA.classList.remove('current');
    document.body.classList.add('en');
    switcherEN.classList.add('current');
});

switcherUA.addEventListener('click', function () {
    document.body.classList.remove('en');
    switcherEN.classList.remove('current');
    document.body.classList.add('ua');
    switcherUA.classList.add('current');
});