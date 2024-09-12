import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const reviewsSlider = document.querySelector(".main-reviews__slider");
const meetingSlider = document.querySelector(".main-meeting__slider");
const publicationsSlider = document.querySelector(".main-publications__slider");
const certificateSlider = document.querySelector(".about-certificate__slider");

const reviewsCase = new Swiper(reviewsSlider, {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: "1",
  loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  navigation: {
    nextEl: ".main-reviews__btn-next",
    prevEl: ".main-reviews__btn-prev",
  },
});
const meetingCase = new Swiper(meetingSlider, {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: "1",
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  navigation: {
    nextEl: ".main-meeting__btn-next",
    prevEl: ".main-meeting__btn-prev",
  },
});
const publicationsCase = new Swiper(publicationsSlider, {
  modules: [Navigation, Pagination],
  slidesPerView: "3",

  loop: true,
  navigation: {
    nextEl: ".main-publications__btn-next",
    prevEl: ".main-publications__btn-prev",
  },
  breakpoints: {
    350: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
  },
});
const certificateCase = new Swiper(certificateSlider, {
  modules: [Navigation, Pagination],
  slidesPerView: "3",
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".about-certificate__btn-next",
    prevEl: ".about-certificate__btn-prev",
  },
});
