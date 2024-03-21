const videoBlocks = document.querySelectorAll('[data-player="container"]');

// инициализирует воспроизведение видео
const onVideoClick = (evt) => {
  const target = evt.target;

  if (!target.closest('[data-player="container"]')) {
    return;
  }

  evt.preventDefault();

  const player = target.closest('[data-player="container"]');
  const video = player.querySelector('[data-video]');

  const onEnded = () => {
    player.classList.remove('is-play');
    player.classList.remove('is-pause');
  };

  if (video) {
    video.setAttribute('controls', 'controls');

    if (!player.classList.contains('is-play')) {
      player.classList.add('is-play');
      player.classList.remove('is-pause');
      video.play();

      video.addEventListener('ended', onEnded);

      return;
    }

    video.pause();
    player.classList.remove('is-play');
    player.classList.add('is-pause');
    video.removeEventListener('ended', onEnded);
  }

  if (!video) {
    player.classList.add('is-play');
  }
};

const initPlayer = () => {
  if (!videoBlocks.length) {
    return;
  }

  document.addEventListener('click', onVideoClick);
};

window.initPlayer = initPlayer;

export {initPlayer};
