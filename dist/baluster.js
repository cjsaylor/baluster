(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("baluster", [], factory);
	else if(typeof exports === 'object')
		exports["baluster"] = factory();
	else
		root["baluster"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/baluster.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/baluster.js":
/*!*************************!*\
  !*** ./src/baluster.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// Maximum industry required width between balusters\nconst MAXIMUM_WIDTH = 4\n\nconst BALUSTER_2X2 = 1.75\n\nfunction estimateQuantity(widthBetweenPosts, balusterWidth = BALUSTER_2X2) {\n\treturn Math.floor(widthBetweenPosts / (MAXIMUM_WIDTH + balusterWidth))\n}\n\nfunction spacingMeasurements(widthBetweenPosts, balusterQuantity, balusterWidth = BALUSTER_2X2) {\n\tconst spacing = calculateSpacing(widthBetweenPosts, balusterQuantity, balusterWidth)\n\treturn [...Array(balusterQuantity).keys()]\n\t\t.reduce((acc, i) => {\n\t\t\tif (!i) {\n\t\t\t\treturn [spacing + balusterWidth / 2]\n\t\t\t}\n\t\t\treturn [\n\t\t\t\t...acc,\n\t\t\t\tacc[i - 1] + spacing + balusterWidth\n\t\t\t]\n\t\t}, [])\n}\n\nfunction calculateSpacing(widthBetweenPosts, balusterQuantity, balusterWidth = BALUSTER_2X2) {\n\tconst spacing = (widthBetweenPosts - (balusterQuantity * balusterWidth)) / (balusterQuantity + 1)\n\tif (spacing > MAXIMUM_WIDTH) {\n\t\tthrow \"Too few balusters for given width.\"\n\t}\n\treturn spacing\n}\n\nfunction nearest16th(decimal) {\n\treturn Math.round((decimal - Math.floor(decimal)) * 16)\n}\n\nmodule.exports = {\n\testimateQuantity,\n\tspacingMeasurements,\n\tcalculateSpacing,\n\tnearest16th\n}\n\n//# sourceURL=webpack://baluster/./src/baluster.js?");

/***/ })

/******/ });
});