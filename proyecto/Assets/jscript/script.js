var menuTop = document.getElementById('menu-top');
var scrolled = window.scrollY;

//Funcion para cambiar propiedades de menu superior al hacer scroll
window.addEventListener('scroll',function(){
    var scrolled = window.scrollY;
    let logoLight = this.document.getElementById('logo-menu-light');
    let logoDark = this.document.getElementById('logo-menu-dark');
    let listaMenu = this.document.getElementById('lista-menu');
    if(scrolled > 10){
        this.document.getElementById('menu-top').classList.add('fixed');
        logoLight.style.display='none';
        logoDark.style.display='block';
        listaMenu.style.color='black'
    }
    else{
        this.document.getElementById('menu-top').classList.remove('fixed');
        logoLight.style.display='block';
        logoDark.style.display='none';
        listaMenu.style.color='whitesmoke'
        console.log(scrolled)
    }
})

//Funcion para cambiar de valor una variable y que esta cambie el color de nuestra UL en el menu y de su pseudoelemento before
window.addEventListener('scroll',function(){
    var scrolled = window.scrollY;
    if(scrolled>10){
        this.document.documentElement.style.setProperty('--menu-color','black');
        this.document.documentElement.style.setProperty('--menu-margin','1.5rem');
    }
    else{
        this.document.documentElement.style.setProperty('--menu-color','whitesmoke');
        this.document.documentElement.style.setProperty('--menu-margin','2rem');
    }
})

window.onload = function(){
    $(`#onload`).fadeOut();
}
