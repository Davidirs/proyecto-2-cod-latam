

const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

//Agrego un evento click al menú hamburguesa
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

const menuItem = document.querySelectorAll('li.menu-item');
console.log(menuItem[0]);
menuItem.forEach(function (item) {
    item.addEventListener('click', function(e){
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');

    
})});
