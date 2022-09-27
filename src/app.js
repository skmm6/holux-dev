import * as name from './js/modules/test';
import * as accordions from './js/modules/accordion';
// import Swiper JS
  // core version + navigation, pagination modules:
  import Swiper, { Navigation, Pagination } from 'swiper';
  // import Swiper and modules styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';













window.addEventListener('scroll', name.scrollHeader);
accordions.accordions();

//   // init Swiper:
//   const swiper = new Swiper('.swiper', {
//     // configure Swiper to use modules
//     modules: [Navigation, Pagination],
//   });

/*============================SWIPER POPULAR ============*/

const swiperPopularOb = new Swiper(".popular__container", {
        spaceBetween: 32,
        grabCursor: true,
        centeredSlides: true,
        sliderPerView: 'auto',
        loop: true,

        modules: [Navigation, Pagination],
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
});

