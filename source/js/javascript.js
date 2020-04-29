/* ===========================================================================================================================*/
//Мобильное меню
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation'); 
const body = document.querySelector('body'); 

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    navigation.classList.toggle('active'); 
    body.classList.toggle('lock');
});

//Проверка была ли нажата кнопка. 
const listLink = document.querySelectorAll('.list__link');
listLink.forEach(function (element) {
    element.addEventListener("click", function () {
        if (element === element) {
            listLink.forEach(linkRemoveClass);
            element.classList.add("link-active");
        }
    });
});

function linkRemoveClass(link) {
    link.classList.remove("link-active");
}

/* ===========================================================================================================================*/
//Наведение на элемент через  javascript
const servicesLink = document.querySelectorAll('.services__link');
servicesLink.forEach(function (element) {
    const servicesItem = element.parentNode; //Node.parentNode MDN   rowItem -  Наш родитель в текущей области видимости.   
    const servicesSvg = servicesItem.querySelector('.services__svg');
    const servicesSubtitle = servicesItem.querySelector('.services__subtitle');
    const servicesText = servicesItem.querySelector('.services__text');

    element.addEventListener("mouseover", function () {
        servicesItem.classList.add("services__item_induced");
        servicesSvg.classList.add("services__svg_induced");
        servicesSubtitle.classList.add("services__subtitle_induced");
        servicesText.classList.add("services__text_induced");
    });
    element.addEventListener("mouseout", function () {
        servicesItem.classList.remove("services__item_induced");
        servicesSvg.classList.remove("services__svg_induced");
        servicesSubtitle.classList.remove("services__subtitle_induced");
        servicesText.classList.remove("services__text_induced");
    });
})

/* ===========================================================================================================================*/
//Фильтр по нажатию кнопки. 

const servicesList = document.querySelectorAll('.services__list');
const servicesBtn = document.querySelectorAll('.services__btn-m');
servicesBtn.forEach(function (element, i) {
    element.addEventListener("click", function () {
        servicesBtn.forEach(elRemoveClass);
        element.classList.add("btn-active");
        for (let j = 0; j < servicesList.length; j++) {
            if (j === i) {
                servicesList[j].classList.remove('hidden-item');
            } else {
                servicesList[j].classList.add('hidden-item');
            }
        }
    });
});

const worksBtn = document.querySelectorAll('.works__btn-m');
const worksGalleries = document.querySelectorAll('.works__gallery');
worksBtn.forEach(function (element, i) {
    element.addEventListener("click", function () {
        worksBtn.forEach(elRemoveClass);
        element.classList.add("btn-active");
        for (let j = 0; j < worksGalleries.length; j++) {
            if (j === i) {
                worksGalleries[j].classList.remove('hidden-item');
            } else {
                worksGalleries[j].classList.add('hidden-item');
            }
        }
    });
});

function elRemoveClass(el) {
    el.classList.remove("btn-active");
}