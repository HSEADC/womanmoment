/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 982:
/***/ (() => {

// чтобы поиск открывался при нажатии на инпут
function openDiv() {
  var linksList = document.querySelector('.list');
  linksList.classList.remove('hiddenList');
}

function liveSearch() {
  // Получаем значение поискового поля
  var input = document.querySelector('.search_input');
  var filteredInput = input.value.toUpperCase(); // Получаем элементы для поиска

  var items = document.querySelectorAll('.searchable'); // Проходимся циклом по всем элементам

  for (var i = 0; i < items.length; i++) {
    var item = items[i]; // Получаем текст элемента

    var text = item.textContent || item.innerText; // Проверяем, содержит ли текст значение поискового поля

    if (text.toUpperCase().indexOf(filteredInput) > -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
} // Добавляем обработчик события на ввод текста в поисковое поле


document.querySelector('.search_input').addEventListener('input', liveSearch); // чтобы поиск скрывался при нажатии на другой блок

function focusOut() {
  var linksList = document.querySelector('.list');
  linksList.classList.add('hiddenList');
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/* harmony import */ var _javascript_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(982);
/* harmony import */ var _javascript_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_javascript_search__WEBPACK_IMPORTED_MODULE_0__);


})();

/******/ })()
;