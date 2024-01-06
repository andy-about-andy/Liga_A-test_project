import {ScrollTrigger} from '../vendor/scroll-trigger.js';

export const initScrollTrigger = () => {
  gsap.registerPlugin(ScrollTrigger);

  const header = document.querySelectorAll('.header');
  const bottomToTop = document.querySelectorAll('.page-section');
  const pageIntroDecor = document.querySelectorAll('.page-intro__decor-man');
  const aboutContentDecor = document.querySelectorAll('.about-content__decor');
  const footer = document.querySelectorAll('.footer');
  const serviceItem = document.querySelectorAll('.service__item');
  const teamItem = document.querySelectorAll('.team__item');
  const sidebar = document.querySelectorAll('.sidebar');
  const sidebarItem = document.querySelectorAll('.sidebar__item');

  if (!header) {
    return;
  }

  if (!bottomToTop) {
    return;
  }

  if (!pageIntroDecor) {
    return;
  }

  if (!aboutContentDecor) {
    return;
  }

  if (!footer) {
    return;
  }

  if (!serviceItem) {
    return;
  }

  if (!teamItem) {
    return;
  }

  if (!sidebar) {
    return;
  }

  if (!sidebarItem) {
    return;
  }


  ScrollTrigger.batch(header, {
    onEnter: (elements) => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 100,
        stagger: 0.15,
      });
    },
    once: true,
  });

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

  ScrollTrigger.batch(serviceItem, {
    onEnter: (elements) => {
      gsap.from(elements, {
        autoAlpha: 0,
        y: 250,
        stagger: 0.15,
      });
    },
    once: true,
  });

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
};
