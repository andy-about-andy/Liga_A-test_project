const parallaxItems = document.querySelectorAll('[data-parallax-mouse]');

const initParallax = () => {
  if (parallaxItems) {
    let mouseCords = {
      x: 0,
      y: 0,
    };

    const handleMouseMove = (e) => {
      mouseCords.x = e.clientX - window.innerWidth / 2;
      mouseCords.y = e.clientY - window.innerHeight / 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updateParallax = () => {
      parallaxItems.forEach((item) => {
        const movement = item.dataset.movement ? item.dataset.movement : 1;

        gsap.to(item, {
          x: mouseCords.x / movement,
          y: mouseCords.y / movement,
          duration: item.dataset.duration ? item.dataset.duration : 0.5,
          ease: 'power1.out',
        });
      });
    };

    gsap.ticker.add(updateParallax);
  }
};

export {initParallax};
