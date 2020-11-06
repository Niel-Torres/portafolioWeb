const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const headerlogo = document.querySelector('#logo');

if(ipad.addEventListener) {// todos los principales navegadores, excepto IE 8 y versiones 
    // console.log("::addEventListener::");
    ipad.addEventListener("change", validationMatchMedia);
} else if (ipad.attachEvent) {// IE 8 y versiones anteriores
    // console.log("::attachEvent::");
    ipad.attachEvent("onchange", validationMatchMedia);
}

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

$(window).on('beforeunload', function() {

    window.setTimeout(function() {
        $(window).scrollTop(0); 
    }, 0);
 
});
 

$(window).scroll(function(event) {
    
    const header = document.querySelector('.header');
    var $pos = 5;
    // var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
    // console.log("Vertical "+scrollTop);
    // console.log("Horizontal "+scrollLeft);

    if(scrollTop>$pos){
        header.classList.add("sticky");        
    }
    else {
        header.classList.remove("sticky");
    }

    // console.log('SI, estas haciendo scroll');
    // clearTimeout( $.data( this, "TestScroll" ) );
    // $.data( this, "TestScroll", setTimeout(function() {
    //     console.log('NO estas haciendo scroll');
    // }, 250) );
    
}); 

function sendEmailContact(){
    const email = "niel.torres08@gmail.com";
    var subject = "Hola Niel, ponte en contacto conmigo cuando puedas";
    var body = "";
    window.open('mailto:'+email+'?subject='+subject+'&body='+body+'');
}  






