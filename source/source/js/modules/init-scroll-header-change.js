// добавляет класс с bg-color для header__box при прокрутке вниз больше 50px
// и удаляет этот класс при возвращении обратно (то есть меньше 50px)

const initScrollHeaderChange = () => {
  let lastScroll = 0;
  const defaultOffset = 50;

  const header = document.querySelector('.header__box');
  if (!header) {
    return;
  }

  const scrollPosition = () => window.scrollY || document.documentElement.scrollTop;

  // добавляет класс, если обновили (или дублировали) страницу, а header__box не в нулевом положении
  if (scrollPosition() > defaultOffset) {
    header.classList.add('header__box--scroll');
  }

  const containScroll = () => header.classList.contains('header__box--scroll');

  window.addEventListener('scroll', () => {
    if (scrollPosition() > lastScroll && !containScroll() && scrollPosition() > defaultOffset) {
      header.classList.add('header__box--scroll');
    } else if (scrollPosition() < defaultOffset && containScroll()) {
      header.classList.remove('header__box--scroll');
    }
    lastScroll = scrollPosition();
  });
};

export {initScrollHeaderChange};
