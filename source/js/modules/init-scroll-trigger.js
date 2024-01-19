import {ScrollTrigger} from '../vendor/scroll-trigger';

export const initScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);

  const bottomToTop = document.querySelectorAll('.container');
  const footer = document.querySelectorAll('.footer');
  const teamItem = document.querySelectorAll('.team__item');

  if (bottomToTop) {
    ScrollTrigger.batch(bottomToTop, {
      onEnter: (elements) => {
        gsap.from(elements, {
          delay: 0.65,
          autoAlpha: 0,
          y: 250,
          stagger: 0.15,
        });
      },
      once: true,
    });
  }

  if (teamItem) {
    ScrollTrigger.batch(teamItem, {
      onEnter: (elements) => {
        gsap.from(elements, {
          autoAlpha: 0,
          y: 500,
          stagger: 0.2,
        });
      },
      once: true,
    });
  }

  if (footer) {
    ScrollTrigger.batch(footer, {
      onEnter: (elements) => {
        gsap.from(elements, {
          delay: 0.65,
          autoAlpha: 0,
          y: 250,
          stagger: 0.15,
        });
      },
      once: true,
    });
  }
};
