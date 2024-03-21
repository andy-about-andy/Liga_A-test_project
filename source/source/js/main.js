import {mobileVhFix} from './utils/mobile-vh-fix.js';
import {Form} from './modules/form-validate/form';
import {CustomSelect} from './modules/select/custom-select';
import {uploadFile, uploadImageDrop} from './modules/input-file/init-upload';
import {Burger} from './modules/burger/burger';
import {StickyHeader} from './modules/burger/sticky-header';
import {initScrollTo} from './modules/init-scroll-to';
import {initParallax} from './modules/init-parallax';
import {initAccordions} from './modules/accordion/init-accordion';
import {initPlayer} from './modules/init-player';
import {initGenerateRandomScale} from './modules/init-generate-random-scale';
import {showMessage} from './modules/form-validate/show-message';
import {initScrollTrigger} from './modules/init-scroll-trigger';
import {initScrollHeaderChange} from './modules/init-scroll-header-change';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  mobileVhFix();

  // Modules
  // ---------------------------------
  const burger = new Burger();
  burger.init();
  const stickyHeader = new StickyHeader();
  stickyHeader.init();
  initParallax();
  initScrollTo();
  initScrollTrigger();
  initScrollHeaderChange();

  window.addEventListener('load', () => {
    uploadFile();
    uploadImageDrop();
    const select = new CustomSelect();
    select.init();
    const form = new Form();
    window.form = form;
    form.init();
    initAccordions();
    initPlayer();
    initGenerateRandomScale();
    showMessage();
  });
});
