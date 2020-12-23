const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const headerlogo = document.querySelector('#logo');
const header = document.querySelector('.header');
const scrollArrow = document.querySelector('.scrollToTop');

if(ipad.addEventListener) {// todos los principales navegadores, excepto IE 8 y versiones 
    // console.log("::addEventListener::");
    ipad.addEventListener("change", validationMatchMedia);
} else if (ipad.attachEvent) {// IE 8 y versiones anteriores
    // console.log("::attachEvent::");
    ipad.attachEvent("onchange", validationMatchMedia);
}

/*=======================================================================================================*/
// Comprueba si estamos a resolución < 768, si es así empieza a escuchar event click
/*=======================================================================================================*/

validationMatchMedia();

function validationMatchMedia() {
    if (ipad.matches) {
        // console.log("::TRUE::");
        burgerButton.addEventListener('click', hideShow);
    } else {
        // console.log("::FALSE::");
        burgerButton.removeEventListener('click', hideShow);
    }
}

function hideShow(e) {
    e.preventDefault();
    hideShowMenu();
}

function hideShowMenu(element){
    if (burgerButton.classList.contains('on')) {
        burgerButton.classList.remove('on');
        menu.classList.remove('is_active');
        // headerlogo.classList.add('hide');
    } else {
        burgerButton.classList.add('on');
        menu.classList.add('is_active');
        // headerlogo.classList.remove('hide');
    }
}

function hideShow(e) {
    e.preventDefault();
    hideShowMenu();
}

/*=======================================================================================================*/
// Función para ocultar/mostrar el menu y darle movimiento al burgerMenu, ambas usando classes css
/*=======================================================================================================*/
function hideShowMenu(element){
    if (burgerButton.classList.contains('on')) {
        burgerButton.classList.remove('on');
        menu.classList.remove('is_active');
    } else {
        burgerButton.classList.add('on');
        menu.classList.add('is_active');
    }
}

//Click event to scroll to top
$('.scrollToTop').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});

//Click event to load page to top    
$(window).on('beforeunload', function() {

    window.setTimeout(function() {
        $(window).scrollTop(0); 
    }, 0);
 
});
 

/*=======================================================================================================*/
// Función para comprobar el scrollTop para interactuar con el header y la flecha scrollTop
/*=======================================================================================================*/
$(window).scroll(function(event) {
    var $pos = 5;
    // var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
    // console.log("Vertical "+scrollTop);
    // console.log("Horizontal "+scrollLeft);

    if(scrollTop>$pos){
        header.classList.add("sticky");
        scrollArrow.classList.remove("hide");
    }
    else {
        header.classList.remove("sticky");
        scrollArrow.classList.add("hide");
    }

    // console.log('SI, estas haciendo scroll');
    // clearTimeout( $.data( this, "TestScroll" ) );
    // $.data( this, "TestScroll", setTimeout(function() {
    //     console.log('NO estas haciendo scroll');
    // }, 250) );
    
}); 


/*=======================================================================================================*/
// Función para enviar email
/*=======================================================================================================*/
function sendEmailContact(){
    const email = "niel.torres08@gmail.com";
    var subject = "Hola Niel, ponte en contacto conmigo cuando puedas";
    var body = "";
    window.open('mailto:'+email+'?subject='+subject+'&body='+body+'');
}  
