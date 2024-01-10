import {ScrollTrigger} from '../vendor/scroll-trigger';

export const initScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);

  const bottomToTop = document.querySelectorAll('.page-section');
  const pageIntroDecor = document.querySelectorAll('.page-intro__decor-man');
  const aboutContentDecor = document.querySelectorAll('.about-content__decor');
  const footer = document.querySelectorAll('.footer');
  const teamItem = document.querySelectorAll('.team__item');
  const sidebar = document.querySelectorAll('.sidebar');
  const sidebarItem = document.querySelectorAll('.sidebar__item');

  if (bottomToTop) {
    ScrollTrigger.batch(bottomToTop, {
      onEnter: (elements) => {
        gsap.from(elements, {
          autoAlpha: 0,
          y: 250,
          stagger: 0.15,
        });
      },
      once: true,
    });
  }

  if (pageIntroDecor) {
    ScrollTrigger.batch(pageIntroDecor, {
      onEnter: (elements) => {
        gsap.from(elements, {
          delay: 0.2,
          autoAlpha: 0,
          x: 200,
          stagger: 0.15,
        });
      },
      once: true,
    });
  }

  if (aboutContentDecor) {
    ScrollTrigger.batch(aboutContentDecor, {
      onEnter: (elements) => {
        gsap.from(elements, {
          autoAlpha: 0,
          y: 400,
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
          autoAlpha: 0,
          y: 250,
          stagger: 0.15,
        });
      },
      once: true,
    });
  }

  if (sidebar) {
    ScrollTrigger.batch(sidebar, {
      onEnter: (elements) => {
        gsap.from(elements, {
          autoAlpha: 0,
          x: 450,
          stagger: 0.15,
        });
      },
      once: true,
    });
  }

  if (sidebarItem) {
    ScrollTrigger.batch(sidebarItem, {
      onEnter: (elements) => {
        gsap.from(elements, {
          autoAlpha: 0,
          x: 500,
          stagger: 0.15,
        });
      },
      once: true,
    });
  }
};
