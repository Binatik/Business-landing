 //Слайдер sckick.   Обертка  jq  только для него. 
 $(document).ready(function () {
     $('.team__slider').slick({ 
         dots: true, 
         arrows: false,
         infinite: true, 
         slidesToShow: 3,  
         slidesToScroll: 3,

         responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2, 
                slidesToScroll: 2,
              }
            }, 
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1, 
                  slidesToScroll: 1,
                }
              },
          ]
     });
 });
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
             navigation.classList.remove('active');
             burger.classList.remove('active');
             body.classList.remove('lock');
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
     const servicesItem = element.parentNode; //Node.parentNode MDN   servicesItem -  Наш родитель в текущей области видимости.   
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

 const priceBtn = document.querySelectorAll('.price__btn');
 priceBtn.forEach(function (element) {
     const item = element.parentNode; //Node.parentNode MDN   item -  Наш родитель в текущей области видимости.   

     element.addEventListener("mouseover", function () {
         item.classList.add("item__item_induced");
     });
     element.addEventListener("mouseout", function () {
         item.classList.remove("item__item_induced");
     });
 })

 /* ===========================================================================================================================*/
 //Фильтр по нажатию кнопки. 
 const servicesBtn = document.querySelectorAll('.services__btn-m');
 const servicesList = document.querySelectorAll('.services__list');
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
             if (j === 0 && i === 0) {
                 worksBtn[worksBtn.length - 1].classList.add("btn-active");
             }

             if (j === i) {
                 worksGalleries[j].classList.remove('hidden-item');

             } else if (j === 0 && i == [worksGalleries.length]) {
                 worksGalleries[j].classList.remove('hidden-item');
                 worksBtn[worksBtn.length - 5].classList.add("btn-active");

             } else {
                 worksGalleries[j].classList.add('hidden-item');
             }
         }
     });
 });

 function elRemoveClass(el) {
     el.classList.remove("btn-active");
 }