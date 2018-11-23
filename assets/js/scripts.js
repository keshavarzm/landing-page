'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 1);
  /******/
})(
/************************************************************************/
/******/[,
/* 0 */
/* 1 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__nav_js__ = __webpack_require__(2);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__slider_js__ = __webpack_require__(3);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__tooltip_js__ = __webpack_require__(4);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__copy_js__ = __webpack_require__(7);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__active_menu_js__ = __webpack_require__(8);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__form_validation_js__ = __webpack_require__(9);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__form_success__ = __webpack_require__(10);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__supported_browser_js__ = __webpack_require__(11);

  new __WEBPACK_IMPORTED_MODULE_0__nav_js__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_1__slider_js__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_2__tooltip_js__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_3__copy_js__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_4__active_menu_js__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_5__form_validation_js__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_6__form_success__["a" /* default */]();
  new __WEBPACK_IMPORTED_MODULE_7__supported_browser_js__["a" /* default */]();

  /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var Nav = function () {
    function Nav() {
      _classCallCheck(this, Nav);

      this.navMobile = document.querySelector('.nav-mobile');
      this.closeNavMobileElem = document.querySelector('.close-nav-mobile');
      this.mobileMenuElem = document.querySelector('.mobile-menu');
      this.initHeight();
      if(this.closeNavMobileElem) {
        this.closeNavMobileElem.addEventListener('click', this.closeNavMobile.bind(this));
      }

      if(this.mobileMenuElem) {
        this.mobileMenuElem.addEventListener('click', this.openNavMobile.bind(this));
      }
    }

    _createClass(Nav, [{
      key: 'initHeight',
      value: function initHeight() {
        var windowHeight = window.innerHeight;
        if(this.navMobile) {
          this.navMobile.style.height = windowHeight + 'px';

        }
      }
    }, {
      key: 'closeNavMobile',
      value: function closeNavMobile() {
        this.navMobile.style.display = 'none';
      }
    }, {
      key: 'openNavMobile',
      value: function openNavMobile() {
        this.navMobile.style.display = 'block';
      }
    }]);

    return Nav;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["a"] = Nav;

  /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var Slider = function () {
    function Slider() {
      var _this10 = this;

      _classCallCheck(this, Slider);

      this.prevNextLinks = document.querySelectorAll('.prev-next-link');
      this.sliderLinks = document.querySelectorAll('.slider-link');

      //For mobile
      if (this.prevNextLinks) {
        //for(var index=0;index<this.prevNextLinks.length;index++) {}
        // this.prevNextLinks.forEach(function (element) {
        //   element.addEventListener('click', _this10.displayImageForMobile.bind(element));
        // });

        for(var i=0;i<this.prevNextLinks.length;i++) {
            this.prevNextLinks[i].addEventListener('click', _this10.displayImageForMobile.bind(this.prevNextLinks[i]));
        }
      }

      //For desktop
      if (this.sliderLinks) {
          //alert(this.sliderLinks.length);
           for(var i=0;i<this.sliderLinks.length;i++) {
               this.sliderLinks[i].addEventListener('click', _this10.displayImageForDesktop.bind(this.sliderLinks[i]));
           }
         // this.sliderLinks.forEach(function (element) {
         //   element.addEventListener('click', _this10.displayImageForDesktop.bind(element));
         // });
      }
    }

    _createClass(Slider, [{
      key: 'displayImageForDesktop',
      value: function displayImageForDesktop() {
        if (!this.classList.contains('active')) {
          var activeImage = document.querySelector('.slider-link.active');
          activeImage.classList.remove('active');
          this.classList.add('active');
          if(this.dataset) {
              document.querySelector('.' + this.dataset.image).style.display = 'block';
              document.querySelector('.' + activeImage.dataset.image).style.display = 'none';
          }
        }
      }
    }, {
      key: 'displayImageForMobile',
      value: function displayImageForMobile() {
        var prevBtn = document.querySelector('.prev');
        var nextBtn = document.querySelector('.next');
        var activeImage = document.querySelector('.title-image-mobile');
        var targetImage = this.dataset.image;

        var images = [['video-room', 'Video room'], ['recording-room', 'Recording'], ['screen-share', 'Screen share'], ['chat-record', 'Chat record'], ['full-screen', 'Fullscreen'], ['invitation', 'Invitation']];

        document.querySelector('.' + activeImage.dataset.image).style.display = 'none';
        document.querySelector('.' + targetImage).style.display = 'block';

        images.forEach(function (image, key) {
          if (image[0] === targetImage) {
            activeImage.dataset.image = image[0];
            activeImage.innerHTML = image[1];

            if (images[key - 1]) {
              prevBtn.dataset.image = images[key - 1][0];
            } else {
              nextBtn.dataset.image = images[images.length - 1][0];
            }

            if (images[key + 1]) {
              nextBtn.dataset.image = images[key + 1][0];
            } else {
              nextBtn.dataset.image = images[0][0];
            }
          }
        });
      }
    }]);

    return Slider;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["a"] = Slider;

  /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony import */
  var __WEBPACK_IMPORTED_MODULE_0_tippy_js__ = __webpack_require__(5);
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_tippy_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_tippy_js__);

  var Tooltip = function Tooltip() {
    _classCallCheck(this, Tooltip);

    this.animatedPoints = document.querySelectorAll('.animated-point');

    for(var i=0;i<this.animatedPoints.length;i++) {
        var myTemplate = document.createElement('div');
        if(this.animatedPoints[i].dataset){
            myTemplate.setAttribute('id', 'tooltipTemplate');
            myTemplate.innerHTML = '<h5> ' + this.animatedPoints[i].dataset.title + '</h5><p>' + this.animatedPoints[i].dataset.content + '</p>';

            __WEBPACK_IMPORTED_MODULE_0_tippy_js___default()(this.animatedPoints[i], {
              html: myTemplate,
              theme: 'custom-tooltip',
              maxWidth: '250px',
              placement: this.animatedPoints[i].dataset.placement
            });
          }
    }
    // this.animatedPoints.forEach(function (element) {
    //   var myTemplate = document.createElement('div');
    //   myTemplate.setAttribute('id', 'tooltipTemplate');
    //   myTemplate.innerHTML = '<h5> ' + element.dataset.title + '</h5><p>' + element.dataset.content + '</p>';
    //
    //   __WEBPACK_IMPORTED_MODULE_0_tippy_js___default()(element, {
    //     html: myTemplate,
    //     theme: 'custom-tooltip',
    //     maxWidth: '250px',
    //     placement: element.dataset.placement
    //   });
    // });
  };
  /* harmony export (immutable) */

  __webpack_exports__["a"] = Tooltip;

  /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function (global) {
    /*!
    * Tippy.js v2.5.2
    * (c) 2017-2018 atomiks
    * MIT
    */
    (function (global, factory) {
      true ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.tippy = factory();
    })(this, function () {
      'use strict';

      var styles = ".tippy-touch{cursor:pointer!important}.tippy-notransition{transition:none!important}.tippy-popper{max-width:350px;-webkit-perspective:700px;perspective:700px;z-index:9999;outline:0;transition-timing-function:cubic-bezier(.165,.84,.44,1);pointer-events:none;line-height:1.4}.tippy-popper[data-html]{max-width:96%;max-width:calc(100% - 20px)}.tippy-popper[x-placement^=top] .tippy-backdrop{border-radius:40% 40% 0 0}.tippy-popper[x-placement^=top] .tippy-roundarrow{bottom:-8px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.tippy-popper[x-placement^=top] .tippy-arrow{border-top:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;bottom:-7px;margin:0 6px;-webkit-transform-origin:50% 0;transform-origin:50% 0}.tippy-popper[x-placement^=top] .tippy-backdrop{-webkit-transform-origin:0 90%;transform-origin:0 90%}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,25%);transform:scale(6) translate(-50%,25%);opacity:1}.tippy-popper[x-placement^=top] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,25%);transform:scale(1) translate(-50%,25%);opacity:0}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}.tippy-popper[x-placement^=top] [data-animation=perspective]{-webkit-transform-origin:bottom;transform-origin:bottom}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) rotateX(0);transform:translateY(-10px) rotateX(0)}.tippy-popper[x-placement^=top] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(90deg);transform:translateY(0) rotateX(90deg)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px);transform:translateY(-10px)}.tippy-popper[x-placement^=top] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(-10px) scale(1);transform:translateY(-10px) scale(1)}.tippy-popper[x-placement^=top] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=bottom] .tippy-backdrop{border-radius:0 0 30% 30%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow{top:-8px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(0);transform:rotate(0)}.tippy-popper[x-placement^=bottom] .tippy-arrow{border-bottom:7px solid #333;border-right:7px solid transparent;border-left:7px solid transparent;top:-7px;margin:0 6px;-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.tippy-popper[x-placement^=bottom] .tippy-backdrop{-webkit-transform-origin:0 -90%;transform-origin:0 -90%}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-50%,-125%);transform:scale(6) translate(-50%,-125%);opacity:1}.tippy-popper[x-placement^=bottom] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1) translate(-50%,-125%);transform:scale(1) translate(-50%,-125%);opacity:0}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}.tippy-popper[x-placement^=bottom] [data-animation=perspective]{-webkit-transform-origin:top;transform-origin:top}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) rotateX(0);transform:translateY(10px) rotateX(0)}.tippy-popper[x-placement^=bottom] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) rotateX(-90deg);transform:translateY(0) rotateX(-90deg)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateY(10px);transform:translateY(10px)}.tippy-popper[x-placement^=bottom] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateY(0);transform:translateY(0)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateY(10px) scale(1);transform:translateY(10px) scale(1)}.tippy-popper[x-placement^=bottom] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateY(0) scale(0);transform:translateY(0) scale(0)}.tippy-popper[x-placement^=left] .tippy-backdrop{border-radius:50% 0 0 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow{right:-16px;-webkit-transform-origin:33.33333333% 50%;transform-origin:33.33333333% 50%}.tippy-popper[x-placement^=left] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(90deg);transform:rotate(90deg)}.tippy-popper[x-placement^=left] .tippy-arrow{border-left:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;right:-7px;margin:3px 0;-webkit-transform-origin:0 50%;transform-origin:0 50%}.tippy-popper[x-placement^=left] .tippy-backdrop{-webkit-transform-origin:100% 0;transform-origin:100% 0}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(40%,-50%);transform:scale(6) translate(40%,-50%);opacity:1}.tippy-popper[x-placement^=left] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(40%,-50%);transform:scale(1.5) translate(40%,-50%);opacity:0}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(-20px);transform:translateX(-20px)}.tippy-popper[x-placement^=left] [data-animation=perspective]{-webkit-transform-origin:right;transform-origin:right}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) rotateY(0);transform:translateX(-10px) rotateY(0)}.tippy-popper[x-placement^=left] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(-90deg);transform:translateX(0) rotateY(-90deg)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px);transform:translateX(-10px)}.tippy-popper[x-placement^=left] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(-10px) scale(1);transform:translateX(-10px) scale(1)}.tippy-popper[x-placement^=left] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-popper[x-placement^=right] .tippy-backdrop{border-radius:0 50% 50% 0}.tippy-popper[x-placement^=right] .tippy-roundarrow{left:-16px;-webkit-transform-origin:66.66666666% 50%;transform-origin:66.66666666% 50%}.tippy-popper[x-placement^=right] .tippy-roundarrow svg{position:absolute;left:0;-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.tippy-popper[x-placement^=right] .tippy-arrow{border-right:7px solid #333;border-top:7px solid transparent;border-bottom:7px solid transparent;left:-7px;margin:3px 0;-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.tippy-popper[x-placement^=right] .tippy-backdrop{-webkit-transform-origin:-100% 0;transform-origin:-100% 0}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=visible]{-webkit-transform:scale(6) translate(-140%,-50%);transform:scale(6) translate(-140%,-50%);opacity:1}.tippy-popper[x-placement^=right] .tippy-backdrop[data-state=hidden]{-webkit-transform:scale(1.5) translate(-140%,-50%);transform:scale(1.5) translate(-140%,-50%);opacity:0}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-toward][data-state=hidden]{opacity:0;-webkit-transform:translateX(20px);transform:translateX(20px)}.tippy-popper[x-placement^=right] [data-animation=perspective]{-webkit-transform-origin:left;transform-origin:left}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) rotateY(0);transform:translateX(10px) rotateY(0)}.tippy-popper[x-placement^=right] [data-animation=perspective][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) rotateY(90deg);transform:translateX(0) rotateY(90deg)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=fade][data-state=hidden]{opacity:0;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=visible]{opacity:1;-webkit-transform:translateX(10px);transform:translateX(10px)}.tippy-popper[x-placement^=right] [data-animation=shift-away][data-state=hidden]{opacity:0;-webkit-transform:translateX(0);transform:translateX(0)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=visible]{opacity:1;-webkit-transform:translateX(10px) scale(1);transform:translateX(10px) scale(1)}.tippy-popper[x-placement^=right] [data-animation=scale][data-state=hidden]{opacity:0;-webkit-transform:translateX(0) scale(0);transform:translateX(0) scale(0)}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:.9rem;padding:.3rem .6rem;text-align:center;will-change:transform;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-color:#333}.tippy-tooltip[data-size=small]{padding:.2rem .4rem;font-size:.75rem}.tippy-tooltip[data-size=large]{padding:.4rem .8rem;font-size:1rem}.tippy-tooltip[data-animatefill]{overflow:hidden;background-color:transparent}.tippy-tooltip[data-animatefill] .tippy-content{transition:-webkit-clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98);transition:clip-path cubic-bezier(.46,.1,.52,.98),-webkit-clip-path cubic-bezier(.46,.1,.52,.98)}.tippy-tooltip[data-interactive],.tippy-tooltip[data-interactive] path{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.53,2,.36,.85)}.tippy-tooltip[data-inertia][data-state=hidden]{transition-timing-function:ease}.tippy-arrow,.tippy-roundarrow{position:absolute;width:0;height:0}.tippy-roundarrow{width:24px;height:8px;fill:#333;pointer-events:none}.tippy-backdrop{position:absolute;will-change:transform;background-color:#333;border-radius:50%;width:26%;left:50%;top:50%;z-index:-1;transition:all cubic-bezier(.46,.1,.52,.98);-webkit-backface-visibility:hidden;backface-visibility:hidden}.tippy-backdrop:after{content:\"\";float:left;padding-top:100%}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(100% 100% at 50% 50%);clip-path:ellipse(100% 100% at 50% 50%)}body:not(.tippy-touch) .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(5% 50% at 50% 50%);clip-path:ellipse(5% 50% at 50% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 0 50%);clip-path:ellipse(135% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=right] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 0 50%);clip-path:ellipse(40% 100% at 0 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=visible] .tippy-content{-webkit-clip-path:ellipse(135% 100% at 100% 50%);clip-path:ellipse(135% 100% at 100% 50%)}body:not(.tippy-touch) .tippy-popper[x-placement=left] .tippy-tooltip[data-animatefill][data-state=hidden] .tippy-content{-webkit-clip-path:ellipse(40% 100% at 100% 50%);clip-path:ellipse(40% 100% at 100% 50%)}@media (max-width:360px){.tippy-popper{max-width:96%;max-width:calc(100% - 20px)}}";

      var version = "2.5.2";

      var isBrowser = typeof window !== 'undefined';

      var isIE = isBrowser && /MSIE |Trident\//.test(navigator.userAgent);

      var browser = {};

      if (isBrowser) {
        browser.supported = 'requestAnimationFrame' in window;
        browser.supportsTouch = 'ontouchstart' in window;
        browser.usingTouch = false;
        browser.dynamicInputDetection = true;
        browser.iOS = /iPhone|iPad|iPod/.test(navigator.platform) && !window.MSStream;
        browser.onUserInputChange = function () {};
      }

      /**
       * Selector constants used for grabbing elements
       */
      var selectors = {
        POPPER: '.tippy-popper',
        TOOLTIP: '.tippy-tooltip',
        CONTENT: '.tippy-content',
        BACKDROP: '.tippy-backdrop',
        ARROW: '.tippy-arrow',
        ROUND_ARROW: '.tippy-roundarrow',
        REFERENCE: '[data-tippy]'
      };

      var defaults = {
        placement: 'top',
        livePlacement: true,
        trigger: 'mouseenter focus',
        animation: 'shift-away',
        html: false,
        animateFill: true,
        arrow: false,
        delay: 0,
        duration: [350, 300],
        interactive: false,
        interactiveBorder: 2,
        theme: 'dark',
        size: 'regular',
        distance: 10,
        offset: 0,
        hideOnClick: true,
        multiple: false,
        followCursor: false,
        inertia: false,
        updateDuration: 350,
        sticky: false,
        appendTo: function appendTo() {
          return document.body;
        },
        zIndex: 9999,
        touchHold: false,
        performance: false,
        dynamicTitle: false,
        flip: true,
        flipBehavior: 'flip',
        arrowType: 'sharp',
        arrowTransform: '',
        maxWidth: '',
        target: null,
        allowTitleHTML: true,
        popperOptions: {},
        createPopperInstanceOnInit: false,
        onShow: function onShow() {},
        onShown: function onShown() {},
        onHide: function onHide() {},
        onHidden: function onHidden() {}
      };

      /**
       * The keys of the defaults object for reducing down into a new object
       * Used in `getIndividualOptions()`
       */
      var defaultsKeys = browser.supported && Object.keys(defaults);

      /**
       * Determines if a value is an object literal
       * @param {*} value
       * @return {Boolean}
       */
      function isObjectLiteral(value) {
        return {}.toString.call(value) === '[object Object]';
      }

      /**
       * Ponyfill for Array.from
       * @param {*} value
       * @return {Array}
       */
      function toArray(value) {
        return [].slice.call(value);
      }

      /**
       * Returns an array of elements based on the selector input
       * @param {String|Element|Element[]|NodeList|Object} selector
       * @return {Element[]}
       */
      function getArrayOfElements(selector) {
        if (selector instanceof Element || isObjectLiteral(selector)) {
          return [selector];
        }

        if (selector instanceof NodeList) {
          return toArray(selector);
        }

        if (Array.isArray(selector)) {
          return selector;
        }

        try {
          return toArray(document.querySelectorAll(selector));
        } catch (_) {
          return [];
        }
      }

      /**
       * Polyfills needed props/methods for a virtual reference object
       * NOTE: in v3.0 this will be pure
       * @param {Object} reference
       */
      function polyfillVirtualReferenceProps(reference) {
        reference.refObj = true;
        reference.attributes = reference.attributes || {};
        reference.setAttribute = function (key, val) {
          reference.attributes[key] = val;
        };
        reference.getAttribute = function (key) {
          return reference.attributes[key];
        };
        reference.removeAttribute = function (key) {
          delete reference.attributes[key];
        };
        reference.hasAttribute = function (key) {
          return key in reference.attributes;
        };
        reference.addEventListener = function () {};
        reference.removeEventListener = function () {};
        reference.classList = {
          classNames: {},
          add: function add(key) {
            return reference.classList.classNames[key] = true;
          },
          remove: function remove(key) {
            delete reference.classList.classNames[key];
            return true;
          },
          contains: function contains(key) {
            return key in reference.classList.classNames;
          }
        };
      }

      /**
       * Returns the supported prefixed property - only `webkit` is needed, `moz`, `ms` and `o` are obsolete
       * @param {String} property
       * @return {String} - browser supported prefixed property
       */
      function prefix(property) {
        var prefixes = ['', 'webkit'];
        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

        for (var i = 0; i < prefixes.length; i++) {
          var _prefix = prefixes[i];
          var prefixedProp = _prefix ? _prefix + upperProp : property;
          if (typeof document.body.style[prefixedProp] !== 'undefined') {
            return prefixedProp;
          }
        }

        return null;
      }

      /**
       * Creates a div element
       * @return {Element}
       */
      function div() {
        return document.createElement('div');
      }

      /**
       * Creates a popper element then returns it
       * @param {Number} id - the popper id
       * @param {String} title - the tooltip's `title` attribute
       * @param {Object} options - individual options
       * @return {Element} - the popper element
       */
      function createPopperElement(id, title, options) {
        var popper = div();
        popper.setAttribute('class', 'tippy-popper');
        popper.setAttribute('role', 'tooltip');
        popper.setAttribute('id', 'tippy-' + id);
        popper.style.zIndex = options.zIndex;
        popper.style.maxWidth = options.maxWidth;

        var tooltip = div();
        tooltip.setAttribute('class', 'tippy-tooltip');
        tooltip.setAttribute('data-size', options.size);
        tooltip.setAttribute('data-animation', options.animation);
        tooltip.setAttribute('data-state', 'hidden');
        options.theme.split(' ').forEach(function (t) {
          tooltip.classList.add(t + '-theme');
        });

        var content = div();
        content.setAttribute('class', 'tippy-content');

        if (options.arrow) {
          var arrow = div();
          arrow.style[prefix('transform')] = options.arrowTransform;

          if (options.arrowType === 'round') {
            arrow.classList.add('tippy-roundarrow');
            arrow.innerHTML = '<svg viewBox="0 0 24 8" xmlns="http://www.w3.org/2000/svg"><path d="M3 8s2.021-.015 5.253-4.218C9.584 2.051 10.797 1.007 12 1c1.203-.007 2.416 1.035 3.761 2.782C19.012 8.005 21 8 21 8H3z"/></svg>';
          } else {
            arrow.classList.add('tippy-arrow');
          }

          tooltip.appendChild(arrow);
        }

        if (options.animateFill) {
          // Create animateFill circle element for animation
          tooltip.setAttribute('data-animatefill', '');
          var backdrop = div();
          backdrop.classList.add('tippy-backdrop');
          backdrop.setAttribute('data-state', 'hidden');
          tooltip.appendChild(backdrop);
        }

        if (options.inertia) {
          // Change transition timing function cubic bezier
          tooltip.setAttribute('data-inertia', '');
        }

        if (options.interactive) {
          tooltip.setAttribute('data-interactive', '');
        }

        var html = options.html;
        if (html) {
          var templateId = void 0;

          if (html instanceof Element) {
            content.appendChild(html);
            templateId = '#' + (html.id || 'tippy-html-template');
          } else {
            // trick linters: https://github.com/atomiks/tippyjs/issues/197
            content[true && 'innerHTML'] = document.querySelector(html)[true && 'innerHTML'];
            templateId = html;
          }

          popper.setAttribute('data-html', '');
          tooltip.setAttribute('data-template-id', templateId);

          if (options.interactive) {
            popper.setAttribute('tabindex', '-1');
          }
        } else {
          content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = title;
        }

        tooltip.appendChild(content);
        popper.appendChild(tooltip);

        return popper;
      }

      /**
       * Creates a trigger by adding the necessary event listeners to the reference element
       * @param {String} eventType - the custom event specified in the `trigger` setting
       * @param {Element} reference
       * @param {Object} handlers - the handlers for each event
       * @param {Object} options
       * @return {Array} - array of listener objects
       */
      function createTrigger(eventType, reference, handlers, options) {
        var onTrigger = handlers.onTrigger,
            onMouseLeave = handlers.onMouseLeave,
            onBlur = handlers.onBlur,
            onDelegateShow = handlers.onDelegateShow,
            onDelegateHide = handlers.onDelegateHide;

        var listeners = [];

        if (eventType === 'manual') return listeners;

        var on = function on(eventType, handler) {
          reference.addEventListener(eventType, handler);
          listeners.push({ event: eventType, handler: handler });
        };

        if (!options.target) {
          on(eventType, onTrigger);

          if (browser.supportsTouch && options.touchHold) {
            on('touchstart', onTrigger);
            on('touchend', onMouseLeave);
          }
          if (eventType === 'mouseenter') {
            on('mouseleave', onMouseLeave);
          }
          if (eventType === 'focus') {
            on(isIE ? 'focusout' : 'blur', onBlur);
          }
        } else {
          if (browser.supportsTouch && options.touchHold) {
            on('touchstart', onDelegateShow);
            on('touchend', onDelegateHide);
          }
          if (eventType === 'mouseenter') {
            on('mouseover', onDelegateShow);
            on('mouseout', onDelegateHide);
          }
          if (eventType === 'focus') {
            on('focusin', onDelegateShow);
            on('focusout', onDelegateHide);
          }
          if (eventType === 'click') {
            on('click', onDelegateShow);
          }
        }

        return listeners;
      }

      var classCallCheck = function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var createClass = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      /**
       * Returns an object of settings to override global settings
       * @param {Element} reference
       * @param {Object} instanceOptions
       * @return {Object} - individual options
       */
      function getIndividualOptions(reference, instanceOptions) {
        var options = defaultsKeys.reduce(function (acc, key) {
          var val = reference.getAttribute('data-tippy-' + key.toLowerCase()) || instanceOptions[key];

          // Convert strings to booleans
          if (val === 'false') val = false;
          if (val === 'true') val = true;

          // Convert number strings to true numbers
          if (isFinite(val) && !isNaN(parseFloat(val))) {
            val = parseFloat(val);
          }

          // Convert array strings to actual arrays
          if (key !== 'target' && typeof val === 'string' && val.trim().charAt(0) === '[') {
            val = JSON.parse(val);
          }

          acc[key] = val;

          return acc;
        }, {});

        return _extends({}, instanceOptions, options);
      }

      /**
       * Evaluates/modifies the options object for appropriate behavior
       * @param {Element|Object} reference
       * @param {Object} options
       * @return {Object} modified/evaluated options
       */
      function evaluateOptions(reference, options) {
        // animateFill is disabled if an arrow is true
        if (options.arrow) {
          options.animateFill = false;
        }

        if (options.appendTo && typeof options.appendTo === 'function') {
          options.appendTo = options.appendTo();
        }

        if (typeof options.html === 'function') {
          options.html = options.html(reference);
        }

        return options;
      }

      /**
       * Returns inner elements of the popper element
       * @param {Element} popper
       * @return {Object}
       */
      function getInnerElements(popper) {
        var select = function select(s) {
          return popper.querySelector(s);
        };
        return {
          tooltip: select(selectors.TOOLTIP),
          backdrop: select(selectors.BACKDROP),
          content: select(selectors.CONTENT),
          arrow: select(selectors.ARROW) || select(selectors.ROUND_ARROW)
        };
      }

      /**
       * Removes the title from an element, setting `data-original-title`
       * appropriately
       * @param {Element} el
       */
      function removeTitle(el) {
        var title = el.getAttribute('title');
        // Only set `data-original-title` attr if there is a title
        if (title) {
          el.setAttribute('data-original-title', title);
        }
        el.removeAttribute('title');
      }

      /**!
       * @fileOverview Kickass library to create and place poppers near their reference elements.
       * @version 1.14.3
       * @license
       * Copyright (c) 2016 Federico Zivolo and contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      var isBrowser$1 = typeof window !== 'undefined' && typeof document !== 'undefined';

      var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
      var timeoutDuration = 0;
      for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
        if (isBrowser$1 && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
          timeoutDuration = 1;
          break;
        }
      }

      function microtaskDebounce(fn) {
        var called = false;
        return function () {
          if (called) {
            return;
          }
          called = true;
          window.Promise.resolve().then(function () {
            called = false;
            fn();
          });
        };
      }

      function taskDebounce(fn) {
        var scheduled = false;
        return function () {
          if (!scheduled) {
            scheduled = true;
            setTimeout(function () {
              scheduled = false;
              fn();
            }, timeoutDuration);
          }
        };
      }

      var supportsMicroTasks = isBrowser$1 && window.Promise;

      /**
      * Create a debounced version of a method, that's asynchronously deferred
      * but called in the minimum time possible.
      *
      * @method
      * @memberof Popper.Utils
      * @argument {Function} fn
      * @returns {Function}
      */
      var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

      /**
       * Check if the given variable is a function
       * @method
       * @memberof Popper.Utils
       * @argument {Any} functionToCheck - variable to check
       * @returns {Boolean} answer to: is a function?
       */
      function isFunction(functionToCheck) {
        var getType = {};
        return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
      }

      /**
       * Get CSS computed property of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Eement} element
       * @argument {String} property
       */
      function getStyleComputedProperty(element, property) {
        if (element.nodeType !== 1) {
          return [];
        }
        // NOTE: 1 DOM access here
        var css = getComputedStyle(element, null);
        return property ? css[property] : css;
      }

      /**
       * Returns the parentNode or the host of the element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} parent
       */
      function getParentNode(element) {
        if (element.nodeName === 'HTML') {
          return element;
        }
        return element.parentNode || element.host;
      }

      /**
       * Returns the scrolling parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} scroll parent
       */
      function getScrollParent(element) {
        // Return body, `getScroll` will take care to get the correct `scrollTop` from it
        if (!element) {
          return document.body;
        }

        switch (element.nodeName) {
          case 'HTML':
          case 'BODY':
            return element.ownerDocument.body;
          case '#document':
            return element.body;
        }

        // Firefox want us to check `-x` and `-y` variations as well

        var _getStyleComputedProp = getStyleComputedProperty(element),
            overflow = _getStyleComputedProp.overflow,
            overflowX = _getStyleComputedProp.overflowX,
            overflowY = _getStyleComputedProp.overflowY;

        if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
          return element;
        }

        return getScrollParent(getParentNode(element));
      }

      var isIE11 = isBrowser$1 && !!(window.MSInputMethodContext && document.documentMode);
      var isIE10 = isBrowser$1 && /MSIE 10/.test(navigator.userAgent);

      /**
       * Determines if the browser is Internet Explorer
       * @method
       * @memberof Popper.Utils
       * @param {Number} version to check
       * @returns {Boolean} isIE
       */
      function isIE$1(version) {
        if (version === 11) {
          return isIE11;
        }
        if (version === 10) {
          return isIE10;
        }
        return isIE11 || isIE10;
      }

      /**
       * Returns the offset parent of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} offset parent
       */
      function getOffsetParent(element) {
        if (!element) {
          return document.documentElement;
        }

        var noOffsetParent = isIE$1(10) ? document.body : null;

        // NOTE: 1 DOM access here
        var offsetParent = element.offsetParent;
        // Skip hidden elements which don't have an offsetParent
        while (offsetParent === noOffsetParent && element.nextElementSibling) {
          offsetParent = (element = element.nextElementSibling).offsetParent;
        }

        var nodeName = offsetParent && offsetParent.nodeName;

        if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
          return element ? element.ownerDocument.documentElement : document.documentElement;
        }

        // .offsetParent will return the closest TD or TABLE in case
        // no offsetParent is present, I hate this job...
        if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
          return getOffsetParent(offsetParent);
        }

        return offsetParent;
      }

      function isOffsetContainer(element) {
        var nodeName = element.nodeName;

        if (nodeName === 'BODY') {
          return false;
        }
        return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
      }

      /**
       * Finds the root node (document, shadowDOM root) of the given element
       * @method
       * @memberof Popper.Utils
       * @argument {Element} node
       * @returns {Element} root node
       */
      function getRoot(node) {
        if (node.parentNode !== null) {
          return getRoot(node.parentNode);
        }

        return node;
      }

      /**
       * Finds the offset parent common to the two provided nodes
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element1
       * @argument {Element} element2
       * @returns {Element} common offset parent
       */
      function findCommonOffsetParent(element1, element2) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
          return document.documentElement;
        }

        // Here we make sure to give as "start" the element that comes first in the DOM
        var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
        var start = order ? element1 : element2;
        var end = order ? element2 : element1;

        // Get common ancestor container
        var range = document.createRange();
        range.setStart(start, 0);
        range.setEnd(end, 0);
        var commonAncestorContainer = range.commonAncestorContainer;

        // Both nodes are inside #document

        if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
          if (isOffsetContainer(commonAncestorContainer)) {
            return commonAncestorContainer;
          }

          return getOffsetParent(commonAncestorContainer);
        }

        // one of the nodes is inside shadowDOM, find which one
        var element1root = getRoot(element1);
        if (element1root.host) {
          return findCommonOffsetParent(element1root.host, element2);
        } else {
          return findCommonOffsetParent(element1, getRoot(element2).host);
        }
      }

      /**
       * Gets the scroll value of the given element in the given side (top and left)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {String} side `top` or `left`
       * @returns {number} amount of scrolled pixels
       */
      function getScroll(element) {
        var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

        var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
        var nodeName = element.nodeName;

        if (nodeName === 'BODY' || nodeName === 'HTML') {
          var html = element.ownerDocument.documentElement;
          var scrollingElement = element.ownerDocument.scrollingElement || html;
          return scrollingElement[upperSide];
        }

        return element[upperSide];
      }

      /*
       * Sum or subtract the element scroll values (left and top) from a given rect object
       * @method
       * @memberof Popper.Utils
       * @param {Object} rect - Rect object you want to change
       * @param {HTMLElement} element - The element from the function reads the scroll values
       * @param {Boolean} subtract - set to true if you want to subtract the scroll values
       * @return {Object} rect - The modifier rect object
       */
      function includeScroll(rect, element) {
        var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var scrollTop = getScroll(element, 'top');
        var scrollLeft = getScroll(element, 'left');
        var modifier = subtract ? -1 : 1;
        rect.top += scrollTop * modifier;
        rect.bottom += scrollTop * modifier;
        rect.left += scrollLeft * modifier;
        rect.right += scrollLeft * modifier;
        return rect;
      }

      /*
       * Helper to detect borders of a given element
       * @method
       * @memberof Popper.Utils
       * @param {CSSStyleDeclaration} styles
       * Result of `getStyleComputedProperty` on the given element
       * @param {String} axis - `x` or `y`
       * @return {number} borders - The borders size of the given axis
       */

      function getBordersSize(styles, axis) {
        var sideA = axis === 'x' ? 'Left' : 'Top';
        var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

        return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
      }

      function getSize(axis, body, html, computedStyle) {
        return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE$1(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
      }

      function getWindowSizes() {
        var body = document.body;
        var html = document.documentElement;
        var computedStyle = isIE$1(10) && getComputedStyle(html);

        return {
          height: getSize('Height', body, html, computedStyle),
          width: getSize('Width', body, html, computedStyle)
        };
      }

      var classCallCheck$1 = function classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      };

      var createClass$1 = function () {
        function defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }

        return function (Constructor, protoProps, staticProps) {
          if (protoProps) defineProperties(Constructor.prototype, protoProps);
          if (staticProps) defineProperties(Constructor, staticProps);
          return Constructor;
        };
      }();

      var defineProperty$1 = function defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
        } else {
          obj[key] = value;
        }

        return obj;
      };

      var _extends$1 = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      /**
       * Given element offsets, generate an output similar to getBoundingClientRect
       * @method
       * @memberof Popper.Utils
       * @argument {Object} offsets
       * @returns {Object} ClientRect like output
       */
      function getClientRect(offsets) {
        return _extends$1({}, offsets, {
          right: offsets.left + offsets.width,
          bottom: offsets.top + offsets.height
        });
      }

      /**
       * Get bounding client rect of given element
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} element
       * @return {Object} client rect
       */
      function getBoundingClientRect(element) {
        var rect = {};

        // IE10 10 FIX: Please, don't ask, the element isn't
        // considered in DOM in some circumstances...
        // This isn't reproducible in IE10 compatibility mode of IE11
        try {
          if (isIE$1(10)) {
            rect = element.getBoundingClientRect();
            var scrollTop = getScroll(element, 'top');
            var scrollLeft = getScroll(element, 'left');
            rect.top += scrollTop;
            rect.left += scrollLeft;
            rect.bottom += scrollTop;
            rect.right += scrollLeft;
          } else {
            rect = element.getBoundingClientRect();
          }
        } catch (e) {}

        var result = {
          left: rect.left,
          top: rect.top,
          width: rect.right - rect.left,
          height: rect.bottom - rect.top
        };

        // subtract scrollbar size from sizes
        var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
        var width = sizes.width || element.clientWidth || result.right - result.left;
        var height = sizes.height || element.clientHeight || result.bottom - result.top;

        var horizScrollbar = element.offsetWidth - width;
        var vertScrollbar = element.offsetHeight - height;

        // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
        // we make this check conditional for performance reasons
        if (horizScrollbar || vertScrollbar) {
          var styles = getStyleComputedProperty(element);
          horizScrollbar -= getBordersSize(styles, 'x');
          vertScrollbar -= getBordersSize(styles, 'y');

          result.width -= horizScrollbar;
          result.height -= vertScrollbar;
        }

        return getClientRect(result);
      }

      function getOffsetRectRelativeToArbitraryNode(children, parent) {
        var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var isIE10 = isIE$1(10);
        var isHTML = parent.nodeName === 'HTML';
        var childrenRect = getBoundingClientRect(children);
        var parentRect = getBoundingClientRect(parent);
        var scrollParent = getScrollParent(children);

        var styles = getStyleComputedProperty(parent);
        var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
        var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

        // In cases where the parent is fixed, we must ignore negative scroll in offset calc
        if (fixedPosition && parent.nodeName === 'HTML') {
          parentRect.top = Math.max(parentRect.top, 0);
          parentRect.left = Math.max(parentRect.left, 0);
        }
        var offsets = getClientRect({
          top: childrenRect.top - parentRect.top - borderTopWidth,
          left: childrenRect.left - parentRect.left - borderLeftWidth,
          width: childrenRect.width,
          height: childrenRect.height
        });
        offsets.marginTop = 0;
        offsets.marginLeft = 0;

        // Subtract margins of documentElement in case it's being used as parent
        // we do this only on HTML because it's the only element that behaves
        // differently when margins are applied to it. The margins are included in
        // the box of the documentElement, in the other cases not.
        if (!isIE10 && isHTML) {
          var marginTop = parseFloat(styles.marginTop, 10);
          var marginLeft = parseFloat(styles.marginLeft, 10);

          offsets.top -= borderTopWidth - marginTop;
          offsets.bottom -= borderTopWidth - marginTop;
          offsets.left -= borderLeftWidth - marginLeft;
          offsets.right -= borderLeftWidth - marginLeft;

          // Attach marginTop and marginLeft because in some circumstances we may need them
          offsets.marginTop = marginTop;
          offsets.marginLeft = marginLeft;
        }

        if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
          offsets = includeScroll(offsets, parent);
        }

        return offsets;
      }

      function getViewportOffsetRectRelativeToArtbitraryNode(element) {
        var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var html = element.ownerDocument.documentElement;
        var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
        var width = Math.max(html.clientWidth, window.innerWidth || 0);
        var height = Math.max(html.clientHeight, window.innerHeight || 0);

        var scrollTop = !excludeScroll ? getScroll(html) : 0;
        var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

        var offset = {
          top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
          left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
          width: width,
          height: height
        };

        return getClientRect(offset);
      }

      /**
       * Check if the given element is fixed or is inside a fixed parent
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @argument {Element} customContainer
       * @returns {Boolean} answer to "isFixed?"
       */
      function isFixed(element) {
        var nodeName = element.nodeName;
        if (nodeName === 'BODY' || nodeName === 'HTML') {
          return false;
        }
        if (getStyleComputedProperty(element, 'position') === 'fixed') {
          return true;
        }
        return isFixed(getParentNode(element));
      }

      /**
       * Finds the first parent of an element that has a transformed property defined
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Element} first transformed parent or documentElement
       */

      function getFixedPositionOffsetParent(element) {
        // This check is needed to avoid errors in case one of the elements isn't defined for any reason
        if (!element || !element.parentElement || isIE$1()) {
          return document.documentElement;
        }
        var el = element.parentElement;
        while (el && getStyleComputedProperty(el, 'transform') === 'none') {
          el = el.parentElement;
        }
        return el || document.documentElement;
      }

      /**
       * Computed the boundaries limits and return them
       * @method
       * @memberof Popper.Utils
       * @param {HTMLElement} popper
       * @param {HTMLElement} reference
       * @param {number} padding
       * @param {HTMLElement} boundariesElement - Element used to define the boundaries
       * @param {Boolean} fixedPosition - Is in fixed position mode
       * @returns {Object} Coordinates of the boundaries
       */
      function getBoundaries(popper, reference, padding, boundariesElement) {
        var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        // NOTE: 1 DOM access here

        var boundaries = { top: 0, left: 0 };
        var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

        // Handle viewport case
        if (boundariesElement === 'viewport') {
          boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
        } else {
          // Handle other cases based on DOM element used as boundaries
          var boundariesNode = void 0;
          if (boundariesElement === 'scrollParent') {
            boundariesNode = getScrollParent(getParentNode(reference));
            if (boundariesNode.nodeName === 'BODY') {
              boundariesNode = popper.ownerDocument.documentElement;
            }
          } else if (boundariesElement === 'window') {
            boundariesNode = popper.ownerDocument.documentElement;
          } else {
            boundariesNode = boundariesElement;
          }

          var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

          // In case of HTML, we need a different computation
          if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
            var _getWindowSizes = getWindowSizes(),
                height = _getWindowSizes.height,
                width = _getWindowSizes.width;

            boundaries.top += offsets.top - offsets.marginTop;
            boundaries.bottom = height + offsets.top;
            boundaries.left += offsets.left - offsets.marginLeft;
            boundaries.right = width + offsets.left;
          } else {
            // for all the other DOM elements, this one is good
            boundaries = offsets;
          }
        }

        // Add paddings
        boundaries.left += padding;
        boundaries.top += padding;
        boundaries.right -= padding;
        boundaries.bottom -= padding;

        return boundaries;
      }

      function getArea(_ref) {
        var width = _ref.width,
            height = _ref.height;

        return width * height;
      }

      /**
       * Utility used to transform the `auto` placement to the placement with more
       * available space.
       * @method
       * @memberof Popper.Utils
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
        var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

        if (placement.indexOf('auto') === -1) {
          return placement;
        }

        var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

        var rects = {
          top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
          },
          right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
          },
          bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
          },
          left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
          }
        };

        var sortedAreas = Object.keys(rects).map(function (key) {
          return _extends$1({
            key: key
          }, rects[key], {
            area: getArea(rects[key])
          });
        }).sort(function (a, b) {
          return b.area - a.area;
        });

        var filteredAreas = sortedAreas.filter(function (_ref2) {
          var width = _ref2.width,
              height = _ref2.height;
          return width >= popper.clientWidth && height >= popper.clientHeight;
        });

        var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

        var variation = placement.split('-')[1];

        return computedPlacement + (variation ? '-' + variation : '');
      }

      /**
       * Get offsets to the reference element
       * @method
       * @memberof Popper.Utils
       * @param {Object} state
       * @param {Element} popper - the popper element
       * @param {Element} reference - the reference element (the popper will be relative to this)
       * @param {Element} fixedPosition - is in fixed position mode
       * @returns {Object} An object containing the offsets which will be applied to the popper
       */
      function getReferenceOffsets(state, popper, reference) {
        var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

        var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
        return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
      }

      /**
       * Get the outer sizes of the given element (offset size + margins)
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element
       * @returns {Object} object containing width and height properties
       */
      function getOuterSizes(element) {
        var styles = getComputedStyle(element);
        var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
        var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
        var result = {
          width: element.offsetWidth + y,
          height: element.offsetHeight + x
        };
        return result;
      }

      /**
       * Get the opposite placement of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement
       * @returns {String} flipped placement
       */
      function getOppositePlacement(placement) {
        var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
        return placement.replace(/left|right|bottom|top/g, function (matched) {
          return hash[matched];
        });
      }

      /**
       * Get offsets to the popper
       * @method
       * @memberof Popper.Utils
       * @param {Object} position - CSS position the Popper will get applied
       * @param {HTMLElement} popper - the popper element
       * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
       * @param {String} placement - one of the valid placement options
       * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
       */
      function getPopperOffsets(popper, referenceOffsets, placement) {
        placement = placement.split('-')[0];

        // Get popper node sizes
        var popperRect = getOuterSizes(popper);

        // Add position, width and height to our offsets object
        var popperOffsets = {
          width: popperRect.width,
          height: popperRect.height
        };

        // depending by the popper placement we have to compute its offsets slightly differently
        var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
        var mainSide = isHoriz ? 'top' : 'left';
        var secondarySide = isHoriz ? 'left' : 'top';
        var measurement = isHoriz ? 'height' : 'width';
        var secondaryMeasurement = !isHoriz ? 'height' : 'width';

        popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
        if (placement === secondarySide) {
          popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
        } else {
          popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
        }

        return popperOffsets;
      }

      /**
       * Mimics the `find` method of Array
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */
      function find(arr, check) {
        // use native find if supported
        if (Array.prototype.find) {
          return arr.find(check);
        }

        // use `filter` to obtain the same behavior of `find`
        return arr.filter(check)[0];
      }

      /**
       * Return the index of the matching object
       * @method
       * @memberof Popper.Utils
       * @argument {Array} arr
       * @argument prop
       * @argument value
       * @returns index or -1
       */
      function findIndex(arr, prop, value) {
        // use native findIndex if supported
        if (Array.prototype.findIndex) {
          return arr.findIndex(function (cur) {
            return cur[prop] === value;
          });
        }

        // use `find` + `indexOf` if `findIndex` isn't supported
        var match = find(arr, function (obj) {
          return obj[prop] === value;
        });
        return arr.indexOf(match);
      }

      /**
       * Loop trough the list of modifiers and run them in order,
       * each of them will then edit the data object.
       * @method
       * @memberof Popper.Utils
       * @param {dataObject} data
       * @param {Array} modifiers
       * @param {String} ends - Optional modifier name used as stopper
       * @returns {dataObject}
       */
      function runModifiers(modifiers, data, ends) {
        var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

        modifiersToRun.forEach(function (modifier) {
          if (modifier['function']) {
            // eslint-disable-line dot-notation
            console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
          }
          var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
          if (modifier.enabled && isFunction(fn)) {
            // Add properties to offsets to make them a complete clientRect object
            // we do this before each modifier to make sure the previous one doesn't
            // mess with these values
            data.offsets.popper = getClientRect(data.offsets.popper);
            data.offsets.reference = getClientRect(data.offsets.reference);

            data = fn(data, modifier);
          }
        });

        return data;
      }

      /**
       * Updates the position of the popper, computing the new offsets and applying
       * the new style.<br />
       * Prefer `scheduleUpdate` over `update` because of performance reasons.
       * @method
       * @memberof Popper
       */
      function update() {
        // if popper is destroyed, don't perform any further update
        if (this.state.isDestroyed) {
          return;
        }

        var data = {
          instance: this,
          styles: {},
          arrowStyles: {},
          attributes: {},
          flipped: false,
          offsets: {}
        };

        // compute reference element offsets
        data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

        // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value
        data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

        // store the computed placement inside `originalPlacement`
        data.originalPlacement = data.placement;

        data.positionFixed = this.options.positionFixed;

        // compute the popper offsets
        data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

        data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

        // run the modifiers
        data = runModifiers(this.modifiers, data);

        // the first `update` will call `onCreate` callback
        // the other ones will call `onUpdate` callback
        if (!this.state.isCreated) {
          this.state.isCreated = true;
          this.options.onCreate(data);
        } else {
          this.options.onUpdate(data);
        }
      }

      /**
       * Helper used to know if the given modifier is enabled.
       * @method
       * @memberof Popper.Utils
       * @returns {Boolean}
       */
      function isModifierEnabled(modifiers, modifierName) {
        return modifiers.some(function (_ref) {
          var name = _ref.name,
              enabled = _ref.enabled;
          return enabled && name === modifierName;
        });
      }

      /**
       * Get the prefixed supported property name
       * @method
       * @memberof Popper.Utils
       * @argument {String} property (camelCase)
       * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
       */
      function getSupportedPropertyName(property) {
        var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
        var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

        for (var i = 0; i < prefixes.length; i++) {
          var prefix = prefixes[i];
          var toCheck = prefix ? '' + prefix + upperProp : property;
          if (typeof document.body.style[toCheck] !== 'undefined') {
            return toCheck;
          }
        }
        return null;
      }

      /**
       * Destroy the popper
       * @method
       * @memberof Popper
       */
      function destroy() {
        this.state.isDestroyed = true;

        // touch DOM only if `applyStyle` modifier is enabled
        if (isModifierEnabled(this.modifiers, 'applyStyle')) {
          this.popper.removeAttribute('x-placement');
          this.popper.style.position = '';
          this.popper.style.top = '';
          this.popper.style.left = '';
          this.popper.style.right = '';
          this.popper.style.bottom = '';
          this.popper.style.willChange = '';
          this.popper.style[getSupportedPropertyName('transform')] = '';
        }

        this.disableEventListeners();

        // remove the popper if user explicity asked for the deletion on destroy
        // do not use `remove` because IE11 doesn't support it
        if (this.options.removeOnDestroy) {
          this.popper.parentNode.removeChild(this.popper);
        }
        return this;
      }

      /**
       * Get the window associated with the element
       * @argument {Element} element
       * @returns {Window}
       */
      function getWindow(element) {
        var ownerDocument = element.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView : window;
      }

      function attachToScrollParents(scrollParent, event, callback, scrollParents) {
        var isBody = scrollParent.nodeName === 'BODY';
        var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
        target.addEventListener(event, callback, { passive: true });

        if (!isBody) {
          attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
        }
        scrollParents.push(target);
      }

      /**
       * Setup needed event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */
      function setupEventListeners(reference, options, state, updateBound) {
        // Resize event listener on window
        state.updateBound = updateBound;
        getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

        // Scroll event listener on scroll parents
        var scrollElement = getScrollParent(reference);
        attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
        state.scrollElement = scrollElement;
        state.eventsEnabled = true;

        return state;
      }

      /**
       * It will add resize/scroll events and start recalculating
       * position of the popper element when they are triggered.
       * @method
       * @memberof Popper
       */
      function enableEventListeners() {
        if (!this.state.eventsEnabled) {
          this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
        }
      }

      /**
       * Remove event listeners used to update the popper position
       * @method
       * @memberof Popper.Utils
       * @private
       */
      function removeEventListeners(reference, state) {
        // Remove resize event listener on window
        getWindow(reference).removeEventListener('resize', state.updateBound);

        // Remove scroll event listener on scroll parents
        state.scrollParents.forEach(function (target) {
          target.removeEventListener('scroll', state.updateBound);
        });

        // Reset state
        state.updateBound = null;
        state.scrollParents = [];
        state.scrollElement = null;
        state.eventsEnabled = false;
        return state;
      }

      /**
       * It will remove resize/scroll events and won't recalculate popper position
       * when they are triggered. It also won't trigger onUpdate callback anymore,
       * unless you call `update` method manually.
       * @method
       * @memberof Popper
       */
      function disableEventListeners() {
        if (this.state.eventsEnabled) {
          cancelAnimationFrame(this.scheduleUpdate);
          this.state = removeEventListeners(this.reference, this.state);
        }
      }

      /**
       * Tells if a given input is a number
       * @method
       * @memberof Popper.Utils
       * @param {*} input to check
       * @return {Boolean}
       */
      function isNumeric(n) {
        return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
      }

      /**
       * Set the style to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the style to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */
      function setStyles(element, styles) {
        Object.keys(styles).forEach(function (prop) {
          var unit = '';
          // add unit if the value is numeric and is one of the following
          if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
            unit = 'px';
          }
          element.style[prop] = styles[prop] + unit;
        });
      }

      /**
       * Set the attributes to the given popper
       * @method
       * @memberof Popper.Utils
       * @argument {Element} element - Element to apply the attributes to
       * @argument {Object} styles
       * Object with a list of properties and values which will be applied to the element
       */
      function setAttributes(element, attributes) {
        Object.keys(attributes).forEach(function (prop) {
          var value = attributes[prop];
          if (value !== false) {
            element.setAttribute(prop, attributes[prop]);
          } else {
            element.removeAttribute(prop);
          }
        });
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} data.styles - List of style properties - values to apply to popper element
       * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The same data object
       */
      function applyStyle(data) {
        // any property present in `data.styles` will be applied to the popper,
        // in this way we can make the 3rd party modifiers add custom styles to it
        // Be aware, modifiers could override the properties defined in the previous
        // lines of this modifier!
        setStyles(data.instance.popper, data.styles);

        // any property present in `data.attributes` will be applied to the popper,
        // they will be set as HTML attributes of the element
        setAttributes(data.instance.popper, data.attributes);

        // if arrowElement is defined and arrowStyles has some properties
        if (data.arrowElement && Object.keys(data.arrowStyles).length) {
          setStyles(data.arrowElement, data.arrowStyles);
        }

        return data;
      }

      /**
       * Set the x-placement attribute before everything else because it could be used
       * to add margins to the popper margins needs to be calculated to get the
       * correct popper offsets.
       * @method
       * @memberof Popper.modifiers
       * @param {HTMLElement} reference - The reference element used to position the popper
       * @param {HTMLElement} popper - The HTML element used as popper
       * @param {Object} options - Popper.js options
       */
      function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
        // compute reference element offsets
        var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

        // compute auto placement, store placement inside the data object,
        // modifiers will be able to edit `placement` if needed
        // and refer to originalPlacement to know the original value
        var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

        popper.setAttribute('x-placement', placement);

        // Apply `position` to popper before anything else because
        // without the position applied we can't guarantee correct computations
        setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

        return options;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function computeStyle(data, options) {
        var x = options.x,
            y = options.y;
        var popper = data.offsets.popper;

        // Remove this legacy support in Popper.js v2

        var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
          return modifier.name === 'applyStyle';
        }).gpuAcceleration;
        if (legacyGpuAccelerationOption !== undefined) {
          console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
        }
        var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

        var offsetParent = getOffsetParent(data.instance.popper);
        var offsetParentRect = getBoundingClientRect(offsetParent);

        // Styles
        var styles = {
          position: popper.position
        };

        // Avoid blurry text by using full pixel integers.
        // For pixel-perfect positioning, top/bottom prefers rounded
        // values, while left/right prefers floored values.
        var offsets = {
          left: Math.floor(popper.left),
          top: Math.round(popper.top),
          bottom: Math.round(popper.bottom),
          right: Math.floor(popper.right)
        };

        var sideA = x === 'bottom' ? 'top' : 'bottom';
        var sideB = y === 'right' ? 'left' : 'right';

        // if gpuAcceleration is set to `true` and transform is supported,
        //  we use `translate3d` to apply the position to the popper we
        // automatically use the supported prefixed version if needed
        var prefixedProperty = getSupportedPropertyName('transform');

        // now, let's make a step back and look at this code closely (wtf?)
        // If the content of the popper grows once it's been positioned, it
        // may happen that the popper gets misplaced because of the new content
        // overflowing its reference element
        // To avoid this problem, we provide two options (x and y), which allow
        // the consumer to define the offset origin.
        // If we position a popper on top of a reference element, we can set
        // `x` to `top` to make the popper grow towards its top instead of
        // its bottom.
        var left = void 0,
            top = void 0;
        if (sideA === 'bottom') {
          top = -offsetParentRect.height + offsets.bottom;
        } else {
          top = offsets.top;
        }
        if (sideB === 'right') {
          left = -offsetParentRect.width + offsets.right;
        } else {
          left = offsets.left;
        }
        if (gpuAcceleration && prefixedProperty) {
          styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
          styles[sideA] = 0;
          styles[sideB] = 0;
          styles.willChange = 'transform';
        } else {
          // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
          var invertTop = sideA === 'bottom' ? -1 : 1;
          var invertLeft = sideB === 'right' ? -1 : 1;
          styles[sideA] = top * invertTop;
          styles[sideB] = left * invertLeft;
          styles.willChange = sideA + ', ' + sideB;
        }

        // Attributes
        var attributes = {
          'x-placement': data.placement
        };

        // Update `data` attributes, styles and arrowStyles
        data.attributes = _extends$1({}, attributes, data.attributes);
        data.styles = _extends$1({}, styles, data.styles);
        data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

        return data;
      }

      /**
       * Helper used to know if the given modifier depends from another one.<br />
       * It checks if the needed modifier is listed and enabled.
       * @method
       * @memberof Popper.Utils
       * @param {Array} modifiers - list of modifiers
       * @param {String} requestingName - name of requesting modifier
       * @param {String} requestedName - name of requested modifier
       * @returns {Boolean}
       */
      function isModifierRequired(modifiers, requestingName, requestedName) {
        var requesting = find(modifiers, function (_ref) {
          var name = _ref.name;
          return name === requestingName;
        });

        var isRequired = !!requesting && modifiers.some(function (modifier) {
          return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
        });

        if (!isRequired) {
          var _requesting = '`' + requestingName + '`';
          var requested = '`' + requestedName + '`';
          console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
        }
        return isRequired;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function arrow(data, options) {
        var _data$offsets$arrow;

        // arrow depends on keepTogether in order to work
        if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
          return data;
        }

        var arrowElement = options.element;

        // if arrowElement is a string, suppose it's a CSS selector
        if (typeof arrowElement === 'string') {
          arrowElement = data.instance.popper.querySelector(arrowElement);

          // if arrowElement is not found, don't run the modifier
          if (!arrowElement) {
            return data;
          }
        } else {
          // if the arrowElement isn't a query selector we must check that the
          // provided DOM node is child of its popper node
          if (!data.instance.popper.contains(arrowElement)) {
            console.warn('WARNING: `arrow.element` must be child of its popper element!');
            return data;
          }
        }

        var placement = data.placement.split('-')[0];
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var isVertical = ['left', 'right'].indexOf(placement) !== -1;

        var len = isVertical ? 'height' : 'width';
        var sideCapitalized = isVertical ? 'Top' : 'Left';
        var side = sideCapitalized.toLowerCase();
        var altSide = isVertical ? 'left' : 'top';
        var opSide = isVertical ? 'bottom' : 'right';
        var arrowElementSize = getOuterSizes(arrowElement)[len];

        //
        // extends keepTogether behavior making sure the popper and its
        // reference have enough pixels in conjuction
        //

        // top/left side
        if (reference[opSide] - arrowElementSize < popper[side]) {
          data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
        }
        // bottom/right side
        if (reference[side] + arrowElementSize > popper[opSide]) {
          data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
        }
        data.offsets.popper = getClientRect(data.offsets.popper);

        // compute center of the popper
        var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

        // Compute the sideValue using the updated popper offsets
        // take popper margin in account because we don't have this info available
        var css = getStyleComputedProperty(data.instance.popper);
        var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
        var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
        var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

        // prevent arrowElement from being placed not contiguously to its popper
        sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

        data.arrowElement = arrowElement;
        data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty$1(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty$1(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

        return data;
      }

      /**
       * Get the opposite placement variation of the given one
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement variation
       * @returns {String} flipped placement variation
       */
      function getOppositeVariation(variation) {
        if (variation === 'end') {
          return 'start';
        } else if (variation === 'start') {
          return 'end';
        }
        return variation;
      }

      /**
       * List of accepted placements to use as values of the `placement` option.<br />
       * Valid placements are:
       * - `auto`
       * - `top`
       * - `right`
       * - `bottom`
       * - `left`
       *
       * Each placement can have a variation from this list:
       * - `-start`
       * - `-end`
       *
       * Variations are interpreted easily if you think of them as the left to right
       * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
       * is right.<br />
       * Vertically (`left` and `right`), `start` is top and `end` is bottom.
       *
       * Some valid examples are:
       * - `top-end` (on top of reference, right aligned)
       * - `right-start` (on right of reference, top aligned)
       * - `bottom` (on bottom, centered)
       * - `auto-right` (on the side with more space available, alignment depends by placement)
       *
       * @static
       * @type {Array}
       * @enum {String}
       * @readonly
       * @method placements
       * @memberof Popper
       */
      var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

      // Get rid of `auto` `auto-start` and `auto-end`
      var validPlacements = placements.slice(3);

      /**
       * Given an initial placement, returns all the subsequent placements
       * clockwise (or counter-clockwise).
       *
       * @method
       * @memberof Popper.Utils
       * @argument {String} placement - A valid placement (it accepts variations)
       * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
       * @returns {Array} placements including their variations
       */
      function clockwise(placement) {
        var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var index = validPlacements.indexOf(placement);
        var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
        return counter ? arr.reverse() : arr;
      }

      var BEHAVIORS = {
        FLIP: 'flip',
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise'
      };

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function flip(data, options) {
        // if `inner` modifier is enabled, we can't use the `flip` modifier
        if (isModifierEnabled(data.instance.modifiers, 'inner')) {
          return data;
        }

        if (data.flipped && data.placement === data.originalPlacement) {
          // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
          return data;
        }

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

        var placement = data.placement.split('-')[0];
        var placementOpposite = getOppositePlacement(placement);
        var variation = data.placement.split('-')[1] || '';

        var flipOrder = [];

        switch (options.behavior) {
          case BEHAVIORS.FLIP:
            flipOrder = [placement, placementOpposite];
            break;
          case BEHAVIORS.CLOCKWISE:
            flipOrder = clockwise(placement);
            break;
          case BEHAVIORS.COUNTERCLOCKWISE:
            flipOrder = clockwise(placement, true);
            break;
          default:
            flipOrder = options.behavior;
        }

        flipOrder.forEach(function (step, index) {
          if (placement !== step || flipOrder.length === index + 1) {
            return data;
          }

          placement = data.placement.split('-')[0];
          placementOpposite = getOppositePlacement(placement);

          var popperOffsets = data.offsets.popper;
          var refOffsets = data.offsets.reference;

          // using floor because the reference offsets may contain decimals we are not going to consider here
          var floor = Math.floor;
          var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

          var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
          var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
          var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
          var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

          var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

          // flip the variation if required
          var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
          var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

          if (overlapsRef || overflowsBoundaries || flippedVariation) {
            // this boolean to detect any flip loop
            data.flipped = true;

            if (overlapsRef || overflowsBoundaries) {
              placement = flipOrder[index + 1];
            }

            if (flippedVariation) {
              variation = getOppositeVariation(variation);
            }

            data.placement = placement + (variation ? '-' + variation : '');

            // this object contains `position`, we want to preserve it along with
            // any additional property we may add in the future
            data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

            data = runModifiers(data.instance.modifiers, data, 'flip');
          }
        });
        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function keepTogether(data) {
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var placement = data.placement.split('-')[0];
        var floor = Math.floor;
        var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
        var side = isVertical ? 'right' : 'bottom';
        var opSide = isVertical ? 'left' : 'top';
        var measurement = isVertical ? 'width' : 'height';

        if (popper[side] < floor(reference[opSide])) {
          data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
        }
        if (popper[opSide] > floor(reference[side])) {
          data.offsets.popper[opSide] = floor(reference[side]);
        }

        return data;
      }

      /**
       * Converts a string containing value + unit into a px value number
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} str - Value + unit string
       * @argument {String} measurement - `height` or `width`
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @returns {Number|String}
       * Value in pixels, or original string if no values were extracted
       */
      function toValue(str, measurement, popperOffsets, referenceOffsets) {
        // separate value from unit
        var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
        var value = +split[1];
        var unit = split[2];

        // If it's not a number it's an operator, I guess
        if (!value) {
          return str;
        }

        if (unit.indexOf('%') === 0) {
          var element = void 0;
          switch (unit) {
            case '%p':
              element = popperOffsets;
              break;
            case '%':
            case '%r':
            default:
              element = referenceOffsets;
          }

          var rect = getClientRect(element);
          return rect[measurement] / 100 * value;
        } else if (unit === 'vh' || unit === 'vw') {
          // if is a vh or vw, we calculate the size based on the viewport
          var size = void 0;
          if (unit === 'vh') {
            size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
          } else {
            size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
          }
          return size / 100 * value;
        } else {
          // if is an explicit pixel unit, we get rid of the unit and keep the value
          // if is an implicit unit, it's px, and we return just the value
          return value;
        }
      }

      /**
       * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
       * @function
       * @memberof {modifiers~offset}
       * @private
       * @argument {String} offset
       * @argument {Object} popperOffsets
       * @argument {Object} referenceOffsets
       * @argument {String} basePlacement
       * @returns {Array} a two cells array with x and y offsets in numbers
       */
      function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
        var offsets = [0, 0];

        // Use height if placement is left or right and index is 0 otherwise use width
        // in this way the first offset will use an axis and the second one
        // will use the other one
        var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

        // Split the offset string to obtain a list of values and operands
        // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
        var fragments = offset.split(/(\+|\-)/).map(function (frag) {
          return frag.trim();
        });

        // Detect if the offset string contains a pair of values or a single one
        // they could be separated by comma or space
        var divider = fragments.indexOf(find(fragments, function (frag) {
          return frag.search(/,|\s/) !== -1;
        }));

        if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
          console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
        }

        // If divider is found, we divide the list of values and operands to divide
        // them by ofset X and Y.
        var splitRegex = /\s*,\s*|\s+/;
        var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

        // Convert the values with units to absolute pixels to allow our computations
        ops = ops.map(function (op, index) {
          // Most of the units rely on the orientation of the popper
          var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
          var mergeWithPrevious = false;
          return op
          // This aggregates any `+` or `-` sign that aren't considered operators
          // e.g.: 10 + +5 => [10, +, +5]
          .reduce(function (a, b) {
            if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
              a[a.length - 1] = b;
              mergeWithPrevious = true;
              return a;
            } else if (mergeWithPrevious) {
              a[a.length - 1] += b;
              mergeWithPrevious = false;
              return a;
            } else {
              return a.concat(b);
            }
          }, [])
          // Here we convert the string values into number values (in px)
          .map(function (str) {
            return toValue(str, measurement, popperOffsets, referenceOffsets);
          });
        });

        // Loop trough the offsets arrays and execute the operations
        ops.forEach(function (op, index) {
          op.forEach(function (frag, index2) {
            if (isNumeric(frag)) {
              offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
            }
          });
        });
        return offsets;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @argument {Number|String} options.offset=0
       * The offset value as described in the modifier description
       * @returns {Object} The data object, properly modified
       */
      function offset(data, _ref) {
        var offset = _ref.offset;
        var placement = data.placement,
            _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var basePlacement = placement.split('-')[0];

        var offsets = void 0;
        if (isNumeric(+offset)) {
          offsets = [+offset, 0];
        } else {
          offsets = parseOffset(offset, popper, reference, basePlacement);
        }

        if (basePlacement === 'left') {
          popper.top += offsets[0];
          popper.left -= offsets[1];
        } else if (basePlacement === 'right') {
          popper.top += offsets[0];
          popper.left += offsets[1];
        } else if (basePlacement === 'top') {
          popper.left += offsets[0];
          popper.top -= offsets[1];
        } else if (basePlacement === 'bottom') {
          popper.left += offsets[0];
          popper.top += offsets[1];
        }

        data.popper = popper;
        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function preventOverflow(data, options) {
        var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

        // If offsetParent is the reference element, we really want to
        // go one step up and use the next offsetParent as reference to
        // avoid to make this modifier completely useless and look like broken
        if (data.instance.reference === boundariesElement) {
          boundariesElement = getOffsetParent(boundariesElement);
        }

        // NOTE: DOM access here
        // resets the popper's position so that the document size can be calculated excluding
        // the size of the popper element itself
        var transformProp = getSupportedPropertyName('transform');
        var popperStyles = data.instance.popper.style; // assignment to help minification
        var top = popperStyles.top,
            left = popperStyles.left,
            transform = popperStyles[transformProp];

        popperStyles.top = '';
        popperStyles.left = '';
        popperStyles[transformProp] = '';

        var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

        // NOTE: DOM access here
        // restores the original style properties after the offsets have been computed
        popperStyles.top = top;
        popperStyles.left = left;
        popperStyles[transformProp] = transform;

        options.boundaries = boundaries;

        var order = options.priority;
        var popper = data.offsets.popper;

        var check = {
          primary: function primary(placement) {
            var value = popper[placement];
            if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
              value = Math.max(popper[placement], boundaries[placement]);
            }
            return defineProperty$1({}, placement, value);
          },
          secondary: function secondary(placement) {
            var mainSide = placement === 'right' ? 'left' : 'top';
            var value = popper[mainSide];
            if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
              value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
            }
            return defineProperty$1({}, mainSide, value);
          }
        };

        order.forEach(function (placement) {
          var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
          popper = _extends$1({}, popper, check[side](placement));
        });

        data.offsets.popper = popper;

        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function shift(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var shiftvariation = placement.split('-')[1];

        // if shift shiftvariation is specified, run the modifier
        if (shiftvariation) {
          var _data$offsets = data.offsets,
              reference = _data$offsets.reference,
              popper = _data$offsets.popper;

          var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
          var side = isVertical ? 'left' : 'top';
          var measurement = isVertical ? 'width' : 'height';

          var shiftOffsets = {
            start: defineProperty$1({}, side, reference[side]),
            end: defineProperty$1({}, side, reference[side] + reference[measurement] - popper[measurement])
          };

          data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
        }

        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by update method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function hide(data) {
        if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
          return data;
        }

        var refRect = data.offsets.reference;
        var bound = find(data.instance.modifiers, function (modifier) {
          return modifier.name === 'preventOverflow';
        }).boundaries;

        if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === true) {
            return data;
          }

          data.hide = true;
          data.attributes['x-out-of-boundaries'] = '';
        } else {
          // Avoid unnecessary DOM access if visibility hasn't changed
          if (data.hide === false) {
            return data;
          }

          data.hide = false;
          data.attributes['x-out-of-boundaries'] = false;
        }

        return data;
      }

      /**
       * @function
       * @memberof Modifiers
       * @argument {Object} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {Object} The data object, properly modified
       */
      function inner(data) {
        var placement = data.placement;
        var basePlacement = placement.split('-')[0];
        var _data$offsets = data.offsets,
            popper = _data$offsets.popper,
            reference = _data$offsets.reference;

        var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

        var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

        popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

        data.placement = getOppositePlacement(placement);
        data.offsets.popper = getClientRect(popper);

        return data;
      }

      /**
       * Modifier function, each modifier can have a function of this type assigned
       * to its `fn` property.<br />
       * These functions will be called on each update, this means that you must
       * make sure they are performant enough to avoid performance bottlenecks.
       *
       * @function ModifierFn
       * @argument {dataObject} data - The data object generated by `update` method
       * @argument {Object} options - Modifiers configuration and options
       * @returns {dataObject} The data object, properly modified
       */

      /**
       * Modifiers are plugins used to alter the behavior of your poppers.<br />
       * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
       * needed by the library.
       *
       * Usually you don't want to override the `order`, `fn` and `onLoad` props.
       * All the other properties are configurations that could be tweaked.
       * @namespace modifiers
       */
      var modifiers = {
        /**
         * Modifier used to shift the popper on the start or end of its reference
         * element.<br />
         * It will read the variation of the `placement` property.<br />
         * It can be one either `-end` or `-start`.
         * @memberof modifiers
         * @inner
         */
        shift: {
          /** @prop {number} order=100 - Index used to define the order of execution */
          order: 100,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: shift
        },

        /**
         * The `offset` modifier can shift your popper on both its axis.
         *
         * It accepts the following units:
         * - `px` or unitless, interpreted as pixels
         * - `%` or `%r`, percentage relative to the length of the reference element
         * - `%p`, percentage relative to the length of the popper element
         * - `vw`, CSS viewport width unit
         * - `vh`, CSS viewport height unit
         *
         * For length is intended the main axis relative to the placement of the popper.<br />
         * This means that if the placement is `top` or `bottom`, the length will be the
         * `width`. In case of `left` or `right`, it will be the height.
         *
         * You can provide a single value (as `Number` or `String`), or a pair of values
         * as `String` divided by a comma or one (or more) white spaces.<br />
         * The latter is a deprecated method because it leads to confusion and will be
         * removed in v2.<br />
         * Additionally, it accepts additions and subtractions between different units.
         * Note that multiplications and divisions aren't supported.
         *
         * Valid examples are:
         * ```
         * 10
         * '10%'
         * '10, 10'
         * '10%, 10'
         * '10 + 10%'
         * '10 - 5vh + 3%'
         * '-10px + 5vh, 5px - 6%'
         * ```
         * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
         * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
         * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
         *
         * @memberof modifiers
         * @inner
         */
        offset: {
          /** @prop {number} order=200 - Index used to define the order of execution */
          order: 200,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: offset,
          /** @prop {Number|String} offset=0
           * The offset value as described in the modifier description
           */
          offset: 0
        },

        /**
         * Modifier used to prevent the popper from being positioned outside the boundary.
         *
         * An scenario exists where the reference itself is not within the boundaries.<br />
         * We can say it has "escaped the boundaries" — or just "escaped".<br />
         * In this case we need to decide whether the popper should either:
         *
         * - detach from the reference and remain "trapped" in the boundaries, or
         * - if it should ignore the boundary and "escape with its reference"
         *
         * When `escapeWithReference` is set to`true` and reference is completely
         * outside its boundaries, the popper will overflow (or completely leave)
         * the boundaries in order to remain attached to the edge of the reference.
         *
         * @memberof modifiers
         * @inner
         */
        preventOverflow: {
          /** @prop {number} order=300 - Index used to define the order of execution */
          order: 300,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: preventOverflow,
          /**
           * @prop {Array} [priority=['left','right','top','bottom']]
           * Popper will try to prevent overflow following these priorities by default,
           * then, it could overflow on the left and on top of the `boundariesElement`
           */
          priority: ['left', 'right', 'top', 'bottom'],
          /**
           * @prop {number} padding=5
           * Amount of pixel used to define a minimum distance between the boundaries
           * and the popper this makes sure the popper has always a little padding
           * between the edges of its container
           */
          padding: 5,
          /**
           * @prop {String|HTMLElement} boundariesElement='scrollParent'
           * Boundaries used by the modifier, can be `scrollParent`, `window`,
           * `viewport` or any DOM element.
           */
          boundariesElement: 'scrollParent'
        },

        /**
         * Modifier used to make sure the reference and its popper stay near eachothers
         * without leaving any gap between the two. Expecially useful when the arrow is
         * enabled and you want to assure it to point to its reference element.
         * It cares only about the first axis, you can still have poppers with margin
         * between the popper and its reference element.
         * @memberof modifiers
         * @inner
         */
        keepTogether: {
          /** @prop {number} order=400 - Index used to define the order of execution */
          order: 400,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: keepTogether
        },

        /**
         * This modifier is used to move the `arrowElement` of the popper to make
         * sure it is positioned between the reference element and its popper element.
         * It will read the outer size of the `arrowElement` node to detect how many
         * pixels of conjuction are needed.
         *
         * It has no effect if no `arrowElement` is provided.
         * @memberof modifiers
         * @inner
         */
        arrow: {
          /** @prop {number} order=500 - Index used to define the order of execution */
          order: 500,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: arrow,
          /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
          element: '[x-arrow]'
        },

        /**
         * Modifier used to flip the popper's placement when it starts to overlap its
         * reference element.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         *
         * **NOTE:** this modifier will interrupt the current update cycle and will
         * restart it if it detects the need to flip the placement.
         * @memberof modifiers
         * @inner
         */
        flip: {
          /** @prop {number} order=600 - Index used to define the order of execution */
          order: 600,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: flip,
          /**
           * @prop {String|Array} behavior='flip'
           * The behavior used to change the popper's placement. It can be one of
           * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
           * placements (with optional variations).
           */
          behavior: 'flip',
          /**
           * @prop {number} padding=5
           * The popper will flip if it hits the edges of the `boundariesElement`
           */
          padding: 5,
          /**
           * @prop {String|HTMLElement} boundariesElement='viewport'
           * The element which will define the boundaries of the popper position,
           * the popper will never be placed outside of the defined boundaries
           * (except if keepTogether is enabled)
           */
          boundariesElement: 'viewport'
        },

        /**
         * Modifier used to make the popper flow toward the inner of the reference element.
         * By default, when this modifier is disabled, the popper will be placed outside
         * the reference element.
         * @memberof modifiers
         * @inner
         */
        inner: {
          /** @prop {number} order=700 - Index used to define the order of execution */
          order: 700,
          /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
          enabled: false,
          /** @prop {ModifierFn} */
          fn: inner
        },

        /**
         * Modifier used to hide the popper when its reference element is outside of the
         * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
         * be used to hide with a CSS selector the popper when its reference is
         * out of boundaries.
         *
         * Requires the `preventOverflow` modifier before it in order to work.
         * @memberof modifiers
         * @inner
         */
        hide: {
          /** @prop {number} order=800 - Index used to define the order of execution */
          order: 800,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: hide
        },

        /**
         * Computes the style that will be applied to the popper element to gets
         * properly positioned.
         *
         * Note that this modifier will not touch the DOM, it just prepares the styles
         * so that `applyStyle` modifier can apply it. This separation is useful
         * in case you need to replace `applyStyle` with a custom implementation.
         *
         * This modifier has `850` as `order` value to maintain backward compatibility
         * with previous versions of Popper.js. Expect the modifiers ordering method
         * to change in future major versions of the library.
         *
         * @memberof modifiers
         * @inner
         */
        computeStyle: {
          /** @prop {number} order=850 - Index used to define the order of execution */
          order: 850,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: computeStyle,
          /**
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3d transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties.
           */
          gpuAcceleration: true,
          /**
           * @prop {string} [x='bottom']
           * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
           * Change this if your popper should grow in a direction different from `bottom`
           */
          x: 'bottom',
          /**
           * @prop {string} [x='left']
           * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
           * Change this if your popper should grow in a direction different from `right`
           */
          y: 'right'
        },

        /**
         * Applies the computed styles to the popper element.
         *
         * All the DOM manipulations are limited to this modifier. This is useful in case
         * you want to integrate Popper.js inside a framework or view library and you
         * want to delegate all the DOM manipulations to it.
         *
         * Note that if you disable this modifier, you must make sure the popper element
         * has its position set to `absolute` before Popper.js can do its work!
         *
         * Just disable this modifier and define you own to achieve the desired effect.
         *
         * @memberof modifiers
         * @inner
         */
        applyStyle: {
          /** @prop {number} order=900 - Index used to define the order of execution */
          order: 900,
          /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
          enabled: true,
          /** @prop {ModifierFn} */
          fn: applyStyle,
          /** @prop {Function} */
          onLoad: applyStyleOnLoad,
          /**
           * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
           * @prop {Boolean} gpuAcceleration=true
           * If true, it uses the CSS 3d transformation to position the popper.
           * Otherwise, it will use the `top` and `left` properties.
           */
          gpuAcceleration: undefined
        }
      };

      /**
       * The `dataObject` is an object containing all the informations used by Popper.js
       * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
       * @name dataObject
       * @property {Object} data.instance The Popper.js instance
       * @property {String} data.placement Placement applied to popper
       * @property {String} data.originalPlacement Placement originally defined on init
       * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
       * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
       * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
       * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
       * @property {Object} data.boundaries Offsets of the popper boundaries
       * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
       * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
       * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
       */

      /**
       * Default options provided to Popper.js constructor.<br />
       * These can be overriden using the `options` argument of Popper.js.<br />
       * To override an option, simply pass as 3rd argument an object with the same
       * structure of this object, example:
       * ```
       * new Popper(ref, pop, {
       *   modifiers: {
       *     preventOverflow: { enabled: false }
       *   }
       * })
       * ```
       * @type {Object}
       * @static
       * @memberof Popper
       */
      var Defaults = {
        /**
         * Popper's placement
         * @prop {Popper.placements} placement='bottom'
         */
        placement: 'bottom',

        /**
         * Set this to true if you want popper to position it self in 'fixed' mode
         * @prop {Boolean} positionFixed=false
         */
        positionFixed: false,

        /**
         * Whether events (resize, scroll) are initially enabled
         * @prop {Boolean} eventsEnabled=true
         */
        eventsEnabled: true,

        /**
         * Set to true if you want to automatically remove the popper when
         * you call the `destroy` method.
         * @prop {Boolean} removeOnDestroy=false
         */
        removeOnDestroy: false,

        /**
         * Callback called when the popper is created.<br />
         * By default, is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onCreate}
         */
        onCreate: function onCreate() {},

        /**
         * Callback called when the popper is updated, this callback is not called
         * on the initialization/creation of the popper, but only on subsequent
         * updates.<br />
         * By default, is set to no-op.<br />
         * Access Popper.js instance with `data.instance`.
         * @prop {onUpdate}
         */
        onUpdate: function onUpdate() {},

        /**
         * List of modifiers used to modify the offsets before they are applied to the popper.
         * They provide most of the functionalities of Popper.js
         * @prop {modifiers}
         */
        modifiers: modifiers
      };

      /**
       * @callback onCreate
       * @param {dataObject} data
       */

      /**
       * @callback onUpdate
       * @param {dataObject} data
       */

      // Utils
      // Methods
      var Popper = function () {
        /**
         * Create a new Popper.js instance
         * @class Popper
         * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
         * @param {HTMLElement} popper - The HTML element used as popper.
         * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
         * @return {Object} instance - The generated Popper.js instance
         */
        function Popper(reference, popper) {
          var _this = this;

          var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          classCallCheck$1(this, Popper);

          this.scheduleUpdate = function () {
            return requestAnimationFrame(_this.update);
          };

          // make update() debounced, so that it only runs at most once-per-tick
          this.update = debounce(this.update.bind(this));

          // with {} we create a new object with the options inside it
          this.options = _extends$1({}, Popper.Defaults, options);

          // init state
          this.state = {
            isDestroyed: false,
            isCreated: false,
            scrollParents: []
          };

          // get reference and popper elements (allow jQuery wrappers)
          this.reference = reference && reference.jquery ? reference[0] : reference;
          this.popper = popper && popper.jquery ? popper[0] : popper;

          // Deep merge modifiers options
          this.options.modifiers = {};
          Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
            _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
          });

          // Refactoring modifiers' list (Object => Array)
          this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
            return _extends$1({
              name: name
            }, _this.options.modifiers[name]);
          })
          // sort the modifiers by order
          .sort(function (a, b) {
            return a.order - b.order;
          });

          // modifiers have the ability to execute arbitrary code when Popper.js get inited
          // such code is executed in the same order of its modifier
          // they could add new properties to their options configuration
          // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
          this.modifiers.forEach(function (modifierOptions) {
            if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
              modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
            }
          });

          // fire the first update to position the popper in the right place
          this.update();

          var eventsEnabled = this.options.eventsEnabled;
          if (eventsEnabled) {
            // setup event listeners, they will take care of update the position in specific situations
            this.enableEventListeners();
          }

          this.state.eventsEnabled = eventsEnabled;
        }

        // We can't use class properties because they don't get listed in the
        // class prototype and break stuff like Sinon stubs


        createClass$1(Popper, [{
          key: 'update',
          value: function update$$1() {
            return update.call(this);
          }
        }, {
          key: 'destroy',
          value: function destroy$$1() {
            return destroy.call(this);
          }
        }, {
          key: 'enableEventListeners',
          value: function enableEventListeners$$1() {
            return enableEventListeners.call(this);
          }
        }, {
          key: 'disableEventListeners',
          value: function disableEventListeners$$1() {
            return disableEventListeners.call(this);
          }

          /**
           * Schedule an update, it will run on the next UI update available
           * @method scheduleUpdate
           * @memberof Popper
           */

          /**
           * Collection of utilities useful when writing custom modifiers.
           * Starting from version 1.7, this method is available only if you
           * include `popper-utils.js` before `popper.js`.
           *
           * **DEPRECATION**: This way to access PopperUtils is deprecated
           * and will be removed in v2! Use the PopperUtils module directly instead.
           * Due to the high instability of the methods contained in Utils, we can't
           * guarantee them to follow semver. Use them at your own risk!
           * @static
           * @private
           * @type {Object}
           * @deprecated since version 1.8
           * @member Utils
           * @memberof Popper
           */

        }]);
        return Popper;
      }();

      /**
       * The `referenceObject` is an object that provides an interface compatible with Popper.js
       * and lets you use it as replacement of a real DOM node.<br />
       * You can use this method to position a popper relatively to a set of coordinates
       * in case you don't have a DOM node to use as reference.
       *
       * ```
       * new Popper(referenceObject, popperNode);
       * ```
       *
       * NB: This feature isn't supported in Internet Explorer 10
       * @name referenceObject
       * @property {Function} data.getBoundingClientRect
       * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
       * @property {number} data.clientWidth
       * An ES6 getter that will return the width of the virtual reference element.
       * @property {number} data.clientHeight
       * An ES6 getter that will return the height of the virtual reference element.
       */

      Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
      Popper.placements = placements;
      Popper.Defaults = Defaults;

      /**
       * Triggers document reflow.
       * Use void because some minifiers or engines think simply accessing the property
       * is unnecessary.
       * @param {Element} popper
       */
      function reflow(popper) {
        void popper.offsetHeight;
      }

      /**
       * Wrapper util for popper position updating.
       * Updates the popper's position and invokes the callback on update.
       * Hackish workaround until Popper 2.0's update() becomes sync.
       * @param {Popper} popperInstance
       * @param {Function} callback: to run once popper's position was updated
       * @param {Boolean} updateAlreadyCalled: was scheduleUpdate() already called?
       */
      function updatePopperPosition(popperInstance, callback, updateAlreadyCalled) {
        var popper = popperInstance.popper,
            options = popperInstance.options;

        var onCreate = options.onCreate;
        var onUpdate = options.onUpdate;

        options.onCreate = options.onUpdate = function () {
          reflow(popper), callback && callback(), onUpdate();
          options.onCreate = onCreate;
          options.onUpdate = onUpdate;
        };

        if (!updateAlreadyCalled) {
          popperInstance.scheduleUpdate();
        }
      }

      /**
       * Returns the core placement ('top', 'bottom', 'left', 'right') of a popper
       * @param {Element} popper
       * @return {String}
       */
      function getPopperPlacement(popper) {
        return popper.getAttribute('x-placement').replace(/-.+/, '');
      }

      /**
       * Determines if the mouse's cursor is outside the interactive border
       * @param {MouseEvent} event
       * @param {Element} popper
       * @param {Object} options
       * @return {Boolean}
       */
      function cursorIsOutsideInteractiveBorder(event, popper, options) {
        if (!popper.getAttribute('x-placement')) return true;

        var x = event.clientX,
            y = event.clientY;
        var interactiveBorder = options.interactiveBorder,
            distance = options.distance;

        var rect = popper.getBoundingClientRect();
        var placement = getPopperPlacement(popper);
        var borderWithDistance = interactiveBorder + distance;

        var exceeds = {
          top: rect.top - y > interactiveBorder,
          bottom: y - rect.bottom > interactiveBorder,
          left: rect.left - x > interactiveBorder,
          right: x - rect.right > interactiveBorder
        };

        switch (placement) {
          case 'top':
            exceeds.top = rect.top - y > borderWithDistance;
            break;
          case 'bottom':
            exceeds.bottom = y - rect.bottom > borderWithDistance;
            break;
          case 'left':
            exceeds.left = rect.left - x > borderWithDistance;
            break;
          case 'right':
            exceeds.right = x - rect.right > borderWithDistance;
            break;
        }

        return exceeds.top || exceeds.bottom || exceeds.left || exceeds.right;
      }

      /**
       * Transforms the `arrowTransform` numbers based on the placement axis
       * @param {String} type 'scale' or 'translate'
       * @param {Number[]} numbers
       * @param {Boolean} isVertical
       * @param {Boolean} isReverse
       * @return {String}
       */
      function transformNumbersBasedOnPlacementAxis(type, numbers, isVertical, isReverse) {
        if (!numbers.length) return '';

        var transforms = {
          scale: function () {
            if (numbers.length === 1) {
              return '' + numbers[0];
            } else {
              return isVertical ? numbers[0] + ', ' + numbers[1] : numbers[1] + ', ' + numbers[0];
            }
          }(),
          translate: function () {
            if (numbers.length === 1) {
              return isReverse ? -numbers[0] + 'px' : numbers[0] + 'px';
            } else {
              if (isVertical) {
                return isReverse ? numbers[0] + 'px, ' + -numbers[1] + 'px' : numbers[0] + 'px, ' + numbers[1] + 'px';
              } else {
                return isReverse ? -numbers[1] + 'px, ' + numbers[0] + 'px' : numbers[1] + 'px, ' + numbers[0] + 'px';
              }
            }
          }()
        };

        return transforms[type];
      }

      /**
       * Transforms the `arrowTransform` x or y axis based on the placement axis
       * @param {String} axis 'X', 'Y', ''
       * @param {Boolean} isVertical
       * @return {String}
       */
      function transformAxis(axis, isVertical) {
        if (!axis) return '';
        var map = {
          X: 'Y',
          Y: 'X'
        };
        return isVertical ? axis : map[axis];
      }

      /**
       * Computes and applies the necessary arrow transform
       * @param {Element} popper
       * @param {Element} arrow
       * @param {String} arrowTransform
       */
      function computeArrowTransform(popper, arrow, arrowTransform) {
        var placement = getPopperPlacement(popper);
        var isVertical = placement === 'top' || placement === 'bottom';
        var isReverse = placement === 'right' || placement === 'bottom';

        var getAxis = function getAxis(re) {
          var match = arrowTransform.match(re);
          return match ? match[1] : '';
        };

        var getNumbers = function getNumbers(re) {
          var match = arrowTransform.match(re);
          return match ? match[1].split(',').map(parseFloat) : [];
        };

        var re = {
          translate: /translateX?Y?\(([^)]+)\)/,
          scale: /scaleX?Y?\(([^)]+)\)/
        };

        var matches = {
          translate: {
            axis: getAxis(/translate([XY])/),
            numbers: getNumbers(re.translate)
          },
          scale: {
            axis: getAxis(/scale([XY])/),
            numbers: getNumbers(re.scale)
          }
        };

        var computedTransform = arrowTransform.replace(re.translate, 'translate' + transformAxis(matches.translate.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('translate', matches.translate.numbers, isVertical, isReverse) + ')').replace(re.scale, 'scale' + transformAxis(matches.scale.axis, isVertical) + '(' + transformNumbersBasedOnPlacementAxis('scale', matches.scale.numbers, isVertical, isReverse) + ')');

        arrow.style[prefix('transform')] = computedTransform;
      }

      /**
       * Returns the distance taking into account the default distance due to
       * the transform: translate setting in CSS
       * @param {Number} distance
       * @return {String}
       */
      function getOffsetDistanceInPx(distance) {
        return -(distance - defaults.distance) + 'px';
      }

      /**
       * Waits until next repaint to execute a fn
       * @param {Function} fn
       */
      function defer(fn) {
        requestAnimationFrame(function () {
          setTimeout(fn, 1);
        });
      }

      var matches = {};

      if (isBrowser) {
        var e = Element.prototype;
        matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (s) {
          var matches = (this.document || this.ownerDocument).querySelectorAll(s);
          var i = matches.length;
          while (--i >= 0 && matches.item(i) !== this) {} // eslint-disable-line no-empty
          return i > -1;
        };
      }

      var matches$1 = matches;

      /**
       * Ponyfill to get the closest parent element
       * @param {Element} element - child of parent to be returned
       * @param {String} parentSelector - selector to match the parent if found
       * @return {Element}
       */
      function closest(element, parentSelector) {
        var fn = Element.prototype.closest || function (selector) {
          var el = this;
          while (el) {
            if (matches$1.call(el, selector)) {
              return el;
            }
            el = el.parentElement;
          }
        };

        return fn.call(element, parentSelector);
      }

      /**
       * Returns the value taking into account the value being either a number or array
       * @param {Number|Array} value
       * @param {Number} index
       * @return {Number}
       */
      function getValue(value, index) {
        return Array.isArray(value) ? value[index] : value;
      }

      /**
       * Sets the visibility state of an element for transition to begin
       * @param {Element[]} els - array of elements
       * @param {String} type - 'visible' or 'hidden'
       */
      function setVisibilityState(els, type) {
        els.forEach(function (el) {
          if (!el) return;
          el.setAttribute('data-state', type);
        });
      }

      /**
       * Sets the transition property to each element
       * @param {Element[]} els - Array of elements
       * @param {String} value
       */
      function applyTransitionDuration(els, value) {
        els.filter(Boolean).forEach(function (el) {
          el.style[prefix('transitionDuration')] = value + 'ms';
        });
      }

      /**
       * Focuses an element while preventing a scroll jump if it's not entirely within the viewport
       * @param {Element} el
       */
      function focus(el) {
        var x = window.scrollX || window.pageXOffset;
        var y = window.scrollY || window.pageYOffset;
        el.focus();
        scroll(x, y);
      }

      var key = {};
      var store = function store(data) {
        return function (k) {
          return k === key && data;
        };
      };

      var Tippy = function () {
        function Tippy(config) {
          classCallCheck(this, Tippy);

          for (var _key in config) {
            this[_key] = config[_key];
          }

          this.state = {
            destroyed: false,
            visible: false,
            enabled: true
          };

          this._ = store({
            mutationObservers: []
          });
        }

        /**
         * Enables the tooltip to allow it to show or hide
         * @memberof Tippy
         * @public
         */

        createClass(Tippy, [{
          key: 'enable',
          value: function enable() {
            this.state.enabled = true;
          }

          /**
           * Disables the tooltip from showing or hiding, but does not destroy it
           * @memberof Tippy
           * @public
           */

        }, {
          key: 'disable',
          value: function disable() {
            this.state.enabled = false;
          }

          /**
           * Shows the tooltip
           * @param {Number} duration in milliseconds
           * @memberof Tippy
           * @public
           */

        }, {
          key: 'show',
          value: function show(duration) {
            var _this = this;

            if (this.state.destroyed || !this.state.enabled) return;

            var popper = this.popper,
                reference = this.reference,
                options = this.options;

            var _getInnerElements = getInnerElements(popper),
                tooltip = _getInnerElements.tooltip,
                backdrop = _getInnerElements.backdrop,
                content = _getInnerElements.content;

            // If the `dynamicTitle` option is true, the instance is allowed
            // to be created with an empty title. Make sure that the tooltip
            // content is not empty before showing it


            if (options.dynamicTitle && !reference.getAttribute('data-original-title')) return;

            // Do not show tooltip if reference contains 'disabled' attribute. FF fix for #221
            if (reference.hasAttribute('disabled')) return;

            // Destroy tooltip if the reference element is no longer on the DOM
            if (!reference.refObj && !document.documentElement.contains(reference)) {
              this.destroy();
              return;
            }

            options.onShow.call(popper, this);

            duration = getValue(duration !== undefined ? duration : options.duration, 0);

            // Prevent a transition when popper changes position
            applyTransitionDuration([popper, tooltip, backdrop], 0);

            popper.style.visibility = 'visible';
            this.state.visible = true;

            _mount.call(this, function () {
              if (!_this.state.visible) return;

              if (!_hasFollowCursorBehavior.call(_this)) {
                // FIX: Arrow will sometimes not be positioned correctly. Force another update.
                _this.popperInstance.scheduleUpdate();
              }

              // Set initial position near the cursor
              if (_hasFollowCursorBehavior.call(_this)) {
                _this.popperInstance.disableEventListeners();
                var delay = getValue(options.delay, 0);
                var lastTriggerEvent = _this._(key).lastTriggerEvent;
                if (lastTriggerEvent) {
                  _this._(key).followCursorListener(delay && _this._(key).lastMouseMoveEvent ? _this._(key).lastMouseMoveEvent : lastTriggerEvent);
                }
              }

              // Re-apply transition durations
              applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

              if (backdrop) {
                getComputedStyle(backdrop)[prefix('transform')];
              }

              if (options.interactive) {
                reference.classList.add('tippy-active');
              }

              if (options.sticky) {
                _makeSticky.call(_this);
              }

              setVisibilityState([tooltip, backdrop], 'visible');

              _onTransitionEnd.call(_this, duration, function () {
                if (!options.updateDuration) {
                  tooltip.classList.add('tippy-notransition');
                }

                if (options.interactive) {
                  focus(popper);
                }

                reference.setAttribute('aria-describedby', 'tippy-' + _this.id);

                options.onShown.call(popper, _this);
              });
            });
          }

          /**
           * Hides the tooltip
           * @param {Number} duration in milliseconds
           * @memberof Tippy
           * @public
           */

        }, {
          key: 'hide',
          value: function hide(duration) {
            var _this2 = this;

            if (this.state.destroyed || !this.state.enabled) return;

            var popper = this.popper,
                reference = this.reference,
                options = this.options;

            var _getInnerElements2 = getInnerElements(popper),
                tooltip = _getInnerElements2.tooltip,
                backdrop = _getInnerElements2.backdrop,
                content = _getInnerElements2.content;

            options.onHide.call(popper, this);

            duration = getValue(duration !== undefined ? duration : options.duration, 1);

            if (!options.updateDuration) {
              tooltip.classList.remove('tippy-notransition');
            }

            if (options.interactive) {
              reference.classList.remove('tippy-active');
            }

            popper.style.visibility = 'hidden';
            this.state.visible = false;

            applyTransitionDuration([tooltip, backdrop, backdrop ? content : null], duration);

            setVisibilityState([tooltip, backdrop], 'hidden');

            if (options.interactive && options.trigger.indexOf('click') > -1) {
              focus(reference);
            }

            this.popperInstance.disableEventListeners();

            /*
            * This call is deferred because sometimes when the tooltip is still transitioning in but hide()
            * is called before it finishes, the CSS transition won't reverse quickly enough, meaning
            * the CSS transition will finish 1-2 frames later, and onHidden() will run since the JS set it
            * more quickly. It should actually be onShown(). Seems to be something Chrome does, not Safari
            */
            defer(function () {
              _onTransitionEnd.call(_this2, duration, function () {
                if (_this2.state.visible || !options.appendTo.contains(popper)) return;

                if (!_this2._(key).isPreparingToShow) {
                  document.removeEventListener('mousemove', _this2._(key).followCursorListener);
                  _this2._(key).lastMouseMoveEvent = null;
                }

                reference.removeAttribute('aria-describedby');

                options.appendTo.removeChild(popper);

                options.onHidden.call(popper, _this2);
              });
            });
          }

          /**
           * Destroys the tooltip instance
           * @param {Boolean} destroyTargetInstances - relevant only when destroying delegates
           * @memberof Tippy
           * @public
           */

        }, {
          key: 'destroy',
          value: function destroy() {
            var _this3 = this;

            var destroyTargetInstances = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (this.state.destroyed) return;

            // Ensure the popper is hidden
            if (this.state.visible) {
              this.hide(0);
            }

            this.listeners.forEach(function (listener) {
              _this3.reference.removeEventListener(listener.event, listener.handler);
            });

            // Restore title
            if (this.title) {
              this.reference.setAttribute('title', this.title);
            }

            delete this.reference._tippy;

            var attributes = ['data-original-title', 'data-tippy', 'data-tippy-delegate'];
            attributes.forEach(function (attr) {
              _this3.reference.removeAttribute(attr);
            });

            if (this.options.target && destroyTargetInstances) {
              toArray(this.reference.querySelectorAll(this.options.target)).forEach(function (child) {
                return child._tippy && child._tippy.destroy();
              });
            }

            if (this.popperInstance) {
              this.popperInstance.destroy();
            }

            this._(key).mutationObservers.forEach(function (observer) {
              observer.disconnect();
            });

            this.state.destroyed = true;
          }
        }]);
        return Tippy;
      }();

      /**
       * ------------------------------------------------------------------------
       * Private methods
       * ------------------------------------------------------------------------
       * Standalone functions to be called with the instance's `this` context to make
       * them truly private and not accessible on the prototype
       */

      /**
       * Determines if the tooltip instance has followCursor behavior
       * @return {Boolean}
       * @memberof Tippy
       * @private
       */
      function _hasFollowCursorBehavior() {
        var lastTriggerEvent = this._(key).lastTriggerEvent;
        return this.options.followCursor && !browser.usingTouch && lastTriggerEvent && lastTriggerEvent.type !== 'focus';
      }

      /**
       * Creates the Tippy instance for the child target of the delegate container
       * @param {Event} event
       * @memberof Tippy
       * @private
       */
      function _createDelegateChildTippy(event) {
        var targetEl = closest(event.target, this.options.target);
        if (targetEl && !targetEl._tippy) {
          var title = targetEl.getAttribute('title') || this.title;
          if (title) {
            targetEl.setAttribute('title', title);
            tippy(targetEl, _extends({}, this.options, { target: null }));
            _enter.call(targetEl._tippy, event);
          }
        }
      }

      /**
       * Method used by event listeners to invoke the show method, taking into account delays and
       * the `wait` option
       * @param {Event} event
       * @memberof Tippy
       * @private
       */
      function _enter(event) {
        var _this4 = this;

        var options = this.options;

        _clearDelayTimeouts.call(this);

        if (this.state.visible) return;

        // Is a delegate, create Tippy instance for the child target
        if (options.target) {
          _createDelegateChildTippy.call(this, event);
          return;
        }

        this._(key).isPreparingToShow = true;

        if (options.wait) {
          options.wait.call(this.popper, this.show.bind(this), event);
          return;
        }

        // If the tooltip has a delay, we need to be listening to the mousemove as soon as the trigger
        // event is fired so that it's in the correct position upon mount.
        if (_hasFollowCursorBehavior.call(this)) {
          if (!this._(key).followCursorListener) {
            _setFollowCursorListener.call(this);
          }

          var _getInnerElements3 = getInnerElements(this.popper),
              arrow = _getInnerElements3.arrow;

          if (arrow) arrow.style.margin = '0';
          document.addEventListener('mousemove', this._(key).followCursorListener);
        }

        var delay = getValue(options.delay, 0);

        if (delay) {
          this._(key).showTimeout = setTimeout(function () {
            _this4.show();
          }, delay);
        } else {
          this.show();
        }
      }

      /**
       * Method used by event listeners to invoke the hide method, taking into account delays
       * @memberof Tippy
       * @private
       */
      function _leave() {
        var _this5 = this;

        _clearDelayTimeouts.call(this);

        if (!this.state.visible) return;

        this._(key).isPreparingToShow = false;

        var delay = getValue(this.options.delay, 1);

        if (delay) {
          this._(key).hideTimeout = setTimeout(function () {
            if (_this5.state.visible) {
              _this5.hide();
            }
          }, delay);
        } else {
          this.hide();
        }
      }

      /**
       * Returns relevant listeners for the instance
       * @return {Object} of listeners
       * @memberof Tippy
       * @private
       */
      function _getEventListeners() {
        var _this6 = this;

        var onTrigger = function onTrigger(event) {
          if (!_this6.state.enabled) return;

          var shouldStopEvent = browser.supportsTouch && browser.usingTouch && ['mouseenter', 'mouseover', 'focus'].indexOf(event.type) > -1;

          if (shouldStopEvent && _this6.options.touchHold) return;

          _this6._(key).lastTriggerEvent = event;

          // Toggle show/hide when clicking click-triggered tooltips
          if (event.type === 'click' && _this6.options.hideOnClick !== 'persistent' && _this6.state.visible) {
            _leave.call(_this6);
          } else {
            _enter.call(_this6, event);
          }

          // iOS prevents click events from firing
          if (shouldStopEvent && browser.iOS && _this6.reference.click) {
            _this6.reference.click();
          }
        };

        var onMouseLeave = function onMouseLeave(event) {
          if (['mouseleave', 'mouseout'].indexOf(event.type) > -1 && browser.supportsTouch && browser.usingTouch && _this6.options.touchHold) return;

          if (_this6.options.interactive) {
            var hide = _leave.bind(_this6);

            var onMouseMove = function onMouseMove(event) {
              var referenceCursorIsOver = closest(event.target, selectors.REFERENCE);
              var cursorIsOverPopper = closest(event.target, selectors.POPPER) === _this6.popper;
              var cursorIsOverReference = referenceCursorIsOver === _this6.reference;

              if (cursorIsOverPopper || cursorIsOverReference) return;

              if (cursorIsOutsideInteractiveBorder(event, _this6.popper, _this6.options)) {
                document.body.removeEventListener('mouseleave', hide);
                document.removeEventListener('mousemove', onMouseMove);

                _leave.call(_this6, onMouseMove);
              }
            };

            document.body.addEventListener('mouseleave', hide);
            document.addEventListener('mousemove', onMouseMove);
            return;
          }

          _leave.call(_this6);
        };

        var onBlur = function onBlur(event) {
          if (event.target !== _this6.reference || browser.usingTouch) return;

          if (_this6.options.interactive) {
            if (!event.relatedTarget) return;
            if (closest(event.relatedTarget, selectors.POPPER)) return;
          }

          _leave.call(_this6);
        };

        var onDelegateShow = function onDelegateShow(event) {
          if (closest(event.target, _this6.options.target)) {
            _enter.call(_this6, event);
          }
        };

        var onDelegateHide = function onDelegateHide(event) {
          if (closest(event.target, _this6.options.target)) {
            _leave.call(_this6);
          }
        };

        return {
          onTrigger: onTrigger,
          onMouseLeave: onMouseLeave,
          onBlur: onBlur,
          onDelegateShow: onDelegateShow,
          onDelegateHide: onDelegateHide
        };
      }

      /**
       * Creates and returns a new popper instance
       * @return {Popper}
       * @memberof Tippy
       * @private
       */
      function _createPopperInstance() {
        var _this7 = this;

        var popper = this.popper,
            reference = this.reference,
            options = this.options;

        var _getInnerElements4 = getInnerElements(popper),
            tooltip = _getInnerElements4.tooltip;

        var popperOptions = options.popperOptions;

        var arrowSelector = options.arrowType === 'round' ? selectors.ROUND_ARROW : selectors.ARROW;
        var arrow = tooltip.querySelector(arrowSelector);

        var config = _extends({
          placement: options.placement
        }, popperOptions || {}, {
          modifiers: _extends({}, popperOptions ? popperOptions.modifiers : {}, {
            arrow: _extends({
              element: arrowSelector
            }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.arrow : {}),
            flip: _extends({
              enabled: options.flip,
              padding: options.distance + 5 /* 5px from viewport boundary */
              , behavior: options.flipBehavior
            }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.flip : {}),
            offset: _extends({
              offset: options.offset
            }, popperOptions && popperOptions.modifiers ? popperOptions.modifiers.offset : {})
          }),
          onCreate: function onCreate() {
            tooltip.style[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

            if (arrow && options.arrowTransform) {
              computeArrowTransform(popper, arrow, options.arrowTransform);
            }
          },
          onUpdate: function onUpdate() {
            var styles = tooltip.style;
            styles.top = '';
            styles.bottom = '';
            styles.left = '';
            styles.right = '';
            styles[getPopperPlacement(popper)] = getOffsetDistanceInPx(options.distance);

            if (arrow && options.arrowTransform) {
              computeArrowTransform(popper, arrow, options.arrowTransform);
            }
          }
        });

        _addMutationObserver.call(this, {
          target: popper,
          callback: function callback() {
            _this7.popperInstance.update();
          },
          options: {
            childList: true,
            subtree: true,
            characterData: true
          }
        });

        return new Popper(reference, popper, config);
      }

      /**
       * Appends the popper element to the DOM, updating or creating the popper instance
       * @param {Function} callback
       * @memberof Tippy
       * @private
       */
      function _mount(callback) {
        var options = this.options;

        if (!this.popperInstance) {
          this.popperInstance = _createPopperInstance.call(this);
          if (!options.livePlacement) {
            this.popperInstance.disableEventListeners();
          }
        } else {
          this.popperInstance.scheduleUpdate();
          if (options.livePlacement && !_hasFollowCursorBehavior.call(this)) {
            this.popperInstance.enableEventListeners();
          }
        }

        // If the instance previously had followCursor behavior, it will be positioned incorrectly
        // if triggered by `focus` afterwards - update the reference back to the real DOM element
        if (!_hasFollowCursorBehavior.call(this)) {
          var _getInnerElements5 = getInnerElements(this.popper),
              arrow = _getInnerElements5.arrow;

          if (arrow) arrow.style.margin = '';
          this.popperInstance.reference = this.reference;
        }

        updatePopperPosition(this.popperInstance, callback, true);

        if (!options.appendTo.contains(this.popper)) {
          options.appendTo.appendChild(this.popper);
        }
      }

      /**
       * Clears the show and hide delay timeouts
       * @memberof Tippy
       * @private
       */
      function _clearDelayTimeouts() {
        var _ref = this._(key),
            showTimeout = _ref.showTimeout,
            hideTimeout = _ref.hideTimeout;

        clearTimeout(showTimeout);
        clearTimeout(hideTimeout);
      }

      /**
       * Sets the mousemove event listener function for `followCursor` option
       * @memberof Tippy
       * @private
       */
      function _setFollowCursorListener() {
        var _this8 = this;

        this._(key).followCursorListener = function (event) {
          var _$lastMouseMoveEvent = _this8._(key).lastMouseMoveEvent = event,
              clientX = _$lastMouseMoveEvent.clientX,
              clientY = _$lastMouseMoveEvent.clientY;

          if (!_this8.popperInstance) return;

          _this8.popperInstance.reference = {
            getBoundingClientRect: function getBoundingClientRect() {
              return {
                width: 0,
                height: 0,
                top: clientY,
                left: clientX,
                right: clientX,
                bottom: clientY
              };
            },
            clientWidth: 0,
            clientHeight: 0
          };

          _this8.popperInstance.scheduleUpdate();
        };
      }

      /**
       * Updates the popper's position on each animation frame
       * @memberof Tippy
       * @private
       */
      function _makeSticky() {
        var _this9 = this;

        var applyTransitionDuration$$1 = function applyTransitionDuration$$1() {
          _this9.popper.style[prefix('transitionDuration')] = _this9.options.updateDuration + 'ms';
        };

        var removeTransitionDuration = function removeTransitionDuration() {
          _this9.popper.style[prefix('transitionDuration')] = '';
        };

        var updatePosition = function updatePosition() {
          if (_this9.popperInstance) {
            _this9.popperInstance.update();
          }

          applyTransitionDuration$$1();

          if (_this9.state.visible) {
            requestAnimationFrame(updatePosition);
          } else {
            removeTransitionDuration();
          }
        };

        updatePosition();
      }

      /**
       * Adds a mutation observer to an element and stores it in the instance
       * @param {Object}
       * @memberof Tippy
       * @private
       */
      function _addMutationObserver(_ref2) {
        var target = _ref2.target,
            callback = _ref2.callback,
            options = _ref2.options;

        if (!window.MutationObserver) return;

        var observer = new MutationObserver(callback);
        observer.observe(target, options);

        this._(key).mutationObservers.push(observer);
      }

      /**
       * Fires the callback functions once the CSS transition ends for `show` and `hide` methods
       * @param {Number} duration
       * @param {Function} callback - callback function to fire once transition completes
       * @memberof Tippy
       * @private
       */
      function _onTransitionEnd(duration, callback) {
        // Make callback synchronous if duration is 0
        if (!duration) {
          return callback();
        }

        var _getInnerElements6 = getInnerElements(this.popper),
            tooltip = _getInnerElements6.tooltip;

        var toggleListeners = function toggleListeners(action, listener) {
          if (!listener) return;
          tooltip[action + 'EventListener']('ontransitionend' in window ? 'transitionend' : 'webkitTransitionEnd', listener);
        };

        var listener = function listener(e) {
          if (e.target === tooltip) {
            toggleListeners('remove', listener);
            callback();
          }
        };

        toggleListeners('remove', this._(key).transitionendListener);
        toggleListeners('add', listener);

        this._(key).transitionendListener = listener;
      }

      var idCounter = 1;

      /**
       * Creates tooltips for each reference element
       * @param {Element[]} els
       * @param {Object} config
       * @return {Tippy[]} Array of Tippy instances
       */
      function createTooltips(els, config) {
        return els.reduce(function (acc, reference) {
          var id = idCounter;

          var options = evaluateOptions(reference, config.performance ? config : getIndividualOptions(reference, config));

          var title = reference.getAttribute('title');

          // Don't create an instance when:
          // * the `title` attribute is falsy (null or empty string), and
          // * it's not a delegate for tooltips, and
          // * there is no html template specified, and
          // * `dynamicTitle` option is false
          if (!title && !options.target && !options.html && !options.dynamicTitle) {
            return acc;
          }

          // Delegates should be highlighted as different
          reference.setAttribute(options.target ? 'data-tippy-delegate' : 'data-tippy', '');

          removeTitle(reference);

          var popper = createPopperElement(id, title, options);

          var tippy = new Tippy({
            id: id,
            reference: reference,
            popper: popper,
            options: options,
            title: title,
            popperInstance: null
          });

          if (options.createPopperInstanceOnInit) {
            tippy.popperInstance = _createPopperInstance.call(tippy);
            tippy.popperInstance.disableEventListeners();
          }

          var listeners = _getEventListeners.call(tippy);
          tippy.listeners = options.trigger.trim().split(' ').reduce(function (acc, eventType) {
            return acc.concat(createTrigger(eventType, reference, listeners, options));
          }, []);

          // Update tooltip content whenever the title attribute on the reference changes
          if (options.dynamicTitle) {
            _addMutationObserver.call(tippy, {
              target: reference,
              callback: function callback() {
                var _getInnerElements = getInnerElements(popper),
                    content = _getInnerElements.content;

                var title = reference.getAttribute('title');
                if (title) {
                  content[options.allowTitleHTML ? 'innerHTML' : 'textContent'] = tippy.title = title;
                  removeTitle(reference);
                }
              },

              options: {
                attributes: true
              }
            });
          }

          // Shortcuts
          reference._tippy = tippy;
          popper._tippy = tippy;
          popper._reference = reference;

          acc.push(tippy);

          idCounter++;

          return acc;
        }, []);
      }

      /**
       * Hides all poppers
       * @param {Tippy} excludeTippy - tippy to exclude if needed
       */
      function hideAllPoppers(excludeTippy) {
        var poppers = toArray(document.querySelectorAll(selectors.POPPER));

        poppers.forEach(function (popper) {
          var tippy = popper._tippy;
          if (!tippy) return;

          var options = tippy.options;

          if ((options.hideOnClick === true || options.trigger.indexOf('focus') > -1) && (!excludeTippy || popper !== excludeTippy.popper)) {
            tippy.hide();
          }
        });
      }

      /**
       * Adds the needed event listeners
       */
      function bindEventListeners() {
        var onDocumentTouch = function onDocumentTouch() {
          if (browser.usingTouch) return;

          browser.usingTouch = true;

          if (browser.iOS) {
            document.body.classList.add('tippy-touch');
          }

          if (browser.dynamicInputDetection && window.performance) {
            document.addEventListener('mousemove', onDocumentMouseMove);
          }

          browser.onUserInputChange('touch');
        };

        var onDocumentMouseMove = function () {
          var time = void 0;

          return function () {
            var now = performance.now();

            // Chrome 60+ is 1 mousemove per animation frame, use 20ms time difference
            if (now - time < 20) {
              browser.usingTouch = false;
              document.removeEventListener('mousemove', onDocumentMouseMove);
              if (!browser.iOS) {
                document.body.classList.remove('tippy-touch');
              }
              browser.onUserInputChange('mouse');
            }

            time = now;
          };
        }();

        var onDocumentClick = function onDocumentClick(event) {
          // Simulated events dispatched on the document
          if (!(event.target instanceof Element)) {
            return hideAllPoppers();
          }

          var reference = closest(event.target, selectors.REFERENCE);
          var popper = closest(event.target, selectors.POPPER);

          if (popper && popper._tippy && popper._tippy.options.interactive) {
            return;
          }

          if (reference && reference._tippy) {
            var options = reference._tippy.options;

            var isClickTrigger = options.trigger.indexOf('click') > -1;
            var isMultiple = options.multiple;

            // Hide all poppers except the one belonging to the element that was clicked
            if (!isMultiple && browser.usingTouch || !isMultiple && isClickTrigger) {
              return hideAllPoppers(reference._tippy);
            }

            if (options.hideOnClick !== true || isClickTrigger) {
              return;
            }
          }

          hideAllPoppers();
        };

        var onWindowBlur = function onWindowBlur() {
          var _document = document,
              el = _document.activeElement;

          if (el && el.blur && matches$1.call(el, selectors.REFERENCE)) {
            el.blur();
          }
        };

        var onWindowResize = function onWindowResize() {
          toArray(document.querySelectorAll(selectors.POPPER)).forEach(function (popper) {
            var tippyInstance = popper._tippy;
            if (tippyInstance && !tippyInstance.options.livePlacement) {
              tippyInstance.popperInstance.scheduleUpdate();
            }
          });
        };

        document.addEventListener('click', onDocumentClick);
        document.addEventListener('touchstart', onDocumentTouch);
        window.addEventListener('blur', onWindowBlur);
        window.addEventListener('resize', onWindowResize);

        if (!browser.supportsTouch && (navigator.maxTouchPoints || navigator.msMaxTouchPoints)) {
          document.addEventListener('pointerdown', onDocumentTouch);
        }
      }

      var eventListenersBound = false;

      /**
       * Exported module
       * @param {String|Element|Element[]|NodeList|Object} selector
       * @param {Object} options
       * @param {Boolean} one - create one tooltip
       * @return {Object}
       */
      function tippy(selector, options, one) {
        if (browser.supported && !eventListenersBound) {
          bindEventListeners();
          eventListenersBound = true;
        }

        if (isObjectLiteral(selector)) {
          polyfillVirtualReferenceProps(selector);
        }

        options = _extends({}, defaults, options);

        var references = getArrayOfElements(selector);
        var firstReference = references[0];

        return {
          selector: selector,
          options: options,
          tooltips: browser.supported ? createTooltips(one && firstReference ? [firstReference] : references, options) : [],
          destroyAll: function destroyAll() {
            this.tooltips.forEach(function (tooltip) {
              return tooltip.destroy();
            });
            this.tooltips = [];
          }
        };
      }

      tippy.version = version;
      tippy.browser = browser;
      tippy.defaults = defaults;
      tippy.one = function (selector, options) {
        return tippy(selector, options, true).tooltips[0];
      };
      tippy.disableAnimations = function () {
        defaults.updateDuration = defaults.duration = 0;
        defaults.animateFill = false;
      };

      /**
       * Injects CSS styles to document head
       * @param {String} css
       */
      function injectCSS() {
        var css = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        if (isBrowser && browser.supported) {
          var head = document.head || document.querySelector('head');
          var style = document.createElement('style');
          style.type = 'text/css';
          head.insertBefore(style, head.firstChild);

          if (style.styleSheet) {
            style.styleSheet.cssText = css;
          } else {
            style.appendChild(document.createTextNode(css));
          }
        }
      }

      injectCSS(styles);

      return tippy;
    });

    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(6));

  /***/
},
/* 6 */
/***/function (module, exports) {

  var g;

  // This works in non-strict mode
  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) === "object") g = window;
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;

  /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var Copy = function () {
    function Copy() {
      _classCallCheck(this, Copy);

      this.copyLinkBtn = document.querySelector('.copy-link-btn');
      if (getQueryString('urlkey')) {
        document.querySelector(".text-to-copy").value = getQueryString('urlkey');
      }
      if (this.copyLinkBtn) {
        this.copyLinkBtn.addEventListener('click', this.copy.bind(this));
      }
    }

    _createClass(Copy, [{
      key: 'copy',
      value: function copy() {
        var copyText = document.querySelector(".text-to-copy");
        copyText.select();
        document.execCommand("copy");
        this.copyLinkBtn.innerHTML = "Link copied!";
      }
    }]);

    return Copy;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["a"] = Copy;

  var getQueryString = function getQueryString(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var ActiveMenu = function ActiveMenu() {
    _classCallCheck(this, ActiveMenu);

    //to put active class on active link
    var path = window.location.pathname;
    var links = document.querySelectorAll('.nav-link');

    for(var i=0;i<links.length;i++) {
    //links.forEach(function (link) {
      if(links[i].classList) {
          links[i].classList.remove('is-active');
          if (path === '/' + links[i].getAttribute('href')) {
            links[i].classList.add('is-active');
          }
      }

    }
    //});

    if (path === '/' || path === '/#' || path === '') {
	   //if(classList) {
		//document.querySelector('.home').classList.add('is-active');
	   //}
    }
  };
  /* harmony export (immutable) */

  __webpack_exports__["a"] = ActiveMenu;

  /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var FormValidation = function () {
    function FormValidation() {
      _classCallCheck(this, FormValidation);

      this.startMeetingBtn = document.querySelector('.start-meeting-btn');
      this.scheduleMeetingBtn = document.querySelector('.schedule-btn');
      this.emailInput = document.querySelector('.email-input');
      this.emailErrorMessage = document.querySelector('.email-error-message');

      if (this.emailInput && this.startMeetingBtn) {
        this.startMeetingBtn.addEventListener('click', this.displayError.bind(this));
        this.emailInput.addEventListener('focus', this.hideError.bind(this));
      }
    }

    _createClass(FormValidation, [{
      key: 'displayError',
      value: function displayError() {
        if (this.emailInput.value.trim() === '') {
          this.emailErrorMessage.style.display = 'block';
        } else {
          if (checkEmailRegex(this.emailInput.value.trim())) {
            if(navigator.userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i)){
                 window.location.replace("https://askee.io/mobile/sign-in?id=" + this.emailInput.value.trim());
             } else {
               window.location.replace("https://askee.io/openvc/sign-in?id=" + this.emailInput.value.trim());
             }
          } else {
            this.emailErrorMessage.style.display = 'block';
          }
        }
      }
    }, {
      key: 'hideError',
      value: function hideError() {
        this.emailErrorMessage.style.display = 'none';
      }
    }]);

    return FormValidation;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["a"] = FormValidation;

  function checkEmailRegex(_email) {
    var result = false;
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    //var regex = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/  //invision
    //var regex = /^(\w+)([\-+.\'0-9A-Za-z_]+)*@(\w[\-\w]*\.){1,5}([A-Za-z]){2,6}$/
    if (regex.test(_email) === false) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

  /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var FormSuccess = function () {
    function FormSuccess() {
      _classCallCheck(this, FormSuccess);

      this.sendBtn_feature = document.querySelector('.send-btn-feature');
      this.sendBtn_faq = document.querySelector('.send-btn-faq');
      this.sendBtn_feedback = document.querySelector('.send-btn-feedback');
      this.successMessage = document.querySelector('.success-message');

      if (this.sendBtn_feature && this.successMessage) {
        this.sendBtn_feature.addEventListener('click', this.displayMessage_feature.bind(this));
      }
      if (this.sendBtn_faq && this.successMessage) {
        this.sendBtn_faq.addEventListener('click', this.displayMessage_faq.bind(this));
      }
      if (this.sendBtn_feedback && this.successMessage) {
        this.sendBtn_feedback.addEventListener('click', this.displayMessage_feedback.bind(this));
      }
    }

    _createClass(FormSuccess, [{
      key: 'displayMessage_feature',
      value: function displayMessage_feature() {
        if (document.querySelector('#feature_txt').value.trim().length == 0) {
          document.querySelector('#feature_msg').innerHTML = 'Please enter a message.';
          this.successMessage.style.background = '#ed3c61';
          this.successMessage.style.display = 'block';
        } else {
          //document.querySelector('#feature_txt').value =''
          //document.querySelector('#feature_msg').innerHTML ='Your message was sent successfully. Thanks';
          this.successMessage.style.background = '#01bcb6';
          this.successMessage.style.display = 'block';

          //---------- Post request for feature feedback saving -------------------
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
              // XMLHttpRequest.DONE == 4
              if (xmlhttp.status == 200) {
                document.querySelector('#feature_txt').value = '';
                document.querySelector('#feature_msg').innerHTML = 'Your message was sent successfully. Thanks';
              } else if (xmlhttp.status == 400) {
                //alert('There was an error 400');
              } else {
                  //alert('something else other than 200 was returned');
                }
            }
          };
          xmlhttp.open("POST", "https://askee.io/landing/feature", true);
          xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xmlhttp.send('fe_msg=' + document.querySelector('#feature_txt').value);
          //------------------------------------------------
        }
      }
    }, {
      key: 'displayMessage_feedback',
      value: function displayMessage_feedback() {
        if (document.querySelector('#feedback_txt').value.trim().length == 0) {
          document.querySelector('#feedback_msg').innerHTML = 'Please enter a message.';
          this.successMessage.style.background = '#ed3c61';
          this.successMessage.style.display = 'block';
        } else {
          // document.querySelector('#feedback_txt').value =''
          // document.querySelector('#feedback_msg').innerHTML ='Your message was sent successfully. Thanks';
          this.successMessage.style.background = '#01bcb6';
          this.successMessage.style.display = 'block';

          //---------- Post request for feedback saving -------------------
          var xmlhttp = new XMLHttpRequest();
          xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
              // XMLHttpRequest.DONE == 4
              if (xmlhttp.status == 200) {
                document.querySelector('#feedback_txt').value = '';
                document.querySelector('#feedback_msg').innerHTML = 'Your message was sent successfully. Thanks';
              } else if (xmlhttp.status == 400) {
                //alert('There was an error 400');
              } else {
                  //alert('something else other than 200 was returned');
                }
            }
          };
          xmlhttp.open("POST", "https://askee.io/landing/feedback", true);
          xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          xmlhttp.send('fd_msg=' + document.querySelector('#feedback_txt').value);
          //------------------------------------------------
        }
      }
    }, {
      key: 'displayMessage_faq',
      value: function displayMessage_faq() {
        if (checkEmailRegex(document.querySelector('#faq_email').value.trim())) {
          if (document.querySelector('#question_txt').value.trim().length == 0) {
            document.querySelector('#faq_msg').innerHTML = 'Please enter a message.';
            this.successMessage.style.background = '#ed3c61';
            this.successMessage.style.display = 'block';
          } else {
            //document.querySelector('#faq_email').value =''
            //document.querySelector('#question_txt').value =''
            //document.querySelector('#faq_msg').innerHTML ='Your message was sent successfully. Thanks';
            this.successMessage.style.background = '#01bcb6';
            this.successMessage.style.display = 'block';

            //---------- Post request for faq -------------------
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function () {
              if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                // XMLHttpRequest.DONE == 4
                if (xmlhttp.status == 200) {
                  document.querySelector('#faq_email').value = '';
                  document.querySelector('#question_txt').value = '';
                  document.querySelector('#faq_msg').innerHTML = 'Your message was sent successfully. Thanks';
                } else if (xmlhttp.status == 400) {
                  //alert('There was an error 400');
                } else {
                    //alert('something else other than 200 was returned');
                  }
              }
            };
            xmlhttp.open("POST", "https://askee.io/landing/faq", true);
            xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xmlhttp.send('qa_msg=' + document.querySelector('#question_txt').value + "&qa_email=" + document.querySelector('#faq_email').value);
            //------------------------------------------------
          }
        } else {
          this.successMessage.style.background = '#ed3c61';
          document.querySelector('#faq_msg').innerHTML = 'Please enter an email.';
          this.successMessage.style.display = 'block';
        }
      }
    }]);

    return FormSuccess;
  }();
  /* harmony export (immutable) */

  __webpack_exports__["a"] = FormSuccess;

  function checkEmailRegex(_email) {
    var result = false;
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
    if (regex.test(_email) === false) {
      result = false;
    } else {
      result = true;
    }
    return result;
  }

  /***/
},
/* 11 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  var SupportedBrowser = function SupportedBrowser() {
    _classCallCheck(this, SupportedBrowser);


    this.supportedDesktopBrowser = document.querySelector('.supported-desktop-browser');
    this.supportedIosBrowser = document.querySelector('.supported-ios-browser');
    this.supportedAndroidBrowser = document.querySelector('.supported-android-browser');

    this.supportedDesktopBrowserBlock = document.querySelector('.supported-desktop-browser-block');
    this.supportedIosBrowserBlock = document.querySelector('.supported-ios-browser-block');
    this.supportedAndroidBrowserBlock = document.querySelector('.supported-android-browser-block');

    if(document.getElementById('startmeetingarea')) {
      document.getElementById('startmeetingarea').style.display= 'flex';


      if(!!window.MSInputMethodContext && !!document.documentMode) {
              //document.getElementById('startmeetingarea').style.display= 'none';
              document.getElementById('notsupportedmsg').innerHTML= 'This browser doesnt support video conversations. <br> To use roundee.io, please try: <br><br> <a href="https://www.google.com/chrome/" style="color:#fff;text-decoration: underline;"> Chrome </a> | <a href="https://www.mozilla.org/en-US/firefox/new/" style="color:#fff;text-decoration: underline;"> FireFox </a> | <a href="https://www.opera.com/download" style="color:#fff;text-decoration: underline;"> Opera </a>';
              document.getElementById('notsupportedtxt').style.display= 'none';
              document.getElementById('notsupportedbtn').style.display= 'none';
              document.getElementById('notsupportedbtn2').style.display= 'none';

      } else if (navigator.userAgent.indexOf('Chrome') != -1) {
             if(navigator.userAgent.indexOf("Edge") !== -1){
                 document.getElementById('notsupportedmsg').innerHTML= 'This browser doesnt support video conversations. <br> To use roundee.io, please try: <br><br> <a href="https://www.google.com/chrome/" style="color:#fff;text-decoration: underline;"> Chrome </a> | <a href="https://www.mozilla.org/en-US/firefox/new/" style="color:#fff;text-decoration: underline;"> FireFox </a> | <a href="https://www.opera.com/download" style="color:#fff;text-decoration: underline;"> Opera </a>';
                 document.getElementById('notsupportedtxt').style.display= 'none';
                 document.getElementById('notsupportedbtn').style.display= 'none';
                 document.getElementById('notsupportedbtn2').style.display= 'none';

             }
      } else if (navigator.userAgent.indexOf('MSIE') != -1) {
            document.getElementById('notsupportedmsg').innerHTML= 'This browser is not compatible. <br> To use roundee.io, please try: <br><br> <a href="https://www.google.com/chrome/" style="color:#fff;text-decoration: underline;"> Chrome </a> | <a href="https://www.mozilla.org/en-US/firefox/new/" style="color:#fff;text-decoration: underline;"> FireFox </a> | <a href="https://www.opera.com/download" style="color:#fff;text-decoration: underline;"> Opera </a>';
            document.getElementById('notsupportedtxt').style.display= 'none';
            document.getElementById('notsupportedbtn').style.display= 'none';
            document.getElementById('notsupportedbtn2').style.display= 'none';

      }

      if(navigator.userAgent.match(/iPhone|iPad|iPod/i)) {
          if(navigator.userAgent.match('CriOS') || navigator.userAgent.match('FxiOS')) {
              document.getElementById('notsupportedmsg').innerHTML= 'This browser doesnt support video conversations. <br> To use roundee.io, please try: <br><br> Safari browser';
              document.getElementById('notsupportedtxt').style.display= 'none';
              document.getElementById('notsupportedbtn').style.display= 'none';
              document.getElementById('notsupportedbtn2').style.display= 'none';
          }
      }

      if(navigator.userAgent.match(/Android/i)) {
          if(navigator.userAgent.indexOf('Chrome') <= -1) {
              document.getElementById('notsupportedmsg').innerHTML= 'This browser doesnt support video conversations. <br> To use roundee.io, please try: <br><br> Google Chrome';
              document.getElementById('notsupportedtxt').style.display= 'none';
              document.getElementById('notsupportedbtn').style.display= 'none';
              document.getElementById('notsupportedbtn2').style.display= 'none';

          } else if(navigator.userAgent.indexOf('OPR') > -1) {
                document.getElementById('notsupportedmsg').innerHTML= 'This browser doesnt support video conversations. <br> To use roundee.io, please try: <br><br> Google Chrome';
                document.getElementById('notsupportedtxt').style.display= 'none';
                document.getElementById('notsupportedbtn').style.display= 'none';
                document.getElementById('notsupportedbtn2').style.display= 'none';

            }
      }
    }


    if (this.supportedDesktopBrowser && this.supportedIosBrowser && this.supportedAndroidBrowser) {
      var isMobile = {
        Android: function Android() {
          return navigator.userAgent.match(/Android/i);
        },
        iOS: function iOS() {
          return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
      };


      if (window.innerWidth <= 768) {
        this.supportedDesktopBrowser.style.display = 'none';
        this.supportedDesktopBrowserBlock.style.display = 'none';

        if (isMobile.iOS()) {
          this.supportedIosBrowser.style.display = 'block';
          this.supportedIosBrowserBlock.style.display = 'block';
        } else if (isMobile.Android()) {
          this.supportedAndroidBrowser.style.display = 'block';
          this.supportedAndroidBrowserBlock.style.display = 'block';
        }
      }
    }
  };
  /* harmony export (immutable) */

  __webpack_exports__["a"] = SupportedBrowser;

  /***/
}]
/******/);


function checkEmailRegex(_email) {
  var result = false;
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  if (regex.test(_email) === false) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

function schedulebtn() {
  var email_input =  document.getElementById('notsupportedtxt').value;
  if (email_input.trim() === '') {
    document.getElementById('email_err').style.display = 'block';
  } else {
    if (checkEmailRegex(email_input.trim())) {
      window.location.replace("https://askee.io/schedule-a-meeting.php?id=" + email_input.trim());
    } else {
      document.getElementById('email_err').style.display = 'block';
    }
  }
}

function changemobiledt() {
  var dt = document.getElementById('date-and-time').value;
  if(dt) {
      var weekName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var monthName = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      var starttime = new Date(dt);
      //var returnvalue = weekName[starttime.getDay()]+", "+monthName[starttime.getMonth()]+" "+starttime.getDate()+" "+starttime.getFullYear();
      //var returnvalue = weekName[starttime.getDay()]+", "+monthName[starttime.getMonth()]+" "+starttime.getDate();
      //var returnvalue = weekName[starttime.getDay()]+", "+monthName[starttime.getMonth()]+" "+ moment(dt).format('DD');
      //console.log('year:' + moment(dt).format('YYYY'));
      var returnvalue = moment(dt).format('dddd')+", "+moment(dt).format('MMMM') +" "+moment(dt).format('DD') + " " + moment(dt).format('YYYY');
      sessionStorage.setItem('select_dt', returnvalue);

      document.getElementById('selecteddate').innerHTML = returnvalue;
  }
}

function create_schedule() {

    //var userAgent = navigator.userAgent;
    var ismobiletype = false;
    // if(userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) ){
    //     ismobiletype = true;
    // }

    if($(window).width()< 769) {
      ismobiletype = true;
    }

    // if(!ismobiletype) {
    //   console.log(document.getElementById('sel_time').innerHTML);
    //   if($( "#time option:selected" ).val()=='0') {
    //     document.getElementById('warning_msg').innerHTML = 'Please select a time for this conference.';
    //     return;
    //   }
    // }

    var selected_time='';

    if(!ismobiletype) {
      selected_time = document.getElementById('sel_time').innerHTML;
      if(selected_time=='0') {
        document.getElementById('warning_msg').innerHTML = 'Please select a time for this conference.';
        return;
      }
    }

    var tm = document.getElementById('time');
    for(var i=0;i<tm.length;i++) {
      var optiontext = tm.options[i].text;
      if(optiontext==selected_time) {
        selected_time = tm.options[i].value;
      }
    }

    var date_selected = document.getElementById('datepicker').value;
    if(ismobiletype) {
      var date_selected_str = document.getElementById('date-and-time').value;
      //var temp_dt =  new Date(document.getElementById('date-and-time').value);
      date_selected = moment(date_selected_str).format('MM')+'/' + moment(date_selected_str).format('DD') +'/' + moment(date_selected_str).format('YYYY');
    }
    var title =  document.getElementById('meetingtitle').value;
    if(!title) {
      title = getQueryString('id').split('@')[0] +"'s meeting";
    }
    //var time =  $( "#time option:selected" ).val();
    //var time_str =  $( "#time option:selected" ).text();

    var time =  selected_time;

    if(ismobiletype) {
      var temp_str = document.getElementById('date-and-time').value;
      time = moment(temp_str).format('HH:mm');
      //time = document.getElementById('date-and-time').value;
    }
    var dur =  $( "#duration option:selected" ).val();

    var reminder = document.getElementById("reminder");
    //var time_zone =  $( "#set-time-zone option:selected" ).val();
    var time_offset = document.getElementById('sel_set-time-zone').innerHTML;
    if(ismobiletype) {
       time_offset = $( "#set-time-zone option:selected" ).text();
    }

    if(!dur) {
      dur = '15';
    }

    var owner =  getQueryString('id');
    sessionStorage.setItem('date_selected', date_selected);
    sessionStorage.setItem('conf_title', title);
    sessionStorage.setItem('time', time);
    sessionStorage.setItem('dur', dur);
    sessionStorage.setItem('time_zone', time_offset);
    //sessionStorage.setItem('time_offset', time_offset.substring(1,10));

    var timeString = time + ':00';
    var dateObj = new Date(date_selected + ' ' + timeString);

    var selected_str = moment(dateObj).format('YYYY-MM-DDTHH:mm')+':00';

    if(ismobiletype) {
      dateObj = moment(document.getElementById('date-and-time').value).format('YYYY-MM-DDTHH:mm')+':00';
      selected_str = dateObj;
    }

    //var test_selected_dt = new Date(dateObj);
    //var test_selected_str = new Date(Date.parse(test_selected_dt));


    //alert(test_selected_str);
    //return;

    var nowdate = new Date(Date.parse(dateObj) + (1000*60*dur));


    var hour = nowdate.getHours();
    if(hour < 9) {
      hour = '0' + hour;
    }

    //var min = nowdate.getUTCMinutes();
    var min = nowdate.getMinutes();
    if(min < 9) {
      min = '0' + min;
    }

    if(ismobiletype) {
       var dt_str = document.getElementById('date-and-time').value;
       var date = moment(dt_str).add(dur, 'minutes');
       var my_end_dt = date.format('HH:mm');
       sessionStorage.setItem('end_date', my_end_dt);
    } else {
      sessionStorage.setItem('end_date', hour + ":"+ min);
    }

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            sessionStorage.setItem('conf_id', xmlhttp.response);
            window.location.replace("/conference-call-created.php");
        } else if (xmlhttp.status == 400) {
            document.getElementById('warning_msg').innerHTML = 'You can only schedule a meeting more than 15 min from now.';
        } else {
            document.getElementById('warning_msg').innerHTML = 'Can not create a meeting at this time.';
          }
      }
    };

    var dateObj_iso = '';
    if(ismobiletype) {
      var systemtimezone = getTimezoneOffset();
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      if(timezoneoffset==systemtimezone) {
          dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();
      }
      else {
          if(timezoneoffset.indexOf('+') !==-1) {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var sys_min = systemtimezone.substring(3,5);
            var dif = (systemtimezone - timezoneoffset) / 100;

            if(se_min=='30') {
              dif = dif - 0.2;
            }
            else if(se_min=='45') {    //Asia/Kathmandu
              dif = dif - 0.3;
            }

            if(sys_min=='30') {
              dif = dif + 0.2;
            }

            var m = moment(dateObj).add(dif,'hours');
            dateObj_iso = m.toISOString();
          } else {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var system_hour = systemtimezone.substring(1,3);
            var sys_min = systemtimezone.substring(3,5);
            var diff_btw = system_hour - se_hour;
            if(sys_min=='30') {
              diff_btw = diff_btw + 0.50;
            }

            if(se_min=='30') {
              diff_btw = diff_btw + 0.50;
            }
            //var dif = (systemtimezone - timezoneoffset) / 100;
            //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');

            var m ='';
            if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
              m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
            } else {
              if(diff_btw<0) {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).add(diff_btw ,'hours');
              } else {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).subtract(diff_btw  ,'hours');
              }
            }

            dateObj_iso = m.toISOString();


          }
      }
      //dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();
    } else {
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      var systemtimezone = getTimezoneOffset();
      if(timezoneoffset==systemtimezone) {
        dateObj_iso = dateObj.toISOString();
      } else {
        //dateObj_iso = dateObj.toISOString();
        if(timezoneoffset.indexOf('+') !==-1) {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          //var sys_hour = systemtimezone.substring(1,3);
          var sys_min = systemtimezone.substring(3,5);
          var dif = (systemtimezone - timezoneoffset) / 100;
          if(se_min=='30') {
            dif = dif - 0.2;
          }
          else if(se_min=='45') {    //Asia/Kathmandu
            dif = dif - 0.3;
          }

          if(sys_min=='30') {
            dif = dif + 0.2;
          }

          var m = moment(dateObj).add(dif,'hours');
          dateObj_iso = m.toISOString();
        } else {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          var system_hour = systemtimezone.substring(1,3);
          var sys_min = systemtimezone.substring(3,5);
          var diff_btw = system_hour - se_hour;
          //var dif = (systemtimezone - timezoneoffset) / 100;
          if(sys_min=='30') {
            diff_btw = diff_btw + 0.50;
          }
          if(se_min=='30') {
            diff_btw = diff_btw + 0.50;
          }

          //var m = moment(dateObj).subtract(se_hour,'hours').add(dif, 'hours');
          //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');
          var m ='';
          if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
            m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
          } else {
            if(diff_btw<0) {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).add(diff_btw ,'hours');
            } else {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).subtract(diff_btw  ,'hours');
            }
          }

          dateObj_iso = m.toISOString();
        }
      }
    }

    var device_type = getDevice();

    xmlhttp.open("POST", "https://askee.io/landing/cr_schedule", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send('title=' + title + "&owner=" + owner + "&startdt=" + dateObj_iso + "&selected_time=" + selected_str +"&dur=" + dur + "&tzoffset=" + time_offset.substring(4,10) +"&tzname=" + time_offset.substring(12) +"&reminder=" + reminder.checked + "&device_type=" + device_type);
}

function getDevice() {
    var userAgent = navigator.userAgent;
    var device = '';
    if(userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) ){
        if(userAgent.match(/iPhone|iPod/i)){
          device ='Mobile_iOS'
        } else {
          device ='Mobile_Android'
        }
    } else {
        if(userAgent.indexOf("Opera") !== -1 || userAgent.indexOf("OPR") !== -1){
            device ='PC_opera';
        }
        else if (userAgent.indexOf("Firefox") !== -1){
            device ='PC_firefox';
        }
        else if (userAgent.indexOf("Chrome") !== -1){
            device ='PC_chrome';
        }
        else if(userAgent.indexOf("Safari") !== -1){
            device ='PC_safari';
        }
    }
    return device;
}

function edit_schedule() {

    var userAgent = navigator.userAgent;
    var ismobiletype = false;

    // if(userAgent.match(/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo\/|Opera Mobi/i) ){
    //     ismobiletype = true;
    // }


    if($(window).width()< 769) {
      ismobiletype = true;
    }

    var selected_time='';

    if(!ismobiletype) {
      selected_time = document.getElementById('sel_time').innerHTML;
      if(selected_time=='0') {
        document.getElementById('warning_msg').innerHTML = 'Please select a time for this conference.';
        return;
      }
    }

    var tm= document.getElementById('time');
    for(var i=0;i<tm.length;i++) {
      var optiontext = tm.options[i].text;
      if(optiontext==selected_time) {
        selected_time = tm.options[i].value;
      }
    }


    var date_selected = document.getElementById('datepicker').value;

    if(ismobiletype) {
      var date_selected_str = document.getElementById('date-and-time').value;
      date_selected = moment(date_selected_str).format('MM')+'/' + moment(date_selected_str).format('DD') +'/' + moment(date_selected_str).format('YYYY');
    }

    var title =  document.getElementById('meetingtitle').value;
    if(!title) {
      title = getQueryString('id').split('@')[0] +"'s meeting";
    }

    var time = selected_time;

    if(ismobiletype) {
      var temp_str = document.getElementById('date-and-time').value;
      time = moment(temp_str).format('HH:mm');
    }

    //var time =  $( "#time option:selected" ).val();
    //var time_str =  $( "#time option:selected" ).text();
    //var dur =  $( "#duration option:selected" ).val();
    var dur = document.getElementById('sel_duration').innerHTML.split(' min')[0];
    if(ismobiletype) {
      dur = $( "#duration option:selected" ).val();
    }

    var reminder = document.getElementById("reminder");

    var time_offset = document.getElementById('sel_set-time-zone').innerHTML;
    if(ismobiletype) {
       time_offset = $( "#set-time-zone option:selected" ).text();
    }

    if(!dur) {
      dur = '15';
    }

    var owner =  getQueryString('id');
    sessionStorage.setItem('date_selected', date_selected);
    sessionStorage.setItem('conf_title', title);
    sessionStorage.setItem('time', time);
    sessionStorage.setItem('dur', dur);
    sessionStorage.setItem('time_zone', time_offset);
    //sessionStorage.setItem('time_offset', time_offset.substring(1,10));

    var timeString = time + ':00';
    var dateObj = new Date(date_selected + ' ' + timeString);
    var selected_str = moment(dateObj).format('YYYY-MM-DDTHH:mm')+':00';

    var nowdate = new Date(Date.parse(dateObj) + (1000*60*dur));
    var hour = nowdate.getHours();
    if(hour < 9) {
      hour = '0' + hour;
    }

    //var min = nowdate.getUTCMinutes();
    var min = nowdate.getMinutes();
    if(min < 9) {
      min = '0' + min;
    }

    sessionStorage.setItem('end_date', hour + ":"+ min);
    var room_id =  getQueryString('room_id');

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status == 200) {
            sessionStorage.setItem('conf_id', room_id);
            window.location.replace("/conference-call-updated.php");
        } else if (xmlhttp.status == 400) {
          document.getElementById('warning_msg').innerHTML = 'You can only schedule a meeting more than 15 min from now.';
          //alert('Please select an appropriate time.');

        } else {
          document.getElementById('warning_msg').innerHTML = 'Can not edit the meeting at this time.';
          //alert('Can not edit.');
        }
      }
    };
    //alert(time_offset.substring(4,10));

    var dateObj_iso = '';
    if(ismobiletype) {
      //dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();

      var systemtimezone = getTimezoneOffset();
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      if(timezoneoffset==systemtimezone) {
          dateObj_iso = moment(document.getElementById('date-and-time').value).utc().format();
      }
      else {
          if(timezoneoffset.indexOf('+') !==-1) {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var sys_min = systemtimezone.substring(3,5);
            var dif = (systemtimezone - timezoneoffset) / 100;

            if(se_min=='30') {
              dif = dif - 0.2;
            }
            else if(se_min=='45') {    //Asia/Kathmandu
              dif = dif - 0.3;
            }

            if(sys_min=='30') {
              dif = dif + 0.2;
            }

            var m = moment(dateObj).add(dif,'hours');
            dateObj_iso = m.toISOString();
          } else {
            var se_hour = timezoneoffset.substring(1,3);
            var se_min = timezoneoffset.substring(3,5);
            var system_hour = systemtimezone.substring(1,3);
            var sys_min = systemtimezone.substring(3,5);
            var diff_btw = system_hour - se_hour;
            if(sys_min=='30') {
              diff_btw = diff_btw + 0.50;
            }

            if(se_min=='30') {
              diff_btw = diff_btw + 0.50;
            }

            var dif = (systemtimezone - timezoneoffset) / 100;
            //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');

            var m ='';
            if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
              m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
            } else {
              if(diff_btw<0) {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).add(diff_btw ,'hours');
              } else {
                diff_btw = Math.abs(diff_btw);
                m = moment(dateObj).subtract(diff_btw  ,'hours');
              }
            }
            dateObj_iso = m.toISOString();
          }
      }


    } else {
      //dateObj_iso = dateObj.toISOString();
      var timezoneoffset = time_offset.substring(4,10).replace(':','');
      var systemtimezone = getTimezoneOffset();
      if(timezoneoffset==systemtimezone) {
        dateObj_iso = dateObj.toISOString();
      } else {
        dateObj_iso = dateObj.toISOString();
        if(timezoneoffset.indexOf('+') !==-1) {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          var sys_min = systemtimezone.substring(3,5);
          var dif = (systemtimezone - timezoneoffset) / 100;
          if(se_min=='30') {
            dif = dif - 0.2;
          }
          else if(se_min=='45') {    //Asia/Kathmandu
            dif = dif - 0.3;
          }

          if(sys_min=='30') {
            dif = dif + 0.2;
          }
          var m = moment(dateObj).add(dif,'hours');
          dateObj_iso = m.toISOString();
        } else {
          var se_hour = timezoneoffset.substring(1,3);
          var se_min = timezoneoffset.substring(3,5);
          var system_hour = systemtimezone.substring(1,3);
          var sys_min = systemtimezone.substring(3,5);
          var diff_btw = system_hour - se_hour;
          var dif = (systemtimezone - timezoneoffset) / 100;
          if(sys_min=='30') {
            diff_btw = diff_btw + 0.50;
          }

          if(se_min=='30') {
            diff_btw = diff_btw + 0.50;
          }

          //var m = moment(dateObj).subtract(se_hour,'hours').add(dif, 'hours');
          //var m = moment(dateObj).add(se_hour * 2 + diff_btw ,'hours');

          var m ='';
          if(timezoneoffset.substring(0,1) !== systemtimezone.substring(0,1)) {
            m = moment(dateObj).add(se_hour * 2 + diff_btw  ,'hours');
          } else {
            if(diff_btw<0) {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).add(diff_btw ,'hours');
            } else {
              diff_btw = Math.abs(diff_btw);
              m = moment(dateObj).subtract(diff_btw  ,'hours');
            }
          }

          dateObj_iso = m.toISOString();
        }
      }
    }

    xmlhttp.open("POST", "https://askee.io/landing/mod_schedule", true);
    xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xmlhttp.send('title=' + title + "&owner=" + owner + "&room_id=" + room_id + "&startdt=" + dateObj_iso + "&selected_time=" + selected_str +"&dur=" + dur +"&tzoffset=" + time_offset.substring(4,10) +"&tzname=" + time_offset.substring(12) +"&reminder=" + reminder.checked);
}

var getQueryString = function getQueryString(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
  };


function cancel_meeting() {
  console.log(getQueryString('room_id') + '   ' + getQueryString('id'));

  if(getQueryString('room_id')) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
          if (xmlhttp.status == 200) {
              window.location.replace("/meeting-canceled.php");
          } else if (xmlhttp.status == 400) {
            console.log('delete: 400');
            window.location.replace("/noteditcancel.php");
          } else {
            console.log('delete: Not done');
            window.location.replace("/noteditcancel.php");
            }
        }
      };

      xmlhttp.open("POST", "https://askee.io/landing/del_schedule", true);
      xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      xmlhttp.send('room_id=' + getQueryString('room_id') + '&owner=' +  getQueryString('id'));
  }

}


function checkEmailRegex_start(_email) {
  var result = false;
  var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
  if (regex.test(_email) === false) {
    result = false;
  } else {
    result = true;
  }
  return result;
}

function startmeeting() {
    var startMeetingBtn = document.querySelector('.start-meeting-btn');
    var emailInput = document.querySelector('.email-input');
    var emailErrorMessage = document.querySelector('.email-error-message');

    if (emailInput.value.trim() === '') {
          emailErrorMessage.style.display = 'block';
        } else {
          if (checkEmailRegex_start(emailInput.value.trim())) {
            document.getElementById('notsupportedtxt').value = emailInput.value.trim();
            return true;
          } else {
            emailErrorMessage.style.display = 'block';
          }
        }

    return false;
}
