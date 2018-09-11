/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_js__ = __webpack_require__(/*! ./block/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay9ibG9jay5qcyc7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!****************************!*\
  !*** ./src/block/block.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ./style.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);\n/**\n * BLOCK: Book Metadata\n *\n * Registering a dynamic block with Gutenberg.\n * Renders a block with to store metadata about a book in wp_postmeta table.\n */\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar PlainText = wp.editor.PlainText;\n\n\nregisterBlockType('book-list/book-metadata-block', {\n\ttitle: __('Book Metadata Example'),\n\ticon: 'book',\n\tcategory: 'common',\n\tkeywords: [__('Book'), __('Book information')],\n\tattributes: {\n\t\tauthor: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'book_author'\n\t\t},\n\t\tpublisher: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'book_publisher'\n\t\t},\n\t\tsynopsis: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'book_synopsis'\n\t\t},\n\t\tlanguage: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'book_language'\n\t\t},\n\t\tpub_year: {\n\t\t\ttype: 'string',\n\t\t\tsource: 'meta',\n\t\t\tmeta: 'book_year'\n\t\t}\n\t},\n\tedit: function edit(props) {\n\t\tfunction onAuthorChange(thisValue) {\n\t\t\tprops.setAttributes({ author: thisValue });\n\t\t}\n\n\t\tfunction onPublisherChange(thisValue) {\n\t\t\tprops.setAttributes({ publisher: thisValue });\n\t\t}\n\n\t\tfunction onSynopsisChange(thisValue) {\n\t\t\tprops.setAttributes({ synopsis: thisValue });\n\t\t}\n\n\t\tfunction onLanguageChange(thisValue) {\n\t\t\tprops.setAttributes({ language: thisValue });\n\t\t}\n\n\t\tfunction onYearChange(thisValue) {\n\t\t\tprops.setAttributes({ pub_year: thisValue });\n\t\t}\n\n\t\treturn wp.element.createElement(\n\t\t\t'div',\n\t\t\t{ id: 'book-metadata' },\n\t\t\twp.element.createElement(\n\t\t\t\t'h3',\n\t\t\t\tnull,\n\t\t\t\t'Book metadata'\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'book-author' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Book Author'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(PlainText, {\n\t\t\t\t\tplaceholder: __('Book author'),\n\t\t\t\t\tvalue: props.attributes.author || '',\n\t\t\t\t\tonChange: onAuthorChange,\n\t\t\t\t\tmaxlength: '50'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'book-synopsis' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Synopsis'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(PlainText, {\n\t\t\t\t\tplaceholder: __('Synopsis'),\n\t\t\t\t\tvalue: props.attributes.synopsis || '',\n\t\t\t\t\tonChange: onSynopsisChange,\n\t\t\t\t\t'aria-multiline': 'true',\n\t\t\t\t\trows: '6',\n\t\t\t\t\tcolumns: '30',\n\t\t\t\t\tmaxlength: '250'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'book-publisher' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Publisher'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(PlainText, {\n\t\t\t\t\tplaceholder: __('Publisher'),\n\t\t\t\t\tvalue: props.attributes.publisher || '',\n\t\t\t\t\tonChange: onPublisherChange,\n\t\t\t\t\tmaxlength: '50'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'book-language' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Language'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(PlainText, {\n\t\t\t\t\tplaceholder: __('Language'),\n\t\t\t\t\tvalue: props.attributes.language || '',\n\t\t\t\t\tonChange: onLanguageChange,\n\t\t\t\t\tmaxlength: '50'\n\t\t\t\t})\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t'div',\n\t\t\t\t{ className: 'book-year' },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t'label',\n\t\t\t\t\tnull,\n\t\t\t\t\t'Year of publication'\n\t\t\t\t),\n\t\t\t\twp.element.createElement(PlainText, {\n\t\t\t\t\tplaceholder: __('Year of publication'),\n\t\t\t\t\tvalue: props.attributes.pub_year || '',\n\t\t\t\t\tonChange: onYearChange,\n\t\t\t\t\tmaxlength: '4'\n\t\t\t\t})\n\t\t\t)\n\t\t);\n\t},\n\tsave: function save(props) {\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay5qcz85MjFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQkxPQ0s6IEJvb2sgTWV0YWRhdGFcbiAqXG4gKiBSZWdpc3RlcmluZyBhIGR5bmFtaWMgYmxvY2sgd2l0aCBHdXRlbmJlcmcuXG4gKiBSZW5kZXJzIGEgYmxvY2sgd2l0aCB0byBzdG9yZSBtZXRhZGF0YSBhYm91dCBhIGJvb2sgaW4gd3BfcG9zdG1ldGEgdGFibGUuXG4gKi9cblxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgUGxhaW5UZXh0ID0gd3AuZWRpdG9yLlBsYWluVGV4dDtcblxuXG5yZWdpc3RlckJsb2NrVHlwZSgnYm9vay1saXN0L2Jvb2stbWV0YWRhdGEtYmxvY2snLCB7XG5cdHRpdGxlOiBfXygnQm9vayBNZXRhZGF0YSBFeGFtcGxlJyksXG5cdGljb246ICdib29rJyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRrZXl3b3JkczogW19fKCdCb29rJyksIF9fKCdCb29rIGluZm9ybWF0aW9uJyldLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0YXV0aG9yOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ21ldGEnLFxuXHRcdFx0bWV0YTogJ2Jvb2tfYXV0aG9yJ1xuXHRcdH0sXG5cdFx0cHVibGlzaGVyOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ21ldGEnLFxuXHRcdFx0bWV0YTogJ2Jvb2tfcHVibGlzaGVyJ1xuXHRcdH0sXG5cdFx0c3lub3BzaXM6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0c291cmNlOiAnbWV0YScsXG5cdFx0XHRtZXRhOiAnYm9va19zeW5vcHNpcydcblx0XHR9LFxuXHRcdGxhbmd1YWdlOiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdHNvdXJjZTogJ21ldGEnLFxuXHRcdFx0bWV0YTogJ2Jvb2tfbGFuZ3VhZ2UnXG5cdFx0fSxcblx0XHRwdWJfeWVhcjoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRzb3VyY2U6ICdtZXRhJyxcblx0XHRcdG1ldGE6ICdib29rX3llYXInXG5cdFx0fVxuXHR9LFxuXHRlZGl0OiBmdW5jdGlvbiBlZGl0KHByb3BzKSB7XG5cdFx0ZnVuY3Rpb24gb25BdXRob3JDaGFuZ2UodGhpc1ZhbHVlKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgYXV0aG9yOiB0aGlzVmFsdWUgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25QdWJsaXNoZXJDaGFuZ2UodGhpc1ZhbHVlKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcHVibGlzaGVyOiB0aGlzVmFsdWUgfSk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gb25TeW5vcHNpc0NoYW5nZSh0aGlzVmFsdWUpIHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoeyBzeW5vcHNpczogdGhpc1ZhbHVlIH0pO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG9uTGFuZ3VhZ2VDaGFuZ2UodGhpc1ZhbHVlKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgbGFuZ3VhZ2U6IHRoaXNWYWx1ZSB9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBvblllYXJDaGFuZ2UodGhpc1ZhbHVlKSB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKHsgcHViX3llYXI6IHRoaXNWYWx1ZSB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0J2RpdicsXG5cdFx0XHR7IGlkOiAnYm9vay1tZXRhZGF0YScgfSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2gzJyxcblx0XHRcdFx0bnVsbCxcblx0XHRcdFx0J0Jvb2sgbWV0YWRhdGEnXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdib29rLWF1dGhvcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnQm9vayBBdXRob3InXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ0Jvb2sgYXV0aG9yJyksXG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMuYXV0aG9yIHx8ICcnLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkF1dGhvckNoYW5nZSxcblx0XHRcdFx0XHRtYXhsZW5ndGg6ICc1MCdcblx0XHRcdFx0fSlcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdCdkaXYnLFxuXHRcdFx0XHR7IGNsYXNzTmFtZTogJ2Jvb2stc3lub3BzaXMnIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J1N5bm9wc2lzJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdTeW5vcHNpcycpLFxuXHRcdFx0XHRcdHZhbHVlOiBwcm9wcy5hdHRyaWJ1dGVzLnN5bm9wc2lzIHx8ICcnLFxuXHRcdFx0XHRcdG9uQ2hhbmdlOiBvblN5bm9wc2lzQ2hhbmdlLFxuXHRcdFx0XHRcdCdhcmlhLW11bHRpbGluZSc6ICd0cnVlJyxcblx0XHRcdFx0XHRyb3dzOiAnNicsXG5cdFx0XHRcdFx0Y29sdW1uczogJzMwJyxcblx0XHRcdFx0XHRtYXhsZW5ndGg6ICcyNTAnXG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdib29rLXB1Ymxpc2hlcicgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnUHVibGlzaGVyJ1xuXHRcdFx0XHQpLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUGxhaW5UZXh0LCB7XG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI6IF9fKCdQdWJsaXNoZXInKSxcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5wdWJsaXNoZXIgfHwgJycsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uUHVibGlzaGVyQ2hhbmdlLFxuXHRcdFx0XHRcdG1heGxlbmd0aDogJzUwJ1xuXHRcdFx0XHR9KVxuXHRcdFx0KSxcblx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0J2RpdicsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiAnYm9vay1sYW5ndWFnZScgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdCdsYWJlbCcsXG5cdFx0XHRcdFx0bnVsbCxcblx0XHRcdFx0XHQnTGFuZ3VhZ2UnXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ0xhbmd1YWdlJyksXG5cdFx0XHRcdFx0dmFsdWU6IHByb3BzLmF0dHJpYnV0ZXMubGFuZ3VhZ2UgfHwgJycsXG5cdFx0XHRcdFx0b25DaGFuZ2U6IG9uTGFuZ3VhZ2VDaGFuZ2UsXG5cdFx0XHRcdFx0bWF4bGVuZ3RoOiAnNTAnXG5cdFx0XHRcdH0pXG5cdFx0XHQpLFxuXHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHQnZGl2Jyxcblx0XHRcdFx0eyBjbGFzc05hbWU6ICdib29rLXllYXInIH0sXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHQnbGFiZWwnLFxuXHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0J1llYXIgb2YgcHVibGljYXRpb24nXG5cdFx0XHRcdCksXG5cdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChQbGFpblRleHQsIHtcblx0XHRcdFx0XHRwbGFjZWhvbGRlcjogX18oJ1llYXIgb2YgcHVibGljYXRpb24nKSxcblx0XHRcdFx0XHR2YWx1ZTogcHJvcHMuYXR0cmlidXRlcy5wdWJfeWVhciB8fCAnJyxcblx0XHRcdFx0XHRvbkNoYW5nZTogb25ZZWFyQ2hhbmdlLFxuXHRcdFx0XHRcdG1heGxlbmd0aDogJzQnXG5cdFx0XHRcdH0pXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblx0c2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);