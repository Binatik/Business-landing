const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__navigation');

burger.addEventListener("click", function () {
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
});

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

const btns = document.querySelector('.works__btn-m');

let activel = 1;
const worksBtn = document.querySelectorAll('.works__btn-m'); 
const worksGallery = document.querySelector('.works__gallery');

worksBtn.forEach(function (element, i) {
    element.addEventListener("click", function () {
        if (activel === 1 && i === 0) { 
            worksBtn.forEach(elRemoveClass);
            element.classList.add("works-active");
            worksGallery.classList.toggle('hidden-gallery');
             
        } 

        if (activel === 1 && i === 1) { 
            worksBtn.forEach(elRemoveClass);
            element.classList.add("works-active");
            worksGallery.classList.toggle('hidden-gallery');
             
        } 

        if (activel === 1 && i === 2) { 
            worksBtn.forEach(elRemoveClass);
            element.classList.add("works-active");
            worksGallery.classList.toggle('hidden-gallery');
             
        } 

        if (activel === 1 && i === 3) { 
            worksBtn.forEach(elRemoveClass);
            element.classList.add("works-active");
            worksGallery.classList.toggle('hidden-gallery');
             
        }
    });
});

function elRemoveClass(el) {
    el.classList.remove("works-active");
}