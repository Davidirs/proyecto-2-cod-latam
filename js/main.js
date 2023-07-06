/*****Agrego un evento click al menú hamburguesa*****/
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', function () {
    menu.classList.toggle('show-menu');
});


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


/**********************Animar header**************************/
const header = document.getElementById("header-main");
let sticky = header.offsetTop;
const menuItems = document.querySelectorAll(".menu-item");
const logoImg = document.getElementById("logo-img");/* 
const modoDark = document.getElementsByClassName("modo-dark"); */

window.onscroll = function () { resizeHeader(); };

function resizeHeader() {// redimencionar el header

    // si pasa del tamaño sticky 
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
        //reduce el padding
        header.style.minHeight = "80px";
        header.style.position = "Fixed";
        //cambia el tamaño de la letra
        menuItems.forEach(function (e) {
            e.style.fontSize = "17px";
        })
        //resize logo
        logoImg.style.width = "120px";
    } else {
        //sino los valores default
        header.style.minHeight = "90px";
        header.style.position = "relative";

        menuItems.forEach(function (e) {
            e.style.fontSize = "20px";
        })
        logoImg.style.width = "140px";

    }

    

}
/*************Formulario************** */ 

    const formulario = document.getElementById("form");

    
    console.log(formulario);
    formulario.addEventListener('submit' , function (e) {
        let fullName = document.getElementById("full_name");
        let email = document.getElementById("email");
        let phoneNumber = document.getElementById("phone_number");
        let comments = document.getElementById("coments");
        
        e.preventDefault();
        let formObj = {
            "name": fullName.value,
            "email":email.value,
            "phone":phoneNumber.value,
            "comments":comments.value,
        }
        console.log(formObj)
        
    })