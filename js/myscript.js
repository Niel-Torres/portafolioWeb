const ipad = window.matchMedia('screen and (max-width: 767px)');
const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

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
    } else {
        burgerButton.classList.add('on');
        menu.classList.add('is_active');
    }
}

$(window).scroll(function(event) {
    const header = document.querySelector('.header');
    // var scrollLeft = $(window).scrollLeft();
    var scrollTop = $(window).scrollTop();
    // console.log("Vertical "+scrollTop);
    // console.log("Horizontal "+scrollLeft);
    
    if(scrollTop>5){
        header.classList.add("sticky");
                
    }
    else {
        header.classList.remove("sticky");
    }
  }); 

function sendEmailContact(){
    const email = $("#email").val();
    window.open('mailto:'+email+'?subject=subject&body=body');
}  






