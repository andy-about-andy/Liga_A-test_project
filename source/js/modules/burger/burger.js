import scrollLock from '../../vendor/scroll-lock.min';
import {FocusLock} from '../../utils/focus-lock';

export class Burger {
  constructor() {
    this._header = document.querySelector('[data-header]');
    this._burger = document.querySelector('[data-burger]');
    this._scrollableElement = document.querySelector('.header__menu-inner');
    this._scrollLock = scrollLock;
    this._focusLock = new FocusLock();
    this._isMenuOpen = false;

    this._onBurgerClick = this._onBurgerClick.bind(this);
    this._onDocumentKeydown = this._onDocumentKeydown.bind(this);
    this._onDocumentClick = this._onDocumentClick.bind(this);
    this._closeMenuResize = this._closeMenuResize.bind(this);
  }

  init() {
    if (!this._burger) {
      return;
    }

    this._burger.addEventListener('click', this._onBurgerClick);

  }

  _openMenu() {
    this._isMenuOpen = true;
    this._header.classList.add('is-open');
    this._scrollLock.disablePageScroll(this._scrollableElement);
    document.addEventListener('keydown', this._onDocumentKeydown);
    document.addEventListener('click', this._onDocumentClick);
    window.addEventListener('resize', this._closeMenuResize);
    this._focusLock.lock('[data-header]');
    if (window.ls) {
      window.ls.stop();
    }
  }

  _closeMenu() {
    this._isMenuOpen = false;
    this._header.classList.remove('is-open');
    this._scrollLock.enablePageScroll(this._scrollableElement);
    this._focusLock.unlock('[data-header]');
    document.removeEventListener('keydown', this._onDocumentKeydown);
    document.removeEventListener('click', this._onDocumentClick);
    window.removeEventListener('resize', this._closeMenuResize);
    if (window.ls) {
      window.ls.start();
    }
  }

  _closeMenuResize() {
    if (window.screen.width > 1023) {
      this._closeMenu();
    }
  }

  _onBurgerClick() {
    if (this._isMenuOpen) {
      this._closeMenu();
    } else {
      this._openMenu();
    }
  }

  _onDocumentKeydown(evt) {
    if (evt.key === 'Escape') {
      this._closeMenu();
    }
  }

  _onDocumentClick(evt) {
    if (evt.target.hasAttribute('data-close-menu')) {
      this._closeMenu();
    }
  }
}
