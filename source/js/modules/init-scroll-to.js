import {ScrollToPlugin} from '../vendor/scroll-to-plugin.min.js';

const header = document.querySelector('.header');

const setOffset = (offset) => {
  if (offset === 'header') {
    if (!header) {
      return 0;
    }
    return header.getBoundingClientRect().height * (-1);
  }

  return offset;
};

const scrollToHandler = (e) => {
  e.preventDefault();
  const btn = e.target.closest('[data-move-to]');
  let speedIndex;

  if (e.target.closest('[data-index]')) {
    speedIndex = e.target.closest('[data-index]').dataset.index;
  } else {
    speedIndex = 8;
  }
  const target = document.querySelector(btn.dataset.moveTo);

  const options = {
    duration: Math.abs(btn.getBoundingClientRect().top - target.getBoundingClientRect().top) / (window.innerHeight * speedIndex),
    offset: btn.dataset.offset ? setOffset(btn.dataset.offset) : 0,
  };

  // eslint-disable-next-line no-undef
  gsap.to(window, options.duration, {
    scrollTo: {
      y: target,
      offsetY: options.offset,
    },
    ease: 'power1.out',
  });
};

export const initScrollTo = () => {
  // eslint-disable-next-line no-undef
  gsap.registerPlugin(ScrollToPlugin);
  const scrollToButtons = document.querySelectorAll('[data-move-to]');

  scrollToButtons.forEach((btn) => {
    btn.addEventListener('click', scrollToHandler);
  });
};
