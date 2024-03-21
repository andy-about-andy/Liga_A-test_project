const uploadForm = document.querySelector('.form');
const messageSuccess = document.querySelector('.form__box-modal');
const inputForm = document.querySelector('.form__box');

const sendData = async (onSuccess, body) => {
  try {
    const response = await fetch('https://echo.htmlacademy.ru/',
      {
        method: 'POST',
        body,
      }
    );

    if (!response.ok) {
      throw new Error('Не удалось отправить');
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

const onSuccessFormSend = () => {
  messageSuccess.classList.add('form__box-modal--not-hidden')
  inputForm.classList.add('form__box--hidden')
  setTimeout(() => {
    messageSuccess.classList.remove('form__box-modal--not-hidden');
    inputForm.classList.remove('form__box--hidden');
  }, 3000);
};

const showMessage = () => {
  if (!uploadForm) {
    return;
  }
  uploadForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const valid = uploadForm.querySelector('.is-valid');
    if (valid) {
      sendData(onSuccessFormSend, new FormData(evt.target));
    }
  });
};

export {showMessage};
