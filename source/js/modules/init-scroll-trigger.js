import {ScrollTrigger} from '../vendor/scroll-trigger';

export const initScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);

  const bottomToTop = document.querySelectorAll('[data-trigger]');
  const advantages = document.querySelectorAll('.trigger');
  const teamItem = document.querySelectorAll('.team__item');

  if (bottomToTop) {
    ScrollTrigger.batch(bottomToTop, {
      onEnter: (elements) => {
        gsap.fromTo(elements, {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          immediateRender: false,
        });
      },
      once: true,
    });
  }


  if (advantages) {
    ScrollTrigger.batch(advantages, {
      onEnter: (elements) => {
        gsap.fromTo(elements, {
          opacity: 0,
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          immediateRender: false,
        });
      },
      once: true,
    });
  }

  if (teamItem) {
    ScrollTrigger.batch(teamItem, {
      onEnter: (elements) => {
        gsap.from(elements, {
          opacity: 0,
          y: 400,
          stagger: 0.2,
        });
      },
      once: true,
    });
  }
};
