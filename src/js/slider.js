import Swiper, {Navigation, EffectFade, Autoplay} from 'swiper';

function initSlider() {
  const slider = document.querySelector('.js-slider');
  const sliderSidePrevious = document.querySelector('.js-slider-side-previous');
  const sliderSideNext = document.querySelector('.js-slider-side-next');

  if (!slider || !sliderSidePrevious || !sliderSideNext) {
    return false;
  }

  Swiper.use([Navigation, EffectFade, Autoplay]);

  const swiper = new Swiper(slider, {
    autoplay: {
      delay: 4000,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    navigation: {
      nextEl: '.js-slider-next',
      prevEl: '.js-slider-prev',
    },
  });

  swiper.on('slideChange', () => {
    let previousSlideIndex = 0;
    let nextSlideIndex = 0;

    if (swiper.activeIndex > 0) {
      previousSlideIndex = swiper.activeIndex - 1;
    } else {
      previousSlideIndex = swiper.slides.length - 1;
    }

    if (swiper.activeIndex === (swiper.slides.length - 1)) {
      nextSlideIndex = 0;
    } else {
      nextSlideIndex = swiper.activeIndex + 1;
    }

    const previousSlide = swiper.slides[previousSlideIndex];
    const nextSlide = swiper.slides[nextSlideIndex];
    const previousSlideImgSrc = previousSlide.querySelector('img').getAttribute('src');
    const nextSlideImgSrc = nextSlide.querySelector('img').getAttribute('src');

    sliderSidePrevious.querySelector('img').setAttribute('src', previousSlideImgSrc);
    sliderSideNext.querySelector('img').setAttribute('src', nextSlideImgSrc);
  });
}

export default initSlider;
