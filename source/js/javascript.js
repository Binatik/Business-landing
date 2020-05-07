$(document).ready(function () {


    $('.reviews__slider-comment').slick({
        dots: true,
        adaptiveHeight: true,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 16000,
        draggable: false,
        touchThreshold: 2,
        arrows: false,
    });   
     
    VK.Widgets.Group("vk_groups", {mode: 3, width: "auto", color1: '000'}, 191914357);

    const all = document.querySelectorAll('*');
    window.line = function line() {
        all.forEach(element => element.style.outline = 'none');
        console.log('Функция линий была принудительно вкл. Перезапустите страницу для возврата.');
    }

    const menuBurger = document.querySelector('.menu-burger');
    const navigation = document.querySelector('.navigation');
    const navigationList = document.querySelector('.navigation__list');
    const body = document.querySelector('body');
    menuBurger.addEventListener("click", function () {
        menuBurger.classList.toggle('active');
        navigation.classList.toggle('active');
        navigationList.classList.toggle('block_none');
        body.classList.toggle('lock');
    });

    const headerMenu = document.getElementsByClassName('header-menu')[0];
    const headerMenu_fixe = document.getElementsByClassName('header-menu_fixe')[0];
    const offsetTop = headerMenu.offsetTop;

    const subscription = document.querySelector('.wrapper_fon');
    const navigationOffsetTop = subscription.offsetTop;

    function calcOpacity(scrollTop, distance) {
        const normalScrollTop = scrollTop - navigationOffsetTop;
        return Math.max(Math.min(1 - normalScrollTop / distance, 1), 0);
    }

    window.addEventListener('scroll', function () {
        const documentScrollTop = document.body.scrollTop || window.pageYOffset;
        subscription.style.opacity = calcOpacity(documentScrollTop, 200);

        if (document.body.scrollTop || window.pageYOffset > offsetTop) {
            headerMenu.classList.add('header-menu_scroll', 'header-menu_scroll-decoration');
            headerMenu_fixe.style.height = headerMenu.offsetHeight + 'px';
            headerMenu.style.opacity = '0.5';

        } else {
            headerMenu.classList.remove('header-menu_scroll', 'header-menu_scroll-decoration');
            headerMenu_fixe.style.height = 0;
            headerMenu.style.opacity = '1';
        }
    }, {
        passive: true
    });

    let activel = 1;
    const navigationLink = document.querySelectorAll('.navigation__link');

    function elRemoveClass(el) {
        el.classList.remove("navigationActive");
    }
    navigationLink.forEach(function (element) {
        element.addEventListener("click", function () {
            if (activel === 1) {
                navigationLink.forEach(elRemoveClass);
                element.classList.add("navigationActive");
            }
        });
    });

    function main() {

        class Point {
            constructor(x, y, sumbol) {
                this.x = x;
                this.y = y;
                this.sumbol = sumbol;
            }

            init() {
                console.log(this.x + this.y);
                console.log(this.sumbol);
            }
        }

        let point1 = new Point('X = 32424144', 'Y = -4238694142536', '#');
        point1.init();

        let point2 = new Point('X = -3414121', 'Y = 93903251124', '@');
        point2.init();
    }
    main();

}); 