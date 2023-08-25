/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/addNewTask.js":
/*!***********************************!*\
  !*** ./src/modules/addNewTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addNewTask)
/* harmony export */ });
function addNewTask(newTaskDesc, array) {
  const newTask = {
    description: newTaskDesc,
    completed: false,
    index: array.length + 1,
  };

  array.push(newTask);
}


/***/ }),

/***/ "./src/modules/editTaskDescription.js":
/*!********************************************!*\
  !*** ./src/modules/editTaskDescription.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ editTaskDesc)
/* harmony export */ });
function editTaskDesc(newValue, array, index) {
  array[index].description = newValue;
}


/***/ }),

/***/ "./src/modules/loadTodoListCard.js":
/*!*****************************************!*\
  !*** ./src/modules/loadTodoListCard.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadTodoListCard)
/* harmony export */ });
/* harmony import */ var _savingData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./savingData.js */ "./src/modules/savingData.js");
/* harmony import */ var _updateCompleted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./updateCompleted.js */ "./src/modules/updateCompleted.js");
/* harmony import */ var _reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reorderArrayBasedOnIndex.js */ "./src/modules/reorderArrayBasedOnIndex.js");
/* harmony import */ var _editTaskDescription_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editTaskDescription.js */ "./src/modules/editTaskDescription.js");
/* harmony import */ var _removeTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./removeTask.js */ "./src/modules/removeTask.js");






function loadTodoListCard(arrayTodoList) {
  function loopTodoElement(item) {
    return `<li id="${item.index}" class="box task-item" >
                <span class="list ${
                  item.completed === false ? "" : "checked"
                }"><input class="checkbox" type="checkbox" data-id="${
      item.index
    }" ${item.completed === false ? "" : "checked"} />
                  <textarea class="input" data-id="${item.index}">${
      item.description
    }</textarea>
                <span id="${
                  item.index
                }-delete-icon" class="hidden remove-button" data-id="${
      item.index
    }" ><i class="icon fas fa-trash"></i></span>
            </li>`;
  }

  const listContainer = document.querySelector(".list-container");

  listContainer.innerHTML = arrayTodoList
    .map((list) => loopTodoElement(list))
    .join("");

  const textareaInputs = document.querySelectorAll(".input");

  textareaInputs.forEach((input) => {
    if (input.scrollHeight > 50) {
      const height = input.scrollHeight;
      input.style.height = `${height - 10}px`;
    }

    input.addEventListener("keyup", (e) => {
      e.target.style.height = "auto";
      const height = e.target.scrollHeight;
      e.target.style.height = `${height - 20}px`;
      if (e.key === "Enter") {
        input.value = input.value.replace(/\n/g, "");
        const index = Number(input.getAttribute("data-id")) - 1;
        (0,_editTaskDescription_js__WEBPACK_IMPORTED_MODULE_3__["default"])(input.value, arrayTodoList, index);
        (0,_savingData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayTodoList);
        loadTodoListCard(arrayTodoList);
      }
    });

    const inputId = input.getAttribute("data-id");
    const deleteIcon = document.getElementById(`${inputId}-delete-icon`);

    input.addEventListener("focusin", () => {
      deleteIcon.classList.remove("hidden");
    });

    input.addEventListener("focusout", () => {
      setTimeout(() => {
        deleteIcon.classList.add("hidden");
      }, 400);
    });
  });

  const removeButtons = document.querySelectorAll(".remove-button");

  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const id = Number(button.getAttribute("data-id"));
      arrayTodoList = (0,_removeTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])(id, arrayTodoList);
      (0,_reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arrayTodoList, arrayTodoList.length);
      (0,_savingData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayTodoList);
      loadTodoListCard(arrayTodoList);
    });
  });

  // update array if checkbox checked
  const checkboxes = document.querySelectorAll(".checkbox");
  checkboxes.forEach((box) => {
    box.addEventListener("change", () => {
      const id = Number(box.getAttribute("data-id"));
      (0,_updateCompleted_js__WEBPACK_IMPORTED_MODULE_1__["default"])(id, arrayTodoList);
      (0,_savingData_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arrayTodoList);
      loadTodoListCard(arrayTodoList);
    });
  });
}


/***/ }),

/***/ "./src/modules/removeTask.js":
/*!***********************************!*\
  !*** ./src/modules/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ removeTask)
/* harmony export */ });
function removeTask(id, array) {
  return array.filter((item) => item.index !== id);
}


/***/ }),

/***/ "./src/modules/reorderArrayBasedOnIndex.js":
/*!*************************************************!*\
  !*** ./src/modules/reorderArrayBasedOnIndex.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ reorder)
/* harmony export */ });
function reorder(arr, n) {
  const taskList = document.querySelectorAll(".task-item");
  const index = [];
  taskList.forEach((task) => {
    index.push(Number(task.id) - 1);
  });

  const temp = [...Array(n)];

  // arr[i] should be present at index[i] index
  for (let i = 0; i < n; i += 1) {
    temp[i] = arr[index[i]];
  }

  // Copy temp[] to arr[]
  for (let i = 0; i < n; i += 1) {
    arr[i] = temp[i];
    arr[i].index = i + 1;
  }
}


/***/ }),

/***/ "./src/modules/savingData.js":
/*!***********************************!*\
  !*** ./src/modules/savingData.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ savingData)
/* harmony export */ });
function savingData(data) {
  localStorage.setItem("todolist", JSON.stringify(data));
}


/***/ }),

/***/ "./src/modules/updateCompleted.js":
/*!****************************************!*\
  !*** ./src/modules/updateCompleted.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateCompleted)
/* harmony export */ });
function updateCompleted(inputId, array) {
  array.map((item) => {
    if (item.index === inputId) {
      if (item.completed === false) {
        item.completed = true;
      } else {
        item.completed = false;
      }
    }
    return item;
  });
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
Object(function webpackMissingModule() { var e = new Error("Cannot find module './style.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _modules_loadTodoListCard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/loadTodoListCard.js */ "./src/modules/loadTodoListCard.js");
/* harmony import */ var _modules_savingData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/savingData.js */ "./src/modules/savingData.js");
/* harmony import */ var _modules_reorderArrayBasedOnIndex_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/reorderArrayBasedOnIndex.js */ "./src/modules/reorderArrayBasedOnIndex.js");
/* harmony import */ var _modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/addNewTask.js */ "./src/modules/addNewTask.js");






let todoList = [];

// checked local storage
const savedData = JSON.parse(localStorage.getItem("todolist"));

if (savedData) {
  todoList = savedData;
}

//  render to html
(0,_modules_loadTodoListCard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);
const taskInput = document.querySelector("#task-input");
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    // function add the input to the array
    const savedData = JSON.parse(localStorage.getItem("todolist"));
    if (savedData) {
      todoList = savedData;
    }
    (0,_modules_addNewTask_js__WEBPACK_IMPORTED_MODULE_4__["default"])(taskInput.value, todoList);
    taskInput.value = "";
    (0,_modules_savingData_js__WEBPACK_IMPORTED_MODULE_2__["default"])(todoList);
    (0,_modules_loadTodoListCard_js__WEBPACK_IMPORTED_MODULE_1__["default"])(todoList);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=bundlef1771463354d9a449c46.js.map