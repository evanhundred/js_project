/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_title_splash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/title_splash */ \"./src/scripts/title_splash.js\");\n/* harmony import */ var _scripts_main_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/main-content */ \"./src/scripts/main-content.js\");\n// import Fetcher from \"./scripts/fetcher\";\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const title = document.getElementById(\"title\");\n  new _scripts_title_splash__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title);\n  const main = document.getElementById(\"main-content\");\n  new _scripts_main_content__WEBPACK_IMPORTED_MODULE_1__[\"default\"](main);\n});\n\n// console.log(\"Hello World\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDaUQ7QUFDQTtBQUVqREUsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxNQUFNO0VBQ2xELE1BQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxjQUFjLENBQUMsT0FBTyxDQUFDO0VBQzlDLElBQUlMLDZEQUFXLENBQUNJLEtBQUssQ0FBQztFQUN0QixNQUFNRSxJQUFJLEdBQUdKLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUNwRCxJQUFJSiw2REFBVyxDQUFDSyxJQUFJLENBQUM7QUFDdkIsQ0FBQyxDQUFDOztBQUVGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9wdWxhdGlvbi10cmFja2VyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IEZldGNoZXIgZnJvbSBcIi4vc2NyaXB0cy9mZXRjaGVyXCI7XG5pbXBvcnQgVGl0bGVTcGxhc2ggZnJvbSBcIi4vc2NyaXB0cy90aXRsZV9zcGxhc2hcIjtcbmltcG9ydCBNYWluQ29udGVudCBmcm9tIFwiLi9zY3JpcHRzL21haW4tY29udGVudFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgbmV3IFRpdGxlU3BsYXNoKHRpdGxlKTtcbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbi1jb250ZW50XCIpO1xuICBuZXcgTWFpbkNvbnRlbnQobWFpbik7XG59KTtcblxuLy8gY29uc29sZS5sb2coXCJIZWxsbyBXb3JsZFwiKTtcbiJdLCJuYW1lcyI6WyJUaXRsZVNwbGFzaCIsIk1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGl0bGUiLCJnZXRFbGVtZW50QnlJZCIsIm1haW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/main-content.js":
/*!*************************************!*\
  !*** ./src/scripts/main-content.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MainContent {\n  constructor(ele) {\n    this.ele = ele;\n    let h2 = document.createElement(\"h2\");\n    h2.innerHTML = \"Fetch Data\";\n    let boundClick = this.handleClick.bind(this);\n    // this.controller = new AbortController();\n    h2.addEventListener(\"click\", boundClick);\n    ele.appendChild(h2);\n    let div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"sortSelector\");\n    ele.appendChild(div);\n\n    // this.doAction = firstAction;\n    // this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n\n  getData() {\n    const dataBlock = __webpack_require__(/*! ../../../../assets/2020_pop_by_state.json */ \"./assets/2020_pop_by_state.json\");\n    const dataTitle = \"2020 Census dataset\";\n    const obj = {\n      header: dataTitle,\n      data: dataBlock\n    };\n    return obj;\n  }\n  sortData() {\n    this.dataObject = this.getData();\n    const preSorted = {};\n    preSorted.header = this.dataObject.header;\n    preSorted.states = [];\n    this.dataObject.data.forEach(row => {\n      let newState = {};\n      newState.stateId = row[2];\n      newState.stateName = row[1];\n      newState.population = row[0];\n      preSorted.states.push(newState);\n    });\n    let sorted = {};\n    sorted.states = this.objSort(preSorted.states);\n    sorted.header = this.dataObject.header;\n    return sorted;\n  }\n  objSort(obj) {\n    let sorted = obj.sort((a, b) => {\n      if (a.stateName < b.stateName) return -1;\n      if (a.stateName > b.stateName) return 1;\n      return 0;\n    });\n    return sorted;\n  }\n  sortByName() {\n    let dataObject = this.sortData();\n    let dataHeader = dataObject.header;\n    let ul = document.querySelector(\".fetchResultSorted\");\n    let first_entry_processed = false;\n    for (let i = 0; i < dataObject.states.length; i++) {\n      if (!first_entry_processed) {\n        let li = document.createElement(\"li\");\n        li.innerText = dataHeader;\n        li.classList.add(\"data-header\");\n        ul.appendChild(li);\n        li = document.createElement(\"li\");\n        li.innerText = \"State: Population\";\n        li.classList.add(\"data-header\", \"subheader\");\n        ul.appendChild(li);\n        first_entry_processed = true;\n      } else {\n        let li = document.createElement(\"li\");\n        li.innerText = `${dataObject.states[i].stateName}: ${dataObject.states[i].population}`;\n        li.classList.add(\"item\");\n        ul.appendChild(li);\n      }\n    }\n  }\n  sortByPopulation() {\n    let dataObject = this.sortData();\n    let dataHeader = dataObject.header;\n    let ul = document.querySelector(\".fetchResultSorted\");\n    let li = document.createElement(\"li\");\n    li.innerText = \"sort by population\";\n    ul.appendChild(li);\n\n    // let first_entry_processed = false;\n    // for (let i = 0; i < dataObject.states.length; i++) {\n    //   if (!first_entry_processed) {\n    //     let li = document.createElement(\"li\");\n    //     li.innerText = dataHeader;\n    //     li.classList.add(\"data-header\");\n    //     ul.appendChild(li);\n    //     li = document.createElement(\"li\");\n    //     li.innerText = \"State: Population\";\n    //     li.classList.add(\"data-header\", \"subheader\");\n    //     ul.appendChild(li);\n    //     first_entry_processed = true;\n    //   } else {\n    //     let li = document.createElement(\"li\");\n    //     li.innerText = `${dataObject.states[i].stateName}: ${dataObject.states[i].population}`;\n    //     li.classList.add(\"item\");\n    //     ul.appendChild(li);\n    //   }\n    // }\n  }\n\n  // let this.doAction = firstAction;\n\n  handleClick(e) {\n    // e.stopPropogation();\n    // this.e = e;\n    this.firstAction(e);\n  }\n  firstAction(e) {\n    // this.ele.removeEventListener(\"click\", this.handleClick.bind(this));\n    // this.doAction = secondAction;\n\n    const dataObject = this.sortData();\n    const dataHeader = dataObject.header;\n    let dataEl = document.createElement(\"data\");\n    let dataUl = document.createElement(\"ul\");\n    // ul.setAttribute(\"id\", \"fetchResultSorted\");\n    dataUl.classList.add(\"fetchResultSorted\");\n    dataEl.appendChild(dataUl);\n    this.ele.appendChild(dataEl);\n    this.ele.children[0].innerText = \"data fetched!\";\n\n    // e.stopPropogation();\n\n    let ul = document.createElement(\"ul\");\n    // ul.classList.add(\"sortSelector\");\n    let li = document.createElement(\"li\");\n    li.classList.add(\"sortByName\");\n    li.innerText = \"Sort by Name\";\n    // debugger;\n    // li.addEventListener(\"click\", this.sortByName(this.dataObject));\n\n    ul.appendChild(li);\n    li = document.createElement(\"li\");\n    li.classList.add(\"sortByPopulation\");\n    li.innerText = \"Sort by Population\";\n    // li.addEventListener(\"click\", this.sortByPopulation(this.dataObject));\n    ul.appendChild(li);\n    document.getElementById(\"sortSelector\").appendChild(ul);\n\n    // e.stopPropogation();\n    // this.controller.abort();\n\n    document.querySelector(\".sortByName\").addEventListener(\"click\", this.sortByName(this.dataObject));\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContent);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ1IsU0FBUyxHQUFHLGVBQWU7O0lBRWhEOztJQUVBLElBQUlOLEVBQUUsR0FBR25DLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNyQztJQUNBLElBQUl1QyxFQUFFLEdBQUd4QyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxJQUFJLENBQUM7SUFDckN1QyxFQUFFLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFlBQVksQ0FBQztJQUM5QkgsRUFBRSxDQUFDQyxTQUFTLEdBQUcsY0FBYztJQUM3QjtJQUNBOztJQUVBTixFQUFFLENBQUM1QixXQUFXLENBQUNpQyxFQUFFLENBQUM7SUFFbEJBLEVBQUUsR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLElBQUksQ0FBQztJQUNqQ3VDLEVBQUUsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7SUFDcENILEVBQUUsQ0FBQ0MsU0FBUyxHQUFHLG9CQUFvQjtJQUNuQztJQUNBTixFQUFFLENBQUM1QixXQUFXLENBQUNpQyxFQUFFLENBQUM7SUFFbEJ4QyxRQUFRLENBQUNrRCxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMzQyxXQUFXLENBQUM0QixFQUFFLENBQUM7O0lBRXZEO0lBQ0E7O0lBRUFuQyxRQUFRLENBQ0xvQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQzVCOUIsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQzJCLFVBQVUsQ0FBQyxJQUFJLENBQUNmLFVBQVUsQ0FBQyxDQUFDO0VBQ2hFO0FBQ0Y7QUFFQSwrREFBZXRCLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3B1bGF0aW9uLXRyYWNrZXIvLi9zcmMvc2NyaXB0cy9tYWluLWNvbnRlbnQuanM/MzZlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBNYWluQ29udGVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZSkge1xuICAgIHRoaXMuZWxlID0gZWxlO1xuXG4gICAgbGV0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGgyLmlubmVySFRNTCA9IFwiRmV0Y2ggRGF0YVwiO1xuICAgIGxldCBib3VuZENsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgIC8vIHRoaXMuY29udHJvbGxlciA9IG5ldyBBYm9ydENvbnRyb2xsZXIoKTtcbiAgICBoMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYm91bmRDbGljayk7XG5cbiAgICBlbGUuYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic29ydFNlbGVjdG9yXCIpO1xuICAgIGVsZS5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgLy8gdGhpcy5kb0FjdGlvbiA9IGZpcnN0QWN0aW9uO1xuICAgIC8vIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgZ2V0RGF0YSgpIHtcbiAgICBjb25zdCBkYXRhQmxvY2sgPSByZXF1aXJlKFwiL2Fzc2V0cy8yMDIwX3BvcF9ieV9zdGF0ZS5qc29uXCIpO1xuICAgIGNvbnN0IGRhdGFUaXRsZSA9IFwiMjAyMCBDZW5zdXMgZGF0YXNldFwiO1xuICAgIGNvbnN0IG9iaiA9IHtcbiAgICAgIGhlYWRlcjogZGF0YVRpdGxlLFxuICAgICAgZGF0YTogZGF0YUJsb2NrLFxuICAgIH07XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIHNvcnREYXRhKCkge1xuICAgIHRoaXMuZGF0YU9iamVjdCA9IHRoaXMuZ2V0RGF0YSgpO1xuICAgIGNvbnN0IHByZVNvcnRlZCA9IHt9O1xuICAgIHByZVNvcnRlZC5oZWFkZXIgPSB0aGlzLmRhdGFPYmplY3QuaGVhZGVyO1xuICAgIHByZVNvcnRlZC5zdGF0ZXMgPSBbXTtcbiAgICB0aGlzLmRhdGFPYmplY3QuZGF0YS5mb3JFYWNoKChyb3cpID0+IHtcbiAgICAgIGxldCBuZXdTdGF0ZSA9IHt9O1xuICAgICAgbmV3U3RhdGUuc3RhdGVJZCA9IHJvd1syXTtcbiAgICAgIG5ld1N0YXRlLnN0YXRlTmFtZSA9IHJvd1sxXTtcbiAgICAgIG5ld1N0YXRlLnBvcHVsYXRpb24gPSByb3dbMF07XG4gICAgICBwcmVTb3J0ZWQuc3RhdGVzLnB1c2gobmV3U3RhdGUpO1xuICAgIH0pO1xuXG4gICAgbGV0IHNvcnRlZCA9IHt9O1xuICAgIHNvcnRlZC5zdGF0ZXMgPSB0aGlzLm9ialNvcnQocHJlU29ydGVkLnN0YXRlcyk7XG4gICAgc29ydGVkLmhlYWRlciA9IHRoaXMuZGF0YU9iamVjdC5oZWFkZXI7XG5cbiAgICByZXR1cm4gc29ydGVkO1xuICB9XG5cbiAgb2JqU29ydChvYmopIHtcbiAgICBsZXQgc29ydGVkID0gb2JqLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgIGlmIChhLnN0YXRlTmFtZSA8IGIuc3RhdGVOYW1lKSByZXR1cm4gLTE7XG4gICAgICBpZiAoYS5zdGF0ZU5hbWUgPiBiLnN0YXRlTmFtZSkgcmV0dXJuIDE7XG4gICAgICByZXR1cm4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBzb3J0ZWQ7XG4gIH1cblxuICBzb3J0QnlOYW1lKCkge1xuICAgIGxldCBkYXRhT2JqZWN0ID0gdGhpcy5zb3J0RGF0YSgpO1xuICAgIGxldCBkYXRhSGVhZGVyID0gZGF0YU9iamVjdC5oZWFkZXI7XG4gICAgbGV0IHVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mZXRjaFJlc3VsdFNvcnRlZFwiKTtcblxuICAgIGxldCBmaXJzdF9lbnRyeV9wcm9jZXNzZWQgPSBmYWxzZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFPYmplY3Quc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoIWZpcnN0X2VudHJ5X3Byb2Nlc3NlZCkge1xuICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgIGxpLmlubmVyVGV4dCA9IGRhdGFIZWFkZXI7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJkYXRhLWhlYWRlclwiKTtcbiAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gXCJTdGF0ZTogUG9wdWxhdGlvblwiO1xuICAgICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGF0YS1oZWFkZXJcIiwgXCJzdWJoZWFkZXJcIik7XG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgZmlyc3RfZW50cnlfcHJvY2Vzc2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0gYCR7ZGF0YU9iamVjdC5zdGF0ZXNbaV0uc3RhdGVOYW1lfTogJHtkYXRhT2JqZWN0LnN0YXRlc1tpXS5wb3B1bGF0aW9ufWA7XG4gICAgICAgIGxpLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xuICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc29ydEJ5UG9wdWxhdGlvbigpIHtcbiAgICBsZXQgZGF0YU9iamVjdCA9IHRoaXMuc29ydERhdGEoKTtcbiAgICBsZXQgZGF0YUhlYWRlciA9IGRhdGFPYmplY3QuaGVhZGVyO1xuICAgIGxldCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmV0Y2hSZXN1bHRTb3J0ZWRcIik7XG5cbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuaW5uZXJUZXh0ID0gXCJzb3J0IGJ5IHBvcHVsYXRpb25cIjtcbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICAvLyBsZXQgZmlyc3RfZW50cnlfcHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhT2JqZWN0LnN0YXRlcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgaWYgKCFmaXJzdF9lbnRyeV9wcm9jZXNzZWQpIHtcbiAgICAvLyAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIC8vICAgICBsaS5pbm5lclRleHQgPSBkYXRhSGVhZGVyO1xuICAgIC8vICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiZGF0YS1oZWFkZXJcIik7XG4gICAgLy8gICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcbiAgICAvLyAgICAgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgLy8gICAgIGxpLmlubmVyVGV4dCA9IFwiU3RhdGU6IFBvcHVsYXRpb25cIjtcbiAgICAvLyAgICAgbGkuY2xhc3NMaXN0LmFkZChcImRhdGEtaGVhZGVyXCIsIFwic3ViaGVhZGVyXCIpO1xuICAgIC8vICAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG4gICAgLy8gICAgIGZpcnN0X2VudHJ5X3Byb2Nlc3NlZCA9IHRydWU7XG4gICAgLy8gICB9IGVsc2Uge1xuICAgIC8vICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgLy8gICAgIGxpLmlubmVyVGV4dCA9IGAke2RhdGFPYmplY3Quc3RhdGVzW2ldLnN0YXRlTmFtZX06ICR7ZGF0YU9iamVjdC5zdGF0ZXNbaV0ucG9wdWxhdGlvbn1gO1xuICAgIC8vICAgICBsaS5jbGFzc0xpc3QuYWRkKFwiaXRlbVwiKTtcbiAgICAvLyAgICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIC8vIGxldCB0aGlzLmRvQWN0aW9uID0gZmlyc3RBY3Rpb247XG5cbiAgaGFuZGxlQ2xpY2soZSkge1xuICAgIC8vIGUuc3RvcFByb3BvZ2F0aW9uKCk7XG4gICAgLy8gdGhpcy5lID0gZTtcbiAgICB0aGlzLmZpcnN0QWN0aW9uKGUpO1xuICB9XG5cbiAgZmlyc3RBY3Rpb24oZSkge1xuICAgIC8vIHRoaXMuZWxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgIC8vIHRoaXMuZG9BY3Rpb24gPSBzZWNvbmRBY3Rpb247XG5cbiAgICBjb25zdCBkYXRhT2JqZWN0ID0gdGhpcy5zb3J0RGF0YSgpO1xuICAgIGNvbnN0IGRhdGFIZWFkZXIgPSBkYXRhT2JqZWN0LmhlYWRlcjtcblxuICAgIGxldCBkYXRhRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGF0YVwiKTtcbiAgICBsZXQgZGF0YVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIC8vIHVsLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZmV0Y2hSZXN1bHRTb3J0ZWRcIik7XG4gICAgZGF0YVVsLmNsYXNzTGlzdC5hZGQoXCJmZXRjaFJlc3VsdFNvcnRlZFwiKTtcbiAgICBkYXRhRWwuYXBwZW5kQ2hpbGQoZGF0YVVsKTtcbiAgICB0aGlzLmVsZS5hcHBlbmRDaGlsZChkYXRhRWwpO1xuICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiZGF0YSBmZXRjaGVkIVwiO1xuXG4gICAgLy8gZS5zdG9wUHJvcG9nYXRpb24oKTtcblxuICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAvLyB1bC5jbGFzc0xpc3QuYWRkKFwic29ydFNlbGVjdG9yXCIpO1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwic29ydEJ5TmFtZVwiKTtcbiAgICBsaS5pbm5lclRleHQgPSBcIlNvcnQgYnkgTmFtZVwiO1xuICAgIC8vIGRlYnVnZ2VyO1xuICAgIC8vIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNvcnRCeU5hbWUodGhpcy5kYXRhT2JqZWN0KSk7XG5cbiAgICB1bC5hcHBlbmRDaGlsZChsaSk7XG5cbiAgICBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5jbGFzc0xpc3QuYWRkKFwic29ydEJ5UG9wdWxhdGlvblwiKTtcbiAgICBsaS5pbm5lclRleHQgPSBcIlNvcnQgYnkgUG9wdWxhdGlvblwiO1xuICAgIC8vIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLnNvcnRCeVBvcHVsYXRpb24odGhpcy5kYXRhT2JqZWN0KSk7XG4gICAgdWwuYXBwZW5kQ2hpbGQobGkpO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0U2VsZWN0b3JcIikuYXBwZW5kQ2hpbGQodWwpO1xuXG4gICAgLy8gZS5zdG9wUHJvcG9nYXRpb24oKTtcbiAgICAvLyB0aGlzLmNvbnRyb2xsZXIuYWJvcnQoKTtcblxuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi5zb3J0QnlOYW1lXCIpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuc29ydEJ5TmFtZSh0aGlzLmRhdGFPYmplY3QpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGVudDtcbiJdLCJuYW1lcyI6WyJNYWluQ29udGVudCIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaDIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJib3VuZENsaWNrIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImFwcGVuZENoaWxkIiwiZGl2Iiwic2V0QXR0cmlidXRlIiwiZ2V0RGF0YSIsImRhdGFCbG9jayIsInJlcXVpcmUiLCJkYXRhVGl0bGUiLCJvYmoiLCJoZWFkZXIiLCJkYXRhIiwic29ydERhdGEiLCJkYXRhT2JqZWN0IiwicHJlU29ydGVkIiwic3RhdGVzIiwiZm9yRWFjaCIsInJvdyIsIm5ld1N0YXRlIiwic3RhdGVJZCIsInN0YXRlTmFtZSIsInBvcHVsYXRpb24iLCJwdXNoIiwic29ydGVkIiwib2JqU29ydCIsInNvcnQiLCJhIiwiYiIsInNvcnRCeU5hbWUiLCJkYXRhSGVhZGVyIiwidWwiLCJxdWVyeVNlbGVjdG9yIiwiZmlyc3RfZW50cnlfcHJvY2Vzc2VkIiwiaSIsImxlbmd0aCIsImxpIiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwic29ydEJ5UG9wdWxhdGlvbiIsImUiLCJmaXJzdEFjdGlvbiIsImRhdGFFbCIsImRhdGFVbCIsImNoaWxkcmVuIiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/main-content.js\n");

/***/ }),

/***/ "./src/scripts/title_splash.js":
/*!*************************************!*\
  !*** ./src/scripts/title_splash.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass TitleSplash {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>Population Tracker</h1>\";\n    this.ele.addEventListener(\"click\", this.handleClick.bind(this));\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"...pOpUlAtIoN tRaCkEr...\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (TitleSplash);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy90aXRsZV9zcGxhc2guanMuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVcsQ0FBQztFQUNoQkMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUNkLElBQUksQ0FBQ0EsR0FBRyxDQUFDQyxTQUFTLEdBQUcsNkJBQTZCO0lBRWxELElBQUksQ0FBQ0QsR0FBRyxDQUFDRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDQyxXQUFXLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUNqRTtFQUVBRCxXQUFXLEdBQUc7SUFDWixJQUFJLENBQUNILEdBQUcsQ0FBQ0ssUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsMEJBQTBCO0VBQzdEO0FBQ0Y7QUFFQSwrREFBZVIsV0FBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcHVsYXRpb24tdHJhY2tlci8uL3NyYy9zY3JpcHRzL3RpdGxlX3NwbGFzaC5qcz9mYTg1Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRpdGxlU3BsYXNoIHtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+UG9wdWxhdGlvbiBUcmFja2VyPC9oMT5cIjtcblxuICAgIHRoaXMuZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCIuLi5wT3BVbEF0SW9OIHRSYUNrRXIuLi5cIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaXRsZVNwbGFzaDtcbiJdLCJuYW1lcyI6WyJUaXRsZVNwbGFzaCIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNsaWNrIiwiYmluZCIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/title_splash.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3B1bGF0aW9uLXRyYWNrZXIvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./assets/2020_pop_by_state.json":
/*!***************************************!*\
  !*** ./assets/2020_pop_by_state.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('[["H1_001N","NAME","state"],["5742828","Pennsylvania","42"],["14392140","California","06"],["855635","West Virginia","54"],["1151414","Utah","49"],["8488066","New York","36"],["350364","District of Columbia","11"],["326200","Alaska","02"],["9865350","Florida","12"],["2344963","South Carolina","45"],["370642","North Dakota","38"],["739072","Maine","23"],["4410956","Georgia","13"],["2288330","Alabama","01"],["638795","New Hampshire","33"],["1813747","Oregon","41"],["271887","Wyoming","56"],["3082000","Arizona","04"],["2073200","Louisiana","22"],["2923175","Indiana","18"],["751859","Idaho","16"],["1530197","Connecticut","09"],["561066","Hawaii","15"],["5426429","Illinois","17"],["2998537","Massachusetts","25"],["11589324","Texas","48"],["514803","Montana","30"],["844278","Nebraska","31"],["5242524","Ohio","39"],["2491404","Colorado","08"],["3761229","New Jersey","34"],["2530844","Maryland","24"],["3618247","Virginia","51"],["334318","Vermont","50"],["4708710","North Carolina","37"],["1365265","Arkansas","05"],["3202241","Washington","53"],["1275689","Kansas","20"],["1746807","Oklahoma","40"],["2727726","Wisconsin","55"],["1319945","Mississippi","28"],["2786621","Missouri","29"],["4570173","Michigan","26"],["483474","Rhode Island","44"],["2485558","Minnesota","27"],["1412789","Iowa","19"],["940859","New Mexico","35"],["1281018","Nevada","32"],["448735","Delaware","10"],["1598159","Puerto Rico","72"],["1994323","Kentucky","21"],["393375","South Dakota","46"],["3031605","Tennessee","47"]]');

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;