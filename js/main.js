/*****Agrego un evento click al menú hamburguesa*****/
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
});

// Activar el iten seleccionado en el menú
/* for (let i = 0; i < menu.children.length; i++) {
    menu.children[i].addEventListener('click', function () {
        menu.children[i].classList.add('active');
        for (let a = 0; a < menu.children.length; a++) {
            if (a !== i) {
                menu.children[a].classList.remove('active');
            }
        }

    })
} */


/****************Función Activar items seleccionado****************/
const menuItem = document.querySelectorAll('li.menu-item');
menuItem.forEach(function (item) {
    item.addEventListener('click', function (e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');


    })
});

/**********************Función Dark Mode**************************/
const darkMode = document.querySelectorAll('.modo-dark');
const lightAndDark = document.querySelectorAll('.bg-light, .bg-dark');

darkMode.forEach(function (i) {

    i.addEventListener('click', function () {

        lightAndDark.forEach(function (e) {
            e.classList.toggle('bg-light');
            e.classList.toggle('bg-dark');
        })

    })
})
