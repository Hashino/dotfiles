/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../assets/locales/index.js":
/*!**********************************!*\
  !*** ../assets/locales/index.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable no-multi-spaces */
module.exports = {
  "en-US": __webpack_require__(/*! ./en-us.json */ "../assets/locales/en-us.json"),
  // English, US
  "en-GB": __webpack_require__(/*! ./en-gb.json */ "../assets/locales/en-gb.json"),
  // English, UK
  "zh-CN": __webpack_require__(/*! ./zh-cn.json */ "../assets/locales/zh-cn.json"),
  // Chinese, Simplified
  "zh-TW": __webpack_require__(/*! ./zh-tw.json */ "../assets/locales/zh-tw.json"),
  // Chinese, Traditional
  "cs": __webpack_require__(/*! ./cs.json */ "../assets/locales/cs.json"),
  // Czech
  "da": __webpack_require__(/*! ./da.json */ "../assets/locales/da.json"),
  // Danish
  "nl": __webpack_require__(/*! ./nl.json */ "../assets/locales/nl.json"),
  // Dutch
  "fr": __webpack_require__(/*! ./fr.json */ "../assets/locales/fr.json"),
  // French
  "de": __webpack_require__(/*! ./de.json */ "../assets/locales/de.json"),
  // German
  "el": __webpack_require__(/*! ./el.json */ "../assets/locales/el.json"),
  // Greek
  "hu": __webpack_require__(/*! ./hu.json */ "../assets/locales/hu.json"),
  // Hungarian
  "it": __webpack_require__(/*! ./it.json */ "../assets/locales/it.json"),
  // Italian
  "ja": __webpack_require__(/*! ./ja.json */ "../assets/locales/ja.json"),
  // Japanese
  "ko": __webpack_require__(/*! ./ko.json */ "../assets/locales/ko.json"),
  // Korean
  "pl": __webpack_require__(/*! ./pl.json */ "../assets/locales/pl.json"),
  // Polish
  "pt-PT": __webpack_require__(/*! ./pt-pt.json */ "../assets/locales/pt-pt.json"),
  // Portuguese, Portugal
  "pt-BR": __webpack_require__(/*! ./pt-br.json */ "../assets/locales/pt-br.json"),
  // Protuguese, Brazil
  "ru": __webpack_require__(/*! ./ru.json */ "../assets/locales/ru.json"),
  // Russian
  "sk": __webpack_require__(/*! ./sk.json */ "../assets/locales/sk.json"),
  // Slovak
  "es-ES": __webpack_require__(/*! ./es-es.json */ "../assets/locales/es-es.json"),
  // Spanish (Spain)
  "sv-SE": __webpack_require__(/*! ./sv-se.json */ "../assets/locales/sv-se.json"),
  // Swedish
  "tr": __webpack_require__(/*! ./tr.json */ "../assets/locales/tr.json"),
  // Turkish
  "bg": __webpack_require__(/*! ./bg.json */ "../assets/locales/bg.json"),
  // Bulgarian
  "uk": __webpack_require__(/*! ./uk.json */ "../assets/locales/uk.json"),
  // Ukrainian
  "fi": __webpack_require__(/*! ./fi.json */ "../assets/locales/fi.json"),
  // Finnish
  "no": __webpack_require__(/*! ./no.json */ "../assets/locales/no.json"),
  // Norwegian
  "hr": __webpack_require__(/*! ./hr.json */ "../assets/locales/hr.json"),
  // Croation
  "ro": __webpack_require__(/*! ./ro.json */ "../assets/locales/ro.json"),
  // Romanian
  "lt": __webpack_require__(/*! ./lt.json */ "../assets/locales/lt.json"),
  // Lithuanian
  "th": __webpack_require__(/*! ./th.json */ "../assets/locales/th.json"),
  // Thai
  "vi": __webpack_require__(/*! ./vi.json */ "../assets/locales/vi.json"),
  // Vietnamese
  "hi": __webpack_require__(/*! ./hi.json */ "../assets/locales/hi.json") // Hindi

};
/*

The following is the list of Discord's available locales as of April 15th 2021

English, US: en-US
English, UK: en-GB
Chinese Simplified: 
Traditional Chinese: zh-TW
Czech: cs
Danish: da
Dutch: nl
French: fr
German: de
Greek: el
Hungarian: hu
Italian: it
Japanese: ja
Korean: ko
Polish: pl
Portuguese: pt-PT
Portuguese, Brazilian: pt-BR
Russian: ru
Slovak: sk
Spanish: es-ES
Swedish: sv-SE
Turkish: tr
Bulgarian: bg
Ukrainian: uk
Finnish: fi
Norwegian: no
Croatian: hr
Romanian: ro
Lithuanian: lt
Thai: th
Vietnamese: vi
Hindi: hi

List was retrieved using: DiscordModules.LocaleManager.getLanguages().map(l => `${l.englishName}: ${l.code}`)

This means that the above list includes locales that exist in their current system, but are not yet available to select via UI.

That list can be checked with DiscordModules.LocaleManager.getAvailableLocales()

*/

/***/ }),

/***/ "../common/constants/ipcevents.js":
/*!****************************************!*\
  !*** ../common/constants/ipcevents.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CLOSE_DEVTOOLS": () => (/* binding */ CLOSE_DEVTOOLS),
/* harmony export */   "DEVTOOLS_WARNING": () => (/* binding */ DEVTOOLS_WARNING),
/* harmony export */   "GET_PATH": () => (/* binding */ GET_PATH),
/* harmony export */   "INSPECT_ELEMENT": () => (/* binding */ INSPECT_ELEMENT),
/* harmony export */   "MAXIMIZE": () => (/* binding */ MAXIMIZE),
/* harmony export */   "MINIMIZE": () => (/* binding */ MINIMIZE),
/* harmony export */   "MINIMUM_SIZE": () => (/* binding */ MINIMUM_SIZE),
/* harmony export */   "NAVIGATE": () => (/* binding */ NAVIGATE),
/* harmony export */   "OPEN_DEVTOOLS": () => (/* binding */ OPEN_DEVTOOLS),
/* harmony export */   "OPEN_DIALOG": () => (/* binding */ OPEN_DIALOG),
/* harmony export */   "OPEN_WINDOW": () => (/* binding */ OPEN_WINDOW),
/* harmony export */   "REGISTER_PRELOAD": () => (/* binding */ REGISTER_PRELOAD),
/* harmony export */   "RELAUNCH": () => (/* binding */ RELAUNCH),
/* harmony export */   "RUN_SCRIPT": () => (/* binding */ RUN_SCRIPT),
/* harmony export */   "TOGGLE_DEVTOOLS": () => (/* binding */ TOGGLE_DEVTOOLS)
/* harmony export */ });
/* eslint-disable no-multi-spaces */
const MINIMIZE = "bd-window-minimize";
const MAXIMIZE = "bd-window-maximize";
const RELAUNCH = "bd-relaunch-app";
const GET_PATH = "bd-get-path";
const RUN_SCRIPT = "bd-run-script";
const NAVIGATE = "bd-did-navigate-in-page";
const OPEN_DEVTOOLS = "bd-open-devtools";
const CLOSE_DEVTOOLS = "bd-close-devtools";
const TOGGLE_DEVTOOLS = "bd-toggle-devtools";
const OPEN_WINDOW = "bd-open-window";
const INSPECT_ELEMENT = "bd-inspect-element";
const MINIMUM_SIZE = "bd-minimum-size";
const DEVTOOLS_WARNING = "bd-remove-devtools-message";
const OPEN_DIALOG = "bd-open-dialog";
const REGISTER_PRELOAD = "bd-register-preload";

/***/ }),

/***/ "../common/events.js":
/*!***************************!*\
  !*** ../common/events.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventEmitter)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "../common/logger.js");

class EventEmitter {
  static get EventEmitter() {
    return EventEmitter;
  }

  constructor() {
    this.events = {};
  }

  setMaxListeners() {}

  on(event, callback) {
    if (!this.events[event]) this.events[event] = new Set();
    this.events[event].add(callback);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;

    for (const [index, listener] of this.events[event].entries()) {
      try {
        listener(...args);
      } catch (error) {
        _logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Emitter", `Cannot fire listener for event ${event} at position ${index}:`, error);
      }
    }
  }

  off(event, callback) {
    if (!this.events[event]) return;
    return this.events[event].delete(callback);
  }

}

/***/ }),

/***/ "../common/logger.js":
/*!***************************!*\
  !*** ../common/logger.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogTypes": () => (/* binding */ LogTypes),
/* harmony export */   "default": () => (/* binding */ Logger)
/* harmony export */ });
/**
 * Simple logger for the lib and plugins.
 *
 * @module Logger
 * @version 0.1.0
 */

/* eslint-disable no-console */

/**
 * List of logging types.
 */
const LogTypes = {
  /** Alias for error */
  err: "error",
  error: "error",

  /** Alias for debug */
  dbg: "debug",
  debug: "debug",
  log: "log",
  warn: "warn",
  info: "info"
};
class Logger {
  /**
   * Logs an error using a collapsed error group with stacktrace.
   *
   * @param {string} module - Name of the calling module.
   * @param {string} message - Message or error to have logged.
   * @param {Error} error - Error object to log with the message.
   */
  static stacktrace(module, message, error) {
    console.error(`%c[${module}]%c ${message}\n\n%c`, "color: #3a71c1; font-weight: 700;", "color: red; font-weight: 700;", "color: red;", error);
  }
  /**
   * Logs using error formatting. For logging an actual error object consider {@link module:Logger.stacktrace}
   *
   * @param {string} module - Name of the calling module.
   * @param {string} message - Messages to have logged.
   */


  static err(module, ...message) {
    Logger._log(module, message, "error");
  }
  /**
   * Alias for "err"
   * @param {string} module NAme of the calling module
   * @param  {...any} message Messages to have logged.
   */


  static error(module, ...message) {
    Logger._log(module, message, "error");
  }
  /**
   * Logs a warning message.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static warn(module, ...message) {
    Logger._log(module, message, "warn");
  }
  /**
   * Logs an informational message.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static info(module, ...message) {
    Logger._log(module, message, "info");
  }
  /**
   * Logs used for debugging purposes.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static debug(module, ...message) {
    Logger._log(module, message, "debug");
  }
  /**
   * Logs used for basic loggin.
   *
   * @param {string} module - Name of the calling module.
   * @param {...any} message - Messages to have logged.
   */


  static log(module, ...message) {
    Logger._log(module, message);
  }
  /**
   * Logs strings using different console levels and a module label.
   *
   * @param {string} module - Name of the calling module.
   * @param {any|Array<any>} message - Messages to have logged.
   * @param {module:Logger.LogTypes} type - Type of log to use in console.
   */


  static _log(module, message, type = "log") {
    type = Logger.parseType(type);
    if (!Array.isArray(message)) message = [message];
    console[type](`%c[BetterDiscord]%c [${module}]%c`, "color: #3E82E5; font-weight: 700;", "color: #3a71c1;", "", ...message);
  }

  static parseType(type) {
    return LogTypes[type] || "log";
  }

}

/***/ }),

/***/ "./src/builtins/builtins.js":
/*!**********************************!*\
  !*** ./src/builtins/builtins.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomCSS": () => (/* reexport safe */ _customcss__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "DebugLogs": () => (/* reexport safe */ _developer_debuglogs__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Debugger": () => (/* reexport safe */ _developer_debugger__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "DevToolsListener": () => (/* reexport safe */ _developer_devtools__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "InspectElement": () => (/* reexport safe */ _developer_inspectelement__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "MediaKeys": () => (/* reexport safe */ _general_mediakeys__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "PublicServers": () => (/* reexport safe */ _general_publicservers__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "ReactDevTools": () => (/* reexport safe */ _developer_reactdevtools__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "RemoveMinimumSize": () => (/* reexport safe */ _window_removeminimumsize__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "StopDevToolsWarning": () => (/* reexport safe */ _developer_devtoolswarning__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "VoiceDisconnect": () => (/* reexport safe */ _general_voicedisconnect__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "WindowPrefs": () => (/* reexport safe */ _window_transparency__WEBPACK_IMPORTED_MODULE_10__["default"])
/* harmony export */ });
/* harmony import */ var _customcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customcss */ "./src/builtins/customcss.js");
/* harmony import */ var _general_publicservers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general/publicservers */ "./src/builtins/general/publicservers.js");
/* harmony import */ var _general_voicedisconnect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./general/voicedisconnect */ "./src/builtins/general/voicedisconnect.js");
/* harmony import */ var _general_mediakeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./general/mediakeys */ "./src/builtins/general/mediakeys.js");
/* harmony import */ var _developer_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./developer/devtools */ "./src/builtins/developer/devtools.js");
/* harmony import */ var _developer_debugger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./developer/debugger */ "./src/builtins/developer/debugger.js");
/* harmony import */ var _developer_reactdevtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./developer/reactdevtools */ "./src/builtins/developer/reactdevtools.js");
/* harmony import */ var _developer_inspectelement__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./developer/inspectelement */ "./src/builtins/developer/inspectelement.js");
/* harmony import */ var _developer_devtoolswarning__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./developer/devtoolswarning */ "./src/builtins/developer/devtoolswarning.js");
/* harmony import */ var _developer_debuglogs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./developer/debuglogs */ "./src/builtins/developer/debuglogs.js");
/* harmony import */ var _window_transparency__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./window/transparency */ "./src/builtins/window/transparency.js");
/* harmony import */ var _window_removeminimumsize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./window/removeminimumsize */ "./src/builtins/window/removeminimumsize.js");
// Export these two first because they add settings/panels



 // export {default as EmoteModule} from "./emotes/emotes";
// export {default as EmoteMenu} from "./emotes/emotemenu";
// export {default as EmoteAutocaps} from "./emotes/emoteautocaps";










/***/ }),

/***/ "./src/builtins/customcss.js":
/*!***********************************!*\
  !*** ./src/builtins/customcss.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _ui_customcss_csseditor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/customcss/csseditor */ "./src/ui/customcss/csseditor.jsx");
/* harmony import */ var _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/floatingwindows */ "./src/ui/floatingwindows.js");
/* harmony import */ var _ui_settings_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/settings/title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _modules_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/utilities */ "./src/modules/utilities.js");







const fs = __webpack_require__(/*! fs */ "fs");

const electron = __webpack_require__(/*! electron */ "electron");

const UserSettings = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("updateAccount");
const Dispatcher = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.Dispatcher;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class CustomCSS extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "Custom CSS";
  }

  get category() {
    return "customcss";
  }

  get id() {
    return "customcss";
  }

  get startDetached() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get(this.collection, this.category, "openAction") == "detached";
  }

  get nativeOpen() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get(this.collection, this.category, "openAction") == "system";
  }

  constructor() {
    super();
    this.savedCss = "";
    this.insertedCss = "";
    this.isDetached = false;
  }

  async enabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.registerPanel(this.id, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Panels.customcss, {
      order: 2,
      element: () => [/*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_settings_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
        text: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.CustomCSS.editorTitle
      }), _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_customcss_csseditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
        css: this.savedCss,
        save: this.saveCSS.bind(this),
        update: this.insertCSS.bind(this),
        openNative: this.openNative.bind(this),
        openDetached: this.openDetached.bind(this),
        onChange: this.onChange.bind(this)
      })],
      onClick: thisObject => {
        if (this.isDetached) return;
        if (this.nativeOpen) return this.openNative();else if (this.startDetached) return this.openDetached(this.savedCss);
        const settingsView = _modules_utilities__WEBPACK_IMPORTED_MODULE_5__["default"].findInTree(thisObject._reactInternals, m => m && m.onSetSection, {
          walkable: ["child", "memoizedProps", "props", "children"]
        });
        if (settingsView && settingsView.onSetSection) settingsView.onSetSection(this.id);
      }
    });
    this.loadCSS();
    this.insertCSS(this.savedCss);
    this.watchContent();
  }

  disabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.removePanel(this.id);
    this.unwatchContent();
    this.insertCSS("");
  }

  watchContent() {
    if (this.watcher) return this.error("Already watching content.");
    const timeCache = {};
    this.log("Starting to watch content.");
    this.watcher = fs.watch(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS, {
      persistent: false
    }, async (eventType, filename) => {
      if (!eventType || !filename) return;
      await new Promise(r => setTimeout(r, 50));

      try {
        fs.statSync(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS);
      } catch (err) {
        if (err.code !== "ENOENT") return;
        delete timeCache[filename];
        this.saveCSS("");
      }

      const stats = fs.statSync(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS);
      if (!stats || !stats.mtime || !stats.mtime.getTime()) return;
      if (typeof stats.mtime.getTime() !== "number") return;
      if (timeCache[filename] == stats.mtime.getTime()) return;
      timeCache[filename] = stats.mtime.getTime();

      if (eventType == "change") {
        const newCSS = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.loadCustomCSS();
        if (newCSS == this.savedCss) return;
        this.savedCss = newCSS;
        this.insertCSS(this.savedCss);
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.emit("customcss-updated", this.savedCss);
      }
    });
  }

  unwatchContent() {
    if (!this.watcher) return this.error("Was not watching content.");
    this.watcher.close();
    delete this.watcher;
    this.log("No longer watching content.");
  }

  onChange(value) {
    if (!_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get("settings", "customcss", "liveUpdate")) return;
    this.insertCSS(value);
    this.saveCSS(value);
  }

  loadCSS() {
    this.savedCss = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.loadCustomCSS();
  }

  insertCSS(newCss) {
    if (typeof newCss === "undefined") newCss = this.insertedCss;else this.insertedCss = newCss;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.updateCustomCSS(newCss);
  }

  saveCSS(newCss) {
    if (typeof newCss !== "undefined") this.savedCss = newCss;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.saveCustomCSS(this.savedCss);
  }

  openNative() {
    electron.shell.openExternal(`file://${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.customCSS}`);
  }

  openDetached(currentCSS) {
    const editorRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createRef();
    const editor = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_customcss_csseditor__WEBPACK_IMPORTED_MODULE_2__["default"], {
      id: "bd-floating-editor",
      ref: editorRef,
      css: currentCSS,
      save: this.saveCSS.bind(this),
      update: this.insertCSS.bind(this),
      openNative: this.openNative.bind(this),
      onChange: this.onChange.bind(this)
    });
    _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_3__["default"].open({
      onClose: () => {
        this.isDetached = false;
      },
      onResize: () => {
        if (!editorRef || !editorRef.current || !editorRef.current.resize) return;
        editorRef.current.resize();
      },
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.CustomCSS.editorTitle,
      id: "floating-editor-window",
      height: 470,
      width: 410,
      center: true,
      resizable: true,
      children: editor,
      confirmClose: () => {
        if (!editorRef || !editorRef.current) return false;
        if (_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get("settings", "customcss", "liveUpdate")) return false;
        return editorRef.current.hasUnsavedChanges;
      },
      confirmationText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.CustomCSS.confirmationText
    });
    this.isDetached = true;
    UserSettings.close();
    Dispatcher.dispatch({
      type: "LAYER_POP"
    });
  }

}());

/***/ }),

/***/ "./src/builtins/developer/debugger.js":
/*!********************************************!*\
  !*** ./src/builtins/developer/debugger.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DeveloperMode extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "Debugger";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "debuggerHotkey";
  }

  enabled() {
    document.addEventListener("keydown", this.debugListener);
  }

  disabled() {
    document.removeEventListener("keydown", this.debugListener);
  }

  debugListener(e) {
    if (e.key === "F7" || e.key == "F8") {
      debugger; // eslint-disable-line no-debugger

      e.preventDefault();
      e.stopImmediatePropagation();
    }
  }

}());

/***/ }),

/***/ "./src/builtins/developer/debuglogs.js":
/*!*********************************************!*\
  !*** ./src/builtins/developer/debuglogs.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_datastore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/datastore */ "./src/modules/datastore.js");
const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");




const timestamp = () => new Date().toISOString().replace("T", " ").replace("Z", "");

const levels = ["log", "info", "warn", "error", "debug"];

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return "[Circular Reference]";
      seen.add(value);
    }

    return value;
  };
};

const occurrences = (source, substring) => {
  const regex = new RegExp(substring, "g");
  return (source.match(regex) || []).length;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DebugLogs extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "DebugLogs";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "debugLogs";
  }

  enabled() {
    this.logFile = path.join(_modules_datastore__WEBPACK_IMPORTED_MODULE_1__["default"].dataFolder, "debug.log");
    this.stream = fs.createWriteStream(this.logFile, {
      flags: "a"
    });
    this.stream.write(`\n\n================= Starting Debug Log (${timestamp()}) =================\n`);

    for (const level of levels) {
      this.after(console, level, (_, originalArgs) => {
        const data = this.sanitize(...originalArgs);
        this.stream.write(`[${timestamp()}][CONSOLE:${level.toUpperCase()}] ${data}\n`);
      });
    }
  }

  disabled() {
    this.unpatchAll();
    if (this.stream) this.stream.end(`\n\n================= Ending Debug Log (${timestamp()}) =================`);
  }

  sanitize(...args) {
    const sanitized = [];

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];

      if (typeof arg === "string") {
        const styleCount = occurrences(arg, "%c");
        sanitized.push(arg.replace(/%c/g, ""));
        if (styleCount > 0) i += styleCount;
      }

      if (typeof arg === "undefined") sanitized.push("undefined");
      if (typeof arg === "object" && arg && arg.message && arg.stack) sanitized.push(`${arg.message}\n${arg.stack}`);else if (typeof arg === "object") sanitized.push(JSON.stringify(arg, getCircularReplacer()));
      if (typeof arg === "function" || typeof arg === "boolean" || typeof arg === "number") sanitized.push(arg.toString());
    }

    return sanitized.join(" ");
  }

}());

/***/ }),

/***/ "./src/builtins/developer/devtools.js":
/*!********************************************!*\
  !*** ./src/builtins/developer/devtools.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_ipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/ipc */ "./src/modules/ipc.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DevToolsListener extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "DevTools";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "devTools";
  }

  initialize() {
    super.initialize(...arguments);
    this.toggleDevTools = this.toggleDevTools.bind(this);
    document.addEventListener("keydown", this.toggleDevTools);
  }

  toggleDevTools(e) {
    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      e.stopPropagation();
      e.preventDefault();
      if (this.get(this.collection, this.category, this.id)) _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].toggleDevTools();
    }
  }

}());

/***/ }),

/***/ "./src/builtins/developer/devtoolswarning.js":
/*!***************************************************!*\
  !*** ./src/builtins/developer/devtoolswarning.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/webpackmodules */ "./src/modules/webpackmodules.js");

 // import IPC from "../../modules/ipc";

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class StopDevToolsWarning extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "StopDevToolsWarning";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "devToolsWarning";
  }

  enabled() {
    var _window, _window$DiscordNative, _window$DiscordNative2;

    // IPC.stopDevtoolsWarning();
    (_window = window) === null || _window === void 0 ? void 0 : (_window$DiscordNative = _window.DiscordNative) === null || _window$DiscordNative === void 0 ? void 0 : (_window$DiscordNative2 = _window$DiscordNative.window) === null || _window$DiscordNative2 === void 0 ? void 0 : _window$DiscordNative2.setDevtoolsCallbacks(null, null);
  }

  disabled() {
    var _window2;

    const devtoolsModule = _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByString("setDevtoolsCallbacks");
    const stringModule = _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Messages");
    const hideModule = _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(m => Object.keys(m).some(k => k.startsWith("hide")));
    if (!devtoolsModule || !stringModule || !hideModule) return;
    devtoolsModule(stringModule, hideModule, (_window2 = window) === null || _window2 === void 0 ? void 0 : _window2.DiscordNative);
  }

}());

/***/ }),

/***/ "./src/builtins/developer/inspectelement.js":
/*!**************************************************!*\
  !*** ./src/builtins/developer/inspectelement.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_ipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/ipc */ "./src/modules/ipc.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class InspectElement extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "InspectElementHotkey";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "inspectElement";
  }

  enabled() {
    document.addEventListener("keydown", this.inspectElement);
  }

  disabled() {
    document.removeEventListener("keydown", this.inspectElement);
  }

  inspectElement(e) {
    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      // Ctrl + Shift + C
      _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].inspectElement();
    }
  }

}());

/***/ }),

/***/ "./src/builtins/developer/reactdevtools.js":
/*!*************************************************!*\
  !*** ./src/builtins/developer/reactdevtools.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class ReactDevTools extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "ReactDevTools";
  }

  get category() {
    return "developer";
  }

  get id() {
    return "reactDevTools";
  }

  async enabled() {
    this.showModal();
  }

  async disabled() {
    this.showModal();
  }

  showModal() {
    if (!this.initialized) return;
    _ui_modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.additionalInfo, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartPrompt, {
      confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartNow,
      cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartLater,
      danger: true,
      onConfirm: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.IPC.relaunch()
    });
  }

}());

/***/ }),

/***/ "./src/builtins/emotes/emotes.js":
/*!***************************************!*\
  !*** ./src/builtins/emotes/emotes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data/data.js */ "./src/data/data.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _ui_emote__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/emote */ "./src/ui/emote.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _structs_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../structs/string */ "./src/structs/string.js");








const request = __webpack_require__(/*! request */ "request");

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const EmoteURLs = {
  TwitchGlobal: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://static-cdn.jtvnw.net/emoticons/v1/{{id}}/1.0`),
  TwitchSubscriber: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://static-cdn.jtvnw.net/emoticons/v1/{{id}}/1.0`),
  FrankerFaceZ: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://cdn.frankerfacez.com/emoticon/{{id}}/1`),
  BTTV: new _structs_string__WEBPACK_IMPORTED_MODULE_6__["default"](`https://cdn.betterttv.net/emote/{{id}}/1x`)
};
const Emotes = {
  TwitchGlobal: {},
  TwitchSubscriber: {},
  BTTV: {},
  FrankerFaceZ: {}
};

const escape = s => {
  return s.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};

const blocklist = [];
const overrides = ["twitch", "subscriber", "bttv", "ffz"];
const modifiers = ["flip", "spin", "pulse", "spin2", "spin3", "1spin", "2spin", "3spin", "tr", "bl", "br", "shake", "shake2", "shake3", "flap"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class EmoteModule extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "Emotes";
  }

  get collection() {
    return "settings";
  }

  get category() {
    return "general";
  }

  get id() {
    return "emotes";
  }

  get categories() {
    return Object.keys(Emotes).filter(k => this.isCategoryEnabled(k));
  }

  get shouldDownload() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.get("emotes", this.category, "download");
  }

  get asarPath() {
    return path.join(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.baseFolder, "emotes.asar");
  }

  isCategoryEnabled(id) {
    return super.get("emotes", "categories", id.toLowerCase());
  }

  get(id) {
    return super.get("emotes", "general", id);
  }

  get MessageComponent() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.find(m => m.default && m.default.toString().search("childrenRepliedMessage") > -1);
  }

  get Emotes() {
    return Emotes;
  }

  get TwitchGlobal() {
    return Emotes.TwitchGlobal;
  }

  get TwitchSubscriber() {
    return Emotes.TwitchSubscriber;
  }

  get BTTV() {
    return Emotes.BTTV;
  }

  get FrankerFaceZ() {
    return Emotes.FrankerFaceZ;
  }

  get blocklist() {
    return blocklist;
  }

  get favorites() {
    return this.favoriteEmotes;
  }

  getUrl(category, name) {
    return EmoteURLs[category].format({
      id: Emotes[category][name]
    });
  }

  getCategory(category) {
    return Emotes[category];
  }

  getRemoteFile(category) {
    return `https://cdn.staticaly.com/gh/BetterDiscord/BetterDiscord/${_data_data_js__WEBPACK_IMPORTED_MODULE_1__.Config.hash}/assets/emotes/${category.toLowerCase()}.json`;
  }

  initialize() {
    super.initialize();
    const storedFavorites = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.getBDData("favoriteEmotes");
    this.favoriteEmotes = storedFavorites || {};
    this.addFavorite = this.addFavorite.bind(this);
    this.removeFavorite = this.removeFavorite.bind(this);
    this.onCategoryToggle = this.onCategoryToggle.bind(this);
    this.resetEmotes = this.resetEmotes.bind(this);
  }

  async enabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.registerCollection("emotes", "Emotes", _data_data_js__WEBPACK_IMPORTED_MODULE_1__.EmoteConfig, {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.clearEmotes,
      onClick: this.resetEmotes.bind(this)
    }); // await this.getBlocklist();

    await this.loadEmoteData();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.on("emotes-favorite-added", this.addFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.on("emotes-favorite-removed", this.removeFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.on("setting-updated", this.onCategoryToggle);
    this.patchMessageContent();
  }

  disabled() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.off("setting-updated", this.onCategoryToggle);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.off("emotes-favorite-added", this.addFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.off("emotes-favorite-removed", this.removeFavorite);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.removeCollection("emotes");
    this.emptyEmotes();
    if (!this.cancelEmoteRender) return;
    this.cancelEmoteRender();
    delete this.cancelEmoteRender;
  }

  onCategoryToggle(collection, cat, category, enabled) {
    if (collection != "emotes" || cat != "categories") return;
    if (enabled) return this.loadEmoteData(category);
    return this.unloadEmoteData(category);
  }

  addFavorite(name, url) {
    if (!this.favoriteEmotes.hasOwnProperty(name)) this.favoriteEmotes[name] = url;
    this.saveFavorites();
  }

  removeFavorite(name) {
    if (!this.favoriteEmotes.hasOwnProperty(name)) return;
    delete this.favoriteEmotes[name];
    this.saveFavorites();
  }

  isFavorite(name) {
    return this.favoriteEmotes.hasOwnProperty(name);
  }

  saveFavorites() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.setBDData("favoriteEmotes", this.favoriteEmotes);
  }

  emptyEmotes() {
    for (const cat in Emotes) Object.assign(Emotes, {
      [cat]: {}
    });
  }

  patchMessageContent() {
    if (this.cancelEmoteRender) return;
    this.cancelEmoteRender = this.before(this.MessageComponent, "default", (thisObj, args) => {
      const nodes = args[0].childrenMessageContent.props.content;
      if (!nodes || !nodes.length) return;

      for (let n = 0; n < nodes.length; n++) {
        const node = nodes[n];
        if (typeof node !== "string") continue;
        const words = node.split(/([^\s]+)([\s]|$)/g);

        for (let c = 0, clen = this.categories.length; c < clen; c++) {
          for (let w = 0, wlen = words.length; w < wlen; w++) {
            const emote = words[w];
            const emoteSplit = emote.split(":");
            const emoteName = emoteSplit[0];
            let emoteModifier = emoteSplit[1] ? emoteSplit[1] : "";
            let emoteOverride = emoteModifier.slice(0);
            if (emoteName.length < 4 || blocklist.includes(emoteName)) continue;
            if (!modifiers.includes(emoteModifier) || !_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.get("emotes", "general", "modifiers")) emoteModifier = "";
            if (!overrides.includes(emoteOverride)) emoteOverride = "";else emoteModifier = emoteOverride;
            let current = this.categories[c];

            if (emoteOverride === "twitch") {
              if (Emotes.TwitchGlobal[emoteName]) current = "TwitchGlobal";else if (Emotes.TwitchSubscriber[emoteName]) current = "TwitchSubscriber";
            } else if (emoteOverride === "subscriber") {
              if (Emotes.TwitchSubscriber[emoteName]) current = "TwitchSubscriber";
            } else if (emoteOverride === "bttv") {
              if (Emotes.BTTV[emoteName]) current = "BTTV";
            } else if (emoteOverride === "ffz") {
              if (Emotes.FrankerFaceZ[emoteName]) current = "FrankerFaceZ";
            }

            if (!Emotes[current][emoteName]) continue;
            const results = nodes[n].match(new RegExp(`([\\s]|^)${escape(emoteModifier ? emoteName + ":" + emoteModifier : emoteName)}([\\s]|$)`));
            if (!results) continue;
            const pre = nodes[n].substring(0, results.index + results[1].length);
            const post = nodes[n].substring(results.index + results[0].length - results[2].length);
            nodes[n] = pre;
            const emoteComponent = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DiscordModules.React.createElement(_ui_emote__WEBPACK_IMPORTED_MODULE_3__["default"], {
              name: emoteName,
              url: EmoteURLs[current].format({
                id: Emotes[current][emoteName]
              }),
              modifier: emoteModifier,
              isFavorite: this.isFavorite(emoteName)
            });
            nodes.splice(n + 1, 0, post);
            nodes.splice(n + 1, 0, emoteComponent);
          }
        }
      }

      const onlyEmotes = nodes.every(r => {
        if (typeof r == "string" && r.replace(/\s*/, "") == "") return true;else if (r.type && r.type.name == "BDEmote") return true;else if (r.props && r.props.children && r.props.children.props && r.props.children.props.emojiName) return true;
        return false;
      });
      if (!onlyEmotes) return;

      for (const node of nodes) {
        if (typeof node != "object") continue;
        if (node.type.name == "BDEmote") node.props.jumboable = true;else if (node.props && node.props.children && node.props.children.props && node.props.children.props.emojiName) node.props.children.props.jumboable = true;
      }
    });
  }

  async loadEmoteData(categories) {
    if (!categories) categories = this.categories;
    if (!Array.isArray(categories)) categories = [categories];
    const all = Object.keys(Emotes);
    categories = categories.map(k => all.find(c => c.toLowerCase() == k.toLowerCase()));
    _ui_toasts__WEBPACK_IMPORTED_MODULE_5__["default"].show(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.loading, {
      type: "info"
    });
    this.emotesLoaded = false;
    const localOutdated = _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Config.release.tag_name > _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.getBDData("emoteVersion");
    if (!fs.existsSync(this.asarPath) || localOutdated && this.shouldDownload) await this.downloadEmotes();

    try {
      for (const category of categories) {
        this.log(category);

        const EmoteData = require(path.join(this.asarPath, category.toLowerCase()));

        Object.assign(Emotes[category], EmoteData);
        delete require.cache[path.join(this.asarPath, category.toLowerCase())];
        await new Promise(r => setTimeout(r, 1000));
      }

      const EmoteData = require(path.join(this.asarPath, "blocklist"));

      blocklist.push(...EmoteData);
      delete require.cache[path.join(this.asarPath, "blocklist")];
    } catch (err) {
      this.log("Failed to load emotes.");
    }

    this.emotesLoaded = true;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Events.dispatch("emotes-loaded");
    _ui_toasts__WEBPACK_IMPORTED_MODULE_5__["default"].show(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.loaded, {
      type: "success"
    });
  }

  unloadEmoteData(categories) {
    if (!categories) categories = this.categories;
    if (!Array.isArray(categories)) categories = [categories];
    const all = Object.keys(Emotes);
    categories = categories.map(k => all.find(c => c.toLowerCase() == k.toLowerCase()));

    for (const category of categories) {
      delete Emotes[category];
      Emotes[category] = {};
    }
  }

  async downloadEmotes() {
    try {
      const asar = _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Config.release.assets.find(a => a.name === "emotes.asar");
      this.log(`Downloading emotes from: ${asar.url}`);
      const buff = await new Promise((resolve, reject) => request(asar.url, {
        encoding: null,
        headers: {
          "User-Agent": "BetterDiscord Emotes",
          "Accept": "application/octet-stream"
        }
      }, (err, resp, body) => {
        if (err || resp.statusCode != 200) return reject(err || `${resp.statusCode} ${resp.statusMessage}`);
        return resolve(body);
      }));
      this.log("Successfully downloaded emotes.asar");
      const asarPath = this.asarPath;

      const originalFs = __webpack_require__(/*! original-fs */ "original-fs");

      originalFs.writeFileSync(asarPath, buff);
      this.log(`Saved emotes.asar to ${asarPath}`);
      _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.setBDData("emoteVersion", _data_data_js__WEBPACK_IMPORTED_MODULE_1__.Config.release.tag_name);
    } catch (err) {
      this.stacktrace("Failed to download emotes.", err);
      _ui_modals__WEBPACK_IMPORTED_MODULE_4__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.downloadFailed, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Emotes.failureMessage, {
        cancelText: null
      });
    }
  }

  resetEmotes() {
    this.unloadEmoteData();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DataStore.setBDData("emoteVersion", "0");
    this.loadEmoteData();
  }

}());

/***/ }),

/***/ "./src/builtins/general/mediakeys.js":
/*!*******************************************!*\
  !*** ./src/builtins/general/mediakeys.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class MediaKeys extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "DisableMediaKeys";
  }

  get category() {
    return "general";
  }

  get id() {
    return "mediaKeys";
  }

  enabled() {
    this.showModal();
  }

  disabled() {
    this.showModal();
  }

  showModal() {
    if (!this.initialized) return;
    _ui_modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.additionalInfo, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartPrompt, {
      confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartNow,
      cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartLater,
      danger: true,
      onConfirm: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.IPC.relaunch()
    });
  }

}());

/***/ }),

/***/ "./src/builtins/general/publicservers.js":
/*!***********************************************!*\
  !*** ./src/builtins/general/publicservers.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _ui_publicservers_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/publicservers/menu */ "./src/ui/publicservers/menu.js");
/* harmony import */ var _ui_icons_globe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/icons/globe */ "./src/ui/icons/globe.jsx");




const LayerManager = {
  pushLayer(component) {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_PUSH",
      component
    });
  },

  popLayer() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_POP"
    });
  },

  popAllLayers() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_POP_ALL"
    });
  }

};

class ErrorBoundary extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PublicServers extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "PublicServers";
  }

  get category() {
    return "general";
  }

  get id() {
    return "publicServers";
  }

  enabled() {
    var _premiumBadge$remove, _numberBadge$remove;

    const PrivateChannelList = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getModule(m => m === null || m === void 0 ? void 0 : m.toString().includes("privateChannelIds"), {
      defaultExport: false
    });
    if (!PrivateChannelList || !PrivateChannelList.Z) return this.warn("Could not find PrivateChannelList", PrivateChannelList);
    const PrivateChannelButton = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getModule(m => {
      var _m$prototype, _m$prototype$render;

      return m === null || m === void 0 ? void 0 : (_m$prototype = m.prototype) === null || _m$prototype === void 0 ? void 0 : (_m$prototype$render = _m$prototype.render) === null || _m$prototype$render === void 0 ? void 0 : _m$prototype$render.toString().includes("linkButton");
    }, {
      searchExports: true
    });
    if (!PrivateChannelButton) return this.warn("Could not find PrivateChannelButton", PrivateChannelButton);
    this.after(PrivateChannelList, "Z", (_, __, returnValue) => {
      var _returnValue$props, _returnValue$props$ch, _returnValue$props$ch2;

      const destination = returnValue === null || returnValue === void 0 ? void 0 : (_returnValue$props = returnValue.props) === null || _returnValue$props === void 0 ? void 0 : (_returnValue$props$ch = _returnValue$props.children) === null || _returnValue$props$ch === void 0 ? void 0 : (_returnValue$props$ch2 = _returnValue$props$ch.props) === null || _returnValue$props$ch2 === void 0 ? void 0 : _returnValue$props$ch2.children;
      if (!destination || !Array.isArray(destination)) return;
      if (destination.find(b => {
        var _b$props, _b$props$children, _b$props$children$pro;

        return (b === null || b === void 0 ? void 0 : (_b$props = b.props) === null || _b$props === void 0 ? void 0 : (_b$props$children = _b$props.children) === null || _b$props$children === void 0 ? void 0 : (_b$props$children$pro = _b$props$children.props) === null || _b$props$children$pro === void 0 ? void 0 : _b$props$children$pro.id) === "public-servers-button";
      })) return; // If it exists, don't try to add again

      destination.push(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(ErrorBoundary, null, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(PrivateChannelButton, {
        id: "public-servers-button",
        onClick: () => this.openPublicServers(),
        text: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.PublicServers.button,
        icon: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_icons_globe__WEBPACK_IMPORTED_MODULE_3__["default"], {
          color: "currentColor"
        })
      })));
    });
    /**
     * On being first enabled, we have no way of forceUpdating the list,
     * so clone and modify an existing button and add it to the end
     * of the button list.
     */

    const header = document.querySelector(`[class*="privateChannelsHeaderContainer-"]`);
    if (!header) return; // No known element

    const oldButton = header.previousElementSibling;
    if (!oldButton.className.includes("channel-")) return; // Not what we expected to be there
    // Clone existing button and set click handler

    const newButton = oldButton.cloneNode(true);
    newButton.addEventListener("click", event => {
      event.stopImmediatePropagation();
      event.stopPropagation();
      event.preventDefault();
      this.openPublicServers();
    }); // Remove existing route and id

    const aSlot = newButton.querySelector("a");
    aSlot.href = "";
    aSlot.dataset.listItemId = "public-servers"; // Remove any badges

    const premiumBadge = newButton.querySelector(`[class*="premiumTrial"]`);
    premiumBadge === null || premiumBadge === void 0 ? void 0 : (_premiumBadge$remove = premiumBadge.remove) === null || _premiumBadge$remove === void 0 ? void 0 : _premiumBadge$remove.call(premiumBadge);
    const numberBadge = newButton.querySelector(`[class*="numberBadge-"]`);
    numberBadge === null || numberBadge === void 0 ? void 0 : (_numberBadge$remove = numberBadge.remove) === null || _numberBadge$remove === void 0 ? void 0 : _numberBadge$remove.call(numberBadge); // Render our icon in the avatar slot

    const avatarSlot = newButton.querySelector(`[class*="avatar-"]`);
    avatarSlot.replaceChildren();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.ReactDOM.render(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_ui_icons_globe__WEBPACK_IMPORTED_MODULE_3__["default"], {
      color: "currentColor"
    }), avatarSlot);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.onRemoved(avatarSlot, () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.ReactDOM.unmountComponentAtNode(avatarSlot)); // Replace the existing name

    const nameSlot = newButton.querySelector(`[class*="name-"]`);
    nameSlot.textContent = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.PublicServers.button; // Insert before the header, end of the list

    header.parentNode.insertBefore(newButton, header);
    this.button = newButton;
  }

  disabled() {
    var _this$button, _this$button$remove, _document$querySelect, _document$querySelect2, _document$querySelect3, _document$querySelect4;

    this.unpatchAll();
    (_this$button = this.button) === null || _this$button === void 0 ? void 0 : (_this$button$remove = _this$button.remove) === null || _this$button$remove === void 0 ? void 0 : _this$button$remove.call(_this$button);
    (_document$querySelect = document.querySelector("#public-servers-button")) === null || _document$querySelect === void 0 ? void 0 : (_document$querySelect2 = _document$querySelect.parentElement) === null || _document$querySelect2 === void 0 ? void 0 : (_document$querySelect3 = _document$querySelect2.parentElement) === null || _document$querySelect3 === void 0 ? void 0 : (_document$querySelect4 = _document$querySelect3.remove) === null || _document$querySelect4 === void 0 ? void 0 : _document$querySelect4.call(_document$querySelect3);
  }

  async _appendButton() {
    await new Promise(r => setTimeout(r, 1000));
    const existing = document.querySelector("#bd-pub-li");
    if (existing) return;
    const guilds = document.querySelector(`.${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.GuildClasses.guilds} .${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.GuildClasses.listItem}`);
    if (!guilds) return;
    guilds.parentNode.insertBefore(this.button, guilds.nextSibling);
  }

  openPublicServers() {
    LayerManager.pushLayer(() => _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.React.createElement(_ui_publicservers_menu__WEBPACK_IMPORTED_MODULE_2__["default"], {
      close: LayerManager.popLayer
    }));
  }

}());

/***/ }),

/***/ "./src/builtins/general/voicedisconnect.js":
/*!*************************************************!*\
  !*** ./src/builtins/general/voicedisconnect.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class VoiceDisconnect extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "VoiceDisconnect";
  }

  get category() {
    return "general";
  }

  get id() {
    return "voiceDisconnect";
  }

  constructor() {
    super();
    this.beforeUnload = this.beforeUnload.bind(this);
  }

  enabled() {
    window.addEventListener("beforeunload", this.beforeUnload);
  }

  disabled() {
    window.removeEventListener("beforeunload", this.beforeUnload);
  }

  beforeUnload() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.ChannelActions.selectVoiceChannel(null, null);
  }

}());

/***/ }),

/***/ "./src/builtins/window/removeminimumsize.js":
/*!**************************************************!*\
  !*** ./src/builtins/window/removeminimumsize.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _modules_ipc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/ipc */ "./src/modules/ipc.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class RemoveMinimumSize extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "RemoveMinimumSize";
  }

  get category() {
    return "window";
  }

  get id() {
    return "removeMinimumSize";
  }

  enabled() {
    _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].setMinimumSize(1, 1);
  }

  disabled() {
    _modules_ipc__WEBPACK_IMPORTED_MODULE_1__["default"].setMinimumSize(940, 500);
  }

}());

/***/ }),

/***/ "./src/builtins/window/transparency.js":
/*!*********************************************!*\
  !*** ./src/builtins/window/transparency.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _structs_builtin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../structs/builtin */ "./src/structs/builtin.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class WindowTransparency extends _structs_builtin__WEBPACK_IMPORTED_MODULE_0__["default"] {
  get name() {
    return "WindowTransparency";
  }

  get category() {
    return "window";
  }

  get id() {
    return "transparency";
  }

  enabled() {
    this.showModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.WindowPrefs.enabledInfo);
    document.body.classList.add("bd-transparency");
  }

  disabled() {
    this.showModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.WindowPrefs.disabledInfo);
    document.body.classList.remove("bd-transparency");
  }

  showModal(info) {
    if (!this.initialized) return;
    _ui_modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.additionalInfo, info, {
      confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartNow,
      cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.restartLater,
      danger: true,
      onConfirm: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.IPC.relaunch()
    });
  }

}());

/***/ }),

/***/ "./src/data/changelog.js":
/*!*******************************!*\
  !*** ./src/data/changelog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// fixed, improved, added, progress
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  description: "Just some smaller fixes while we work on some big things in the background.",
  changes: [{
    title: "Bug Fixes",
    type: "fixed",
    items: ["Fixed _even more_ issues with the built-in updater.", "Fixed not being able to click support server links in plugin/theme pages.", "Fixed some issues with not being able to join public servers.", "Fixed plugin settings not being able to be displayed.", "Fixed changelog modal not being able to be displayed."]
  }]
});

/***/ }),

/***/ "./src/data/config.js":
/*!****************************!*\
  !*** ./src/data/config.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  version: "1.8.2",
  release: {
    assets: []
  },
  // Get from main process
  path: "",
  appPath: "",
  userData: ""
});

/***/ }),

/***/ "./src/data/data.js":
/*!**************************!*\
  !*** ./src/data/data.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Changelog": () => (/* reexport safe */ _changelog__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "Config": () => (/* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "EmoteConfig": () => (/* reexport safe */ _emotesettings__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "SettingsConfig": () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_2__["default"])
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/data/config.js");
/* harmony import */ var _emotesettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emotesettings */ "./src/data/emotesettings.js");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings */ "./src/data/settings.js");
/* harmony import */ var _changelog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./changelog */ "./src/data/changelog.js");





/***/ }),

/***/ "./src/data/emotesettings.js":
/*!***********************************!*\
  !*** ./src/data/emotesettings.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  type: "category",
  id: "general",
  name: "General",
  collapsible: true,
  settings: [{
    type: "switch",
    id: "download",
    value: true
  }, {
    type: "switch",
    id: "emoteMenu",
    value: true
  }, {
    type: "switch",
    id: "hideEmojiMenu",
    value: false,
    enableWith: "emoteMenu"
  }, {
    type: "switch",
    id: "modifiers",
    value: true
  }, {
    type: "switch",
    id: "animateOnHover",
    value: false
  }]
}, {
  type: "category",
  id: "categories",
  name: "Categories",
  collapsible: true,
  settings: [{
    type: "switch",
    id: "twitchglobal",
    value: true
  }, {
    type: "switch",
    id: "twitchsubscriber",
    value: false
  }, {
    type: "switch",
    id: "frankerfacez",
    value: true
  }, {
    type: "switch",
    id: "bttv",
    value: true
  }]
}]);

/***/ }),

/***/ "./src/data/settings.js":
/*!******************************!*\
  !*** ./src/data/settings.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{
  type: "category",
  id: "general",
  collapsible: true,
  settings: [{
    type: "switch",
    id: "emotes",
    value: true,
    disabled: true
  }, {
    type: "switch",
    id: "publicServers",
    value: true
  }, {
    type: "switch",
    id: "voiceDisconnect",
    value: false
  }, {
    type: "switch",
    id: "showToasts",
    value: true
  }, {
    type: "switch",
    id: "mediaKeys",
    value: false
  }]
}, {
  type: "category",
  id: "addons",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "addonErrors",
    value: true
  }, {
    type: "dropdown",
    id: "editAction",
    value: "detached",
    options: [{
      value: "detached"
    }, {
      value: "system"
    }]
  }]
}, {
  type: "category",
  id: "customcss",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "customcss",
    value: true
  }, {
    type: "switch",
    id: "liveUpdate",
    value: false
  }, {
    type: "dropdown",
    id: "openAction",
    value: "settings",
    options: [{
      value: "settings"
    }, {
      value: "detached"
    }, {
      value: "system"
    }]
  }]
}, {
  type: "category",
  id: "editor",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "lineNumbers",
    value: true
  }, {
    type: "switch",
    id: "minimap",
    value: true
  }, {
    type: "switch",
    id: "hover",
    value: true
  }, {
    type: "switch",
    id: "quickSuggestions",
    value: true
  }, {
    type: "number",
    id: "fontSize",
    min: 2,
    value: 14
  }, {
    type: "dropdown",
    id: "renderWhitespace",
    value: "selection",
    options: [{
      value: "none"
    }, {
      value: "all"
    }, {
      value: "selection"
    }]
  }]
}, {
  type: "category",
  id: "window",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "transparency",
    value: false
  }, {
    type: "switch",
    id: "removeMinimumSize",
    value: false
  }, {
    type: "switch",
    id: "frame",
    value: false,
    hidden: true
  }]
}, {
  type: "category",
  id: "developer",
  collapsible: true,
  shown: false,
  settings: [{
    type: "switch",
    id: "debugLogs",
    value: false
  }, {
    type: "switch",
    id: "devTools",
    value: false
  }, {
    type: "switch",
    id: "debuggerHotkey",
    value: false,
    enableWith: "devTools"
  }, {
    type: "switch",
    id: "reactDevTools",
    value: false,
    enableWith: "devTools"
  }, {
    type: "switch",
    id: "inspectElement",
    value: false,
    enableWith: "devTools"
  }, {
    type: "switch",
    id: "devToolsWarning",
    value: false,
    enableWith: "devTools"
  }]
} // {
//     type: "category",
//     id: "debug",
//     name: "Debug",
//     collapsible: true,
//     shown: true,
//     settings: [
//         {name: "Text test", note: "Just testing it", type: "text", id: "texttest", value: ""},
//         {name: "Slider test", note: "Just testing it", type: "slider", id: "slidertest", value: 30, min: 20, max: 50, step: 10},
//         {
//             name: "Radio test",
//             note: "Just testing it",
//             type: "radio",
//             id: "radiotest",
//             value: "test",
//             options: [
//                 {name: "First", value: 30, description: "little hint"},
//                 {name: "IDK", value: "test", description: "who cares"},
//                 {name: "Something", value: 666, description: "something else"},
//                 {name: "Last", value: "last", description: "nothing more to add"}
//             ]
//         },
//         {name: "Keybind test", note: "Just testing it", type: "keybind", id: "keybindtest", value: ["Control", "H"]},
//         {name: "Color test", note: "Just testing it", type: "color", id: "colortest", value: "#ff0000", defaultValue: "#ffffff"},
//     ]
// }
]);

/***/ }),

/***/ "./src/loadingicon.js":
/*!****************************!*\
  !*** ./src/loadingicon.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const css = `/* BEGIN V2 LOADER */
/* =============== */

#bd-loading-icon {
  background-image: url(data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgMjAwMCAyMDAwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyMDAwIDIwMDAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiMzRTgyRTUiIGQ9Ik0xNDAyLjIsNjMxLjdjLTkuNy0zNTMuNC0yODYuMi00OTYtNjQyLjYtNDk2SDY4LjR2NzE0LjFsNDQyLDM5OFY0OTAuN2gyNTdjMjc0LjUsMCwyNzQuNSwzNDQuOSwwLDM0NC45SDU5Ny42djMyOS41aDE2OS44YzI3NC41LDAsMjc0LjUsMzQ0LjgsMCwzNDQuOGgtNjk5djM1NC45aDY5MS4yYzM1Ni4zLDAsNjMyLjgtMTQyLjYsNjQyLjYtNDk2YzAtMTYyLjYtNDQuNS0yODQuMS0xMjIuOS0zNjguNkMxMzU3LjcsOTE1LjgsMTQwMi4yLDc5NC4zLDE0MDIuMiw2MzEuN3oiLz48cGF0aCBmaWxsPSIjRkZGRkZGIiBkPSJNMTI2Mi41LDEzNS4yTDEyNjIuNSwxMzUuMmwtNzYuOCwwYzI2LjYsMTMuMyw1MS43LDI4LjEsNzUsNDQuM2M3MC43LDQ5LjEsMTI2LjEsMTExLjUsMTY0LjYsMTg1LjNjMzkuOSw3Ni42LDYxLjUsMTY1LjYsNjQuMywyNjQuNmwwLDEuMnYxLjJjMCwxNDEuMSwwLDU5Ni4xLDAsNzM3LjF2MS4ybDAsMS4yYy0yLjcsOTktMjQuMywxODgtNjQuMywyNjQuNmMtMzguNSw3My44LTkzLjgsMTM2LjItMTY0LjYsMTg1LjNjLTIyLjYsMTUuNy00Ni45LDMwLjEtNzIuNiw0My4xaDcyLjVjMzQ2LjIsMS45LDY3MS0xNzEuMiw2NzEtNTY3LjlWNzE2LjdDMTkzMy41LDMxMi4yLDE2MDguNywxMzUuMiwxMjYyLjUsMTM1LjJ6Ii8+PC9nPjwvc3ZnPg==);
}
#bd-loading-icon {
  position: fixed;
  bottom:5px;
  right:5px;
  z-index: 2147483647;
  display: block;
  width: 20px;
  height: 20px;
  background-size: 100% 100%;
  animation: bd-loading-animation 1.5s ease-in-out infinite;
}

@keyframes bd-loading-animation {
  0% { opacity: 0.05; }
  50% { opacity: 0.6; }
  100% { opacity: 0.05; }
}
/* =============== */
/*  END V2 LOADER  */`;
const iconStyle = document.createElement("style");
iconStyle.textContent = css;
const loadingIcon = document.createElement("div");
loadingIcon.id = "bd-loading-icon";
loadingIcon.className = "bd-loaderv2";
loadingIcon.title = "BetterDiscord is loading...";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (class {
  static show() {
    document.body.appendChild(iconStyle);
    document.body.appendChild(loadingIcon);
  }

  static hide() {
    if (iconStyle) iconStyle.remove();
    if (loadingIcon) loadingIcon.remove();
  }

});

/***/ }),

/***/ "./src/modules/addonmanager.js":
/*!*************************************!*\
  !*** ./src/modules/addonmanager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonManager)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _structs_addonerror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../structs/addonerror */ "./src/structs/addonerror.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _ui_misc_addoneditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/misc/addoneditor */ "./src/ui/misc/addoneditor.jsx");
/* harmony import */ var _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/floatingwindows */ "./src/ui/floatingwindows.js");










const React = _discordmodules__WEBPACK_IMPORTED_MODULE_6__["default"].React;

const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

const shell = (__webpack_require__(/*! electron */ "electron").shell);

const openItem = shell.openItem || shell.openPath;
const splitRegex = /[^\S\r\n]*?\r?(?:\r\n|\n)[^\S\r\n]*?\*[^\S\r\n]?/;
const escapedAtRegex = /^\\@/;

const stripBOM = function (fileContent) {
  if (fileContent.charCodeAt(0) === 0xFEFF) {
    fileContent = fileContent.slice(1);
  }

  return fileContent;
};

class AddonManager {
  get name() {
    return "";
  }

  get extension() {
    return "";
  }

  get duplicatePattern() {
    return /./;
  }

  get addonFolder() {
    return "";
  }

  get language() {
    return "";
  }

  get prefix() {
    return "addon";
  }

  emit(event, ...args) {
    return _emitter__WEBPACK_IMPORTED_MODULE_2__["default"].emit(`${this.prefix}-${event}`, ...args);
  }

  constructor() {
    this.timeCache = {};
    this.addonList = [];
    this.state = {};
    this.windows = new Set();
  }

  initialize() {
    return this.loadAllAddons();
  } // Subclasses should overload this and modify the addon object as needed to fully load it


  initializeAddon() {
    return;
  }

  startAddon() {
    return;
  }

  stopAddon() {
    return;
  }

  loadState() {
    const saved = _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].getData(`${this.prefix}s`);
    if (!saved) return;
    Object.assign(this.state, saved);
  }

  saveState() {
    _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].setData(`${this.prefix}s`, this.state);
  }

  watchAddons() {
    if (this.watcher) return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err(this.name, `Already watching ${this.prefix} addons.`);
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].log(this.name, `Starting to watch ${this.prefix} addons.`);
    this.watcher = fs.watch(this.addonFolder, {
      persistent: false
    }, async (eventType, filename) => {
      // console.log("watcher", eventType, filename, !eventType || !filename, !filename.endsWith(this.extension));
      if (!eventType || !filename) return; // console.log(eventType, filename)

      const absolutePath = path.resolve(this.addonFolder, filename);

      if (!filename.endsWith(this.extension)) {
        // Lets check to see if this filename has the duplicated file pattern `something(1).ext`
        const match = filename.match(this.duplicatePattern);
        if (!match) return;
        const ext = match[0];
        const truncated = filename.replace(ext, "");
        const newFilename = truncated + this.extension; // If this file already exists, give a warning and move on.

        if (fs.existsSync(newFilename)) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn(this.name, `Duplicate files found: ${filename} and ${newFilename}`);
          return;
        } // Rename the file and let it go on


        try {
          fs.renameSync(absolutePath, path.resolve(this.addonFolder, newFilename));
        } catch (error) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err(this.name, `Could not rename file: ${filename} ${newFilename}`, error);
        }
      } // console.log("watcher", "before promise");


      await new Promise(r => setTimeout(r, 100));

      try {
        const stats = fs.statSync(absolutePath); // console.log("watcher", stats);

        if (!stats.isFile()) return;
        if (!stats || !stats.mtime || !stats.mtime.getTime()) return;
        if (typeof stats.mtime.getTime() !== "number") return;
        if (this.timeCache[filename] == stats.mtime.getTime()) return;
        this.timeCache[filename] = stats.mtime.getTime();
        if (eventType == "rename") this.loadAddon(filename, true);
        if (eventType == "change") this.reloadAddon(filename, true);
      } catch (err) {
        // window.watcherError = err;
        // console.log("watcher", err);
        // console.dir(err);
        if (err.code !== "ENOENT" && !(err !== null && err !== void 0 && err.message.startsWith("ENOENT"))) return;
        delete this.timeCache[filename];
        this.unloadAddon(filename, true);
      }
    });
  }

  unwatchAddons() {
    if (!this.watcher) return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error(this.name, `Was not watching ${this.prefix} addons.`);
    this.watcher.close();
    delete this.watcher;
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].log(this.name, `No longer watching ${this.prefix} addons.`);
  }

  extractMeta(fileContent, filename) {
    const firstLine = fileContent.split("\n")[0];
    const hasOldMeta = firstLine.includes("//META") && firstLine.includes("*//");
    if (hasOldMeta) return this.parseOldMeta(fileContent, filename);
    const hasNewMeta = firstLine.includes("/**");
    if (hasNewMeta) return this.parseNewMeta(fileContent);
    throw new _structs_addonerror__WEBPACK_IMPORTED_MODULE_4__["default"](filename, filename, _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.metaNotFound, {
      message: "",
      stack: fileContent
    }, this.prefix);
  }

  parseOldMeta(fileContent, filename) {
    const meta = fileContent.split("\n")[0];
    const metaData = meta.substring(meta.lastIndexOf("//META") + 6, meta.lastIndexOf("*//"));
    let parsed = null;

    try {
      parsed = JSON.parse(metaData);
    } catch (err) {
      throw new _structs_addonerror__WEBPACK_IMPORTED_MODULE_4__["default"](filename, filename, _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.metaError, err, this.prefix);
    }

    if (!parsed || !parsed.name) throw new _structs_addonerror__WEBPACK_IMPORTED_MODULE_4__["default"](filename, filename, _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.missingNameData, {
      message: "",
      stack: meta
    }, this.prefix);
    parsed.format = "json";
    return parsed;
  }

  parseNewMeta(fileContent) {
    const block = fileContent.split("/**", 2)[1].split("*/", 1)[0];
    const out = {};
    let field = "";
    let accum = "";

    for (const line of block.split(splitRegex)) {
      if (line.length === 0) continue;

      if (line.charAt(0) === "@" && line.charAt(1) !== " ") {
        out[field] = accum.trim();
        const l = line.indexOf(" ");
        field = line.substring(1, l);
        accum = line.substring(l + 1);
      } else {
        accum += " " + line.replace("\\n", "\n").replace(escapedAtRegex, "@");
      }
    }

    out[field] = accum.trim();
    delete out[""];
    out.format = "jsdoc";
    return out;
  } // Subclasses should overload this and modify the addon using the fileContent as needed to "require()"" the file


  requireAddon(filename) {
    let fileContent = fs.readFileSync(filename, "utf8");
    fileContent = stripBOM(fileContent);
    const stats = fs.statSync(filename);
    const addon = this.extractMeta(fileContent, path.basename(filename));
    if (!addon.author) addon.author = _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.unknownAuthor;
    if (!addon.version) addon.version = "???";
    if (!addon.description) addon.description = _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.noDescription; // if (!addon.name || !addon.author || !addon.description || !addon.version) return new AddonError(addon.name || path.basename(filename), filename, "Addon is missing name, author, description, or version", {message: "Addon must provide name, author, description, and version.", stack: ""}, this.prefix);

    addon.id = addon.name || path.basename(filename);
    addon.slug = path.basename(filename).replace(this.extension, "").replace(/ /g, "-");
    addon.filename = path.basename(filename);
    addon.added = stats.atimeMs;
    addon.modified = stats.mtimeMs;
    addon.size = stats.size;
    addon.fileContent = fileContent;
    if (this.addonList.find(c => c.id == addon.id)) throw new _structs_addonerror__WEBPACK_IMPORTED_MODULE_4__["default"](addon.name, filename, _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.alreadyExists.format({
      type: this.prefix,
      name: addon.name
    }), this.prefix);
    this.addonList.push(addon);
    return addon;
  } // Subclasses should use the return (if not AddonError) and push to this.addonList


  loadAddon(filename, shouldToast = false) {
    if (typeof filename === "undefined") return;
    let addon;

    try {
      addon = this.requireAddon(path.resolve(this.addonFolder, filename));
    } catch (e) {
      const partialAddon = this.addonList.find(c => c.filename == filename);

      if (partialAddon) {
        partialAddon.partial = true;
        this.state[partialAddon.id] = false;
        this.emit("loaded", partialAddon);
      }

      return e;
    }

    const error = this.initializeAddon(addon);

    if (error) {
      this.state[addon.id] = false;
      addon.partial = true;
      this.emit("loaded", addon);
      return error;
    }

    if (shouldToast) _ui_toasts__WEBPACK_IMPORTED_MODULE_5__["default"].success(_strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.wasUnloaded.format({
      name: addon.name,
      version: addon.version
    }));
    this.emit("loaded", addon);
    if (!this.state[addon.id]) return this.state[addon.id] = false;
    return this.startAddon(addon);
  }

  unloadAddon(idOrFileOrAddon, shouldToast = true, isReload = false) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon; // console.log("watcher", "unloadAddon", idOrFileOrAddon, addon);

    if (!addon) return false;
    if (this.state[addon.id]) isReload ? this.stopAddon(addon) : this.disableAddon(addon);
    this.addonList.splice(this.addonList.indexOf(addon), 1);
    this.emit("unloaded", addon);
    if (shouldToast) _ui_toasts__WEBPACK_IMPORTED_MODULE_5__["default"].success(_strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.wasUnloaded.format({
      name: addon.name
    }));
    return true;
  }

  reloadAddon(idOrFileOrAddon, shouldToast = true) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    const didUnload = this.unloadAddon(addon, shouldToast, true);
    if (addon && !didUnload) return didUnload;
    return this.loadAddon(addon ? addon.filename : idOrFileOrAddon, shouldToast);
  }

  isLoaded(idOrFile) {
    const addon = this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
    if (!addon) return false;
    return true;
  }

  isEnabled(idOrFile) {
    const addon = this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
    if (!addon) return false;
    return this.state[addon.id];
  }

  getAddon(idOrFile) {
    return this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
  }

  enableAddon(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon || addon.partial) return;
    if (this.state[addon.id]) return;
    this.state[addon.id] = true;
    this.startAddon(addon);
    this.saveState();
  }

  disableAddon(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon || addon.partial) return;
    if (!this.state[addon.id]) return;
    this.state[addon.id] = false;
    this.stopAddon(addon);
    this.saveState();
  }

  toggleAddon(id) {
    if (this.state[id]) this.disableAddon(id);else this.enableAddon(id);
  }

  loadNewAddons() {
    const files = fs.readdirSync(this.addonFolder);
    const removed = this.addonList.filter(t => !files.includes(t.filename)).map(c => c.id);
    const added = files.filter(f => !this.addonList.find(t => t.filename == f) && f.endsWith(this.extension) && fs.statSync(path.resolve(this.addonFolder, f)).isFile());
    return {
      added,
      removed
    };
  }

  updateList() {
    const results = this.loadNewAddons();

    for (const filename of results.added) this.loadAddon(filename);

    for (const name of results.removed) this.unloadAddon(name);
  }

  loadAllAddons() {
    this.loadState();
    const errors = [];
    const files = fs.readdirSync(this.addonFolder);

    for (const filename of files) {
      const absolutePath = path.resolve(this.addonFolder, filename);
      const stats = fs.statSync(absolutePath);
      if (!stats || !stats.isFile()) continue;
      this.timeCache[filename] = stats.mtime.getTime();

      if (!filename.endsWith(this.extension)) {
        // Lets check to see if this filename has the duplicated file pattern `something(1).ext`
        const match = filename.match(this.duplicatePattern);
        if (!match) continue;
        const ext = match[0];
        const truncated = filename.replace(ext, "");
        const newFilename = truncated + this.extension; // If this file already exists, give a warning and move on.

        if (fs.existsSync(newFilename)) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("AddonManager", `Duplicate files found: ${filename} and ${newFilename}`);
          continue;
        } // Rename the file and let it go on


        fs.renameSync(absolutePath, path.resolve(this.addonFolder, newFilename));
      }

      const addon = this.loadAddon(filename, false);
      if (addon instanceof _structs_addonerror__WEBPACK_IMPORTED_MODULE_4__["default"]) errors.push(addon);
    }

    this.saveState();
    this.watchAddons();
    return errors;
  }

  deleteAddon(idOrFileOrAddon) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon; // console.log(path.resolve(this.addonFolder, addon.filename), fs.unlinkSync)

    return fs.unlinkSync(path.resolve(this.addonFolder, addon.filename));
  }

  saveAddon(idOrFileOrAddon, content) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    return fs.writeFileSync(path.resolve(this.addonFolder, addon.filename), content);
  }

  editAddon(idOrFileOrAddon, system) {
    const addon = typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
    const fullPath = path.resolve(this.addonFolder, addon.filename);
    if (typeof system == "undefined") system = _settingsmanager__WEBPACK_IMPORTED_MODULE_1__["default"].get("settings", "addons", "editAction") == "system";
    if (system) return openItem(`${fullPath}`);
    return this.openDetached(addon);
  }

  openDetached(addon) {
    const fullPath = path.resolve(this.addonFolder, addon.filename);
    const content = fs.readFileSync(fullPath).toString();
    if (this.windows.has(fullPath)) return;
    this.windows.add(fullPath);
    const editorRef = React.createRef();
    const editor = React.createElement(_ui_misc_addoneditor__WEBPACK_IMPORTED_MODULE_8__["default"], {
      id: "bd-floating-editor-" + addon.id,
      ref: editorRef,
      content: content,
      save: this.saveAddon.bind(this, addon),
      openNative: this.editAddon.bind(this, addon, true),
      language: this.language
    });
    _ui_floatingwindows__WEBPACK_IMPORTED_MODULE_9__["default"].open({
      onClose: () => {
        this.windows.delete(fullPath);
      },
      onResize: () => {
        if (!editorRef || !editorRef.current || !editorRef.current.resize) return;
        editorRef.current.resize();
      },
      title: addon.name,
      id: "bd-floating-window-" + addon.id,
      className: "floating-addon-window",
      height: 470,
      width: 410,
      center: true,
      resizable: true,
      children: editor,
      confirmClose: () => {
        if (!editorRef || !editorRef.current) return false;
        return editorRef.current.hasUnsavedChanges;
      },
      confirmationText: _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Addons.confirmationText.format({
        name: addon.name
      })
    });
  }

}

/***/ }),

/***/ "./src/modules/api/addonapi.js":
/*!*************************************!*\
  !*** ./src/modules/api/addonapi.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * `AddonAPI` is a utility class for working with plugins and themes. Instances are accessible through the {@link BdApi}.
 * @name AddonAPI
 */
class AddonAPI {
  #manager;

  constructor(manager) {
    this.#manager = manager;
  }
  /**
   * The path to the addon folder.
   * @type string
   */


  get folder() {
    return this.#manager.addonFolder;
  }
  /**
   * Determines if a particular adon is enabled.
   * @param {string} idOrFile Addon id or filename.
   * @returns {boolean}
   */


  isEnabled(idOrFile) {
    return this.#manager.isEnabled(idOrFile);
  }
  /**
   * Enables the given addon.
   * @param {string} idOrFile Addon id or filename.
   */


  enable(idOrAddon) {
    return this.#manager.enableAddon(idOrAddon);
  }
  /**
   * Disables the given addon.
   * @param {string} idOrFile Addon id or filename.
   */


  disable(idOrAddon) {
    return this.#manager.disableAddon(idOrAddon);
  }
  /**
   * Toggles if a particular addon is enabled.
   * @param {string} idOrFile Addon id or filename.
   */


  toggle(idOrAddon) {
    return this.#manager.toggleAddon(idOrAddon);
  }
  /**
   * Reloads if a particular addon is enabled.
   * @param {string} idOrFile Addon id or filename.
   */


  reload(idOrFileOrAddon) {
    return this.#manager.reloadAddon(idOrFileOrAddon);
  }
  /**
   * Gets a particular addon.
   * @param {string} idOrFile Addon id or filename.
   * @returns {object} Addon instance
   */


  get(idOrFile) {
    return this.#manager.getAddon(idOrFile);
  }
  /**
   * Gets all addons of this type.
   * @returns {Array<object>} Array of all addon instances
   */


  getAll() {
    return this.#manager.addonList.map(a => this.#manager.getAddon(a.id));
  }

}

Object.freeze(AddonAPI);
Object.freeze(AddonAPI.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddonAPI);

/***/ }),

/***/ "./src/modules/api/contextmenu.js":
/*!****************************************!*\
  !*** ./src/modules/api/contextmenu.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../webpackmodules */ "./src/modules/webpackmodules.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patcher */ "./src/modules/patcher.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules */ "./src/modules/modules.js");





const MenuComponents = (() => {
  const out = {};
  const componentMap = {
    separator: "Separator",
    checkbox: "CheckboxItem",
    radio: "RadioItem",
    control: "ControlItem",
    groupstart: "Group",
    customitem: "Item"
  };
  let ContextMenuIndex = null;
  const ContextMenuModule = _webpackmodules__WEBPACK_IMPORTED_MODULE_0__["default"].getModule((m, _, id) => Object.values(m).some(v => v === null || v === void 0 ? void 0 : v.FLEXIBLE) && (ContextMenuIndex = id), {
    searchExports: false
  });

  const rawMatches = _webpackmodules__WEBPACK_IMPORTED_MODULE_0__["default"].require.m[ContextMenuIndex].toString().matchAll(/if\(\w+\.type===\w+\.(\w+)\).+?type:"(.+?)"/g);

  out.Menu = Object.values(ContextMenuModule).find(v => v.toString().includes(".isUsingKeyboardNavigation"));

  for (const [, identifier, type] of rawMatches) {
    out[componentMap[type]] = ContextMenuModule[identifier];
  }

  return out;
})();

const ContextMenuActions = (() => {
  const out = {};
  const ActionsModule = _webpackmodules__WEBPACK_IMPORTED_MODULE_0__["default"].getModule(m => Object.values(m).some(v => typeof v === "function" && v.toString().includes("CONTEXT_MENU_CLOSE")), {
    searchExports: false
  });

  for (const key of Object.keys(ActionsModule)) {
    if (ActionsModule[key].toString().includes("CONTEXT_MENU_CLOSE")) {
      out.closeContextMenu = ActionsModule[key];
    } else if (ActionsModule[key].toString().includes("renderLazy")) {
      out.openContextMenu = ActionsModule[key];
    }
  }

  return out;
})();

class MenuPatcher {
  static MAX_PATCH_ITERATIONS = 10;
  static patches = {};
  static subPatches = new WeakMap();

  static initialize() {
    const {
      module,
      key
    } = (() => {
      const foundModule = _webpackmodules__WEBPACK_IMPORTED_MODULE_0__["default"].getModule(m => Object.values(m).some(v => typeof v === "function" && v.toString().includes("CONTEXT_MENU_CLOSE")), {
        searchExports: false
      });
      const foundKey = Object.keys(foundModule).find(k => foundModule[k].length === 3);
      return {
        module: foundModule,
        key: foundKey
      };
    })();

    _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].before("ContextMenuPatcher", module, key, (_, methodArguments) => {
      const promise = methodArguments[1];

      methodArguments[1] = async function () {
        const render = await promise.apply(this, arguments);
        return props => {
          const res = render(props);

          if (res !== null && res !== void 0 && res.props.navId) {
            MenuPatcher.runPatches(res.props.navId, res, props);
          } else if (typeof (res === null || res === void 0 ? void 0 : res.type) === "function") {
            MenuPatcher.patchRecursive(res, "type");
          }

          return res;
        };
      };
    });
  }

  static patchRecursive(target, method, iteration = 0) {
    if (iteration >= this.MAX_PATCH_ITERATIONS) return;

    const proxyFunction = this.subPatches.get(target[method]) ?? (() => {
      const originalFunction = target[method];
      const depth = ++iteration;

      function patch() {
        var _res$props, _res$props2, _res$props2$children, _res$props2$children$;

        const res = originalFunction.apply(this, arguments);
        if (!res) return res;

        if (((_res$props = res.props) === null || _res$props === void 0 ? void 0 : _res$props.navId) ?? ((_res$props2 = res.props) !== null && _res$props2 !== void 0 && (_res$props2$children = _res$props2.children) !== null && _res$props2$children !== void 0 && (_res$props2$children$ = _res$props2$children.props) !== null && _res$props2$children$ !== void 0 && _res$props2$children$.navId)) {
          var _res$props3, _res$props3$children, _res$props3$children$;

          MenuPatcher.runPatches(res.props.navId ?? ((_res$props3 = res.props) === null || _res$props3 === void 0 ? void 0 : (_res$props3$children = _res$props3.children) === null || _res$props3$children === void 0 ? void 0 : (_res$props3$children$ = _res$props3$children.props) === null || _res$props3$children$ === void 0 ? void 0 : _res$props3$children$.navId), res, arguments[0]);
        } else {
          const layer = res.props.children ? res.props.children : res;

          if (typeof (layer === null || layer === void 0 ? void 0 : layer.type) == "function") {
            MenuPatcher.patchRecursive(layer, "type", depth);
          }
        }

        return res;
      }

      patch._originalFunction = originalFunction;
      Object.assign(patch, originalFunction);
      this.subPatches.set(originalFunction, patch);
      return patch;
    })();

    target[method] = proxyFunction;
  }

  static runPatches(id, res, props) {
    if (!this.patches[id]) return;

    for (const patch of this.patches[id]) {
      try {
        patch(res, props);
      } catch (error) {
        _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("ContextMenu~runPatches", `Could not run ${id} patch for`, patch, error);
      }
    }
  }

  static patch(id, callback) {
    var _this$patches;

    (_this$patches = this.patches)[id] ?? (_this$patches[id] = new Set());
    this.patches[id].add(callback);
  }

  static unpatch(id, callback) {
    var _this$patches$id;

    (_this$patches$id = this.patches[id]) === null || _this$patches$id === void 0 ? void 0 : _this$patches$id.delete(callback);
  }

}
/**
 * `ContextMenu` is a module to help patch and create context menus. Instance is accessible through the {@link BdApi}.
 * @type ContextMenu
 * @summary {@link ContextMenu} is a utility class for interacting with React internals.
 * @name ContextMenu
 */


class ContextMenu {
  /**
   * Allows you to patch a given context menu. Acts as a wrapper around the `Patcher`.
   * 
   * @param {string} navId Discord's internal navId used to identify context menus
   * @param {function} callback callback function that accepts the react render tree
   * @returns {function} a function that automatically unpatches
   */
  patch(navId, callback) {
    MenuPatcher.patch(navId, callback);
    return () => MenuPatcher.unpatch(navId, callback);
  }
  /**
   * Allows you to remove the patch added to a given context menu.
   * 
   * @param {string} navId the original navId from patching
   * @param {function} callback the original callback from patching
   */


  unpatch(navId, callback) {
    MenuPatcher.unpatch(navId, callback);
  }
  /**
   * Builds a single menu item. The only prop shown here is the type, the rest should
   * match the actual component being built. View those to see what options exist
   * for each, they often have less in common than you might think.
   * 
   * @param {object} props - props used to build the item
   * @param {string} [props.type="text"] - type of the item, options: text, submenu, toggle, radio, custom, separator
   * @returns {object} the created component
   * 
   * @example
   * // Creates a single menu item that prints "MENU ITEM" on click
   * ContextMenu.buildItem({
   *      label: "Menu Item",
   *      action: () => {console.log("MENU ITEM");}
   * });
   * 
   * @example
   * // Creates a single toggle item that starts unchecked
   * // and print the new value on every toggle
   * ContextMenu.buildItem({
   *      type: "toggle",
   *      label: "Item Toggle",
   *      checked: false,
   *      action: (newValue) => {console.log(newValue);}
   * });
   */


  buildItem(props) {
    const {
      type
    } = props;
    if (type === "separator") return _modules__WEBPACK_IMPORTED_MODULE_3__.React.createElement(MenuComponents.Separator);
    let Component = MenuComponents.Item;

    if (type === "submenu") {
      if (!props.children) props.children = this.buildMenuChildren(props.render || props.items);
    } else if (type === "toggle" || type === "radio") {
      Component = type === "toggle" ? MenuComponents.CheckboxItem : MenuComponents.RadioItem;
      if (props.active) props.checked = props.active;
    } else if (type === "control") {
      Component = MenuComponents.ControlItem;
    }

    if (!props.id) props.id = `${props.label.replace(/^[^a-z]+|[^\w-]+/gi, "-")}`;
    if (props.danger) props.color = "colorDanger";
    if (props.onClick && !props.action) props.action = props.onClick;
    props.extended = true; // This is done to make sure the UI actually displays the on/off correctly

    if (type === "toggle") {
      const [active, doToggle] = _modules__WEBPACK_IMPORTED_MODULE_3__.React.useState(props.checked || false);
      const originalAction = props.action;
      props.checked = active;

      props.action = function (ev) {
        originalAction(ev);
        doToggle(!active);
      };
    }

    return _modules__WEBPACK_IMPORTED_MODULE_3__.React.createElement(Component, props);
  }
  /**
   * Creates the all the items **and groups** of a context menu recursively.
   * There is no hard limit to the number of groups within groups or number
   * of items in a menu.
   * @param {Array<object>} setup - array of item props used to build items. See {@link ContextMenu.buildItem}
   * @returns {Array<object>} array of the created component
   * 
   * @example
   * // Creates a single item group item with a toggle item
   * ContextMenu.buildMenuChildren([{
   *      type: "group",
   *      items: [{
   *          type: "toggle",
   *          label: "Item Toggle",
   *          active: false,
   *          action: (newValue) => {console.log(newValue);}
   *      }]
   * }]);
   * 
   * @example
   * // Creates two item groups with a single toggle item each
   * ContextMenu.buildMenuChildren([{
   *     type: "group",
   *     items: [{
   *         type: "toggle",
   *         label: "Item Toggle",
   *         active: false,
   *         action: (newValue) => {
   *             console.log(newValue);
   *         }
   *     }]
   * }, {
   *     type: "group",
   *     items: [{
   *         type: "toggle",
   *         label: "Item Toggle",
   *         active: false,
   *         action: (newValue) => {
   *             console.log(newValue);
   *         }
   *     }]
   * }]);
   */


  buildMenuChildren(setup) {
    const mapper = s => {
      if (s.type === "group") return buildGroup(s);
      return this.buildItem(s);
    };

    const buildGroup = function (group) {
      const items = group.items.map(mapper).filter(i => i);
      return _modules__WEBPACK_IMPORTED_MODULE_3__.React.createElement(MenuComponents.Group, null, items);
    };

    return setup.map(mapper).filter(i => i);
  }
  /**
   * Creates the menu *component* including the wrapping `ContextMenu`.
   * Calls {@link ContextMenu.buildMenuChildren} under the covers.
   * Used to call in combination with {@link ContextMenu.open}.
   * @param {Array<object>} setup - array of item props used to build items. See {@link ContextMenu.buildMenuChildren}
   * @returns {function} the unique context menu component
   */


  buildMenu(setup) {
    return props => {
      return _modules__WEBPACK_IMPORTED_MODULE_3__.React.createElement(MenuComponents.Menu, props, this.buildMenuChildren(setup));
    };
  }
  /**
   * Function that allows you to open an entire context menu. Recommended to build the menu with this module.
   * 
   * @param {MouseEvent} event - The context menu event. This can be emulated, requires target, and all X, Y locations.
   * @param {function} menuComponent - Component to render. This can be any react component or output of {@link ContextMenu.buildMenu}
   * @param {object} config - configuration/props for the context menu
   * @param {string} [config.position="right"] - default position for the menu, options: "left", "right"
   * @param {string} [config.align="top"] - default alignment for the menu, options: "bottom", "top"
   * @param {function} [config.onClose] - function to run when the menu is closed
   * @param {boolean} [config.noBlurEvent=false] - No clue
   */


  open(event, menuComponent, config) {
    return ContextMenuActions.openContextMenu(event, function (e) {
      return _modules__WEBPACK_IMPORTED_MODULE_3__.React.createElement(menuComponent, Object.assign({}, e, {
        onClose: ContextMenuActions.closeContextMenu
      }));
    }, config);
  }
  /**
   * Closes the current opened context menu immediately.
   */


  close() {
    ContextMenuActions.closeContextMenu();
  }

}

Object.assign(ContextMenu.prototype, MenuComponents);
Object.freeze(ContextMenu);
Object.freeze(ContextMenu.prototype);
MenuPatcher.initialize();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContextMenu);

/***/ }),

/***/ "./src/modules/api/data.js":
/*!*********************************!*\
  !*** ./src/modules/api/data.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datastore */ "./src/modules/datastore.js");

/**
 * `Data` is a simple utility class for the management of plugin data. An instance is available on {@link BdApi}.
 * @type Data
 * @summary {@link Data} is a simple utility class for the management of plugin data.
 * @name Data
 */

class Data {
  #callerName = "";

  constructor(callerName) {
    if (!callerName) return;
    this.#callerName = callerName;
  }
  /**
   * Saves JSON-serializable data.
   * 
   * @param {string} pluginName Name of the plugin saving data
   * @param {string} key Which piece of data to store
   * @param {any} data The data to be saved
   */


  save(pluginName, key, data) {
    if (this.#callerName) {
      data = key;
      key = pluginName;
      pluginName = this.#callerName;
    }

    return _datastore__WEBPACK_IMPORTED_MODULE_0__["default"].setPluginData(pluginName, key, data);
  }
  /**
   * Loads previously stored data.
   * 
   * @param {string} pluginName Name of the plugin loading data
   * @param {string} key Which piece of data to load
   * @returns {any} The stored data
   */


  load(pluginName, key) {
    if (this.#callerName) {
      key = pluginName;
      pluginName = this.#callerName;
    }

    return _datastore__WEBPACK_IMPORTED_MODULE_0__["default"].getPluginData(pluginName, key);
  }
  /**
   * Deletes a piece of stored data, this is different than saving as null or undefined.
   * 
   * @param {string} pluginName Name of the plugin deleting data
   * @param {string} key Which piece of data to delete
   */


  delete(pluginName, key) {
    if (this.#callerName) {
      key = pluginName;
      pluginName = this.#callerName;
    }

    return _datastore__WEBPACK_IMPORTED_MODULE_0__["default"].deletePluginData(pluginName, key);
  }

}

Object.freeze(Data);
Object.freeze(Data.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);

/***/ }),

/***/ "./src/modules/api/dom.js":
/*!********************************!*\
  !*** ./src/modules/api/dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dommanager */ "./src/modules/dommanager.js");

/**
 * `DOM` is a simple utility class for dom manipulation. An instance is available on {@link BdApi}.
 * @type DOM
 * @summary {@link DOM} is a simple utility class for dom manipulation.
 * @name DOM
 */

class DOM {
  /**
   * Current width of the user's screen.
   * @type {number}
   */
  get screenWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  /**
   * Current height of the user's screen.
   * @type {number}
   */


  get screenHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  #callerName = "";

  constructor(callerName) {
    if (!callerName) return;
    this.#callerName = callerName;
  }
  /**
   * Adds a `<style>` to the document with the given ID.
   * 
   * @param {string} id ID to use for style element
   * @param {string} css CSS to apply to the document
   */


  addStyle(id, css) {
    if (this.#callerName && arguments.length === 2) {
      id = arguments[0];
      css = arguments[1];
    } else if (this.#callerName) {
      css = id;
      id = this.#callerName;
    }

    _dommanager__WEBPACK_IMPORTED_MODULE_0__["default"].injectStyle(id, css);
  }
  /**
   * Removes a `<style>` from the document corresponding to the given ID.
   * 
   * @param {string} id ID uses for the style element
   */


  removeStyle(id) {
    if (this.#callerName && arguments.length === 1) {
      id = arguments[0];
    } else if (this.#callerName) {
      id = this.#callerName;
    }

    _dommanager__WEBPACK_IMPORTED_MODULE_0__["default"].removeStyle(id);
  }
  /**
   * Adds a listener for when the node is removed from the document body.
   * 
   * @param {HTMLElement} node Node to be observed
   * @param {function} callback Function to run when fired
   */


  onRemoved(node, callback) {
    return _dommanager__WEBPACK_IMPORTED_MODULE_0__["default"].onRemoved(node, callback);
  }
  /**
   * Utility to help smoothly animate using JavaScript
   * 
   * @param {function} update render function indicating the style should be updates
   * @param {number} duration duration in ms to animate for
   * @param {object} [options] option to customize the animation
   */


  animate(update, duration, options = {}) {
    return _dommanager__WEBPACK_IMPORTED_MODULE_0__["default"].animate({
      update,
      duration,
      timing: options.timing
    });
  }
  /**
   * Utility function to make creating DOM elements easier. Acts similarly 
   * to `React.createElement`
   * 
   * @param {string} tag HTML tag name to create
   * @param {object} [options] options object to customize the element
   * @param {string} [options.className] class name to add to the element
   * @param {string} [options.id] id to set for the element
   * @param {HTMLElement} [options.target] target element to automatically append to
   * @param {HTMLElement} [child] child node to add
   * @returns HTMLElement
   */


  createElement(tag, options = {}, child = null) {
    return _dommanager__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(tag, options, child);
  }
  /**
   * Parses a string of HTML and returns the results. If the second parameter is true,
   * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
   * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.
   * 
   * If the second parameter is false, then the return value will be the list of parsed
   * nodes and there were multiple top level nodes, otherwise the single node is returned.
   * @param {string} html - HTML to be parsed
   * @param {boolean} [fragment=false] - Whether or not the return should be the raw `DocumentFragment`
   * @returns {(DocumentFragment|NodeList|HTMLElement)} - The result of HTML parsing
   */


  parseHTML(html, fragment = false) {
    return _dommanager__WEBPACK_IMPORTED_MODULE_0__["default"].parseHTML(html, fragment);
  }

}

Object.freeze(DOM);
Object.freeze(DOM.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DOM);

/***/ }),

/***/ "./src/modules/api/index.js":
/*!**********************************!*\
  !*** ./src/modules/api/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BdApi)
/* harmony export */ });
/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../thememanager */ "./src/modules/thememanager.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _addonapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addonapi */ "./src/modules/api/addonapi.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./data */ "./src/modules/api/data.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dom */ "./src/modules/api/dom.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./patcher */ "./src/modules/api/patcher.js");
/* harmony import */ var _reactutils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reactutils */ "./src/modules/api/reactutils.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui */ "./src/modules/api/ui.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./src/modules/api/utils.js");
/* harmony import */ var _webpack__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./webpack */ "./src/modules/api/webpack.js");
/* harmony import */ var _legacy__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./legacy */ "./src/modules/api/legacy.js");
/* harmony import */ var _contextmenu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contextmenu */ "./src/modules/api/contextmenu.js");













const bounded = new Map();
const PluginAPI = new _addonapi__WEBPACK_IMPORTED_MODULE_3__["default"](_pluginmanager__WEBPACK_IMPORTED_MODULE_0__["default"]);
const ThemeAPI = new _addonapi__WEBPACK_IMPORTED_MODULE_3__["default"](_thememanager__WEBPACK_IMPORTED_MODULE_1__["default"]);
const PatcherAPI = new _patcher__WEBPACK_IMPORTED_MODULE_6__["default"]();
const DataAPI = new _data__WEBPACK_IMPORTED_MODULE_4__["default"]();
const DOMAPI = new _dom__WEBPACK_IMPORTED_MODULE_5__["default"]();
const ContextMenuAPI = new _contextmenu__WEBPACK_IMPORTED_MODULE_12__["default"]();
/**
 * `BdApi` is a globally (`window.BdApi`) accessible object for use by plugins and developers to make their lives easier.
 * @name BdApi
 */

class BdApi {
  constructor(pluginName) {
    if (!pluginName) return BdApi;
    if (bounded.has(pluginName)) return bounded.get(pluginName);

    if (typeof pluginName !== "string") {
      _common_logger__WEBPACK_IMPORTED_MODULE_2__["default"].error("BdApi", "Plugin name not a string, returning generic API!");
      return BdApi;
    } // Re-add legacy functions


    Object.assign(this, _legacy__WEBPACK_IMPORTED_MODULE_11__); // Bind to pluginName

    this.Patcher = new _patcher__WEBPACK_IMPORTED_MODULE_6__["default"](pluginName);
    this.Data = new _data__WEBPACK_IMPORTED_MODULE_4__["default"](pluginName);
    this.DOM = new _dom__WEBPACK_IMPORTED_MODULE_5__["default"](pluginName);
    bounded.set(pluginName, this);
  } // Non-bound namespaces


  get Plugins() {
    return PluginAPI;
  }

  get Themes() {
    return ThemeAPI;
  }

  get Webpack() {
    return _webpack__WEBPACK_IMPORTED_MODULE_10__["default"];
  }

  get Utils() {
    return _utils__WEBPACK_IMPORTED_MODULE_9__["default"];
  }

  get UI() {
    return _ui__WEBPACK_IMPORTED_MODULE_8__["default"];
  }

  get ReactUtils() {
    return _reactutils__WEBPACK_IMPORTED_MODULE_7__["default"];
  }

  get ContextMenu() {
    return ContextMenuAPI;
  }

} // Add legacy functions

Object.assign(BdApi, _legacy__WEBPACK_IMPORTED_MODULE_11__);
/**
 * An instance of {@link AddonAPI} to access plugins.
 * @type AddonAPI
 */

BdApi.Plugins = PluginAPI;
/**
 * An instance of {@link AddonAPI} to access themes.
 * @type AddonAPI
 */

BdApi.Themes = ThemeAPI;
/**
 * An instance of {@link Patcher} to monkey patch functions.
 * @type Patcher
 */

BdApi.Patcher = PatcherAPI;
/**
 * An instance of {@link Webpack} to search for modules.
 * @type Webpack
 */

BdApi.Webpack = _webpack__WEBPACK_IMPORTED_MODULE_10__["default"];
/**
 * An instance of {@link Data} to manage data.
 * @type Data
 */

BdApi.Data = DataAPI;
/**
 * An instance of {@link UI} to create interfaces.
 * @type UI
 */

BdApi.UI = _ui__WEBPACK_IMPORTED_MODULE_8__["default"];
/**
 * An instance of {@link ReactUtils} to work with React.
 * @type ReactUtils
 */

BdApi.ReactUtils = _reactutils__WEBPACK_IMPORTED_MODULE_7__["default"];
/**
 * An instance of {@link Utils} for general utility functions.
 * @type Utils
 */

BdApi.Utils = _utils__WEBPACK_IMPORTED_MODULE_9__["default"];
/**
 * An instance of {@link DOM} to interact with the DOM.
 * @type DOM
 */

BdApi.DOM = DOMAPI;
/**
 * An instance of {@link ContextMenu} for interacting with context menus
 * @type ContextMenu
 */

BdApi.ContextMenu = ContextMenuAPI;
Object.freeze(BdApi);
Object.freeze(BdApi.prototype);

/***/ }),

/***/ "./src/modules/api/legacy.js":
/*!***********************************!*\
  !*** ./src/modules/api/legacy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "React": () => (/* binding */ React),
/* harmony export */   "ReactDOM": () => (/* binding */ ReactDOM),
/* harmony export */   "alert": () => (/* binding */ alert),
/* harmony export */   "clearCSS": () => (/* binding */ clearCSS),
/* harmony export */   "deleteData": () => (/* binding */ deleteData),
/* harmony export */   "disableSetting": () => (/* binding */ disableSetting),
/* harmony export */   "emotes": () => (/* binding */ emotes),
/* harmony export */   "enableSetting": () => (/* binding */ enableSetting),
/* harmony export */   "findAllModules": () => (/* binding */ findAllModules),
/* harmony export */   "findModule": () => (/* binding */ findModule),
/* harmony export */   "findModuleByDisplayName": () => (/* binding */ findModuleByDisplayName),
/* harmony export */   "findModuleByProps": () => (/* binding */ findModuleByProps),
/* harmony export */   "findModuleByPrototypes": () => (/* binding */ findModuleByPrototypes),
/* harmony export */   "getBDData": () => (/* binding */ getBDData),
/* harmony export */   "getData": () => (/* binding */ loadData),
/* harmony export */   "getInternalInstance": () => (/* binding */ getInternalInstance),
/* harmony export */   "injectCSS": () => (/* binding */ injectCSS),
/* harmony export */   "isSettingEnabled": () => (/* binding */ isSettingEnabled),
/* harmony export */   "linkJS": () => (/* binding */ linkJS),
/* harmony export */   "loadData": () => (/* binding */ loadData),
/* harmony export */   "monkeyPatch": () => (/* binding */ monkeyPatch),
/* harmony export */   "onRemoved": () => (/* binding */ onRemoved),
/* harmony export */   "openDialog": () => (/* binding */ openDialog),
/* harmony export */   "saveData": () => (/* binding */ saveData),
/* harmony export */   "setBDData": () => (/* binding */ setBDData),
/* harmony export */   "setData": () => (/* binding */ saveData),
/* harmony export */   "settings": () => (/* binding */ settings),
/* harmony export */   "showConfirmationModal": () => (/* binding */ showConfirmationModal),
/* harmony export */   "showNotice": () => (/* binding */ showNotice),
/* harmony export */   "showToast": () => (/* binding */ showToast),
/* harmony export */   "suppressErrors": () => (/* binding */ suppressErrors),
/* harmony export */   "testJSON": () => (/* binding */ testJSON),
/* harmony export */   "toggleSetting": () => (/* binding */ toggleSetting),
/* harmony export */   "unlinkJS": () => (/* binding */ unlinkJS),
/* harmony export */   "version": () => (/* binding */ version)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data.js */ "./src/data/data.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webpackmodules */ "./src/modules/webpackmodules.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datastore */ "./src/modules/datastore.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_notices__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../ui/notices */ "./src/ui/notices.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../patcher */ "./src/modules/patcher.js");
/* harmony import */ var _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../builtins/emotes/emotes */ "./src/builtins/emotes/emotes.js");
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ipc */ "./src/modules/ipc.js");













/** 
 * The React module being used inside Discord.
 * @type React
 * @memberof BdApi
 */

const React = _discordmodules__WEBPACK_IMPORTED_MODULE_2__["default"].React;
/** 
 * The ReactDOM module being used inside Discord.
 * @type ReactDOM
 * @memberof BdApi
 */

const ReactDOM = _discordmodules__WEBPACK_IMPORTED_MODULE_2__["default"].ReactDOM;
/** 
 * A reference object to get BD's settings.
 * @type object
 * @deprecated
 * @memberof BdApi
 */

const settings = _settingsmanager__WEBPACK_IMPORTED_MODULE_8__["default"].collections;
/** 
 * A reference object for BD's emotes.
 * @type object
 * @deprecated
 * @memberof BdApi
 */

const emotes = new Proxy(_builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_11__["default"].Emotes, {
  get(obj, category) {
    if (category === "blocklist") return _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_11__["default"].blocklist;
    const group = _builtins_emotes_emotes__WEBPACK_IMPORTED_MODULE_11__["default"].Emotes[category];
    if (!group) return undefined;
    return new Proxy(group, {
      get(cat, emote) {
        return group[emote];
      },

      set() {
        _common_logger__WEBPACK_IMPORTED_MODULE_9__["default"].warn("BdApi.emotes", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
      }

    });
  },

  set() {
    _common_logger__WEBPACK_IMPORTED_MODULE_9__["default"].warn("BdApi.emotes", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  }

});
/** 
 * A reference string for BD's version.
 * @type string
 * @memberof BdApi
 */

const version = _data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.version;
/**
 * Adds a `<style>` to the document with the given ID.
 * 
 * @deprecated
 * @param {string} id ID to use for style element
 * @param {string} css CSS to apply to the document
 * @memberof BdApi
 */

function injectCSS(id, css) {
  _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].injectStyle(id, css);
}
/**
 * Removes a `<style>` from the document corresponding to the given ID.
 * 
 * @deprecated
 * @param {string} id ID uses for the style element
 * @memberof BdApi
 */


function clearCSS(id) {
  _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].removeStyle(id);
}
/**
 * Automatically creates and links a remote JS script.
 * 
 * @deprecated
 * @param {string} id ID of the script element
 * @param {string} url URL of the remote script
 * @returns {Promise} Resolves upon onload event
 * @memberof BdApi
 */


function linkJS(id, url) {
  return _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].injectScript(id, url);
}
/**
 * Removes a remotely linked JS script.
 * 
 * @deprecated
 * @param {string} id ID of the script element
 * @memberof BdApi
 */


function unlinkJS(id) {
  _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].removeScript(id);
}
/**
 * Shows a generic but very customizable modal.
 * 
 * @deprecated
 * @param {string} title title of the modal
 * @param {(string|ReactElement|Array<string|ReactElement>)} content a string of text to display in the modal
 * @memberof BdApi
 */


function alert(title, content) {
  _ui_modals__WEBPACK_IMPORTED_MODULE_7__["default"].alert(title, content);
}
/**
 * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
 * 
 * @deprecated
 * @param {string} title title of the modal
 * @param {(string|ReactElement|Array<string|ReactElement>)} children a single or mixed array of react elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
 * @param {object} [options] options to modify the modal
 * @param {boolean} [options.danger=false] whether the main button should be red or not
 * @param {string} [options.confirmText=Okay] text for the confirmation/submit button
 * @param {string} [options.cancelText=Cancel] text for the cancel button
 * @param {callable} [options.onConfirm=NOOP] callback to occur when clicking the submit button
 * @param {callable} [options.onCancel=NOOP] callback to occur when clicking the cancel button
 * @memberof BdApi
 */


function showConfirmationModal(title, content, options = {}) {
  return _ui_modals__WEBPACK_IMPORTED_MODULE_7__["default"].showConfirmationModal(title, content, options);
}
/**
 * Shows a toast similar to android towards the bottom of the screen.
 *
 * @deprecated
 * @param {string} content The string to show in the toast.
 * @param {object} options Options object. Optional parameter.
 * @param {string} [options.type=""] Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
 * @param {boolean} [options.icon=true] Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: `true`
 * @param {number} [options.timeout=3000] Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: `3000`
 * @param {boolean} [options.forceShow=false] Whether to force showing the toast and ignore the bd setting
 * @memberof BdApi
 */


function showToast(content, options = {}) {
  _ui_toasts__WEBPACK_IMPORTED_MODULE_5__["default"].show(content, options);
}
/**
 * Shows a notice above Discord's chat layer.
 * 
 * @deprecated
 * @param {string|Node} content Content of the notice
 * @param {object} options Options for the notice.
 * @param {string} [options.type="info" | "error" | "warning" | "success"] Type for the notice. Will affect the color.
 * @param {Array<{label: string, onClick: function}>} [options.buttons] Buttons that should be added next to the notice text.
 * @param {number} [options.timeout=10000] Timeout until the notice is closed. Won't fire if it's set to 0;
 * @returns {function} A callback for closing the notice. Passing `true` as first parameter closes immediately without transitioning out.
 * @memberof BdApi
 */


function showNotice(content, options = {}) {
  return _ui_notices__WEBPACK_IMPORTED_MODULE_6__["default"].show(content, options);
}
/**
 * Finds a webpack module using a filter
 * 
 * @deprecated
 * @param {function} filter A filter given the exports, module, and moduleId. Returns `true` if the module matches.
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */


function findModule(filter) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(filter);
}
/**
 * Finds multiple webpack modules using a filter
 * 
 * @deprecated
 * @param {function} filter A filter given the exports, module, and moduleId. Returns `true` if the module matches.
 * @returns {Array} Either an array of matching modules or an empty array
 * @memberof BdApi
 */


function findAllModules(filter) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(filter, {
    first: false
  });
}
/**
 * Finds a webpack module by own properties.
 * 
 * @deprecated
 * @param {...string} props Any desired properties
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */


function findModuleByProps(...props) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps(...props);
}
/**
 * Finds a webpack module by own prototypes.
 * 
 * @deprecated
 * @param {...string} protos Any desired prototype properties
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */


function findModuleByPrototypes(...protos) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByPrototypes(...protos);
}
/**
 * Finds a webpack module by `displayName` property
 * 
 * @deprecated
 * @param {string} name Desired `displayName` property
 * @returns {any} Either the matching module or `undefined`
 * @memberof BdApi
 */


function findModuleByDisplayName(name) {
  return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByDisplayName(name);
}
/**
 * Get the internal react data of a specified node.
 * 
 * @deprecated
 * @param {HTMLElement} node Node to get the react data from
 * @returns {object|undefined} Either the found data or `undefined` 
 * @memberof BdApi
 */


function getInternalInstance(node) {
  if (node.__reactInternalInstance$) return node.__reactInternalInstance$;
  return node[Object.keys(node).find(k => k.startsWith("__reactInternalInstance") || k.startsWith("__reactFiber"))] || null;
}
/**
 * Loads previously stored data.
 * 
 * @deprecated
 * @param {string} pluginName Name of the plugin loading data
 * @param {string} key Which piece of data to load
 * @returns {any} The stored data
 * @memberof BdApi
 */


function loadData(pluginName, key) {
  return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].getPluginData(pluginName, key);
}
/**
 * Saves JSON-serializable data.
 * 
 * @deprecated
 * @param {string} pluginName Name of the plugin saving data
 * @param {string} key Which piece of data to store
 * @param {any} data The data to be saved
 * @memberof BdApi
 */


function saveData(pluginName, key, data) {
  return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].setPluginData(pluginName, key, data);
}
/**
 * Deletes a piece of stored data, this is different than saving as null or undefined.
 * 
 * @deprecated
 * @param {string} pluginName Name of the plugin deleting data
 * @param {string} key Which piece of data to delete
 * @memberof BdApi
 */


function deleteData(pluginName, key) {
  _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].deletePluginData(pluginName, key);
}
/**
 * Monkey-patches a method on an object. The patching callback may be run before, after or instead of target method.
 * 
 *  - Be careful when monkey-patching. Think not only about original functionality of target method and your changes, but also about developers of other plugins, who may also patch this method before or after you. Try to change target method behaviour as little as possible, and avoid changing method signatures.
 *  - Display name of patched method is changed, so you can see if a function has been patched (and how many times) while debugging or in the stack trace. Also, patched methods have property `__monkeyPatched` set to `true`, in case you want to check something programmatically.
 * 
 * @deprecated
 * @param {object} what Object to be patched. You can can also pass class prototypes to patch all class instances.
 * @param {string} methodName Name of the function to be patched.
 * @param {object} options Options object to configure the patch.
 * @param {function} [options.after] Callback that will be called after original target method call. You can modify return value here, so it will be passed to external code which calls target method. Can be combined with `before`.
 * @param {function} [options.before] Callback that will be called before original target method call. You can modify arguments here, so it will be passed to original method. Can be combined with `after`.
 * @param {function} [options.instead] Callback that will be called instead of original target method call. You can get access to original method using `originalMethod` parameter if you want to call it, but you do not have to. Can't be combined with `before` or `after`.
 * @param {boolean} [options.once=false] Set to `true` if you want to automatically unpatch method after first call.
 * @param {boolean} [options.silent=false] Set to `true` if you want to suppress log messages about patching and unpatching.
 * @returns {function} A function that cancels the monkey patch
 * @memberof BdApi
 */


function monkeyPatch(what, methodName, options) {
  const {
    before,
    after,
    instead,
    once = false,
    callerId = "BdApi"
  } = options;
  const patchType = before ? "before" : after ? "after" : instead ? "instead" : "";
  if (!patchType) return _common_logger__WEBPACK_IMPORTED_MODULE_9__["default"].err("BdApi", "Must provide one of: after, before, instead");
  const originalMethod = what[methodName];
  const data = {
    originalMethod: originalMethod,
    callOriginalMethod: () => data.originalMethod.apply(data.thisObject, data.methodArguments)
  };
  data.cancelPatch = _patcher__WEBPACK_IMPORTED_MODULE_10__["default"][patchType](callerId, what, methodName, (thisObject, args, returnValue) => {
    data.thisObject = thisObject;
    data.methodArguments = args;
    data.returnValue = returnValue;

    try {
      const patchReturn = Reflect.apply(options[patchType], null, [data]);
      if (once) data.cancelPatch();
      return patchReturn;
    } catch (err) {
      _common_logger__WEBPACK_IMPORTED_MODULE_9__["default"].stacktrace(`${callerId}:monkeyPatch`, `Error in the ${patchType} of ${methodName}`, err);
    }
  });
  return data.cancelPatch;
}
/**
 * Adds a listener for when the node is removed from the document body.
 * 
 * @deprecated
 * @param {HTMLElement} node Node to be observed
 * @param {function} callback Function to run when fired
 * @memberof BdApi
 */


function onRemoved(node, callback) {
  return _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].onRemoved(node, callback);
}
/**
 * Wraps a given function in a `try..catch` block.
 * 
 * @deprecated
 * @param {function} method Function to wrap
 * @param {string} message Additional messasge to print when an error occurs
 * @returns {function} The new wrapped function
 * @memberof BdApi
 */


function suppressErrors(method, message) {
  return (...params) => {
    try {
      return method(...params);
    } catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_9__["default"].stacktrace("SuppressedError", "Error occurred in " + message, e);
    }
  };
}
/**
 * Tests a given object to determine if it is valid JSON.
 * 
 * @deprecated
 * @param {object} data Data to be tested
 * @returns {boolean} Result of the test
 * @memberof BdApi
 */


function testJSON(data) {
  try {
    return JSON.parse(data);
  } catch (err) {
    return false;
  }
}
/**
 * Gets a specific setting's status from BD.
 * 
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @returns {boolean} If the setting is enabled
 * @memberof BdApi
 */


function isSettingEnabled(collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_8__["default"].get(collection, category, id);
}
/**
 * Enables a BetterDiscord setting by ids.
 * 
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @memberof BdApi
 */


function enableSetting(collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_8__["default"].set(collection, category, id, true);
}
/**
 * Disables a BetterDiscord setting by ids.
 * 
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @memberof BdApi
 */


function disableSetting(collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_8__["default"].set(collection, category, id, false);
}
/**
 * Toggles a BetterDiscord setting by ids.
 * 
 * @deprecated
 * @param {string} [collection="settings"] Collection ID
 * @param {string} category Category ID in the collection
 * @param {string} id Setting ID in the category
 * @memberof BdApi
 */


function toggleSetting(collection, category, id) {
  return _settingsmanager__WEBPACK_IMPORTED_MODULE_8__["default"].set(collection, category, id, !_settingsmanager__WEBPACK_IMPORTED_MODULE_8__["default"].get(collection, category, id));
}
/**
 * Gets some data in BetterDiscord's misc data.
 * 
 * @deprecated
 * @param {string} key Key of the data to load.
 * @returns {any} The stored data
 * @memberof BdApi
 */


function getBDData(key) {
  return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].getBDData(key);
}
/**
 * Sets some data in BetterDiscord's misc data.
 * 
 * @deprecated
 * @param {string} key Key of the data to store.
 * @returns {any} The stored data
 * @memberof BdApi
 */


function setBDData(key, data) {
  return _datastore__WEBPACK_IMPORTED_MODULE_3__["default"].setBDData(key, data);
}
/**
 * Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api. 
 * Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.
 * 
 * @deprecated
 * @param {object} options Options object to configure the dialog.
 * @param {"open"|"save"} [options.mode="open"] Determines whether the dialog should open or save files.
 * @param {string} [options.defaultPath=~] Path the dialog should show on launch.
 * @param {Array<object<string, string[]>>} [options.filters=[]] An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter).
 * @param {string} [options.title] Title for the titlebar.
 * @param {string} [options.message] Message for the dialog.
 * @param {boolean} [options.showOverwriteConfirmation=false] Whether the user should be prompted when overwriting a file.
 * @param {boolean} [options.showHiddenFiles=false] Whether hidden files should be shown in the dialog.
 * @param {boolean} [options.promptToCreate=false] Whether the user should be prompted to create non-existant folders.
 * @param {boolean} [options.openDirectory=false] Whether the user should be able to select a directory as a target.
 * @param {boolean} [options.openFile=true] Whether the user should be able to select a file as a target.
 * @param {boolean} [options.multiSelections=false] Whether the user should be able to select multiple targets.
 * @param {boolean} [options.modal=false] Whether the dialog should act as a modal to the main window.
 * @returns {Promise<object>} Result of the dialog
 * @memberof BdApi
 */


async function openDialog(options) {
  const data = await _ipc__WEBPACK_IMPORTED_MODULE_12__["default"].openDialog(options);
  if (data.error) throw new Error(data.error);
  return data;
}



/***/ }),

/***/ "./src/modules/api/patcher.js":
/*!************************************!*\
  !*** ./src/modules/api/patcher.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patcher */ "./src/modules/patcher.js");


/**
 * `Patcher` is a utility class for modifying existing functions. Instance is accessible through the {@link BdApi}.
 * This is extremely useful for modifying the internals of Discord by adjusting return value or React renders, or arguments of internal functions.
 * @type Patcher
 * @summary {@link Patcher} is a utility class for modifying existing functions.
 * @name Patcher
 */

class Patcher {
  #callerName = "";

  constructor(callerName) {
    if (!callerName) return;
    this.#callerName = callerName;
  }
  /**
   * This method patches onto another function, allowing your code to run beforehand. 
   * Using this, you are also able to modify the incoming arguments before the original method is run.
   * @param {string} caller Name of the caller of the patch function.
   * @param {object} moduleToPatch Object with the function to be patched. Can also be an object's prototype.
   * @param {string} functionName Name of the function to be patched.
   * @param {function} callback Function to run before the original method. The function is given the `this` context and the `arguments` of the original function.
   * @returns {function} Function that cancels the original patch.
   */


  before(caller, moduleToPatch, functionName, callback) {
    if (this.#callerName) {
      callback = functionName;
      functionName = moduleToPatch;
      moduleToPatch = caller;
      caller = this.#callerName;
    }

    return _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].pushChildPatch(caller, moduleToPatch, functionName, callback, {
      type: "before"
    });
  }
  /**
   * This method patches onto another function, allowing your code to run instead. 
   * Using this, you are able to replace the original completely. You can still call the original manually if needed.
   * @param {string} caller Name of the caller of the patch function.
   * @param {object} moduleToPatch Object with the function to be patched. Can also be an object's prototype.
   * @param {string} functionName Name of the function to be patched.
   * @param {function} callback Function to run before the original method. The function is given the `this` context, `arguments` of the original function, and also the original function.
   * @returns {function} Function that cancels the original patch.
   */


  instead(caller, moduleToPatch, functionName, callback) {
    if (this.#callerName) {
      callback = functionName;
      functionName = moduleToPatch;
      moduleToPatch = caller;
      caller = this.#callerName;
    }

    return _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].pushChildPatch(caller, moduleToPatch, functionName, callback, {
      type: "instead"
    });
  }
  /**
   * This method patches onto another function, allowing your code to run afterwards. 
   * Using this, you are able to modify the return value after the original method is run.
   * @param {string} caller Name of the caller of the patch function.
   * @param {object} moduleToPatch Object with the function to be patched. Can also be an object's prototype.
   * @param {string} functionName Name of the function to be patched.
   * @param {function} callback Function to run after the original method. The function is given the `this` context, the `arguments` of the original function, and the `return` value of the original function.
   * @returns {function} Function that cancels the original patch.
   */


  after(caller, moduleToPatch, functionName, callback) {
    if (this.#callerName) {
      callback = functionName;
      functionName = moduleToPatch;
      moduleToPatch = caller;
      caller = this.#callerName;
    }

    return _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].pushChildPatch(caller, moduleToPatch, functionName, callback, {
      type: "after"
    });
  }
  /**
   * Returns all patches by a particular caller. The patches all have an `unpatch()` method.
   * @param {string} caller ID of the original patches
   * @returns {Array<function>} Array of all the patch objects.
   */


  getPatchesByCaller(caller) {
    if (this.#callerName) caller = this.#callerName;
    if (typeof caller !== "string") return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("BdApi.Patcher", "Parameter 0 of getPatchesByCaller must be a string representing the caller");
    return _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].getPatchesByCaller(caller);
  }
  /**
   * Automatically cancels all patches created with a specific ID.
   * @param {string} caller ID of the original patches
   */


  unpatchAll(caller) {
    if (this.#callerName) caller = this.#callerName;
    if (typeof caller !== "string") return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("BdApi.Patcher", "Parameter 0 of unpatchAll must be a string representing the caller");
    _patcher__WEBPACK_IMPORTED_MODULE_1__["default"].unpatchAll(caller);
  }

}

Object.freeze(Patcher);
Object.freeze(Patcher.prototype);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Patcher);

/***/ }),

/***/ "./src/modules/api/reactutils.js":
/*!***************************************!*\
  !*** ./src/modules/api/reactutils.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../discordmodules */ "./src/modules/discordmodules.js");

/**
 * `ReactUtils` is a utility class for interacting with React internals. Instance is accessible through the {@link BdApi}.
 * This is extremely useful for interacting with the internals of the UI.
 * @type ReactUtils
 * @summary {@link ReactUtils} is a utility class for interacting with React internals.
 * @name ReactUtils
 */

const ReactUtils = {
  get rootInstance() {
    var _document$getElementB, _document$getElementB2, _document$getElementB3;

    return (_document$getElementB = document.getElementById("app-mount")) === null || _document$getElementB === void 0 ? void 0 : (_document$getElementB2 = _document$getElementB._reactRootContainer) === null || _document$getElementB2 === void 0 ? void 0 : (_document$getElementB3 = _document$getElementB2._internalRoot) === null || _document$getElementB3 === void 0 ? void 0 : _document$getElementB3.current;
  },

  /**
   * Gets the internal react data of a specified node
   * 
   * @param {HTMLElement} node Node to get the react data from
   * @returns {object|undefined} Either the found data or `undefined` 
   */
  getInternalInstance(node) {
    if (node.__reactFiber$) return node.__reactFiber$;
    return node[Object.keys(node).find(k => k.startsWith("__reactInternalInstance") || k.startsWith("__reactFiber"))] || null;
  },

  /**
    * Attempts to find the "owner" node to the current node. This is generally 
    * a node with a stateNode--a class component.
    * @param {HTMLElement} node - node to obtain react instance of
    * @param {object} options - options for the search
    * @param {array} [options.include] - list of items to include from the search
    * @param {array} [options.exclude=["Popout", "Tooltip", "Scroller", "BackgroundFlash"]] - list of items to exclude from the search
    * @param {callable} [options.filter=_=>_] - filter to check the current instance with (should return a boolean)
    * @return {(*|null)} the owner instance or undefined if not found.
    */
  getOwnerInstance(node, {
    include,
    exclude = ["Popout", "Tooltip", "Scroller", "BackgroundFlash"],
    filter = _ => _
  } = {}) {
    if (node === undefined) return undefined;
    const excluding = include === undefined;
    const nameFilter = excluding ? exclude : include;

    function getDisplayName(owner) {
      const type = owner.type;
      if (!type) return null;
      return type.displayName || type.name || null;
    }

    function classFilter(owner) {
      const name = getDisplayName(owner);
      return name !== null && !!(nameFilter.includes(name) ^ excluding);
    }

    let curr = ReactUtils.getInternalInstance(node);

    for (curr = curr && curr.return; curr !== null; curr = curr.return) {
      if (curr === null) continue;
      const owner = curr.stateNode;
      if (owner !== null && !(owner instanceof HTMLElement) && classFilter(curr) && filter(owner)) return owner;
    }

    return null;
  },

  /**
    * Creates an unrendered react component that wraps dom elements.
    * @param {HTMLElement} element - element or array of elements to wrap into a react component
    * @returns {object} - unrendered react component
    */
  wrapElement(element) {
    return class ReactWrapper extends _discordmodules__WEBPACK_IMPORTED_MODULE_0__["default"].React.Component {
      constructor(props) {
        super(props);
        this.element = element;
      }

      componentDidMount() {
        this.refs.element.appendChild(this.element);
      }

      render() {
        return _discordmodules__WEBPACK_IMPORTED_MODULE_0__["default"].React.createElement("div", {
          className: "react-wrapper",
          ref: "element"
        });
      }

    };
  }

};
Object.freeze(ReactUtils);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReactUtils);

/***/ }),

/***/ "./src/modules/api/ui.js":
/*!*******************************!*\
  !*** ./src/modules/api/ui.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_notices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../ui/notices */ "./src/ui/notices.js");
/* harmony import */ var _ui_tooltip__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../ui/tooltip */ "./src/ui/tooltip.js");
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ipc */ "./src/modules/ipc.js");





/**
 * `UI` is a utility class for getting internal webpack modules. Instance is accessible through the {@link BdApi}.
 * This is extremely useful for interacting with the internals of Discord.
 * @type UI
 * @summary {@link UI} is a utility class for getting internal webpack modules.
 * @name UI
 */

const UI = {
  /**
   * Shows a generic but very customizable modal.
   * 
   * @param {string} title title of the modal
   * @param {(string|ReactElement|Array<string|ReactElement>)} content a string of text to display in the modal
   */
  alert(title, content) {
    _ui_modals__WEBPACK_IMPORTED_MODULE_0__["default"].alert(title, content);
  },

  /**
   * Creates a tooltip to automatically show on hover.
   *
   * @param {HTMLElement} node - DOM node to monitor and show the tooltip on
   * @param {string|HTMLElement} content - string to show in the tooltip
   * @param {object} options - additional options for the tooltip
   * @param {"primary"|"info"|"success"|"warn"|"danger"} [options.style="primary"] - correlates to the discord styling/colors
   * @param {"top"|"right"|"bottom"|"left"} [options.side="top"] - can be any of top, right, bottom, left
   * @param {boolean} [options.preventFlip=false] - prevents moving the tooltip to the opposite side if it is too big or goes offscreen
   * @param {boolean} [options.disabled=false] - whether the tooltip should be disabled from showing on hover
   * @returns {Tooltip} the tooltip that was generated
   */
  createTooltip(node, content, options = {}) {
    return _ui_tooltip__WEBPACK_IMPORTED_MODULE_3__["default"].create(node, content, options);
  },

  /**
   * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
   * 
   * @param {string} title title of the modal
   * @param {(string|ReactElement|Array<string|ReactElement>)} children a single or mixed array of react elements and strings. Everything is wrapped in Discord's `TextElement` component so strings will show and render properly.
   * @param {object} [options] options to modify the modal
   * @param {boolean} [options.danger=false] whether the main button should be red or not
   * @param {string} [options.confirmText=Okay] text for the confirmation/submit button
   * @param {string} [options.cancelText=Cancel] text for the cancel button
   * @param {callable} [options.onConfirm=NOOP] callback to occur when clicking the submit button
   * @param {callable} [options.onCancel=NOOP] callback to occur when clicking the cancel button
   */
  showConfirmationModal(title, content, options = {}) {
    return _ui_modals__WEBPACK_IMPORTED_MODULE_0__["default"].showConfirmationModal(title, content, options);
  },

  /**
   * This shows a toast similar to android towards the bottom of the screen.
   *
   * @param {string} content The string to show in the toast.
   * @param {object} options Options object. Optional parameter.
   * @param {string} [options.type=""] Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
   * @param {boolean} [options.icon=true] Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: `true`
   * @param {number} [options.timeout=3000] Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: `3000`
   * @param {boolean} [options.forceShow=false] Whether to force showing the toast and ignore the bd setting
   */
  showToast(content, options = {}) {
    _ui_toasts__WEBPACK_IMPORTED_MODULE_1__["default"].show(content, options);
  },

  /**
   * Shows a notice above Discord's chat layer.
   * 
   * @param {string|Node} content Content of the notice
   * @param {object} options Options for the notice.
   * @param {string} [options.type="info" | "error" | "warning" | "success"] Type for the notice. Will affect the color.
   * @param {Array<{label: string, onClick: function}>} [options.buttons] Buttons that should be added next to the notice text.
   * @param {number} [options.timeout=10000] Timeout until the notice is closed. Won't fire if it's set to 0;
   * @returns {function}
   */
  showNotice(content, options = {}) {
    return _ui_notices__WEBPACK_IMPORTED_MODULE_2__["default"].show(content, options);
  },

  /**
   * Gives access to the [Electron Dialog](https://www.electronjs.org/docs/latest/api/dialog/) api. 
   * Returns a `Promise` that resolves to an `object` that has a `boolean` cancelled and a `filePath` string for saving and a `filePaths` string array for opening.
   * 
   * @param {object} options Options object to configure the dialog.
   * @param {"open"|"save"} [options.mode="open"] Determines whether the dialog should open or save files.
   * @param {string} [options.defaultPath=~] Path the dialog should show on launch.
   * @param {Array<object<string, string[]>>} [options.filters=[]] An array of [file filters](https://www.electronjs.org/docs/latest/api/structures/file-filter).
   * @param {string} [options.title] Title for the titlebar.
   * @param {string} [options.message] Message for the dialog.
   * @param {boolean} [options.showOverwriteConfirmation=false] Whether the user should be prompted when overwriting a file.
   * @param {boolean} [options.showHiddenFiles=false] Whether hidden files should be shown in the dialog.
   * @param {boolean} [options.promptToCreate=false] Whether the user should be prompted to create non-existant folders.
   * @param {boolean} [options.openDirectory=false] Whether the user should be able to select a directory as a target.
   * @param {boolean} [options.openFile=true] Whether the user should be able to select a file as a target.
   * @param {boolean} [options.multiSelections=false] Whether the user should be able to select multiple targets.
   * @param {boolean} [options.modal=false] Whether the dialog should act as a modal to the main window.
   * @returns {Promise<object>} Result of the dialog
   */
  async openDialog(options) {
    const data = await _ipc__WEBPACK_IMPORTED_MODULE_4__["default"].openDialog(options);
    if (data.error) throw new Error(data.error);
    return data;
  }

};
Object.freeze(UI);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);

/***/ }),

/***/ "./src/modules/api/utils.js":
/*!**********************************!*\
  !*** ./src/modules/api/utils.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities */ "./src/modules/utilities.js");

/**
 * `Utils` is a utility containing commonly reused functions. Instance is accessible through the {@link BdApi}.
 * @type Utils
 * @summary {@link Utils} is a utility class for interacting with React internals.
 * @name Utils
 */

const Utils = {
  /**
   * Finds a value, subobject, or array from a tree that matches a specific filter. This is a DFS.
   * @param {object} tree Tree that should be walked
   * @param {callable} searchFilter Filter to check against each object and subobject
   * @param {object} options Additional options to customize the search
   * @param {Array<string>|null} [options.walkable=null] Array of strings to use as keys that are allowed to be walked on. Null value indicates all keys are walkable
   * @param {Array<string>} [options.ignore=[]] Array of strings to use as keys to exclude from the search, most helpful when `walkable = null`.
   */
  findInTree(tree, searchFilter, options = {}) {
    return _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].findInTree(tree, searchFilter, options);
  },

  /**
   * Deep extends an object with a set of other objects. Objects later in the list
   * of `extenders` have priority, that is to say if one sets a key to be a primitive,
   * it will be overwritten with the next one with the same key. If it is an object,
   * and the keys match, the object is extended. This happens recursively.
   * @param {object} extendee - Object to be extended
   * @param {...object} extenders - Objects to extend with
   * @returns {object} - A reference to `extendee`
   */
  extend(extendee, ...extenders) {
    return _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].extend(extendee, ...extenders);
  },

  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds.
   * 
   * Adapted from the version by David Walsh (https://davidwalsh.name/javascript-debounce-function)
   * 
   * @param {function} executor 
   * @param {number} delay 
   */
  debounce(executor, delay) {
    return _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].debounce(executor, delay);
  },

  /**
   * Takes a string of html and escapes it using the brower's own escaping mechanism.
   * @param {String} html - html to be escaped
   */
  escapeHTML(html) {
    return _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].escapeHTML(html);
  },

  /**
   * Builds a classname string from any number of arguments. This includes arrays and objects.
   * When given an array all values from the array are added to the list.
   * When given an object they keys are added as the classnames if the value is truthy.
   * Copyright (c) 2018 Jed Watson https://github.com/JedWatson/classnames MIT License
   * @param {...Any} argument - anything that should be used to add classnames.
   */
  className() {
    return _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].className(...arguments);
  }

};
Object.freeze(Utils);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);

/***/ }),

/***/ "./src/modules/api/webpack.js":
/*!************************************!*\
  !*** ./src/modules/api/webpack.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../webpackmodules */ "./src/modules/webpackmodules.js");


/**
 * `Webpack` is a utility class for getting internal webpack modules. Instance is accessible through the {@link BdApi}.
 * This is extremely useful for interacting with the internals of Discord.
 * @type Webpack
 * @summary {@link Webpack} is a utility class for getting internal webpack modules.
 * @name Webpack
 */

const Webpack = {
  /**
   * Series of {@link Filters} to be used for finding webpack modules.
   * @type Filters
   * @memberof Webpack
   */
  Filters: {
    /**
     * Generates a function that filters by a set of properties.
     * @param {...string} props List of property names
     * @returns {function} A filter that checks for a set of properties
     */
    byProps(...props) {
      return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__.Filters.byProps(props);
    },

    /**
     * Generates a function that filters by a set of properties on the object's prototype.
     * @param {...string} props List of property names
     * @returns {function} A filter that checks for a set of properties on the object's prototype.
     */
    byPrototypeFields(...props) {
      return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__.Filters.byPrototypeFields(props);
    },

    /**
     * Generates a function that filters by a regex.
     * @param {RegExp} search A RegExp to check on the module
     * @param {function} filter Additional filter
     * @returns {function} A filter that checks for a regex match
     */
    byRegex(regex) {
      return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__.Filters.byRegex(regex);
    },

    /**
     * Generates a function that filters by strings.
     * @param {...String} strings A list of strings
     * @returns {function} A filter that checks for a set of strings
     */
    byStrings(...strings) {
      return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__.Filters.byStrings(...strings);
    },

    /**
     * Generates a function that filters by the `displayName` property.
     * @param {string} name Name the module should have
     * @returns {function} A filter that checks for a `displayName` match
     */
    byDisplayName(name) {
      return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__.Filters.byDisplayName(name);
    },

    /**
     * Generates a combined function from a list of filters.
     * @param {...function} filters A list of filters
     * @returns {function} Combinatory filter of all arguments
     */
    combine(...filters) {
      return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__.Filters.combine(...filters);
    }

  },

  /**
   * Finds a module using a filter function.
   * @memberof Webpack
   * @param {function} filter A function to use to filter modules. It is given exports, module, and moduleID. Return `true` to signify match.
   * @param {object} [options] Options to configure the search
   * @param {Boolean} [options.first=true] Whether to return only the first matching module
   * @param {Boolean} [options.defaultExport=true] Whether to return default export when matching the default export
   * @param {Boolean} [options.searchExports=false] Whether to execute the filter on webpack exports
   * @return {any}
   */
  getModule(filter, options = {}) {
    if ("first" in options && typeof options.first !== "boolean") return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("BdApi.Webpack~getModule", "Unsupported type used for options.first", options.first, "boolean expected.");
    if ("defaultExport" in options && typeof options.defaultExport !== "boolean") return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("BdApi.Webpack~getModule", "Unsupported type used for options.defaultExport", options.defaultExport, "boolean expected.");
    if ("searchExports" in options && typeof options.searchExports !== "boolean") return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("BdApi.Webpack~getModule", "Unsupported type used for options.searchExports", options.searchExports, "boolean expected.");
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(filter, options);
  },

  /**
   * Finds multiple modules using multiple filters.
   * @memberof Webpack
   * @param {...object} queries Object representing the query to perform
   * @param {Function} queries.filter A function to use to filter modules
   * @param {Boolean} [queries.first=true] Whether to return only the first matching module
   * @param {Boolean} [queries.defaultExport=true] Whether to return default export when matching the default export
   * @param {Boolean} [queries.searchExports=false] Whether to execute the filter on webpack exports
   * @return {any}
   */
  getBulk(...queries) {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getBulk(...queries);
  },

  /**
   * Finds a module that is lazily loaded.
   * @memberof Webpack
   * @param {function} filter A function to use to filter modules. It is given exports. Return `true` to signify match.
   * @param {object} [options] Options for configuring the listener
   * @param {AbortSignal} [options.signal] AbortSignal of an AbortController to cancel the promise
   * @param {Boolean} [options.defaultExport=true] Whether to return default export when matching the default export
   * @param {Boolean} [options.searchExports=false] Whether to execute the filter on webpack exports
   * @returns {Promise<any>}
   */
  waitForModule(filter, options = {}) {
    if ("defaultExport" in options && typeof options.defaultExport !== "boolean") return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("BdApi.Webpack~waitForModule", "Unsupported type used for options.defaultExport", options.defaultExport, "boolean expected.");
    if ("signal" in options && !(options.signal instanceof AbortSignal)) return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("BdApi.Webpack~waitForModule", "Unsupported type used for options.signal", options.signal, "AbortSignal expected.");
    if ("searchExports" in options && typeof options.searchExports !== "boolean") return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("BdApi.Webpack~getModule", "Unsupported type used for options.searchExports", options.searchExports, "boolean expected.");
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getLazy(filter, options);
  }

};
Object.freeze(Webpack);
Object.freeze(Webpack.Filters);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Webpack);

/***/ }),

/***/ "./src/modules/core.js":
/*!*****************************!*\
  !*** ./src/modules/core.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localemanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localemanager */ "./src/modules/localemanager.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./thememanager */ "./src/modules/thememanager.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _builtins_builtins_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../builtins/builtins.js */ "./src/builtins/builtins.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _loadingicon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../loadingicon */ "./src/loadingicon.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../styles/index.css */ "./src/styles/index.css");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./editor */ "./src/modules/editor.js");
/* harmony import */ var _updater__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./updater */ "./src/modules/updater.js");















/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Core {
  async startup() {
    if (this.hasStarted) return;
    this.hasStarted = true;
    _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.appPath = process.env.DISCORD_APP_PATH;
    _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.userData = process.env.DISCORD_USER_DATA;
    _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.dataPath = process.env.BETTERDISCORD_DATA_PATH; // Load css early

    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Injecting BD Styles");
    _dommanager__WEBPACK_IMPORTED_MODULE_3__["default"].injectStyle("bd-stylesheet", _styles_index_css__WEBPACK_IMPORTED_MODULE_12__["default"].toString());
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing DataStore");
    _datastore__WEBPACK_IMPORTED_MODULE_9__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing LocaleManager");
    _localemanager__WEBPACK_IMPORTED_MODULE_0__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Settings");
    _settingsmanager__WEBPACK_IMPORTED_MODULE_6__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing DOMManager");
    _dommanager__WEBPACK_IMPORTED_MODULE_3__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Waiting for connection...");
    await this.waitForConnection();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Editor");
    await _editor__WEBPACK_IMPORTED_MODULE_13__["default"].initialize();
    _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Builtins");

    for (const module in _builtins_builtins_js__WEBPACK_IMPORTED_MODULE_7__) {
      _builtins_builtins_js__WEBPACK_IMPORTED_MODULE_7__[module].initialize();
    }

    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Plugins"); // const pluginErrors = [];

    const pluginErrors = _pluginmanager__WEBPACK_IMPORTED_MODULE_4__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Loading Themes"); // const themeErrors = [];

    const themeErrors = _thememanager__WEBPACK_IMPORTED_MODULE_5__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Initializing Updater");
    _updater__WEBPACK_IMPORTED_MODULE_14__["default"].initialize();
    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Removing Loading Icon");
    _loadingicon__WEBPACK_IMPORTED_MODULE_11__["default"].hide(); // Show loading errors

    _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].log("Startup", "Collecting Startup Errors");
    _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showAddonErrors({
      plugins: pluginErrors,
      themes: themeErrors
    });
    const previousVersion = _datastore__WEBPACK_IMPORTED_MODULE_9__["default"].getBDData("version");

    if (_data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version !== previousVersion) {
      _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showChangelogModal(_data_data_js__WEBPACK_IMPORTED_MODULE_2__.Changelog);
      _datastore__WEBPACK_IMPORTED_MODULE_9__["default"].setBDData("version", _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version);
    }
  }

  waitForConnection() {
    return new Promise(done => {
      if (_discordmodules__WEBPACK_IMPORTED_MODULE_10__["default"].UserStore.getCurrentUser()) return done();
      _discordmodules__WEBPACK_IMPORTED_MODULE_10__["default"].Dispatcher.subscribe("CONNECTION_OPEN", done);
    });
  }

}());

/***/ }),

/***/ "./src/modules/datastore.js":
/*!**********************************!*\
  !*** ./src/modules/datastore.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
var _window, _window$DiscordNative, _window$DiscordNative2, _window$DiscordNative3, _window2, _window2$DiscordNativ, _window2$DiscordNativ2, _window2$DiscordNativ3;




const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const releaseChannel = ((_window = window) === null || _window === void 0 ? void 0 : (_window$DiscordNative = _window.DiscordNative) === null || _window$DiscordNative === void 0 ? void 0 : (_window$DiscordNative2 = _window$DiscordNative.app) === null || _window$DiscordNative2 === void 0 ? void 0 : (_window$DiscordNative3 = _window$DiscordNative2.getReleaseChannel) === null || _window$DiscordNative3 === void 0 ? void 0 : _window$DiscordNative3.call(_window$DiscordNative2)) ?? "stable";
const discordVersion = ((_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$DiscordNativ = _window2.DiscordNative) === null || _window2$DiscordNativ === void 0 ? void 0 : (_window2$DiscordNativ2 = _window2$DiscordNativ.remoteApp) === null || _window2$DiscordNativ2 === void 0 ? void 0 : (_window2$DiscordNativ3 = _window2$DiscordNativ2.getVersion) === null || _window2$DiscordNativ3 === void 0 ? void 0 : _window2$DiscordNativ3.call(_window2$DiscordNativ2)) ?? "0.0.309"; // Schema
// =======================
// %appdata%\BetterDiscord
//     -> data
//         -> [releaseChannel]\ (stable/canary/ptb)
//             -> settings.json
//             -> plugins.json
//             -> themes.json

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class DataStore {
  constructor() {
    this.data = {
      misc: {}
    };
    this.pluginData = {};
    this.cacheData = {};
  }

  initialize() {
    const bdFolderExists = fs.existsSync(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath);
    if (!bdFolderExists) fs.mkdirSync(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath);
    const pluginFolderExists = fs.existsSync(this.pluginFolder);
    if (!pluginFolderExists) fs.mkdirSync(this.pluginFolder);
    const themeFolderExists = fs.existsSync(this.themeFolder);
    if (!themeFolderExists) fs.mkdirSync(this.themeFolder);
    const newStorageExists = fs.existsSync(this.baseFolder);
    if (!newStorageExists) fs.mkdirSync(this.baseFolder);
    if (!fs.existsSync(this.dataFolder)) fs.mkdirSync(this.dataFolder);
    if (!fs.existsSync(this.customCSS)) fs.writeFileSync(this.customCSS, "");
    const dataFiles = fs.readdirSync(this.dataFolder).filter(f => !fs.statSync(path.resolve(this.dataFolder, f)).isDirectory() && f.endsWith(".json"));

    for (const file of dataFiles) {
      let data = {};

      try {
        data = require(path.resolve(this.dataFolder, file));
      } catch (e) {
        _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace("DataStore", `Could not load file ${file}`, e);
      }

      this.data[file.split(".")[0]] = data;
    }

    if (newStorageExists) return;

    try {
      this.convertOldData();
    } // Convert old data if it exists (routine checks existence and removes existence)
    catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace("DataStore", `Could not convert old data.`, e);
    }
  }

  convertOldData() {
    const oldFile = path.join(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "bdstorage.json");
    if (!fs.existsSync(oldFile)) return;

    const oldData = require(oldFile); // got the data


    fs.renameSync(oldFile, `${oldFile}.bak`); // rename file after grabbing data to prevent loop

    const setChannelData = (channel, key, value, ext = "json") => fs.writeFileSync(path.resolve(this.baseFolder, channel, `${key}.${ext}`), JSON.stringify(value, null, 4));

    const channels = ["stable", "canary", "ptb"];
    let customcss = "";
    let favoriteEmotes = {};

    try {
      customcss = oldData.bdcustomcss ? atob(oldData.bdcustomcss) : "";
    } catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace("DataStore:convertOldData", "Error decoding custom css", e);
    }

    try {
      favoriteEmotes = oldData.bdfavemotes ? JSON.parse(atob(oldData.bdfavemotes)) : {};
    } catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace("DataStore:convertOldData", "Error decoding favorite emotes", e);
    }

    for (const channel of channels) {
      if (!fs.existsSync(path.resolve(this.baseFolder, channel))) fs.mkdirSync(path.resolve(this.baseFolder, channel));
      const channelData = oldData.settings[channel];
      if (!channelData || !channelData.settings) continue;
      const oldSettings = channelData.settings;
      const newSettings = {
        general: {
          publicServers: oldSettings["bda-gs-1"],
          voiceDisconnect: oldSettings["bda-dc-0"],
          showToasts: oldSettings["fork-ps-2"]
        },
        appearance: {
          twentyFourHour: oldSettings["bda-gs-6"],
          minimalMode: oldSettings["bda-gs-2"],
          coloredText: oldSettings["bda-gs-7"]
        },
        addons: {
          addonErrors: oldSettings["fork-ps-1"],
          autoReload: oldSettings["fork-ps-5"]
        },
        developer: {
          debuggerHotkey: oldSettings["bda-gs-8"],
          reactDevTools: oldSettings.reactDevTools
        }
      };
      const newEmotes = {
        general: {
          download: oldSettings["fork-es-3"],
          emoteMenu: oldSettings["bda-es-0"],
          hideEmojiMenu: !oldSettings["bda-es-9"],
          modifiers: oldSettings["bda-es-8"],
          animateOnHover: oldSettings["fork-es-2"]
        },
        categories: {
          twitchglobal: oldSettings["bda-es-7"],
          twitchsubscriber: oldSettings["bda-es-7"],
          frankerfacez: oldSettings["bda-es-1"],
          bttv: oldSettings["bda-es-2"]
        }
      };
      setChannelData(channel, "settings", newSettings); // settingsCookie

      setChannelData(channel, "emotes", newEmotes); // emotes (from settingsCookie)

      setChannelData(channel, "plugins", channelData.plugins || {}); // pluginCookie

      setChannelData(channel, "themes", channelData.themes || {}); // themeCookie

      setChannelData(channel, "misc", {
        favoriteEmotes
      }); // favorite emotes

      fs.writeFileSync(path.resolve(this.baseFolder, channel, "custom.css"), customcss); // customcss
    }

    this.initialize(); // Reinitialize data store with the converted data
  }

  get injectionPath() {
    if (this._injectionPath) return this._injectionPath;
    const base = _data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.appPath;
    const roamingBase = _data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.userData;
    const roamingLocation = path.resolve(roamingBase, discordVersion, "modules", "discord_desktop_core", "injector");
    const location = path.resolve(base, "..", "app");
    const realLocation = fs.existsSync(location) ? location : fs.existsSync(roamingLocation) ? roamingLocation : null;
    if (!realLocation) return this._injectionPath = null;
    return this._injectionPath = realLocation;
  }

  get pluginFolder() {
    return this._pluginFolder || (this._pluginFolder = path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "plugins"));
  }

  get themeFolder() {
    return this._themeFolder || (this._themeFolder = path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "themes"));
  }

  get customCSS() {
    return this._customCSS || (this._customCSS = path.resolve(this.dataFolder, "custom.css"));
  }

  get baseFolder() {
    return this._baseFolder || (this._baseFolder = path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "data"));
  }

  get dataFolder() {
    return this._dataFolder || (this._dataFolder = path.resolve(this.baseFolder, `${releaseChannel}`));
  }

  getPluginFile(pluginName) {
    return path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "plugins", pluginName + ".config.json");
  }

  _getFile(key) {
    if (key == "settings" || key == "plugins" || key == "themes" || key == "window") return path.resolve(this.dataFolder, `${key}.json`);
    return path.resolve(this.dataFolder, `misc.json`);
  }

  getBDData(key) {
    return this.data.misc[key] || "";
  }

  setBDData(key, value) {
    this.data.misc[key] = value;
    fs.writeFileSync(path.resolve(this.dataFolder, `misc.json`), JSON.stringify(this.data.misc, null, 4));
  }

  getLocale(locale) {
    const file = path.resolve(this.localeFolder, `${locale}.json`);
    if (!fs.existsSync(file)) return null;

    try {
      return JSON.parse(fs.readFileSync(file).toString());
    } catch {
      return false;
    }
  }

  saveLocale(locale, strings) {
    fs.writeFileSync(path.resolve(this.localeFolder, `${locale}.json`), JSON.stringify(strings, null, 4));
  }

  getData(key) {
    return this.data[key] || "";
  }

  setData(key, value) {
    this.data[key] = value;
    fs.writeFileSync(path.resolve(this.dataFolder, `${key}.json`), JSON.stringify(value, null, 4));
  }

  loadCustomCSS() {
    return fs.readFileSync(this.customCSS).toString();
  }

  saveCustomCSS(css) {
    return fs.writeFileSync(this.customCSS, css);
  }

  ensurePluginData(pluginName) {
    if (typeof this.pluginData[pluginName] !== "undefined") return; // Already have data cached
    // Setup blank data if config doesn't exist

    if (!fs.existsSync(this.getPluginFile(pluginName))) return this.pluginData[pluginName] = {}; // Getting here means not cached, read from disk

    this.pluginData[pluginName] = JSON.parse(fs.readFileSync(this.getPluginFile(pluginName)));
  }

  getPluginData(pluginName, key) {
    this.ensurePluginData(pluginName); // Ensure plugin data, if any, is cached

    return this.pluginData[pluginName][key]; // Return blindly to allow falsey values
  }

  setPluginData(pluginName, key, value) {
    if (value === undefined) return; // Can't set undefined, use deletePluginData

    this.ensurePluginData(pluginName); // Ensure plugin data, if any, is cached

    this.pluginData[pluginName][key] = value; // Set the value blindly to allow falsey values

    fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4)); // Save to disk
  }

  deletePluginData(pluginName, key) {
    this.ensurePluginData(pluginName); // Ensure plugin data, if any, is cached

    delete this.pluginData[pluginName][key];
    fs.writeFileSync(this.getPluginFile(pluginName), JSON.stringify(this.pluginData[pluginName], null, 4));
  }

}());

/***/ }),

/***/ "./src/modules/discordclasses.js":
/*!***************************************!*\
  !*** ./src/modules/discordclasses.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _structs_classname__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/classname */ "./src/structs/classname.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");




const combineClasses = function (...props) {
  return Object.assign({}, ...props.map(prop => _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps(...prop)));
};

const DiscordClassModules = _utilities__WEBPACK_IMPORTED_MODULE_0__["default"].memoizeObject({
  get Text() {
    return combineClasses(["size20", "size12"], ["selectable", "colorMuted"]);
  },

  get Titles() {
    return combineClasses(["wrapper", "base"], ["defaultColor", "h4"]);
  },

  get EmptyImage() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("emptyImage", "emptyHeader");
  },

  get Modal() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("content", "root", "header", "close");
  },

  get Scrollers() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("thin", "scrollerBase", "content");
  },

  get Margins() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("marginXSmall", "marginBottom8");
  },

  get Integrations() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("secondaryHeader", "detailsWrapper");
  },

  get Card() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].getByProps("card", "topDivider", "description");
  }

});
const emptyClassModule = new Proxy({}, {
  get() {
    return "";
  }

});
const DiscordClasses = new Proxy(DiscordClassModules, {
  get(list, item) {
    if (list[item] === undefined) return emptyClassModule;
    if (typeof list[item] === "string") return list[item];
    return new Proxy(list[item], {
      get(obj, prop) {
        if (!(prop in obj)) return "";
        return new _structs_classname__WEBPACK_IMPORTED_MODULE_1__["default"](obj[prop]);
      }

    });
  }

});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscordClasses);

/***/ }),

/***/ "./src/modules/discordmodules.js":
/*!***************************************!*\
  !*** ./src/modules/discordmodules.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/**
 * A large list of known and useful webpack modules internal to Discord.
 *
 * @module DiscordModules
 * @version 0.0.3
 */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_utilities__WEBPACK_IMPORTED_MODULE_0__["default"].memoizeObject({
  get React() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("createElement", "cloneElement");
  },

  get ReactDOM() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("render", "findDOMNode");
  },

  get Flux() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("connectStores");
  },

  get Events() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByPrototypes("setMaxListeners", "emit");
  },

  /* Guild Info, Stores, and Utilities */
  get GuildStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getGuild");
  },

  get SortedGuildStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getSortedGuilds");
  },

  get SelectedGuildStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getLastSelectedGuildId");
  },

  get GuildSync() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getSyncedGuilds");
  },

  get GuildInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getAcronym");
  },

  get GuildChannelsStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getChannels", "getDefaultChannel");
  },

  get GuildMemberStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMember");
  },

  get MemberCountStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMemberCounts");
  },

  get GuildEmojiStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getEmojis");
  },

  get GuildActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("markGuildAsRead");
  },

  get GuildPermissions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getGuildPermissions");
  },

  /* Channel Store & Actions */
  get ChannelStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getChannel", "getDMFromUserId");
  },

  get SelectedChannelStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getLastSelectedChannelId");
  },

  get ChannelActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("selectChannel");
  },

  get PrivateChannelActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("openPrivateChannel");
  },

  get ChannelSelector() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("selectGuild", "selectChannel");
  },

  /* Current User Info, State and Settings */
  get UserInfoStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getToken");
  },

  get LocaleStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("locale", "initialize");
  },

  get ThemeStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("theme", "initialize");
  },

  get AccountManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("register", "login");
  },

  get UserSettingsUpdater() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("updateRemoteSettings");
  },

  get OnlineWatcher() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isOnline");
  },

  get CurrentUserIdle() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getIdleTime");
  },

  get RelationshipStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isBlocked", "getFriendIDs");
  },

  get RelationshipManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("addRelationship");
  },

  get MentionStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMentions");
  },

  /* User Stores and Utils */
  get UserStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getCurrentUser", "getUser");
  },

  get UserStatusStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getStatus", "getState");
  },

  get UserTypingStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isTyping");
  },

  get UserActivityStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getActivity");
  },

  get UserNameResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getName");
  },

  get UserNoteStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getNote");
  },

  get UserNoteActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("updateNote");
  },

  /* Emoji Store and Utils */
  get EmojiInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isEmojiDisabled");
  },

  get EmojiUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getGuildEmoji");
  },

  get EmojiStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getByCategory", "EMOJI_NAME_RE");
  },

  /* Invite Store and Utils */
  get InviteStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getInvites");
  },

  get InviteResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("findInvite");
  },

  get InviteActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("acceptInvite");
  },

  /* Discord Objects & Utils */
  get DiscordConstants() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Permissions", "ActivityTypes", "StatusTypes");
  },

  get DiscordPermissions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Permissions", "ActivityTypes", "StatusTypes").Permissions;
  },

  get PermissionUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getHighestRole");
  },

  get ColorConverter() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("hex2int");
  },

  get ColorShader() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("darken");
  },

  get TinyColor() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByPrototypes("toRgb");
  },

  get ClassResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getClass");
  },

  get ButtonData() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("ButtonSizes");
  },

  get IconNames() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("IconNames");
  },

  get NavigationUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("transitionTo", "replaceWith", "getHistory");
  },

  /* Discord Messages */
  get MessageStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getMessages");
  },

  get MessageActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("jumpToMessage", "_sendMessage");
  },

  get MessageQueue() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("enqueue");
  },

  get MessageParser() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("createMessage", "parse", "unparse");
  },

  /* Text Processing */
  get hljs() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("highlight", "highlightBlock");
  },

  get SimpleMarkdown() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("parseBlock", "parseInline", "defaultOutput");
  },

  /* Experiments */
  get ExperimentStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getExperimentOverrides");
  },

  get ExperimentsManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isDeveloper");
  },

  get CurrentExperiment() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getExperimentId");
  },

  /* Images, Avatars and Utils */
  get ImageResolver() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getUserAvatarURL", "getGuildIconURL");
  },

  get ImageUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getSizedImageSrc");
  },

  get AvatarDefaults() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getUserAvatarURL", "DEFAULT_AVATARS");
  },

  /* Window, DOM, HTML */
  get WindowInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("isFocused", "windowSize");
  },

  get TagInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("VALID_TAG_NAMES");
  },

  get DOMInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("canUseDOM");
  },

  /* Locale/Location and Time */
  get LocaleManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("setLocale");
  },

  get Moment() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("parseZone");
  },

  get LocationManager() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("createLocation");
  },

  get Timestamps() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("fromTimestamp");
  },

  get TimeFormatter() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("dateFormat");
  },

  /* Strings and Utils */
  get Strings() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Messages").Messages;
  },

  get StringFormats() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("a", "z");
  },

  get StringUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("toASCII");
  },

  /* URLs and Utils */
  get URLParser() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Url", "parse");
  },

  get ExtraURLs() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getArticleURL");
  },

  /* Drag & Drop */
  get DNDActions() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("beginDrag");
  },

  get DNDSources() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("addTarget");
  },

  get DNDObjects() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("DragSource");
  },

  /* Media Stuff (Audio/Video) */
  get MediaDeviceInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Codecs", "SUPPORTED_BROWSERS");
  },

  get MediaInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getOutputVolume");
  },

  get MediaEngineInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("MediaEngineFeatures");
  },

  get VoiceInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("EchoCancellation");
  },

  get VideoStream() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getVideoStream");
  },

  get SoundModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("playSound");
  },

  /* Electron & Other Internals with Utils*/
  get ElectronModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("setBadge");
  },

  get Dispatcher() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("dispatch", "subscribe", "register");
  },

  get PathUtils() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("hasBasename");
  },

  get NotificationModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("showNotification");
  },

  get RouterModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("Router");
  },

  get APIModule() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getAPIBaseURL");
  },

  get AnalyticEvents() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("AnalyticEventConfigs");
  },

  get KeyGenerator() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByRegex(/"binary"/);
  },

  get Buffers() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("INSPECT_MAX_BYTES", "kMaxLength");
  },

  get DeviceStore() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("getDevices");
  },

  get SoftwareInfo() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("os");
  },

  get CurrentContext() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("setTagsContext");
  },

  /* Commonly Used Classes */
  get GuildClasses() {
    const guildsWrapper = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("base", "guilds");
    const guilds = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("wrapper", "acronym");
    const pill = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("circleIconButton");
    const listItem = _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getModule(m => m.listItem && !m.pill && !m.sidebar);
    return Object.assign({}, guildsWrapper, guilds, pill, listItem);
  },

  get LayerStack() {
    return _webpackmodules__WEBPACK_IMPORTED_MODULE_1__["default"].getByProps("pushLayer");
  }

}));

/***/ }),

/***/ "./src/modules/dommanager.js":
/*!***********************************!*\
  !*** ./src/modules/dommanager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMManager)
/* harmony export */ });
class DOMManager {
  /** Document/window width */
  static get screenWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  /** Document/window height */


  static get screenHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  static get bdHead() {
    return this.getElement("bd-head");
  }

  static get bdBody() {
    return this.getElement("bd-body");
  }

  static get bdScripts() {
    return this.getElement("bd-scripts");
  }

  static get bdStyles() {
    return this.getElement("bd-styles");
  }

  static get bdThemes() {
    return this.getElement("bd-themes");
  }

  static get bdCustomCSS() {
    return this.getElement("#customcss");
  }

  static get bdTooltips() {
    return this.getElement("bd-tooltips") || this.createElement("bd-tooltips").appendTo(this.bdBody);
  }

  static get bdModals() {
    return this.getElement("bd-modals") || this.createElement("bd-modals").appendTo(this.bdBody);
  }

  static get bdToasts() {
    return this.getElement("bd-toasts") || this.createElement("bd-toasts").appendTo(this.bdBody);
  }

  static initialize() {// this.createElement("bd-head", {target: document.head});
    // this.createElement("bd-body", {target: document.body});
    // this.createElement("bd-scripts", {target: this.bdHead});
    // this.createElement("bd-styles", {target: this.bdHead});
    // this.createElement("bd-themes", {target: this.bdHead});
    // this.createElement("style", {id: "customcss", target: this.bdHead});
  }

  static escapeID(id) {
    return id.replace(/^[^a-z]+|[^\w-]+/gi, "-");
  }

  static getElement(e, baseElement = document) {
    if (e instanceof Node) return e;
    return baseElement.querySelector(e);
  }

  static createElement(tag, options = {}, child = null) {
    const {
      className,
      id,
      target
    } = options;
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (id) element.id = id;
    if (child) element.append(child);
    if (target) this.getElement(target).append(element);
    return element;
  }
  /**
   * Parses a string of HTML and returns the results. If the second parameter is true,
   * the parsed HTML will be returned as a document fragment {@see https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment}.
   * This is extremely useful if you have a list of elements at the top level, they can then be appended all at once to another node.
   * 
   * If the second parameter is false, then the return value will be the list of parsed
   * nodes and there were multiple top level nodes, otherwise the single node is returned.
   * @param {string} html - HTML to be parsed
   * @param {boolean} [fragment=false] - Whether or not the return should be the raw `DocumentFragment`
   * @returns {(DocumentFragment|NodeList|HTMLElement)} - The result of HTML parsing
   */


  static parseHTML(html, fragment = false) {
    const template = document.createElement("template");
    template.innerHTML = html;
    const node = template.content.cloneNode(true);
    if (fragment) return node;
    return node.childNodes.length > 1 ? node.childNodes : node.childNodes[0];
  }

  static removeStyle(id) {
    id = this.escapeID(id);
    const exists = this.getElement(`#${id}`, this.bdStyles);
    if (exists) exists.remove();
  }

  static injectStyle(id, css) {
    id = this.escapeID(id);
    const style = this.getElement(`#${id}`, this.bdStyles) || this.createElement("style", {
      id
    });
    style.textContent = css;
    this.bdStyles.append(style);
  }

  static unlinkStyle(id) {
    return this.removeStyle(id);
  }

  static linkStyle(id, url, {
    documentHead = false
  } = {}) {
    id = this.escapeID(id);
    return new Promise(resolve => {
      const link = this.getElement(`#${id}`, this.bdStyles) || this.createElement("link", {
        id
      });
      link.rel = "stylesheet";
      link.href = url;
      link.onload = resolve;
      const target = documentHead ? document.head : this.bdStyles;
      target.append(link);
    });
  }

  static removeTheme(id) {
    id = this.escapeID(id);
    const exists = this.getElement(`#${id}`, this.bdThemes);
    if (exists) exists.remove();
  }

  static injectTheme(id, css) {
    id = this.escapeID(id);
    const style = this.getElement(`#${id}`, this.bdThemes) || this.createElement("style", {
      id
    });
    style.textContent = css;
    this.bdThemes.append(style);
  }

  static updateCustomCSS(css) {
    this.bdCustomCSS.textContent = css;
  }

  static removeScript(id) {
    id = this.escapeID(id);
    const exists = this.getElement(`#${id}`, this.bdScripts);
    if (exists) exists.remove();
  }

  static injectScript(id, url) {
    id = this.escapeID(id);
    return new Promise((resolve, reject) => {
      const script = this.getElement(`#${id}`, this.bdScripts) || this.createElement("script", {
        id
      });
      script.src = url;
      script.onload = resolve;
      script.onerror = reject;
      this.bdScripts.append(script);
    });
  } // https://javascript.info/js-animation


  static animate({
    timing = _ => _,
    update,
    duration
  }) {
    const start = performance.now();
    requestAnimationFrame(function animate(time) {
      // timeFraction goes from 0 to 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) timeFraction = 1; // calculate the current animation state

      const progress = timing(timeFraction);
      update(progress); // draw it

      if (timeFraction < 1) requestAnimationFrame(animate);
    });
  }
  /**
   * Adds a listener for when a node matching a selector is added to the document body.
   * The listener is automatically removed upon firing.
   * @param {string} selector - node to wait for
   * @param {callable} callback - function to be performed on event
   */


  static onAdded(selector, callback) {
    if (document.body.querySelector(selector)) return callback(document.body.querySelector(selector));
    const observer = new MutationObserver(mutations => {
      for (let m = 0; m < mutations.length; m++) {
        for (let i = 0; i < mutations[m].addedNodes.length; i++) {
          const mutation = mutations[m].addedNodes[i];
          if (mutation.nodeType === 3) continue; // ignore text

          const directMatch = mutation.matches(selector) && mutation;
          const childrenMatch = mutation.querySelector(selector);

          if (directMatch || childrenMatch) {
            observer.disconnect();
            return callback(directMatch ?? childrenMatch);
          }
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true
    });
    return () => {
      observer.disconnect();
    };
  }
  /**
   * Adds a listener for when the node is removed from the document body.
   * The listener is automatically removed upon firing.
   * @param {HTMLElement} node - node to wait for
   * @param {callable} callback - function to be performed on event
   */


  static onRemoved(node, callback) {
    const observer = new MutationObserver(mutations => {
      for (let m = 0; m < mutations.length; m++) {
        const mutation = mutations[m];
        const nodes = Array.from(mutation.removedNodes);
        const directMatch = nodes.indexOf(node) > -1;
        const parentMatch = nodes.some(parent => parent.contains(node));

        if (directMatch || parentMatch) {
          observer.disconnect();
          callback();
        }
      }
    });
    observer.observe(document.body, {
      subtree: true,
      childList: true
    });
    return () => {
      observer.disconnect();
    };
  }

}
DOMManager.createElement("bd-head", {
  target: document.head
});
DOMManager.createElement("bd-body", {
  target: document.body
});
DOMManager.createElement("bd-scripts", {
  target: DOMManager.bdHead
});
DOMManager.createElement("bd-styles", {
  target: DOMManager.bdHead
});
DOMManager.createElement("bd-themes", {
  target: DOMManager.bdHead
});
DOMManager.createElement("style", {
  id: "customcss",
  target: DOMManager.bdHead
});

/***/ }),

/***/ "./src/modules/editor.js":
/*!*******************************!*\
  !*** ./src/modules/editor.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class Editor {
  async initialize() {
    const baseUrl = "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.20.0/min";
    Object.defineProperty(window, "MonacoEnvironment", {
      value: {
        getWorkerUrl: function () {
          return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
                        self.MonacoEnvironment = {
                            baseUrl: '${baseUrl}'
                        };
                        importScripts('${baseUrl}/vs/base/worker/workerMain.min.js');`)}`;
        }
      }
    });
    const commonjsLoader = window.require;
    delete window.module; // Make monaco think this isn't a local node script or else it freaks out

    _dommanager__WEBPACK_IMPORTED_MODULE_1__["default"].linkStyle("monaco-style", `${baseUrl}/vs/editor/editor.main.min.css`, {
      documentHead: true
    });

    try {
      await _dommanager__WEBPACK_IMPORTED_MODULE_1__["default"].injectScript("monaco-script", `${baseUrl}/vs/loader.min.js`);
      const amdLoader = window.require; // Grab Monaco's amd loader

      window.require = commonjsLoader; // Revert to commonjs
      // Configure Monaco's AMD loader

      amdLoader.config({
        paths: {
          vs: `${baseUrl}/vs`
        }
      });
      amdLoader(["vs/editor/editor.main"], () => {}); // exposes the monaco global
    } catch (e) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("Editor", "Failed to load monaco editor", e);
    } finally {
      // Revert the global require to CommonJS
      window.require = commonjsLoader;
    }
  }

}());

/***/ }),

/***/ "./src/modules/emitter.js":
/*!********************************!*\
  !*** ./src/modules/emitter.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const EventEmitter = __webpack_require__(/*! events */ "events");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class BDEvents extends EventEmitter {
  constructor() {
    super();
    this.setMaxListeners(20);
  }

  dispatch(eventName, ...args) {
    this.emit(eventName, ...args);
  }

}());

/***/ }),

/***/ "./src/modules/ipc.js":
/*!****************************!*\
  !*** ./src/modules/ipc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/constants/ipcevents */ "../common/constants/ipcevents.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class IPCRenderer {
  constructor() {
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.NAVIGATE, () => _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("navigate"));
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.MAXIMIZE, () => _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("maximize"));
    electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.on(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.MINIMIZE, () => _emitter__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch("minimize"));
  }

  openDevTools() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.OPEN_DEVTOOLS);
  }

  closeDevTools() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.CLOSE_DEVTOOLS);
  }

  toggleDevTools() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.TOGGLE_DEVTOOLS);
  }

  relaunch() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.RELAUNCH);
  }

  runScript(script) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.RUN_SCRIPT, script);
  }

  openWindow(url, options) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.OPEN_WINDOW, url, options);
  }

  inspectElement() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.INSPECT_ELEMENT);
  }

  setMinimumSize(width, height) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.MINIMUM_SIZE, width, height);
  }

  stopDevtoolsWarning() {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.send(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.DEVTOOLS_WARNING);
  }

  openDialog(options) {
    return electron__WEBPACK_IMPORTED_MODULE_0__.ipcRenderer.invoke(_common_constants_ipcevents__WEBPACK_IMPORTED_MODULE_2__.OPEN_DIALOG, options);
  }

}());

/***/ }),

/***/ "./src/modules/localemanager.js":
/*!**************************************!*\
  !*** ./src/modules/localemanager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../assets/locales */ "../assets/locales/index.js");
/* harmony import */ var _assets_locales__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_locales__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");




const {
  LocaleStore
} = _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class LocaleManager {
  get discordLocale() {
    return (LocaleStore === null || LocaleStore === void 0 ? void 0 : LocaleStore.locale) ?? this.defaultLocale;
  }

  get defaultLocale() {
    return "en-US";
  }

  constructor() {
    this.locale = "";
    this.strings = _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].extend({}, _assets_locales__WEBPACK_IMPORTED_MODULE_0__[this.defaultLocale]);
  }

  initialize() {
    this.setLocale(this.discordLocale);
    LocaleStore === null || LocaleStore === void 0 ? void 0 : LocaleStore.addChangeListener(newLocale => this.setLocale(newLocale));
  }

  setLocale(newLocale) {
    let newStrings;

    if (newLocale != this.defaultLocale) {
      newStrings = _assets_locales__WEBPACK_IMPORTED_MODULE_0__[newLocale];
      if (!newStrings) return this.setLocale(this.defaultLocale);
    } else {
      newStrings = _assets_locales__WEBPACK_IMPORTED_MODULE_0__[this.defaultLocale];
    }

    this.locale = newLocale;
    _utilities__WEBPACK_IMPORTED_MODULE_2__["default"].extendTruthy(this.strings, newStrings);
    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("strings-updated");
  }

}());

/***/ }),

/***/ "./src/modules/modules.js":
/*!********************************!*\
  !*** ./src/modules/modules.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOMManager": () => (/* reexport safe */ _dommanager__WEBPACK_IMPORTED_MODULE_6__["default"]),
/* harmony export */   "DataStore": () => (/* reexport safe */ _datastore__WEBPACK_IMPORTED_MODULE_3__["default"]),
/* harmony export */   "DiscordClasses": () => (/* reexport safe */ _discordclasses__WEBPACK_IMPORTED_MODULE_12__["default"]),
/* harmony export */   "DiscordModules": () => (/* reexport safe */ _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   "Events": () => (/* reexport safe */ _emitter__WEBPACK_IMPORTED_MODULE_4__["default"]),
/* harmony export */   "IPC": () => (/* reexport safe */ _ipc__WEBPACK_IMPORTED_MODULE_10__["default"]),
/* harmony export */   "LocaleManager": () => (/* reexport safe */ _localemanager__WEBPACK_IMPORTED_MODULE_8__["default"]),
/* harmony export */   "Logger": () => (/* reexport safe */ _common_logger__WEBPACK_IMPORTED_MODULE_11__["default"]),
/* harmony export */   "Patcher": () => (/* reexport safe */ _patcher__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   "React": () => (/* binding */ React),
/* harmony export */   "ReactDOM": () => (/* binding */ ReactDOM),
/* harmony export */   "Settings": () => (/* reexport safe */ _settingsmanager__WEBPACK_IMPORTED_MODULE_5__["default"]),
/* harmony export */   "Strings": () => (/* reexport safe */ _strings__WEBPACK_IMPORTED_MODULE_9__["default"]),
/* harmony export */   "Utilities": () => (/* reexport safe */ _utilities__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   "WebpackModules": () => (/* reexport safe */ _webpackmodules__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities */ "./src/modules/utilities.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _patcher__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./patcher */ "./src/modules/patcher.js");
/* harmony import */ var _localemanager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localemanager */ "./src/modules/localemanager.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ipc */ "./src/modules/ipc.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _discordclasses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./discordclasses */ "./src/modules/discordclasses.js");


const React = _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"].React;
const ReactDOM = _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"].ReactDOM;













/***/ }),

/***/ "./src/modules/patcher.js":
/*!********************************!*\
  !*** ./src/modules/patcher.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Patcher)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/**
 * Patcher that can patch other functions allowing you to run code before, after or
 * instead of the original function. Can also alter arguments and return values.
 */



class Patcher {
  static get patches() {
    return this._patches || (this._patches = []);
  }
  /**
   * Returns all the patches done by a specific caller
   * @param {string} name - Name of the patch caller
   * @method
   */


  static getPatchesByCaller(name) {
    if (!name) return [];
    const patches = [];

    for (const patch of this.patches) {
      for (const childPatch of patch.children) {
        if (childPatch.caller === name) patches.push(childPatch);
      }
    }

    return patches;
  }
  /**
   * Unpatches all patches passed, or when a string is passed unpatches all
   * patches done by that specific caller.
   * @param {Array|string} patches - Either an array of patches to unpatch or a caller name
   */


  static unpatchAll(patches) {
    if (typeof patches === "string") patches = this.getPatchesByCaller(patches);

    for (const patch of patches) {
      patch.unpatch();
    }
  }

  static resolveModule(module) {
    if (!module || typeof module === "function" || typeof module === "object" && !Array.isArray(module)) return module;
    if (typeof module === "string") return _discordmodules__WEBPACK_IMPORTED_MODULE_1__["default"][module];
    if (Array.isArray(module)) return _webpackmodules__WEBPACK_IMPORTED_MODULE_2__["default"].findByUniqueProperties(module);
    return null;
  }

  static makeOverride(patch) {
    return function () {
      let returnValue;
      if (!patch.children || !patch.children.length) return patch.originalFunction.apply(this, arguments);

      for (const superPatch of patch.children.filter(c => c.type === "before")) {
        try {
          superPatch.callback(this, arguments);
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Patcher", `Could not fire before callback of ${patch.functionName} for ${superPatch.caller}`, err);
        }
      }

      const insteads = patch.children.filter(c => c.type === "instead");

      if (!insteads.length) {
        returnValue = patch.originalFunction.apply(this, arguments);
      } else {
        for (const insteadPatch of insteads) {
          try {
            const tempReturn = insteadPatch.callback(this, arguments, patch.originalFunction.bind(this));
            if (typeof tempReturn !== "undefined") returnValue = tempReturn;
          } catch (err) {
            _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Patcher", `Could not fire instead callback of ${patch.functionName} for ${insteadPatch.caller}`, err);
          }
        }
      }

      for (const slavePatch of patch.children.filter(c => c.type === "after")) {
        try {
          const tempReturn = slavePatch.callback(this, arguments, returnValue);
          if (typeof tempReturn !== "undefined") returnValue = tempReturn;
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Patcher", `Could not fire after callback of ${patch.functionName} for ${slavePatch.caller}`, err);
        }
      }

      return returnValue;
    };
  }

  static rePatch(patch) {
    patch.proxyFunction = patch.module[patch.functionName] = this.makeOverride(patch);
  }

  static makePatch(module, functionName, name) {
    const patch = {
      name,
      module,
      functionName,
      originalFunction: module[functionName],
      proxyFunction: null,
      revert: () => {
        // Calling revert will destroy any patches added to the same module after this
        if (patch.getter) {
          Object.defineProperty(patch.module, functionName, { ...Object.getOwnPropertyDescriptor(patch.module, functionName),
            get: () => patch.originalFunction,
            set: undefined
          });
        } else {
          patch.module[patch.functionName] = patch.originalFunction;
        }

        patch.proxyFunction = null;
        patch.children = [];
      },
      counter: 0,
      children: []
    };
    patch.proxyFunction = this.makeOverride(patch);
    const descriptor = Object.getOwnPropertyDescriptor(module, functionName);

    if (descriptor !== null && descriptor !== void 0 && descriptor.get) {
      patch.getter = true;
      Object.defineProperty(module, functionName, {
        configurable: true,
        enumerable: true,
        ...descriptor,
        get: () => patch.proxyFunction,
        // eslint-disable-next-line no-setter-return
        set: value => patch.originalFunction = value
      });
    } else {
      patch.getter = false;
      module[functionName] = patch.proxyFunction;
    }

    const descriptors = Object.assign({}, Object.getOwnPropertyDescriptors(patch.originalFunction), {
      __originalFunction: {
        get: () => patch.originalFunction,
        configurable: true,
        enumerable: true,
        writeable: true
      },
      toString: {
        value: () => patch.originalFunction.toString(),
        configurable: true,
        enumerable: true,
        writeable: true
      }
    });
    Object.defineProperties(patch.proxyFunction, descriptors);
    this.patches.push(patch);
    return patch;
  }
  /**
   * Function with no arguments and no return value that may be called to revert changes made by {@link module:Patcher}, restoring (unpatching) original method.
   * @callback module:Patcher~unpatch
   */

  /**
   * A callback that modifies method logic. This callback is called on each call of the original method and is provided all data about original call. Any of the data can be modified if necessary, but do so wisely.
   *
   * The third argument for the callback will be `undefined` for `before` patches. `originalFunction` for `instead` patches and `returnValue` for `after` patches.
   *
   * @callback module:Patcher~patchCallback
   * @param {object} thisObject - `this` in the context of the original function.
   * @param {args} args - The original arguments of the original function.
   * @param {(function|*)} extraValue - For `instead` patches, this is the original function from the module. For `after` patches, this is the return value of the function.
   * @return {*} Makes sense only when using an `instead` or `after` patch. If something other than `undefined` is returned, the returned value replaces the value of `returnValue`. If used for `before` the return value is ignored.
   */

  /**
   * This method patches onto another function, allowing your code to run beforehand.
   * Using this, you are also able to modify the incoming arguments before the original method is run.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run before the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static before(caller, moduleToPatch, functionName, callback, options = {}) {
    return this.pushChildPatch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
      type: "before"
    }));
  }
  /**
   * This method patches onto another function, allowing your code to run after.
   * Using this, you are also able to modify the return value, using the return of your code instead.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run instead of the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static after(caller, moduleToPatch, functionName, callback, options = {}) {
    return this.pushChildPatch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
      type: "after"
    }));
  }
  /**
   * This method patches onto another function, allowing your code to run instead.
   * Using this, you are also able to modify the return value, using the return of your code instead.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run after the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static instead(caller, moduleToPatch, functionName, callback, options = {}) {
    return this.pushChildPatch(caller, moduleToPatch, functionName, callback, Object.assign(options, {
      type: "instead"
    }));
  }
  /**
   * This method patches onto another function, allowing your code to run before, instead or after the original function.
   * Using this you are able to modify the incoming arguments before the original function is run as well as the return
   * value before the original function actually returns.
   *
   * @param {string} caller - Name of the caller of the patch function. Using this you can undo all patches with the same name using {@link module:Patcher.unpatchAll}. Use `""` if you don't care.
   * @param {object} moduleToPatch - Object with the function to be patched. Can also patch an object's prototype.
   * @param {string} functionName - Name of the method to be patched
   * @param {module:Patcher~patchCallback} callback - Function to run after the original method
   * @param {object} options - Object used to pass additional options.
   * @param {string} [options.type=after] - Determines whether to run the function `before`, `instead`, or `after` the original.
   * @param {string} [options.displayName] You can provide meaningful name for class/object provided in `what` param for logging purposes. By default, this function will try to determine name automatically.
   * @param {boolean} [options.forcePatch=true] Set to `true` to patch even if the function doesnt exist. (Adds noop function in place).
   * @return {module:Patcher~unpatch} Function with no arguments and no return value that should be called to cancel (unpatch) this patch. You should save and run it when your plugin is stopped.
   */


  static pushChildPatch(caller, moduleToPatch, functionName, callback, options = {}) {
    const {
      type = "after",
      forcePatch = true
    } = options;
    const module = this.resolveModule(moduleToPatch);
    if (!module) return null;
    if (!module[functionName] && forcePatch) module[functionName] = function () {};
    if (!(module[functionName] instanceof Function)) return null;
    const descriptor = Object.getOwnPropertyDescriptor(module, functionName);

    if (descriptor && !(descriptor !== null && descriptor !== void 0 && descriptor.configurable)) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Patcher", `Cannot patch ${functionName} of Module, property is readonly.`);
      return null;
    }

    if (typeof moduleToPatch === "string") options.displayName = moduleToPatch;
    const displayName = options.displayName || module.displayName || module.name || module.constructor.displayName || module.constructor.name;
    const patchId = `${displayName}.${functionName}`;
    const patch = this.patches.find(p => p.module == module && p.functionName == functionName) || this.makePatch(module, functionName, patchId);
    if (!patch.proxyFunction) this.rePatch(patch);
    const child = {
      caller,
      type,
      id: patch.counter,
      callback,
      unpatch: () => {
        patch.children.splice(patch.children.findIndex(cpatch => cpatch.id === child.id && cpatch.type === type), 1);

        if (patch.children.length <= 0) {
          const patchNum = this.patches.findIndex(p => p.module == module && p.functionName == functionName);
          if (patchNum < 0) return;
          this.patches[patchNum].revert();
          this.patches.splice(patchNum, 1);
        }
      }
    };
    patch.children.push(child);
    patch.counter++;
    return child.unpatch;
  }

}

/***/ }),

/***/ "./src/modules/pluginmanager.js":
/*!**************************************!*\
  !*** ./src/modules/pluginmanager.js ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _addonmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addonmanager */ "./src/modules/addonmanager.js");
/* harmony import */ var _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structs/addonerror */ "./src/structs/addonerror.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/settings */ "./src/ui/settings.js");
/* module decorator */ module = __webpack_require__.hmd(module);











const path = __webpack_require__(/*! path */ "path");

const vm = __webpack_require__(/*! vm */ "vm");

const normalizeExports = name => `
if (module.exports.default) {
    module.exports = module.exports.default;
}
if (typeof(module.exports) !== "function") {
    module.exports = eval("${name}");
}`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PluginManager extends _addonmanager__WEBPACK_IMPORTED_MODULE_2__["default"] {
  get name() {
    return "PluginManager";
  }

  get extension() {
    return ".plugin.js";
  }

  get duplicatePattern() {
    return /\.plugin\s?\([0-9]+\)\.js/;
  }

  get addonFolder() {
    return path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "plugins");
  }

  get prefix() {
    return "plugin";
  }

  get language() {
    return "javascript";
  }

  constructor() {
    super();
    this.onSwitch = this.onSwitch.bind(this);
    this.observer = new MutationObserver(mutations => {
      for (let i = 0, mlen = mutations.length; i < mlen; i++) {
        this.onMutation(mutations[i]);
      }
    });
  }

  initialize() {
    const errors = super.initialize();
    this.setupFunctions();
    _settingsmanager__WEBPACK_IMPORTED_MODULE_4__["default"].registerPanel("plugins", _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.plugins, {
      order: 3,
      element: () => _ui_settings__WEBPACK_IMPORTED_MODULE_9__["default"].getAddonPanel(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.plugins, this.addonList, this.state, {
        type: this.prefix,
        folder: this.addonFolder,
        onChange: this.togglePlugin.bind(this),
        reload: this.reloadPlugin.bind(this),
        refreshList: this.updatePluginList.bind(this),
        saveAddon: this.saveAddon.bind(this),
        editAddon: this.editAddon.bind(this),
        deleteAddon: this.deleteAddon.bind(this),
        prefix: this.prefix
      })
    });
    return errors;
  }
  /* Aliases */


  updatePluginList() {
    return this.updateList();
  }

  loadAllPlugins() {
    return this.loadAllAddons();
  }

  enablePlugin(idOrAddon) {
    return this.enableAddon(idOrAddon);
  }

  disablePlugin(idOrAddon) {
    return this.disableAddon(idOrAddon);
  }

  togglePlugin(id) {
    return this.toggleAddon(id);
  }

  unloadPlugin(idOrFileOrAddon) {
    return this.unloadAddon(idOrFileOrAddon);
  }

  loadPlugin(filename) {
    return this.loadAddon(filename);
  }

  loadAddon(filename, shouldCTE = true) {
    const error = super.loadAddon(filename, shouldCTE);
    if (error && shouldCTE) _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showAddonErrors({
      plugins: [error]
    });
    return error;
  }

  reloadPlugin(idOrFileOrAddon) {
    const error = this.reloadAddon(idOrFileOrAddon);
    if (error) _ui_modals__WEBPACK_IMPORTED_MODULE_8__["default"].showAddonErrors({
      plugins: [error]
    });
    return typeof idOrFileOrAddon == "string" ? this.addonList.find(c => c.id == idOrFileOrAddon || c.filename == idOrFileOrAddon) : idOrFileOrAddon;
  }
  /* Overrides */


  initializeAddon(addon) {
    if (!addon.exports || !addon.name) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Plugin had no exports or @name property", {
      message: "Plugin had no exports or no @name property. @name property is required for all addons.",
      stack: ""
    }, this.prefix);

    try {
      const isValid = typeof addon.exports === "function";
      if (!isValid) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Plugin not a valid format.", {
        message: "Plugins should be either a function or a class",
        stack: ""
      }, this.prefix);
      const PluginClass = addon.exports;
      const meta = Object.assign({}, addon);
      delete meta.exports;
      const thePlugin = PluginClass.prototype ? new PluginClass(meta) : addon.exports(meta);
      if (!thePlugin.start || !thePlugin.stop) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Missing start or stop function.", {
        message: "Plugins must have both a start and stop function.",
        stack: ""
      }, this.prefix);
      addon.instance = thePlugin;
      addon.name = thePlugin.getName ? thePlugin.getName() : addon.name;
      addon.author = thePlugin.getAuthor ? thePlugin.getAuthor() : addon.author;
      addon.description = thePlugin.getDescription ? thePlugin.getDescription() : addon.description;
      addon.version = thePlugin.getVersion ? thePlugin.getVersion() : addon.version;
      if (!addon.name || !addon.author || !addon.description || !addon.version) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, addon.filename, "Plugin is missing name, author, description, or version", {
        message: "Plugin must provide name, author, description, and version.",
        stack: ""
      }, this.prefix);

      try {
        if (typeof addon.instance.load == "function") addon.instance.load();
      } catch (error) {
        this.state[addon.id] = false;
        return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.methodError.format({
          method: "load()"
        }), {
          message: error.message,
          stack: error.stack
        }, this.prefix);
      }
    } catch (error) {
      return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.methodError.format({
        method: "Plugin constructor()"
      }), {
        message: error.message,
        stack: error.stack
      }, this.prefix);
    }
  }

  requireAddon(filename) {
    const addon = super.requireAddon(filename);

    try {
      const module = {
        filename,
        exports: {}
      }; // Test if the code is valid gracefully

      vm.compileFunction(addon.fileContent, ["require", "module", "exports", "__filename", "__dirname"], {
        filename: path.basename(filename)
      });
      addon.fileContent += normalizeExports(addon.exports || addon.name);
      addon.fileContent += `\n//# sourceURL=betterdiscord://plugins/${addon.filename}`;
      const wrappedPlugin = new Function(["require", "module", "exports", "__filename", "__dirname"], addon.fileContent); // eslint-disable-line no-new-func

      wrappedPlugin(window.require, module, module.exports, module.filename, this.addonFolder);
      addon.exports = module.exports;
      delete addon.fileContent;
      return addon;
    } catch (err) {
      throw new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name || addon.filename, module.filename, _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.compileError, {
        message: err.message,
        stack: err.stack
      }, this.prefix);
    }
  }

  startAddon(id) {
    return this.startPlugin(id);
  }

  stopAddon(id) {
    return this.stopPlugin(id);
  }

  getAddon(id) {
    return this.getPlugin(id);
  }

  startPlugin(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    const plugin = addon.instance;

    try {
      plugin.start();
    } catch (err) {
      this.state[addon.id] = false;
      _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].error(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.couldNotStart.format({
        name: addon.name,
        version: addon.version
      }));
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `${addon.name} v${addon.version} could not be started.`, err);
      return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
        method: "start()"
      }), {
        message: err.message,
        stack: err.stack
      }, this.prefix);
    }

    this.emit("started", addon.id);
    _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

  stopPlugin(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    const plugin = addon.instance;

    try {
      plugin.stop();
    } catch (err) {
      this.state[addon.id] = false;
      _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].error(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.couldNotStop.format({
        name: addon.name,
        version: addon.version
      }));
      _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `${addon.name} v${addon.version} could not be started.`, err);
      return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_3__["default"](addon.name, addon.filename, _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
        method: "stop()"
      }), {
        message: err.message,
        stack: err.stack
      }, this.prefix);
    }

    this.emit("stopped", addon.id);
    _ui_toasts__WEBPACK_IMPORTED_MODULE_7__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.disabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

  getPlugin(idOrFile) {
    const addon = this.addonList.find(c => c.id == idOrFile || c.filename == idOrFile);
    if (!addon) return;
    return addon;
  }

  setupFunctions() {
    _emitter__WEBPACK_IMPORTED_MODULE_6__["default"].on("navigate", this.onSwitch);
    this.observer.observe(document, {
      childList: true,
      subtree: true
    });
  }

  onSwitch() {
    for (let i = 0; i < this.addonList.length; i++) {
      const plugin = this.addonList[i].instance;
      if (!this.state[this.addonList[i].id]) continue;

      if (typeof (plugin === null || plugin === void 0 ? void 0 : plugin.onSwitch) === "function") {
        try {
          plugin.onSwitch();
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `Unable to fire onSwitch for ${this.addonList[i].name} v${this.addonList[i].version}`, err);
        }
      }
    }
  }

  onMutation(mutation) {
    for (let i = 0; i < this.addonList.length; i++) {
      const plugin = this.addonList[i].instance;
      if (!this.state[this.addonList[i].id]) continue;

      if (typeof (plugin === null || plugin === void 0 ? void 0 : plugin.observer) === "function") {
        try {
          plugin.observer(mutation);
        } catch (err) {
          _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace(this.name, `Unable to fire observer for ${this.addonList[i].name} v${this.addonList[i].version}`, err);
        }
      }
    }
  }

}());

/***/ }),

/***/ "./src/modules/settingsmanager.js":
/*!****************************************!*\
  !*** ./src/modules/settingsmanager.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class SettingsManager {
  constructor() {
    this.state = {};
    this.collections = [];
    this.panels = [];
    this.updateStrings = this.updateStrings.bind(this);
  }

  initialize() {
    this.registerCollection("settings", "Settings", _data_data_js__WEBPACK_IMPORTED_MODULE_0__.SettingsConfig);
    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].on("strings-updated", this.updateStrings); // this.patchSections();
  }

  registerCollection(id, name, settings, button = null) {
    if (this.collections.find(c => c.id == id)) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "Already have a collection with id " + id);
    this.collections.push({
      type: "collection",
      id: id,
      name: name,
      settings: settings,
      button: button
    });
    this.setupCollection(id);
    this.loadCollection(id);
    this.updateStrings();
  }

  removeCollection(id) {
    const location = this.collections.findIndex(c => c.id == id);
    if (location < 0) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "No collection with id " + id);
    this.collections.splice(location, 1);
  } // TODO: Move this to SettingsRenderer and also add a registerContentPanel


  registerPanel(id, name, options) {
    if (this.panels.find(p => p.id == id)) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "Already have a panel with id " + id);
    const {
      element,
      onClick,
      order = 1
    } = options;
    const section = {
      id,
      order,
      label: name,
      section: id
    };
    if (onClick) section.clickListener = onClick;
    if (element) section.element = element instanceof _discordmodules__WEBPACK_IMPORTED_MODULE_4__["default"].React.Component ? () => _discordmodules__WEBPACK_IMPORTED_MODULE_4__["default"].React.createElement(element, {}) : typeof element == "function" ? element : () => element;
    this.panels.push(section);
  }

  removePanel(id) {
    const location = this.panels.findIndex(c => c.id == id);
    if (location < 0) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].error("Settings", "No collection with id " + id);
    this.panels.splice(location, 1);
  }

  getPath(path, collectionId = "", categoryId = "") {
    const collection = path.length == 3 ? path[0] : collectionId;
    const category = path.length == 3 ? path[1] : path.length == 2 ? path[0] : categoryId;
    const setting = path[path.length - 1];
    return {
      collection,
      category,
      setting
    };
  }

  setupCollection(id) {
    const collection = this.collections.find(c => c.id == id);
    if (!collection) return;
    const categories = collection.settings;
    if (!this.state[collection.id]) this.state[collection.id] = {};

    for (let cc = 0; cc < categories.length; cc++) {
      const category = categories[cc];

      if (category.type != "category") {
        if (!this.state[collection.id].hasOwnProperty(category.id)) this.state[collection.id][category.id] = category.value;
      } else {
        if (!this.state[collection.id].hasOwnProperty(category.id)) this.state[collection.id][category.id] = {};

        for (let s = 0; s < category.settings.length; s++) {
          const setting = category.settings[s];
          if (!this.state[collection.id][category.id].hasOwnProperty(setting.id)) this.state[collection.id][category.id][setting.id] = setting.value;
          if (setting.hasOwnProperty("disabled")) continue;
          if (!setting.enableWith && !setting.disableWith) continue;
          const pathString = setting.enableWith || setting.disableWith;
          const path = this.getPath(pathString.split("."), collection.id, category.id);
          Object.defineProperty(setting, "disabled", {
            get: () => {
              const other = this.state[path.collection][path.category][path.setting];
              return setting.enableWith ? !other : other;
            }
          });
        }
      }
    }
  }

  saveSettings() {
    for (const collection in this.state) this.saveCollection(collection);
  }

  loadSettings() {
    for (const collection in this.state) this.loadCollection(collection);
  }

  saveCollection(collection) {
    _datastore__WEBPACK_IMPORTED_MODULE_2__["default"].setData(collection, this.state[collection]);
  }

  loadCollection(id) {
    const previousState = _datastore__WEBPACK_IMPORTED_MODULE_2__["default"].getData(id);
    if (!previousState) return this.saveCollection(id);

    for (const category in this.state[id]) {
      if (!previousState[category]) Object.assign(previousState, {
        [category]: this.state[id][category]
      });

      for (const setting in this.state[id][category]) {
        if (previousState[category][setting] == undefined) continue;
        const settingObj = this.getSetting(id, category, setting);

        switch (settingObj.type) {
          case "radio":
          case "dropdown":
            {
              const exists = settingObj.options.some(o => o.value == previousState[category][setting]);
              if (exists) this.state[id][category][setting] = previousState[category][setting];
              break;
            }

          default:
            {
              this.state[id][category][setting] = previousState[category][setting];
            }
        }
      }
    }

    this.saveCollection(id); // in case new things were added
  }

  onSettingChange(collection, category, id, value) {
    this.state[collection][category][id] = value;
    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch("setting-updated", collection, category, id, value);
    this.saveCollection(collection);
  }

  getSetting(collection, category, id) {
    if (arguments.length == 2) return this.collections[0].find(c => c.id == arguments[0]).settings.find(s => s.id == arguments[1]);
    return this.collections.find(c => c.id == collection).settings.find(c => c.id == category).settings.find(s => s.id == id);
  }

  get(collection, category, id) {
    if (arguments.length == 2) {
      id = category;
      category = collection;
      collection = "settings";
    }

    if (!this.state[collection] || !this.state[collection][category]) return false;
    return this.state[collection][category][id];
  }

  set(collection, category, id, value) {
    if (arguments.length == 3) {
      value = id;
      id = category;
      category = collection;
      collection = "settings";
    }

    return this.onSettingChange(collection, category, id, value);
  }

  on(collection, category, identifier, callback) {
    const handler = (col, cat, id, value) => {
      if (col !== collection || cat !== category || id !== identifier) return;
      callback(value);
    };

    _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].on("setting-updated", handler);
    return () => {
      _emitter__WEBPACK_IMPORTED_MODULE_3__["default"].off("setting-updated", handler);
    };
  }

  updateStrings() {
    // Update settings collections
    for (let c = 0; c < this.collections.length; c++) {
      const collection = this.collections[c];
      const CS = _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Collections[collection.id];
      if (!CS) continue;
      collection.name = CS.name || collection.name;
      const categories = this.collections[c].settings;

      for (let cat = 0; cat < categories.length; cat++) {
        const category = categories[cat];
        const CatStr = CS[category.id];
        if (!CatStr) continue;
        category.name = CatStr.name || category.name;

        for (let s = 0; s < category.settings.length; s++) {
          const setting = category.settings[s];
          const SetStr = CatStr[setting.id];
          if (!SetStr) continue;
          setting.name = SetStr.name || setting.name;
          setting.note = SetStr.note || setting.note;
          if (!setting.options) continue;

          for (const opt of setting.options) {
            opt.label = SetStr.options[opt.id] || SetStr.options[opt.value] || opt.label;
          }
        }
      }
    } // Update panel labels


    for (let p = 0; p < this.panels.length; p++) {
      const panel = this.panels[p];
      const Str = _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels[panel.id];
      panel.label = Str || panel.label;
    }
  }

}());

/***/ }),

/***/ "./src/modules/strings.js":
/*!********************************!*\
  !*** ./src/modules/strings.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localemanager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localemanager */ "./src/modules/localemanager.js");
/* harmony import */ var _structs_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/string */ "./src/structs/string.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Proxy(_localemanager__WEBPACK_IMPORTED_MODULE_0__["default"].strings, {
  get: function (strings, category) {
    if (!strings.hasOwnProperty(category)) {
      return new Proxy({}, {
        get: function () {
          return `String group "${category}" not found.`;
        }
      });
    }

    return new Proxy(strings[category], {
      get: function (obj, prop) {
        if (typeof obj[prop] == "string") return new _structs_string__WEBPACK_IMPORTED_MODULE_1__["default"](obj[prop]);
        return obj[prop];
      }
    });
  }
}));

/***/ }),

/***/ "./src/modules/thememanager.js":
/*!*************************************!*\
  !*** ./src/modules/thememanager.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _addonmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addonmanager */ "./src/modules/addonmanager.js");
/* harmony import */ var _structs_addonerror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structs/addonerror */ "./src/structs/addonerror.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _dommanager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dommanager */ "./src/modules/dommanager.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/settings */ "./src/ui/settings.js");










const path = __webpack_require__(/*! path */ "path");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class ThemeManager extends _addonmanager__WEBPACK_IMPORTED_MODULE_1__["default"] {
  get name() {
    return "ThemeManager";
  }

  get extension() {
    return ".theme.css";
  }

  get duplicatePattern() {
    return /\.theme\s?\([0-9]+\)\.css/;
  }

  get addonFolder() {
    return path.resolve(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.dataPath, "themes");
  }

  get prefix() {
    return "theme";
  }

  get language() {
    return "css";
  }

  initialize() {
    const errors = super.initialize();
    _settingsmanager__WEBPACK_IMPORTED_MODULE_3__["default"].registerPanel("themes", _strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.themes, {
      order: 4,
      element: () => _ui_settings__WEBPACK_IMPORTED_MODULE_8__["default"].getAddonPanel(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Panels.themes, this.addonList, this.state, {
        type: this.prefix,
        folder: this.addonFolder,
        onChange: this.toggleTheme.bind(this),
        reload: this.reloadTheme.bind(this),
        refreshList: this.updateThemeList.bind(this),
        saveAddon: this.saveAddon.bind(this),
        editAddon: this.editAddon.bind(this),
        deleteAddon: this.deleteAddon.bind(this),
        prefix: this.prefix
      })
    });
    return errors;
  }
  /* Aliases */


  updateThemeList() {
    return this.updateList();
  }

  loadAllThemes() {
    return this.loadAllAddons();
  }

  enableTheme(idOrAddon) {
    return this.enableAddon(idOrAddon);
  }

  disableTheme(idOrAddon) {
    return this.disableAddon(idOrAddon);
  }

  toggleTheme(id) {
    return this.toggleAddon(id);
  }

  unloadTheme(idOrFileOrAddon) {
    return this.unloadAddon(idOrFileOrAddon);
  }

  loadTheme(filename) {
    return this.loadAddon(filename);
  }

  reloadTheme(idOrFileOrAddon) {
    return this.reloadAddon(idOrFileOrAddon);
  }

  loadAddon(filename, shouldCTE = true) {
    const error = super.loadAddon(filename, shouldCTE);
    if (error && shouldCTE) _ui_modals__WEBPACK_IMPORTED_MODULE_7__["default"].showAddonErrors({
      themes: [error]
    });
    return error;
  }
  /* Overrides */


  initializeAddon(addon) {
    if (!addon.name || !addon.author || !addon.description || !addon.version) return new _structs_addonerror__WEBPACK_IMPORTED_MODULE_2__["default"](addon.name || addon.filename, addon.filename, "Addon is missing name, author, description, or version", {
      message: "Addon must provide name, author, description, and version.",
      stack: ""
    }, this.prefix);
  }

  requireAddon(filename) {
    const addon = super.requireAddon(filename);
    addon.css = addon.fileContent;
    delete addon.fileContent;
    if (addon.format == "json") addon.css = addon.css.split("\n").slice(1).join("\n");
    return addon;
  }

  startAddon(id) {
    return this.addTheme(id);
  }

  stopAddon(id) {
    return this.removeTheme(id);
  }

  addTheme(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].injectTheme(addon.slug + "-theme-container", addon.css);
    _ui_toasts__WEBPACK_IMPORTED_MODULE_6__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.enabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

  removeTheme(idOrAddon) {
    const addon = typeof idOrAddon == "string" ? this.addonList.find(p => p.id == idOrAddon) : idOrAddon;
    if (!addon) return;
    _dommanager__WEBPACK_IMPORTED_MODULE_4__["default"].removeTheme(addon.slug + "-theme-container");
    _ui_toasts__WEBPACK_IMPORTED_MODULE_6__["default"].show(_strings__WEBPACK_IMPORTED_MODULE_5__["default"].Addons.disabled.format({
      name: addon.name,
      version: addon.version
    }));
  }

}());

/***/ }),

/***/ "./src/modules/updater.js":
/*!********************************!*\
  !*** ./src/modules/updater.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreUpdater": () => (/* binding */ CoreUpdater),
/* harmony export */   "PluginUpdater": () => (/* binding */ PluginUpdater),
/* harmony export */   "ThemeUpdater": () => (/* binding */ ThemeUpdater),
/* harmony export */   "default": () => (/* binding */ Updater)
/* harmony export */ });
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! request */ "request");
/* harmony import */ var request__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(request__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emitter */ "./src/modules/emitter.js");
/* harmony import */ var _ipc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ipc */ "./src/modules/ipc.js");
/* harmony import */ var _strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./strings */ "./src/modules/strings.js");
/* harmony import */ var _datastore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./datastore */ "./src/modules/datastore.js");
/* harmony import */ var _settingsmanager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _pluginmanager__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pluginmanager */ "./src/modules/pluginmanager.js");
/* harmony import */ var _thememanager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./thememanager */ "./src/modules/thememanager.js");
/* harmony import */ var _webpackmodules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./webpackmodules */ "./src/modules/webpackmodules.js");
/* harmony import */ var _ui_toasts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/toasts */ "./src/ui/toasts.js");
/* harmony import */ var _ui_notices__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/notices */ "./src/ui/notices.js");
/* harmony import */ var _ui_modals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/modals */ "./src/ui/modals.js");
/* harmony import */ var _ui_updater__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ui/updater */ "./src/ui/updater.jsx");
/* harmony import */ var _discordmodules__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./discordmodules */ "./src/modules/discordmodules.js");


















const React = _discordmodules__WEBPACK_IMPORTED_MODULE_17__["default"].React;
const UserSettingsWindow = _webpackmodules__WEBPACK_IMPORTED_MODULE_12__["default"].getByProps("updateAccount");
const base = "https://api.betterdiscord.app/v2/store/";

const route = r => `${base}${r}s`;

const redirect = addonId => `https://betterdiscord.app/gh-redirect?id=${addonId}`;

const getJSON = url => {
  return new Promise(resolve => {
    request__WEBPACK_IMPORTED_MODULE_0___default()(url, (error, _, body) => {
      if (error) return resolve([]);
      resolve(JSON.parse(body));
    });
  });
};

const reducer = (acc, addon) => {
  if (addon.version === "Unknown") return acc;
  acc[addon.file_name] = {
    name: addon.name,
    version: addon.version,
    id: addon.id
  };
  return acc;
};

class Updater {
  static initialize() {
    _settingsmanager__WEBPACK_IMPORTED_MODULE_9__["default"].registerPanel("updates", _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Panels.updates, {
      order: 1,
      element: () => {
        return React.createElement(_ui_updater__WEBPACK_IMPORTED_MODULE_16__["default"], {
          coreUpdater: CoreUpdater,
          pluginUpdater: PluginUpdater,
          themeUpdater: ThemeUpdater
        });
      }
    });
    CoreUpdater.initialize();
    PluginUpdater.initialize();
    ThemeUpdater.initialize();
  }

}
class CoreUpdater {
  static hasUpdate = false;
  static apiData = {};
  static remoteVersion = "";

  static async initialize() {
    this.checkForUpdate();
  }

  static async checkForUpdate(showNotice = true) {
    const resp = await fetch(`https://api.github.com/repos/BetterDiscord/BetterDiscord/releases/latest`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "User-Agent": "BetterDiscord Updater"
      }
    });
    const data = await resp.json();
    this.apiData = data;
    const remoteVersion = data.tag_name.startsWith("v") ? data.tag_name.slice(1) : data.tag_name;
    this.hasUpdate = remoteVersion > _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version;
    this.remoteVersion = remoteVersion;
    if (!this.hasUpdate || !showNotice) return;
    const close = _ui_notices__WEBPACK_IMPORTED_MODULE_14__["default"].info(_strings__WEBPACK_IMPORTED_MODULE_7__["default"].Updater.updateAvailable.format({
      version: remoteVersion
    }), {
      buttons: [{
        label: _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Notices.moreInfo,
        onClick: () => {
          var _UserSettingsWindow$o;

          close();
          UserSettingsWindow === null || UserSettingsWindow === void 0 ? void 0 : (_UserSettingsWindow$o = UserSettingsWindow.open) === null || _UserSettingsWindow$o === void 0 ? void 0 : _UserSettingsWindow$o.call(UserSettingsWindow, "updates");
        }
      }]
    });
  }

  static async update() {
    try {
      const asar = this.apiData.assets.find(a => a.name === "betterdiscord.asar");
      const buff = await new Promise((resolve, reject) => request__WEBPACK_IMPORTED_MODULE_0___default()(asar.url, {
        headers: {
          "Content-Type": "application/octet-stream",
          "User-Agent": "BetterDiscord Updater",
          "Accept": "application/octet-stream"
        }
      }, (err, resp, body) => {
        if (err || resp.statusCode != 200) return reject(err || `${resp.statusCode} ${resp.statusMessage}`);
        return resolve(body);
      }));
      const asarPath = path__WEBPACK_IMPORTED_MODULE_3___default().join(_datastore__WEBPACK_IMPORTED_MODULE_8__["default"].baseFolder, "betterdiscord.asar");

      const fs = __webpack_require__(/*! original-fs */ "original-fs");

      fs.writeFileSync(asarPath, buff);
      this.hasUpdate = false;
      _data_data_js__WEBPACK_IMPORTED_MODULE_2__.Config.version = this.remoteVersion;
      _ui_modals__WEBPACK_IMPORTED_MODULE_15__["default"].showConfirmationModal(_strings__WEBPACK_IMPORTED_MODULE_7__["default"].Updater.updateSuccessful, _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Modals.restartPrompt, {
        confirmText: _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Modals.restartNow,
        cancelText: _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Modals.restartLater,
        danger: true,
        onConfirm: () => _ipc__WEBPACK_IMPORTED_MODULE_6__["default"].relaunch()
      });
    } catch (err) {
      _common_logger__WEBPACK_IMPORTED_MODULE_4__["default"].stacktrace("Updater", "Failed to update", err);
      _ui_modals__WEBPACK_IMPORTED_MODULE_15__["default"].showConfirmationModal(_strings__WEBPACK_IMPORTED_MODULE_7__["default"].Updater.updateFailed, _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Updater.updateFailedMessage, {
        cancelText: null
      });
    }
  }

}

class AddonUpdater {
  constructor(type) {
    this.manager = type === "plugin" ? _pluginmanager__WEBPACK_IMPORTED_MODULE_10__["default"] : _thememanager__WEBPACK_IMPORTED_MODULE_11__["default"];
    this.type = type;
    this.cache = {};
    this.pending = [];
  }

  async initialize() {
    await this.updateCache();
    this.checkAll();
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].on(`${this.type}-loaded`, addon => {
      this.checkForUpdate(addon.filename, addon.version);
    });
    _emitter__WEBPACK_IMPORTED_MODULE_5__["default"].on(`${this.type}-unloaded`, addon => {
      const index = this.pending.indexOf(addon.filename);
      if (index >= 0) this.pending.splice(index, 1);
    });
  }

  async updateCache() {
    this.cache = {};
    const addonData = await getJSON(route(this.type));
    addonData.reduce(reducer, this.cache);
  }

  clearPending() {
    this.pending.splice(0, this.pending.length);
  }

  checkAll(showNotice = true) {
    for (const addon of this.manager.addonList) this.checkForUpdate(addon.filename, addon.version);

    if (showNotice) this.showUpdateNotice();
  }

  checkForUpdate(filename, currentVersion) {
    if (this.pending.includes(filename)) return;
    const info = this.cache[path__WEBPACK_IMPORTED_MODULE_3___default().basename(filename)];
    if (!info) return;
    const hasUpdate = info.version > currentVersion;
    if (!hasUpdate) return;
    this.pending.push(filename);
  }

  async updateAddon(filename) {
    const info = this.cache[filename];
    request__WEBPACK_IMPORTED_MODULE_0___default()(redirect(info.id), (error, _, body) => {
      if (error) {
        _common_logger__WEBPACK_IMPORTED_MODULE_4__["default"].stacktrace("AddonUpdater", `Failed to download body for ${info.id}:`, error);
        return;
      }

      const file = path__WEBPACK_IMPORTED_MODULE_3___default().join(path__WEBPACK_IMPORTED_MODULE_3___default().resolve(this.manager.addonFolder), filename);
      fs__WEBPACK_IMPORTED_MODULE_1___default().writeFile(file, body.toString(), () => {
        _ui_toasts__WEBPACK_IMPORTED_MODULE_13__["default"].success(_strings__WEBPACK_IMPORTED_MODULE_7__["default"].Updater.addonUpdated.format({
          name: info.name,
          version: info.version
        }));
        this.pending.splice(this.pending.indexOf(filename), 1);
      });
    });
  }

  showUpdateNotice() {
    if (!this.pending.length) return;
    const close = _ui_notices__WEBPACK_IMPORTED_MODULE_14__["default"].info(_strings__WEBPACK_IMPORTED_MODULE_7__["default"].Updater.addonUpdatesAvailable.format({
      count: this.pending.length,
      type: this.type
    }), {
      buttons: [{
        label: _strings__WEBPACK_IMPORTED_MODULE_7__["default"].Notices.moreInfo,
        onClick: () => {
          var _UserSettingsWindow$o2;

          close();
          UserSettingsWindow === null || UserSettingsWindow === void 0 ? void 0 : (_UserSettingsWindow$o2 = UserSettingsWindow.open) === null || _UserSettingsWindow$o2 === void 0 ? void 0 : _UserSettingsWindow$o2.call(UserSettingsWindow, "updates");
        }
      }]
    });
  }

}

const PluginUpdater = new AddonUpdater("plugin");
const ThemeUpdater = new AddonUpdater("theme");

/***/ }),

/***/ "./src/modules/utilities.js":
/*!**********************************!*\
  !*** ./src/modules/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Utilities)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");

class Utilities {
  /**
   * Generates an automatically memoizing version of an object.
   * @author Zerebos
   * @param {Object} object - object to memoize
   * @returns {Proxy} the proxy to the object that memoizes properties
   */
  static memoizeObject(object) {
    const proxy = new Proxy(object, {
      get: function (obj, mod) {
        if (!obj.hasOwnProperty(mod)) return undefined;

        if (Object.getOwnPropertyDescriptor(obj, mod).get) {
          const value = obj[mod];
          delete obj[mod];
          obj[mod] = value;
        }

        return obj[mod];
      },
      set: function (obj, mod, value) {
        if (obj.hasOwnProperty(mod)) return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].error("MemoizedObject", "Trying to overwrite existing property");
        obj[mod] = value;
        return obj[mod];
      }
    });
    Object.defineProperty(proxy, "hasOwnProperty", {
      value: function (prop) {
        return this[prop] !== undefined;
      }
    });
    return proxy;
  }
  /**
   * Deep extends an object with a set of other objects. Objects later in the list
   * of `extenders` have priority, that is to say if one sets a key to be a primitive,
   * it will be overwritten with the next one with the same key. If it is an object,
   * and the keys match, the object is extended. This happens recursively.
   * @param {object} extendee - Object to be extended
   * @param {...object} extenders - Objects to extend with
   * @returns {object} - A reference to `extendee`
   */


  static extend(extendee, ...extenders) {
    for (let i = 0; i < extenders.length; i++) {
      for (const key in extenders[i]) {
        if (extenders[i].hasOwnProperty(key)) {
          if (typeof extendee[key] === "object" && typeof extenders[i][key] === "object") {
            this.extend(extendee[key], extenders[i][key]);
          } else if (typeof extenders[i][key] === "object") {
            extendee[key] = {};
            this.extend(extendee[key], extenders[i][key]);
          } else {
            extendee[key] = extenders[i][key];
          }
        }
      }
    }

    return extendee;
  }
  /**
   * Deep extends an object with a set of other objects. Objects later in the list
   * of `extenders` have priority, that is to say if one sets a key to be a primitive,
   * it will be overwritten with the next one with the same key. If it is an object,
   * and the keys match, the object is extended. This happens recursively.
   * @param {object} extendee - Object to be extended
   * @param {...object} extenders - Objects to extend with
   * @returns {object} - A reference to `extendee`
   */


  static extendTruthy(extendee, ...extenders) {
    for (let i = 0; i < extenders.length; i++) {
      for (const key in extenders[i]) {
        if (extenders[i].hasOwnProperty(key)) {
          if (typeof extendee[key] === "object" && typeof extenders[i][key] === "object") {
            this.extendTruthy(extendee[key], extenders[i][key]);
          } else if (typeof extenders[i][key] === "object") {
            extendee[key] = {};
            this.extendTruthy(extendee[key], extenders[i][key]);
          } else if (extenders[i][key]) {
            extendee[key] = extenders[i][key];
          }
        }
      }
    }

    return extendee;
  }
  /**
   * Format strings with placeholders (`{{placeholder}}`) into full strings.
   * Quick example: `PluginUtilities.formatString("Hello, {{user}}", {user: "Zerebos"})`
   * would return "Hello, Zerebos".
   * @param {string} string - string to format
   * @param {object} values - object literal of placeholders to replacements
   * @returns {string} the properly formatted string
   */


  static formatString(string, values) {
    for (const val in values) {
      let replacement = values[val];
      if (Array.isArray(replacement)) replacement = JSON.stringify(replacement);
      if (typeof replacement === "object" && replacement !== null) replacement = replacement.toString();
      string = string.replace(new RegExp(`{{${val}}}`, "g"), replacement);
    }

    return string;
  }
  /**
   * Finds a value, subobject, or array from a tree that matches a specific filter. This is a DFS.
   * @param {object} tree Tree that should be walked
   * @param {callable} searchFilter Filter to check against each object and subobject
   * @param {object} options Additional options to customize the search
   * @param {Array<string>|null} [options.walkable=null] Array of strings to use as keys that are allowed to be walked on. Null value indicates all keys are walkable
   * @param {Array<string>} [options.ignore=[]] Array of strings to use as keys to exclude from the search, most helpful when `walkable = null`.
   */


  static findInTree(tree, searchFilter, {
    walkable = null,
    ignore = []
  } = {}) {
    if (typeof searchFilter === "string") {
      if (tree.hasOwnProperty(searchFilter)) return tree[searchFilter];
    } else if (searchFilter(tree)) {
      return tree;
    }

    if (typeof tree !== "object" || tree == null) return undefined;
    let tempReturn;

    if (tree instanceof Array) {
      for (const value of tree) {
        tempReturn = this.findInTree(value, searchFilter, {
          walkable,
          ignore
        });
        if (typeof tempReturn != "undefined") return tempReturn;
      }
    } else {
      const toWalk = walkable == null ? Object.keys(tree) : walkable;

      for (const key of toWalk) {
        if (typeof tree[key] == "undefined" || ignore.includes(key)) continue;
        tempReturn = this.findInTree(tree[key], searchFilter, {
          walkable,
          ignore
        });
        if (typeof tempReturn != "undefined") return tempReturn;
      }
    }

    return tempReturn;
  }
  /**
   * Returns a function, that, as long as it continues to be invoked, will not
   * be triggered. The function will be called after it stops being called for
   * N milliseconds.
   * 
   * Adapted from the version by David Walsh (https://davidwalsh.name/javascript-debounce-function)
   * 
   * @param {function} executor 
   * @param {number} delay 
   */


  static debounce(executor, delay) {
    let timeout;
    return function (...args) {
      const callback = () => {
        timeout = null;
        Reflect.apply(executor, null, args);
      };

      clearTimeout(timeout);
      timeout = setTimeout(callback, delay);
    };
  }
  /**
   * Takes a string of html and escapes it using the brower's own escaping mechanism.
   * @param {String} html - html to be escaped
   */


  static escapeHTML(html) {
    const textNode = document.createTextNode("");
    const spanElement = document.createElement("span");
    spanElement.append(textNode);
    textNode.nodeValue = html;
    return spanElement.innerHTML;
  }
  /**
   * Builds a classname string from any number of arguments. This includes arrays and objects.
   * When given an array all values from the array are added to the list.
   * When given an object they keys are added as the classnames if the value is truthy.
   * Copyright (c) 2018 Jed Watson https://github.com/JedWatson/classnames MIT License
   * @param {...Any} argument - anything that should be used to add classnames.
   */


  static className() {
    const classes = [];
    const hasOwn = {}.hasOwnProperty;

    for (let i = 0; i < arguments.length; i++) {
      const arg = arguments[i];
      if (!arg) continue;
      const argType = typeof arg;

      if (argType === "string" || argType === "number") {
        classes.push(arg);
      } else if (Array.isArray(arg) && arg.length) {
        const inner = this.classNames.apply(null, arg);

        if (inner) {
          classes.push(inner);
        }
      } else if (argType === "object") {
        for (const key in arg) {
          if (hasOwn.call(arg, key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }

    return classes.join(" ");
  }

}

/***/ }),

/***/ "./src/modules/webpackmodules.js":
/*!***************************************!*\
  !*** ./src/modules/webpackmodules.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filters": () => (/* binding */ Filters),
/* harmony export */   "default": () => (/* binding */ WebpackModules)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/**
 * Allows for grabbing and searching through Discord's webpacked modules.
 * @module WebpackModules
 * @version 0.0.2
 */

/**
 * Checks if a given module matches a set of parameters.
 * @callback module:WebpackModules.Filters~filter
 * @param {*} module - module to check
 * @returns {boolean} - True if the module matches the filter, false otherwise
 */

/**
 * Filters for use with {@link module:WebpackModules} but may prove useful elsewhere.
 */

class Filters {
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a set of properties.
   * @param {Array<string>} props - Array of property names
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties
   */
  static byProps(props, filter = m => m) {
    return module => {
      if (!module) return false;
      if (typeof module !== "object" && typeof module !== "function") return false;
      const component = filter(module);
      if (!component) return false;

      for (let p = 0; p < props.length; p++) {
        if (!(props[p] in component)) return false;
      }

      return true;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a set of properties on the object's prototype.
   * @param {Array<string>} fields - Array of property names
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties on the object's prototype
   */


  static byPrototypeFields(fields, filter = m => m) {
    return module => {
      if (!module) return false;
      if (typeof module !== "object" && typeof module !== "function") return false;
      const component = filter(module);
      if (!component) return false;
      if (!component.prototype) return false;

      for (let f = 0; f < fields.length; f++) {
        if (!(fields[f] in component.prototype)) return false;
      }

      return true;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a regex.
   * @param {RegExp} search - A RegExp to check on the module
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties
   */


  static byRegex(search, filter = m => m) {
    return module => {
      const method = filter(module);
      if (!method) return false;
      let methodString = "";

      try {
        methodString = method.toString([]);
      } catch (err) {
        methodString = method.toString();
      }

      return methodString.search(search) !== -1;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by strings.
   * @param {...String} search - A RegExp to check on the module
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of strings
   */


  static byStrings(...strings) {
    return module => {
      if (!(module !== null && module !== void 0 && module.toString) || typeof (module === null || module === void 0 ? void 0 : module.toString) !== "function") return; // Not stringable

      let moduleString = "";

      try {
        moduleString = module === null || module === void 0 ? void 0 : module.toString([]);
      } catch (err) {
        moduleString = module === null || module === void 0 ? void 0 : module.toString();
      }

      if (!moduleString) return false; // Could not create string

      for (const s of strings) {
        if (!moduleString.includes(s)) return false;
      }

      return true;
    };
  }
  /**
   * Generates a {@link module:WebpackModules.Filters~filter} that filters by a set of properties.
   * @param {string} name - Name the module should have
   * @param {module:WebpackModules.Filters~filter} filter - Additional filter
   * @returns {module:WebpackModules.Filters~filter} - A filter that checks for a set of properties
   */


  static byDisplayName(name) {
    return module => {
      return module && module.displayName === name;
    };
  }
  /**
   * Generates a combined {@link module:WebpackModules.Filters~filter} from a list of filters.
   * @param {...module:WebpackModules.Filters~filter} filters - A list of filters
   * @returns {module:WebpackModules.Filters~filter} - Combinatory filter of all arguments
   */


  static combine(...filters) {
    return module => {
      return filters.every(filter => filter(module));
    };
  }

}
const hasThrown = new WeakSet();

const wrapFilter = filter => (exports, module, moduleId) => {
  try {
    var _exports$default, _exports$default2, _exports$default3, _exports$default4, _exports$default5, _exports$default6, _exports$default7, _exports$default8;

    if (exports !== null && exports !== void 0 && (_exports$default = exports.default) !== null && _exports$default !== void 0 && _exports$default.remove && exports !== null && exports !== void 0 && (_exports$default2 = exports.default) !== null && _exports$default2 !== void 0 && _exports$default2.set && exports !== null && exports !== void 0 && (_exports$default3 = exports.default) !== null && _exports$default3 !== void 0 && _exports$default3.clear && exports !== null && exports !== void 0 && (_exports$default4 = exports.default) !== null && _exports$default4 !== void 0 && _exports$default4.get && !(exports !== null && exports !== void 0 && (_exports$default5 = exports.default) !== null && _exports$default5 !== void 0 && _exports$default5.sort)) return false;
    if (exports.remove && exports.set && exports.clear && exports.get && !exports.sort) return false;
    if (exports !== null && exports !== void 0 && (_exports$default6 = exports.default) !== null && _exports$default6 !== void 0 && _exports$default6.getToken || exports !== null && exports !== void 0 && (_exports$default7 = exports.default) !== null && _exports$default7 !== void 0 && _exports$default7.getEmail || exports !== null && exports !== void 0 && (_exports$default8 = exports.default) !== null && _exports$default8 !== void 0 && _exports$default8.showToken) return false;
    if (exports.getToken || exports.getEmail || exports.showToken) return false;
    return filter(exports, module, moduleId);
  } catch (err) {
    if (!hasThrown.has(filter)) _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("WebpackModules~getModule", "Module filter threw an exception.", filter, err);
    hasThrown.add(filter);
    return false;
  }
};

class WebpackModules {
  static find(filter, first = true) {
    return this.getModule(filter, {
      first
    });
  }

  static findAll(filter) {
    return this.getModule(filter, {
      first: false
    });
  }

  static findByUniqueProperties(props, first = true) {
    return first ? this.getByProps(...props) : this.getAllByProps(...props);
  }

  static findByDisplayName(name) {
    return this.getByDisplayName(name);
  }
  /**
   * Finds a module using a filter function.
   * @param {function} filter A function to use to filter modules
   * @param {object} [options] Set of options to customize the search
   * @param {Boolean} [options.first=true] Whether to return only the first matching module
   * @param {Boolean} [options.defaultExport=true] Whether to return default export when matching the default export
   * @param {Boolean} [options.searchExports=false] Whether to execute the filter on webpack export getters.
   * @return {Any}
   */


  static getModule(filter, options = {}) {
    const {
      first = true,
      defaultExport = true,
      searchExports = false
    } = options;
    const wrappedFilter = wrapFilter(filter);
    const modules = this.getAllModules();
    const rm = [];
    const indices = Object.keys(modules);

    for (let i = 0; i < indices.length; i++) {
      const index = indices[i];
      if (!modules.hasOwnProperty(index)) continue;
      const module = modules[index];
      const {
        exports
      } = module;
      if (!exports || exports === window || exports === document.documentElement) continue;

      if (typeof exports === "object" && searchExports) {
        for (const key in exports) {
          let foundModule = null;
          const wrappedExport = exports[key];
          if (!wrappedExport) continue;
          if (wrappedFilter(wrappedExport, module, index)) foundModule = wrappedExport;
          if (!foundModule) continue;
          if (first) return foundModule;
          rm.push(foundModule);
        }
      } else {
        let foundModule = null;
        if (exports.Z && wrappedFilter(exports.Z, module, index)) foundModule = defaultExport ? exports.Z : exports;
        if (exports.ZP && wrappedFilter(exports.ZP, module, index)) foundModule = defaultExport ? exports.ZP : exports;
        if (exports.__esModule && exports.default && wrappedFilter(exports.default, module, index)) foundModule = defaultExport ? exports.default : exports;
        if (wrappedFilter(exports, module, index)) foundModule = exports;
        if (!foundModule) continue;
        if (first) return foundModule;
        rm.push(foundModule);
      }
    }

    return first || rm.length == 0 ? undefined : rm;
  }
  /**
   * Finds multiple modules using multiple filters.
   * 
   * @param {...object} queries Whether to return only the first matching module
   * @param {Function} queries.filter A function to use to filter modules
   * @param {Boolean} [queries.first=true] Whether to return only the first matching module
   * @param {Boolean} [queries.defaultExport=true] Whether to return default export when matching the default export
   * @param {Boolean} [queries.searchExports=false] Whether to execute the filter on webpack export getters.
   * @return {Any}
   */


  static getBulk(...queries) {
    const modules = this.getAllModules();
    const returnedModules = Array(queries.length);
    const indices = Object.keys(modules);

    for (let i = 0; i < indices.length; i++) {
      const index = indices[i];
      if (!modules.hasOwnProperty(index)) continue;
      const module = modules[index];
      const {
        exports
      } = module;
      if (!exports || exports === window || exports === document.documentElement) continue;

      for (let q = 0; q < queries.length; q++) {
        const query = queries[q];
        const {
          filter,
          first = true,
          defaultExport = true,
          searchExports = false
        } = query;
        if (first && returnedModules[q]) continue; // If they only want the first, and we already found it, move on

        if (!first && !returnedModules[q]) returnedModules[q] = []; // If they want multiple and we haven't setup the subarry, do it now

        const wrappedFilter = wrapFilter(filter);

        if (typeof exports === "object" && searchExports) {
          for (const key in exports) {
            let foundModule = null;
            const wrappedExport = exports[key];
            if (!wrappedExport) continue;
            if (wrappedFilter(wrappedExport, module, index)) foundModule = wrappedExport;
            if (!foundModule) continue;
            if (first) returnedModules[q] = foundModule;else returnedModules[q].push(foundModule);
          }
        } else {
          let foundModule = null;
          if (exports.Z && wrappedFilter(exports.Z, module, index)) foundModule = defaultExport ? exports.Z : exports;
          if (exports.ZP && wrappedFilter(exports.ZP, module, index)) foundModule = defaultExport ? exports.ZP : exports;
          if (exports.__esModule && exports.default && wrappedFilter(exports.default, module, index)) foundModule = defaultExport ? exports.default : exports;
          if (wrappedFilter(exports, module, index)) foundModule = exports;
          if (!foundModule) continue;
          if (first) returnedModules[q] = foundModule;else returnedModules[q].push(foundModule);
        }
      }
    }

    return returnedModules;
  }
  /**
   * Finds all modules matching a filter function.
   * @param {Function} filter A function to use to filter modules
   */


  static getModules(filter) {
    return this.getModule(filter, {
      first: false
    });
  }
  /**
   * Finds a module by its display name.
   * @param {String} name The display name of the module
   * @return {Any}
   */


  static getByDisplayName(name) {
    return this.getModule(Filters.byDisplayName(name));
  }
  /**
   * Finds a module using its code.
   * @param {RegEx} regex A regular expression to use to filter modules
   * @param {Boolean} first Whether to return the only the first matching module
   * @return {Any}
   */


  static getByRegex(regex, first = true) {
    return this.getModule(Filters.byRegex(regex), {
      first
    });
  }
  /**
   * Finds a single module using properties on its prototype.
   * @param {...string} prototypes Properties to use to filter modules
   * @return {Any}
   */


  static getByPrototypes(...prototypes) {
    return this.getModule(Filters.byPrototypeFields(prototypes));
  }
  /**
   * Finds all modules with a set of properties of its prototype.
   * @param {...string} prototypes Properties to use to filter modules
   * @return {Any}
   */


  static getAllByPrototypes(...prototypes) {
    return this.getModule(Filters.byPrototypeFields(prototypes), {
      first: false
    });
  }
  /**
   * Finds a single module using its own properties.
   * @param {...string} props Properties to use to filter modules
   * @return {Any}
   */


  static getByProps(...props) {
    return this.getModule(Filters.byProps(props));
  }
  /**
   * Finds all modules with a set of properties.
   * @param {...string} props Properties to use to filter modules
   * @return {Any}
   */


  static getAllByProps(...props) {
    return this.getModule(Filters.byProps(props), {
      first: false
    });
  }
  /**
   * Finds a single module using a set of strings.
   * @param {...String} props Strings to use to filter modules
   * @return {Any}
   */


  static getByString(...strings) {
    return this.getModule(Filters.byStrings(...strings));
  }
  /**
   * Finds all modules with a set of strings.
   * @param {...String} strings Strings to use to filter modules
   * @return {Any}
   */


  static getAllByString(...strings) {
    return this.getModule(Filters.byStrings(...strings), {
      first: false
    });
  }
  /**
   * Finds a module that lazily loaded.
   * @param {(m) => boolean} filter A function to use to filter modules.
   * @param {object} [options] Set of options to customize the search
   * @param {AbortSignal} [options.signal] AbortSignal of an AbortController to cancel the promise
   * @param {Boolean} [options.defaultExport=true] Whether to return default export when matching the default export
   * @param {Boolean} [options.searchExports=false] Whether to execute the filter on webpack export getters.
   * @returns {Promise<any>}
   */


  static getLazy(filter, options = {}) {
    const {
      signal: abortSignal,
      defaultExport = true,
      searchExports = false
    } = options;
    const fromCache = this.getModule(filter, {
      defaultExport,
      searchExports
    });
    if (fromCache) return Promise.resolve(fromCache);
    const wrappedFilter = wrapFilter(filter);
    return new Promise(resolve => {
      const cancel = () => this.removeListener(listener);

      const listener = function (exports) {
        if (!exports || exports === window || exports === document.documentElement) return;
        let foundModule = null;

        if (typeof exports === "object" && searchExports) {
          for (const key in exports) {
            foundModule = null;
            const wrappedExport = exports[key];
            if (!wrappedExport) continue;
            if (wrappedFilter(wrappedExport)) foundModule = wrappedExport;
          }
        } else {
          if (exports.Z && wrappedFilter(exports.Z)) foundModule = defaultExport ? exports.Z : exports;
          if (exports.ZP && wrappedFilter(exports.ZP)) foundModule = defaultExport ? exports.ZP : exports;
          if (exports.__esModule && exports.default && wrappedFilter(exports.default)) foundModule = defaultExport ? exports.default : exports;
          if (wrappedFilter(exports)) foundModule = exports;
        }

        if (!foundModule) return;
        cancel();
        resolve(foundModule);
      };

      this.addListener(listener);
      abortSignal === null || abortSignal === void 0 ? void 0 : abortSignal.addEventListener("abort", () => {
        cancel();
        resolve();
      });
    });
  }
  /**
   * Discord's __webpack_require__ function.
   */


  static get require() {
    if (this._require) return this._require;
    const id = "bd-webpackmodules";

    let __discord_webpack_require__;

    if (typeof webpackJsonp !== "undefined") {
      __discord_webpack_require__ = window.webpackJsonp.push([[], {
        [id]: (module, exports, __internal_require__) => module.exports = __internal_require__
      }, [[id]]]);
    } else if (typeof window[this.chunkName] !== "undefined") {
      window[this.chunkName].push([[id], {}, __internal_require__ => __discord_webpack_require__ = __internal_require__]);
    }

    delete __discord_webpack_require__.m[id];
    delete __discord_webpack_require__.c[id];
    return this._require = __discord_webpack_require__;
  }
  /**
   * Returns all loaded modules.
   * @return {Array}
   */


  static getAllModules() {
    return this.require.c;
  } // Webpack Chunk Observing


  static get chunkName() {
    return "webpackChunkdiscord_app";
  }

  static initialize() {
    this.handlePush = this.handlePush.bind(this);
    this.listeners = new Set();
    this.__ORIGINAL_PUSH__ = window[this.chunkName].push;
    Object.defineProperty(window[this.chunkName], "push", {
      configurable: true,
      get: () => this.handlePush,
      set: newPush => {
        this.__ORIGINAL_PUSH__ = newPush;
        Object.defineProperty(window[this.chunkName], "push", {
          value: this.handlePush,
          configurable: true,
          writable: true
        });
      }
    });
  }
  /**
   * Adds a listener for when discord loaded a chunk. Useful for subscribing to lazy loaded modules.
   * @param {Function} listener - Function to subscribe for chunks
   * @returns {Function} A cancelling function
   */


  static addListener(listener) {
    this.listeners.add(listener);
    return this.removeListener.bind(this, listener);
  }
  /**
   * Removes a listener for when discord loaded a chunk.
   * @param {Function} listener
   * @returns {boolean}
   */


  static removeListener(listener) {
    return this.listeners.delete(listener);
  }

  static handlePush(chunk) {
    const [, modules] = chunk;

    for (const moduleId in modules) {
      const originalModule = modules[moduleId];

      modules[moduleId] = (module, exports, require) => {
        try {
          Reflect.apply(originalModule, null, [module, exports, require]);
          const listeners = [...this.listeners];

          for (let i = 0; i < listeners.length; i++) {
            try {
              listeners[i](exports);
            } catch (error) {
              _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("WebpackModules", "Could not fire callback listener:", error);
            }
          }
        } catch (error) {
          _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("WebpackModules", "Could not patch pushed module", error);
        }
      };

      Object.assign(modules[moduleId], originalModule, {
        toString: () => originalModule.toString()
      });
    }

    return Reflect.apply(this.__ORIGINAL_PUSH__, window[this.chunkName], [chunk]);
  }

}
WebpackModules.initialize();

/***/ }),

/***/ "./src/polyfill/buffer.js":
/*!********************************!*\
  !*** ./src/polyfill/buffer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Buffer)
/* harmony export */ });
/* harmony import */ var _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/webpackmodules */ "./src/modules/webpackmodules.js");

Object.defineProperty(window, "Buffer", {
  get() {
    return Buffer.getBuffer().Buffer;
  },

  configurable: true,
  enumerable: false
});
class Buffer {
  static getBuffer() {
    if (this.cached) return this.cached;
    this.cached = _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_0__["default"].getByProps("INSPECT_MAX_BYTES");
    return this.cached;
  }

}

/***/ }),

/***/ "./src/polyfill/crypto.js":
/*!********************************!*\
  !*** ./src/polyfill/crypto.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remote */ "./src/polyfill/remote.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ ..._remote__WEBPACK_IMPORTED_MODULE_0__["default"].crypto,

  // Wrap it in Buffer
  randomBytes(length) {
    return Buffer.from(_remote__WEBPACK_IMPORTED_MODULE_0__["default"].crypto.randomBytes(length));
  }

});

/***/ }),

/***/ "./src/polyfill/fs.js":
/*!****************************!*\
  !*** ./src/polyfill/fs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createWriteStream": () => (/* binding */ createWriteStream),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "exists": () => (/* binding */ exists),
/* harmony export */   "existsSync": () => (/* binding */ existsSync),
/* harmony export */   "lstat": () => (/* binding */ lstat),
/* harmony export */   "lstatSync": () => (/* binding */ lstatSync),
/* harmony export */   "mkdir": () => (/* binding */ mkdir),
/* harmony export */   "mkdirSync": () => (/* binding */ mkdirSync),
/* harmony export */   "readFile": () => (/* binding */ readFile),
/* harmony export */   "readFileSync": () => (/* binding */ readFileSync),
/* harmony export */   "readdir": () => (/* binding */ readdir),
/* harmony export */   "readdirSync": () => (/* binding */ readdirSync),
/* harmony export */   "realpath": () => (/* binding */ realpath),
/* harmony export */   "realpathSync": () => (/* binding */ realpathSync),
/* harmony export */   "rename": () => (/* binding */ rename),
/* harmony export */   "renameSync": () => (/* binding */ renameSync),
/* harmony export */   "rm": () => (/* binding */ rm),
/* harmony export */   "rmSync": () => (/* binding */ rmSync),
/* harmony export */   "rmdir": () => (/* binding */ rmdir),
/* harmony export */   "rmdirSync": () => (/* binding */ rmdirSync),
/* harmony export */   "stat": () => (/* binding */ stat),
/* harmony export */   "statSync": () => (/* binding */ statSync),
/* harmony export */   "unlink": () => (/* binding */ unlink),
/* harmony export */   "unlinkSync": () => (/* binding */ unlinkSync),
/* harmony export */   "watch": () => (/* binding */ watch),
/* harmony export */   "writeFile": () => (/* binding */ writeFile),
/* harmony export */   "writeFileSync": () => (/* binding */ writeFileSync)
/* harmony export */ });
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remote */ "./src/polyfill/remote.js");

const readFileSync = function (path, options = "utf8") {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.readFile(path, options);
};
const readFile = function (path, options = "utf8", callback) {
  try {
    const contents = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.readFile(path, options);
    callback(null, contents);
  } catch (error) {
    callback(error, null);
  }
};
const writeFile = function (path, data, options = "utf8", callback) {
  if (typeof options === "function") {
    callback = options;
    if (!["object", "string"].includes(typeof options)) options = undefined;
  }

  try {
    _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.writeFile(path, data, options);
    callback(null);
  } catch (error) {
    callback(error);
  }
};
const writeFileSync = function (path, data, options) {
  _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.writeFile(path, data, options);
};
const readdir = function (path, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.readDirectory(path, options);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};
const readdirSync = function (path, options) {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.readDirectory(path, options);
};
const mkdir = function (path, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.createDirectory(path, options);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};
const mkdirSync = function (path, options) {
  _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.createDirectory(path, options);
};
const rmdir = function (path, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.deleteDirectory(path, options);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};
const rmdirSync = function (path, options) {
  _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.deleteDirectory(path, options);
};
const rm = function (path, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.rm(path, options);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};
const rmSync = function (path, options) {
  _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.rmSync(path, options);
};
const exists = function (path, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.exists(path, options);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};
const existsSync = function (path, options) {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.exists(path, options);
};
const stat = function (path, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.getStats(path, options);
    callback(null, result);
  } catch (error) {
    callback(error);
  }
};
const statSync = function (path, options) {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.getStats(path, options);
};
const lstat = stat;
const lstatSync = statSync;
const rename = function (oldPath, newPath, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.rename(oldPath, newPath, options);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};
const renameSync = function (oldPath, newPath, options) {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.renameSync(oldPath, newPath, options);
};
const realpath = function (path, options, callback) {
  try {
    const result = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.getStats(path, options);
    callback(null, result);
  } catch (error) {
    callback(error, null);
  }
};
const realpathSync = function (path, options) {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.getRealPath(path, options);
};
const watch = (path, options, callback) => {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.watch(path, options, callback);
};
const createWriteStream = (path, options) => {
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.createWriteStream(path, options);
};
const unlinkSync = path => _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.unlinkSync(path);
const unlink = path => _remote__WEBPACK_IMPORTED_MODULE_0__["default"].filesystem.unlinkSync(path);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  readFile,
  exists,
  existsSync,
  lstat,
  lstatSync,
  mkdir,
  mkdirSync,
  readFileSync,
  readdir,
  readdirSync,
  realpath,
  realpathSync,
  rename,
  renameSync,
  rm,
  rmSync,
  rmdir,
  rmdirSync,
  unlink,
  unlinkSync,
  watch,
  writeFile,
  writeFileSync,
  createWriteStream
});

/***/ }),

/***/ "./src/polyfill/https.js":
/*!*******************************!*\
  !*** ./src/polyfill/https.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "get": () => (/* binding */ get)
/* harmony export */ });
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/events */ "../common/events.js");
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./remote */ "./src/polyfill/remote.js");


function get(url, options = {}, callback) {
  if (typeof options === "function") {
    callback = options;
    options = null;
  }

  const emitter = new _common_events__WEBPACK_IMPORTED_MODULE_0__["default"]();
  callback(emitter);
  _remote__WEBPACK_IMPORTED_MODULE_1__["default"].https.get(url, options, (error, res, body) => {
    if (error) return emitter.emit("error", error);
    emitter.emit("data", body);
    emitter.emit("end", res);
  });
  return emitter;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get
});

/***/ }),

/***/ "./src/polyfill/index.js":
/*!*******************************!*\
  !*** ./src/polyfill/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createRequire": () => (/* binding */ createRequire),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "./src/polyfill/module.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm */ "./src/polyfill/vm.js");
/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fs */ "./src/polyfill/fs.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./request */ "./src/polyfill/request.js");
/* harmony import */ var _common_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/events */ "../common/events.js");
/* harmony import */ var _https__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./https */ "./src/polyfill/https.js");
/* harmony import */ var _buffer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buffer */ "./src/polyfill/buffer.js");
/* harmony import */ var _crypto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./crypto */ "./src/polyfill/crypto.js");
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./remote */ "./src/polyfill/remote.js");









const originalFs = Object.assign({}, _fs__WEBPACK_IMPORTED_MODULE_2__);

originalFs.writeFileSync = (path, data, options) => _fs__WEBPACK_IMPORTED_MODULE_2__.writeFileSync(path, data, Object.assign({}, options, {
  originalFs: true
}));

originalFs.writeFile = (path, data, options) => _fs__WEBPACK_IMPORTED_MODULE_2__.writeFile(path, data, Object.assign({}, options, {
  originalFs: true
}));

const createRequire = function (path) {
  return mod => {
    switch (mod) {
      case "request":
        return _request__WEBPACK_IMPORTED_MODULE_3__["default"];

      case "https":
        return _https__WEBPACK_IMPORTED_MODULE_5__;

      case "original-fs":
        return originalFs;

      case "fs":
        return _fs__WEBPACK_IMPORTED_MODULE_2__;

      case "path":
        return _remote__WEBPACK_IMPORTED_MODULE_8__["default"].path;

      case "events":
        return _common_events__WEBPACK_IMPORTED_MODULE_4__["default"];

      case "electron":
        return _remote__WEBPACK_IMPORTED_MODULE_8__["default"].electron;

      case "process":
        return window.process;

      case "vm":
        return _vm__WEBPACK_IMPORTED_MODULE_1__;

      case "module":
        return _module__WEBPACK_IMPORTED_MODULE_0__["default"];

      case "buffer":
        return _buffer__WEBPACK_IMPORTED_MODULE_6__["default"].getBuffer();

      case "crypto":
        return _crypto__WEBPACK_IMPORTED_MODULE_7__["default"];

      default:
        return _module__WEBPACK_IMPORTED_MODULE_0__["default"]._load(mod, path, createRequire);
    }
  };
};

const require = window.require = createRequire(".");

require.cache = {};

require.resolve = path => {
  for (const key of Object.keys(require.cache)) {
    if (key.startsWith(path)) return require.cache[key];
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (require);

/***/ }),

/***/ "./src/polyfill/module.js":
/*!********************************!*\
  !*** ./src/polyfill/module.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequireExtensions": () => (/* binding */ RequireExtensions),
/* harmony export */   "default": () => (/* binding */ Module)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _vm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vm */ "./src/polyfill/vm.js");
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./remote */ "./src/polyfill/remote.js");
/* harmony import */ var _fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fs */ "./src/polyfill/fs.js");




const path = _remote__WEBPACK_IMPORTED_MODULE_2__["default"].path;
const RequireExtensions = {
  ".js": (module, filename) => {
    const fileContent = _remote__WEBPACK_IMPORTED_MODULE_2__["default"].filesystem.readFile(filename, "utf8");
    module.fileContent = fileContent;

    module._compile(fileContent);

    return module.exports;
  },
  ".json": (module, filename) => {
    const fileContent = _remote__WEBPACK_IMPORTED_MODULE_2__["default"].filesystem.readFile(filename, "utf8");
    module.fileContent = fileContent;
    module.exports = JSON.parse(fileContent);
    return module.exports;
  }
};
class Module {
  static resolveMainFile(mod, basePath) {
    const parent = path.extname(basePath) ? path.dirname(basePath) : basePath;
    const files = _remote__WEBPACK_IMPORTED_MODULE_2__["default"].filesystem.readDirectory(parent);
    if (!Array.isArray(files)) return null;

    for (const file of files) {
      const ext = path.extname(file);

      if (file === "package.json") {
        const pkg = require(path.resolve(parent, file));

        if (!Reflect.has(pkg, "main")) continue;
        return path.resolve(parent, pkg.main);
      }

      if (path.slice(0, -ext.length) == "index" && RequireExtensions[ext]) return mod;
    }
  }

  static getExtension(mod) {
    return path.extname(mod) || Reflect.ownKeys(RequireExtensions).find(e => _remote__WEBPACK_IMPORTED_MODULE_2__["default"].filesystem.exists(mod + e));
  }

  static getFilePath(basePath, mod) {
    if (!path.isAbsolute(mod)) mod = path.resolve(basePath, mod);
    const defaultExtension = path.extname(mod);

    if (!defaultExtension) {
      const ext = Reflect.ownKeys(RequireExtensions).find(e => _remote__WEBPACK_IMPORTED_MODULE_2__["default"].filesystem.exists(mod + e));

      if (ext) {
        mod = mod + ext;
      }
    }

    return _fs__WEBPACK_IMPORTED_MODULE_3__["default"].realpathSync(mod);
  }

  static _load(mod, basePath, createRequire) {
    const originalReq = mod;
    if (!path.isAbsolute(mod)) mod = path.resolve(basePath, mod);
    const filePath = this.getFilePath(basePath, mod);
    if (!_remote__WEBPACK_IMPORTED_MODULE_2__["default"].filesystem.exists(filePath)) throw new Error(`Cannot find module ${mod}`);
    if (window.require.cache[filePath]) return window.require.cache[filePath].exports;
    const stats = _remote__WEBPACK_IMPORTED_MODULE_2__["default"].filesystem.getStats(filePath);
    if (stats.isDirectory()) mod = this.resolveMainFile(mod, basePath);
    const ext = this.getExtension(filePath);
    const loader = RequireExtensions[ext];
    if (!loader) throw new Error(`Cannot find module ${originalReq}`);
    const module = window.require.cache[mod] = new Module(filePath, internalModule, createRequire(mod));
    loader(module, filePath);
    return module.exports;
  }

  static get Module() {
    return Module;
  }

  static get createRequire() {
    return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("ContextModule", "Module.createRequire not implemented yet.");
  }

  static get _extensions() {
    return RequireExtensions;
  }

  constructor(id, parent, require) {
    this.id = id;
    this.path = _remote__WEBPACK_IMPORTED_MODULE_2__["default"].path.dirname(id);
    this.exports = {};
    this.parent = parent;
    this.filename = id;
    this.loaded = false;
    this.children = [];
    this.require = require;
    if (parent) parent.children.push(this);
  }

  _compile(code) {
    const wrapped = (0,_vm__WEBPACK_IMPORTED_MODULE_1__.compileFunction)(code, ["require", "module", "exports", "__filename", "__dirname", "global"], this.filename);
    wrapped(this.require, this, this.exports, this.filename, this.path, window);
  }

}
const internalModule = new Module(".", null);

/***/ }),

/***/ "./src/polyfill/remote.js":
/*!********************************!*\
  !*** ./src/polyfill/remote.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @type {import("../../../preload/src/api/index")} */
const RemoteAPI = window.BetterDiscordPreload(); // eslint-disable-line new-cap

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RemoteAPI);

/***/ }),

/***/ "./src/polyfill/request.js":
/*!*********************************!*\
  !*** ./src/polyfill/request.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remote */ "./src/polyfill/remote.js");

const methods = ["get", "put", "post", "delete", "head"];
const aliases = {
  del: "delete"
};

function parseArguments() {
  let url, options, callback;

  for (const arg of arguments) {
    switch (typeof arg) {
      case arg !== null && "object":
        options = arg;

        if ("url" in options) {
          url = options.url;
        }

        break;

      case !url && "string":
        url = arg;
        break;

      case !callback && "function":
        callback = arg;
        break;
    }
  }

  return {
    url,
    options,
    callback
  };
}

function validOptions(url, callback) {
  return typeof url === "string" && typeof callback === "function";
}

function fixBuffer(options, callback) {
  return (error, res, body) => {
    if ("Content-Type" in Object(options.headers) && options.headers["Content-Type"] !== "text/plain") {
      body = Buffer.from(body);
    } else {
      body = Buffer.from(body).toString();
    }

    callback(error, res, body);
  };
}

function request() {
  const {
    url,
    options = {},
    callback
  } = parseArguments.apply(this, arguments);
  if (!validOptions(url, callback)) return null;

  if ("method" in options && methods.indexOf(options.method.toLowerCase()) >= 0) {
    return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].https[options.method](url, options, fixBuffer(options, callback));
  }

  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].https.request(url, options, fixBuffer(options, callback));
}
Object.assign(request, Object.fromEntries(methods.concat(Object.keys(aliases)).map(method => [method, function () {
  const {
    url,
    options = {},
    callback
  } = parseArguments.apply(this, arguments);
  if (!validOptions(url, callback)) return null;
  return _remote__WEBPACK_IMPORTED_MODULE_0__["default"].https[aliases[method] || method](url, options, fixBuffer(options, callback));
}])));

/***/ }),

/***/ "./src/polyfill/vm.js":
/*!****************************!*\
  !*** ./src/polyfill/vm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compileFunction": () => (/* binding */ compileFunction)
/* harmony export */ });
/* harmony import */ var _remote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remote */ "./src/polyfill/remote.js");

const compileFunction = function (code, params = [], options = {}) {
  const returned = _remote__WEBPACK_IMPORTED_MODULE_0__["default"].vm.compileFunction(code, params, options);
  if (typeof returned === "function") return returned;
  const syntaxError = new SyntaxError(returned.message);
  syntaxError.stack = returned.stack;
  throw syntaxError;
};

/***/ }),

/***/ "./src/secure.js":
/*!***********************!*\
  !*** ./src/secure.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  const contentWindowGetter = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, "contentWindow").get;
  Object.defineProperty(HTMLIFrameElement.prototype, "contentWindow", {
    get: function () {
      const contentWindow = Reflect.apply(contentWindowGetter, this, arguments);
      return new Proxy(contentWindow, {
        getOwnPropertyDescriptor: function (obj, prop) {
          if (prop === "localStorage") return undefined;
          return Object.getOwnPropertyDescriptor(obj, prop);
        },
        get: function (obj, prop) {
          if (prop === "localStorage") return null;
          const val = obj[prop];
          if (typeof val === "function") return val.bind(obj);
          return val;
        }
      });
    }
  }); // Prevent interception by patching Reflect.apply and Function.prototype.bind

  Object.defineProperty(Reflect, "apply", {
    value: Reflect.apply,
    writable: false,
    configurable: false
  });
  Object.defineProperty(Function.prototype, "bind", {
    value: Function.prototype.bind,
    writable: false,
    configurable: false
  });
  const oOpen = XMLHttpRequest.prototype.open;

  XMLHttpRequest.prototype.open = function () {
    const url = arguments[1];
    if (url.toLowerCase().includes("api/webhooks")) return null;
    return Reflect.apply(oOpen, this, arguments);
  };
}

/***/ }),

/***/ "./src/structs/addonerror.js":
/*!***********************************!*\
  !*** ./src/structs/addonerror.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonError)
/* harmony export */ });
class AddonError extends Error {
  constructor(name, filename, message, error, type) {
    super(message);
    this.name = name;
    this.file = filename;
    this.error = error;
    this.type = type;
  }

}

/***/ }),

/***/ "./src/structs/builtin.js":
/*!********************************!*\
  !*** ./src/structs/builtin.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BuiltinModule)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_emitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/emitter */ "./src/modules/emitter.js");
/* harmony import */ var _modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/settingsmanager */ "./src/modules/settingsmanager.js");
/* harmony import */ var _modules_patcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/patcher */ "./src/modules/patcher.js");




class BuiltinModule {
  get name() {
    return "Unnamed Builtin";
  }

  get collection() {
    return "settings";
  }

  get category() {
    return "general";
  }

  get id() {
    return "None";
  }

  async initialize() {
    if (_modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.collection, this.category, this.id)) await this.enable();
    _modules_emitter__WEBPACK_IMPORTED_MODULE_1__["default"].on("setting-updated", (collection, category, id, enabled) => {
      if (collection != this.collection || category !== this.category || id !== this.id) return;
      if (enabled) this.enable();else this.disable();
    });
    this.initialized = true;
  }

  registerSetting(collection, category, id, onEnable, onDisable) {
    if (arguments.length == 4) {
      collection = this.collection;
      category = arguments[0];
      id = arguments[1];
      onEnable = arguments[2];
      onDisable = arguments[3];
    } else if (arguments.length == 3) {
      collection = this.collection;
      category = this.category;
      id = arguments[0];
      onEnable = arguments[1];
      onDisable = arguments[2];
    }

    return _modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].on(collection, category, id, value => {
      if (value) onEnable();else onDisable();
    });
  }

  get(collection, category, id) {
    if (arguments.length == 2) {
      collection = this.collection;
      category = arguments[0];
      id = arguments[1];
    } else if (arguments.length == 1) {
      collection = this.collection;
      category = this.category;
      id = arguments[0];
    }

    return _modules_settingsmanager__WEBPACK_IMPORTED_MODULE_2__["default"].get(collection, category, id);
  }

  async enable() {
    this.log("Enabled");

    try {
      await this.enabled();
    } catch (e) {
      this.stacktrace("Could not be enabled", e);
    }
  }

  async disable() {
    this.log("Disabled");

    try {
      await this.disabled();
    } catch (e) {
      this.stacktrace("Could not be disabled", e);
    }
  }

  async enabled() {}

  async disabled() {}

  log(...message) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].log(this.name, ...message);
  }

  warn(...message) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn(this.name, ...message);
  }

  error(...message) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err(this.name, ...message);
  }

  stacktrace(message, error) {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace(this.name, message, error);
  }

  before(object, func, callback) {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].before(this.name, object, func, callback);
  }

  instead(object, func, callback) {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].instead(this.name, object, func, callback);
  }

  after(object, func, callback) {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].after(this.name, object, func, callback);
  }

  unpatchAll() {
    return _modules_patcher__WEBPACK_IMPORTED_MODULE_3__["default"].unpatchAll(this.name);
  }

}

/***/ }),

/***/ "./src/structs/classname.js":
/*!**********************************!*\
  !*** ./src/structs/classname.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import Selector from "./selector";

/** 
 * Representation of a Class Name
 **/
class ClassName {
  /**
   * 
   * @param {string} name - name of the class to represent
   */
  constructor(name) {
    this.value = name;
  }
  /**
   * Concatenates new class names to the current one using spaces.
   * @param {string} classNames - list of class names to add to this class name
   * @returns {ClassName} returns self to allow chaining
   */


  add(...classNames) {
    for (let i = 0; i < classNames.length; i++) this.value += " " + classNames[i];

    return this;
  }
  /**
   * Returns the raw class name, this is how native function get the value.
   * @returns {string} raw class name.
   */


  toString() {
    return this.value;
  }
  /**
   * Returns the raw class name, this is how native function get the value.
   * @returns {string} raw class name.
   */


  valueOf() {
    return this.value;
  }

  get single() {
    return this.value.split(" ")[0];
  }

  get first() {
    return this.value.split(" ")[0];
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClassName);

/***/ }),

/***/ "./src/structs/markdown.js":
/*!*********************************!*\
  !*** ./src/structs/markdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleMarkdownExt)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

class SimpleMarkdownExt {
  static parseToReact(str) {
    if (!this._parser) this._initialize();
    return this._renderer(this._parse(str, {
      inline: true
    }));
  }

  static _initialize() {
    const SMD = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.SimpleMarkdown;
    const originalLink = SMD.defaultRules.link.react;
    const newRules = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Utilities.extend({}, SMD.defaultRules, {
      link: {
        react: function () {
          const original = Reflect.apply(originalLink, undefined, arguments);
          original.props.className = "bd-link";
          original.props.target = "_blank";
          original.props.rel = "noopener noreferrer";
          return original;
        }
      }
    });
    this._parse = SMD.parserFor(newRules);
    this._renderer = SMD.reactFor(SMD.ruleOutput(newRules, "react"));
  }

}

/***/ }),

/***/ "./src/structs/psconnection.js":
/*!*************************************!*\
  !*** ./src/structs/psconnection.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");


const SortedGuildStore = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getSortedGuilds");
const AvatarDefaults = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("DEFAULT_AVATARS");
const InviteActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("acceptInvite"); // const BrowserWindow = require("electron").remote.BrowserWindow;

const betterDiscordServer = {
  name: "BetterDiscord",
  members: 110000,
  categories: ["community", "programming", "support"],
  description: "Official BetterDiscord server for plugins, themes, support, etc",
  identifier: "86004744966914048",
  iconUrl: "https://cdn.discordapp.com/icons/86004744966914048/babd1af3fa6011a50e418a80f4970ceb.webp",
  nativejoin: true,
  invite_code: "BJD2yvJ",
  pinned: true,
  insertDate: 1517806800
};
const ITEMS_PER_PAGE = 50;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class PublicServersConnection {
  constructor() {
    this.cache = new Map();
    this.cache.set("featured", [betterDiscordServer]);
    this.cache.set("popular", []);
    this.cache.set("keywords", []);
    this.cache.set("accessToken", "");
  }

  get endPoint() {
    return "https://search.discordservers.com";
  }

  get joinEndPoint() {
    return "https://j.discordservers.com";
  }

  get connectEndPoint() {
    return "https://auth.discordservers.com/info";
  }

  get authorizeEndPoint() {
    return `https://auth.discordservers.com/connect?scopes=guilds.join&previousUrl=${this.connectEndPoint}`;
  }

  getDefaultAvatar() {
    return AvatarDefaults.DEFAULT_AVATARS[Math.floor(Math.random() * 5)];
  }

  hasJoined(id) {
    return SortedGuildStore.getFlattenedGuildIds().includes(id);
  }

  async search({
    term = "",
    keyword = "",
    page = 1
  } = {}) {
    if (this.cache.has(term + keyword + page)) return this.cache.get(term + keyword + page);
    const from = (page - 1) * ITEMS_PER_PAGE;
    const queries = [];
    if (keyword) queries.push(`keyword=${keyword.replace(/ /g, "%20").toLowerCase()}`);
    if (term) queries.push(`term=${term.replace(/ /g, "%20")}`);
    if (from) queries.push(`from=${from}`);
    const query = `?${queries.join("&")}`;

    try {
      const response = await fetch(`${this.endPoint}${query}`, {
        method: "GET"
      });
      const data = await response.json();
      const results = {
        servers: data.results,
        size: data.size,
        total: data.total,
        page: Math.ceil(from / ITEMS_PER_PAGE) + 1,
        numPages: Math.ceil(data.total / ITEMS_PER_PAGE)
      };
      this.cache.set(term + keyword + page, results);
      return results;
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("PublicServers", "Could not reach search endpoint.", error);
    }
  }

  async getDashboard() {
    const cachedKeywords = this.cache.get("keywords");
    if (cachedKeywords && cachedKeywords.length) return {
      featured: this.cache.get("featured"),
      popular: this.cache.get("popular"),
      keywords: cachedKeywords
    };

    try {
      const response = await fetch(`${this.endPoint}/dashboard`, {
        method: "GET"
      });
      const data = await response.json();
      const featuredFirst = data.results[0].key === "featured";
      const featuredServers = data.results[featuredFirst ? 0 : 1].response.hits;
      const popularServers = data.results[featuredFirst ? 1 : 0].response.hits;
      const mainKeywords = data.mainKeywords.map(k => k.charAt(0).toUpperCase() + k.slice(1)).sort();
      featuredServers.unshift(betterDiscordServer);
      this.cache.set("featured", featuredServers);
      this.cache.set("popular", popularServers);
      this.cache.set("keywords", mainKeywords);
      return {
        featured: this.cache.get("featured"),
        popular: this.cache.get("popular"),
        keywords: this.cache.get("keywords")
      };
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("PublicServers", "Could not download dashboard.", error);
      return {
        featured: this.cache.get("featured"),
        popular: this.cache.get("popular"),
        keywords: this.cache.get("keywords")
      };
    }
  }

  async join(id, native = false) {
    if (native) return InviteActions.acceptInvite({
      inviteKey: id
    });

    try {
      await fetch(`${this.joinEndPoint}/${id}`, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      return true;
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("PublicServers", "Could not join server.");
      return false;
    }
  }

  async checkConnection() {
    try {
      const response = await fetch(this.connectEndPoint, {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      this._accessToken = data.access_token;
      return data;
    } catch (error) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("PublicServers", "Could not verify connection.");
      return false;
    }
  }

  async connect() {
    await _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.IPC.openWindow(this.authorizeEndPoint, {
      windowOptions: this.windowOptions,
      closeOnUrl: this.connectEndPoint
    });
  }

  get windowOptions() {
    return {
      width: 520,
      height: 580,
      backgroundColor: "#282b30",
      show: true,
      resizable: true,
      maximizable: false,
      minimizable: false,
      alwaysOnTop: true,
      frame: false,
      center: true,
      webPreferences: {
        nodeIntegration: false
      }
    };
  }

}());

/***/ }),

/***/ "./src/structs/screen.js":
/*!*******************************!*\
  !*** ./src/structs/screen.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Screen)
/* harmony export */ });
class Screen {
  /** Document/window width */
  static get width() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }
  /** Document/window height */


  static get height() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

}

/***/ }),

/***/ "./src/structs/string.js":
/*!*******************************!*\
  !*** ./src/structs/string.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormattableString)
/* harmony export */ });
/* harmony import */ var _modules_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/utilities */ "./src/modules/utilities.js");

const LINK = /\[(.+?)]/;
class FormattableString extends String {
  format(values) {
    return _modules_utilities__WEBPACK_IMPORTED_MODULE_0__["default"].formatString(this, values);
  }

  replaceLink(callback) {
    const match = this.match(LINK);
    if (!match) return [this];
    const array = this.split(match[0]);
    const element = callback(match[1]);
    array.splice(1, 0, element);
    return array;
  }

}

/***/ }),

/***/ "./src/ui/addonerrormodal.jsx":
/*!************************************!*\
  !*** ./src/ui/addonerrormodal.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonErrorModal)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/extension */ "./src/ui/icons/extension.jsx");
/* harmony import */ var _icons_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/theme */ "./src/ui/icons/theme.jsx");
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divider */ "./src/ui/divider.jsx");




const Parser = Object(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("defaultRules", "parse")).defaultRules;

const joinClassNames = (...classNames) => classNames.filter(e => e).join(" ");

class AddonError extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggle() {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  renderErrorBody(err) {
    var _err$error;

    const stack = (err === null || err === void 0 ? void 0 : (_err$error = err.error) === null || _err$error === void 0 ? void 0 : _err$error.stack) ?? err.stack;
    if (!this.state.expanded || !stack) return null;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-body"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_divider__WEBPACK_IMPORTED_MODULE_3__["default"], null), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-stack"
    }, Parser ? Parser.codeBlock.react({
      content: stack,
      lang: "js"
    }, null, {}) : stack));
  }

  render() {
    const err = this.props.err;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      key: `${err.type}-${this.props.index}`,
      className: joinClassNames("bd-addon-error", this.state.expanded ? "expanded" : "collapsed")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-header",
      onClick: () => {
        this.toggle();
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-icon"
    }, err.type == "plugin" ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_extension__WEBPACK_IMPORTED_MODULE_1__["default"], null) : /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_theme__WEBPACK_IMPORTED_MODULE_2__["default"], null)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-error-header-inner"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h3", {
      className: `bd-addon-error-file ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.colorHeaderPrimary} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Integrations.secondaryHeader} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.size16}`
    }, err.name), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-addon-error-details ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Integrations.detailsWrapper}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Integrations.detailsIcon,
      "aria-hidden": "false",
      width: "16",
      height: "16",
      viewBox: "0 0 12 12"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "currentColor",
      d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.colorHeaderSecondary} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.size12}`
    }, err.message))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: "bd-addon-error-expander",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      d: "M7 10L12 15 17 10",
      "aria-hidden": "true"
    }))), this.renderErrorBody(err));
  }

}

class AddonErrorModal extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    const tabs = this.getTabs();
    this.state = {
      selectedTab: tabs[0].id
    };
  }

  mergeErrors(errors1 = [], errors2 = []) {
    const list = [];
    const allErrors = [...errors2, ...errors1];

    for (const error of allErrors) {
      if (list.find(e => e.file === error.file)) continue;
      list.push(error);
    }

    return list;
  }

  refreshTabs(pluginErrors, themeErrors) {
    this._tabs = null;
    this.props.pluginErrors = this.mergeErrors(this.props.pluginErrors, pluginErrors);
    this.props.themeErrors = this.mergeErrors(this.props.themeErrors, themeErrors);
    this.forceUpdate();
  }

  generateTab(id, errors) {
    return {
      id: id,
      name: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Panels[id],
      errors: errors
    };
  }

  getTabs() {
    return this._tabs || (this._tabs = [this.props.pluginErrors.length && this.generateTab("plugins", this.props.pluginErrors), this.props.themeErrors.length && this.generateTab("themes", this.props.themeErrors)].filter(e => e));
  }

  switchToTab(id) {
    this.setState({
      selectedTab: id
    });
  }

  render() {
    const selectedTab = this.getTabs().find(e => this.state.selectedTab === e.id);
    const tabs = this.getTabs();
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Fragment, null, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-error-modal-header ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Modal.header} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Modal.separator}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h4", {
      className: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Titles.defaultColor} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Text.size14} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Titles.h4} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Margins.marginBottom8}`
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.addonErrors), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-tab-bar"
    }, tabs.map(tab => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      onClick: () => {
        this.switchToTab(tab.id);
      },
      className: joinClassNames("bd-tab-item", tab.id === selectedTab.id && "selected")
    }, tab.name)))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-error-modal-content ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Modal.content} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.Scrollers.thin}`
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-addon-errors"
    }, selectedTab.errors.map((error, index) => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(AddonError, {
      index: index,
      err: error
    })))));
  }

}

/***/ }),

/***/ "./src/ui/blankslates/emptyimage.jsx":
/*!*******************************************!*\
  !*** ./src/ui/blankslates/emptyimage.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EmptyImage)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structs/markdown */ "./src/structs/markdown.js");


class EmptyImage extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image-container ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.EmptyImage.emptyContainer}` + (this.props.className ? ` ${this.props.className}` : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.EmptyImage.emptyImage}`
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image-header ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordClasses.EmptyImage.emptyHeader}`
    }, this.props.title || "You don't have anything!"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-empty-image-message`
    }, _structs_markdown__WEBPACK_IMPORTED_MODULE_1__["default"].parseToReact(this.props.message || "You should probably get something.")), this.props.children);
  }

}

/***/ }),

/***/ "./src/ui/blankslates/noresults.jsx":
/*!******************************************!*\
  !*** ./src/ui/blankslates/noresults.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NoResults)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_magnifyingglass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/magnifyingglass */ "./src/ui/icons/magnifyingglass.jsx");


class NoResults extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-empty-results" + (this.props.className ? ` ${this.props.className}` : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_magnifyingglass__WEBPACK_IMPORTED_MODULE_1__["default"], null), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-empty-results-text"
    }, this.props.text || _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.Strings.SEARCH_NO_RESULTS || ""));
  }

}

/***/ }),

/***/ "./src/ui/customcss/checkbox.jsx":
/*!***************************************!*\
  !*** ./src/ui/customcss/checkbox.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkbox)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Checkbox extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      checked: this.props.checked || false
    };
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-item"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-label label-JWQiNe da-label"
    }, this.props.text), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-wrapper checkbox-3kaeSU da-checkbox checkbox-3EVISJ da-checkbox",
      onClick: this.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "checkbox-inner checkboxInner-3yjcPe da-checkboxInner"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      className: "checkbox checkboxElement-1qV33p da-checkboxElement",
      checked: this.state.checked,
      type: "checkbox"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null)));
  }

  onClick() {
    this.props.onChange(!this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
  }

}

/***/ }),

/***/ "./src/ui/customcss/csseditor.jsx":
/*!****************************************!*\
  !*** ./src/ui/customcss/csseditor.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CssEditor)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor */ "./src/ui/customcss/editor.jsx");
/* harmony import */ var _icons_reload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/reload */ "./src/ui/icons/reload.jsx");
/* harmony import */ var _icons_save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/save */ "./src/ui/icons/save.jsx");
/* harmony import */ var _icons_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/edit */ "./src/ui/icons/edit.jsx");
/* harmony import */ var _icons_detach__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/detach */ "./src/ui/icons/detach.jsx");

 // import Checkbox from "./checkbox";





class CssEditor extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.hasUnsavedChanges = false;
    this.onChange = this.onChange.bind(this);
    this.toggleLiveUpdate = this.toggleLiveUpdate.bind(this);
    this.updateCss = this.updateCss.bind(this);
    this.saveCss = this.saveCss.bind(this);
    this.openDetached = this.props.openDetached ? this.openDetached.bind(this) : null;
    this.openNative = this.openNative.bind(this);
    this.updateEditor = this.updateEditor.bind(this);
    this.controls = [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_reload__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.update,
      onClick: this.updateCss
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_save__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.save,
      onClick: this.saveCss
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.openNative,
      onClick: this.openNative
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Collections.settings.customcss.liveUpdate.name,
      type: "checkbox",
      onChange: this.toggleLiveUpdate,
      checked: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "customcss", "liveUpdate"),
      side: "right"
    }];
    if (this.openDetached) this.controls.push({
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_detach__WEBPACK_IMPORTED_MODULE_5__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.openDetached,
      onClick: this.openDetached,
      side: "right"
    });
  }

  componentDidMount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.on("customcss-updated", this.updateEditor);
  }

  componentWillUnmount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.off("customcss-updated", this.updateEditor);
  }

  updateEditor(newCSS) {
    if (!this.editor) return;
    this.editor.value = newCSS;
  }

  get value() {
    return this.editor.session.getValue();
  }

  set value(newValue) {
    this.editor.setValue(newValue);
  }

  showSettings() {
    return this.editor.keyBinding.$defaultHandler.commands.showSettingsMenu.exec(this.editor);
  }

  resize() {
    return this.editor.resize();
  }

  setEditorRef(editor) {
    this.editor = editor;
    if (this.props.editorRef && typeof this.props.editorRef.current !== "undefined") this.props.editorRef.current = editor;else if (this.props.editorRef) this.props.editorRef = editor;
  }

  onChange() {
    this.hasUnsavedChanges = true;
    if (this.props.onChange) this.props.onChange(...arguments);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.setEditorRef.bind(this),
      readOnly: this.props.readOnly,
      id: this.props.id || "bd-customcss-editor",
      onChange: this.onChange,
      controls: this.controls,
      value: this.props.css
    });
  }

  toggleLiveUpdate(checked) {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.set("settings", "customcss", "liveUpdate", checked);
  }

  updateCss(event, newCss) {
    if (this.props.update) this.props.update(newCss);
  }

  saveCss(event, newCss) {
    this.hasUnsavedChanges = false;
    if (this.props.save) this.props.save(newCss);
  }

  openDetached(event, currentCSS) {
    if (!this.props.openDetached) return;
    this.props.openDetached(currentCSS);
  }

  openNative() {
    if (this.props.openNative) this.props.openNative();
  }

}

/***/ }),

/***/ "./src/ui/customcss/editor.jsx":
/*!*************************************!*\
  !*** ./src/ui/customcss/editor.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CodeEditor)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox */ "./src/ui/customcss/checkbox.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByPrototypes("renderTooltip");
const ThemeStore = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.ThemeStore;
const languages = ["abap", "abc", "actionscript", "ada", "apache_conf", "asciidoc", "assembly_x86", "autohotkey", "batchfile", "bro", "c_cpp", "c9search", "cirru", "clojure", "cobol", "coffee", "coldfusion", "csharp", "csound_document", "csound_orchestra", "csound_score", "css", "curly", "d", "dart", "diff", "dockerfile", "dot", "drools", "dummy", "dummysyntax", "eiffel", "ejs", "elixir", "elm", "erlang", "forth", "fortran", "ftl", "gcode", "gherkin", "gitignore", "glsl", "gobstones", "golang", "graphqlschema", "groovy", "haml", "handlebars", "haskell", "haskell_cabal", "haxe", "hjson", "html", "html_elixir", "html_ruby", "ini", "io", "jack", "jade", "java", "javascript", "json", "jsoniq", "jsp", "jssm", "jsx", "julia", "kotlin", "latex", "less", "liquid", "lisp", "livescript", "logiql", "lsl", "lua", "luapage", "lucene", "makefile", "markdown", "mask", "matlab", "maze", "mel", "mushcode", "mysql", "nix", "nsis", "objectivec", "ocaml", "pascal", "perl", "pgsql", "php", "pig", "powershell", "praat", "prolog", "properties", "protobuf", "python", "r", "razor", "rdoc", "red", "rhtml", "rst", "ruby", "rust", "sass", "scad", "scala", "scheme", "scss", "sh", "sjs", "smarty", "snippets", "soy_template", "space", "sql", "sqlserver", "stylus", "svg", "swift", "tcl", "tex", "text", "textile", "toml", "tsx", "twig", "typescript", "vala", "vbscript", "velocity", "verilog", "vhdl", "wollok", "xml", "xquery", "yaml", "django"];
class CodeEditor extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  static get defaultId() {
    return "bd-editor";
  }

  constructor(props) {
    super(props);
    this.props.theme = (ThemeStore === null || ThemeStore === void 0 ? void 0 : ThemeStore.theme) === "light" ? "vs" : "vs-dark";
    this.props.language = this.props.language.toLowerCase().replace(/ /g, "_");
    if (!languages.includes(this.props.language)) this.props.language = CodeEditor.defaultProps.language;
    this.bindings = [];
    this.resize = this.resize.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onThemeChange = this.onThemeChange.bind(this);
  }

  static get defaultProps() {
    return {
      controls: [],
      language: "css",
      id: this.defaultId
    };
  }

  componentDidMount() {
    var _window$monaco, _ThemeStore$addChange;

    if ((_window$monaco = window.monaco) !== null && _window$monaco !== void 0 && _window$monaco.editor) {
      this.editor = window.monaco.editor.create(document.getElementById(this.props.id), {
        value: this.props.value,
        language: this.props.language,
        theme: (ThemeStore === null || ThemeStore === void 0 ? void 0 : ThemeStore.theme) == "light" ? "vs" : "vs-dark",
        fontSize: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "fontSize"),
        lineNumbers: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "lineNumbers"),
        minimap: {
          enabled: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "minimap")
        },
        hover: {
          enabled: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "hover")
        },
        quickSuggestions: {
          other: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "quickSuggestions"),
          comments: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "quickSuggestions"),
          strings: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "quickSuggestions")
        },
        renderWhitespace: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("settings", "editor", "renderWhitespace")
      });
      this.bindings.push(this.editor.onDidChangeModelContent(this.onChange));
    } else {
      const textarea = document.createElement("textarea");
      textarea.className = "bd-fallback-editor";
      textarea.value = this.props.value;

      textarea.onchange = e => this.onChange(e.target.value);

      textarea.oninput = e => this.onChange(e.target.value);

      this.editor = {
        dispose: () => textarea.remove(),
        getValue: () => textarea.value,
        setValue: value => textarea.value = value,
        layout: () => {}
      };
      document.getElementById(this.props.id).appendChild(textarea);
    }

    ThemeStore === null || ThemeStore === void 0 ? void 0 : (_ThemeStore$addChange = ThemeStore.addChangeListener) === null || _ThemeStore$addChange === void 0 ? void 0 : _ThemeStore$addChange.call(ThemeStore, this.onThemeChange);
    window.addEventListener("resize", this.resize);
  }

  componentWillUnmount() {
    var _ThemeStore$removeCha;

    window.removeEventListener("resize", this.resize);
    ThemeStore === null || ThemeStore === void 0 ? void 0 : (_ThemeStore$removeCha = ThemeStore.removeChangeListener) === null || _ThemeStore$removeCha === void 0 ? void 0 : _ThemeStore$removeCha.call(ThemeStore, this.onThemeChange);

    for (const binding of this.bindings) binding.dispose();

    this.editor.dispose();
  }

  onThemeChange() {
    var _window$monaco2;

    const newTheme = (ThemeStore === null || ThemeStore === void 0 ? void 0 : ThemeStore.theme) === "light" ? "vs" : "vs-dark";
    if (newTheme === this.props.theme) return;
    this.props.theme = newTheme;
    if ((_window$monaco2 = window.monaco) !== null && _window$monaco2 !== void 0 && _window$monaco2.editor) window.monaco.editor.setTheme(this.props.theme);
  }

  get value() {
    return this.editor.getValue();
  }

  set value(newValue) {
    this.editor.setValue(newValue);
  }

  onChange() {
    if (this.props.onChange) this.props.onChange(this.value);
  }

  showSettings() {
    return this.editor.keyBinding.$defaultHandler.commands.showSettingsMenu.exec(this.editor);
  }

  resize() {
    this.editor.layout();
  }

  buildControl(control) {
    if (control.type == "checkbox") return this.makeCheckbox(control);
    return this.makeButton(control);
  }

  makeCheckbox(checkbox) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_checkbox__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: checkbox.label,
      onChange: checkbox.onChange,
      checked: checkbox.checked
    });
  }

  makeButton(button) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: button.tooltip
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", _extends({}, props, {
        className: "btn btn-primary",
        onClick: event => {
          button.onClick(event, this.value);
        }
      }), button.label);
    });
  }

  render() {
    if (this.editor && this.editor.layout) this.editor.layout();
    const controlsLeft = this.props.controls.filter(c => c.side != "right").map(this.buildControl.bind(this));
    const controlsRight = this.props.controls.filter(c => c.side == "right").map(this.buildControl.bind(this));
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-editor-panel",
      className: this.props.theme
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-editor-controls"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "controls-section controls-left"
    }, controlsLeft), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "controls-section controls-right"
    }, controlsRight)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "editor-wrapper"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: this.props.id,
      className: "editor " + this.props.theme
    })));
  }

}

/***/ }),

/***/ "./src/ui/divider.jsx":
/*!****************************!*\
  !*** ./src/ui/divider.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (({
  className
}) => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
  className: `bd-divider ${className || ""}`
}));

/***/ }),

/***/ "./src/ui/emote.js":
/*!*************************!*\
  !*** ./src/ui/emote.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BDEmote)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

const TooltipWrapper = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByPrototypes("renderTooltip");
class BDEmote extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldAnimate: !this.animateOnHover,
      isFavorite: this.props.isFavorite
    };
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
    this.toggleFavorite = this.toggleFavorite.bind(this);
  }

  get animateOnHover() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.get("emotes", "general", "animateOnHover");
  }

  get label() {
    return this.props.modifier ? `${this.props.name}:${this.props.modifier}` : this.props.name;
  }

  get modifierClass() {
    return this.props.modifier ? ` emote${this.props.modifier}` : "";
  }

  onMouseEnter() {
    if (!this.state.shouldAnimate && this.animateOnHover) this.setState({
      shouldAnimate: true
    });
  }

  onMouseLeave() {
    if (this.state.shouldAnimate && this.animateOnHover) this.setState({
      shouldAnimate: false
    });
  }

  onClick(e) {
    if (this.props.onClick) this.props.onClick(e);
  }

  toggleFavorite(e) {
    e.preventDefault();
    e.stopPropagation();
    if (this.state.isFavorite) _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.emit("emotes-favorite-removed", this.label);else _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.emit("emotes-favorite-added", this.label, this.props.url);
    this.setState({
      isFavorite: !this.state.isFavorite
    });
  }

  render() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TooltipWrapper, {
      color: "primary",
      position: "top",
      text: this.label,
      delay: 750
    }, childProps => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", Object.assign({
        className: "emotewrapper" + (this.props.jumboable ? " jumboable" : ""),
        onMouseEnter: this.onMouseEnter,
        onMouseLeave: this.onMouseLeave,
        onClick: this.onClick
      }, childProps), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", {
        draggable: false,
        className: "emote" + this.modifierClass + (this.props.jumboable ? " jumboable" : "") + (!this.state.shouldAnimate ? " stop-animation" : ""),
        dataModifier: this.props.modifier,
        alt: this.label,
        src: this.props.url
      }), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
        className: "fav" + (this.state.isFavorite ? " active" : ""),
        title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Emotes.favoriteAction,
        type: "button",
        onClick: this.toggleFavorite
      }));
    });
  }

}

/***/ }),

/***/ "./src/ui/errorboundary.jsx":
/*!**********************************!*\
  !*** ./src/ui/errorboundary.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");


class ErrorBoundary extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error) {
    this.setState({
      hasError: true
    });
    if (typeof this.props.onError === "function") this.props.onError(error);
  }

  render() {
    if (this.state.hasError) return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      onClick: () => _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.IPC.openDevTools(),
      className: "react-error"
    }, "There was an unexpected Error. Click to open console for more details.");
    return this.props.children;
  }

}
const originalRender = ErrorBoundary.prototype.render;
Object.defineProperty(ErrorBoundary.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("ErrorBoundary", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/floating/container.jsx":
/*!***************************************!*\
  !*** ./src/ui/floating/container.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./window */ "./src/ui/floating/window.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




class FloatingWindowContainer extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      windows: []
    };
  }

  get minY() {
    const appContainer = document.querySelector(`#app-mount > div[class*="app-"]`);
    if (appContainer) return appContainer.offsetTop;
    return 0;
  }

  render() {
    return this.state.windows.map(window => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_window__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, window, {
      close: this.close.bind(this, window.id),
      minY: this.minY,
      key: window.id
    }), window.children));
  }

  open(window) {
    this.setState(state => {
      state.windows.push(window);
      return {
        windows: state.windows
      };
    });
  }

  close(id) {
    this.setState(state => {
      return {
        windows: state.windows.filter(w => {
          if (w.id == id && w.onClose) w.onClose();
          return w.id != id;
        })
      };
    });
  }

  static get id() {
    return "floating-windows";
  }

  static get root() {
    if (this._root) return this._root;
    const container = document.createElement("div");
    container.id = this.id;
    document.body.append(container);
    return this._root = container;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FloatingWindowContainer);

/***/ }),

/***/ "./src/ui/floating/window.jsx":
/*!************************************!*\
  !*** ./src/ui/floating/window.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloatingWindow)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../structs/screen */ "./src/structs/screen.js");
/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/close */ "./src/ui/icons/close.jsx");
/* harmony import */ var _icons_fullscreen__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/fullscreen */ "./src/ui/icons/fullscreen.jsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");




 // const Draggable = WebpackModules.getByDisplayName("Draggable");
// {
//     "dragAnywhere": true,
//     "className": "pictureInPictureWindow-1B5qSe",
//     "maxX": 1969,
//     "maxY": this.maxY,
//     "onDragStart": "?? () {}",
//     "onDrag": "?? () {}",
//     "onDragEnd": "?? () {}",
//     "children": "<div />",
//     "initialX": 0,
//     "initialY": 0
//   }

class FloatingWindow extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.offX = 0;
    this.offY = 0;
    this.maxX = this.props.maxX || _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].width;
    this.maxY = this.props.maxY || _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].height;
    this.minX = this.props.minX || 0;
    this.minY = this.props.minY || 0;
    this.titlebar = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.window = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.close = this.close.bind(this);
    this.maximize = this.maximize.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDragStop = this.onDragStop.bind(this);
    this.onResizeStart = this.onResizeStart.bind(this);
  }

  componentDidMount() {
    this.window.current.addEventListener("mousedown", this.onResizeStart, false);
    this.titlebar.current.addEventListener("mousedown", this.onDragStart, false);
    document.addEventListener("mouseup", this.onDragStop, false);
  }

  onResizeStart() {
    this.currentWidth = this.window.current.offsetWidth;
    this.currentHeight = this.window.current.offsetHeight;
  }

  onDragStop() {
    document.removeEventListener("mousemove", this.onDrag, true);
    const width = this.window.current.offsetWidth;
    const height = this.window.current.offsetHeight;

    if (width != this.currentWidth || height != this.currentHeight) {
      if (this.props.onResize) this.props.onResize();
      const left = parseInt(this.window.current.style.left);
      const top = parseInt(this.window.current.style.top);
      if (left + width >= this.maxX) this.window.current.style.width = this.maxX - left + "px";
      if (top + height >= this.maxY) this.window.current.style.height = this.maxY - top + "px";
    }

    this.currentWidth = width;
    this.currentHeight = height;
  }

  onDragStart(e) {
    const div = this.window.current;
    this.offY = e.clientY - parseInt(div.offsetTop);
    this.offX = e.clientX - parseInt(div.offsetLeft);
    document.addEventListener("mousemove", this.onDrag, true);
  }

  onDrag(e) {
    const div = this.window.current;
    let newTop = e.clientY - this.offY;
    if (newTop <= this.minY) newTop = this.minY;
    if (newTop + this.currentHeight >= this.maxY) newTop = this.maxY - this.currentHeight;
    let newLeft = e.clientX - this.offX;
    if (newLeft <= this.minX) newLeft = this.minX;
    if (newLeft + this.currentWidth >= this.maxX) newLeft = this.maxX - this.currentWidth;
    div.style.top = newTop + "px";
    div.style.left = newLeft + "px";
  }

  componentWillUnmount() {
    this.titlebar.current.removeEventListener("mousedown", this.onDragStart, false);
    document.removeEventListener("mouseup", this.onDragStop, false);
  }

  render() {
    const top = this.props.center ? _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].height / 2 - this.props.height / 2 : this.props.top;
    const left = this.props.center ? _structs_screen__WEBPACK_IMPORTED_MODULE_1__["default"].width / 2 - this.props.width / 2 : this.props.left; // console.log(top, left);

    const className = `floating-window${` ${this.props.className}` || ""}${this.props.resizable ? " resizable" : ""}${this.state.modalOpen ? " modal-open" : ""}`;
    const styles = {
      height: this.props.height,
      width: this.props.width,
      left: left || 0,
      top: top || 0
    };
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: this.props.id,
      className: className,
      ref: this.window,
      style: styles
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "floating-window-titlebar",
      ref: this.titlebar
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", {
      className: "title"
    }, this.props.title), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "floating-window-buttons"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "button maximize-button",
      onClick: this.maximize
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_fullscreen__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "18px"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "button close-button",
      onClick: this.close
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_close__WEBPACK_IMPORTED_MODULE_2__["default"], null)))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "floating-window-content"
    }, this.props.children));
  }

  maximize() {
    this.window.current.style.width = "100%";
    this.window.current.style.height = "100%";
    if (this.props.onResize) this.props.onResize();
    const width = this.window.current.offsetWidth;
    const height = this.window.current.offsetHeight;
    const left = parseInt(this.window.current.style.left);
    const top = parseInt(this.window.current.style.top);
    const right = left + width;
    const bottom = top + height; // Prevent expanding off the bottom and right and readjust position

    if (bottom > this.maxY) this.window.current.style.top = this.maxY - height + "px";
    if (right > this.maxX) this.window.current.style.left = this.maxX - width + "px";
    const newLeft = parseInt(this.window.current.style.left);
    const newTop = parseInt(this.window.current.style.top); // For small screens it's possible this pushes us off the other direction... we need to readjust size

    if (newTop < this.minY) {
      const difference = this.minY - newTop;
      this.window.current.style.top = this.minY + "px";
      this.window.current.style.height = height - difference + "px";
    }

    if (newLeft < this.minX) {
      const difference = this.minX - newLeft;
      this.window.current.style.left = this.minX + "px";
      this.window.current.style.height = width - difference + "px";
    }
  }

  async close() {
    let shouldClose = true;
    const confirmClose = typeof this.props.confirmClose == "function" ? this.props.confirmClose() : this.props.confirmClose;

    if (confirmClose) {
      this.setState({
        modalOpen: true
      });
      shouldClose = await this.confirmClose();
      this.setState({
        modalOpen: false
      });
    }

    if (this.props.close && shouldClose) this.props.close();
  }

  confirmClose() {
    return new Promise(resolve => {
      _modals__WEBPACK_IMPORTED_MODULE_4__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.confirmAction, this.props.confirmationText, {
        danger: true,
        confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.close,
        onConfirm: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        }
      });
    });
  }

}

/***/ }),

/***/ "./src/ui/floatingwindows.js":
/*!***********************************!*\
  !*** ./src/ui/floatingwindows.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FloatingWindows)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _floating_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./floating/container */ "./src/ui/floating/container.jsx");


/* eslint-disable new-cap */

const AppLayerProvider = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByDisplayName("AppLayerProvider");
class FloatingWindows {
  static initialize() {
    const containerRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    const container = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_floating_container__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: containerRef
    });
    const wrapped = AppLayerProvider ? _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(AppLayerProvider().props.layerContext.Provider, {
      value: [document.querySelector("#app-mount > .layerContainer-2v_Sit")]
    }, container) // eslint-disable-line new-cap
    : container;
    const div = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DOMManager.parseHTML(`<div id="floating-windows-layer">`);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DOMManager.bdBody.append(div);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.ReactDOM.render(wrapped, div);
    this.ref = containerRef;
  }

  static open(window) {
    if (!this.ref) this.initialize();
    return this.ref.current.open(window);
  }

}

/***/ }),

/***/ "./src/ui/icons/check.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/check.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Checkmark)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Checkmark extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      className: this.props.className || "",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/close.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/close.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloseButton)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class CloseButton extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 12 12",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", {
      className: "background",
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h12v12H0"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      className: "fill",
      fill: "#dcddde",
      d: "M9.5 3.205L8.795 2.5 6 5.295 3.205 2.5l-.705.705L5.295 6 2.5 8.795l.705.705L6 6.705 8.795 9.5l.705-.705L6.705 6"
    })));
  }

}

/***/ }),

/***/ "./src/ui/icons/cog.jsx":
/*!******************************!*\
  !*** ./src/ui/icons/cog.jsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cog)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Cog extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "20px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 20 20",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h20v20H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/delete.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/delete.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Delete)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Delete extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "#FFFFFF",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/detach.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/detach.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Detach)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Detach extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/dollarsign.jsx":
/*!*************************************!*\
  !*** ./src/ui/icons/dollarsign.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DollarSign)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class DollarSign extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/downarrow.jsx":
/*!************************************!*\
  !*** ./src/ui/icons/downarrow.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DownArrow)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class DownArrow extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "16px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "currentColor",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M8.12 9.29L12 13.17l3.88-3.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-4.59 4.59c-.39.39-1.02.39-1.41 0L6.7 10.7c-.39-.39-.39-1.02 0-1.41.39-.38 1.03-.39 1.42 0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/edit.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/edit.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Edit extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/error.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/error.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Error)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Error extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick,
      className: this.props.className
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0V0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/extension.jsx":
/*!************************************!*\
  !*** ./src/ui/icons/extension.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Extension)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Extension extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick,
      className: this.props.className
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/fullscreen.jsx":
/*!*************************************!*\
  !*** ./src/ui/icons/fullscreen.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FullScreen)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class FullScreen extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "#FFFFFF",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/github.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/github.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GitHub)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class GitHub extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/globe.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/globe.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Globe)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Globe extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    const color = this.props.color || "#FFFFFF";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: color,
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/grid.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/grid.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Grid)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Grid extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "20px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/history.jsx":
/*!**********************************!*\
  !*** ./src/ui/icons/history.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ History)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class History extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      className: this.props.className || "",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/keyboard.jsx":
/*!***********************************!*\
  !*** ./src/ui/icons/keyboard.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Keyboard extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className,
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0zm0 0h24v24H0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/list.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/list.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class List extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "20px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M4 18h17v-6H4v6zM4 5v6h17V5H4z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/magnifyingglass.jsx":
/*!******************************************!*\
  !*** ./src/ui/icons/magnifyingglass.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MagnifyingGlass)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class MagnifyingGlass extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "160px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: {
        width: size,
        height: size
      },
      viewBox: "0 0 160 160"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", {
      transform: "translate(9 9)"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "rgba(0,0,0,0.1)",
      d: "M42.1262,100.7598 C25.1382,83.7718 25.1382,56.2288 42.1262,39.2408 C59.1142,22.2538 86.6572,22.2538 103.6452,39.2408 C120.6322,56.2288 120.6322,83.7718 103.6452,100.7598 C86.6572,117.7478 59.1142,117.7478 42.1262,100.7598"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M121.8938,119.4976 C94.5578,146.8346 50.2358,146.8346 22.8988,119.4976 C-4.4382,92.1616 -4.4382,47.8396 22.8988,20.5026 C50.2358,-6.8334 94.5578,-6.8344 121.8938,20.5026 C149.2308,47.8396 149.2308,92.1616 121.8938,119.4976 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeDasharray: "4 5"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#C9D2F0",
      d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M1.8313,140.566 L1.8313,140.566 C-0.6097,138.125 -0.6097,134.166 1.8313,131.725 L38.6023,94.954 L47.4433,103.795 L10.6723,140.566 C8.2303,143.007 4.2723,143.007 1.8313,140.566 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#9F7373",
      d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M12.1457,139.0923 L3.3047,130.2513 C1.6767,128.6233 1.6767,125.9853 3.3047,124.3573 L20.7417,106.9203 C22.3687,105.2923 25.0077,105.2923 26.6357,106.9203 L35.4767,115.7613 C37.1037,117.3893 37.1037,120.0283 35.4767,121.6553 L18.0397,139.0923 C16.4127,140.7193 13.7727,140.7193 12.1457,139.0923 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "#F3F9FF",
      d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 M108.007,34.3897 C88.34,14.7227 56.453,14.7227 36.786,34.3897 C17.119,54.0567 17.119,85.9437 36.786,105.6107 C56.453,125.2777 88.34,125.2777 108.007,105.6107 C127.674,85.9437 127.674,54.0567 108.007,34.3897"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M116.386 94.545C115.853 95.498 115.287 96.438 114.688 97.362M108.0071 105.6109C88.3401 125.2779 56.4531 125.2779 36.7861 105.6109 17.1191 85.9439 17.1191 54.0569 36.7861 34.3899 56.4531 14.7229 88.3401 14.7229 108.0071 34.3899 122.7701 49.1529 126.4511 70.7999 119.0511 88.9969",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      stroke: "#1E2126",
      strokeWidth: "2",
      d: "M44.112,98.2847 C28.491,82.6637 28.491,57.3377 44.112,41.7167 C59.733,26.0957 85.06,26.0957 100.681,41.7157 C116.302,57.3367 116.302,82.6637 100.681,98.2847 C85.06,113.9057 59.733,113.9057 44.112,98.2847 Z",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("rect", {
      width: "160",
      height: "160",
      y: "-1"
    })));
  }

}

/***/ }),

/***/ "./src/ui/icons/next.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/next.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrowRight)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class ArrowRight extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M10 17l5-5-5-5v10z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 24V0h24v24H0z",
      fill: "none"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/patreon.jsx":
/*!**********************************!*\
  !*** ./src/ui/icons/patreon.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Patreon)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Patreon extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "m0 .5h4.219v23h-4.219z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "m15.384.5c-4.767 0-8.644 3.873-8.644 8.633 0 4.75 3.877 8.61 8.644 8.61 4.754 0 8.616-3.865 8.616-8.61 0-4.759-3.863-8.633-8.616-8.633z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/previous.jsx":
/*!***********************************!*\
  !*** ./src/ui/icons/previous.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ArrowLeft)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class ArrowLeft extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M14 7l-5 5 5 5V7z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M24 0v24H0V0h24z",
      fill: "none"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/radio.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/radio.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Radio extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className,
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }), this.props.checked && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    }), !this.props.checked && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/reload.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/reload.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReloadIcon)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class ReloadIcon extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      onClick: this.props.onClick,
      fill: "#dcddde",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/save.jsx":
/*!*******************************!*\
  !*** ./src/ui/icons/save.jsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Save)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Save extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/search.jsx":
/*!*********************************!*\
  !*** ./src/ui/icons/search.jsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Search extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "16px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: this.props.className || "",
      fill: "#FFFFFF",
      viewBox: "0 0 24 24",
      style: {
        width: size,
        height: size
      }
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      fill: "none",
      d: "M0 0h24v24H0V0z"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/support.jsx":
/*!**********************************!*\
  !*** ./src/ui/icons/support.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Support)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Support extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "18px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "2 2 20 20",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/icons/theme.jsx":
/*!********************************!*\
  !*** ./src/ui/icons/theme.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Theme)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

class Theme extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    const size = this.props.size || "24px";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "#FFFFFF",
      style: {
        width: size,
        height: size
      },
      onClick: this.props.onClick,
      className: this.props.className
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M0 0h24v24H0z",
      fill: "none"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
      d: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"
    }));
  }

}

/***/ }),

/***/ "./src/ui/misc/addoneditor.jsx":
/*!*************************************!*\
  !*** ./src/ui/misc/addoneditor.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonEditor)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _customcss_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../customcss/editor */ "./src/ui/customcss/editor.jsx");
/* harmony import */ var _icons_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/save */ "./src/ui/icons/save.jsx");
/* harmony import */ var _icons_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/edit */ "./src/ui/icons/edit.jsx");




class AddonEditor extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.hasUnsavedChanges = false;
    this.onChange = this.onChange.bind(this);
    this.save = this.save.bind(this);
    this.openNative = this.openNative.bind(this);
    this.update = this.update.bind(this);
    this.controls = [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_save__WEBPACK_IMPORTED_MODULE_2__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.save,
      onClick: this.save
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
        size: "18px"
      }),
      tooltip: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.CustomCSS.openNative,
      onClick: this.openNative
    }];
  }

  update() {
    this.forceUpdate();
  }

  updateEditor(newCSS) {
    if (!this.editor) return;
    this.editor.value = newCSS;
  }

  get value() {
    return this.editor.session.getValue();
  }

  set value(newValue) {
    this.editor.setValue(newValue);
  }

  showSettings() {
    return this.editor.keyBinding.$defaultHandler.commands.showSettingsMenu.exec(this.editor);
  }

  resize() {
    return this.editor.resize();
  }

  setEditorRef(editor) {
    this.editor = editor;
    if (this.props.editorRef && typeof this.props.editorRef.current !== "undefined") this.props.editorRef.current = editor;else if (this.props.editorRef) this.props.editorRef = editor;
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_customcss_editor__WEBPACK_IMPORTED_MODULE_1__["default"], {
      ref: this.setEditorRef.bind(this),
      language: this.props.language,
      id: this.props.id || "bd-addon-editor",
      controls: this.controls,
      value: this.props.content,
      onChange: this.onChange
    });
  }

  onChange() {
    this.hasUnsavedChanges = true;
  }

  save(event, content) {
    this.hasUnsavedChanges = false;
    if (this.props.save) this.props.save(content);
  }

  openNative() {
    if (this.props.openNative) this.props.openNative();
  }

}

/***/ }),

/***/ "./src/ui/modals.js":
/*!**************************!*\
  !*** ./src/ui/modals.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Modals)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../structs/string */ "./src/structs/string.js");
/* harmony import */ var _addonerrormodal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addonerrormodal */ "./src/ui/addonerrormodal.jsx");
/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./errorboundary */ "./src/ui/errorboundary.jsx");






class Modals {
  static get shouldShowAddonErrors() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Settings.get("settings", "addons", "addonErrors");
  }

  static get ModalActions() {
    return this._ModalActions ?? (this._ModalActions = {
      openModal: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => (m === null || m === void 0 ? void 0 : m.toString().includes("onCloseCallback")) && (m === null || m === void 0 ? void 0 : m.toString().includes("Layer")), {
        searchExports: true
      }),
      closeModal: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => m === null || m === void 0 ? void 0 : m.toString().includes("onCloseCallback()"), {
        searchExports: true
      })
    });
  }

  static get ModalStack() {
    return this._ModalStack ?? (this._ModalStack = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("push", "update", "pop", "popWithKey"));
  }

  static get ModalComponents() {
    return this._ModalComponents ?? (this._ModalComponents = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("Header", "Footer"));
  }

  static get ModalRoot() {
    return this._ModalRoot ?? (this._ModalRoot = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => {
      var _m$toString, _m$toString$call;

      return m === null || m === void 0 ? void 0 : (_m$toString = m.toString) === null || _m$toString === void 0 ? void 0 : (_m$toString$call = _m$toString.call(m)) === null || _m$toString$call === void 0 ? void 0 : _m$toString$call.includes("ENTERING");
    }, {
      searchExports: true
    }));
  }

  static get ModalClasses() {
    return this._ModalClasses ?? (this._ModalClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("modal", "content"));
  }

  static get FlexElements() {
    return this._FlexElements ?? (this._FlexElements = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("Child", "Align"));
  }

  static get TextElement() {
    return this._TextElement ?? (this._TextElement = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => {
      var _m$Sizes;

      return (m === null || m === void 0 ? void 0 : (_m$Sizes = m.Sizes) === null || _m$Sizes === void 0 ? void 0 : _m$Sizes.SIZE_32) && m.Colors;
    }));
  }

  static get ConfirmationModal() {
    return this._ConfirmationModal ?? (this._ConfirmationModal = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => {
      var _m$toString2, _m$toString2$call;

      return m === null || m === void 0 ? void 0 : (_m$toString2 = m.toString) === null || _m$toString2 === void 0 ? void 0 : (_m$toString2$call = _m$toString2.call(m)) === null || _m$toString2$call === void 0 ? void 0 : _m$toString2$call.includes(".confirmButtonColor");
    }));
  }

  static get Markdown() {
    return this._Markdown ?? (this._Markdown = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.find(m => {
      var _m$prototype;

      return (m === null || m === void 0 ? void 0 : (_m$prototype = m.prototype) === null || _m$prototype === void 0 ? void 0 : _m$prototype.render) && m.rules;
    }));
  }

  static get Buttons() {
    return this._Buttons ?? (this._Buttons = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => m.BorderColors, {
      searchExports: true
    }));
  }

  static get ModalQueue() {
    return this._ModalQueue ?? (this._ModalQueue = []);
  }

  static get hasModalOpen() {
    return !!document.getElementsByClassName("bd-modal").length;
  }

  static async initialize() {
    const names = ["ModalActions", "Markdown", "ModalRoot", "ModalComponents", "Buttons", "TextElement", "FlexElements"];

    for (const name of names) {
      const value = this[name];

      if (!value) {
        _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("Modals", `Missing ${name} module!`);
      }
    }
  }

  static default(title, content, buttons = []) {
    const modal = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.parseHTML(`<div class="bd-modal-wrapper theme-dark">
                <div class="bd-backdrop backdrop-1wrmKB"></div>
                <div class="bd-modal modal-1UGdnR">
                    <div class="bd-modal-inner inner-1JeGVc">
                        <div class="header header-1R_AjF">
                            <div class="title">${title}</div>
                        </div>
                        <div class="bd-modal-body">
                            <div class="scroller-wrap fade">
                                <div class="scroller"></div>
                            </div>
                        </div>
                        <div class="footer footer-2yfCgX footer-3rDWdC footer-2gL1pp"></div>
                    </div>
                </div>
            </div>`);

    const handleClose = () => {
      modal.classList.add("closing");
      setTimeout(() => {
        modal.remove();
        const next = this.ModalQueue.shift();
        if (!next) return;
        next();
      }, 300);
    };

    if (!buttons.length) {
      buttons.push({
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.okay,
        action: handleClose
      });
    }

    const buttonContainer = modal.querySelector(".footer");

    for (const button of buttons) {
      const buttonEl = Object.assign(document.createElement("button"), {
        onclick: e => {
          try {
            button.action(e);
          } catch (error) {
            _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].stacktrace("Modals", "Could not fire button listener", error);
          }

          handleClose();
        },
        type: "button",
        className: "bd-button"
      });
      if (button.danger) buttonEl.classList.add("bd-button-danger");
      buttonEl.append(button.label);
      buttonContainer.appendChild(buttonEl);
    }

    if (Array.isArray(content) ? content.every(el => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.isValidElement(el)) : _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.isValidElement(content)) {
      const container = modal.querySelector(".scroller");

      try {
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.ReactDOM.render(content, container);
      } catch (error) {
        container.append(_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.parseHTML(`<span style="color: red">There was an unexpected error. Modal could not be rendered.</span>`));
      }

      _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DOMManager.onRemoved(container, () => {
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.ReactDOM.unmountComponentAtNode(container);
      });
    } else {
      modal.querySelector(".scroller").append(content);
    }

    modal.querySelector(".footer button").addEventListener("click", handleClose);
    modal.querySelector(".bd-backdrop").addEventListener("click", handleClose);

    const handleOpen = () => document.getElementById("app-mount").append(modal);

    if (this.hasModalOpen) {
      this.ModalQueue.push(handleOpen);
    } else {
      handleOpen();
    }
  }

  static alert(title, content) {
    this.showConfirmationModal(title, content, {
      cancelText: null
    });
  }
  /**
   * Shows a generic but very customizable confirmation modal with optional confirm and cancel callbacks.
   * @param {string} title - title of the modal
   * @param {(string|ReactElement|Array<string|ReactElement>)} children - a single or mixed array of react elements and strings. Everything is wrapped in Discord's `Markdown` component so strings will show and render properly.
   * @param {object} [options] - options to modify the modal
   * @param {boolean} [options.danger=false] - whether the main button should be red or not
   * @param {string} [options.confirmText=Okay] - text for the confirmation/submit button
   * @param {string} [options.cancelText=Cancel] - text for the cancel button
   * @param {callable} [options.onConfirm=NOOP] - callback to occur when clicking the submit button
   * @param {callable} [options.onCancel=NOOP] - callback to occur when clicking the cancel button
   * @param {string} [options.key] - key used to identify the modal. If not provided, one is generated and returned
   * @returns {string} - the key used for this modal
   */


  static showConfirmationModal(title, content, options = {}) {
    const Markdown = this.Markdown;
    const ConfirmationModal = this.ConfirmationModal;
    const ModalActions = this.ModalActions;
    if (content instanceof _structs_string__WEBPACK_IMPORTED_MODULE_3__["default"]) content = content.toString();

    const emptyFunction = () => {};

    const {
      onConfirm = emptyFunction,
      onCancel = emptyFunction,
      confirmText = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.okay,
      cancelText = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.cancel,
      danger = false,
      key = undefined
    } = options;

    if (!this.ModalActions || !this.ConfirmationModal || !this.Markdown) {
      return this.default(title, content, [confirmText && {
        label: confirmText,
        action: onConfirm
      }, cancelText && {
        label: cancelText,
        action: onCancel,
        danger
      }].filter(Boolean));
    }

    if (!Array.isArray(content)) content = [content];
    content = content.map(c => typeof c === "string" ? _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(Markdown, null, c) : c);
    const modalKey = ModalActions.openModal(props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onError: () => {
          setTimeout(() => {
            ModalActions.closeModal(modalKey);
            this.default(title, content, [confirmText && {
              label: confirmText,
              action: onConfirm
            }, cancelText && {
              label: cancelText,
              action: onCancel,
              danger
            }].filter(Boolean));
          });
        }
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(ConfirmationModal, Object.assign({
        header: title,
        confirmButtonColor: danger ? this.Buttons.Colors.RED : this.Buttons.Colors.BRAND,
        confirmText: confirmText,
        cancelText: cancelText,
        onConfirm: onConfirm,
        onCancel: onCancel
      }, props), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], {}, content)));
    }, {
      modalKey: key
    });
    return modalKey;
  }

  static showAddonErrors({
    plugins: pluginErrors = [],
    themes: themeErrors = []
  }) {
    if (!pluginErrors || !themeErrors || !this.shouldShowAddonErrors) return;
    if (!pluginErrors.length && !themeErrors.length) return;

    if (this.addonErrorsRef && this.addonErrorsRef.current) {
      return this.addonErrorsRef.current.refreshTabs(Array.isArray(pluginErrors) ? pluginErrors : [], Array.isArray(themeErrors) ? themeErrors : []);
    }

    this.addonErrorsRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createRef();
    this.ModalActions.openModal(props => _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], null, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.ModalRoot, Object.assign(props, {
      size: "medium",
      className: "bd-error-modal",
      children: [_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_addonerrormodal__WEBPACK_IMPORTED_MODULE_4__["default"], {
        ref: this.addonErrorsRef,
        pluginErrors: Array.isArray(pluginErrors) ? pluginErrors : [],
        themeErrors: Array.isArray(themeErrors) ? themeErrors : [],
        onClose: props.onClose
      }), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.ModalComponents.Footer, {
        className: "bd-error-modal-footer"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.Buttons, {
        onClick: props.onClose,
        className: "bd-button"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.okay))]
    }))));
  }

  static showChangelogModal(options = {}) {
    const OriginalModalClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("hideOnFullscreen", "root");
    const ChangelogModalClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getModule(m => m.modal && m.maxModalWidth);
    const ChangelogClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("fixed", "improved");
    const TextElement = this.TextElement;
    const FlexChild = this.FlexElements;
    const MarkdownParser = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("defaultRules", "parse");
    if (!OriginalModalClasses || !ChangelogModalClasses || !ChangelogClasses || !TextElement || !FlexChild || !MarkdownParser) return _common_logger__WEBPACK_IMPORTED_MODULE_1__["default"].warn("Modals", "showChangelogModal missing modules");
    const {
      image = "https://i.imgur.com/wuh5yMK.png",
      description = "",
      changes = [],
      title = "BetterDiscord",
      subtitle = `v${_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.version}`,
      footer
    } = options;
    const ce = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement;
    const changelogItems = [options.video ? ce("video", {
      src: options.video,
      poster: options.poster,
      controls: true,
      className: ChangelogClasses.video
    }) : ce("img", {
      src: image
    })];
    if (description) changelogItems.push(ce("p", null, MarkdownParser.parse(description)));

    for (let c = 0; c < changes.length; c++) {
      const entry = changes[c];
      const type = ChangelogClasses[entry.type] ? ChangelogClasses[entry.type] : ChangelogClasses.added;
      const margin = c == 0 ? ChangelogClasses.marginTop : "";
      changelogItems.push(ce("h1", {
        className: `${type} ${margin}`
      }, entry.title));
      if (entry.description) changelogItems.push(ce("p", null, MarkdownParser.parse(entry.description)));
      const list = ce("ul", null, entry.items.map(i => ce("li", null, MarkdownParser.parse(i))));
      changelogItems.push(list);
    }

    const renderHeader = function () {
      return ce(FlexChild, {
        className: OriginalModalClasses.header,
        grow: 0,
        shrink: 0,
        direction: FlexChild.Direction.VERTICAL
      }, ce(TextElement, {
        tag: "h1",
        size: TextElement.Sizes.SIZE_20,
        strong: true
      }, title), ce(TextElement, {
        size: TextElement.Sizes.SIZE_12,
        color: TextElement.Colors.STANDARD,
        className: ChangelogClasses.date
      }, subtitle));
    };

    const renderFooter = () => {
      const AnchorClasses = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("anchorUnderlineOnHover") || {
        anchor: "anchor-3Z-8Bb",
        anchorUnderlineOnHover: "anchorUnderlineOnHover-2ESHQB"
      };

      const joinSupportServer = click => {
        click.preventDefault();
        click.stopPropagation();
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DiscordModules.InviteActions.acceptInviteAndTransitionToInviteChannel({
          inviteKey: "0Tmfo5ZbORCRqbAd"
        });
      };

      const supportLink = ce("a", {
        className: `${AnchorClasses.anchor} ${AnchorClasses.anchorUnderlineOnHover}`,
        onClick: joinSupportServer
      }, "Join our Discord Server.");
      const defaultFooter = ce(TextElement, {
        size: TextElement.Sizes.SIZE_12,
        color: TextElement.Colors.STANDARD
      }, "Need support? ", supportLink);
      return ce(FlexChild, {
        className: OriginalModalClasses.footer + " " + OriginalModalClasses.footerSeparator
      }, ce(FlexChild.Child, {
        grow: 1,
        shrink: 1
      }, footer ? footer : defaultFooter));
    };

    const body = ce("div", {
      className: `${OriginalModalClasses.content} ${ChangelogClasses.container} ${ChangelogModalClasses.content} ${_modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.DiscordClasses.Scrollers.thin}`
    }, changelogItems);
    const key = this.ModalActions.openModal(props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], null, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.ModalRoot, Object.assign({
        className: `bd-changelog-modal ${OriginalModalClasses.root} ${OriginalModalClasses.small} ${ChangelogModalClasses.modal}`,
        selectable: true,
        onScroll: _ => _,
        onClose: _ => _
      }, props), renderHeader(), body, renderFooter()));
    });
    return key;
  }

  static showAddonSettingsModal(name, panel) {
    let child = panel;

    if (panel instanceof Node || typeof panel === "string") {
      child = class ReactWrapper extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.Component {
        constructor(props) {
          super(props);
          this.elementRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createRef();
          this.element = panel;
        }

        componentDidMount() {
          if (this.element instanceof Node) this.elementRef.current.appendChild(this.element);
        }

        render() {
          const props = {
            className: "bd-addon-settings-wrap",
            ref: this.elementRef
          };
          if (typeof this.element === "string") props.dangerouslySetInnerHTML = {
            __html: this.element
          };
          return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement("div", props);
        }

      };
    }

    if (typeof child === "function") child = _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(child);
    const mc = this.ModalComponents;

    const modal = props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], {}, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.ModalRoot, Object.assign({
        size: mc.Sizes.MEDIUM,
        className: "bd-addon-modal" + " " + mc.Sizes.MEDIUM
      }, props), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(mc.Header, {
        separator: false,
        className: "bd-addon-modal-header"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.TextElement, {
        tag: "h1",
        size: this.TextElement.Sizes.SIZE_20,
        strong: true
      }, `${name} Settings`)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(mc.Content, {
        className: "bd-addon-modal-settings"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], {}, child)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(mc.Footer, {
        className: "bd-addon-modal-footer"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(this.Buttons, {
        onClick: props.onClose,
        className: "bd-button"
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.Strings.Modals.done))));
    };

    return this.ModalActions.openModal(props => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_5__["default"], null, _modules_modules_js__WEBPACK_IMPORTED_MODULE_2__.React.createElement(modal, props));
    });
  }

}

/***/ }),

/***/ "./src/ui/notices.js":
/*!***************************!*\
  !*** ./src/ui/notices.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Notices)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");

class Notices {
  static get baseClass() {
    var _WebpackModules$getBy;

    return this.__baseClass ?? (this.__baseClass = (_WebpackModules$getBy = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("container", "base")) === null || _WebpackModules$getBy === void 0 ? void 0 : _WebpackModules$getBy.base);
  }

  static get errorPageClass() {
    var _WebpackModules$getBy2;

    return this.__errorPageClass ?? (this.__errorPageClass = (_WebpackModules$getBy2 = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("errorPage")) === null || _WebpackModules$getBy2 === void 0 ? void 0 : _WebpackModules$getBy2.errorPage);
  }
  /** Shorthand for `type = "info"` for {@link module:Notices.show} */


  static info(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "info"
    }));
  }
  /** Shorthand for `type = "warning"` for {@link module:Notices.show} */


  static warn(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "warning"
    }));
  }
  /** Shorthand for `type = "error"` for {@link module:Notices.show} */


  static error(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "error"
    }));
  }
  /** Shorthand for `type = "success"` for {@link module:Notices.show} */


  static success(content, options = {}) {
    return this.show(content, Object.assign({}, options, {
      type: "success"
    }));
  }

  static createElement(type, options = {}, ...children) {
    const element = document.createElement(type);
    Object.assign(element, options);
    const filteredChildren = children.filter(n => n);
    if (filteredChildren.length > 0) element.append(...filteredChildren);
    return element;
  }

  static joinClassNames(...classNames) {
    return classNames.filter(n => n).join(" ");
  }
  /**
   * Show a notice above discord's chat layer.
   * @param {string} content Content of the notice
   * @param {object} options Options for the notice.
   * @param {string} [options.type="info" | "error" | "warning" | "success"] Type for the notice. Will affect the color.
   * @param {Array<{label: string, onClick: (immediately?: boolean = false) => void}>} [options.buttons] Buttons that should be added next to the notice text.
   * @param {number} [options.timeout=0] Timeout until the toast is closed. Won't fire if it's set to 0;
   * @returns {(immediately?: boolean = false) => void}
   */


  static show(content, options = {}) {
    const {
      type,
      buttons = [],
      timeout = 0,
      onClose = () => {}
    } = options;
    const haveContainer = this.ensureContainer();
    if (!haveContainer) return;

    const closeNotification = function (immediately = false) {
      onClose === null || onClose === void 0 ? void 0 : onClose(); // Immediately remove the notice without adding the closing class.

      if (immediately) return noticeElement.remove();
      noticeElement.classList.add("bd-notice-closing");
      setTimeout(() => {
        noticeElement.remove();
      }, 300);
    };

    const noticeElement = this.createElement("div", {
      className: this.joinClassNames("bd-notice", type && `bd-notice-${type}`)
    }, this.createElement("div", {
      className: "bd-notice-close",
      onclick: closeNotification.bind(null, false)
    }), this.createElement("span", {
      className: "bd-notice-content"
    }, content), ...buttons.map(button => {
      if (!button || !button.label || typeof button.onClick !== "function") return null;
      return this.createElement("button", {
        className: "bd-notice-button",
        onclick: button.onClick.bind(null, closeNotification)
      }, button.label);
    }));
    document.getElementById("bd-notices").appendChild(noticeElement);

    if (timeout > 0) {
      setTimeout(closeNotification, timeout);
    }

    return closeNotification;
  }

  static ensureContainer() {
    if (document.getElementById("bd-notices")) return true;
    const container = document.querySelector(`.${this.baseClass}`);
    if (!container) return false;
    const noticeContainer = this.createElement("div", {
      id: "bd-notices"
    });
    container.prepend(noticeContainer);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DOMManager.onRemoved(container, async () => {
      if (!this.errorPageClass) return;
      const element = await new Promise(res => _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DOMManager.onAdded(`.${this.errorPageClass}`, res));
      element.prepend(noticeContainer);
    });
    return true;
  }

}

/***/ }),

/***/ "./src/ui/publicservers/card.jsx":
/*!***************************************!*\
  !*** ./src/ui/publicservers/card.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ServerCard)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

const badge = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
  className: "flowerStarContainer-3zDVtj verified-1eC5dy background-2uufRq guildBadge-RlDbED",
  style: {
    width: "16px",
    height: "16px"
  }
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
  "aria-label": "Verified & Partnered",
  className: "flowerStar-1GeTsn",
  "aria-hidden": "false",
  width: "16",
  height: "16",
  viewBox: "0 0 16 15.2"
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
  fill: "currentColor",
  fillRule: "evenodd",
  d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
})), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
  className: "childContainer-1wxZNh"
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
  className: "icon-1ihkOt",
  "aria-hidden": "false",
  width: "16",
  height: "16",
  viewBox: "0 0 16 15.2"
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
  d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
  fill: "currentColor"
}))));
class ServerCard extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    if (!this.props.server.iconUrl) this.props.server.iconUrl = this.props.defaultAvatar();
    this.state = {
      joined: this.props.joined
    };
    this.join = this.join.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  render() {
    const {
      server
    } = this.props;
    const addedDate = new Date(server.insertDate * 1000); // Convert from unix timestamp

    const buttonText = typeof this.state.joined == "string" ? `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.joining}...` : this.state.joined ? _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.joined : _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.join;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-card",
      role: "button",
      tabIndex: "0",
      onClick: this.join
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-header"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-splash-container"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", {
      src: server.iconUrl,
      onError: this.handleError,
      className: "bd-server-splash"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("img", {
      src: server.iconUrl,
      onError: this.handleError,
      className: "bd-server-icon"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-info"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-title"
    }, server.pinned && badge, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-name"
    }, server.name), this.state.joined && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-tag"
    }, buttonText)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-description"
    }, server.description), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-footer"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-dot"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-text"
    }, server.members.toLocaleString(), " Members")), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-dot"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-server-count-text"
    }, "Added ", addedDate.toLocaleDateString())))));
  }

  handleError() {
    this.props.server.iconUrl = this.props.defaultAvatar();
  }

  async join() {
    if (this.state.joined) return this.props.navigateTo(this.props.server.identifier);
    this.setState({
      joined: "joining"
    });
    const didJoin = await this.props.join(this.props.server.identifier, this.props.server.nativejoin);
    this.setState({
      joined: didJoin
    });
  }

}

/***/ }),

/***/ "./src/ui/publicservers/menu.js":
/*!**************************************!*\
  !*** ./src/ui/publicservers/menu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PublicServers)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
/* harmony import */ var _settings_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings/title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card */ "./src/ui/publicservers/card.jsx");
/* harmony import */ var _blankslates_noresults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blankslates/noresults */ "./src/ui/blankslates/noresults.jsx");
/* harmony import */ var _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../structs/psconnection */ "./src/structs/psconnection.js");
/* harmony import */ var _settings_components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../settings/components/search */ "./src/ui/settings/components/search.jsx");
/* harmony import */ var _icons_previous__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/previous */ "./src/ui/icons/previous.jsx");
/* harmony import */ var _icons_next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/next */ "./src/ui/icons/next.jsx");









const SettingsView = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByPrototypes("renderSidebar");
const GuildActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("transitionToGuildSync");
const LayerManager = {
  pushLayer(component) {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_PUSH",
      component
    });
  },

  popLayer() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_POP"
    });
  },

  popAllLayers() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_POP_ALL"
    });
  }

};
const EMPTY_RESULTS = {
  servers: [],
  size: 0,
  total: 0,
  page: 1,
  numPages: 1
};
class PublicServers extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: "Featured",
      query: "",
      loading: true,
      user: null,
      results: Object.assign({}, EMPTY_RESULTS)
    };
    this.featured = [];
    this.popular = [];
    this.keywords = [];
    this.changeTab = this.changeTab.bind(this);
    this.searchKeyDown = this.searchKeyDown.bind(this);
    this.connect = this.connect.bind(this);
    this.loadPreviousPage = this.loadPreviousPage.bind(this);
    this.loadNextPage = this.loadNextPage.bind(this);
    this.join = this.join.bind(this);
    this.navigateTo = this.navigateTo.bind(this);
  }

  componentDidMount() {
    this.getDashboard();
    this.checkConnection();
  }

  async checkConnection() {
    const userData = await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].checkConnection();
    if (!userData) return this.setState({
      user: null
    });
    this.setState({
      user: userData
    });
  }

  async getDashboard() {
    const dashboardData = await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].getDashboard();
    this.featured = dashboardData.featured;
    this.popular = dashboardData.popular;
    this.keywords = dashboardData.keywords;
    this.setState({
      loading: false
    });
    this.changeTab(this.state.tab);
    if (!this.keywords || !this.keywords.length) _modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connectionError, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connectionErrorMessage);
  }

  async connect() {
    await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].connect();
    this.checkConnection();
  }

  searchKeyDown(e) {
    if (this.state.loading || e.key !== "Enter") return;
    const term = e.target.value;
    if (this.state.tab == "Featured" || this.state.tab == "Popular") this.setState({
      tab: "All"
    }, () => this.search(term));else this.search(term);
  }

  async search(term = "", page = 1) {
    this.setState({
      query: term,
      loading: true
    });
    const results = await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].search({
      term,
      keyword: this.state.tab == "All" || this.state.tab == "Featured" || this.state.tab == "Popular" ? "" : this.state.tab,
      page
    });
    if (!results) return this.setState({
      results: Object.assign({}, EMPTY_RESULTS)
    });
    this.setState({
      loading: false,
      results
    });
  }

  async changeTab(id) {
    if (this.state.loading) return;
    await new Promise(resolve => this.setState({
      tab: id
    }, resolve));

    if (this.state.tab === "Featured" || this.state.tab == "Popular") {
      const fakeResults = {
        servers: this[this.state.tab.toLowerCase()],
        size: this[this.state.tab.toLowerCase()].length,
        total: this[this.state.tab.toLowerCase()].length,
        page: 1,
        numPages: 1
      };
      return this.setState({
        results: fakeResults
      });
    }

    this.search();
  }

  get hasPrevious() {
    return this.state.results.page > 1;
  }

  get hasNext() {
    return this.state.results.page < this.state.results.numPages;
  }

  loadPreviousPage() {
    if (this.state.loading || !this.hasPrevious) return;
    this.search(this.state.query, this.state.results.page - 1);
  }

  loadNextPage() {
    if (this.state.loading || !this.hasNext) return;
    this.search(this.state.query, this.state.results.page + 1);
  }

  async join(id, native = false) {
    if (!this.state.user && !native) {
      return _modals__WEBPACK_IMPORTED_MODULE_1__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.notConnected, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connectionRequired, {
        cancelText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.nevermind,
        confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.Modals.okay,
        onConfirm: () => {
          this.connect().then(() => _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].join(id, native));
        }
      });
    }

    return await _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].join(id, native);
  }

  navigateTo(id) {
    if (GuildActions) GuildActions.transitionToGuildSync(id);
    if (LayerManager) LayerManager.popLayer();
  }

  get searchBox() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onKeyDown: this.searchKeyDown,
      className: "bd-server-search",
      placeholder: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.search}...`,
      value: this.state.query
    });
  }

  get title() {
    if (this.state.loading) return `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.loading}...`;

    if (this.state.query) {
      const start = (this.state.results.page - 1) * this.state.results.size + 1;
      const total = this.state.results.total;
      const end = this.hasNext ? start - 1 + this.state.results.size : total;
      let title = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.results.format({
        start,
        end,
        total,
        category: this.state.tab
      });
      if (this.state.query) title += " " + _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.query.format({
        query: this.state.query
      });
      return title;
    }

    return this.state.tab;
  }

  get content() {
    const connectButton = this.state.user ? null : {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connect,
      onClick: this.connect
    };
    const servers = this.state.results.servers.map(server => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_card__WEBPACK_IMPORTED_MODULE_3__["default"], {
        key: server.identifier,
        server: server,
        joined: _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].hasJoined(server.identifier),
        join: this.join,
        navigateTo: this.navigateTo,
        defaultAvatar: _structs_psconnection__WEBPACK_IMPORTED_MODULE_5__["default"].getDefaultAvatar
      });
    });
    let content = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_blankslates_noresults__WEBPACK_IMPORTED_MODULE_4__["default"]);
    if (this.state.loading) content = this.loadingScreen;else if (this.state.results.total) content = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-card-list"
    }, servers);
    return [_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_2__["default"], {
      text: this.title,
      button: connectButton
    }), this.state.results.numPages > 1 && this.pagination, content, this.state.results.numPages > 1 && this.pagination];
  }

  get loadingScreen() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-card-list"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-placeholder-card"
    }));
  }

  get pagination() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-pagination"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      type: "button",
      className: "bd-button bd-pagination-previous",
      disabled: !this.hasPrevious,
      onClick: this.loadPreviousPage
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_previous__WEBPACK_IMPORTED_MODULE_7__["default"], null)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", {
      className: "bd-pagination-info"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.pagination.format({
      page: this.state.results.page,
      count: this.state.results.numPages
    })), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      type: "button",
      className: "bd-button bd-pagination-next",
      disabled: !this.hasNext,
      onClick: this.loadNextPage
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_next__WEBPACK_IMPORTED_MODULE_8__["default"], null)));
  }

  get connection() {
    const {
      user
    } = this.state;
    if (!user) return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-connection"
    });
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      id: "bd-connection"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-footnote"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.connection.format(user)), _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      type: "button",
      className: "bd-button bd-button-reconnect",
      onClick: this.connect
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.reconnect));
  }

  render() {
    const keywords = this.keywords.map(name => ({
      section: name,
      label: name,
      element: () => this.content
    }));
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(SettingsView, {
      onClose: this.props.close,
      onSetSection: this.changeTab,
      section: this.state.tab,
      sections: [{
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.search
      }, {
        section: "CUSTOM",
        element: () => this.searchBox
      }, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.categories
      }, {
        section: "All",
        label: "All",
        element: () => this.content
      }, {
        section: "Featured",
        label: "Featured",
        element: () => this.content
      }, {
        section: "Popular",
        label: "Popular",
        element: () => this.content
      }, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Strings.PublicServers.keywords
      }, ...keywords, {
        section: "DIVIDER"
      }, {
        section: "HEADER",
        label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("a", {
          href: "https://discordservers.com",
          target: "_blank"
        }, "DiscordServers.com")
      }, {
        section: "DIVIDER"
      }, {
        section: "CUSTOM",
        element: () => this.connection
      }],
      theme: "dark"
    });
  }

}

/***/ }),

/***/ "./src/ui/settings.js":
/*!****************************!*\
  !*** ./src/ui/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _settings_addonlist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings/addonlist */ "./src/ui/settings/addonlist.jsx");
/* harmony import */ var _settings_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/group */ "./src/ui/settings/group.jsx");
/* harmony import */ var _settings_title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _settings_sidebarheader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/sidebarheader */ "./src/ui/settings/sidebarheader.jsx");
/* harmony import */ var _modules_webpackmodules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/webpackmodules */ "./src/modules/webpackmodules.js");






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new class SettingsRenderer {
  constructor() {
    this.patchSections();
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Events.on("strings-updated", this.forceUpdate);
  }

  onDrawerToggle(collection, group, state) {
    const drawerStates = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DataStore.getBDData("drawerStates") || {};
    if (!drawerStates[collection]) drawerStates[collection] = {};
    drawerStates[collection][group] = state;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DataStore.setBDData("drawerStates", drawerStates);
  }

  getDrawerState(collection, group, defaultValue) {
    const drawerStates = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.DataStore.getBDData("drawerStates") || {};
    if (!drawerStates[collection]) return defaultValue;
    if (!drawerStates[collection].hasOwnProperty(group)) return defaultValue;
    return drawerStates[collection][group];
  }

  onChange(onChange) {
    return (collection, category, id) => {
      const before = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.collections.length + _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.panels.length;
      onChange(collection, category, id);
      const after = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.collections.length + _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.panels.length;
      if (before != after) setTimeout(this.forceUpdate.bind(this), 50);
    };
  }

  buildSettingsPanel(id, title, config, state, onChange, button = null) {
    config.forEach(section => {
      section.settings.forEach(item => item.value = state[section.id][item.id]);
    });
    return this.getSettingsPanel(id, title, config, this.onChange(onChange), button);
  }

  getSettingsPanel(id, title, groups, onChange, button = null) {
    return [_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      text: title,
      button: button
    }), groups.map(section => {
      return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_group__WEBPACK_IMPORTED_MODULE_2__["default"], Object.assign({}, section, {
        onChange: onChange,
        onDrawerToggle: state => this.onDrawerToggle(id, section.id, state),
        shown: this.getDrawerState(id, section.id, section.hasOwnProperty("shown") ? section.shown : true)
      }));
    })];
  }

  getAddonPanel(title, addonList, addonState, options = {}) {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_settings_addonlist__WEBPACK_IMPORTED_MODULE_1__["default"], Object.assign({}, {
      title: title,
      addonList: addonList,
      addonState: addonState
    }, options));
  }

  async patchSections() {
    const UserSettings = await _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getLazy(_modules_webpackmodules__WEBPACK_IMPORTED_MODULE_5__.Filters.byPrototypeFields(["getPredicateSections"]));
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Patcher.after("SettingsManager", UserSettings.prototype, "getPredicateSections", (thisObject, args, returnValue) => {
      let location = returnValue.findIndex(s => s.section.toLowerCase() == "changelog") - 1;
      if (location < 0) return;

      const insert = section => {
        returnValue.splice(location, 0, section);
        location++;
      };

      insert({
        section: "DIVIDER"
      }); // Header

      insert({
        section: "CUSTOM",
        element: _settings_sidebarheader__WEBPACK_IMPORTED_MODULE_4__["default"]
      });

      for (const collection of _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.collections) {
        if (collection.disabled) continue;
        insert({
          section: collection.name,
          label: collection.name.toString(),
          className: `bd-${collection.id}-tab`,
          element: () => this.buildSettingsPanel(collection.id, collection.name, collection.settings, _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.state[collection.id], _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.onSettingChange.bind(_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings, collection.id), collection.button ? collection.button : null)
        });
      }

      for (const panel of _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Settings.panels.sort((a, b) => a.order > b.order ? 1 : -1)) {
        if (panel.clickListener) panel.onClick = event => panel.clickListener(thisObject, event, returnValue);
        if (!panel.className) panel.className = `bd-${panel.id}-tab`;
        if (typeof panel.label !== "string") panel.label = panel.label.toString();
        insert(panel);
      }
    });
  }

  forceUpdate() {
    var _WebpackModules$getBy;

    const viewClass = (_WebpackModules$getBy = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("standardSidebarView")) === null || _WebpackModules$getBy === void 0 ? void 0 : _WebpackModules$getBy.standardSidebarView.split(" ")[0];
    const node = document.querySelector(`.${viewClass}`);
    if (!node) return;
    const stateNode = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.Utilities.findInTree(node === null || node === void 0 ? void 0 : node.__reactFiber$, m => m && m.getPredicateSections, {
      walkable: ["return", "stateNode"]
    });
    if (stateNode) stateNode.forceUpdate();
  }

}());

/***/ }),

/***/ "./src/ui/settings/addoncard.jsx":
/*!***************************************!*\
  !*** ./src/ui/settings/addoncard.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonCard)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _structs_markdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../structs/markdown */ "./src/structs/markdown.js");
/* harmony import */ var _icons_edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/edit */ "./src/ui/icons/edit.jsx");
/* harmony import */ var _icons_delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/delete */ "./src/ui/icons/delete.jsx");
/* harmony import */ var _icons_cog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/cog */ "./src/ui/icons/cog.jsx");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/switch */ "./src/ui/settings/components/switch.jsx");
/* harmony import */ var _icons_github__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/github */ "./src/ui/icons/github.jsx");
/* harmony import */ var _icons_dollarsign__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/dollarsign */ "./src/ui/icons/dollarsign.jsx");
/* harmony import */ var _icons_globe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/globe */ "./src/ui/icons/globe.jsx");
/* harmony import */ var _icons_patreon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../icons/patreon */ "./src/ui/icons/patreon.jsx");
/* harmony import */ var _icons_support__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../icons/support */ "./src/ui/icons/support.jsx");
/* harmony import */ var _icons_extension__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../icons/extension */ "./src/ui/icons/extension.jsx");
/* harmony import */ var _icons_error__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../icons/error */ "./src/ui/icons/error.jsx");
/* harmony import */ var _icons_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../icons/theme */ "./src/ui/icons/theme.jsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../toasts */ "./src/ui/toasts.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


















const LinkIcons = {
  website: _icons_globe__WEBPACK_IMPORTED_MODULE_9__["default"],
  source: _icons_github__WEBPACK_IMPORTED_MODULE_7__["default"],
  invite: _icons_support__WEBPACK_IMPORTED_MODULE_11__["default"],
  donate: _icons_dollarsign__WEBPACK_IMPORTED_MODULE_8__["default"],
  patreon: _icons_patreon__WEBPACK_IMPORTED_MODULE_10__["default"]
};
const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByPrototypes("renderTooltip");
const LayerManager = {
  pushLayer(component) {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_PUSH",
      component
    });
  },

  popLayer() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_POP"
    });
  },

  popAllLayers() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.Dispatcher.dispatch({
      type: "LAYER_POP_ALL"
    });
  }

};
const UserStore = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getCurrentUser");
const ChannelStore = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getDMFromUserId");
const PrivateChannelActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("openPrivateChannel");
const ChannelActions = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("selectPrivateChannel");
class AddonCard extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.settingsPanel = "";
    this.panelRef = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createRef();
    this.onChange = this.onChange.bind(this);
    this.showSettings = this.showSettings.bind(this);
    this.messageAuthor = this.messageAuthor.bind(this);
  }

  showSettings() {
    if (!this.props.hasSettings || !this.props.enabled) return;
    const name = this.getString(this.props.addon.name);

    try {
      _modals__WEBPACK_IMPORTED_MODULE_15__["default"].showAddonSettingsModal(name, this.props.getSettingsPanel());
    } catch (err) {
      _toasts__WEBPACK_IMPORTED_MODULE_16__["default"].show(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.settingsError.format({
        name
      }), {
        type: "error"
      });
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("Addon Settings", "Unable to get settings panel for " + name + ".", err);
    }
  }

  getString(value) {
    return typeof value == "string" ? value : value.toString();
  }

  onChange() {
    this.props.onChange && this.props.onChange(this.props.addon.id);
    this.props.enabled = !this.props.enabled;
    this.forceUpdate();
  }

  messageAuthor() {
    if (!this.props.addon.authorId) return;
    if (LayerManager) LayerManager.popLayer();
    if (!UserStore || !ChannelActions || !ChannelStore || !PrivateChannelActions) return;
    const selfId = UserStore.getCurrentUser().id;
    if (selfId == this.props.addon.authorId) return;
    const privateChannelId = ChannelStore.getDMFromUserId(this.props.addon.authorId);
    if (privateChannelId) return ChannelActions.selectPrivateChannel(privateChannelId);
    PrivateChannelActions.openPrivateChannel(selfId, this.props.addon.authorId);
  }

  buildTitle(name, version, author) {
    const authorArray = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.byline.split(/({{[A-Za-z]+}})/);
    const authorComponent = author.link || author.id ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("a", {
      className: "bd-link bd-link-website",
      href: author.link || null,
      onClick: this.messageAuthor,
      target: "_blank",
      rel: "noopener noreferrer"
    }, author.name) : /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", {
      className: "bd-author"
    }, author.name);
    const authorIndex = authorArray.findIndex(s => s == "{{author}}");
    if (authorIndex) authorArray[authorIndex] = authorComponent;
    return [_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-name"
    }, name), _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-meta"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", {
      className: "bd-version"
    }, `v${version}`), ...authorArray)];
  }

  buildLink(which) {
    const url = this.props.addon[which];
    if (!url) return null;
    const icon = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(LinkIcons[which]);
    const link = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("a", {
      className: "bd-link bd-link-website",
      href: url,
      target: "_blank",
      rel: "noopener noreferrer"
    }, icon);

    if (which == "invite") {
      link.props.onClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
        let code = url;
        const tester = /\.gg\/(.*)$/;
        if (tester.test(code)) code = code.match(tester)[1];
        LayerManager.popLayer();
        _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DiscordModules.InviteActions.acceptInviteAndTransitionToInviteChannel({
          inviteKey: code
        });
      };
    }

    return this.makeButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons[which], link);
  }

  get controls() {
    // {this.props.hasSettings && <button onClick={this.showSettings} className="bd-button bd-button-addon-settings" disabled={!this.props.enabled}>{Strings.Addons.addonSettings}</button>}
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-controls"
    }, this.props.hasSettings && this.makeControlButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.addonSettings, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_cog__WEBPACK_IMPORTED_MODULE_5__["default"], {
      size: "20px"
    }), this.showSettings, {
      disabled: !this.props.enabled
    }), this.props.editAddon && this.makeControlButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.editAddon, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_edit__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "20px"
    }), this.props.editAddon), this.props.deleteAddon && this.makeControlButton(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.deleteAddon, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_delete__WEBPACK_IMPORTED_MODULE_4__["default"], {
      size: "20px"
    }), this.props.deleteAddon, {
      danger: true
    }));
  }

  get footer() {
    const links = ["website", "source", "invite", "donate", "patreon"];
    const linkComponents = links.map(this.buildLink.bind(this)).filter(c => c); // linkComponents.map((comp, i) => i < linkComponents.length - 1 ? [comp, " | "] : comp).flat()

    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-footer"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("span", {
      className: "bd-links"
    }, linkComponents), this.controls);
  }

  makeButton(title, children, action) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: title
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", _extends({}, props, {
        className: "bd-addon-button",
        onClick: action
      }), children);
    });
  }

  makeControlButton(title, children, action, {
    danger = false,
    disabled = false
  } = {}) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: title
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", _extends({}, props, {
        className: "bd-button bd-addon-button" + (danger ? " bd-button-danger" : "") + (disabled ? " bd-button-disabled" : ""),
        onClick: action
      }), children);
    });
  }

  render() {
    const addon = this.props.addon;
    const name = this.getString(addon.name);
    const author = this.getString(addon.author);
    const description = this.getString(addon.description);
    const version = this.getString(addon.version);
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      id: `${addon.id}-card`,
      className: "bd-addon-card" + (this.props.disabled ? " bd-addon-card-disabled" : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-addon-header"
    }, this.props.type === "plugin" ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_extension__WEBPACK_IMPORTED_MODULE_12__["default"], {
      size: "18px",
      className: "bd-icon"
    }) : /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_theme__WEBPACK_IMPORTED_MODULE_14__["default"], {
      size: "18px",
      className: "bd-icon"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-title"
    }, this.buildTitle(name, version, {
      name: author,
      id: this.props.addon.authorId,
      link: this.props.addon.authorLink
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disabled: this.props.disabled,
      checked: this.props.enabled,
      onChange: this.onChange
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-description-wrap"
    }, this.props.disabled && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "banner banner-danger"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_error__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: "bd-icon"
    }), `An error was encountered while trying to load this ${this.props.type}.`), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-description"
    }, _structs_markdown__WEBPACK_IMPORTED_MODULE_2__["default"].parseToReact(description))), this.footer);
  }

}
const originalRender = AddonCard.prototype.render;
Object.defineProperty(AddonCard.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("AddonCard", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/settings/addonlist.jsx":
/*!***************************************!*\
  !*** ./src/ui/settings/addonlist.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddonList)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _addoncard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addoncard */ "./src/ui/settings/addoncard.jsx");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/dropdown */ "./src/ui/settings/components/dropdown.jsx");
/* harmony import */ var _components_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search */ "./src/ui/settings/components/search.jsx");
/* harmony import */ var _errorboundary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../errorboundary */ "./src/ui/errorboundary.jsx");
/* harmony import */ var _icons_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../icons/list */ "./src/ui/icons/list.jsx");
/* harmony import */ var _icons_grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../icons/grid */ "./src/ui/icons/grid.jsx");
/* harmony import */ var _blankslates_noresults__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blankslates/noresults */ "./src/ui/blankslates/noresults.jsx");
/* harmony import */ var _blankslates_emptyimage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blankslates/emptyimage */ "./src/ui/blankslates/emptyimage.jsx");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByPrototypes("renderTooltip");
class AddonList extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      sort: this.getControlState("sort", "name"),
      ascending: this.getControlState("ascending", true),
      view: this.getControlState("view", "list")
    };
    this.sort = this.sort.bind(this);
    this.reverse = this.reverse.bind(this);
    this.search = this.search.bind(this);
    this.update = this.update.bind(this);
    this.listView = this.listView.bind(this);
    this.gridView = this.gridView.bind(this);
    this.openFolder = this.openFolder.bind(this);
  }

  componentDidMount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`${this.props.prefix}-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`${this.props.prefix}-unloaded`, this.update);
  }

  componentWillUnmount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`${this.props.prefix}-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`${this.props.prefix}-unloaded`, this.update);
  }

  onControlChange(control, value) {
    const addonlistControls = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.getBDData("addonlistControls") || {};
    if (!addonlistControls[this.props.type]) addonlistControls[this.props.type] = {};
    addonlistControls[this.props.type][control] = value;
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.setBDData("addonlistControls", addonlistControls);
  }

  getControlState(control, defaultValue) {
    const addonlistControls = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DataStore.getBDData("addonlistControls") || {};
    if (!addonlistControls[this.props.type]) return defaultValue;
    if (!addonlistControls[this.props.type].hasOwnProperty(control)) return defaultValue;
    return addonlistControls[this.props.type][control];
  }

  update() {
    this.forceUpdate();
  }

  reload() {
    if (this.props.refreshList) this.props.refreshList();
    this.forceUpdate();
  }

  listView() {
    this.changeView("list");
  }

  gridView() {
    this.changeView("grid");
  }

  changeView(view) {
    this.onControlChange("view", view);
    this.setState({
      view
    });
  }

  reverse(value) {
    this.onControlChange("ascending", value);
    this.setState({
      ascending: value
    });
  }

  sort(value) {
    this.onControlChange("sort", value);
    this.setState({
      sort: value
    });
  }

  search(event) {
    this.setState({
      query: event.target.value.toLocaleLowerCase()
    });
  }

  openFolder() {
    const shell = (__webpack_require__(/*! electron */ "electron").shell);

    const open = shell.openItem || shell.openPath;
    open(this.props.folder);
  }

  get sortOptions() {
    return [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.name,
      value: "name"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.author,
      value: "author"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.version,
      value: "version"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.added,
      value: "added"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.modified,
      value: "modified"
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.isEnabled,
      value: "isEnabled"
    }];
  }

  get directions() {
    return [{
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.ascending,
      value: true
    }, {
      label: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.descending,
      value: false
    }];
  }

  get emptyImage() {
    const message = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.blankSlateMessage.format({
      link: `https://betterdiscord.app/${this.props.type}s`,
      type: this.props.type
    }).toString();
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_blankslates_emptyimage__WEBPACK_IMPORTED_MODULE_11__["default"], {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.blankSlateHeader.format({
        type: this.props.type
      }),
      message: message
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", {
      className: "bd-button",
      onClick: this.openFolder
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.openFolder.format({
      type: this.props.type
    })));
  }

  makeControlButton(title, children, action, selected = false) {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: title
    }, props => {
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", _extends({}, props, {
        className: "bd-button bd-view-button" + (selected ? " selected" : ""),
        onClick: action
      }), children);
    });
  }

  render() {
    const {
      title,
      folder,
      addonList,
      addonState,
      onChange,
      reload
    } = this.props;
    const button = folder ? {
      title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.openFolder.format({
        type: title
      }),
      onClick: this.openFolder
    } : null;
    let sortedAddons = addonList.sort((a, b) => {
      const sortByEnabled = this.state.sort === "isEnabled";
      const first = sortByEnabled ? addonState[a.id] : a[this.state.sort];
      const second = sortByEnabled ? addonState[b.id] : b[this.state.sort];

      const stringSort = (str1, str2) => str1.toLocaleLowerCase().localeCompare(str2.toLocaleLowerCase());

      if (typeof first == "string") return stringSort(first, second);
      if (typeof first == "boolean") return first === second ? stringSort(a.name, b.name) : first ? -1 : 1;
      if (first > second) return 1;
      if (second > first) return -1;
      return 0;
    });
    if (!this.state.ascending) sortedAddons.reverse();

    if (this.state.query) {
      sortedAddons = sortedAddons.filter(addon => {
        let matches = addon.name.toLocaleLowerCase().includes(this.state.query);
        matches = matches || addon.author.toLocaleLowerCase().includes(this.state.query);
        matches = matches || addon.description.toLocaleLowerCase().includes(this.state.query);
        if (!matches) return false;
        return true;
      });
    }

    const renderedCards = sortedAddons.map(addon => {
      const hasSettings = addon.instance && typeof addon.instance.getSettingsPanel === "function";
      const getSettings = hasSettings && addon.instance.getSettingsPanel.bind(addon.instance);
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_errorboundary__WEBPACK_IMPORTED_MODULE_7__["default"], null, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_addoncard__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disabled: addon.partial,
        type: this.props.type,
        editAddon: this.editAddon.bind(this, addon.id),
        deleteAddon: this.deleteAddon.bind(this, addon.id),
        key: addon.id,
        enabled: addonState[addon.id],
        addon: addon,
        onChange: onChange,
        reload: reload,
        hasSettings: hasSettings,
        getSettingsPanel: getSettings
      }));
    });
    const hasAddonsInstalled = this.props.addonList.length !== 0;
    const isSearching = !!this.state.query;
    const hasResults = sortedAddons.length !== 0;
    return [/*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_title__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: "title",
      text: title,
      button: button
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-controls bd-addon-controls"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_search__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onChange: this.search,
      placeholder: `${_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.search.format({
        type: this.props.title
      })}...`
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-controls-advanced"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-addon-dropdowns"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-select-wrapper"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", {
      className: "bd-label"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.sortBy, ":"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: this.sortOptions,
      value: this.state.sort,
      onChange: this.sort,
      style: "transparent"
    })), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-select-wrapper"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("label", {
      className: "bd-label"
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Sorting.order, ":"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      options: this.directions,
      value: this.state.ascending,
      onChange: this.reverse,
      style: "transparent"
    }))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-addon-views"
    }, this.makeControlButton("List View", /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_list__WEBPACK_IMPORTED_MODULE_8__["default"], null), this.listView, this.state.view === "list"), this.makeControlButton("Grid View", /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_grid__WEBPACK_IMPORTED_MODULE_9__["default"], null), this.gridView, this.state.view === "grid")))), !hasAddonsInstalled && this.emptyImage, isSearching && !hasResults && hasAddonsInstalled && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_blankslates_noresults__WEBPACK_IMPORTED_MODULE_10__["default"], null), hasAddonsInstalled && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      key: "addonList",
      className: "bd-addon-list" + (this.state.view == "grid" ? " bd-grid-view" : "")
    }, renderedCards)];
  }

  editAddon(id) {
    if (this.props.editAddon) this.props.editAddon(id);
  }

  async deleteAddon(id) {
    const addon = this.props.addonList.find(a => a.id == id);
    const shouldDelete = await this.confirmDelete(addon);
    if (!shouldDelete) return;
    if (this.props.deleteAddon) this.props.deleteAddon(addon);
  }

  confirmDelete(addon) {
    return new Promise(resolve => {
      _modals__WEBPACK_IMPORTED_MODULE_2__["default"].showConfirmationModal(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Modals.confirmAction, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.confirmDelete.format({
        name: addon.name
      }), {
        danger: true,
        confirmText: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Addons.deleteAddon,
        onConfirm: () => {
          resolve(true);
        },
        onCancel: () => {
          resolve(false);
        }
      });
    });
  }

}
const originalRender = AddonList.prototype.render;
Object.defineProperty(AddonList.prototype, "render", {
  enumerable: false,
  configurable: false,
  set: function () {
    _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].warn("AddonList", "Addon policy for plugins #5 https://github.com/BetterDiscord/BetterDiscord/wiki/Addon-Policies#plugins");
  },
  get: () => originalRender
});

/***/ }),

/***/ "./src/ui/settings/components/color.jsx":
/*!**********************************************!*\
  !*** ./src/ui/settings/components/color.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Color)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


const TooltipWrapper = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByPrototypes("renderTooltip");
const Checkmark = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.memo(props => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", _extends({
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, props), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
  fillRule: "evenodd",
  clipRule: "evenodd",
  fill: props.color ?? "#fff",
  d: "M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z"
})));
const Dropper = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.memo(props => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", _extends({
  width: "14",
  height: "14",
  viewBox: "0 0 16 16"
}, props), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("g", {
  fill: "none"
}, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
  d: "M-4-4h24v24H-4z"
}), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", {
  fill: props.color ?? "#fff",
  d: "M14.994 1.006C13.858-.257 11.904-.3 10.72.89L8.637 2.975l-.696-.697-1.387 1.388 5.557 5.557 1.387-1.388-.697-.697 1.964-1.964c1.13-1.13 1.3-2.985.23-4.168zm-13.25 10.25c-.225.224-.408.48-.55.764L.02 14.37l1.39 1.39 2.35-1.174c.283-.14.54-.33.765-.55l4.808-4.808-2.776-2.776-4.813 4.803z"
}))));
const defaultColors = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367, 15105570, 15158332, 9807270, 6323595, 1146986, 2067276, 2123412, 7419530, 11342935, 12745742, 11027200, 10038562, 9936031, 5533306];

const resolveColor = (color, hex = true) => {
  switch (typeof color) {
    case hex && "number":
      return `#${color.toString(16)}`;

    case !hex && "string":
      return Number.parseInt(color.replace("#", ""), 16);

    case !hex && "number":
      return color;

    case hex && "string":
      return color;

    default:
      return color;
  }
};

const getRGB = color => {
  let result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color);
  if (result) return [parseInt(result[1]), parseInt(result[2]), parseInt(result[3])];
  result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)%\s*,\s*([0-9]+(?:\.[0-9]+)?)%\s*,\s*([0-9]+(?:\.[0-9]+)?)%\s*\)/.exec(color);
  if (result) return [parseFloat(result[1]) * 2.55, parseFloat(result[2]) * 2.55, parseFloat(result[3]) * 2.55];
  result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color);
  if (result) return [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)];
  result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color);
  if (result) return [parseInt(result[1] + result[1], 16), parseInt(result[2] + result[2], 16), parseInt(result[3] + result[3], 16)];
};

const luma = color => {
  const rgb = typeof color === "string" ? getRGB(color) : color;
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]; // SMPTE C, Rec. 709 weightings
};

const getContrastColor = color => {
  return luma(color) >= 165 ? "#000" : "#fff";
};

class Color extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) this.props.onChange(resolveColor(e.target.value));
  }

  render() {
    const intValue = resolveColor(this.state.value, false);
    const {
      colors = defaultColors,
      defaultValue
    } = this.props;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-color-picker-container"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-color-picker-controls"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TooltipWrapper, {
      text: "Default",
      position: "bottom"
    }, props => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", _extends({}, props, {
      className: "bd-color-picker-default",
      style: {
        backgroundColor: resolveColor(defaultValue)
      },
      onClick: () => this.onChange({
        target: {
          value: defaultValue
        }
      })
    }), intValue === resolveColor(defaultValue, false) ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Checkmark, {
      width: "25",
      height: "25"
    }) : null)), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(TooltipWrapper, {
      text: "Custom Color",
      position: "bottom"
    }, props => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-color-picker-custom"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Dropper, {
      color: getContrastColor(resolveColor(this.state.value, true))
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", _extends({}, props, {
      style: {
        backgroundColor: resolveColor(this.state.value)
      },
      type: "color",
      className: "bd-color-picker",
      value: resolveColor(this.state.value),
      onChange: this.onChange
    }))))), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-color-picker-swatch"
    }, colors.map((int, index) => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      key: index,
      className: "bd-color-picker-swatch-item",
      style: {
        backgroundColor: resolveColor(int)
      },
      onClick: () => this.onChange({
        target: {
          value: int
        }
      })
    }, intValue === int ? /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(Checkmark, {
      color: getContrastColor(resolveColor(this.state.value, true))
    }) : null))));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/dropdown.jsx":
/*!*************************************************!*\
  !*** ./src/ui/settings/components/dropdown.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Select)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_downarrow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/downarrow */ "./src/ui/icons/downarrow.jsx");


class Select extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: this.props.hasOwnProperty("value") ? this.props.value : this.props.options[0].value
    };
    this.dropdown = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.onChange = this.onChange.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();
    event.stopPropagation();
    this.setState(state => ({
      open: !state.open
    }), () => {
      if (!this.state.open) return;
      document.addEventListener("click", this.hideMenu);
    });
  }

  hideMenu() {
    this.setState({
      open: false
    }, () => {
      document.removeEventListener("click", this.hideMenu);
    });
  }

  onChange(value) {
    this.setState({
      value
    });
    if (this.props.onChange) this.props.onChange(value);
  }

  get selected() {
    return this.props.options.find(o => o.value == this.state.value);
  }

  get options() {
    const selected = this.selected;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-select-options"
    }, this.props.options.map(opt => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-select-option${selected.value == opt.value ? " selected" : ""}`,
      onClick: this.onChange.bind(this, opt.value)
    }, opt.label)));
  }

  render() {
    const style = this.props.style == "transparent" ? " bd-select-transparent" : "";
    const isOpen = this.state.open ? " menu-open" : "";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-select${style}${isOpen}`,
      onClick: this.showMenu,
      ref: this.dropdown
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-select-value"
    }, this.selected.label), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_downarrow__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "bd-select-arrow"
    }), this.state.open && this.options);
  }

}

/***/ }),

/***/ "./src/ui/settings/components/item.jsx":
/*!*********************************************!*\
  !*** ./src/ui/settings/components/item.jsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingItem)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class SettingItem extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-item" + (this.props.inline ? " inline" : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-header"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", {
      htmlFor: this.props.id,
      className: "bd-setting-title"
    }, this.props.name), this.props.inline && this.props.children), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-note"
    }, this.props.note), !this.props.inline && this.props.children, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-setting-divider"
    }));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/keybind.jsx":
/*!************************************************!*\
  !*** ./src/ui/settings/components/keybind.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keybind)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/keyboard */ "./src/ui/icons/keyboard.jsx");
/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../icons/close */ "./src/ui/icons/close.jsx");



class Keybind extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      isRecording: false
    };
    this.onClick = this.onClick.bind(this);
    this.keyHandler = this.keyHandler.bind(this);
    this.clearKeybind = this.clearKeybind.bind(this);
    this.accum = [];
    this.max = this.props.max ?? 2;
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keyHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.keyHandler);
  }
  /**
   * 
   * @param {KeyboardEvent} event 
   */


  keyHandler(event) {
    if (!this.state.isRecording) return;
    event.stopImmediatePropagation();
    event.stopPropagation();
    event.preventDefault();
    if (event.repeat || this.accum.includes(event.key)) return;
    this.accum.push(event.key);

    if (this.accum.length == this.max) {
      if (this.props.onChange) this.props.onChange(this.accum);
      this.setState({
        value: this.accum.slice(0),
        isRecording: false
      }, () => this.accum.splice(0, this.accum.length));
    }
  }
  /**
   * 
   * @param {MouseEvent} e 
   */


  onClick(e) {
    var _e$target, _e$target$className, _e$target$className$i, _e$target2, _e$target2$closest, _e$target2$closest$cl;

    if ((_e$target = e.target) !== null && _e$target !== void 0 && (_e$target$className = _e$target.className) !== null && _e$target$className !== void 0 && (_e$target$className$i = _e$target$className.includes) !== null && _e$target$className$i !== void 0 && _e$target$className$i.call(_e$target$className, "bd-keybind-clear") || (_e$target2 = e.target) !== null && _e$target2 !== void 0 && (_e$target2$closest = _e$target2.closest(".bd-button")) !== null && _e$target2$closest !== void 0 && (_e$target2$closest$cl = _e$target2$closest.className) !== null && _e$target2$closest$cl !== void 0 && _e$target2$closest$cl.includes("bd-keybind-clear")) return this.clearKeybind(e);
    this.setState({
      isRecording: !this.state.isRecording
    });
  }
  /**
   * 
   * @param {MouseEvent} event 
   */


  clearKeybind(event) {
    event.stopPropagation();
    event.preventDefault();
    this.accum.splice(0, this.accum.length);
    if (this.props.onChange) this.props.onChange(this.accum);
    this.setState({
      value: this.accum,
      isRecording: false
    });
  }

  display() {
    if (this.state.isRecording) return "Recording...";
    if (!this.state.value.length) return "N/A";
    return this.state.value.join(" + ");
  }

  render() {
    const {
      clearable = true
    } = this.props;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-keybind-wrap" + (this.state.isRecording ? " recording" : ""),
      onClick: this.onClick
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      readOnly: true,
      type: "text",
      className: "bd-keybind-input",
      value: this.display()
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-keybind-controls"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      className: "bd-button bd-keybind-record" + (this.state.isRecording ? " bd-button-danger" : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_keyboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
      size: "24px"
    })), clearable && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      onClick: this.clearKeybind,
      className: "bd-button bd-keybind-clear"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_close__WEBPACK_IMPORTED_MODULE_2__["default"], {
      size: "24px"
    }))));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/number.jsx":
/*!***********************************************!*\
  !*** ./src/ui/settings/components/number.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Number)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class Number extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      onChange: this.onChange,
      type: "number",
      className: "bd-number-input",
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      value: this.state.value
    });
  }

}

/***/ }),

/***/ "./src/ui/settings/components/radio.jsx":
/*!**********************************************!*\
  !*** ./src/ui/settings/components/radio.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Radio)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_radio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/radio */ "./src/ui/icons/radio.jsx");


class Radio extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.options.findIndex(o => o.value === this.props.value)
    };
    this.onChange = this.onChange.bind(this);
    this.renderOption = this.renderOption.bind(this);
  }

  onChange(e) {
    const index = parseInt(e.target.value);
    const newValue = this.props.options[index].value;
    this.setState({
      value: index
    });
    if (this.props.onChange) this.props.onChange(newValue);
  }

  renderOption(opt, index) {
    const isSelected = this.state.value === index;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("label", {
      className: "bd-radio-option" + (isSelected ? " bd-radio-selected" : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      onChange: this.onChange,
      type: "radio",
      name: this.props.name,
      checked: isSelected,
      value: index
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_radio__WEBPACK_IMPORTED_MODULE_1__["default"], {
      className: "bd-radio-icon",
      size: "24",
      checked: isSelected
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-radio-label-wrap"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-radio-label"
    }, opt.name), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-radio-description"
    }, opt.desc || opt.description)));
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-radio-group"
    }, this.props.options.map(this.renderOption));
  }

}
/* <label class="container">
  <input type="radio" name="test" checked="checked">
  <span class="checkmark"></span>
  <div class="test">One<div class="desc">Description</div></div>
</label> */

/***/ }),

/***/ "./src/ui/settings/components/search.jsx":
/*!***********************************************!*\
  !*** ./src/ui/settings/components/search.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Search)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/search */ "./src/ui/icons/search.jsx");


class Search extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) this.props.onChange(e);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-search-wrapper" + (this.props.className ? ` ${this.props.className}` : "")
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      onChange: this.onChange,
      onKeyDown: this.props.onKeyDown,
      type: "text",
      className: "bd-search",
      placeholder: this.props.placeholder,
      maxLength: "50",
      value: this.state.value
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_icons_search__WEBPACK_IMPORTED_MODULE_1__["default"], null));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/slider.jsx":
/*!***********************************************!*\
  !*** ./src/ui/settings/components/slider.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Slider)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class Slider extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    }); // e.target.style.backgroundSize = (e.target.value - this.props.min) * 100 / (this.props.max - this.props.min) + "% 100%";

    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-slider-wrap"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-slider-label"
    }, this.state.value), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      onChange: this.onChange,
      type: "range",
      className: "bd-slider-input",
      min: this.props.min,
      max: this.props.max,
      step: this.props.step,
      value: this.state.value,
      style: {
        backgroundSize: (this.state.value - this.props.min) * 100 / (this.props.max - this.props.min) + "% 100%"
      }
    }));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/switch.jsx":
/*!***********************************************!*\
  !*** ./src/ui/settings/components/switch.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Switch)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class Switch extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    if (this.props.disabled) return;
    this.props.onChange(!this.state.checked);
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const enabledClass = this.props.disabled ? " bd-switch-disabled" : "";
    const checkedClass = this.state.checked ? " bd-switch-checked" : "";
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: `bd-switch` + enabledClass + checkedClass
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      id: this.props.id,
      type: "checkbox",
      disabled: this.props.disabled,
      checked: this.state.checked,
      onChange: this.onChange
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-switch-body"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: "bd-switch-slider",
      viewBox: "0 0 28 20",
      preserveAspectRatio: "xMinYMid meet"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("rect", {
      className: "bd-switch-handle",
      fill: "white",
      x: "4",
      y: "0",
      height: "20",
      width: "20",
      rx: "10"
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("svg", {
      className: "bd-switch-symbol",
      viewBox: "0 0 20 20",
      fill: "none"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", null), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("path", null)))));
  }

}

/***/ }),

/***/ "./src/ui/settings/components/textbox.jsx":
/*!************************************************!*\
  !*** ./src/ui/settings/components/textbox.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Textbox)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../modules/modules.js */ "./src/modules/modules.js");

class Textbox extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      value: e.target.value
    });
    if (this.props.onChange) this.props.onChange(e.target.value);
  }

  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", {
      onChange: this.onChange,
      onKeyDown: this.props.onKeyDown,
      type: "text",
      className: "bd-text-input",
      placeholder: this.props.placeholder,
      maxLength: this.props.maxLength,
      value: this.state.value
    });
  }

}

/***/ }),

/***/ "./src/ui/settings/drawer.jsx":
/*!************************************!*\
  !*** ./src/ui/settings/drawer.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Drawer)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../divider */ "./src/ui/divider.jsx");



const baseClassName = "bd-settings-group";
class Drawer extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);

    if (this.props.button && this.props.collapsible) {
      const original = this.props.button.onClick;

      this.props.button.onClick = event => {
        event.stopPropagation();
        original(...arguments);
      };
    }

    if (!this.props.hasOwnProperty("shown")) this.props.shown = true;
    this.container = _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
    this.state = {
      collapsed: this.props.collapsible && !this.props.shown
    };
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  toggleCollapse() {
    const container = this.container.current;
    const timeout = this.state.collapsed ? 300 : 1;
    container.style.setProperty("height", container.scrollHeight + "px");
    container.classList.add("animating");
    this.setState({
      collapsed: !this.state.collapsed
    }, () => setTimeout(() => {
      container.style.setProperty("height", "");
      container.classList.remove("animating");
    }, timeout));
    if (this.props.onDrawerToggle) this.props.onDrawerToggle(this.state.collapsed);
  }

  render() {
    const collapseClass = this.props.collapsible ? `collapsible ${this.state.collapsed ? "collapsed" : "expanded"}` : "";
    const groupClass = `${baseClassName} ${collapseClass}`;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: groupClass
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_title__WEBPACK_IMPORTED_MODULE_1__["default"], {
      text: this.props.name,
      collapsible: this.props.collapsible,
      onClick: this.toggleCollapse,
      button: this.props.button,
      isGroup: true
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", {
      className: "bd-settings-container",
      ref: this.container
    }, this.props.children), this.props.showDivider && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_divider__WEBPACK_IMPORTED_MODULE_2__["default"], null));
  }

}

/***/ }),

/***/ "./src/ui/settings/group.jsx":
/*!***********************************!*\
  !*** ./src/ui/settings/group.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Group)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _drawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drawer */ "./src/ui/settings/drawer.jsx");
/* harmony import */ var _components_switch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/switch */ "./src/ui/settings/components/switch.jsx");
/* harmony import */ var _components_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dropdown */ "./src/ui/settings/components/dropdown.jsx");
/* harmony import */ var _components_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/number */ "./src/ui/settings/components/number.jsx");
/* harmony import */ var _components_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/item */ "./src/ui/settings/components/item.jsx");
/* harmony import */ var _components_textbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/textbox */ "./src/ui/settings/components/textbox.jsx");
/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/slider */ "./src/ui/settings/components/slider.jsx");
/* harmony import */ var _components_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/radio */ "./src/ui/settings/components/radio.jsx");
/* harmony import */ var _components_keybind__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/keybind */ "./src/ui/settings/components/keybind.jsx");
/* harmony import */ var _components_color__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/color */ "./src/ui/settings/components/color.jsx");











class Group extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(id, value) {
    if (!this.props.onChange) return;
    if (this.props.id) this.props.onChange(this.props.id, id, value);else this.props.onChange(id, value);
    this.forceUpdate();
  }

  render() {
    const {
      settings
    } = this.props;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_drawer__WEBPACK_IMPORTED_MODULE_1__["default"], {
      collapsible: this.props.collapsible,
      name: this.props.name,
      button: this.props.button,
      shown: this.props.shown,
      onDrawerToggle: this.props.onDrawerToggle,
      showDivider: this.props.showDivider
    }, settings.filter(s => !s.hidden).map(setting => {
      let component = null;
      if (setting.type == "dropdown") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        options: setting.options,
        value: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "number") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_number__WEBPACK_IMPORTED_MODULE_4__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        min: setting.min,
        max: setting.max,
        step: setting.step,
        value: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "switch") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_switch__WEBPACK_IMPORTED_MODULE_2__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        checked: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "text") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_textbox__WEBPACK_IMPORTED_MODULE_6__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        value: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "slider") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_slider__WEBPACK_IMPORTED_MODULE_7__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        min: setting.min,
        max: setting.max,
        step: setting.step,
        value: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "radio") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_radio__WEBPACK_IMPORTED_MODULE_8__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        name: setting.id,
        options: setting.options,
        value: setting.value,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "keybind") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_keybind__WEBPACK_IMPORTED_MODULE_9__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        value: setting.value,
        max: setting.max,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (setting.type == "color") component = /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_color__WEBPACK_IMPORTED_MODULE_10__["default"], {
        disabled: setting.disabled,
        id: setting.id,
        value: setting.value,
        defaultValue: setting.defaultValue,
        colors: setting.colors,
        onChange: this.onChange.bind(this, setting.id)
      });
      if (!component) return null;
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_item__WEBPACK_IMPORTED_MODULE_5__["default"], {
        id: setting.id,
        inline: setting.type !== "radio",
        key: setting.id,
        name: setting.name,
        note: setting.note
      }, component);
    }));
  }

}

/***/ }),

/***/ "./src/ui/settings/sidebarheader.jsx":
/*!*******************************************!*\
  !*** ./src/ui/settings/sidebarheader.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsTitle)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/data.js */ "./src/data/data.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _icons_history__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/history */ "./src/ui/icons/history.jsx");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals */ "./src/ui/modals.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





const SidebarComponents = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getModule(m => m.Header && m.Separator && m.Item);
const Tooltip = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByPrototypes("renderTooltip");
class SettingsTitle extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-sidebar-header"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(SidebarComponents.Header, null, "BetterDiscord"), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(Tooltip, {
      color: "primary",
      position: "top",
      text: "Changelog"
    }, props => /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", _extends({}, props, {
      className: "bd-changelog-button",
      onClick: () => _modals__WEBPACK_IMPORTED_MODULE_3__["default"].showChangelogModal(_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Changelog)
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_history__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "bd-icon",
      size: "16px"
    }))));
  }

}

/***/ }),

/***/ "./src/ui/settings/title.jsx":
/*!***********************************!*\
  !*** ./src/ui/settings/title.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SettingsTitle)
/* harmony export */ });
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../modules/modules.js */ "./src/modules/modules.js");

const className = "bd-settings-title";
const className2 = "bd-settings-title bd-settings-group-title";
class SettingsTitle extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.Component {
  constructor(props) {
    super(props);
    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(event) {
    var _this$props, _this$props$button, _this$props$button$on;

    event.stopPropagation();
    event.preventDefault();
    (_this$props = this.props) === null || _this$props === void 0 ? void 0 : (_this$props$button = _this$props.button) === null || _this$props$button === void 0 ? void 0 : (_this$props$button$on = _this$props$button.onClick) === null || _this$props$button$on === void 0 ? void 0 : _this$props$button$on.call(_this$props$button, event);
  }

  render() {
    const baseClass = this.props.isGroup ? className2 : className;
    const titleClass = this.props.className ? `${baseClass} ${this.props.className}` : baseClass;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("h2", {
      className: titleClass,
      onClick: () => {
        this.props.onClick && this.props.onClick();
      }
    }, this.props.text, this.props.button && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_0__.React.createElement("button", {
      className: "bd-button bd-button-title",
      onClick: this.buttonClick
    }, this.props.button.title), this.props.otherChildren);
  }

}

/***/ }),

/***/ "./src/ui/toasts.js":
/*!**************************!*\
  !*** ./src/ui/toasts.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Toasts)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");


class Toasts {
  static get ChannelsClass() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("sidebar", "hasNotice").sidebar.split(" ")[0];
  }

  static get MembersWrapClass() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("membersWrap").membersWrap.split(" ")[0];
  }

  static get shouldShowToasts() {
    return _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Settings.get("settings", "general", "showToasts");
  }
  /** Shorthand for `type = "success"` for {@link module:Toasts.show} */


  static async success(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "success"
    }));
  }
  /** Shorthand for `type = "info"` for {@link module:Toasts.show} */


  static async info(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "info"
    }));
  }
  /** Shorthand for `type = "warning"` for {@link module:Toasts.show} */


  static async warning(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "warning"
    }));
  }
  /** Shorthand for `type = "error"` for {@link module:Toasts.show} */


  static async error(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: "error"
    }));
  }
  /** Shorthand for `type = "default"` for {@link module:Toasts.show} */


  static async default(content, options = {}) {
    return this.show(content, Object.assign(options, {
      type: ""
    }));
  }
  /**
   * This shows a toast similar to android towards the bottom of the screen.
   *
   * @param {string} content The string to show in the toast.
   * @param {object} options Options object. Optional parameter.
   * @param {string} [options.type=""] Changes the type of the toast stylistically and semantically. Choices: "", "info", "success", "danger"/"error", "warning"/"warn". Default: ""
   * @param {boolean} [options.icon=true] Determines whether the icon should show corresponding to the type. A toast without type will always have no icon. Default: true
   * @param {number} [options.timeout=3000] Adjusts the time (in ms) the toast should be shown for before disappearing automatically. Default: 3000
   * @param {boolean} [options.forceShow=false] Whether to force showing the toast and ignore the bd setting
   */


  static show(content, options = {}) {
    try {
      const {
        type = "",
        icon = true,
        timeout = 3000,
        forceShow = false
      } = options;
      if (!this.shouldShowToasts && !forceShow) return;
      this.ensureContainer();
      const toastElem = document.createElement("div");
      toastElem.classList.add("bd-toast");
      if (type) toastElem.classList.add("toast-" + type);
      if (type && icon) toastElem.classList.add("icon");
      toastElem.innerText = content;
      document.querySelector(".bd-toasts").appendChild(toastElem);
      setTimeout(() => {
        toastElem.classList.add("closing");
        setTimeout(() => {
          toastElem.remove();
          if (!document.querySelectorAll(".bd-toasts .bd-toast").length) document.querySelector(".bd-toasts").remove();
        }, 300);
      }, timeout);
    } catch (err) {
      _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].stacktrace("Toasts", "Unable to show toast", err);
    }
  }

  static ensureContainer() {
    if (document.querySelector(".bd-toasts")) return;
    const container = document.querySelector(`.${this.ChannelsClass} ~ div:not([style])`);
    const memberlist = container ? container.querySelector(`.${this.MembersWrapClass}`) : null;
    const form = container ? container.querySelector("form") : null;
    const left = container ? container.getBoundingClientRect().left : 310;
    const right = memberlist ? memberlist.getBoundingClientRect().left : 0;
    const width = right ? right - container.getBoundingClientRect().left : (container === null || container === void 0 ? void 0 : container.offsetWidth) ?? document.body.offsetWidth / 2;
    const bottom = form ? form.offsetHeight : 80;
    const toastWrapper = document.createElement("div");
    toastWrapper.classList.add("bd-toasts");
    toastWrapper.style.setProperty("left", left + "px");
    toastWrapper.style.setProperty("width", width + "px");
    toastWrapper.style.setProperty("bottom", bottom + "px");
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.bdBody.appendChild(toastWrapper);
  }

}

/***/ }),

/***/ "./src/ui/tooltip.js":
/*!***************************!*\
  !*** ./src/ui/tooltip.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Tooltip)
/* harmony export */ });
/* harmony import */ var _common_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/logger */ "../common/logger.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");



const toPx = function (value) {
  return `${value}px`;
};

const styles = ["primary", "info", "success", "warn", "danger"];
const sides = ["top", "right", "bottom", "left"];
class Tooltip {
  /**
   *
   * @constructor
   * @param {HTMLElement} node - DOM node to monitor and show the tooltip on
   * @param {string|HTMLElement} tip - string to show in the tooltip
   * @param {object} options - additional options for the tooltip
   * @param {"primary"|"info"|"success"|"warn"|"danger"} [options.style="primary"] - correlates to the discord styling/colors
   * @param {"top"|"right"|"bottom"|"left"} [options.side="top"] - can be any of top, right, bottom, left
   * @param {boolean} [options.preventFlip=false] - prevents moving the tooltip to the opposite side if it is too big or goes offscreen
   * @param {boolean} [options.disabled=false] - whether the tooltip should be disabled from showing on hover
   */
  constructor(node, text, options = {}) {
    const {
      style = "primary",
      side = "top",
      preventFlip = false,
      disabled = false
    } = options;
    this.node = node;
    this.label = text;
    this.style = style.toLowerCase();
    this.side = side.toLowerCase();
    this.preventFlip = preventFlip;
    this.disabled = disabled;
    this.active = false;
    if (!sides.includes(this.side)) return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Tooltip", `Side ${this.side} does not exist.`);
    if (!styles.includes(this.style)) return _common_logger__WEBPACK_IMPORTED_MODULE_0__["default"].err("Tooltip", `Style ${this.style} does not exist.`);
    this.element = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.parseHTML(`<div class="bd-layer">`);
    this.tooltipElement = _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.parseHTML(`<div class="bd-tooltip"><div class="bd-tooltip-pointer"></div><div class="bd-tooltip-content"></div></div>`);
    this.tooltipElement.classList.add(`bd-tooltip-${this.style}`);
    this.labelElement = this.tooltipElement.childNodes[1];
    if (text instanceof HTMLElement) this.labelElement.append(text);else this.labelElement.textContent = text;
    this.element.append(this.tooltipElement);
    this.node.addEventListener("mouseenter", () => {
      if (this.disabled) return;
      this.show();
    });
    this.node.addEventListener("mouseleave", () => {
      this.hide();
    });
  }
  /** Alias for the constructor */


  static create(node, text, options = {}) {
    return new Tooltip(node, text, options);
  }
  /** Container where the tooltip will be appended. */


  get container() {
    return document.querySelector(`#app-mount`);
  }
  /** Boolean representing if the tooltip will fit on screen above the element */


  get canShowAbove() {
    return this.node.getBoundingClientRect().top - this.element.offsetHeight >= 0;
  }
  /** Boolean representing if the tooltip will fit on screen below the element */


  get canShowBelow() {
    return this.node.getBoundingClientRect().top + this.node.offsetHeight + this.element.offsetHeight <= _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.screenHeight;
  }
  /** Boolean representing if the tooltip will fit on screen to the left of the element */


  get canShowLeft() {
    return this.node.getBoundingClientRect().left - this.element.offsetWidth >= 0;
  }
  /** Boolean representing if the tooltip will fit on screen to the right of the element */


  get canShowRight() {
    return this.node.getBoundingClientRect().left + this.node.offsetWidth + this.element.offsetWidth <= _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.DOMManager.screenWidth;
  }
  /** Hides the tooltip. Automatically called on mouseleave. */


  hide() {
    /** Don't rehide if already inactive */
    if (!this.active) return;
    this.active = false;
    this.element.remove();
  }
  /** Shows the tooltip. Automatically called on mouseenter. Will attempt to flip if position was wrong. */


  show() {
    /** Don't reshow if already active */
    if (this.active) return;
    this.active = true;
    this.labelElement.textContent = this.label;
    this.container.append(this.element);

    if (this.side == "top") {
      if (this.canShowAbove || !this.canShowAbove && this.preventFlip) this.showAbove();else this.showBelow();
    }

    if (this.side == "bottom") {
      if (this.canShowBelow || !this.canShowBelow && this.preventFlip) this.showBelow();else this.showAbove();
    }

    if (this.side == "left") {
      if (this.canShowLeft || !this.canShowLeft && this.preventFlip) this.showLeft();else this.showRight();
    }

    if (this.side == "right") {
      if (this.canShowRight || !this.canShowRight && this.preventFlip) this.showRight();else this.showLeft();
    }
    /** Do not create a new observer each time if one already exists! */


    if (this.observer) return;
    /** Use an observer in show otherwise you'll cause unclosable tooltips */

    this.observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        const nodes = Array.from(mutation.removedNodes);
        const directMatch = nodes.indexOf(this.node) > -1;
        const parentMatch = nodes.some(parent => parent.contains(this.node));

        if (directMatch || parentMatch) {
          this.hide();
          this.observer.disconnect();
        }
      });
    });
    this.observer.observe(document.body, {
      subtree: true,
      childList: true
    });
  }
  /** Force showing the tooltip above the node. */


  showAbove() {
    this.tooltipElement.classList.add("bd-tooltip-top");
    this.element.style.setProperty("top", toPx(this.node.getBoundingClientRect().top - this.element.offsetHeight - 10));
    this.centerHorizontally();
  }
  /** Force showing the tooltip below the node. */


  showBelow() {
    this.tooltipElement.classList.add("bd-tooltip-bottom");
    this.element.style.setProperty("top", toPx(this.node.getBoundingClientRect().top + this.node.offsetHeight + 10));
    this.centerHorizontally();
  }
  /** Force showing the tooltip to the left of the node. */


  showLeft() {
    this.tooltipElement.classList.add("bd-tooltip-left");
    this.element.style.setProperty("left", toPx(this.node.getBoundingClientRect().left - this.element.offsetWidth - 10));
    this.centerVertically();
  }
  /** Force showing the tooltip to the right of the node. */


  showRight() {
    this.tooltipElement.classList.add("bd-tooltip-right");
    this.element.style.setProperty("left", toPx(this.node.getBoundingClientRect().left + this.node.offsetWidth + 10));
    this.centerVertically();
  }

  centerHorizontally() {
    const nodecenter = this.node.getBoundingClientRect().left + this.node.offsetWidth / 2;
    this.element.style.setProperty("left", toPx(nodecenter - this.element.offsetWidth / 2));
  }

  centerVertically() {
    const nodecenter = this.node.getBoundingClientRect().top + this.node.offsetHeight / 2;
    this.element.style.setProperty("top", toPx(nodecenter - this.element.offsetHeight / 2));
  }

}
window.Tooltip = Tooltip;

/***/ }),

/***/ "./src/ui/updater.jsx":
/*!****************************!*\
  !*** ./src/ui/updater.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UpdaterPanel)
/* harmony export */ });
/* harmony import */ var _data_data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/data.js */ "./src/data/data.js");
/* harmony import */ var _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/modules.js */ "./src/modules/modules.js");
/* harmony import */ var _settings_drawer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings/drawer */ "./src/ui/settings/drawer.jsx");
/* harmony import */ var _settings_components_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings/components/item */ "./src/ui/settings/components/item.jsx");
/* harmony import */ var _settings_title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./settings/title */ "./src/ui/settings/title.jsx");
/* harmony import */ var _toasts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toasts */ "./src/ui/toasts.js");
/* harmony import */ var _icons_check__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/check */ "./src/ui/icons/check.jsx");








class CoreUpdaterPanel extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_settings_drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: "BetterDiscord",
      collapsible: true
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_settings_components_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
      name: `Core v${_data_data_js__WEBPACK_IMPORTED_MODULE_0__.Config.version}`,
      note: this.props.hasUpdate ? _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.versionAvailable.format({
        version: this.props.remoteVersion
      }) : _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.noUpdatesAvailable,
      inline: true,
      id: "core-updater"
    }, !this.props.hasUpdate && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-filled-checkmark"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_check__WEBPACK_IMPORTED_MODULE_6__["default"], null)), this.props.hasUpdate && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", {
      className: "bd-button",
      onClick: this.props.update
    }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.updateButton)));
  }

}

class NoUpdates extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  render() {
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", {
      className: "bd-empty-updates"
    }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_icons_check__WEBPACK_IMPORTED_MODULE_6__["default"], {
      size: "48px"
    }), _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.upToDateBlankslate.format({
      type: this.props.type
    }));
  }

}

class AddonUpdaterPanel extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  render() {
    const filenames = this.props.pending;
    return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_settings_drawer__WEBPACK_IMPORTED_MODULE_2__["default"], {
      name: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Panels[this.props.type],
      collapsible: true,
      button: filenames.length ? {
        title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.updateAll,
        onClick: () => this.props.updateAll(this.props.type)
      } : null
    }, !filenames.length && /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(NoUpdates, {
      type: this.props.type
    }), filenames.map(f => {
      const info = this.props.updater.cache[f];
      const addon = this.props.updater.manager.addonList.find(a => a.filename === f);
      return /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_settings_components_item__WEBPACK_IMPORTED_MODULE_3__["default"], {
        name: `${addon.name} v${addon.version}`,
        note: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.versionAvailable.format({
          version: info.version
        }),
        inline: true,
        id: addon.name
      }, /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement("button", {
        className: "bd-button",
        onClick: () => this.props.update(this.props.type, f)
      }, _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.updateButton));
    }));
  }

}

class UpdaterPanel extends _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCoreUpdate: this.props.coreUpdater.hasUpdate,
      plugins: this.props.pluginUpdater.pending.slice(0),
      themes: this.props.themeUpdater.pending.slice(0)
    };
    this.checkForUpdates = this.checkForUpdates.bind(this);
    this.updateAddon = this.updateAddon.bind(this);
    this.updateCore = this.updateCore.bind(this);
    this.updateAllAddons = this.updateAllAddons.bind(this);
    this.update = this.update.bind(this);
  }

  update() {
    this.checkAddons("plugins");
    this.checkAddons("themes");
  }

  componentDidMount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`plugin-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`plugin-unloaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`theme-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.on(`theme-unloaded`, this.update);
  }

  componentWillUnmount() {
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`plugin-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`plugin-unloaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`theme-loaded`, this.update);
    _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Events.off(`theme-unloaded`, this.update);
  }

  async checkForUpdates() {
    _toasts__WEBPACK_IMPORTED_MODULE_5__["default"].info(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.checking);
    await this.checkCoreUpdate();
    await this.checkAddons("plugins");
    await this.checkAddons("themes");
    _toasts__WEBPACK_IMPORTED_MODULE_5__["default"].info(_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.finishedChecking);
  }

  async checkCoreUpdate() {
    await this.props.coreUpdater.checkForUpdate(false);
    this.setState({
      hasCoreUpdate: this.props.coreUpdater.hasUpdate
    });
  }

  async updateCore() {
    await this.props.coreUpdater.update();
    this.setState({
      hasCoreUpdate: false
    });
  }

  async checkAddons(type) {
    const updater = type === "plugins" ? this.props.pluginUpdater : this.props.themeUpdater;
    await updater.checkAll(false);
    this.setState({
      [type]: updater.pending.slice(0)
    });
  }

  async updateAddon(type, filename) {
    const updater = type === "plugins" ? this.props.pluginUpdater : this.props.themeUpdater;
    await updater.updateAddon(filename);
    this.setState(prev => {
      prev[type].splice(prev[type].indexOf(filename), 1);
      return prev;
    });
  }

  async updateAllAddons(type) {
    const toUpdate = this.state[type].slice(0);

    for (const filename of toUpdate) {
      await this.updateAddon(type, filename);
    }
  }

  render() {
    return [/*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(_settings_title__WEBPACK_IMPORTED_MODULE_4__["default"], {
      text: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Panels.updates,
      button: {
        title: _modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.Strings.Updater.checkForUpdates,
        onClick: this.checkForUpdates
      }
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(CoreUpdaterPanel, {
      remoteVersion: this.props.coreUpdater.remoteVersion,
      hasUpdate: this.state.hasCoreUpdate,
      update: this.updateCore
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(AddonUpdaterPanel, {
      type: "plugins",
      pending: this.state.plugins,
      update: this.updateAddon,
      updateAll: this.updateAllAddons,
      updater: this.props.pluginUpdater
    }), /*#__PURE__*/_modules_modules_js__WEBPACK_IMPORTED_MODULE_1__.React.createElement(AddonUpdaterPanel, {
      type: "themes",
      pending: this.state.themes,
      update: this.updateAddon,
      updateAll: this.updateAllAddons,
      updater: this.props.themeUpdater
    })];
  }

}

/***/ }),

/***/ "./src/styles/index.css":
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/noSourceMaps.js */ "../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js */ "../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_pnpm_css_loader_6_7_1_webpack_5_73_0_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* stylelint-disable no-descending-specificity */\n\n#bd-editor-panel {\n    display: flex;\n    flex-direction: column;\n}\n\n#bd-editor-controls button {\n    margin: 0 5px 0 0;\n    background: none;\n    color: var(--interactive-normal);\n    height: 26px;\n    font-weight: 600;\n    border-radius: 3px;\n    display: flex;\n    align-items: center;\n}\n\n#bd-editor-controls button:hover {\n    background: var(--background-modifier-hover);\n    color: var(--interactive-hover);\n}\n\n#bd-editor-controls button:active {\n    background: var(--background-modifier-active);\n}\n\n#bd-editor-controls button svg {\n    fill: currentColor;\n}\n\n#bd-editor-controls {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background: var(--background-secondary-alt);\n    color: var(--text-normal);\n    border: none;\n    box-shadow: var(--elevation-low);\n    padding: 5px;\n    z-index: 10;\n}\n\n.editor-wrapper {\n    display: flex;\n}\n\n.editor {\n    box-sizing: border-box;\n    height: calc(100vh - 250px);\n    font-size: 14px;\n    width: 100%;\n}\n\n.controls-section {\n    display: flex;\n    align-items: center;\n}\n\n.controls-section .checkbox-inner {\n    width: 14px;\n    height: 14px;\n}\n\n.controls-section .checkbox-inner .checkbox:checked + span::after {\n    left: 2px;\n    top: -2px;\n}\n\n.controls-section .checkbox-label {\n    font-size: 14px;\n    font-weight: 500;\n}\n\n.monaco-editor:not(.rename-box),\n.monaco-editor .overflow-guard,\n.monaco-editor .editor-scrollable,\n.monaco-editor .minimap-shadow-visible,\n.monaco-editor .decorationsOverviewRuler {\n    height: 100% !important;\n}\n\n.monaco-editor:not(.rename-box),\n.monaco-editor .overflow-guard,\n.monaco-editor .overlayWidgets,\n#bd-customcss-editor > div > .overflow-guard > div:nth-child(3) {\n    width: 100% !important;\n}\n\n.monaco-editor .minimap {\n    right: 14px;\n    left: unset !important;\n    height: 100% !important;\n}\n\n.monaco-editor .editor-scrollable {\n    width: calc(100% - 64px) !important;\n}\n\n.monaco-editor .view-overlays .current-line {\n    width: 1e+06px !important;\n}\n\n.bd-fallback-editor {\n    height: 100%;\n    width: 100%;\n    resize: none;\n    overflow: auto;\n    white-space: nowrap;\n}\n\n.bd-emote-menu {\n    min-height: 0;\n}\n\n.bd-emote-menu-inner {\n    padding: 8px 0 0 16px;\n}\n\n.bd-emote-scroller {\n    height: 100%;\n}\n\n.bd-emote-header {\n    display: flex;\n    align-items: center;\n    background: var(--background-secondary);\n    height: 32px;\n    padding: 0 4px;\n    position: sticky;\n    top: 0;\n    z-index: 2;\n}\n\n.bd-emote-header-inner {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    color: var(--header-secondary);\n    font-size: 12px;\n    font-weight: 600;\n    transition: color 0.125s;\n    width: fit-content;\n}\n\n.bd-emote-header-inner:hover {\n    color: var(--header-primary);\n}\n\n.bd-emote-header-icon {\n    width: 16px;\n    height: 16px;\n}\n\n.bd-emote-header-icon svg {\n    max-height: 100%;\n    max-width: 100%;\n}\n\n.bd-emote-header-label {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    text-transform: uppercase;\n    white-space: nowrap;\n    margin: 0 8px;\n}\n\n.bd-emote-collapse-icon svg {\n    transition: transform 0.1s;\n}\n\n.bd-emote-collapse-icon.collapsed svg {\n    transform: rotate(-90deg);\n}\n\n.bd-emote-item {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2px;\n    border-radius: 5px;\n    width: 30px;\n    height: 30px;\n    position: relative;\n}\n\n.bd-emote-item:hover {\n    background: var(--background-accent);\n}\n\n.bd-emote-item img {\n    max-width: 100%;\n}\n\n.emotewrapper {\n    position: relative;\n    display: inline-flex;\n    object-fit: contain;\n    margin: -0.1em 0.05em -0.2em 0.1em;\n    vertical-align: top;\n}\n\n.emotewrapper.jumboable {\n    margin-bottom: 0;\n    margin-top: 0.2em;\n    vertical-align: -0.3em;\n}\n\n.emote {\n    object-fit: contain;\n    width: 1.375em;\n    height: 1.375em;\n    vertical-align: bottom;\n}\n\n.emote.jumboable {\n    width: 3rem;\n    height: 3rem;\n    min-height: 3rem;\n}\n\n.fav {\n    display: none;\n    position: absolute;\n    width: 15px;\n    height: 15px;\n    right: -7px;\n    background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAzFBMVEUAAABQUFBMTExLS0tNTU1MTExNTU1NTU1MTExMTExNTU1LS0tEREBEREBEREBEREBJSUhLS0tLS0tEREBNTU1NTU1NTU1EREArKyhNTU1NTU0AAABMTExKSklMTExNTU1NTU1NTU1KSkpMTExKSkhNTU1KSkpISEZNTU1LS0tAQDxOTk5KSkpLS0tNTU1MTExMTEx/f39MTExMTExLS0pLS0tMTExNTU1NTU1LS0pNTU1NTU1NTU1NTU1NTU1NTUxNTU1NTU1NTUxMTEzB8C/5AAAAOnRSTlMAI8X96oWAgYSF68QBAg0PMCb9BIuLgQUD4N0Bh0mKhZSOQ4gcrKscaW8QRE6fmJyjAshASceG7cIpqQOxTQAAALVJREFUGFddx6FOA0EYAOGZvd07Qm6vVCAAgUUgQEDfX/YZMAigqaFN7iC5tsmPqGPUN/AvUVeoEbGOCElJz08Uzeixqu4AqomVVSNngOVjTqDGZSl3UFtPGV2ot2zaq96YM9p5Ddzcf/nTTAlj+/sNtNu8OcwkIsbPBtrUfMQeEhGQmHbmGIFMwLPzu6UMIwBNgToshgq8Nr2ki+Oy7ebDHp70LRPWB6OZgfWLWei7fJonOOsPCGA9kVlssOoAAAAASUVORK5CYII=\");\n    border: none;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    background-color: #303030;\n    border-radius: 5px;\n    top: -7px;\n    cursor: pointer;\n}\n\n.fav.active {\n    background-color: yellow;\n}\n\n.emotewrapper:hover .fav {\n    display: block;\n}\n\n.emote.stop-animation {\n    animation: none;\n}\n\n.emoteflip,\n.emotespinflip {\n    transform: scaleX(-1);\n}\n\n.emotespin {\n    animation: 1s emote-spin infinite linear;\n}\n\n.emote1spin {\n    animation: 1s emote-spin-reverse infinite linear;\n}\n\n.emotespin2 {\n    animation: 0.5s emote-spin infinite linear;\n}\n\n.emote2spin {\n    animation: 0.5s emote-spin-reverse infinite linear;\n}\n\n.emotespin3 {\n    animation: 0.2s emote-spin infinite linear;\n}\n\n.emote3spin {\n    animation: 0.2s emote-spin-reverse infinite linear;\n}\n\n.emotepulse {\n    animation: 1s emote-pulse infinite linear;\n}\n\n.emotetr {\n    transform: translateX(-3px);\n}\n\n.emotebl {\n    transform: translateY(-3px);\n}\n\n.emotebr {\n    transform: translate(-3px, -3px);\n}\n\n.emoteshake {\n    animation: 1s emote-shake infinite linear;\n}\n\n.emoteflap {\n    transform: scaleY(-1);\n}\n\n.emoteshake2 {\n    animation: emote-shake2 0.3s linear infinite;\n}\n\n.emoteshake3 {\n    animation: emote-shake3 0.1s linear infinite;\n}\n\n@keyframes emote-shake2 {\n    25% {\n        transform: translate(-1px, -1px);\n    }\n\n    50% {\n        transform: translate(-1px, 1px);\n    }\n\n    75% {\n        transform: translate(1px, 1px);\n    }\n\n    75% {\n        transform: translate(1px, -1px);\n    }\n}\n\n@keyframes emote-shake3 {\n    25% {\n        transform: translate(-1px, -1px);\n    }\n\n    50% {\n        transform: translate(-1px, 1px);\n    }\n\n    75% {\n        transform: translate(1px, 1px);\n    }\n\n    75% {\n        transform: translate(1px, -1px);\n    }\n}\n\n@keyframes emote-spin {\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(360deg);\n    }\n}\n\n@keyframes emote-spin-reverse {\n    from {\n        transform: rotate(0deg);\n    }\n\n    to {\n        transform: rotate(-360deg);\n    }\n}\n\n@keyframes emote-pulse {\n    0% {\n        -webkit-transform: scale(1, 1);\n    }\n\n    50% {\n        -webkit-transform: scale(1.2, 1.2);\n    }\n\n    100% {\n        -webkit-transform: scale(1, 1);\n    }\n}\n\n@keyframes emote-shake {\n    10%,\n    90% {\n        transform: translate3d(-1px, 0, 0);\n    }\n\n    20%,\n    80% {\n        transform: translate3d(2px, 0, 0);\n    }\n\n    30%,\n    50%,\n    70% {\n        transform: translate3d(-4px, 0, 0);\n    }\n\n    40%,\n    60% {\n        transform: translate3d(4px, 0, 0);\n    }\n}\n\n@keyframes bd-placeholder-card-pulse {\n    0% {\n        opacity: 0.6;\n    }\n\n    50% {\n        opacity: 0.8;\n    }\n\n    to {\n        opacity: 0.6;\n    }\n}\n\n#bd-pub-li {\n    height: 24px;\n    overflow: hidden;\n}\n\n#bd-pub-button {\n    border-radius: 4px;\n    background-color: var(--background-primary);\n    color: var(--text-normal);\n    text-align: center;\n    font-size: 12px;\n    line-height: 24px;\n    height: 24px;\n    transition: background-color 0.15s ease-out, color 0.15s ease-out;\n}\n\n#bd-pub-button:hover {\n    color: #FFFFFF;\n    background-color: #3E82E5;\n}\n\n#bd-connection {\n    margin-left: 10px;\n}\n\n.bd-footnote {\n    color: #B9BBBE;\n    font-size: 11px;\n}\n\n.bd-button-next,\n.bd-button-reconnect {\n    margin: 5px 10px 10px 0;\n    width: 100%;\n    min-height: 20px;\n}\n\n/* Rewrite */\n\n.bd-server-search {\n    margin-bottom: 5px;\n}\n\n.bd-card-list {\n    display: grid;\n    grid-gap: 16px;\n    grid-template-columns: repeat(auto-fill, minmax(248px, 1fr));\n}\n\n.bd-server-card {\n    display: flex;\n    flex-direction: column;\n    height: 320px;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 8px;\n    position: relative;\n    transition: box-shadow 0.2s ease-out, transform 0.2s ease-out, background 0.2s ease-out, opacity 0.2s ease-in;\n    cursor: pointer;\n    background-color: var(--activity-card-background);\n}\n\n.theme-light .bd-server-card {\n    box-shadow: 0 0 0 1px rgba(185, 187, 190, 0.3), var(--elevation-medium);\n}\n\n.theme-dark .bd-server-card {\n    background-color: var(--background-secondary-alt);\n}\n\n.bd-server-card:hover,\n.bd-server-card:focus,\n.theme-light .bd-server-card:hover,\n.theme-light .bd-server-card:focus {\n    transform: translateY(-1px);\n    box-shadow: var(--elevation-high);\n}\n\n.theme-dark .bd-server-card:hover,\n.theme-dark .bd-server-card:focus {\n    background-color: var(--background-tertiary);\n}\n\n.bd-placeholder-card {\n    background-color: var(--background-secondary-alt);\n    animation: bd-placeholder-card-pulse 1.8s ease-in-out infinite;\n    height: 320px;\n    width: 100%;\n    overflow: hidden;\n    border-radius: 8px;\n    position: relative;\n}\n\n.bd-server-header {\n    height: 143px;\n    position: relative;\n    display: block;\n    overflow: visible;\n    margin-bottom: 32px;\n}\n\n.bd-server-splash-container {\n    width: 100%;\n    height: 100%;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    transition: opacity 0.2s, transform 0.2s ease-out;\n    transform: scale(1);\n    overflow: hidden;\n}\n\n.bd-server-card:hover .bd-server-splash-container {\n    -webkit-transform: scale(1.01) translateZ(0);\n    transform: scale(1.01) translateZ(0);\n}\n\n.bd-server-splash {\n    object-fit: cover;\n    width: 100%;\n    height: 100%;\n    filter: blur(20px);\n}\n\n.bd-server-icon {\n    position: absolute;\n    bottom: -21px;\n    left: 12px;\n    width: 40px;\n    background: var(--background-secondary-alt);\n    border: 4px solid var(--background-secondary-alt);\n    border-radius: 25%;\n    transition: background 0.2s ease-out, transform 0.2s ease-out, border-color 0.2s ease-out;\n}\n\n.bd-server-card:hover .bd-server-icon {\n    border-color: var(--background-tertiary);\n    background: var(--background-tertiary);\n}\n\n.bd-server-info {\n    display: flex;\n    flex: 1 1 auto;\n    position: relative;\n    flex-direction: column;\n    align-content: stretch;\n    padding: 0 16px 16px;\n    overflow: hidden;\n}\n\n.bd-server-title {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    font-weight: 600;\n}\n\n.bd-server-name {\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    color: var(--header-primary);\n    font-size: 16px;\n    line-height: 20px;\n}\n\n.bd-server-description {\n    flex: 1 1 auto;\n    overflow: hidden;\n    margin: 4px 0 16px;\n    display: -webkit-box;\n    -webkit-line-clamp: 4;\n    -webkit-box-orient: vertical;\n    color: var(--header-secondary);\n    font-size: 14px;\n    line-height: normal;\n}\n\n.bd-server-footer {\n    display: flex;\n    align-items: center;\n}\n\n.bd-server-count {\n    display: flex;\n    align-items: center;\n    font-size: 0.75rem;\n    line-height: 1rem;\n    margin-right: 16px;\n}\n\n.bd-server-count-dot {\n    background-color: #43B581;\n    border-radius: 50%;\n    width: 8px;\n    height: 8px;\n    margin-right: 4px;\n    flex-shrink: 0;\n}\n\n.bd-server-count + .bd-server-count .bd-server-count-dot {\n    background-color: #B9BBBE;\n}\n\n.bd-server-count-text {\n    color: var(--header-secondary);\n    font-size: 12px;\n    line-height: 16px;\n}\n\n.bd-server-tag {\n    margin-left: 5px;\n    font-size: 10px;\n    text-transform: uppercase;\n    vertical-align: top;\n    display: inline-flex;\n    align-items: center;\n    flex-shrink: 0;\n    text-indent: 0;\n    height: 15px;\n    padding: 0 4px;\n    margin-top: 1px;\n    border-radius: 3px;\n    background: #3E82E5;\n    color: #FFFFFF;\n}\n\n.bd-pagination {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin: 15px;\n    color: var(--header-primary);\n}\n\n.bd-pagination span {\n    font-weight: 600;\n}\n\n.bd-pagination button {\n    background: none;\n    opacity: 0.7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 1px solid var(--background-tertiary);\n    border-radius: 3px;\n    padding: 0;\n}\n\n.bd-pagination button:hover,\n.bd-pagination button:active {\n    opacity: 1;\n    background: var(--background-accent);\n}\n\n.bd-pagination button:active {\n    opacity: 1;\n    background: var(--background-secondary);\n}\n\n.bd-pagination button svg {\n    fill: var(--header-primary);\n}\n\n.bd-pagination button[disabled] {\n    opacity: 0.2;\n    cursor: not-allowed;\n}\n\n.bd-pagination + .bd-settings-title {\n    margin-top: 20px;\n}\n\n.bd-reload {\n    cursor: pointer;\n    vertical-align: top;\n    fill: #DCDDDE;\n}\n\n.bd-reload:hover {\n    fill: #FFFFFF;\n}\n\n.bd-reload-header {\n    margin-left: 5px;\n}\n\n.bd-reload-card {\n    margin-right: 5px;\n}\n\n.bd-controls,\n.bd-controls-advanced {\n    display: flex;\n}\n\n.bd-addon-list {\n    user-select: text;\n}\n\n.bd-addon-list.bd-grid-view {\n    display: grid;\n    grid-template-columns: auto auto;\n    column-gap: 10px;\n    row-gap: 10px;\n}\n\n.bd-addon-list .bd-addon-card {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n    border-radius: 5px;\n    overflow: hidden;\n    background: var(--background-secondary);\n}\n\n.bd-addon-list.bd-grid-view .bd-addon-card {\n    margin-bottom: 0;\n}\n\n.bd-addon-list .bd-addon-header {\n    color: var(--header-primary);\n    background: var(--background-secondary-alt);\n    padding: 16px;\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 600;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    overflow: hidden;\n}\n\n.bd-addon-header .bd-icon {\n    margin-right: 8px;\n    fill: var(--header-primary);\n}\n\n.disabled .bd-addon-header .bd-icon {\n    fill: red;\n}\n\n.bd-title,\n.bd-name,\n.bd-meta {\n    display: inline;\n    line-height: normal;\n}\n\n.bd-title {\n    flex: 1;\n    min-width: 0;\n}\n\n.bd-meta {\n    color: var(--channels-default);\n    font-weight: 500;\n}\n\n.bd-name {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.bd-name::after,\n.bd-version::after {\n    display: inline;\n    content: \" \";\n}\n\n.bd-grid-view .bd-title {\n    display: flex;\n    flex-direction: column;\n}\n\n.bd-grid-view .bd-meta {\n    font-size: 12px;\n}\n\n.bd-description-wrap {\n    flex: 1;\n    padding: 8px 16px 0 16px;\n}\n\n.bd-description-wrap .banner {\n    padding: 5px;\n    border: 2px solid gray;\n    background: #26191E;\n    color: #ffffff;\n    font-weight: 700px;\n    border-radius: 5px;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n}\n\n.banner.banner-danger {\n    border-color: #F04747;\n    background: #473C41;\n}\n\n.banner .bd-icon {\n    fill: #ffffff;\n    margin-right: 5px;\n    height: 16px !important;\n}\n\n.banner-danger .bd-icon {\n    fill: #F04747;\n}\n\n.bd-addon-list .bd-description {\n    word-break: break-word;\n    margin-bottom: 5px;\n    padding: 5px 0;\n    overflow-y: auto;\n    max-height: 175px;\n    font-size: 14px;\n    line-height: 18px;\n    -webkit-line-clamp: 3;\n    color: var(--header-secondary);\n}\n\n.bd-description em {\n    font-style: italic;\n}\n\n.bd-description code {\n    padding: 0.2em;\n    margin: -0.2em 0;\n    border-radius: 3px;\n    font-size: 85%;\n    line-height: 1.125rem;\n    white-space: pre-wrap;\n    background: var(--background-tertiary);\n}\n\n.bd-addon-list .scroller::-webkit-scrollbar-track-piece,\n.bd-addon-list .scroller::-webkit-scrollbar-thumb {\n    border-radius: 0 !important;\n    border-color: transparent;\n}\n\n.bd-addon-list .bd-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 8px 16px 16px 16px;\n    overflow: hidden;\n}\n\n.bd-controls > .bd-addon-button {\n    border-radius: 0;\n    padding: 4px 6px;\n}\n\n.bd-links .bd-addon-button + .bd-addon-button {\n    margin-left: 10px;\n}\n\n.bd-controls > .bd-addon-button svg {\n    fill: #FFFFFF;\n}\n\n.bd-controls > .bd-addon-button:first-of-type {\n    border-radius: 3px 0 0 3px;\n}\n\n.bd-controls > .bd-addon-button:last-of-type {\n    border-radius: 0 3px 3px 0;\n}\n\n.bd-controls > .bd-addon-button:only-child {\n    border-radius: 3px;\n}\n\n.bd-controls + .bd-addon-list {\n    margin-top: 10px;\n}\n\n.bd-addon-controls {\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.bd-addon-controls .bd-search {\n    font-size: 13px;\n    margin: 0;\n    width: 200px;\n}\n\n.bd-addon-dropdowns {\n    display: flex;\n}\n\n/* Error Boundary stuff */\n\n.react-error {\n    color: red;\n    font-weight: bold;\n    font-family: Arial, Helvetica, sans-serif;\n    cursor: pointer;\n}\n\n.settings-open .bd-close {\n    cursor: pointer;\n    float: right;\n}\n\n.bd-addon-modal {\n    min-height: unset;\n}\n\n.bd-addon-modal-settings {\n    /* padding: 16px; */\n    padding: 0 16px 16px 16px;\n}\n\n.bd-addon-modal-footer .bd-button {\n    background-color: #3E82E5;\n}\n\n.bd-addon-modal-footer .bd-button:hover {\n    background-color: rgb(56, 117, 206);\n}\n\n.bd-addon-modal-footer .bd-button:active {\n    background-color: rgb(50, 104, 183);\n}\n\n.bd-addon-views {\n    display: flex;\n    margin-left: 10px;\n}\n\n.bd-addon-views .bd-view-button {\n    background-color: transparent;\n    padding: 3px 4px;\n}\n\n.bd-addon-views .bd-view-button svg {\n    fill: var(--interactive-normal);\n}\n\n.bd-addon-views .bd-view-button.selected svg {\n    fill: #FFFFFF;\n}\n\n.bd-addon-views .bd-view-button:hover {\n    background-color: var(--background-modifier-selected);\n}\n\n.bd-addon-views .bd-view-button:active {\n    background-color: var(--background-modifier-accent);\n}\n\n.bd-addon-views .bd-view-button.selected {\n    background-color: #3E82E5;\n}\n\n.bd-addon-views .bd-view-button + .bd-view-button {\n    margin-left: 5px;\n}\n\n.bd-addon-list .bd-footer .bd-links,\n.bd-addon-list .bd-footer .bd-links a,\n.bd-addon-list .bd-footer .bd-addon-button {\n    display: flex;\n    align-items: center;\n}\n\n.bd-addon-list .bd-footer .bd-link {\n    color: var(--interactive-normal);\n}\n\n.bd-addon-list .bd-footer .bd-link:hover {\n    color: var(--interactive-hover);\n}\n\n.bd-addon-list .bd-footer .bd-link:active {\n    color: var(--interactive-active);\n}\n\n.bd-addon-list .bd-footer .bd-link svg {\n    fill: currentColor;\n}\n\n.bd-addon-list .bd-footer .bd-links .bd-addon-button {\n    height: 24px;\n}\n\n.theme-dark .bd-social-logo path {\n    fill: #ADADAD;\n}\n\n.theme-light .bd-social-logo path {\n    fill: #B9BBBE;\n}\n\n.bd-social-link:hover .bd-social-logo {\n    opacity: 1;\n}\n\n.bd-social-link:hover .bd-social-logo path:first-of-type {\n    fill: #3E82E5;\n}\n\n.bd-button-title {\n    margin-left: 10px;\n}\n\n.bd-select-wrapper {\n    color: var(--text-muted);\n    font-size: 13px;\n    display: flex;\n    align-items: center;\n}\n\n.bd-select-wrapper + .bd-select-wrapper {\n    margin-left: 10px;\n}\n\n.bd-select-wrapper label {\n    margin-right: 5px;\n}\n\n.bd-select {\n    position: relative;\n    cursor: pointer;\n    color: var(--text-normal);\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    background-color: var(--deprecated-text-input-bg);\n    border: 1px solid var(--deprecated-text-input-border);\n    border-radius: 3px;\n    padding: 5px 5px 5px 0;\n    transition: 150ms ease border-color;\n}\n\n.bd-select:hover,\n.bd-select.menu-open {\n    border-color: var(--background-tertiary);\n}\n\n.bd-select.bd-select-transparent {\n    align-items: flex-start;\n    background: none;\n    border: none;\n    padding: 0;\n}\n\n.bd-select-value {\n    padding-left: 8px;\n}\n\n.bd-select-arrow {\n    margin-left: 10px;\n    fill: var(--interactive-normal);\n}\n\n.bd-select .bd-select-options {\n    position: absolute;\n    background: var(--background-secondary);\n    border-radius: 0 0 3px 3px;\n    max-height: 300px;\n    min-width: calc(100% + 2px);\n    overflow-y: auto;\n    box-shadow: rgba(0, 0, 0, 0.3) 0 1px 5px 0;\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    border-top: 0;\n    margin-top: -1px;\n    margin-left: -1px;\n    z-index: 2;\n    top: 100%;\n}\n\n.bd-select-transparent .bd-select-options {\n    border: 1px solid rgba(0, 0, 0, 0.3);\n    margin-top: 3px;\n    border-radius: 3px;\n}\n\n.bd-select .bd-select-option {\n    padding: 8px 12px;\n    cursor: pointer;\n    white-space: pre;\n}\n\n.bd-select .bd-select-option:hover {\n    background: rgba(0, 0, 0, 0.1);\n}\n\n.bd-select .bd-select-option.selected {\n    background: rgba(0, 0, 0, 0.2);\n}\n\n.bd-setting-item .bd-select {\n    min-width: 200px;\n}\n\n.bd-setting-item {\n    display: flex;\n    flex-direction: column;\n    margin-bottom: 20px;\n}\n\n.bd-setting-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.bd-setting-header label {\n    font-weight: 500;\n    cursor: pointer;\n    overflow: hidden;\n    word-wrap: break-word;\n    font-size: 16px;\n    line-height: 24px;\n    color: var(--header-primary);\n}\n\n.bd-setting-note {\n    color: var(--header-secondary);\n    margin-top: 4px;\n    font-size: 14px;\n    line-height: 20px;\n    font-weight: 400;\n}\n\n.bd-setting-item:not(.inline) .bd-setting-note {\n    margin-bottom: 10px;\n}\n\n.bd-setting-divider {\n    width: 100%;\n    height: 1px;\n    margin-top: 20px;\n    border-bottom: thin solid var(--background-modifier-accent);\n}\n\n.bd-settings-container {\n    height: auto;\n    overflow: hidden;\n    transition: height 300ms cubic-bezier(0.47, 0, 0.745, 0.715);\n}\n\n.bd-settings-group.collapsed .bd-settings-container {\n    height: 0;\n}\n\n.bd-settings-group.expanded .bd-settings-container:not(.animating) {\n    overflow: visible;\n}\n\n.bd-settings-title {\n    color: #FFFFFF;\n    font-weight: 600;\n    cursor: default;\n    flex: 1;\n}\n\n.bd-settings-title:not(.bd-settings-group-title) {\n    margin-bottom: 20px;\n    font-size: 20px;\n    line-height: 24px;\n}\n\n.bd-settings-group.collapsible .bd-settings-title {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    order: 1;\n}\n\n.bd-settings-group.collapsible .bd-settings-title::before {\n    content: \"\";\n    background-color: var(--background-modifier-accent);\n    height: 2px;\n    order: 2;\n    flex: 1;\n    margin: 0 10px 0 15px;\n}\n\n.bd-settings-group.collapsible .bd-settings-title::after {\n    content: \"\";\n    -webkit-mask: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSItOTUwIDUzMiAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtOTUwIDUzMiAxOCAxODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS05MzIsNTMydjE4aC0xOHYtMThILTkzMnoiLz4NCjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9Ii05MzYuNiw1MzguOCAtOTQxLDU0My4yIC05NDUuNCw1MzguOCAiLz4NCjwvc3ZnPg0K') center/contain no-repeat;\n    mask: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxOS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FscXVlXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSItOTUwIDUzMiAxOCAxOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAtOTUwIDUzMiAxOCAxODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4NCgkuc3Qwe2ZpbGw6bm9uZTt9DQoJLnN0MXtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjEuNTtzdHJva2UtbWl0ZXJsaW1pdDoxMDt9DQo8L3N0eWxlPg0KPHBhdGggY2xhc3M9InN0MCIgZD0iTS05MzIsNTMydjE4aC0xOHYtMThILTkzMnoiLz4NCjxwb2x5bGluZSBjbGFzcz0ic3QxIiBwb2ludHM9Ii05MzYuNiw1MzguOCAtOTQxLDU0My4yIC05NDUuNCw1MzguOCAiLz4NCjwvc3ZnPg0K') center/contain no-repeat;\n    background: var(--header-secondary);\n    height: 20px;\n    width: 20px;\n    display: inline-block;\n    vertical-align: bottom;\n    transition: transform 0.3s ease;\n    transform: rotate(0);\n    order: 3;\n}\n\n.bd-settings-group.collapsed .bd-settings-title::after {\n    transition: transform 0.3s ease;\n    transform: rotate(90deg);\n}\n\n.bd-settings-group ~ .bd-settings-group .bd-settings-title {\n    margin-top: 30px;\n    transition: margin-top 300ms ease;\n}\n\n.bd-settings-group.collapsed + .bd-settings-group .bd-settings-title {\n    margin-top: 0;\n}\n\n.bd-settings-title.bd-settings-group-title {\n    margin-bottom: 10px;\n    text-transform: uppercase;\n    font-size: 14px;\n    color: var(--interactive-normal);\n}\n\n.checkbox-item {\n    display: flex;\n}\n\n.checkbox-item .checkbox-label {\n    margin-right: 8px;\n}\n\n.bd-color-picker-container {\n    display: flex;\n}\n\n.bd-color-picker-controls {\n    padding-left: 1px;\n    padding-top: 2px;\n    display: flex;\n}\n\n.bd-color-picker-default {\n    cursor: pointer;\n    width: 72px;\n    height: 54px;\n    border-radius: 4px;\n    margin-right: 9px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 1px;\n}\n\n.bd-color-picker-custom {\n    position: relative;\n    display: inline-table;\n}\n\n.bd-color-picker-custom svg {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n}\n\n.bd-color-picker {\n    outline: none;\n    width: 70px;\n    border: none;\n    height: 54px;\n    margin-top: 1px;\n    border-radius: 4px;\n    cursor: pointer;\n}\n\n.bd-color-picker::-webkit-color-swatch {\n    border: none;\n}\n\n.bd-color-picker-swatch {\n    display: flex;\n    flex-wrap: wrap;\n    align-content: flex-start;\n    margin-left: 5px !important;\n    max-width: 340px;\n}\n\n.bd-color-picker-swatch-item {\n    cursor: pointer;\n    border-radius: 4px;\n    width: 23px;\n    height: 23px;\n    margin: 4px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.bd-addon-errors {\n    margin-top: 16px;\n}\n\n.bd-addon-error {\n    position: relative;\n    border-radius: 5px;\n    padding: 0;\n    margin-bottom: 16px;\n    background: var(--deprecated-card-editable-bg);\n    border: 1px solid;\n}\n\n.theme-dark .bd-addon-error {\n    border-color: var(--background-secondary-alt);\n}\n\n.theme-light .bd-addon-error {\n    border-color: var(--background-tertiary);\n}\n\n.bd-addon-error-header {\n    display: flex;\n    align-items: center;\n    padding: 20px 16px;\n    cursor: pointer;\n}\n\n.bd-addon-error-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    align-self: flex-start;\n    background-color: var(--background-floating);\n    width: 48px;\n    height: 48px;\n    border-radius: 50%;\n    margin-right: 10px;\n}\n\n.bd-addon-error-icon svg {\n    fill: var(--interactive-normal);\n    width: 24px !important;\n    height: 24px !important;\n}\n\n.bd-addon-error-expander {\n    color: var(--interactive-normal);\n    transition: transform 0.2s ease;\n}\n\n.bd-addon-error-expander,\n.bd-addon-error-icon {\n    flex: 0 0 auto;\n}\n\n.bd-addon-error.collapsed .bd-addon-error-expander {\n    transform: rotate(90deg);\n}\n\n.bd-addon-error-header-inner {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n}\n\n.bd-addon-error-body {\n    padding: 0 16px 24px;\n}\n\n.bd-addon-error-stack code {\n    user-select: text;\n    font-size: 0.875rem;\n    line-height: 1.125rem;\n    text-indent: 0;\n    white-space: pre-wrap;\n    scrollbar-width: thin;\n    scrollbar-color: var(--background-tertiary) var(--background-secondary);\n    background: var(--background-secondary);\n    border: 1px solid var(--background-tertiary);\n}\n\n@keyframes open-window {\n    from {\n        transform: scale(0.9);\n    }\n\n    to {\n        transform: none;\n    }\n}\n\n.floating-window {\n    animation: open-window 200ms ease;\n    min-width: 200px;\n    min-height: 300px;\n    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);\n    display: flex;\n    flex-direction: column;\n    -webkit-app-region: no-drag;\n    position: fixed;\n    z-index: 1001;\n    box-sizing: border-box;\n}\n\n.floating-window.modal-open {\n    z-index: 999;\n}\n\n.floating-window.resizable {\n    overflow: auto;\n    resize: both;\n    padding-bottom: 10px;\n    background: var(--background-tertiary);\n}\n\n.floating-window-titlebar {\n    width: 100%;\n    height: 28px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    color: #FFFFFF;\n    background: var(--background-tertiary); /* #2F3129background-color: #202225; */\n}\n\n.floating-window-content {\n    display: flex;\n    flex-direction: column;\n    background: var(--background-secondary);\n    color: #FFFFFF;\n    flex: 1;\n    overflow: hidden;\n}\n\n.floating-window-titlebar .title {\n    /* font-weight: bold; */\n    font-size: 0.85em;\n    font-weight: 600;\n    color: var(--header-secondary);\n    flex: 1;\n    padding: 0 8px;\n}\n\n.floating-window-buttons {\n    display: flex;\n}\n\n.floating-window-buttons .button {\n    cursor: pointer;\n    height: 28px;\n    width: 30px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: var(--interactive-normal);\n}\n\n.floating-window-buttons .button svg,\n.floating-window-buttons .button .fill {\n    fill: currentColor;\n}\n\n.floating-window-buttons .maximize-button:hover {\n    background: var(--background-modifier-hover);\n}\n\n.floating-window-buttons .maximize-button:active {\n    background: var(--background-modifier-active);\n}\n\n.floating-window-buttons .close-button:hover {\n    background: #F04747;\n    color: #FFFFFF;\n}\n\n.floating-window-content #bd-editor-panel {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n    overflow: hidden;\n}\n\n.floating-window .editor-wrapper {\n    flex: 1;\n    overflow: hidden;\n}\n\n.floating-window .editor {\n    height: auto;\n    flex: 1;\n}\n\n.floating-window #bd-editor-controls {\n    z-index: 10;\n    height: auto;\n    background: var(--background-secondary-alt);\n    border: none;\n    box-shadow: var(--elevation-low);\n}\n\n#floating-editor-window {\n    min-width: 340px;\n    min-height: 280px;\n    max-height: 900px;\n    max-width: 750px;\n}\n\n.floating-addon-window {\n    min-width: 535px;\n    min-height: 605px;\n    max-height: 90%;\n    max-width: 90%;\n}\n\n.bd-keybind-wrap {\n    position: relative;\n    min-width: 250px;\n    box-sizing: border-box;\n    border-radius: 3px;\n    background-color: hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .1);\n    border: 1px solid hsla(0, calc(var(--saturation-factor, 1)*0%), 0%, .3);\n    padding: 10px;\n    height: 40px;\n    cursor: pointer;\n}\n\n.bd-keybind-wrap input {\n    outline: none;\n    border: none;\n    pointer-events: none;\n    color: var(--text-normal);\n    background: none;\n    font-size: 16px;\n    text-transform: uppercase;\n    font-weight: 700;\n}\n\n.bd-keybind-wrap.recording {\n    border-color: hsla(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%, .3);\n}\n\n.bd-keybind-wrap.recording {\n    box-shadow: 0 0 6px hsla(359, calc(var(--saturation-factor, 1)*82.6%), 59.4%, .3);\n}\n\n.bd-keybind-controls {\n    position: absolute;\n    right: 5px;\n    top: 3px;\n    display: flex;\n    align-items: center;\n}\n\n.bd-keybind-clear {\n    background: none!important;\n    opacity: 0.5;\n    padding-right: 4px!important;\n}\n\n.bd-keybind-clear:hover {\n    background: none;\n    opacity: 1;\n}\n\n.bd-keybind-clear svg {\n    width: 18px !important;\n    height: 18px !important;\n}\n\n.bd-modal-wrapper {\r\n    position: absolute;\r\n    z-index: 1000;\r\n    width: 100vw;\r\n    height: 100vh;\r\n}\n\n.bd-backdrop {\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0,0,0, .6);\r\n    position: absolute;\r\n}\n\n.bd-modal {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    transform: translate(-50%, -50%);\r\n    width: 33%;\r\n}\n\n.bd-modal-inner {\r\n    background: var(--background-primary);\r\n    border-radius: 4px;\r\n    overflow: hidden;\r\n    animation: bd-modal-open ease-out;\r\n    animation-duration: 300ms;\r\n}\n\n.bd-modal-wrapper.closing .bd-modal-inner {\r\n    animation: bd-modal-close ease-in;\r\n    animation-duration: 300ms;\r\n}\n\n.bd-modal .footer {\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    padding: 15px;\r\n    background: var(--background-secondary);\r\n}\n\n.bd-modal-body {\r\n    padding: 20px 15px;\r\n    padding-top: 0;\r\n}\n\n.bd-modal .header {\r\n    padding: 15px;\r\n}\n\n.bd-modal .title {\r\n    font-size: 22px;\r\n    color: #fff;\r\n    font-weight: 600;\r\n}\n\n.bd-modal-body {\r\n    color: #fff;\r\n}\n\n.bd-modal .footer .bd-button {\r\n    min-width: 80px;\r\n    height: 38px;\r\n}\n\n@keyframes bd-modal-close {\r\n    to {transform: scale(0.7);}\r\n}\n\n@keyframes bd-modal-open {\r\n    from {transform: scale(0.7);}\r\n}\n\n.bd-notice-success {\n    --color: #3BA55D;\n}\n\n.bd-notice-error {\n    --color: #ED4245;\n}\n\n.bd-notice-info {\n    --color: #4A8FE1;\n}\n\n.bd-notice-warning {\n    --color: #FAA81A;\n}\n\n.bd-notice-closing {\n    transition: height 400ms ease;\n    height: 0 !important;\n}\n\n@keyframes bd-open-notice {\n    from {\n        height: 0;\n    }\n}\n\n.bd-notice {\n    animation: bd-open-notice 400ms ease;\n    overflow: hidden;\n    height: 36px;\n    font-size: 14px;\n    line-height: 36px;\n    font-weight: 500;\n    text-align: center;\n    position: relative;\n    padding-left: 4px;\n    padding-right: 28px;\n    z-index: 101;\n    flex-shrink: 0;\n    flex-grow: 0;\n    box-shadow: var(--elevation-low);\n    color: #FFFFFF;\n    background: var(--color, var(--brand-experiment-600, #3C45A5));\n}\n\n.bd-notice:first-child {\n    border-radius: 8px 0 0;\n}\n\n.bd-notice-close {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 36px;\n    height: 36px;\n    background: url(https://discord.com/assets/7731c77d99babca1a8faec204d98c380.svg) no-repeat;\n    background-position: 50% 55%;\n    background-size: 10px 10px;\n    opacity: 0.5;\n    transition: opacity 0.2s;\n    cursor: pointer;\n    -webkit-app-region: no-drag;\n}\n\n.bd-notice-button {\n    font-size: 14px;\n    font-weight: 500;\n    position: relative;\n    top: 6px;\n    border: 1px solid;\n    color: #FFFFFF;\n    border-radius: 3px;\n    height: 24px;\n    padding: 0 10px;\n    box-sizing: border-box;\n    display: inline-block;\n    vertical-align: top;\n    margin-left: 10px;\n    line-height: 22px;\n    transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n    -webkit-app-region: no-drag;\n    border-color: #FFFFFF;\n    background: transparent;\n}\n\n.bd-notice-button:hover {\n    color: var(--color, var(--background-mobile-primary));\n    background: #FFFFFF;\n}\n\n.bd-notice-close:hover {\n    opacity: 1;\n}\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n    opacity: 0.5;\n}\n\n.bd-number-input {\n    display: flex;\n    background-color: var(--deprecated-text-input-bg);\n    border: 1px solid var(--deprecated-text-input-border);\n    color: var(--text-normal);\n    font-size: 14px;\n    padding: 5px;\n    margin: 0;\n    border-radius: 3px;\n    width: 70px;\n}\n\n.bd-radio-group {\n    min-width: 300px;\n}\n\n.bd-radio-option {\n    display: flex;\n    align-items: center;\n    padding: 10px;\n    margin-bottom: 8px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--background-secondary);\n    border-radius: 3px;\n    color: var(--interactive-normal);\n}\n\n.bd-radio-option:hover {\n    background-color: var(--background-modifier-hover);\n}\n\n.bd-radio-option.bd-radio-selected {\n    background-color: var(--background-modifier-selected);\n    color: var(--interactive-active);\n}\n\n.bd-radio-option input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n\n.bd-radio-icon {\n    margin-right: 10px;\n}\n\n.bd-radio-label-wrap {\n    display: flex;\n    flex-direction: column;\n}\n\n.bd-radio-label {\n    font-family: var(--font-primary);\n    font-size: 16px;\n    line-height: 20px;\n    font-weight: 500;\n}\n\n.bd-radio-description {\n    font-family: var(--font-primary);\n    font-size: 14px;\n    line-height: 18px;\n    font-weight: 400;\n}\n\n.bd-sidebar-header {\n    display: flex;\n    justify-content: space-between;\n}\n\n.bd-sidebar-header .bd-changelog-button {\n    height: 16px;\n}\n\n.bd-sidebar-header .bd-icon {\n    cursor: pointer;\n    fill: var(--interactive-normal);\n}\n\n.bd-sidebar-header .bd-icon:hover {\n    fill: var(--interactive-hover);\n}\n\n.bd-slider-wrap {\n    display: flex;\n    color: var(--text-normal);\n    align-items: center;\n  }\n\n.bd-slider-label {\n    background: var(--brand-experiment);\n    font-weight: 700;\n    padding: 5px;\n    margin-right: 10px;\n    border-radius: 5px;\n  }\n\n.bd-slider-input {\n    /* -webkit-appearance: none;  */\n    height: 8px;\n    border-radius: 4px;\n    appearance: none;\n    min-width: 350px;\n    border-radius: 5px;   \n    background: hsl(217,calc(var(--saturation-factor, 1)*7.6%),33.5%);\n    outline: none;\n    transition: opacity .2s;\n    background-image: linear-gradient(var(--brand-experiment), var(--brand-experiment));\n    background-size: 70% 100%;\n    background-repeat: no-repeat;\n  }\n\n/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */\n\n.bd-slider-input::-webkit-slider-thumb {\n    appearance: none;\n    width: 10px;\n    height: 24px;\n    top: 50%;\n    border-radius: 3px;\n    background-color: hsl(0,calc(var(--saturation-factor, 1)*0%),100%);\n    border: 1px solid hsl(210,calc(var(--saturation-factor, 1)*2.9%),86.7%);\n    -webkit-box-shadow: 0 3px 1px 0 hsla(0,calc(var(--saturation-factor, 1)*0%),0%,.05),0 2px 2px 0 hsla(0,calc(var(--saturation-factor, 1)*0%),0%,.1),0 3px 3px 0 hsla(0,calc(var(--saturation-factor, 1)*0%),0%,.05);\n    box-shadow: 0 3px 1px 0 hsla(0,calc(var(--saturation-factor, 1)*0%),0%,.05),0 2px 2px 0 hsla(0,calc(var(--saturation-factor, 1)*0%),0%,.1),0 3px 3px 0 hsla(0,calc(var(--saturation-factor, 1)*0%),0%,.05);\n    cursor: ew-resize;\n  }\n\n/* Switches */\n\n.bd-switch {\n    position: relative;\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1) filter, 250ms cubic-bezier(0, 0.3, 0.7, 1) opacity;\n}\n\n.bd-switch-body {\n    --switch-color: rgb(114, 118, 125);\n    --symbol1path: path('M5.13231 6.72963L6.7233 5.13864L14.855 13.2704L13.264 14.8614L5.13231 6.72963Z');\n    --symbol2path: path('M13.2704 5.13864L14.8614 6.72963L6.72963 14.8614L5.13864 13.2704L13.2704 5.13864Z');\n\n    border-radius: 14px;\n    width: 40px;\n    height: 24px;\n    background-color: var(--switch-color);\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1) background-color;\n    position: relative;\n}\n\n.bd-switch input:active + .bd-switch-body {\n    --switch-color: rgba(100, 137, 126);\n}\n\n.bd-switch input:checked + .bd-switch-body {\n    --switch-color: rgb(67, 181, 129);\n    --symbol1path: path('M7.89561 14.8538L6.30462 13.2629L14.3099 5.25755L15.9009 6.84854L7.89561 14.8538Z');\n    --symbol2path: path('M4.08643 11.0903L5.67742 9.49929L9.4485 13.2704L7.85751 14.8614L4.08643 11.0903Z');\n}\n\n.full-motion .bd-switch input:active + .bd-switch-body {\n    --symbol1path: path('M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z');\n    --symbol2path: path('M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z');\n}\n\n.bd-switch input:checked:active + .bd-switch-body {\n    --switch-color: rgba(81, 162, 128);\n}\n\n.full-motion .bd-switch input:checked:active + .bd-switch-body {\n    --symbol1path: path('M6.56666 11.0013L6.56666 8.96683L13.5667 8.96683L13.5667 11.0013L6.56666 11.0013Z');\n    --symbol2path: path('M13.5582 8.96683L13.5582 11.0013L6.56192 11.0013L6.56192 8.96683L13.5582 8.96683Z');\n}\n\n.bd-switch .bd-switch-symbol path {\n    fill: var(--switch-color);\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1);\n}\n\n.bd-switch .bd-switch-symbol path:first-child {\n    d: var(--symbol1path);\n}\n\n.bd-switch .bd-switch-symbol path:last-child {\n    d: var(--symbol2path);\n}\n\n.bd-switch input {\n    position: absolute;\n    z-index: 1;\n    opacity: 0;\n    margin: 0;\n    width: 100%;\n    height: 100%;\n    border-radius: 100px;\n    cursor: pointer;\n}\n\n.bd-switch-body .bd-switch-slider {\n    display: block;\n    position: absolute;\n    left: -3px;\n    width: 28px;\n    height: 18px;\n    margin: 3px;\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1);\n}\n\n.bd-switch input:active + .bd-switch-body .bd-switch-slider {\n    left: 1px;\n}\n\n.bd-switch input:checked + .bd-switch-body .bd-switch-slider {\n    left: 12px;\n}\n\n.bd-switch input:active:checked + .bd-switch-body .bd-switch-slider {\n    left: 8px;\n}\n\n.bd-switch-body .bd-switch-slider .bd-switch-handle {\n    transition: 250ms cubic-bezier(0, 0.3, 0.7, 1);\n    position: relative;\n}\n\n.bd-switch input:active + .bd-switch-body .bd-switch-handle {\n    width: 28px;\n    height: 18px;\n    y: 1;\n    x: 0;\n}\n\n.bd-switch input:checked:active + .bd-switch-body .bd-switch-handle {\n    x: 0;\n}\n\n.bd-switch-disabled {\n    opacity: 0.5;\n    filter: grayscale(1);\n}\n\n.bd-switch-disabled input {\n    cursor: not-allowed;\n}\n\n.bd-tab-bar {\n    display: flex;\n    flex-direction: row;\n}\n\n.bd-tab-item {\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    min-width: 40px;\n    display: flex;\n    border-radius: 4px;\n    margin-right: 16px;\n    padding: 2px 8px;\n    -webkit-app-region: no-drag;\n    cursor: pointer;\n    position: relative;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    color: var(--interactive-normal);\n    flex-shrink: 0;\n    font-weight: 500;\n    font-size: 16px;\n    line-height: 20px;\n}\n\n.bd-tab-item:last-child {\n    margin: 0;\n}\n\n.bd-tab-item:hover,\n.bd-tab-item.selected {\n    color: var(--interactive-active);\n}\n\n.bd-tab-item.selected {\n    cursor: default;\n    background-color: var(--background-modifier-selected);\n}\n\n.bd-tab-item:hover {\n    background-color: var(--background-modifier-hover);\n}\n\n.bd-tab-item:active {\n    background-color: var(--background-modifier-active);\n}\n\n.bd-text-input {\n    min-width: 250px;\n    font-size: 16px;\n    box-sizing: border-box;\n    border-radius: 3px;\n    color: var(--text-normal);\n    background-color: var(--input-background);\n    border: none;\n    padding: 10px;\n    height: 40px;\n  }\n\n.bd-toasts {\n    position: fixed;\n    display: flex;\n    top: 0;\n    flex-direction: column;\n    align-items: center;\n    justify-content: flex-end;\n    pointer-events: none;\n    z-index: 4000;\n}\n\n@keyframes bd-toast-up {\n    from {\n        transform: translateY(0);\n        opacity: 0;\n    }\n}\n\n.bd-toast {\n    animation: bd-toast-up 300ms ease;\n    transform: translateY(-10px);\n    background-color: var(--background-primary);\n    padding: 10px;\n    border-radius: 5px;\n    box-shadow: var(--elevation-medium), var(--elevation-stroke);\n    font-weight: 500;\n    color: var(--header-primary);\n    font-size: 14px;\n    opacity: 1;\n    margin-top: 10px;\n    pointer-events: none;\n    user-select: none;\n}\n\n@keyframes bd-toast-down {\n    to {\n        transform: translateY(0);\n        opacity: 0;\n    }\n}\n\n.bd-toast.toast-info,\n.bd-toast.toast-success,\n.bd-toast.toast-danger,\n.bd-toast.toast-error,\n.bd-toast.toast-warning,\n.bd-toast.toast-warn {\n    color: #FFFFFF;\n}\n\n.bd-toast.closing {\n    animation: bd-toast-down 200ms ease;\n    animation-fill-mode: forwards;\n    opacity: 1;\n    transform: translateY(-10px);\n}\n\n.bd-toast.icon {\n    padding-left: 30px;\n    background-size: 20px 20px;\n    background-repeat: no-repeat;\n    background-position: 6px 50%;\n}\n\n.bd-toast.toast-info {\n    background-color: #4A90E2;\n}\n\n.bd-toast.toast-info.icon {\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMSAxNWgtMnYtNmgydjZ6bTAtOGgtMlY3aDJ2MnoiLz48L3N2Zz4=\");\n}\n\n.bd-toast.toast-success {\n    background-color: #43B581;\n}\n\n.bd-toast.toast-success.icon {\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptLTIgMTVsLTUtNSAxLjQxLTEuNDFMMTAgMTQuMTdsNy41OS03LjU5TDE5IDhsLTkgOXoiLz48L3N2Zz4=\");\n}\n\n.bd-toast.toast-danger,\n.bd-toast.toast-error {\n    background-color: #F04747;\n}\n\n.bd-toast.toast-danger.icon,\n.bd-toast.toast-error.icon {\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTEyIDJDNi40NyAyIDIgNi40NyAyIDEyczQuNDcgMTAgMTAgMTAgMTAtNC40NyAxMC0xMFMxNy41MyAyIDEyIDJ6bTUgMTMuNTlMMTUuNTkgMTcgMTIgMTMuNDEgOC40MSAxNyA3IDE1LjU5IDEwLjU5IDEyIDcgOC40MSA4LjQxIDcgMTIgMTAuNTkgMTUuNTkgNyAxNyA4LjQxIDEzLjQxIDEyIDE3IDE1LjU5eiIvPiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+PC9zdmc+\");\n}\n\n.bd-toast.toast-warning,\n.bd-toast.toast-warn {\n    background-color: #FFA600;\n}\n\n.bd-toast.toast-warning.icon,\n.bd-toast.toast-warn.icon {\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4gICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPiAgICA8cGF0aCBkPSJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0eiIvPjwvc3ZnPg==\");\n}\n\n.bd-layer {\n    position: absolute;\n}\n\n.bd-tooltip {\n    position: relative;\n    border-radius: 5px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 16px;\n    max-width: 190px;\n    box-sizing: border-box;\n    word-wrap: break-word;\n    z-index: 1002;\n    will-change: opacity, transform;\n    box-shadow: var(--elevation-high);\n    color: var(--header-primary);\n}\n\n.bd-tooltip-content {\n    padding: 8px 12px;\n    overflow: hidden;\n    }\n\n.bd-tooltip-pointer {\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    border: 5px solid transparent;\n}\n\n.bd-tooltip-primary {\n    background-color: var(--background-floating);\n    color: var(--text-normal);\n}\n\n.bd-tooltip-primary .bd-tooltip-pointer {\n    border-top-color: var(--background-floating);\n}\n\n.bd-tooltip-info {\n    background-color: #4A90E2;\n}\n\n.bd-tooltip-info .bd-tooltip-pointer {\n    border-top-color: #4A90E2;\n}\n\n.bd-tooltip-success {\n    background-color: #43B581;\n}\n\n.bd-tooltip-success .bd-tooltip-pointer {\n    border-top-color: #43B581;\n}\n\n.bd-tooltip-danger {\n    background-color: #F04747;\n}\n\n.bd-tooltip-danger .bd-tooltip-pointer {\n    border-top-color: #F04747;\n}\n\n.bd-tooltip-warn {\n    background-color: #FFA600;\n}\n\n.bd-tooltip-warn .bd-tooltip-pointer {\n    border-top-color: #FFA600;\n}\n\n.bd-tooltip-top .bd-tooltip-pointer {\n    position: absolute;\n    top: 100%;\n    left: 50%;\n    margin-left: -5px;\n}\n\n.bd-tooltip-bottom .bd-tooltip-pointer {\n    position: absolute;\n    bottom: 100%;\n    left: 50%;\n    margin-left: -5px;\n    transform: rotate(180deg);\n}\n\n.bd-tooltip-right .bd-tooltip-pointer {\n    position: absolute;\n    right: 100%;\n    top: 50%;\n    margin-top: -5px;\n    border-left-width: 5px;\n    transform: rotate(90deg);\n}\n\n.bd-tooltip-left .bd-tooltip-pointer {\n    position: absolute;\n    left: 100%;\n    top: 50%;\n    margin-top: -5px;\n    border-left-width: 5px;\n    transform: rotate(270deg);\n}\n\n.bd-filled-checkmark {\n    background: #43B581;\n    border-radius: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 3px;\n}\n\n.bd-empty-updates {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: var(--header-primary);\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.bd-empty-updates svg {\n  fill: #43B581;\n  margin-bottom: 20px;\n}\n\n.bd-empty-image-container {\n    background: transparent;\n}\n\n.bd-empty-image-header {\n    color: var(--header-primary);\n    font-size: 24px;\n    font-weight: 600;\n    margin-bottom: 8px;\n}\n\n.bd-empty-image-message {\n    color: var(--header-secondary);\n    margin-bottom: 8px;\n}\n\n.bd-empty-image-container .bd-button {\n    margin-top: 10px;\n    padding: 10px 16px;\n}\n\n.bd-empty-results {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: var(--text-normal);\n    font-size: 16px;\n    line-height: 24px;\n    margin-top: 100px;\n}\n\n.bd-empty-results-text {\n    width: 280px;\n    margin-top: 40px;\n    text-align: center;\n}\n\n.bd-button {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    background-color: #3E82E5;\n    color: #FFFFFF;\n    border-radius: 3px;\n    padding: 4px 8px;\n    transition: background-color 0.17s ease, color 0.17s ease, opacity 250ms ease;\n}\n\n.bd-button:hover {\n    background-color: #3875CE;\n}\n\n.bd-button:active {\n    background-color: #3268B7;\n}\n\n.bd-button.bd-button-success {\n    background-color: #43B581;\n}\n\n.bd-button.bd-button-success:hover {\n    background-color: #3CA374;\n}\n\n.bd-button.bd-button-success:active {\n    background-color: #369167;\n}\n\n.bd-button.bd-button-warning {\n    background-color: #FAA61A;\n}\n\n.bd-button.bd-button-warning:hover {\n    background-color: #E19517;\n}\n\n.bd-button.bd-button-warning:active {\n    background-color: #C88515;\n}\n\n.bd-button.bd-button-danger {\n    background-color: #F04747;\n}\n\n.bd-button.bd-button-danger:hover {\n    background-color: #D84040;\n}\n\n.bd-button.bd-button-danger:active {\n    background-color: #C03939;\n}\n\n.bd-button-disabled {\n    opacity: 0.4;\n}\n\n.bd-button-disabled:hover {\n    cursor: not-allowed;\n}\n\n.bd-spinner {\n    width: 32px;\n    height: 32px;\n    position: relative;\n}\n\n.bd-cube1,\n.bd-cube2 {\n    background-color: #3E82E5;\n    width: 10px;\n    height: 10px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    animation: bd-sk-cubemove 1.8s infinite ease-in-out;\n}\n\n.bd-cube2 {\n    animation-delay: -0.9s;\n}\n\n@keyframes bd-sk-cubemove {\n    25% {\n        transform: translateX(22px) rotate(-90deg) scale(0.5);\n    }\n\n    50% {\n        transform: translateX(22px) translateY(22px) rotate(-179deg);\n    }\n\n    50.1% {\n        transform: translateX(22px) translateY(22px) rotate(-180deg);\n    }\n\n    75% {\n        transform: translateX(0) translateY(22px) rotate(-270deg) scale(0.5);\n    }\n\n    100% {\n        transform: rotate(-360deg);\n    }\n}\n\n.bd-search-wrapper {\n    padding: 3px;\n    border-radius: 3px;\n    outline: none;\n    border: 0;\n    background-color: var(--background-tertiary);\n    color: var(--text-muted);\n    display: flex;\n    align-items: center;\n}\n\n.bd-search {\n    padding: 2px 3px;\n    background: none;\n    border: 0;\n    color: var(--text-normal);\n    flex: 1;\n}\n\n.bd-search::-webkit-input-placeholder {\n    color: var(--text-muted);\n}\n\n.bd-search-wrapper > svg {\n    margin-right: 2px;\n    fill: var(--interactive-normal);\n}\n\n.bd-chat-badge {\n    vertical-align: bottom;\n    line-height: 1.375rem;\n    display: inline-block;\n    height: 1.25rem;\n}\n\n.bd-member-badge {\n    height: 15px;\n    margin-left: 4px;\n}\n\n.bd-changelog-modal video,\n.bd-changelog-modal img {\n    width: 100%;\n    border-radius: 5px;\n    outline: none;\n}\n\n.bd-changelog-modal code.inline {\n    padding: 0.2em;\n    margin: -0.2em 0;\n    border-radius: 3px;\n    font-size: 85%;\n    line-height: 1.125rem;\n    white-space: pre-wrap;\n    background: var(--background-secondary);\n}\n\n.bd-link {\n    text-decoration: none;\n}\n\n.bd-link:hover {\n    text-decoration: underline;\n}\n\n.bd-divider {\n    width: 100%;\n    height: 1px;\n    border-top: thin solid var(--background-modifier-accent);\n    margin-bottom: 1em;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!******************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/css-loader@6.7.1_webpack@5.73.0/node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "vm":
/*!*********************!*\
  !*** external "vm" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("vm");

/***/ }),

/***/ "electron":
/*!****************************************!*\
  !*** external "require(\"electron\")" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("electron");

/***/ }),

/***/ "events":
/*!**************************************!*\
  !*** external "require(\"events\")" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "fs":
/*!**********************************!*\
  !*** external "require(\"fs\")" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "original-fs":
/*!*******************************************!*\
  !*** external "require(\"original-fs\")" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
if(typeof require("original-fs") === 'undefined') { var e = new Error("Cannot find module 'require(\"original-fs\")'"); e.code = 'MODULE_NOT_FOUND'; throw e; }

module.exports = require("original-fs");

/***/ }),

/***/ "path":
/*!************************************!*\
  !*** external "require(\"path\")" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "request":
/*!***************************************!*\
  !*** external "require(\"request\")" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("request");

/***/ }),

/***/ "../assets/locales/bg.json":
/*!*********************************!*\
  !*** ../assets/locales/bg.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/cs.json":
/*!*********************************!*\
  !*** ../assets/locales/cs.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Pluginy","themes":"T??mata","customcss":"Vlastn?? CSS"},"Collections":{"settings":{"name":"Nastaven??","general":{"name":"Obecn??","emotes":{"name":"Syst??m emot??","note":"Povol?? syst??m emot?? BD"},"publicServers":{"name":"Ve??ejn?? servery","note":"Zobraz?? tla????tko ve??ejn??ch server??"},"voiceDisconnect":{"name":"Odpojen?? z hlas. kan??lu","note":"Odpojit z hlasov??ho kan??lu p??i zav??en?? Discordu"},"showToasts":{"name":"Zobrazit vyskakovac?? okna","note":"Zobraz?? mal?? ozn??men?? pro d??le??it?? informace"},"mediaKeys":{"name":"Zak??zat kl??vesy m??di??","note":"Zabr??n?? Discordu p??ivlastn??n?? kl??ves m??di?? p??i p??ehr??v??n?? videa."}},"window":{"removeMinimumSize":{"name":"Odebrat minim??ln?? velikost","note":"Odebere Discordem vynucenou minim??ln?? velikost okna 940x500"},"name":"P??edvolby okna","transparency":{"name":"Povolit pr??hlednost","note":"Povol?? pr??hlednost hlavn??ho okna (vy??aduje restart)"},"frame":{"name":"Okraj okna","note":"P??id?? nativn?? syst??mov?? okraj okna k hlavn??mu oknu"}},"addons":{"name":"Spr??vce dopl??k??","addonErrors":{"name":"Zobrazit chyby dopl??k??","note":"Zobraz?? okno s chybami plugin??/t??mat"},"editAction":{"name":"Upravit akci","note":"Kde se objev?? dopl??ky a t??mata p??i ??prav??","options":{"detached":"Odd??len?? okno","system":"Syst??mov?? editor"}}},"customcss":{"name":"Vlastn?? CSS","customcss":{"name":"Vlastn?? CSS","note":"Povol?? z??lo??ku Vlastn?? CSS"},"liveUpdate":{"name":"Okam??it?? aktualizace","note":"Aktualizuje CSS p??i psan??"},"startDetached":{"name":"Spustit odd??len??","note":"Kliknut?? na z??lo??ku Vlastn?? CSS otev??e editor v odd??len??m okn??"},"nativeOpen":{"name":"Otev????t v nativn??m editoru","note":"Kliknut?? na z??lo??ku Vlastn?? CSS otev??e tv?? vlastn?? CSS ve tv??m nativn??m editoru"},"openAction":{"name":"Lokace editoru","note":"Kde se m?? ve v??choz??m nastaven?? otev????t Vlastn?? CSS","options":{"settings":"Menu nastaven??","detached":"Odd??len?? okno","system":"Syst??mov?? editor"}}},"developer":{"name":"V??voj????sk?? nastaven??","debuggerHotkey":{"name":"Zkratka lad??n??","note":"Povol?? aktivaci lad??n?? p??i stisknut?? F8"},"reactDevTools":{"name":"V??voj????sk?? n??stroje React","note":"Vlo???? tvou lok??ln?? instalaci React Developer Tools do Discordu"},"inspectElement":{"name":"Zkratka prozkoum??n?? prvku","note":"Povol?? kl??vesovou zkratku prozkoum??n?? prvku (Ctrl + Shift + C), kter?? je norm??ln?? ve v??t??in?? prohl????e????"},"devToolsWarning":{"name":"Zastavit varov??n?? DevTools","note":"Zabr??n?? Discordu vypisovat jeho \\"Zadr??!\\" zpr??vu"},"debugLogs":{"name":"Ladic?? protokoly","note":"Vyp????e v??e z konzole do souboru debug.log ve slo??ce BetterDiscordu"}}},"emotes":{"name":"Emoty","general":{"name":"Obecn??","download":{"name":"St??hnout emoty","note":"St??hne emoty v??dy, kdy jsou zastaral??"},"emoteMenu":{"name":"Menu emot??","note":"Zobrazit Twitch/obl??ben?? emoty v menu emot??"},"hideEmojiMenu":{"name":"Skr??t menu smajl??k??","note":"Skryje menu smajl??k?? Discordu p??i pou????v??n?? menu emot??"},"autoCaps":{"name":"Automatick?? kapitalizace emot??","note":"Automatick?? kapitalizace emote p????kaz??"},"modifiers":{"name":"Zobrazit modifik??tory emot??","note":"Povolit modifik??tory emot?? (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animovat p??i p??ejet??","note":"Animovat modifik??tory emot?? pouze p??i p??ejet?? my????"}},"categories":{"name":"Kategorie","twitchglobal":{"name":"Glob??ln?? Twitch","note":"Zobraz?? glob??ln?? Twitch emoty"},"twitchsubscriber":{"name":"Odb??ratel?? Twitch","note":"Zobraz?? odb??ratelsk?? Twitch emoty"},"frankerfacez":{"name":"FrankerFaceZ","note":"Zobraz?? emoty od FFZ"},"bttv":{"name":"BetterTTV","note":"Zobraz?? emoty od BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} od {{author}}","byline":"od {{author}}","openFolder":"Otev????t slo??ku {{type}}","reload":"Znovu na????st","addonSettings":"Nastaven??","website":"Web","source":"Zdroj","invite":"Server podpory","donate":"P??isp??t","patreon":"Patreon","name":"N??zev","author":"Autor","version":"Verze","added":"Datum p??id??n??","modified":"Datum upraven??","search":"Hledat {{type}}","editAddon":"Upravit","deleteAddon":"Odstranit","confirmDelete":"Opravdu chce?? odstranit {{name}}?","confirmationText":"M???? neulo??en?? zm??ny u {{name}}. Zav??en??m tohoto okna je v??echny ztrat????.","enabled":"Dopln??k {{name}} byl povolen.","disabled":"Dopln??k {{name}} byl zak??z??n.","couldNotEnable":"Dopln??k {{name}} nemohl b??t povolen.","couldNotDisable":"Dopln??k {{name}} nemohl b??t zak??z??n.","couldNotStart":"Dopln??k {{name}} nemohl b??t spu??t??n.","couldNotStop":"Dopln??k {{name}} nemohl b??t zastaven.","settingsError":"Nepoda??ilo se otev????t nastaven?? {{name}}","methodError":"Nepoda??ilo se spustit metodu {{method}}.","unknownAuthor":"Nezn??m?? autor","noDescription":"Bez popisu.","alreadyExists":"Ji?? existuje {{type}} s n??zvem {{name}}","alreadWatching":"Ji?? sledujete dopl??ky.","metaError":"META b??t nemohl parsov??n.","missingNameData":"META chyb??j??c?? ??daje n??zvu.","metaNotFound":"META nebyl nalezen.","compileError":"Nepoda??ilo se zkompilovat.","wasUnloaded":"Dopln??k {{name}} byl odna??ten.","blankSlateHeader":"Nem???? ????dn??/????dn?? {{type}}!","blankSlateMessage":"Najdi si n??jak?? na [tomto webu]({{link}}) a p??idej je do sv?? {{type}} slo??ky."},"CustomCSS":{"confirmationText":"M???? neulo??en?? zm??ny ve vlastn??m CSS. Zav??en??m tohoto okna je v??echny ztrat????.","update":"Aktualizovat","save":"Ulo??it","openNative":"Otev????t v syst??mov??m editoru","openDetached":"Odd??lit okno","settings":"Nastaven?? editoru","editorTitle":"Okno vlastn??ho CSS"},"Emotes":{"loading":"Na????t??n?? emot?? na pozad?? - neobnovuj.","loaded":"V??echny emoty byly ??sp????n?? na??teny.","clearEmotes":"Vy??istit data emot??","favoriteAction":"Obl??ben??!","downloadFailed":"Stahov??n?? selhalo","failureMessage":"BetterDiscordu se nepoda??ilo st??hnout emoty, zkontroluj pros??m sv?? internetov?? p??ipojen?? a firewall."},"PublicServers":{"button":"ve??ejn??","join":"P??ipojit se","joining":"P??ipojuji se","joined":"P??ipojen","loading":"Na????t??n??","loadMore":"Na????st v??ce","notConnected":"Nep??ipojen","connectionRequired":"Aby ses mohl/a p??ipojovat na servery, mus???? p??ipojit sv??j ????et.","connectionError":"Chyba spojen??","connectionErrorMessage":"P??i p??ipojov??n?? k DiscordServers.com se vyskytla chyba, je mo??n??, ??e jejich web/API je offline. Zkus to pros??m znovu pozd??ji.","pagination":"Strana {{page}} z {{count}}","search":"Hledat","connect":"P??ipojit","reconnect":"Znovu p??ipojit","categories":"Kategorie","keywords":"Kl????ov?? slova","connection":"P??ipojen/a jako: {{username}}#{{discriminator}}","results":"Zobrazov??n?? {{start}}-{{end}} z {{total}} v??sledk?? v kategorii {{category}}","query":"pro dotaz {{query}}"},"Modals":{"confirmAction":"Opravdu?","okay":"Dob??e","done":"Hotovo","cancel":"Zru??it","nevermind":"Ne","close":"Zav????t","name":"N??zev","message":"Zpr??va","error":"Chyba","addonErrors":"Chyby dopl??ku","restartRequired":"Vy??adov??n restart","restartNow":"Restartovat nyn??","restartLater":"Restartovat pozd??ji","additionalInfo":"Dodate??n?? informace","restartPrompt":"Aby se tato zm??na projevila, bude pot??eba restartovat Discord. Chce?? jej restartovat nyn???"},"ReactDevTools":{"notFound":"Roz??????en?? nenalezeno","notFoundDetails":"Nepoda??ilo se nal??zt roz??????en?? React Developer Tools na tv??m po????ta??i. Nainstaluj si pros??m roz??????en?? na sv?? lok??ln?? Chrome instalaci."},"Sorting":{"sortBy":"Se??adit podle","order":"Po??ad??","ascending":"Vzestupn??","descending":"Sestupn??"},"WindowPrefs":{"enabledInfo":"Tato mo??nost vy??aduje pr??hledn?? t??ma, aby fungovala spr??vn??. Na Windows to m????e rozb??t Areo p??ichyt??v??n?? a maximalizov??n??.\\n\\nAby se tato zm??na projevila, bude pot??eba restartovat Discord. Chce?? jej restartovat nyn???","disabledInfo":"Aby se tato zm??na projevila, bude pot??eba restartovat Discord. Chce?? jej restartovat nyn???"}}');

/***/ }),

/***/ "../assets/locales/da.json":
/*!*********************************!*\
  !*** ../assets/locales/da.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/de.json":
/*!*********************************!*\
  !*** ../assets/locales/de.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Themes","customcss":"Custom-CSS"},"Collections":{"settings":{"name":"Einstellungen","general":{"name":"Allgemein","emotes":{"name":"Emotesystem","note":"Aktiviert das BD-Emotesystem"},"publicServers":{"name":"??ffentliche Server","note":"Zeigt den Knopf f??r ??ffentliche Server"},"voiceDisconnect":{"name":"Verbindung zum Sprachchat trennen","note":"Trennt beim Schlie??en von Discord die Verbindung zum Sprachchat"},"showToasts":{"name":"Toast-Benachrichtigungen anzeigen","note":"Zeigt eine kleine Benachrichtigung f??r wichtige Informationen an"},"mediaKeys":{"name":"Medien-Tasten deaktivieren","note":"Verhindert, dass Discord deine Medien-Tasten nach dem Abspielen eines Videos beansprucht"}},"window":{"removeMinimumSize":{"name":"Freie Fenstergr????e","note":"Entfernt die Beschr??nkung der minimalen Fenstergr????e von 940x500 Pixel"},"name":"Fenster-Einstellungen","transparency":{"name":"Transparenz aktivieren","note":"Macht den Discord-Hintergrund transparent (Ben??tigt Discord Neustart)"},"frame":{"name":"Standard-Design","note":"Stellt das Hauptfenster im Standard-Design des Betriebssystems dar"}},"addons":{"name":"Erweiterungsverwaltung","addonErrors":{"name":"Fehlernachricht f??r Erweiterungen anzeigen","note":"Zeigt ein Informationsfenster bei Ladefehlern von Erweiterungen an"},"editAction":{"name":"Bearbeitungsaktion","note":"Bestimmt womit Plugins und Themes zum Bearbeiten ge??ffnet werden","options":{"detached":"Losgel??stes Fenster","system":"Systemweiter Standard-Texteditor"}}},"customcss":{"name":"Custom-CSS","customcss":{"name":"Custom-CSS","note":"Aktiviert den Custom-CSS Reiter in den Einstellungen"},"liveUpdate":{"name":"Echtzeitaktualisierung","note":"Aktualisert den CSS Code w??hrend des Schreibens"},"startDetached":{"name":"In losgel??stem Fenster ??ffnen","note":"Das ??ffnen des \\\\\\"Custom-CSS\\\\\\"-Reiters ??ffnet den Editor in einem separaten Fenster"},"nativeOpen":{"name":"Im System-Editor ??ffnen","note":"Das ??ffnen des \\\\\\"Custom-CSS\\\\\\"-Reiters ??ffnet den Editor im systemweiten Standard-Texteditor"},"openAction":{"name":"Editormodus","note":"Wo soll Custom-CSS standardm????ig ge??ffnet werden","options":{"settings":"in den Einstellungen","detached":"in losgel??stem Fenster","system":"im Standard-Texteditor"}}},"developer":{"name":"Entwickler-Einstellungen","debuggerHotkey":{"name":"Debugger-Tastenk??rzel","note":"Erlaubt das Starten des Debuggers durch Dr??cken der F8-Taste"},"reactDevTools":{"name":"React-Entwicklerwerzeuge","note":"Koppelt eine vorhandene Installation der React-Entwicklerwerkzeuge in Discord ein"},"inspectElement":{"name":"Tastenk??rzel f??r \\"Element untersuchen\\"","note":"Aktiviert das Tastenk??rzel f??r \\\\\\"Element Untersuchen\\\\\\" (Strg + Shift + C), welches in g??ngigen Browsern vorhanden ist"},"devToolsWarning":{"name":"Entwicklerwerkzeuge Warnungen stoppen","note":"H??lt Discord davon ab ihre \\\\\\"Hold Up!\\\\\\" Warnung zu zeigen"},"debugLogs":{"name":"Debugger Logs","note":"Speichert alle Ausgaben aus der Konsole in die \\\\\\"debug.log\\\\\\" Datei im BetterDiscord Verzeichnis"}}},"emotes":{"name":"Emotes","general":{"name":"Allgemein","download":{"name":"Emotes herunterladen","note":"Lade Emotes herunter, wenn sie nicht mehr aktuell sind"},"emoteMenu":{"name":"Emote-Men??","note":"Twitch- und favorisierte Emotes im Emote-Men?? anzeigen"},"hideEmojiMenu":{"name":"Emoji-Men?? verstecken","note":"Versteckt Discords Emoji-Men?? bei der Nutzung des Emote-Men??s"},"autoCaps":{"name":"Automatische Gro??schreibung von Emotes","note":"Emote-Befehle werden automatisch gro??geschrieben"},"modifiers":{"name":"Emote-Modifikatoren anzeigen","note":"Aktiviert Emote-Modifikatoren (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Beim Hovern animieren","note":"Animiert Emote-Modifikatoren nur beim Hovern ??ber dem Emote"}},"categories":{"name":"Kategorien","twitchglobal":{"name":"Twitch Global","note":"Twitch-Global-Emotes anzeigen"},"twitchsubscriber":{"name":"Twitch Subscribers","note":"Twitch-Subscriber-Emotes anzeigen"},"frankerfacez":{"name":"FrankerFaceZ","note":"FFZ-Emotes anzeigen"},"bttv":{"name":"BetterTTV","note":"BTTV-Emotes anzeigen"}}}},"Addons":{"title":"{{name}} v{{version}} von {{author}}","byline":"von {{author}}","openFolder":"{{type}}-Ordner ??ffnen","reload":"Neu laden","addonSettings":"Einstellungen","website":"Webseite","source":"Quelle","invite":"Support-Server","donate":"Spenden","patreon":"Patreon","name":"Name","author":"Autor","version":"Version","added":"Hinzuf??gedatum","modified":"Bearbeitungsdatum","search":"{{type}} suchen","editAddon":"Bearbeiten","deleteAddon":"L??schen","confirmDelete":"Bist du dir sicher, dass du {{name}} l??schen willst?","confirmationText":"Du hast ungespeicherte ??nderungen in {{name}}. Durch das Schlie??en dieses Fensters verlierst du alle ??nderungen.","enabled":"{{name}} wurde aktiviert.","disabled":"{{name}} wurde deaktiviert.","couldNotEnable":"{{name}} konnte nicht aktiviert werden.","couldNotDisable":"{{name}} konnte nicht deaktiviert werden.","couldNotStart":"{{name}} konnte nicht gestartet werden.","couldNotStop":"{{name}} konnte nicht gestoppt werden.","settingsError":"Einstellungen f??r {{name}} konnten nicht ge??ffnet werden","methodError":"{{method}} konnte nicht ausgef??hrt werden.","unknownAuthor":"Unbekannter Autor","noDescription":"Keine Beschreibung angegeben.","alreadyExists":"Es existiert bereits ein {{type}} mit dem Namen {{name}}","alreadWatching":"Erweiterungen werden bereits beobachtet.","metaError":"META konnte nicht geparst werden.","missingNameData":"META enth??lt keinen \\\\\\"name\\\\\\" Parameter.","metaNotFound":"META nicht gefunden.","compileError":"Konnte nicht kompiliert werden.","wasUnloaded":"{{name}} wurde entladen.","blankSlateHeader":"Du besitzt keine {{type}}s!","blankSlateMessage":"Lade dir welche von [this website]({{link}}) herunter und f??ge sie deinem {{type}} Ordner hinzu."},"CustomCSS":{"confirmationText":"Du hast ungespeicherte ??nderungen im Custom-CSS. Durch das Schlie??en dieses Fensters verlierst du alle ??nderungen.","update":"Aktualisieren","save":"Speichern","openNative":"Im System-Editor ??ffnen","openDetached":"Fenster trennen","settings":"Editor-Einstellungen","editorTitle":"Custom-CSS-Editor"},"Emotes":{"loading":"Lade alle Emotes im Hintergrund.","loaded":"Alle Emotes erfolgreich geladen.","clearEmotes":"Emote-Daten l??schen","favoriteAction":"Favorisieren!","downloadFailed":"Download fehlgeschlagen","failureMessage":"BetterDiscord konnte die Emotes nicht herunterladen, bitte ??berpr??fe deine Internetverbindung und Firewall."},"PublicServers":{"button":"public","join":"Beitreten","joining":"Trete bei","joined":"Beigetreten","loading":"Laden","loadMore":"Mehr laden","notConnected":"Nicht mit DiscordServers.com verbunden!","connectionRequired":"Du musst dein Konto verbinden, um Server beitreten zu k??nnen.","connectionError":"Verbindungsfehler","connectionErrorMessage":"Bei der Verbindung zu DiscordServers.com ist ein Fehler aufgetreten. Es ist m??glich, dass die Website/Api offline ist. Versuch es sp??ter noch einmal.","pagination":"Seite {{page}} von {{count}}","search":"Suchen","connect":"Verbinden","reconnect":"Wiederverbinden","categories":"Kategorien","keywords":"Schl??sselw??rter","connection":"Verbunden als: {{username}}#{{discriminator}}","results":"{{start}}-{{end}} von {{total}} Ergebnissen in {{category}} angezeigt","query":"f??r {{query}}"},"Modals":{"confirmAction":"Bist du dir sicher?","okay":"Okay","done":"Fertig","cancel":"Abbrechen","nevermind":"Egal","close":"Schlie??en","name":"Name","message":"Nachricht","error":"Fehler","addonErrors":"Erweiterungsfehler","restartRequired":"Neustart erforderlich","restartNow":"Jetzt neustarten","restartLater":"Sp??ter neustarten","additionalInfo":"Zus??tzliche Informationen","restartPrompt":"Die Einstellung wurde gespeichert. Um sie anzuwenden, ist ein Neustart von Discord erforderlich."},"ReactDevTools":{"notFound":"Erweiterung nicht gefunden","notFoundDetails":"React-Entwicklerwerkzeuge-Erweiterung konnte nicht gefunden werden. F??g die Erweiterung zu deiner Chrome-Installation hinzu."},"Sorting":{"sortBy":"Sortieren nach","order":"Reihenfolge","ascending":"Aufsteigend","descending":"Absteigend"},"WindowPrefs":{"enabledInfo":"Diese Option ben??tigt ein Theme mit transparentem Hintergrund um richtig zu funktionieren. Weiters kann dadurch unter Windows das Andocken des Fensters am Bildschirmrand beeintr??chtigt sein.\\n\\nUm die ??nderungen zu ??bernehmen muss Discord neugestartet werden. M??chtest du jetzt neustarten?","disabledInfo":"Die Einstellung wurde gespeichert. Um sie anzuwenden, ist ein Neustart von Discord erforderlich."}}');

/***/ }),

/***/ "../assets/locales/el.json":
/*!*********************************!*\
  !*** ../assets/locales/el.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/en-gb.json":
/*!************************************!*\
  !*** ../assets/locales/en-gb.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/en-us.json":
/*!************************************!*\
  !*** ../assets/locales/en-us.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Themes","customcss":"Custom CSS","updates":"Updates"},"Collections":{"settings":{"name":"Settings","general":{"name":"General","emotes":{"name":"Emote System","note":"Enables BD\'s emote system"},"publicServers":{"name":"Public Servers","note":"Display public servers button"},"voiceDisconnect":{"name":"Voice Disconnect","note":"Disconnect from voice server when closing Discord"},"showToasts":{"name":"Show Toasts","note":"Shows a small notification for important information"},"mediaKeys":{"name":"Disable Media Keys","note":"Prevents Discord from hijacking your media keys after playing a video."}},"window":{"removeMinimumSize":{"name":"Remove Minimum Size","note":"Removes Discord\'s forced minimum window size of 940x500"},"name":"Window Preferences","transparency":{"name":"Enable Transparency","note":"Enables the main window to be see-through (requires restart)"},"frame":{"name":"Window Frame","note":"Adds the native os window frame to the main window"}},"addons":{"name":"Addon Manager","addonErrors":{"name":"Show Addon Errors","note":"Shows a modal with plugin/theme errors"},"editAction":{"name":"Edit Action","note":"Where plugins & themes appear when editing","options":{"detached":"Detached Window","system":"System Editor"}}},"customcss":{"name":"Custom CSS","customcss":{"name":"Custom CSS","note":"Enables the Custom CSS tab"},"liveUpdate":{"name":"Live Update","note":"Updates the css as you type"},"startDetached":{"name":"Start Detached","note":"Clicking the Custom CSS tab opens the editor in a separate window"},"nativeOpen":{"name":"Open in Native Editor","note":"Clicking the Custom CSS tab opens your custom css in your native editor"},"openAction":{"name":"Editor Location","note":"Where Custom CSS should open by default","options":{"settings":"Settings Menu","detached":"Detached Window","system":"System Editor"}}},"developer":{"name":"Developer Settings","debuggerHotkey":{"name":"Debugger Hotkey","note":"Allows activating debugger when pressing F8 with DevTools open"},"reactDevTools":{"name":"React Developer Tools","note":"Injects your local installation of React Developer Tools into Discord"},"inspectElement":{"name":"Inspect Element Hotkey","note":"Enables the inspect element hotkey (ctrl + shift + c) that is common in most browsers"},"devToolsWarning":{"name":"Stop DevTools Warning","note":"Stops Discord from printing out their \\"Hold Up!\\" message"},"debugLogs":{"name":"Debug Logs","note":"Outputs everything from the console into the debug.log file in the BetterDiscord folder"},"devTools":{"name":"DevTools","note":"Enables toggling DevTools with ctrl+shift+i"}},"editor":{"name":"Editor Preferences","lineNumbers":{"name":"Line Numbers","note":"Enables showing line numbers on the side of the editor"},"fontSize":{"name":"Font Size","note":"Size of the font (pt) to use in the editor"},"minimap":{"name":"Minimap","note":"Enables showing the code minimap on the side of the editor"},"hover":{"name":"Reference Tooltips","note":"Enables showing the reference tooltips when hovering rules and selectors"},"quickSuggestions":{"name":"Quick Suggestions","note":"Enables showing the autocomplete suggestions as you type"},"renderWhitespace":{"name":"Show Whitespace","note":"When whitespace should be shown by the editor","options":{"all":"Always","none":"Never","selection":"Selection"}}}},"emotes":{"name":"Emotes","general":{"name":"General","download":{"name":"Download Emotes","note":"Download emotes whenever they are out of date"},"emoteMenu":{"name":"Emote Menu","note":"Show Twitch/Favourite emotes in emote menu"},"hideEmojiMenu":{"name":"Hide Emoji Menu","note":"Hides Discord\'s emoji menu when using emote menu"},"autoCaps":{"name":"Emote Autocapitalization","note":"Autocapitalize emote commands"},"modifiers":{"name":"Show Emote Modifiers","note":"Enable emote mods (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animate On Hover","note":"Only animate the emote modifiers on hover"}},"categories":{"name":"Categories","twitchglobal":{"name":"Twitch Globals","note":"Show Twitch global emotes"},"twitchsubscriber":{"name":"Twitch Subscribers","note":"Show Twitch subscriber emotes"},"frankerfacez":{"name":"FrankerFaceZ","note":"Show emotes from FFZ"},"bttv":{"name":"BetterTTV","note":"Show emotes from BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} by {{author}}","byline":"by {{author}}","openFolder":"Open {{type}} Folder","reload":"Reload","addonSettings":"Settings","website":"Website","source":"Source","invite":"Support Server","donate":"Donate","patreon":"Patreon","name":"Name","author":"Author","version":"Version","added":"Date Added","modified":"Date Modified","search":"Search {{type}}","editAddon":"Edit","deleteAddon":"Delete","confirmDelete":"Are you sure you want to delete {{name}}?","confirmationText":"You have unsaved changes to {{name}}. Closing this window will lose all those changes.","enabled":"{{name}} has been enabled.","disabled":"{{name}} has been disabled.","couldNotEnable":"{{name}} could not be enabled.","couldNotDisable":"{{name}} could not be disabled.","couldNotStart":"{{name}} could not be started.","couldNotStop":"{{name}} could not be stopped.","settingsError":"Could not open settings for {{name}}","methodError":"{{method}} could not be fired.","unknownAuthor":"Unknown Author","noDescription":"Description not provided.","alreadyExists":"There is already a {{type}} with name {{name}}","alreadWatching":"Already watching  addons.","metaError":"META could not be parsed.","missingNameData":"META missing name data.","metaNotFound":"META was not found.","compileError":"Could not be compiled. See console for details.","wasUnloaded":"{{name}} was unloaded.","blankSlateHeader":"You don\'t have any {{type}}s!","blankSlateMessage":"Grab some from [this website]({{link}}) and add them to your {{type}} folder.","isEnabled":"Enabled","wasLoaded":"{{name}} v{{version}} was loaded."},"CustomCSS":{"confirmationText":"You have unsaved changes to your Custom CSS. Closing this window will lose all those changes.","update":"Update","save":"Save","openNative":"Open in System Editor","openDetached":"Detach Window","settings":"Editor Settings","editorTitle":"Custom CSS Editor"},"Emotes":{"loading":"Loading emotes in the background do not reload.","loaded":"All emotes successfully loaded.","clearEmotes":"Clear Emote Data","favoriteAction":"Favorite!","downloadFailed":"Download Failed","failureMessage":"BetterDiscord failed to download emotes, please check your internet connection and firewall."},"PublicServers":{"button":"Public Servers","join":"Join","joining":"Joining","joined":"Joined","loading":"Loading","loadMore":"Load More","notConnected":"Not Connected","connectionRequired":"You must connect your account in order to join servers.","connectionError":"Connection Error","connectionErrorMessage":"There was an error connecting to DiscordServers.com, it\'s possible their website/api is down. Please try again later.","pagination":"Page {{page}} of {{count}}","search":"Search","connect":"Connect","reconnect":"Reconnect","categories":"Categories","keywords":"Keywords","connection":"Connected as: {{username}}#{{discriminator}}","results":"Showing {{start}}-{{end}} of {{total}} results in {{category}}","query":"for {{query}}"},"Modals":{"confirmAction":"Are You Sure?","okay":"Okay","done":"Done","cancel":"Cancel","nevermind":"Nevermind","close":"Close","name":"Name","message":"Message","error":"Error","addonErrors":"Addon Errors","restartRequired":"Restart Required","restartNow":"Restart Now","restartLater":"Restart Later","additionalInfo":"Additional Info","restartPrompt":"In order to take effect, Discord needs to be restarted. Do you want to restart now?"},"ReactDevTools":{"notFound":"Extension Not Found","notFoundDetails":"Unable to find the React Developer Tools extension on your PC. Please install the extension on your local Chrome installation."},"Sorting":{"sortBy":"Sort By","order":"Order","ascending":"Ascending","descending":"Descending"},"WindowPrefs":{"enabledInfo":"This option requires a transparent theme in order to work properly. On Windows this may break your aero snapping and maximizing.\\n\\nIn order to take effect, Discord needs to be restarted. Do you want to restart now?","disabledInfo":"In order to take effect, Discord needs to be restarted. Do you want to restart now?"},"Notices":{"moreInfo":"More Info"},"Updater":{"updateFailed":"Update Failed!","updateFailedMessage":"BetterDiscord failed to update. Please download the latest version of the installer from our website (https://betterdiscord.app/) and reinstall.","updateSuccessful":"Update Successful!","updateAvailable":"BetterDiscord has a new update (v{{version}})","addonUpdatesAvailable":"BetterDiscord has found updates for {{count}} of your {{type}}s!","addonUpdated":"{{name}} has been updated to version {{version}}!","checking":"Checking for updates!","finishedChecking":"Finished checking for updates!","checkForUpdates":"Check For Updates!","updateAll":"Update All!","noUpdatesAvailable":"No updates available.","versionAvailable":"Version {{version}} now available!","upToDateBlankslate":"All of your {{type}} seem to be up to date!","updateButton":"Update!"}}');

/***/ }),

/***/ "../assets/locales/es-es.json":
/*!************************************!*\
  !*** ../assets/locales/es-es.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Temas","customcss":"CSS Personalizado"},"Collections":{"settings":{"name":"Ajustes","general":{"name":"General","emotes":{"name":"Sistema de Emoticonos","note":"Activa el sistema de emoticonos de BD"},"publicServers":{"name":"Servidores P??blicos","note":"Muestra el bot??n de servidores p??blicos"},"voiceDisconnect":{"name":"Desconexi??n de Voz","note":"Desconectarse del servidor de voz al cerrar Discord"},"showToasts":{"name":"Mostrar Notificaciones","note":"Muestra una peque??a notificaci??n de informaci??n importante"},"mediaKeys":{"name":"Desactivar las Teclas Multimedia","note":"Evita que Discord se apropie de tus teclas multimedia despu??s de reproducir un v??deo"}},"window":{"removeMinimumSize":{"name":"Eliminar Tama??o M??nimo","note":"Elimina el tama??o m??nimo de Discord de 940x500"},"name":"Preferencias de la Ventana","transparency":{"name":"Activar Transparencia","note":"Hace que la ventana principal pueda ser transparente (requiere reinicio)"},"frame":{"name":"Marco de la Ventana","note":"A??ade el marco de ventana nativo de tu sistema operativo a la ventana principal"}},"addons":{"name":"Gestor de Complementos","addonErrors":{"name":"Mostrar Errores de Complementos","note":"Muestra una ventana con los errores de plugin/temas"},"editAction":{"name":"Acci??n al Editar","note":"Donde aparecer??n los plugins y temas al editarlos","options":{"detached":"Ventana Independiente","system":"Editor del Sistema"}}},"customcss":{"name":"CSS Personalizado","customcss":{"name":"CSS Personalizado","note":"Activa la pesta??a de CSS Personalizado"},"liveUpdate":{"name":"Actualizaci??n en Vivo","note":"Actualiza el CSS a medida que se escribe"},"startDetached":{"name":"Comenzar en Ventana Independiente","note":"Al hacer clic en la pesta??a de CSS Personalizado se abre el editor en una ventana independiente"},"nativeOpen":{"name":"Abrir en Editor Nativo","note":"Al hacer clic en la pesta??a de CSS Personalizado se abre el editor en tu editor nativo"},"openAction":{"name":"Ubicaci??n del Editor","note":"Donde deber?? el CSS Personalizado abrirse por defecto","options":{"settings":"Men?? de Ajustes","detached":"Ventana Independiente","system":"Editor del Sistema"}}},"developer":{"name":"Ajustes de Desarrollador","debuggerHotkey":{"name":"Tecla de Acceso R??pido al Depurador","note":"Permite activar el depurador al presionar la tecla F8"},"reactDevTools":{"name":"React Developer Tools","note":"Inyecta tu instalaci??n local de React Developer Tools en Discord"},"inspectElement":{"name":"Tecla de Acceso R??pido al Inspector de Elementos","note":"Activa la tecla de acceso r??pido al inspector de elementos (ctrl + shift + c) que es com??n en la mayoria de navegadores"},"devToolsWarning":{"name":"Quitar el Aviso del Inspector de Elementos","note":"Previene que Discord muestre su mensaje \\"??Espera!\\""},"debugLogs":{"name":"Registros de Depuraci??n","note":"Env??a todo lo que aparece en la consola a un archivo llamado debug.log en la carpeta de BetterDiscord"}}},"emotes":{"name":"Emoticonos","general":{"name":"General","download":{"name":"Descargar Emoticonos","note":"Descargar los emoticonos siempre que est??n desactualizados"},"emoteMenu":{"name":"Men?? de Emoticonos","note":"Mostrar los emoticonos de Twitch y favoritos en el men?? de emoticonos"},"hideEmojiMenu":{"name":"Ocultar Men?? de Emoticonos","note":"Oculta el men?? de emojis de Discord cuando se utiliza el men?? de emoticonos"},"autoCaps":{"name":"Autocapitalizaci??n de Emoticonos","note":"Autocapitalizar los comandos de emoticonos"},"modifiers":{"name":"Mostrar Modificadores de Emoticonos","note":"Activar los modificadores de emoticonos (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animar al Pasar el Rat??n","note":"Solo animar los modificadores de emoticonos al pasar el rat??n por encima de ellos"}},"categories":{"name":"Categor??as","twitchglobal":{"name":"Globales de Twitch","note":"Mostrar los emoticonos globales de Twitch"},"twitchsubscriber":{"name":"Suscriptores de Twitch","note":"Mostrar emoticonos de suscriptores de Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Mostrar los emoticonos de FrankerFaceZ"},"bttv":{"name":"BetterTTV","note":"Mostrar los emoticonos de BetterTTV"}}}},"Addons":{"title":"{{name}} v{{version}} por {{author}}","byline":"por {{author}}","openFolder":"Abrir Carpeta de {{type}}","reload":"Recargar","addonSettings":"Ajustes","website":"Sitio web","source":"Fuente","invite":"Servidor de Soporte","donate":"Donar","patreon":"Patreon","name":"Nombre","author":"Autor","version":"Versi??n","added":"Fecha de Adici??n","modified":"Fecha de Modificaci??n","search":"Buscar {{type}}","editAddon":"Editar","deleteAddon":"Eliminar","confirmDelete":"??Est??s seguro de que quieres borrar {{name}}?","confirmationText":"Tiene cambios no guardados en {{name}}. Al cerrar esta ventana se perder??n todos los cambios.","enabled":"{{name}} ha sido activado.","disabled":"{{name}} ha sido desactivado.","couldNotEnable":"{{name}} no pudo ser activado.","couldNotDisable":"{{name}} no pudo ser desactivado.","couldNotStart":"{{name}} no se pudo iniciar.","couldNotStop":"{{name}} no se pudo detener.","settingsError":"No se pudieron abrir los ajustes de {{name}}","methodError":"{{method}} no pudo ser lanzado.","unknownAuthor":"Autor Desconocido","noDescription":"Descripci??n no proporcionada.","alreadyExists":"Ya existe un {{type}} con nombre {{name}}","alreadWatching":"Ya est?? viendo los complementos.","metaError":"El META no pudo ser analizado.","missingNameData":"El META no contiene datos del nombre.","metaNotFound":"El META no ha sido encontrado.","compileError":"No se ha podido compilar.","wasUnloaded":"{{name}} ha sido descargado.","blankSlateHeader":"??No tienes {{type}}s!","blankSlateMessage":"Consigue alguno en [esta p??gina web]({{link}}) y a??adelos a tu carpeta de {{type}}."},"CustomCSS":{"confirmationText":"Tienes cambios sin guardar en tu CSS Personalizado. Al cerrar esta ventana se perder??n todos los cambios.","update":"Actualizar","save":"Guardar","openNative":"Abrir en el Editor del Sistema","openDetached":"Mostrar en Ventana Independiente","settings":"Ajustes del Editor","editorTitle":"Editor de CSS Personalizado"},"Emotes":{"loading":"Cargando emoticonos en segundo plano, no recargues.","loaded":"Todos los emoticonos han sido cargados satisfactoriamente.","clearEmotes":"Borrar los Datos de los Emoticonos","favoriteAction":"??Favoritos!","downloadFailed":"Descarga Fallida","failureMessage":"BetterDiscord no ha podido descargar los emoticonos, por favor, comprueba tu conexi??n a internet y tu cortafuegos."},"PublicServers":{"button":"P??blicos","join":"Unirse","joining":"Uni??ndose","joined":"Unido","loading":"Cargando","loadMore":"Cargar M??s","notConnected":"No est?? Conectado","connectionRequired":"Debes conectar tu cuenta para poder unirte a los servidores.","connectionError":"Error de Conexi??n","connectionErrorMessage":"Se ha producido un error al conectar con DiscordServers.com, es posible que su sitio web/api est?? ca??do. Vuelve a intentarlo m??s tarde.","pagination":"P??gina {{page}} de {{count}}","search":"Buscar","connect":"Conectar","reconnect":"Reconectar","categories":"Categor??as","keywords":"Palabras clave","connection":"Conectado como: {{username}}#{{discriminator}}","results":"Mostrando {{start}}-{{end}} de {{total}} resultados en {{category}}","query":"por {{query}}"},"Modals":{"confirmAction":"??Est??s seguro?","okay":"Vale","done":"Hecho","cancel":"Cancelar","nevermind":"No importa","close":"Cerrar","name":"Nombre","message":"Mensaje","error":"Error","addonErrors":"Errores de Complementos","restartRequired":"Reinicio Requerido","restartNow":"Reiniciar Ahora","restartLater":"Reiniciar m??s Tarde","additionalInfo":"Informaci??n Adicional","restartPrompt":"Para que surta efecto, es necesario reiniciar Discord. ??Quieres reiniciar ahora?"},"ReactDevTools":{"notFound":"Extensi??n no Encontrada","notFoundDetails":"No se puede encontrar la extensi??n React Developer Tools en su PC. Por favor, instale la extensi??n en su instalaci??n local de Chrome."},"Sorting":{"sortBy":"Ordenar por","order":"Orden","ascending":"Ascendente","descending":"Descendente"},"WindowPrefs":{"enabledInfo":"Esta opci??n requiere un tema transparente para que funcione correctamente. En Windows esto podr??a hacer que el ajuste autom??tico de la ventana (Aero Snap) y la maximizaci??n dejen de funcionar.\\n\\nPara que surta efecto, es necesario reiniciar Discord. ??Quieres reiniciar ahora?","disabledInfo":"Para que surta efecto, es necesario reiniciar Discord. ??Quieres reiniciar ahora?"}}');

/***/ }),

/***/ "../assets/locales/fi.json":
/*!*********************************!*\
  !*** ../assets/locales/fi.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Lis??osat","themes":"Teemat","customcss":"Mukautettu CSS"},"Collections":{"settings":{"name":"Asetukset","general":{"name":"Yleinen","emotes":{"name":"Hymi??-j??rjestelm??","note":"Ottaa k??ytt????n BD:n hymi??-j??rjestelm??n."},"publicServers":{"name":"Julkiset Palvelimet","note":"N??yt?? julkisten palvelimien nappi"},"voiceDisconnect":{"name":"Katkaise puhelu","note":"Katkaise puhelu, kun suljet Discordin"},"showToasts":{"name":"N??yt?? Paahtoleiv??t","note":"N??ytt???? pienen ilmoituksen t??rkeist?? tiedoista"},"mediaKeys":{"name":"Poista median??pp??imet k??yt??st??","note":"Est???? Discordia kaappaamasta median??pp??imi??si videon toistamisen j??lkeen."}},"window":{"removeMinimumSize":{"name":"Poista v??himm??iskoko","note":"Poistaa Discordin pakotetun v??himm??isikkunakoon 940x500"},"name":"Ikkuna-asetukset","transparency":{"name":"Ota l??pin??kyvyys k??ytt????n","note":"Mahdollistaa p????ikkunan l??pin??kyvyyden (vaatii uudelleenk??ynnistyksen)"},"frame":{"name":"Ikkunakehys","note":"Lis???? alkuper??isen k??ytt??j??rjestelm??n ikkunakehyksen p????ikkunaan"}},"addons":{"name":"Lis??osien hallinta","addonErrors":{"name":"N??yt?? lis??osien viat","note":"N??ytt???? modaalin, jossa on laajennus/teemavirheit??"},"editAction":{"name":"Muokkaa toimintaa","note":"Miss?? lis??osat & teema n??kyy, kun muokkaat niit??","options":{"detached":"Irrotettu ikkuna","system":"J??rjestelm??n muokkaaja"}}},"customcss":{"name":"Mukautettu CSS","customcss":{"name":"Mukautettu CSS","note":"Ottaa k??ytt????n Mukautetun CSS v??lilehden"},"liveUpdate":{"name":"Live-p??ivitys","note":"P??ivtt???? css, kun kirjoitat"},"startDetached":{"name":"Aloita irroitetusti","note":"Mukautetun CSS-v??lilehden napsauttaminen avaa muokkaajan erilliseen ikkunaan"},"nativeOpen":{"name":"Avaa alkuper??isess?? muokkaajassa","note":"Mukautetun CSS-v??lilehden napsauttaminen avaa mukautetun css alkuper??isess?? muokkaajassa"},"openAction":{"name":"Muokkaajan sijainti","note":"Miss?? mukautettu CSS:n pit??isi avautua normaalisti","options":{"settings":"Asetuksien valikko","detached":"Irrotettu ikkuna","system":"J??rjestelm??n muokkaaja"}}},"developer":{"name":"Kehitt??j??n asetukset","debuggerHotkey":{"name":"Virheenkorjaajan pikan??pp??in","note":"Mahdollistaa virheenkorjauksen aktivoinnin, kun painetaan F8 DevToolsin ollessa auki"},"reactDevTools":{"name":"React-kehitysty??kalut","note":"Lis???? paikallisen React Developer Tools -asennuksesi Discordiin"},"inspectElement":{"name":"Tarkista-elementin pikan??pp??in","note":"Ottaa k??ytt????n tarkastuselementin pikan??pp??imen (ctrl + shift + c), joka on yleinen useimmissa selaimissa"},"devToolsWarning":{"name":"Lopeta DevTools-varoitus","note":"Pys??ytt???? Discordin tulostamasta heid??n \\"Hold Up!\\" viestin"},"debugLogs":{"name":"Virheenkorjauksen logit","note":"Tulostaa kaiken konsolista BetterDiscord-kansion debug.log-tiedostoon"},"devTools":{"name":"DevTools","note":"Mahdollistaa DevToolsin kytkemisen n??pp??inyhdistelm??ll?? ctrl+shift+i"}},"editor":{"name":"Muokkaajan asetukset","lineNumbers":{"name":"Rivien numerot","note":"Mahdollistaa rivinumeroiden n??ytt??misen muokkaajan sivulla"},"fontSize":{"name":"Fontin koko","note":"Muokkaajassa k??ytett??v??n fontin koko (pt)."},"minimap":{"name":"Minikartta","note":"Mahdollistaa koodin minikartan n??ytt??misen muokkaajan sivulla"},"hover":{"name":"Viitety??kaluvinkit","note":"Mahdollistaa viitety??kaluvihjeiden n??ytt??misen, kun s????nt??j?? ja valitsimia siirret????n"},"quickSuggestions":{"name":"Pikaehdotuksia","note":"Ottaa k??ytt????n automaattisen t??ydennyksen ehdotukset kirjoittaessasi"},"renderWhitespace":{"name":"N??yt?? v??lily??nti","note":"Milloin muokkaajan tulee n??ytt???? v??lily??nnit","options":{"all":"Aina","none":"Ei ikin??","selection":"Valinta"}}}},"emotes":{"name":"Hymi??t","general":{"name":"Yleinen","download":{"name":"Lataa hymi??it??","note":"Lataa hymi??it aina, kun ne ovat vanhentuneita"},"emoteMenu":{"name":"Hymi??valikko","note":"N??yt?? Twitch/Suosikkihymi??t hymi??valikossa"},"hideEmojiMenu":{"name":"Piilota hymi??valikko","note":"Piilottaa Discordin emoji-menun, kun k??ytet????n hymi??valikkoa"},"autoCaps":{"name":"Emoten automaattinen isojen kirjainten k??ytt??","note":"Laita isolla kirjaimella hymi??komennot automaattisesti"},"modifiers":{"name":"N??yt?? hymi??-muokkaimet","note":"Ota k??ytt????n hymi??modit (k????nn??, spin, pulssi, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animoi leijuminen","note":"Animoi vain hymi??n muokkaukset viem??ll?? kursori sen kohdalle"}},"categories":{"name":"Kategoriat","twitchglobal":{"name":"Twitchin Yleiset","note":"N??yt?? Twitchin yleiset hymi??t"},"twitchsubscriber":{"name":"Twitch-tilaajat","note":"N??yt?? Twitch-tilauksen hymi??t"},"frankerfacez":{"name":"FrankerFaceZ","note":"N??yt?? hymi??t FFZ:sta"},"bttv":{"name":"BetterTTV","note":"N??yt?? hymi??t BTTV:st??"}}}},"Addons":{"openFolder":"Avaa {{type}} kansio","reload":"Lataa uudelleen","addonSettings":"Asetukset","website":"Nettisivu","source":"L??hde","invite":"Tuki-palvelin","donate":"Lahjoita","patreon":"Patreon","name":"Nimi","author":"Luoja","version":"Versio","added":"lis??ysp??iv??m????r??","modified":"Muutosp??iv??m????r??","search":"Etsi {{type}}","editAddon":"Muokkaa","deleteAddon":"Poista","confirmDelete":"Haluatko varmasti poistaa {{name}}?","confirmationText":"Sinulla on tallentamattomia muutoksia kohteeseen {{name}}. T??m??n ikkunan sulkeminen menett???? kaikki muutokset.","enabled":"\\n{{name}} on otettu k??ytt????n.","disabled":"\\n{{name}} on poistettu k??yt??st??.","couldNotEnable":"{{name}} ei voitu ottaa k??ytt????n.","couldNotDisable":"{{name}} ei voitu poistaa k??yt??st??.","couldNotStart":"{{name}} ei voitu k??ynnist????.","couldNotStop":"{{name}} ei voitu pys??ytt????.","settingsError":"K??ytt??j??n {{name}} asetuksia ei voitu avata","methodError":"{{method}} ei voitu laukaista.","unknownAuthor":"Tuntematon tekij??","noDescription":"Kuvausta ei ole annettu.","alreadyExists":"On jo olemassa {{type}} , jonka nimi on {{type}}","alreadWatching":"Katsot jo lis??osia.","metaError":"META:a ei voitu j??sent????.","missingNameData":"META:lta puuttuu nimitiedot.","metaNotFound":"META:a ei l??ytynyt.","compileError":"Ei voitu koota. Katso lis??tietoja konsolista.","wasUnloaded":"{{name}} purettiin.","blankSlateHeader":"Sinulla ei ole yht????n {{type}}!","blankSlateMessage":"Nappaa joitain [t??lt?? verkkosivustolta]({{link}}) ja lis???? ne kansioon {{type}}.","isEnabled":"Otettu k??ytt????n"},"CustomCSS":{"confirmationText":"Muokatussa CSS:ss?? on tallentamattomia muutoksia. T??m??n ikkunan sulkeminen menett???? kaikki muutokset.","update":"P??ivit??","save":"Tallenna","openNative":"Avaa j??rjestelm??n muokkaajassa","openDetached":"Irrota ikkuna","settings":"Muokkaajan asetukset","editorTitle":"Mukautettu CSS-muokkaaja"},"Emotes":{"loading":"Hymi??iden lataaminen taustalla ei lataudu uudelleen.","loaded":"Kaikki hymi??t on ladattu onnistuneesti.","clearEmotes":"Tyhjenn?? hymi??-tiedot","favoriteAction":"Suosikki!","downloadFailed":"Lataus ep??onnistui","failureMessage":"BetterDiscord ei pystynyt lataamaan hymi??it??. Tarkista Internet-yhteytesi ja palomuurisi."},"PublicServers":{"button":"julkinen","join":"Liity","joining":"Liityt????n","joined":"Liitytty","loading":"Ladataan","loadMore":"Ladataan lis????","notConnected":"Et ole yhdistetty","connectionRequired":"Sinun on yhdistett??v?? tilisi, jotta voit liitty?? palvelimiin.","connectionError":"Yhteysvika","connectionErrorMessage":"Yhteyden muodostamisessa DiscordServers.comiin tapahtui virhe. On mahdollista, ett?? heid??n verkkosivustonsa/api on poissa k??yt??st??. Yrit?? uudelleen my??hemmin.","pagination":"Sivu {{sivu}} / {{count}}","search":"Etsi","connect":"Yhdist??","reconnect":"Yhdist?? uudelleen","categories":"Kategoriat","keywords":"Avainsanat","connection":"Yhdistetty nimell??: {{username}}#{{discrinator}}","results":"N??ytet????n {{start}}-{{end}} / {{total}} tulosta luokassa {{category}}","query":"haulle {{kysely}}"},"Modals":{"confirmAction":"Oletko varma?","okay":"Okei","done":"Valmis","cancel":"Peruuta","nevermind":"Unohda koko juttu","close":"Sulje","name":"Nimi","message":"Viesti","error":"Vika","addonErrors":"Lis??osan viat","restartRequired":"Uudelleenk??ynnistys vaaditaan","restartNow":"Uudelleen k??ynnist?? nyt","restartLater":"K??ynnist?? uudelleen nyt","additionalInfo":"Lis??tietoja","restartPrompt":"Jotta se tulisi voimaan, Discord on k??ynnistett??v?? uudelleen. Haluatko k??ynnist???? uudelleen nyt?"},"ReactDevTools":{"notFound":"Laajennusta Ei L??ydy","notFoundDetails":"React Developer Tools -laajennusta ei l??ydy tietokoneeltasi. Asenna laajennus paikalliseen Chrome-asennukseesi."},"Sorting":{"sortBy":"J??rjest??","order":"J??rjestys","ascending":"Nouseva","descending":"Laskeva"},"WindowPrefs":{"enabledInfo":"T??m?? vaihtoehto vaatii l??pin??kyv??n teeman toimiakseen kunnolla. Windowsissa t??m?? voi katkaista aerosnapsauksen ja maksimoimisen.\\n\\nJotta Discord tulisi voimaan, se on k??ynnistett??v?? uudelleen. Haluatko k??ynnist???? uudelleen nyt?","disabledInfo":"Jotta se tulisi voimaan, Discord on k??ynnistett??v?? uudelleen. Haluatko k??ynnist???? uudelleen nyt?"}}');

/***/ }),

/***/ "../assets/locales/fr.json":
/*!*********************************!*\
  !*** ../assets/locales/fr.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Th??mes","customcss":"CSS personnalis??"},"Collections":{"settings":{"name":"R??glages","general":{"name":"G??n??ral","emotes":{"name":"Syst??me D\'??mojis","note":"Active le syst??me d\'??mojis de BD"},"publicServers":{"name":"Serveurs publics","note":"Afficher le bouton des serveurs publics"},"voiceDisconnect":{"name":"D??connexion vocale","note":"D??connexion du serveur vocal lors de la fermeture de Discord"},"showToasts":{"name":"Afficher les notifications bulles","note":"Afficher une petite notification pour les informations importantes"},"mediaKeys":{"name":"D??sactiver les Touches M??dias","note":"Emp??che Discord de d??tourner vos touches multim??dia apr??s la lecture d\'une vid??o."}},"window":{"removeMinimumSize":{"name":"Enlever la Taille Minimale","note":"Enl??ve la taille de fen??tre minimale forc??e de Discord qui est de 940x500"},"name":"Fen??tre des Pr??f??rences","transparency":{"name":"Activer la Transparence","note":"Permet ?? la fen??tre principale d\'??tre transparente (n??cessite un red??marrage)"},"frame":{"name":"Cadre de la Fen??tre","note":"Ajoute le cadre de la fen??tre native de l\'OS ?? la fen??tre principale."}},"addons":{"name":"Gestionnaire d\'Extensions","addonErrors":{"name":"Afficher les Erreurs d\'Extensions","note":"Affiche une modale avec les erreurs de plugin/th??me"},"editAction":{"name":"Action ??dition","note":"L?? o?? les th??mes & extensions appara??tront lors de l\'??dition","options":{"detached":"Fen??tre d??tach??e","system":"??diteur syst??me"}}},"customcss":{"name":"CSS Personnalis??","customcss":{"name":"CSS Personnalis??","note":"Activer l\'onglet de CSS personnalis??"},"liveUpdate":{"name":"Mise ?? Jour Directe","note":"Met ?? jour le CSS pendant que vous ??crivez"},"startDetached":{"name":"D??marrer D??tach??","note":"En cliquant sur l\'onglet CSS Personnalis??, l\'??diteur s\'ouvre dans une fen??tre distincte."},"nativeOpen":{"name":"Ouvrir dans l\'??diteur Natif","note":"En cliquant sur CSS Personnalis??, l\'onglet ouvrira votre CSS personnalis?? dans votre ??diteur natif"},"openAction":{"name":"Emplacement de l\'??diteur","note":"L?? o?? le CSS personnalis?? doit s\'ouvrir par d??faut","options":{"settings":"Menu R??glages","detached":"Fen??tre D??tach??e","system":"??diteur syst??me"}}},"developer":{"name":"R??glages D??veloppeur","debuggerHotkey":{"name":"Touches Raccourcis du D??bugueur","note":"Permettre l\'activation du d??bugueur quand F8 est press??"},"reactDevTools":{"name":"Outils D??veloppeurs React","note":"Injecte votre installation locale des Outils D??veloppeurs React dans Discord"},"inspectElement":{"name":"Touche pour Inspecter l\'??l??ment","note":"Active le raccourci clavier de l\'inspecteur d\'??l??ment (ctrl + shift + c) qui est commun ?? la plupart des navigateurs"},"devToolsWarning":{"name":"Arr??ter les Avertissements des Outils D??veloppement","note":"Emp??che Discord d\'imprimer son message \\\\\\"Attends!\\\\\\""},"debugLogs":{"name":"Journaux de D??bogage","note":"Transmet tout ce qui se trouve dans la console au fichier debug.log situ?? dans le dossier de BetterDiscord"}}},"emotes":{"name":"Emotic??nes","general":{"name":"G??n??ral","download":{"name":"T??l??charger les ??mojis","note":"T??l??charger les ??mojis quand ils ne sont plus ?? jour"},"emoteMenu":{"name":"Menu ??mojis","note":"Afficher les ??mojis Favoris/de Twitch dans le menu des ??mojis"},"hideEmojiMenu":{"name":"Masquer le Menu d\'??mojis","note":"Masquer le menu des ??mojis de Discord quand le menu des ??mojis est utilis??"},"autoCaps":{"name":"Autocapitalisation des ??mojis","note":"Met en majuscule automatiquement les commandes ??mojis"},"modifiers":{"name":"Afficher le Modificateur d\'Emojis","note":"Activer les mods d\'??mojis (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animation Au Survol","note":"Uniquement animer les modificateurs d\'??mojis au survol"}},"categories":{"name":"Cat??gories","twitchglobal":{"name":"Twitch Globaux","note":"Afficher les ??mojis globaux de Twitch"},"twitchsubscriber":{"name":"Abonn??s Twitch","note":"Afficher les ??mojis des abonn??s Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Afficher les ??mojis de FFZ"},"bttv":{"name":"BetterTTV","note":"Afficher les ??mojis de BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} par {{author}}","byline":"par {{author}}","openFolder":"Ouvrir dossier {{type}}","reload":"Recharger","addonSettings":"R??glages","website":"Site web","source":"Source","invite":"Server de support","donate":"Donner","patreon":"Patreon","name":"Nom","author":"Auteur","version":"Version","added":"Date d\'Ajout","modified":"Date Modifi??e","search":"Rechercher {{type}}","editAddon":"??dition","deleteAddon":"Suppression","confirmDelete":"??tes-vous s??r de vouloir supprimer {{name}}?","confirmationText":"Vous n\'avez pas sauvegard?? les changements pour {{name}}. Fermer cette fen??tre fera perdre ces changements.","enabled":"{{name}} a ??t?? activ??.","disabled":"{{name}} a ??t?? d??sactiv??.","couldNotEnable":"{{name}} ne peut pas ??tre activ??.","couldNotDisable":"{{name}} n\'a pas pu ??tre d??sactiv??.","couldNotStart":"{{name}} n\'a pas pu ??tre lanc??.","couldNotStop":"{{name}} n\'a pas pu ??tre arr??t??.","settingsError":"Impossible d\'ouvrir les param??tres pour {{name}}","methodError":"{{method}} n\'a pas pu ??tre renvoy??.","unknownAuthor":"Auteur Inconnu","noDescription":"Description non fournie.","alreadyExists":"Il y a d??j?? un {{type}} avec comme nom {{name}}","alreadWatching":"D??j?? en train de regarder les extensions.","metaError":"Le META n\'a pas pu ??tre analys??.","missingNameData":"Les donn??es de META ne poss??dent pas de nom.","metaNotFound":"Les donn??es de META sont introuvables.","compileError":"Compilation impossible.","wasUnloaded":"{{name}} a ??t?? d??charg??.","blankSlateHeader":"Vous n\'avez pas de {{type}}!","blankSlateMessage":"R??cup??re-les depuis [ce site]({{link}}) et ajoute-les dans ton dossier {{type}}."},"CustomCSS":{"confirmationText":"Vous avez des changements non sauvegard??s dans votre CSS Personnalis??. Fermer cette fen??tre vous fera perdre ces changements.","update":"Mise ?? jour","save":"Sauvegarder","openNative":"Ouvrir dans l\'??diteur Syst??me","openDetached":"D??tacher la Fen??tre","settings":"R??glages de l\'??diteur","editorTitle":"??diteur CSS Personnalis??"},"Emotes":{"loading":"Le chargement des emotes en arri??re-plan ne se recharge pas.","loaded":"Tous les ??mojis sont charg??s avec succ??s.","clearEmotes":"??ffacer les Donn??es des ??mojis","favoriteAction":"Ajout?? aux favoris!","downloadFailed":"??chec T??l??chargement","failureMessage":"BetterDiscord n\'a pas r??ussi ?? t??l??charger les ??motes, veuillez v??rifier votre connexion Internet et votre pare-feu."},"PublicServers":{"button":"public","join":"Rejoindre","joining":"En train de rejoindre","joined":"Rejoint","loading":"Chargement","loadMore":"Charger plus","notConnected":"Vous n\'??tes pas connect??","connectionRequired":"Vous devez connecter votre compte afin de rejoindre des serveurs.","connectionError":"Erreur de Connexion","connectionErrorMessage":"Une erreur s\'est produite lors de la connexion ?? DiscordServers.com, il est possible que leur site web/api soit en panne. Veuillez r??essayer plus tard.","pagination":"Page {{page}} sur {{count}}","search":"Rechercher","connect":"Connecter","reconnect":"Reconnecter","categories":"Cat??gories","keywords":"Mots Cl??s","connection":"Connect?? en tant que: {{username}}#{{discriminator}}","results":"Afficher {{start}}-{{end}} sur les {{total}} r??sultats dans la cat??gorie {{category}}","query":"pour {{query}}"},"Modals":{"confirmAction":"??tes-vous s??r?","okay":"D\'accord","done":"Termin??","cancel":"Annuler","nevermind":"Laisse tomber","close":"Fermer","name":"Nom","message":"Message","error":"Erreur","addonErrors":"Erreurs d\'extension","restartRequired":"Red??marrage Requis","restartNow":"Red??marrer Maintenant","restartLater":"Red??marrer Ult??rieurement","additionalInfo":"Info Additionnelle","restartPrompt":"Pour appliquer ces changements, Discord ?? besoin d\'??tre red??marr??. Voulez-vous red??marrer l\'application maintenant?"},"ReactDevTools":{"notFound":"Extension Introuvable","notFoundDetails":"Impossible de trouver l\'extension de React Developer Tools sur ton PC. Merci d\'installer l\'extension dans votre installation locale de Chrome."},"Sorting":{"sortBy":"Trier Par","order":"Ordre","ascending":"Ascendant","descending":"Descendant"},"WindowPrefs":{"enabledInfo":"Cette option requi??re un th??me transparent pour pouvoir fonctionner correctement. Sous Windows, cela peut casser le style Aero de Windows lors de la maximisation et du clipsement de la fen??tre.\\n\\nAfin que ce changement soit actif, Discord doit ??tre red??marr??. Voulez-vous red??marrer l\'application maintenant?","disabledInfo":"Afin que ce changement soit actif, Discord doit ??tre red??marr??. Voulez-vous red??marrer l\'application maintenant?"}}');

/***/ }),

/***/ "../assets/locales/hi.json":
/*!*********************************!*\
  !*** ../assets/locales/hi.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"????????????-??????","themes":"??????????????????","customcss":"??????????????? ??????????????????"},"Collections":{"settings":{"name":"?????????????????????","general":{"name":"??????","emotes":{"name":"??????????????? ?????????????????????","note":"BD ?????? ??????????????? ?????????????????? ?????? ??????????????? ???????????? ??????"},"publicServers":{"name":" ??????????????????????????? ???????????????","note":"??????????????????????????? ??????????????? ????????? ??????????????????????????? ????????????"},"voiceDisconnect":{"name":"???????????? ??????????????????????????????","note":"???????????????????????? ?????? ????????? ???????????? ????????? ???????????? ??????????????? ?????? ?????????????????????????????? ????????????"},"showToasts":{"name":"??????????????? ???????????????","note":"?????????????????????????????? ????????????????????? ?????? ????????? ?????? ???????????? ???????????????????????? ?????????????????? ??????"},"mediaKeys":{"name":"?????????????????? ??????????????? ??????????????? ????????????","note":"?????????????????? ??????????????? ?????? ????????? ??????????????????????????? ?????? ???????????? ?????????????????? ???????????????????????? ?????? ?????????????????? ???????????? ?????? ??????????????????"}},"window":{"removeMinimumSize":{"name":"????????????????????? ???????????? ?????????????????????","note":"940x500 . ?????? ??????????????????????????? ?????? ??????????????? ????????????????????? ??????????????? ???????????? ?????? ????????? ???????????? ??????\\n??????????????? ?????????"}},"addons":{"name":"???????????? ??????????????????\\n","addonErrors":{"name":"???????????? ?????????????????? ??????????????????","note":"??????????????????/????????? ??????????????????????????? ?????? ????????? ?????? ???????????? ?????????????????? ??????"},"editAction":{"name":"?????????????????? ????????????????????? ????????????","note":"?????????????????? ???????????? ????????? ???????????????????????? ?????? ????????? ???????????? ??????????????? ???????????? ?????????"}}}}}');

/***/ }),

/***/ "../assets/locales/hr.json":
/*!*********************************!*\
  !*** ../assets/locales/hr.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/hu.json":
/*!*********************************!*\
  !*** ../assets/locales/hu.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Pluginok","themes":"T??m??k","customcss":"Egy??ni CSS","updates":"Friss??t??sek"},"Collections":{"settings":{"name":"Be??ll??t??sok","general":{"name":"??ltal??nos","emotes":{"name":"Emotikon rendszer","note":"BD emotikon rendszer enged??lyez??se"},"publicServers":{"name":"Nyilv??nos szerverek","note":"Nyilv??nos szerverek gomb megjelen??t??se"},"voiceDisconnect":{"name":"Hangkapcsolat megszak??t??sa","note":"Kapcsolat megszak??t??sa a hangkiszolg??l??val amikor bez??rod a Discordot"},"showToasts":{"name":"??rtes??t??s megjelen??t??se indul??skor","note":"Kis ??rtes??t??st jelen??t meg a fontos inform??ci??kr??l"},"mediaKeys":{"name":"M??diavez??rl?? billenty??k letilt??sa","note":"Megakad??lyozza, hogy a Discord a vide??k lej??tsz??sa ut??n ??tkalibr??lja a m??diavez??rl?? billenty??ket."}},"window":{"removeMinimumSize":{"name":"Minim??lis m??ret fel??l??r??sa","note":"Fel??l??rja ??s elt??vol??tja a Discord k??nyszer??tett minim??lis 940x500-as ablakm??ret??t"},"name":"Ablak be??ll??t??sok","transparency":{"name":"??tl??tsz??s??g enged??lyez??se","note":"A f??ablak ??tl??that??v?? t??tele (??jraind??t??st ig??nyel)"},"frame":{"name":"Ablakkeret","note":"Hozz??adja az alap os ablakkeretet a f??ablakhoz"}},"addons":{"name":"Kieg??sz??t??kezel??","addonErrors":{"name":"Kieg??sz??t?? hiba??zenetek megjelen??t??se","note":"Megjelen??t egy ablakot a pluginok/t??m??k hib??ir??l"},"editAction":{"name":"Szerkeszt?? be??ll??t??sa","note":"A pluginok ??s t??m??k szerkeszt??se ebben a szerkeszt??ben","options":{"detached":"K??l??n??ll?? ablak","system":"Rendszer alap??rtelmezett"}}},"customcss":{"name":"Egy??ni CSS","customcss":{"name":"Egy??ni CSS","note":"Enged??lyezi az Egy??ni CSS szekci??t"},"liveUpdate":{"name":"Friss??t??s ??l??ben","note":"Friss??ti a css-t szerkeszt??s k??zben"},"startDetached":{"name":"Ind??t??s k??l??n ablakban","note":"Az Egy??ni CSS szekci??ra kattintva a szerkeszt?? egy k??l??n ablakban ny??lik meg"},"nativeOpen":{"name":"Megnyit??s nat??v szerkeszt??ben","note":"Az Egy??ni CSS f??lre kattintva megny??lik az egy??ni css egy nat??v szerkeszt??ben"},"openAction":{"name":"Szerkeszt?? helye","note":"Az Egy??ni CSS alap??rtelmezetten itt ny??lik meg","options":{"settings":"Be??ll??t??sok men??","detached":"K??l??n??ll?? ablak","system":"Rendszer alap??rtelmezett"}}},"developer":{"name":"Fejleszt??i be??ll??t??sok","debuggerHotkey":{"name":"Hibakeres?? gyorsbillenty??","note":"Lehet??v?? teszi a debugger aktiv??l??s??t az F8 megnyom??sakor, amikor a DevTools meg van nyitva"},"reactDevTools":{"name":"React fejleszt??i eszk??z??k","note":"Beilleszti a telep??tett React Developer Toolst a Discordba"},"inspectElement":{"name":"Elem vizsg??lat gyorsbillenty??je","note":"Enged??lyezi a legt??bb b??ng??sz??ben haszn??lt elem vizsg??lata gyorsbillenty??t (ctrl + shift + c)"},"devToolsWarning":{"name":"DevTools riaszt??s le??ll??t??sa","note":"Megakad??lyozza, hogy a Discord ki??rja a \\"V??rj!\\" ??zenet??t"},"debugLogs":{"name":"Hibakeres?? napl??","note":"A konzolr??l mindent ki??r a BetterDiscord mapp??ban l??v?? debug.log f??jlba"},"devTools":{"name":"Fejleszt??i eszk??z??k","note":"Enged??lyezi a DevTools bekapcsol??s??t a ctrl+shift+i billenty??kombin??ci??val"}},"editor":{"name":"Szerkeszt??i be??ll??t??sok","lineNumbers":{"name":"Szakasz sorsz??mok","note":"Lehet??v?? teszi a szakasz sorsz??mok megjelen??t??s??t a szerkeszt?? oldal??n"},"fontSize":{"name":"Bet??m??ret","note":"A szerkeszt??ben haszn??land?? bet??t??pus m??rete (pt)"},"minimap":{"name":"Minit??rk??p","note":"Megjelen??ti a k??dminit??rk??p megjelen??t??s??t a szerkeszt?? oldal??n"},"hover":{"name":"Hivatkoz??si eszk??ztippek","note":"Megjelen??ti a hivatkoz??si eszk??ztippek megjelen??t??s??t a szab??lyok ??s szelektorok lebegtet??sekor"},"quickSuggestions":{"name":"Gyors javaslatok","note":"Enged??lyezi az automatikus kit??lt??si javaslatok megjelen??t??s??t g??pel??s k??zben"},"renderWhitespace":{"name":"Feh??r t??r megjelen??t??se","note":"Sz??k??z??k megjelen??t??se a szerkeszt??ben","options":{"all":"Mindig","none":"Soha","selection":"Kiv??laszt??s"}}}},"emotes":{"name":"Emotikonok","general":{"name":"??ltal??nos","download":{"name":"Emotikonok let??lt??se","note":"Emotikonok let??lt??se, ha elavultak"},"emoteMenu":{"name":"Emotikon men??","note":"Twitch/kedvenc emotikonok megjelen??t??se az emotikonok men??j??ben"},"hideEmojiMenu":{"name":"Emotikon men?? elrejt??se","note":"Elrejti a Discord emotikon men??j??t az emotikon men?? haszn??latakor"},"autoCaps":{"name":"Emotikon autokapitaliz??ci??","note":"Emotikon-parancsok automatikus nagybet??s??t??se"},"modifiers":{"name":"Emotikon m??dos??t??sok megjelen??t??se","note":"Emotikon m??dos??t??sok enged??lyez??se (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Anim??ci?? lebegtet??skor","note":"Csak lebeg??skor anim??lja az emotikon m??dos??t??sokat"}},"categories":{"name":"Kateg??ri??k","twitchglobal":{"name":"Twitch glob??lis","note":"Glob??lis Twitch emotikonok megjelen??t??se"},"twitchsubscriber":{"name":"Twitch el??fizet??k","note":"Twitch el??fizet??i emotikonok megjelen??t??se"},"frankerfacez":{"name":"FrankerFaceZ","note":"Emotikonok megjelen??t??se az FFZ-b??l"},"bttv":{"name":"BetterTTV","note":"Emotikonok megjelen??t??se a BTTV-b??l"}}}},"Addons":{"title":"{{name}} v{{version}} {{author}} ??ltal","byline":"{{author}} ??ltal","openFolder":"{{type}} mappa megnyit??sa","reload":"??jrat??lt??s","addonSettings":"Be??ll??t??sok","website":"Weboldal","source":"Forr??s","invite":"T??mogat??si szerver","donate":"T??mogat??s","patreon":"Patreon","name":"N??v","author":"Szerz??","version":"Verzi??","added":"Hozz??ad??s d??tuma","modified":"M??dos??t??s d??tuma","search":"Keres??s {{type}}","editAddon":"Szerkeszt??s","deleteAddon":"T??rl??s","confirmDelete":"Biztos, hogy t??r??lni akarja ezt: {{name}}?","confirmationText":"A {{name}} m??dos??t??sait nem ker??ltek ment??sre. Ha bez??rja ezt az ablakot, ezek a m??dos??t??sok elvesznek.","enabled":"{{name}} bekapcsolva.","disabled":"{{name}} ki lett kapcsolva.","couldNotEnable":"{{name}} nem elind??that??.","couldNotDisable":"{{name}} nem kikapcsolhat??.","couldNotStart":"{{name}} nem elind??that??.","couldNotStop":"{{name}} nem le??ll??that??.","settingsError":"Nem siker??lt megnyitni a {{name}} be??ll??t??sait","methodError":"{{method}} nem kivehet??.","unknownAuthor":"Ismeretlen szerz??","noDescription":"Le??r??s nincs megadva.","alreadyExists":"M??r l??tezik egy {{type}} {{name}} n??vvel","alreadWatching":"Jelenleg a kieg??sz??t??ket n??zed.","metaError":"Nem siker??lt elemezni a META-t.","missingNameData":"Hi??nyzik a n??vadat a META-b??l.","metaNotFound":"META nem tal??lhat??.","compileError":"Sikertelen ind??t??s. R??szletek??rt l??sd a konzolt.","wasUnloaded":"{{name}} nem indult el.","blankSlateHeader":"M??g nem rendelkezel egy ilyennel sem: {{type}}!","blankSlateMessage":"Szerezz n??h??nyat [err??l a weboldalr??l]({{link}}), ??s add ??ket a {{type}} mapp??dhoz.","isEnabled":"Bekapcsolva","wasLoaded":"{{name}} v{{{version}} bet??lt??d??tt."},"CustomCSS":{"confirmationText":"Az Egy??ni CSS m??dos??t??sait nem ker??ltek ment??sre. Ha bez??rja ezt az ablakot, ezek a m??dos??t??sok elvesznek.","update":"Friss??t??s","save":"Ment??s","openNative":"Megnyit??s a Rendszer szerkeszt??j??ben","openDetached":"K??l??n??ll?? ablak","settings":"Szerkeszt?? be??ll??t??sok","editorTitle":"Egy??ni CSS szerkeszt??"},"Emotes":{"loading":"Az emotikonok bet??lt??se a h??tt??rben.","loaded":"Minden emotikon sikeresen bet??lt??tt.","clearEmotes":"Emotikon adatok t??rl??se","favoriteAction":"Kedvenc!","downloadFailed":"Let??lt??s sikertelen","failureMessage":"A BetterDiscord nem tudta let??lteni az emotikonokat, k??rj??k ellen??rizze az internetkapcsolat??t ??s a t??zfalat."},"PublicServers":{"button":"nyilv??nos","join":"Csatlakoz??s","joining":"Csatlakoz??s","joined":"Csatlakozva","loading":"Bet??lt??s","loadMore":"T??bb bet??lt??se","notConnected":"Sikertelen csatlakoz??s","connectionRequired":"A szerverekhez val?? csatlakoz??shoz csatlakoztatnod kell a fi??kodat.","connectionError":"Csatlakoz??si hiba","connectionErrorMessage":"Hiba t??rt??nt a DiscordServers.com-hoz val?? csatlakoz??sban, lehets??ges, hogy a weboldaluk/api nem el??rhet??. K??rj??k, pr??b??lja meg k??s??bb.","pagination":"{{page}} oldal a {{count}} -b??l","search":"Keres??s","connect":"Csatlakoz??s","reconnect":"??jracsatlakoz??s","categories":"Kateg??ri??k","keywords":"Kulcsszavak","connection":"Csatlakoztatva mint: {{username}}#{{discriminator}}","results":"{{start}}-{{end}} eredm??ny megjelen??t??se a {{total}} {{category}} -b??l","query":"a {{query}}"},"Modals":{"confirmAction":"Biztos vagy benne?","okay":"Ok??","done":"K??sz","cancel":"M??gse","nevermind":"M??gse","close":"Bez??r??s","name":"N??v","message":"??zenet","error":"Hiba","addonErrors":"Kieg??sz??t??k hib??i","restartRequired":"??jraind??t??s sz??ks??ges","restartNow":"??jraind??t??s most","restartLater":"??jraind??t??s k??s??bb","additionalInfo":"Tov??bbi inform??ci??k","restartPrompt":"A Discordot ??jra kell ind??tani ahhoz, hogy ??rv??nybe l??pjen a v??ltoztat??s. Most akarod ??jraind??tani?"},"ReactDevTools":{"notFound":"A kifejez??s nem tal??lhat??","notFoundDetails":"Nem tal??lhat?? a React Developer Tools b??v??tm??ny a sz??m??t??g??p??n. K??rj??k, telep??tse a b??v??tm??nyt a Chrome helyi telep??t??s??be."},"Sorting":{"sortBy":"Rendez??s","order":"Rendez??s","ascending":"N??vekv??","descending":"Cs??kken??"},"WindowPrefs":{"enabledInfo":"Ez az opci?? ??tl??tsz?? t??m??t ig??nyel a megfelel?? m??k??d??shez. Windowson ez megszak??thatja az aero snappinget ??s a maximaliz??l??st.\\n\\nA Discordot ??jra kell ind??tani, hogy ??rv??nybe l??pjen. Szeretn??d most ??jraind??tani?","disabledInfo":"A Discordot ??jra kell ind??tani ahhoz, hogy ??rv??nybe l??pjen. Szeretn??d most ??jraind??tani?"},"Notices":{"moreInfo":"Tov??bbi inform??ci??"},"Updater":{"updateFailed":"A friss??t??s sikertelen!","updateFailedMessage":"A BetterDiscord friss??t??se sikertelen. K??rj??k, t??ltse le a telep??t?? leg??jabb verzi??j??t err??l a weboldalr??l: (https://betterdiscord.app/), majd telep??tse ??jra.","updateSuccessful":"Friss??t??s sikeres!","updateAvailable":"??j friss??t??s er??lhet?? a BetterDiscordhoz: (v{{version}})","addonUpdatesAvailable":"A BetterDiscord {{count}}db friss??t??st tal??lt ebben a t??m??ban: {{type}}!","addonUpdated":"A {{name}} friss??lt {{version}} verzi??ra!","checking":"Friss??t??sek keres??se!","finishedChecking":"Friss??t??sek ellen??rz??se sikeres!","checkForUpdates":"Friss??t??sek keres??se!","updateAll":"Az ??sszes friss??t??se!","noUpdatesAvailable":"Nincsenek el??rhet?? friss??t??sek.","versionAvailable":"Verzi??friss??t??s el??rhet??: {{version}}!","upToDateBlankslate":"Minden {{type}} naprak??sz!","updateButton":"Friss??t??s!"}}');

/***/ }),

/***/ "../assets/locales/it.json":
/*!*********************************!*\
  !*** ../assets/locales/it.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plug-ins","themes":"Temi","customcss":"CSS Personalizzato"},"Collections":{"settings":{"name":"Impostazioni","general":{"name":"Generale","emotes":{"name":"Sistema di Emotes","note":"Abilita il sistema di Emotes di BD"},"publicServers":{"name":"Servers Pubblici","note":"Mostra il pulsante di servers pubblici"},"voiceDisconnect":{"name":"Esci dalla chat vocale","note":"Esci automaticamente dalla chat vocale quando chiudi Discord"},"showToasts":{"name":"Mostra Notifiche","note":"Mostra delle piccole notifiche per le informazioni importanti"},"mediaKeys":{"name":"Disabilita i tasti multimediali","note":"Impedisce a Discord di prendere il controllo dei tasti multimediali dopo la riproduzione di un video."}},"window":{"removeMinimumSize":{"name":"Rimuovi la grandezza minima","note":"Rimuove la grandezza minima forzata di 940x500 di Discord"},"name":"Preferenze finestra","transparency":{"name":"Abilita trasparenza"}},"addons":{"name":"Gestore degli Add-ons","addonErrors":{"name":"Mostra gli errori degli Add-ons","note":"Mostra un modale con errori dei plug-ins e temi"},"editAction":{"name":"Modifica Azione","note":"Dove appaiono plugins e temi durante le modifiche","options":{"detached":"Finestra distaccata","system":"Editor di sistema"}}},"customcss":{"name":"CSS personalizzato","customcss":{"name":"CSS personalizzato","note":"Abilita la scheda per il CSS personalizzato"},"liveUpdate":{"name":"Aggiornamento automatico","note":"Aggiorna l\'aspetto della finestra mentre modifichi il codice CSS"},"startDetached":{"name":"Apri in una finestra separata","note":"Cliccare la scheda per il CSS personalizzato apre l\'editor in una finestra separata"},"nativeOpen":{"name":"Apri nell\'editor nativo","note":"Cliccare la scheda di CSS personalizzato apre il CSS nel tuo editor nativo"},"openAction":{"name":"Posizione dell\'editor","note":"Dove verr?? aperta di default la finestra per il CSS personalizzato","options":{"settings":"Menu Impostazioni","detached":"Finestra separata","system":"Editor predefinito"}}},"developer":{"name":"Impostazioni sviluppatore","debuggerHotkey":{"name":"Scorciatoia debugger","note":"Permette di attivare il debugger quando viene premuto F8 con DevTools aperto"},"reactDevTools":{"name":"React Developer Tools","note":"Inietta la tua installazione locale di React Developer Tools all\'interno di Discord"},"inspectElement":{"name":"Scorciatoia Ispeziona Elemento","note":"Abilita la scorciatoia Ispeziona Elemento (ctrl + shift + c) che ?? comune nella maggioranza dei browser"},"devToolsWarning":{"name":"Ferma i warning DevTools","note":"Impedisci a Discord di mostrare il suo messaggio \\"Attenzione!\\""},"debugLogs":{"name":"Log di debug","note":"Manda tutto l\'output della console all\'interno del file debug.log nella cartella BetterDiscord"},"devTools":{"name":"DevTools","note":"Abilita l\'attivazione del DevTools tramite ctrl+shift+i"}},"editor":{"name":"Preferenze Editor","lineNumbers":{"name":"Numeri di riga","note":"Abilita la visualizzazione dei numeri delle righe al lato dell\'editor"},"fontSize":{"name":"Dimensione font","note":"Dimensione del font (pt) da usare nell\'editor"},"minimap":{"name":"Mini mappa","note":"Abilita la visualizzazione di una mini mappa del codice al lato dell\'editor"},"quickSuggestions":{"name":"Consigli veloci"},"renderWhitespace":{"name":"Mostra caratteri whitespace","options":{"all":"Sempre","none":"Mai","selection":"Selezione"}}}},"emotes":{"name":"Emote","general":{"name":"Generale","download":{"name":"Scarica Emote","note":"Scarica Emote ogni volta che viene trovata una nuova versione"},"emoteMenu":{"name":"Menu Emote"}},"categories":{"name":"Categorie","twitchsubscriber":{"name":"Iscritti Twitch"}}}},"Addons":{"title":"{{name}} v{{version}} di {{author}}","byline":"di {{author}}","openFolder":"Apri cartella {{type}}","reload":"Ricarica","addonSettings":"Impostazioni","website":"Sito Web","source":"Fonte","invite":"Supporta il server","donate":"Dona","patreon":"Patreon","name":"Nome","author":"Autore","version":"Versione","added":"Data di aggiunta","modified":"Data di modifica","search":"Cerca {{type}}","editAddon":"Modifica","deleteAddon":"Elimina","confirmDelete":"Sei sicuro di voler cancellare {{name}}?","confirmationText":"Hai delle modifiche non salvate su {{name}}. Chiudendo questa finestra perderai quelle modifiche.","enabled":"{{name}} ?? stato abilitato.","disabled":"{{name}} ?? stato disabilitato.","couldNotEnable":"Non ?? stato possibile abilitare {{name}}.","couldNotDisable":"Non ?? stato possibile disabilitare {{name}}.","couldNotStart":"Non ?? stato possibile far partire {{name}}.","couldNotStop":"Non ?? stato possibile fermare {{name}}.","settingsError":"Non ?? stato possibile aprire le impostazioni per {{name}}","methodError":"Non ?? stato possibile lanciare {{method}}.","unknownAuthor":"Autore sconosciuto","noDescription":"Nessuna descrizione.","alreadyExists":"Esiste gi?? un {{type}} con nome {{name}}","alreadWatching":"Stai gi?? vedendo gli addon.","metaError":"Non ?? stato possibile analizzare META.","missingNameData":"Nome dato mancante META.","metaNotFound":"META non trovato.","compileError":"Non ?? stato possibile compilare. Vedi la console per i dettagli.","wasUnloaded":"{{name}} ?? stato scaricato.","blankSlateHeader":"Non hai nessun {{type}}!","blankSlateMessage":"Scaricali [dal sito]({{link}}) e aggiungili alla cartella {{type}}.","isEnabled":"Abilitato"},"CustomCSS":{"confirmationText":"Hai delle modifiche non salvate sul tuo CSS Personalizzato. Chiudendo questa finestra perderai tutte quelle modifiche.","update":"Aggiorna","save":"Salva","openNative":"Apri nell\'editor predefinito","openDetached":"Apri in una finestra separata","settings":"Impostazioni editor","editorTitle":"Editor per il CSS personalizzato"},"Emotes":{"loading":"Sto caricando le emote in background. Non ricaricare.","loaded":"Tutte le emote sono state caricate correttamente.","clearEmotes":"Cancella i dati delle Emote","favoriteAction":"Preferito!","downloadFailed":"Download fallito","failureMessage":"BetterDiscord non ?? riuscito a scaricare le emote, controlla la tua connessione internet e il firerwall."},"PublicServers":{"button":"pubblico","join":"Unisciti","joining":"Ti stai unendo","joined":"Ti sei unito","loading":"Caricamento in corso","loadMore":"Carica di pi??","notConnected":"Non connesso","connectionRequired":"Devi connettere il tuo account per poter unirti ai server.","connectionError":"Errore di connessione","connectionErrorMessage":"C\'?? stato un errore di connessione verso DiscordServers.com, ?? possibile che il loro sito web/API siano non raggiungibili. Riprova pi?? tardi.","pagination":"Pagina {{page}} di {{count}}","search":"Cerca","connect":"Connettiti","reconnect":"Riconnettiti","categories":"Categorie","keywords":"Parole chiave","connection":"Connesso come: {{username}}#{{discriminator}}","results":"Mostrando {{start}}-{{end}} di {{total}} risultati in {{category}}","query":"per {{query}}"},"Modals":{"confirmAction":"Sei sicuro?","okay":"Ok","done":"Fatto","cancel":"Annulla","nevermind":"Non importa","close":"Chiudi","name":"Nome","message":"Messaggio","error":"Errore","addonErrors":"Errori Addon","restartRequired":"Riavvio richiesto","restartNow":"Riavvia ora","restartLater":"Riavvia pi?? tardi","additionalInfo":"Pi?? informazioni","restartPrompt":"Per avere effetto, Discord ha bisogno di essere riavviato. Desideri riavviare ora?"},"ReactDevTools":{"notFound":"Estensione non trovata","notFoundDetails":"Impossibile trovare l\'estensione React Developer Tools sul tuo PC. Per favore installa l\'estensione sulla tua installazione locale di Chrome."},"Sorting":{"sortBy":"Ordina per","order":"Ordina","ascending":"Ascendente","descending":"Discendente"},"WindowPrefs":{"enabledInfo":"Questa opzione richiede un tema trasparente per funzionare correttamente. Su Windows questo potrebbe rompere l\'attacco Aero e l\'ingrandimento delle finestre.\\n\\nPer avere effetto, Discord deve essere riavviato. Vuoi riavviarlo ora?","disabledInfo":"Per avere effetto, Discord deve essere riavviato. Vuoi riavviarlo ora?"}}');

/***/ }),

/***/ "../assets/locales/ja.json":
/*!*********************************!*\
  !*** ../assets/locales/ja.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"???????????????","themes":"?????????","customcss":"????????????CSS","updates":"??????????????????"},"Collections":{"settings":{"name":"??????","general":{"name":"??????","emotes":{"name":"???????????????","note":"BetterDiscord??????????????????????????????????????????"},"publicServers":{"name":"??????????????????","note":"????????????????????????????????????????????????"},"voiceDisconnect":{"name":"?????????????????????????????????","note":"Discord?????????????????????????????????????????????????????????????????????????????????"},"showToasts":{"name":"??????????????????","note":"??????????????????????????????????????????????????????"},"mediaKeys":{"name":"???????????????????????????","note":"?????????????????????Discord?????????????????????????????????????????????????????????"}},"window":{"removeMinimumSize":{"name":"?????????????????????","note":"Discord??????????????????????????????????????????940x500?????????????????????????????????"},"name":"?????????????????????","transparency":{"name":"???????????????","note":"Discord?????????????????????????????????????????????(????????????)???"},"frame":{"name":"????????????????????????????????????","note":"???????????????????????????OS?????????????????????????????????????????????????????????"}},"addons":{"name":"??????????????????????????????","addonErrors":{"name":"??????????????????????????????","note":"???????????????/??????????????????????????????????????????"},"editAction":{"name":"?????????????????????","note":"?????????????????????????????????????????????????????????","options":{"detached":"Discord????????????","system":"???????????????????????????"}}},"customcss":{"name":"????????????CSS","customcss":{"name":"????????????CSS","note":"????????????CSS??????????????????????????????"},"liveUpdate":{"name":"??????????????????????????????","note":"???????????????????????????CSS?????????"},"startDetached":{"name":"?????????????????????","note":"????????????CSS??????????????????????????????????????????????????????????????????????????????????????????"},"nativeOpen":{"name":"???????????????????????????","note":"????????????CSS??????????????????????????????????????????"},"openAction":{"name":"Editor Location","note":"Where Custom CSS should open by default","options":{"settings":"Settings Menu","detached":"Detached Window","system":"System Editor"}}},"developer":{"name":"???????????????","debuggerHotkey":{"name":"??????????????????????????????","note":"????????????????????????????????????????????????F8???????????????????????????????????????????????????"},"reactDevTools":{"name":"React Developer Tools","note":"Injects your local installation of React Developer Tools into Discord"},"inspectElement":{"name":"Inspect Element Hotkey","note":"Enables the inspect element hotkey (ctrl + shift + c) that is common in most browsers"},"devToolsWarning":{"name":"Stop DevTools Warning","note":"Stops Discord from printing out their \\"Hold Up!\\" message"},"debugLogs":{"name":"??????????????????","note":"?????????????????????BetterDiscord???????????????debug.log??????????????????????????????????????????"},"devTools":{"name":"???????????????????????????","note":"ctrl+shift+i???????????????????????????????????????????????????????????????"}},"editor":{"name":"????????????????????????","lineNumbers":{"name":"?????????","note":"??????????????????????????????????????????????????????"},"fontSize":{"name":"?????????????????????","note":"??????????????????????????????????????????????????????(pt)??????????????????"},"minimap":{"name":"???????????????","note":"????????????????????????????????????????????????????????????????????????"},"hover":{"name":"???????????????????????????","note":"?????????????????????????????????????????????????????????????????????????????????????????????????????????"},"quickSuggestions":{"name":"????????????","note":"?????????????????????????????????????????????????????????????????????"},"renderWhitespace":{"name":"???????????????","note":"?????????????????????????????????????????????","options":{"all":"??????","none":"??????","selection":"??????"}}}},"emotes":{"name":"?????????","general":{"name":"??????","download":{"name":"??????????????????????????????","note":"??????????????????????????????????????????????????????????????????????????????"},"emoteMenu":{"name":"?????????????????????","note":"????????????????????????Twitch???????????????????????????????????????????????????"},"hideEmojiMenu":{"name":"?????????????????????????????????","note":"??????????????????????????????????????????Discord?????????????????????????????????????????????????????????"},"autoCaps":{"name":"????????????????????????","note":"???????????????????????????????????????????????????"},"modifiers":{"name":"BetterDiscord??????????????????","note":"BetterDiscord?????????????????????????????????(flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)???"},"animateOnHover":{"name":"?????????????????????","note":"??????????????????????????????????????????????????????"}},"categories":{"name":"????????????","twitchglobal":{"name":"Twitch Globals","note":"Show Twitch global emotes"},"twitchsubscriber":{"name":"Twitch????????????","note":"Twitch??????????????????????????????????????????"},"frankerfacez":{"name":"FrankerFaceZ","note":"FFZ?????????????????????????????????"},"bttv":{"name":"BetterTTV","note":"BTTV?????????????????????????????????"}}}},"Addons":{"title":"{{name}} v{{version}} by {{author}}","byline":"by {{author}}","openFolder":"{{type}}????????????????????????","reload":"????????????","addonSettings":"??????","website":"??????????????????","source":"?????????","invite":"????????????????????????","donate":"??????","patreon":"Patreon","name":"??????","author":"??????","version":"???????????????","added":"?????????","modified":"?????????","search":"{{type}}?????????","editAddon":"??????","deleteAddon":"??????","confirmDelete":"?????????{{name}}????????????????????????","confirmationText":"{{name}}?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????","enabled":"{{name}}???????????????????????????","disabled":"{{name}}???????????????????????????","couldNotEnable":"{{name}}???????????????????????????????????????","couldNotDisable":"{{name}}???????????????????????????????????????","couldNotStart":"{{name}}????????????????????????????????????","couldNotStop":"{{name}}????????????????????????????????????","settingsError":"{{name}}???????????????????????????????????????","methodError":"{{method}}????????????????????????????????????","unknownAuthor":"????????????","noDescription":"???????????????????????????","alreadyExists":"There is already a {{type}} with name {{name}}","alreadWatching":"Already watching  addons.","metaError":"META could not be parsed.","missingNameData":"META missing name data.","metaNotFound":"META was not found.","compileError":"?????????????????????????????????????????????????????????????????????????????????????????????","wasUnloaded":"{{name}} was unloaded.","blankSlateHeader":"You don\'t have any {{type}}s!","blankSlateMessage":"Grab some from [this website]({{link}}) and add them to your {{type}} folder.","isEnabled":"??????","wasLoaded":"{{name}}???v{{version}}??????????????????????????????"},"CustomCSS":{"confirmationText":"????????????CSS?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????","update":"??????????????????","save":"??????","openNative":"???????????????????????????","openDetached":"???????????????????????????","settings":"?????????????????????","editorTitle":"????????????CSS???????????????"},"Emotes":{"loading":"Loading emotes in the background do not reload.","loaded":"????????????????????????????????????????????????????????????","clearEmotes":"???????????????????????????","favoriteAction":"???????????????!","downloadFailed":"???????????????????????????","failureMessage":"BetterDiscord?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????"},"PublicServers":{"button":"??????????????????","join":"??????","joining":"?????????","joined":"?????????","loading":"???????????????","loadMore":"?????????????????????","notConnected":"?????????????????????????????????","connectionRequired":"????????????????????????????????????????????????????????????????????????????????????????????????","connectionError":"???????????????","connectionErrorMessage":"DiscordServers.com????????????????????????????????????????????????????????????????????????API???????????????????????????????????????????????????????????????????????????????????????????????????","pagination":"Page {{page}} of {{count}}","search":"??????","connect":"??????","reconnect":"?????????","categories":"????????????","keywords":"???????????????","connection":"????????????{{username}}#{{discriminator}}","results":"{{category}}???????????????{{total}}??????{{start}}-{{end}}???????????????????????????","query":"????????????{{query}}"},"Modals":{"confirmAction":"?????????????????????????????????","okay":"??????","done":"Done","cancel":"?????????","nevermind":"Nevermind","close":"Close","name":"??????","message":"???????????????","error":"?????????","addonErrors":"?????????????????????","restartRequired":"??????????????????","restartNow":"??????????????????","restartLater":"???????????????","additionalInfo":"??????????????????","restartPrompt":"??????????????????????????????Discord???????????????????????????????????????????????????????????????????????????"},"ReactDevTools":{"notFound":"????????????????????????????????????","notFoundDetails":"PC???React Developer Tools???????????????????????????????????????Chrome?????????????????????????????????????????????????????????"},"Sorting":{"sortBy":"?????????","order":"??????","ascending":"??????","descending":"??????"},"WindowPrefs":{"enabledInfo":"????????????????????????????????????????????????????????????????????????????????????????????????Windows ?????????????????????????????????????????????????????????????????????????????????\\n\\n????????????????????????????????????????????????Discord ???????????????????????????????????????????????????????????????????????????","disabledInfo":"??????????????????????????????Discord???????????????????????????????????????????????????????????????????????????"},"Notices":{"moreInfo":"??????"},"Updater":{"updateFailed":"??????????????????????????????????????????","updateFailedMessage":"BetterDiscord???????????????????????????????????????????????????????????????(https://betterdiscord.app/)???????????????????????????????????????????????????????????????????????????????????????????????????????????????","updateSuccessful":"??????????????????????????????????????????","updateAvailable":"BetterDiscord??????????????????????????????(v{{version}})??????????????????","addonUpdatesAvailable":"BetterDiscord???{{.type}}????????????????????????{{count}}?????????????????????!","addonUpdated":"{{name}}??????????????????{{version}}???????????????????????????????????????","checking":"???????????????????????????","finishedChecking":"???????????????????????????????????????????????????","checkForUpdates":"??????????????????????????????","updateAll":"???????????????????????????","noUpdatesAvailable":"???????????????????????????????????????","versionAvailable":"???????????????{{version}}????????????????????????","upToDateBlankslate":"{{type}}???????????????????????????","updateButton":"?????????????????????"}}');

/***/ }),

/***/ "../assets/locales/ko.json":
/*!*********************************!*\
  !*** ../assets/locales/ko.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"????????????","themes":"??????","customcss":"????????? ?????? CSS","updates":"????????????"},"Collections":{"settings":{"name":"??????","general":{"name":"??????","emotes":{"name":"????????? ?????????","note":"BD??? ????????? ???????????? ??????????????????"},"publicServers":{"name":"?????? ??????","note":"?????? ?????? ????????? ???????????????"},"voiceDisconnect":{"name":"?????? ?????? ??????","note":"Discord??? ?????? ??? ?????? ????????? ????????? ????????????"},"showToasts":{"name":"????????? ????????? ??????","note":"????????? ????????? ?????? ?????? ????????? ???????????????"},"mediaKeys":{"name":"????????? ??? ????????????","note":"Discord??? ????????? ????????? ?????? ????????? ?????? ???????????? ?????? ???????????????"}},"window":{"removeMinimumSize":{"name":"?????? ?????? ??????","note":"??????????????? ?????? ??? ?????? ????????? 940x500??? ???????????????"},"name":"??? ??????","transparency":{"name":"????????? ?????????","note":"?????? ?????? ???????????? ????????? ?????? ?????????????????? (????????? ?????????)"},"frame":{"name":"??? ?????????","note":"?????? ?????? ?????? OS ??? ???????????? ???????????????"}},"addons":{"name":"????????? ?????????","addonErrors":{"name":"????????? ?????? ??????","note":"????????????/?????? ????????? ?????? ????????? ???????????????"},"editAction":{"name":"?????? ??????","note":"????????? ??? ??????????????? ????????? ???????????? ???","options":{"detached":"?????? ???","system":"????????? ?????????"}}},"customcss":{"name":"????????? ?????? CSS","customcss":{"name":"????????? ?????? CSS","note":"????????? ?????? CSS ?????? ??????????????????"},"liveUpdate":{"name":"????????? ????????????","note":"css??? ???????????? ?????? ?????????????????????"},"startDetached":{"name":"?????? ??? ??????","note":"????????? ?????? CSS ?????? ???????????? ????????? ????????? ???????????? ????????????"},"nativeOpen":{"name":"?????? ??????????????? ??????","note":"????????? ?????? CSS ?????? ???????????? ?????? ??????????????? ????????? ?????? css??? ????????????"},"openAction":{"name":"?????? ?????????","note":"??????????????? ????????? ?????? CSS??? ????????? ???","options":{"settings":"?????? ??????","detached":"????????? ???","system":"????????? ?????????"}}},"developer":{"name":"????????? ??????","debuggerHotkey":{"name":"????????? ?????????","note":"F8??? ?????? ??? ???????????? ??????????????????"},"reactDevTools":{"name":"?????? ????????? ??????","note":"?????? ????????? ????????? ?????? ????????? ?????????"},"inspectElement":{"name":"?????? ?????? ?????????","note":"???????????? ?????????????????? ?????? ?????? ?????? ?????? ???????????? ?????????????????? (ctrl + shift + c)"},"devToolsWarning":{"name":"????????? ?????? ?????????","note":"Discord??? \\"Hold Up!\\" ???????????? ???????????? ?????? ????????????"},"debugLogs":{"name":"????????? ??????","note":"????????? ?????? ????????? BetterDiscord ????????? debug.log ????????? ???????????????"},"devTools":{"name":"????????? ??????","note":"ctrl+shift+i??? ???????????? ????????? ????????? ??????????????????"}},"editor":{"name":"????????? ??????","lineNumbers":{"name":"??? ??????","note":"????????? ????????? ??? ?????? ????????? ???????????????"},"fontSize":{"name":"?????? ??????","note":"??????????????? ????????? ?????? (pt) ??????"},"minimap":{"name":"?????????","note":"????????? ????????? ?????? ????????? ????????? ??????????????????"},"hover":{"name":"?????? ??????","note":"?????? ??? ???????????? ????????? ????????? ?????? ??? ?????? ????????? ??????????????????"},"quickSuggestions":{"name":"?????? ??????","note":"????????? ??? ?????? ?????? ?????? ????????? ???????????????"},"renderWhitespace":{"name":"?????? ??????","note":"???????????? ????????? ???????????? ?????? ??????","options":{"all":"?????? ??????","none":"?????? ??????","selection":"??????"}}}},"emotes":{"name":"?????????","general":{"name":"??????","download":{"name":"????????? ????????????","note":"????????? ?????? ???????????? ?????????????????????"},"emoteMenu":{"name":"????????? ??????","note":"????????? ????????? ?????????/???????????? ???????????? ???????????????"},"hideEmojiMenu":{"name":"????????? ?????? ?????????","note":"????????? ????????? ?????? ?????? ??? Discord??? ????????? ????????? ????????????"},"autoCaps":{"name":"????????? ?????? ?????????","note":"????????? ???????????? ?????? ???????????? ???????????????"},"modifiers":{"name":"????????? ????????? ??????","note":"????????? ????????? ?????????????????? (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"????????? ????????? ????????? ??? ??????????????? ??????","note":"????????? ????????? ?????? ???????????? ?????????????????? ???????????????"}},"categories":{"name":"????????????","twitchglobal":{"name":"????????? ?????????","note":"????????? ????????? ???????????? ???????????????"},"twitchsubscriber":{"name":"????????? ??????","note":"????????? ?????? ???????????? ???????????????"},"frankerfacez":{"name":"FrankerFaceZ","note":"FFZ ???????????? ???????????????"},"bttv":{"name":"BetterTTV","note":"BTTV ???????????? ???????????????"}}}},"Addons":{"title":"{{name}} v{{version}} by {{author}}","byline":"by {{author}}","openFolder":"{{type}} ?????? ??????","reload":"?????????","addonSettings":"??????","website":"????????????","source":"??????","invite":"?????? ??????","donate":"??????","patreon":"????????????","name":"??????","author":"?????????","version":"??????","added":"????????? ??????","modified":"????????? ??????","search":"{{type}} ??????","editAddon":"??????","deleteAddon":"??????","confirmDelete":"{{name}}(???)??? ?????????????????????????","confirmationText":"{{name}}??? ???????????? ?????? ??????????????? ????????????. ??? ?????? ????????? ?????? ????????? ???????????????.","enabled":"{{name}}??? ????????????????????????","disabled":"{{name}}??? ???????????????????????????","couldNotEnable":"{{name}} ???????????? ??????????????????","couldNotDisable":"{{name}} ??????????????? ??????????????????.","couldNotStart":"{{name}} ????????? ??????????????????","couldNotStop":"{{name}} ????????? ??????????????????","settingsError":"{{name}} ??? ????????? ??? ??? ????????????","methodError":"{{method}}(???)??? ????????? ??? ????????????","unknownAuthor":"??? ??? ?????? ?????????","noDescription":"????????? ???????????? ???????????????","alreadyExists":"{{type}}(???)??? ?????? {{name}}?????? ???????????????","alreadWatching":"?????? ???????????? ?????? ????????????","metaError":"META ????????? ??????????????????","missingNameData":"META ?????? ????????? ?????? ??? ??????","metaNotFound":"META ?????? ??? ??????","compileError":"???????????? ??????????????????","wasUnloaded":"{{name}}??? ????????????????????????","blankSlateHeader":"{{type}}??? ????????????","blankSlateMessage":"[??? ????????????]({{link}})?????? ??? ????????? {{type}} ????????? ???????????????","isEnabled":"????????????","wasLoaded":"{{name}} v{{version}} ??? ?????????."},"CustomCSS":{"confirmationText":"????????? ?????? CSS??? ???????????? ?????? ??????????????? ????????????. ??? ?????? ????????? ?????? ????????? ???????????????","update":"????????????","save":"??????","openNative":"????????? ??????????????? ??????","openDetached":"????????? ????????? ??????","settings":"????????? ??????","editorTitle":"?????????  CSS ?????????"},"Emotes":{"loading":"????????????????????? ????????? ???????????? ??????????????? ????????????","loaded":"?????? ???????????? ?????????????????????","clearEmotes":"????????? ????????? ?????????","favoriteAction":"????????????","downloadFailed":"???????????? ??????","failureMessage":"BetterDiscord??? ????????? ??????????????? ??????????????????. ????????? ????????? ???????????? ??????????????????"},"PublicServers":{"button":"??????","join":"??????","joining":"?????? ???","joined":"?????????","loading":"?????? ???","loadMore":"??? ????????????","notConnected":"???????????? ??????","connectionRequired":"????????? ???????????? ????????? ????????? ???????????? ?????????","connectionError":"?????? ??????","connectionErrorMessage":"DiscordServers.com ????????? ????????? ????????????. ????????????/API??? ???????????? ??? ????????????. ????????? ?????? ???????????????.","pagination":"{{page}} ????????? ??? {{count}}","search":"??????","connect":"??????","reconnect":"?????????","categories":"????????????","keywords":"?????????","connection":"{{username}}#{{discriminator}} ?????????","results":"{{category}} ??? ?????????????????? {{total}} ??? {{start}}-{{end}} ?????? ???","query":"??????: {{query}}"},"Modals":{"confirmAction":"????????????????","okay":"??????","done":"??????","cancel":"??????","nevermind":"??????","close":"??????","name":"??????","message":"?????????","error":"??????","addonErrors":"????????? ??????","restartRequired":"????????? ?????????","restartNow":"?????? ???????????????","restartLater":"????????? ???????????????","additionalInfo":"?????? ??????","restartPrompt":"????????? ?????? Discord??? ?????????????????? ?????????. ?????? ????????????????????????????"},"ReactDevTools":{"notFound":"?????? ??????????????? ?????? ??? ??????","notFoundDetails":"PC?????? ?????? ????????? ?????? ?????? ??????????????? ?????? ??? ????????????. ?????? Chrome ?????? ????????? ?????? ??????????????? ??????????????????."},"Sorting":{"sortBy":"??????: ","order":"??????: ","ascending":"????????????","descending":"????????????"},"WindowPrefs":{"enabledInfo":"??? ????????? ????????? ??????????????? ????????? ????????? ???????????????. Windows??? ????????? ???????????? ???????????? ????????? ??? ????????????.\\n\\n????????? ?????? Discord??? ?????????????????? ?????????. ?????? ????????????????????????????","disabledInfo":"????????? ?????? Discord??? ?????????????????? ?????????. ?????? ????????????????????????????"},"Notices":{"moreInfo":"??? ?????? ?????? ??????"},"Updater":{"updateFailed":"??????????????? ??????????????????!","updateFailedMessage":"BetterDiscord??? ??????????????? ??????????????????. ?????? ???????????? (https://betterdiscord.app/) ?????? ???????????? ?????? ?????????????????????.","updateSuccessful":"??????????????? ??????????????? ?????????????????????!","updateAvailable":"BetterDiscord??? ????????? ??????????????? ???????????? (v{{version}})","addonUpdatesAvailable":"BetterDiscord??? {{.type}}??? ??????????????? {{count}}??? ??????????????????!","addonUpdated":"{{name}} ??? ?????? {{version}} ?????? ???????????? ???????????????!","checking":"??????????????? ???????????? ????????????!","finishedChecking":"???????????? ????????? ???????????????!","checkForUpdates":"???????????? ????????????!","updateAll":"?????? ???????????? ???????????????!","noUpdatesAvailable":"?????? ????????? ??????????????? ????????????.","versionAvailable":"?????? {{version}} ??? ????????? ??? ????????????!","upToDateBlankslate":"????????? {{type}} ??? ?????? ?????????????????????!","updateButton":"????????????!"}}');

/***/ }),

/***/ "../assets/locales/lt.json":
/*!*********************************!*\
  !*** ../assets/locales/lt.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/nl.json":
/*!*********************************!*\
  !*** ../assets/locales/nl.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plug-ins","themes":"Thema\'s","customcss":"Aangepaste CSS"},"Collections":{"settings":{"name":"Instellingen","general":{"name":"Algemeen","emotes":{"name":"Emote systeem","note":"Schakel het emote-systeem van BD in"},"publicServers":{"name":"Openbare servers","note":"Knop openbare servers weergeven"},"voiceDisconnect":{"name":"Stem Verbroken","note":"Verbreek de verbinding met de oproep"},"showToasts":{"name":"Laat Toasts Zien","note":"Toont een melding voor belangrijke informatie"},"mediaKeys":{"name":"Schakel mediatoetsen uit","note":"Voorkomt dat Discord uw mediatoetsen kaapt na het afspelen van een video."}}},"emotes":{"general":{"name":"Algemeen","emoteMenu":{"name":"Emote Menu"},"hideEmojiMenu":{"name":"Verberg emoji-menu"}},"categories":{"frankerfacez":{"name":"FrankerFaceZ"},"bttv":{"name":"BetterTTV","note":"Laat emotes zien van BTTV"}}}},"Addons":{"byline":"door {{author}}","openFolder":"Open {{type}} folder","reload":"Herladeen","addonSettings":"Instellingen","website":"Website","source":"Bronnen","invite":"Support Server","donate":"Donatie","patreon":"Patreon","name":"Naam","author":"Schrijver","version":"Versie","added":"Datum toegevoegd","modified":"Datum gewijzigd ","editAddon":"Bewerken","deleteAddon":"Verwijderen","confirmDelete":"Weet je het zeker dat je {{name}} wilt verwijderen?","confirmationText":"Je hebt niet-opgeslagen wijzigingen in {{naam}}. Als je dit venster sluit, gaan alle wijzigingen verloren.","unknownAuthor":"Onbekende schrijver","noDescription":"Beschrijving kon niet worden weergegeven"},"Emotes":{"favoriteAction":"Favorieten"},"PublicServers":{"button":"openbaar","loading":"Aan het laden...","loadMore":"Laad meer...","notConnected":"Niet verbonden.","search":"Zoeken","connect":"Verbindeen","categories":"Categorie??n"},"Modals":{"confirmAction":"Weet je het zeker?","okay":"Ok??","cancel":"Annuleren","close":"Bijna","name":"Naam","message":"Berich","error":"Fout!"},"Sorting":{"order":"Volgorde"}}');

/***/ }),

/***/ "../assets/locales/no.json":
/*!*********************************!*\
  !*** ../assets/locales/no.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"customcss":"Tilpasset CSS"},"Collections":{"settings":{"name":"Innstillinger","general":{"name":"Generell","emotes":{"name":"Emote-system"},"publicServers":{"name":"Offentlige Servere"},"showToasts":{"name":"Vis Toasts"}},"customcss":{"name":"Tilpasset CSS","customcss":{"name":"Tilpasset CSS"}}},"emotes":{"name":"Emotes","general":{"name":"Generell","download":{"name":"Last ned Emotes"}},"categories":{"name":"Kategorier","frankerfacez":{"name":"FrankerFaceZ"},"bttv":{"name":"BetterTTV"}}}},"Addons":{"addonSettings":"Innstillinger","website":"Nettsted","donate":"Donere","patreon":"Patreon","name":"Navn","author":"Forfatter","version":"Versjon","editAddon":"Redigere","deleteAddon":"Slett"},"CustomCSS":{"update":"Oppdater","save":"Lagre"},"Emotes":{"favoriteAction":"Favoritt!"},"PublicServers":{"button":"offentlig","search":"S??k"},"Modals":{"confirmAction":"Er Du Sikker?","okay":"Okay","restartNow":"Start p?? nytt n??","restartLater":"Start p?? nytt senere"},"Sorting":{"sortBy":"Sorter etter"},"WindowPrefs":{"disabledInfo":"For ?? kunne tre i kraft m?? Discord startes p?? nytt. Vil du starte p?? nytt n???"}}');

/***/ }),

/***/ "../assets/locales/pl.json":
/*!*********************************!*\
  !*** ../assets/locales/pl.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Wtyczki","themes":"Motywy","customcss":"Niestandardowy CSS"},"Collections":{"settings":{"name":"Ustawienia","general":{"name":"Og??lne","emotes":{"name":"System emoji","note":"Aktywuje system emoji BetterDiscorda"},"publicServers":{"name":"Publiczne serwery","note":"Wy??wietla przycisk do publicznych serwer??w"},"voiceDisconnect":{"name":"Roz????czaj z czatem g??osowym","note":"Roz????cza z serwerem czatu g??osowego przy wy????czaniu Discorda"},"showToasts":{"name":"Wy??wietlaj okienka powiadomie??","note":"Wy??wietla ma??e powiadomienia dla wa??nych zdarze??"},"mediaKeys":{"name":"Wy????cz przyciski multimedialne","note":"Zapobiega korzystaniu z klawiszy multimedialnych przez Discorda podczas odtwarzania film??w."}},"window":{"removeMinimumSize":{"name":"Usu?? limit minimalnego rozmiaru okna","note":"Usuwa wymuszony przez Discorda limit minimalnego rozmiaru okna (940x500)"},"name":"Ustawienia okna","transparency":{"name":"W????cz przezroczysto????","note":"Dodaje efekt przezroczytsto??ci do okna Discorda (wymaga ponownego uruchomienia)"},"frame":{"name":"Ramka okna","note":"Dodaje systemow?? ramk?? do okna Discorda"}},"addons":{"name":"Mened??er dodatk??w","addonErrors":{"name":"Wy??wietlaj b????dy dodatk??w","note":"Wy??wietla okno z b????dami wtyczek i motyw??w"},"editAction":{"name":"Edytor dodatk??w","note":"Ustawia domy??lny edytor kodu wtyczek i motyw??w","options":{"detached":"Osobne okno","system":"Edytor systemowy"}}},"customcss":{"name":"Niestandardowy CSS","customcss":{"name":"Niestandardowy CSS","note":"Wy??wietla zak??adk?? z niestandardoweym kodem CSS"},"liveUpdate":{"name":"Automatyczny podgl??d","note":"Aktualizuje CSS Discorda wraz z pisaniem kodu"},"startDetached":{"name":"Osobne okno edytora","note":"Klikni??cie na zak??adk?? z niestandardowym kodem CSS uruchomi edytor w osobnym oknie"},"nativeOpen":{"name":"Otw??rz w edytorze systemowym","note":"Klikni??cie na zak??adk?? z niestandardowym kodem CSS uruchomi plik w edytorze systemowym"},"openAction":{"name":"Domy??lny edytor","note":"Ustawia domy??lny edytor niestandardowego kodu CSS","options":{"settings":"Ustawienia","detached":"Osobne okno","system":"Edytor systemowy"}}},"developer":{"name":"Ustawienia dla programist??w","debuggerHotkey":{"name":"Debugger","note":"Uruchamia debugger po naci??ni??ciu F8"},"reactDevTools":{"name":"React Developer Tools","note":"Wprowadza zainstalowane na twoim komputerze rozszerzenie React Developer Tools do Discorda"},"inspectElement":{"name":"Narz??dzie ???Zbadaj element???","note":"Umo??liwia korzystanie z narz??dzia ???Zbadaj element??? po u??yciu skr??tu klawiszowego Ctrl+Shift+C"},"devToolsWarning":{"name":"Nie wy??wietlaj ostrze??enia o szybkim wysy??aniu wiadomo??ci","note":"Zapobiega wy??wietlaniu informacji o zbyt szybkim wysy??aniu wiadomo??ci przez Discorda"},"debugLogs":{"name":"Dziennik zdarze??","note":"Przekierowuje informacje z konsoli do pliku debug.log w folderze BetterDiscorda"}}},"emotes":{"name":"Emoji","general":{"name":"Og??lne","download":{"name":"Pobieraj emoji","note":"Pobiera emoji, gdy jest dost??pna aktualizacja"},"emoteMenu":{"name":"Menu emoji","note":"Wy??wietla ulubione emoji oraz emoji z Twitcha w oddzielnym menu"},"hideEmojiMenu":{"name":"Ukryj menu emoji","note":"Ukrywa menu z emoji Discorda"},"autoCaps":{"name":"Automatyczna zmiana wielko??ci liter w emoji","note":"Automatycznie zmienia wielko???? liter przy wprowadzaniu emoji"},"modifiers":{"name":"Pokazuj modyfikacje emoji","note":"Wy??wietla modyfikacje emoji (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animacje po najechaniu","note":"Wy??wietla animacje wy????cznie przy najechaniu na zmodyfikowane emoji"}},"categories":{"name":"Kategorie","twitchglobal":{"name":"Globalne emoji Twitcha","note":"Wy??wietla globalne emoji Twitcha"},"twitchsubscriber":{"name":"Emoji dla subskrybent??w Twitcha","note":"Wy??wietla emoji dla subskrybent??w Twitcha"},"frankerfacez":{"name":"FrankerFaceZ","note":"Wy??wietla emoji z FrankerFaceZ"},"bttv":{"name":"BetterTTV","note":"Wy??wietla emoji z BetterTTV"}}}},"Addons":{"title":"{{name}} (wersja {{version}}) autorstwa {{author}}","byline":"autorstwa {{author}}","openFolder":"Otw??rz folder ({{type}})","reload":"Od??wie??","addonSettings":"Ustawienia","website":"Strona internetowa","source":"??r??d??o","invite":"Wspom???? serwer","donate":"Przeka?? darowizn??","patreon":"Patreon","name":"Nazwa","author":"Tw??rca","version":"Wersja","added":"Data dodania","modified":"Data modyfikacji","search":"Wyszukaj","editAddon":"Edytuj","deleteAddon":"Usu??","confirmDelete":"Czy na pewno chcesz usun???? {{name}}?","confirmationText":"Masz niezapisane zmiany w kodzie {{name}}. Zamkni??cie tego okna spowoduje utrat?? danych.","enabled":"Dodatek {{name}} zosta?? w????czony.","disabled":"Dodatek {{name}} zosta?? wy????czony.","couldNotEnable":"Dodatek {{name}} nie mo??e zosta?? w????czony.","couldNotDisable":"Dodatek {{name}} nie mo??e zosta?? wy????czony.","couldNotStart":"Dodatek {{name}} nie mo??e zosta?? w????czony.","couldNotStop":"Dodatek {{name}} nie mo??e zosta?? wy????czony.","settingsError":"Nie uda??o si?? otworzy?? ustawie?? {{name}}","methodError":"Metoda {{method}} nie mo??e zosta?? wywo??ana.","unknownAuthor":"Nieznany tw??rca","noDescription":"Brak opisu.","alreadyExists":"Masz ju?? dodatek z nazw?? {{name}}","alreadWatching":"Dodatki s?? ju?? obserwowane.","metaError":"Nie uda??o si?? przetworzy?? metadanych.","missingNameData":"Brak nazwy dodatku w metadanych.","metaNotFound":"Nie odnaleziono metadanych.","compileError":"B????d kompilacji.","wasUnloaded":"Dodatek {{name}} zosta?? od??adowany.","blankSlateHeader":"Wygl??da na to, ??e nic tu nie ma!","blankSlateMessage":"Pobierz nowe dodatki z [tej strony]({{link}}) i przenie?? je do odpowiedniego folderu."},"CustomCSS":{"confirmationText":"Masz niezapisane zmiany w swoim niestandardowym kodzie CSS. Zamkni??cie tego okienka spowoduje utrat?? danych.","update":"Zaktualizuj","save":"Zapisz","openNative":"Otw??rz w edytorze systemowym","openDetached":"Otw??rz w osobnym oknie","settings":"Ustawienia edytora","editorTitle":"Edytor niestandardowego kodu CSS"},"Emotes":{"loading":"??adowanie emoji w tle, nie od??wie??aj Discorda.","loaded":"Wszystkie emoji zosta??y za??adowane poprawnie.","clearEmotes":"Wyczy???? dane emoji","favoriteAction":"Dodaj do ulubionych","downloadFailed":"Pobieranie nie powiod??o si??","failureMessage":"Nie uda??o si?? pobra?? emoji, sprawd?? swoje po????czenie z internetem lub zapor?? ogniow??."},"PublicServers":{"button":"serwery","join":"Do????cz","joining":"Do????czanie","joined":"Do????czono","loading":"??adowanie","loadMore":"Za??aduj wi??cej","notConnected":"Nie po????czono","connectionRequired":"Musisz po????czy?? swoje konto, by wej???? na serwer.","connectionError":"B????d po????czenia","connectionErrorMessage":"Wyst??pi?? b????d podczas ????czenia z DiscordServers.com (najprawdopodobniej ich strona lub API nie dzia??a). Spr??buj ponownie p????niej.","pagination":"Strona {{page}} z {{count}}","search":"Wyszukaj","connect":"Po????cz","reconnect":"Odn??w po????czenie","categories":"Kategorie","keywords":"S??owa klucze","connection":"Po????czono jako: {{username}}#{{discriminator}}","results":"Wy??wietlanie {{start}}-{{end}} z {{total}} wszystkich wynik??w w {{category}}","query":"dla {{query}}"},"Modals":{"confirmAction":"Czy na pewno chcesz to zrobi???","okay":"Zamknij","done":"Potwierd??","cancel":"Anuluj","nevermind":"Anuluj","close":"Zamknij","name":"Nazwa","message":"Komunikat","error":"B????d","addonErrors":"B????dy wtyczek","restartRequired":"Wymagane ponowne uruchomienie","restartNow":"Zrestartuj teraz","restartLater":"Zrestartuj p????niej","additionalInfo":"Dodatkowe informacje","restartPrompt":"Uruchom ponownie Discorda, by zmiany odnios??y efekty. Czy chcesz to zrobi?? teraz?"},"ReactDevTools":{"notFound":"Nie znaleziono rozszerzenia","notFoundDetails":"Nie uda??o si?? znale???? React Developer Tools na twoim urz??dzeniu. By kontynuuowa??, zainstaluj to rozszerzenie w swoim Chrome."},"Sorting":{"sortBy":"Sortuj wg","order":"Kolejno????","ascending":"Rosn??ca","descending":"Malej??ca"},"WindowPrefs":{"enabledInfo":"Ta opcja wymaga przezroczystego motywu do poprawnego dzia??ania. Na Windowsie mog?? pojawi?? si?? problemy ze zmian?? wielko??ci okna.\\n\\nUruchom ponownie Discorda, by zmiany odnios??y efekty. Czy chcesz to zrobi?? teraz?","disabledInfo":"Uruchom ponownie Discorda, by zmiany odnios??y efekty. Czy chcesz to zrobi?? teraz?"}}');

/***/ }),

/***/ "../assets/locales/pt-br.json":
/*!************************************!*\
  !*** ../assets/locales/pt-br.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Temas","customcss":"CSS Personalizado"},"Collections":{"settings":{"name":"Configura????es","general":{"name":"Geral","emotes":{"name":"Sistema de Emotes","note":"Ativa o sistema de emotes do BetterDiscord"},"publicServers":{"name":"Servidores P??blicos","note":"Mostra o bot??o de servidores p??blicos"},"voiceDisconnect":{"name":"Desconex??o de Voz","note":"Desconecta do servidor de voz quando o discord ?? fechado"},"showToasts":{"name":"Mostrar Toasts","note":"Mostra uma pequena notifica????o para informa????es importantes"},"mediaKeys":{"name":"Desabilitar Teclas de Media","note":"Previne que o discord roube suas teclas de media depois de dar play em um v??deo"}},"window":{"removeMinimumSize":{"name":"Remover Tamanho M??nimo","note":"Remove o tamanho m??nimo for??ado pelo discord de 940x500"},"name":"Prefer??ncias da Janela","transparency":{"name":"Habilitar Transpar??ncia","note":"Faz a janela principal ser transparente (requer reinicializa????o)"},"frame":{"name":"Moldura da Janela","note":"Adiciona a moldura nativa na janela principal"}},"addons":{"name":"Gerenciador de Addons","addonErrors":{"name":"Mostrar erros dos Addons","note":"Mostra um modal com os erros do plugin/tema"},"editAction":{"name":"A????o de Edi????o","note":"Onde plugins e temas aparecer??o quando os editar","options":{"detached":"Janela Separada","system":"Editor do Sistema"}}},"customcss":{"name":"CSS Personalizado","customcss":{"name":"CSS Personalizado","note":"Habilita a aba de css personalizado"},"liveUpdate":{"name":"Atualiza????o em Tempo Real","note":"Atualiza o css ?? medida que voc?? digita"},"startDetached":{"name":"Iniciar Separado","note":"Clicar na aba do CSS Personalizado ir?? abrir o editor numa janela separada"},"nativeOpen":{"name":"Abrir no Editor Nativo","note":"Clicar na aba do CSS Personalizado ir?? o abrir usando seu editor nativo"},"openAction":{"name":"Localiza????o do Editor","note":"Onde o CSS Personalizado deve aparecer por padr??o","options":{"settings":"Menu de Configura????es","detached":"Janela Separada","system":"Editor do Sistema"}}},"developer":{"name":"Configura????es de Desenvolvedor","debuggerHotkey":{"name":"Atalho para o Depurador","note":"Permite ativar o depurador quando pressionar F8"},"reactDevTools":{"name":"React Developer Tools","note":"Injeta a sua instala????o local do React Developer Tools no discord"},"inspectElement":{"name":"Atalho para Inspecionar Elemento","note":"Habilita o atalho para inspecionar elemento (ctrl + shift + c) que ?? comum na maioria dos navegadores"},"devToolsWarning":{"name":"Remove os Avisos de DevTools","note":"Faz o discord parar de imprimir as mensagens de \\"Calma A??!\\""},"debugLogs":{"name":"Registro de Depura????o","note":"Salva todas os logs do console no arquivo debug.log dentro da pasta do BetterDiscord"}}},"emotes":{"name":"Emotes","general":{"name":"Geral","download":{"name":"Baixar Emotes","note":"Baixa os emotes sempre que eles estiverem desatualizados"},"emoteMenu":{"name":"Menu de Emotes","note":"Mostra os emotes favoritos e da twitch no menu"},"hideEmojiMenu":{"name":"Esconder o Menu de Emojis","note":"Esconde o menu de emojis do discord quando estiver usando o menu de emotes"},"autoCaps":{"name":"Capitaliza????o Autom??tica de Emotes ","note":"Capitaliza automaticamente os comandos de emote"},"modifiers":{"name":"Mostrar Modificadores de Emotes","note":"Ativa as modifica????o de emotes (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animar ao Interagir","note":"S?? anima os emotes quando o cursor passar sobre eles"}},"categories":{"name":"Categorias","twitchglobal":{"name":"Globais da Twitch","note":"Mostra os emotes globais da twitch"},"twitchsubscriber":{"name":"Subscribers da Twitch","note":"Mostra os emotes de subscribers da twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Mostra os emotes da FFZ"},"bttv":{"name":"BetterTTV","note":"Mostra os emotes da BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} by {{author}}","byline":"por {{author}}","openFolder":"Abrir Pasta de {{type}}s","reload":"Recarregar","addonSettings":"Configura????es","website":"Site","source":"Source","invite":"Servidor de Suporte","donate":"Doar","patreon":"Patreon","name":"Nome","author":"Autor","version":"Vers??o","added":"Date de Adi????o","modified":"Data de Modifica????o","search":"Pesquisar {{type}}","editAddon":"Editar","deleteAddon":"Remover","confirmDelete":"Voc?? tem certeza que quer remover o {{name}}?","confirmationText":"Voc?? tem mudan??as ainda n??o salvas em {{name}}. Fechar essa janela far?? voc?? perder todas elas.","enabled":"{{name}} foi ativado.","disabled":"{{name}} foi desativado.","couldNotEnable":"{{name}} n??o p??de ser ativado.","couldNotDisable":"{{name}} n??o p??de ser desativado.","couldNotStart":"{{name}} n??o p??de ser iniciado.","couldNotStop":"{{name}} n??o p??de ser parado.","settingsError":"N??o foi poss??vel abrir as configura????es do(a) {{name}}","methodError":"{{method}} n??o pode ser disparado.","unknownAuthor":"Autor Desconhecido","noDescription":"Descri????o n??o fornecida.","alreadyExists":"J?? existe um {{type}} com o nome {{name}}","alreadWatching":"J?? assistindo os addons.","metaError":"META n??o pode ser reconhecida.","missingNameData":"META sem dados de nome.","metaNotFound":"META n??o encontrado.","compileError":"N??o foi poss??vel compilar.","wasUnloaded":"{{name}} foi descarregado.","blankSlateHeader":"Voc?? n??o tem nenhum {{type}}!","blankSlateMessage":"Baixe alguns [desse website]({{link}}) e os adicione na sua pasta de {{type}}s."},"CustomCSS":{"confirmationText":"Voc?? tem mudan??as ainda n??o salvas no seu CSS Personalizado. Fechar essa janela far?? voc?? perder todas elas.","update":"Atualizar","save":"Salvar","openNative":"Abrir no Editor do Sistema","openDetached":"Abrir numa Janela Separada","settings":"Configura????es do Editor","editorTitle":"Editor do CSS Personalizado"},"Emotes":{"loading":"Carregando emotes em segundo plano, por favor n??o recarregue.","loaded":"Todos os emotes carregaram com sucesso.","clearEmotes":"Limpar os dados de Emotes","favoriteAction":"Favoritar!","downloadFailed":"Download Falhou","failureMessage":"BetterDiscord n??o conseguiu baixar os emotes, por favor verifique sua conex??o da internet e seu firewall."},"PublicServers":{"button":"p??blico","join":"Entrar","joining":"Entrando","joined":"Entrou","loading":"Carregando","loadMore":"Carregar Mais","notConnected":"N??o Conectado","connectionRequired":"Voc?? precisa conectar na sua conta para entrar em servidores.","connectionError":"Erro de Conex??o","connectionErrorMessage":"Algum erro ocorreu enquanto conectava no DiscordServers.com, ?? poss??vel que o site/api deles esteja fora do ar. Tente novamente mais tarde.","pagination":"P??gina {{page}} de {{count}}","search":"Pesquisar","connect":"Conectar","reconnect":"Reconectar","categories":"Categorias","keywords":"Palavras Chave","connection":"Conectado como: {{username}}#{{discriminator}}","results":"Mostrando {{start}}-{{end}} de {{total}} resultados da categoria {{category}}","query":"por {{query}}"},"Modals":{"confirmAction":"Voc?? Tem Certeza?","okay":"Okay","done":"Feito","cancel":"Cancelar","nevermind":"Deixe pra l??","close":"Fechar","name":"Nome","message":"Mensagem","error":"Erro","addonErrors":"Erros dos Addons","restartRequired":"Reinicializa????o Necess??ria","restartNow":"Reiniciar Agora","restartLater":"Reiniciar Mais Tarde","additionalInfo":"Informa????es Adicionais","restartPrompt":"Para as mudan??as terem efeito o discord precisa ser reinciado. Voc?? deseja reiniciar agora?"},"ReactDevTools":{"notFound":"Extens??o N??o Encontrada","notFoundDetails":"N??o foi poss??vel encontrar a exntes??o do React Developer Tools no seu PC. Por favor instale a extens??o na sua instala????o do Chrome local."},"Sorting":{"sortBy":"Ordenar Por","order":"Ordem","ascending":"Ascendente","descending":"Descendente"},"WindowPrefs":{"enabledInfo":"Essa op????o necessita de um tema transparente para funcionar corretamente. No Windows isso pode quebrar o aero snapping e a maximiza????o.\\n\\nO discord precisa ser reiniciado para as mudan??as terem efeito. Voc?? deseja reiniciar agora?","disabledInfo":"O discord precisa ser reiniciado para as mudan??as terem efeito. Voc?? deseja reiniciar agora?"}}');

/***/ }),

/***/ "../assets/locales/pt-pt.json":
/*!************************************!*\
  !*** ../assets/locales/pt-pt.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Plugins","themes":"Temas","customcss":"CSS Personalizado"},"Collections":{"settings":{"name":"Defini????es","general":{"name":"Geral","emotes":{"name":"Sistema de Emotes","note":"Ativa o sistema de emotes do BD"},"publicServers":{"name":"Servidores Publicos","note":"Mostra o bot??o de servidores publicos"},"voiceDisconnect":{"name":"Disconectar Voz","note":"Disconectar do servidor de voz quando fechar o discord"},"showToasts":{"name":"Mostrar notifica????es","note":"Mostra uma pequena notifica????o para informa????es importantes"},"mediaKeys":{"name":"Desativar as chaves M??dia","note":"Previne o Discord de dar hijack as chaves M??dia depois de ver um video."}},"window":{"removeMinimumSize":{"name":"Remove o tamanho m??nimo","note":"Remove o tamanho m??nimo obrigat??rio de janela do Discord de 940x500"},"name":"Prefer??ncia de Janela","transparency":{"name":"Ativar Transpar??ncia","note":"Ativa a janela principal para ter transpar??ncia (requer reniciar)"},"frame":{"name":"Moldura da janela","note":"Adiciona a moldura de janela nativa do sistema operativo ?? janela principal"}},"addons":{"name":"Gestor de extens??es","addonErrors":{"name":"Mostra os erros das extens??es","note":"Mostra uma janela com os erros dos plugins/temas"},"editAction":{"name":"Editar a????o","note":"Onde os plugins e os temas ir??o aparecer quando se edita","options":{"detached":"Separar janela","system":"Editor de sistema"}}},"customcss":{"name":"CSS Personalizado","customcss":{"name":"CSS Personalizado","note":"Ativa a aba de CSS Personalizado"},"liveUpdate":{"name":"Atualiza????es diretas","note":"Atualiza o css a medida que se escreve"},"startDetached":{"name":"Come??ar desanexado","note":"Clicar na aba de CSS Personalizado abre o editor numa janela separada"},"nativeOpen":{"name":"Abrir o editor Nativo","note":"Clicar na aba de CSS Personalizado abre o css personalizado no seu editor nativo"},"openAction":{"name":"Editor de localiza????o","note":"Onde o CSS personalizado abre por predifini????o","options":{"settings":"Menu de defini????es","detached":"Separar Janela","system":"Editor de sistema"}}},"developer":{"name":"Defini????es de desenvolvedor","debuggerHotkey":{"name":"Debugger Hotkey","note":"Permite a ativa????o do debugger quando pressiona o F8"},"reactDevTools":{"name":"Ferramentas de Desenvolvedor React","note":"Injeta a instala????o local da Ferramenta de Desenvolvedor React para o Discord"},"inspectElement":{"name":"Tecla de Inspecionar Elemento","note":"Ativa a tecla de inspecionar elemento (ctrl + shift + c) que ?? comum na maioria dos navegadores browser"},"devToolsWarning":{"name":"P??ra o aviso de DevTools","note":"P??ra o Discord de mostrar a mensagem \\"Hold up!\\""},"debugLogs":{"name":"Debug Logs","note":"Sa??da de tudo da consola para o ficheiro debug.log na pasta BetterDiscord"}}},"emotes":{"name":"Emotes","general":{"name":"Geral","download":{"name":"Transferir Emotes","note":"Transferir Emotes mesmo estando indisponiveis"},"emoteMenu":{"name":"Menu de Emotes","note":"Mostra os emotes Twitch/Favoritos no menu de emotes"},"hideEmojiMenu":{"name":"Esconde o Emoji Menu","note":"Esconde o menu de emojis do Discord quando se usa o menu de emotes"},"autoCaps":{"name":"Emote Autocapitaliza????o","note":"Autocapitaliza o comando de emotes"},"modifiers":{"name":"Mostra as modifica????es de emotes","note":"Ativa a modifica????o de emotes (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animar ao pairar","note":"Anima os modificadores de emote apenas ao passar o cursor"}},"categories":{"name":"Categorias","twitchglobal":{"name":"Twitch Globals","note":"Mostra os emotes da Twitch global"},"twitchsubscriber":{"name":"Subscri????es Twitch","note":"Mostra os emotes de subscri????o da Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"Mostra os emotes da FFZ"},"bttv":{"name":"BetterTTV","note":"Mostra os emotes da"}}}},"Addons":{"title":"{{name}} v{{version}} feito por {{author}}","byline":"feito por {{author}}","openFolder":"Abrir a pasta {{type}}","reload":"Recarregar","addonSettings":"Defini????es","website":"Website","source":"Fonte","invite":"Servidor de Suporte","donate":"Doar","patreon":"Patreon","name":"Nome","author":"Autor","version":"Vers??o","added":"Data Adicionada","modified":"Data Modificada","search":"Procurar {{type}}","editAddon":"Editar","deleteAddon":"Apagar","confirmDelete":"Tem a certeza que quer apagar {{name}}?","confirmationText":"Tem altera????es n??o guardadas no {{name}}. Se fechar esta janela ir?? perder essas altera????es.","enabled":"{{name}} foi ativo.","disabled":"{{name}} foi desativado.","couldNotEnable":"{{name}} n??o foi poss??vel ser ativado.","couldNotDisable":"{{name}} n??o pode ser desativado.","couldNotStart":"{{name}} n??o pode ser iniciado.","couldNotStop":"{{name}} n??o pode ser par??do.","settingsError":"N??o foi poss??vel abrir as configura????es para {{name}}","methodError":"{{method}} n??o pode ser retirado.","unknownAuthor":"Autor Desconhecido","noDescription":"Descri????o n??o fornecida.","alreadyExists":"J?? existe um {{type}} com o nome {{name}}","alreadWatching":"J?? assiste as extens??es.","metaError":"META n??o p??de ser analisado.","missingNameData":"Em falta dados do nome de META.","metaNotFound":"META n??o encontrada.","compileError":"N??o foi poss??vel compilar.","wasUnloaded":"{{name}} foi descarregado.","blankSlateHeader":"N??o tem nenhum {{type}}!","blankSlateMessage":"Pega um pouco deste [this website]({{link}}) e adiciona eles ?? tua pasta {{type}}."},"CustomCSS":{"confirmationText":"Tem altera????es n??o guardadas no CSS Personalizado. Se fechar esta janela ir?? perder essas altera????es.","update":"Atualizar","save":"Guardar","openNative":"Abrir o Editor de Sistema","openDetached":"Separar Janela","settings":"Defini????es de Editor","editorTitle":"Editor de CSS Personalizado"},"Emotes":{"loading":"Carregar emotes em segundo plano n??o carregam.","loaded":"Todos os emotes foram carregados com sucesso.","clearEmotes":"Limpar dados de Emotes","favoriteAction":"Favorito!","downloadFailed":"Transf??rencia falhou","failureMessage":"BetterDiscord falhou a transf??rencia de emotes, por favor verifique a sua conex??o ?? Internet e ?? Firewall."},"PublicServers":{"button":"p??blico","join":"Entrar","joining":"Entrando","joined":"Entrou","loading":"A Carregar","loadMore":"Carregar Mais","notConnected":"N??o Conectado","connectionRequired":"Tem que est??r conectado a sua conta para se entrar nos servidores.","connectionError":"Erro de conex??o","connectionErrorMessage":"Houve um error ao tentar conectar com os DiscordServers.com, ?? poss??vel que o website/api esteja em baixo. Por favor tente mais tarde.","pagination":"P??gina {{page}} de {{count}}","search":"Procurar","connect":"Conectar","reconnect":"Reconectar","categories":"Categorias","keywords":"Palavras-Chave","connection":"Conectado com: {{username}}#{{discriminator}}","results":"Mostrar {{start}}-{{end}} do {{total}} resultados na {{category}}","query":"para {{query}}"},"Modals":{"confirmAction":"Tem a certeza?","okay":"Okay","done":"Feito","cancel":"Cancelar","nevermind":"Deixa est??r","close":"Fechar","name":"Nome","message":"Mensagem","error":"Erro","addonErrors":"Erro de extens??o","restartRequired":"Necess??rio Reniciar","restartNow":"Reniciar Agora","restartLater":"Reniciar Mais Tarde","additionalInfo":"Informa????o Adicional","restartPrompt":"Para ter efeito, o Discord precisa ser reiniciado. Deseja reiniciar agora?"},"ReactDevTools":{"notFound":"Extens??o n??o encontrada","notFoundDetails":"N??o foi possivel achar a extens??o Ferramenta Desenvolvedor React no seu computador. Por favor instale a extens??o no seu Chrome local."},"Sorting":{"sortBy":"Ordenar por","order":"Ordenar","ascending":"Ascendente","descending":"Descendente"},"WindowPrefs":{"enabledInfo":"Esta op????o requer um tema transparente para funcionar corretamente. No Windows, isso pode interromper o ajuste e a maximiza????o do aero.\\n\\nPara ter efeito, o Discord precisa ser reiniciado. Quer reiniciar agora?","disabledInfo":"Para ter efeito, o Discord precisa ser reiniciado. Quer reiniciar agora?"}}');

/***/ }),

/***/ "../assets/locales/ro.json":
/*!*********************************!*\
  !*** ../assets/locales/ro.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"plugin-uri","themes":"tem??","customcss":"CSS personalizat"},"Collections":{"settings":{"name":"set??ri","general":{"name":"general","emotes":{"name":"Sistemul de emote-uri","note":"Activeaz?? sistemul de emote-uri din cadrul BD"},"publicServers":{"name":"servere publice","note":"Afi??eaz?? butonul de servere publice"},"voiceDisconnect":{"name":"Deconectare de la voce","note":"Deconecteaz??-te de la un canal de voce c??nd inchizi Discord-ul"},"showToasts":{"name":"Arat?? mesajele de sistem","note":"Afi??eaz?? notific??ri pentru informa??iile importante"},"mediaKeys":{"name":"Dezactiveaz?? tastele Media","note":"Previn-o Discord din a fura tastele media dup?? redarea unui videoclip."}},"window":{"removeMinimumSize":{"name":"Elimin?? m??rimea minim??","note":"Elimina marimea minima de 940x500 a ferestrei"},"name":"Preferinte ??n privin??a m??rimii ferestrei","transparency":{"name":"Activeaz?? Transparen??a","note":"F?? ca fereastra principal?? s?? fie transparent?? (necesit?? repornire)"},"frame":{"name":"Cadrul ferestrei","note":"Adaug?? cadrul sistemului de operare ??n fereastra principal??"}},"addons":{"name":"Manager de ad??ugiri","addonErrors":{"name":"Arat?? erorile ad??ugirilor","note":"Afi??eaz?? un modal cu erorile plugin-urilor/temelor"},"editAction":{"name":"Modific?? ac??iunea","note":"Unde apar plugin-urile si temele atunci c??nd sunt editate","options":{"detached":"Fereastr?? deta??abil??","system":"Editor de sistem"}}},"customcss":{"name":"CSS personalizat","customcss":{"name":"CSS personalizat","note":"Activeaz?? tab-ul de CSS personalizat"},"liveUpdate":{"name":"Actualiz??ri live","note":"Actualizeaz?? CSS-ul in timp ce scrii"},"startDetached":{"name":"Porne??te intr-o alt?? fereastr??","note":"Click-ul pe tab-ul de CSS personalizat va deschide editor-ul intr-o fereastra separat??"},"nativeOpen":{"name":"Deschide ??n editor-ul nativ","note":"Click-ul pe fereastra de CSS personalizat va deschide editorul nativ al calculatorului"},"openAction":{"name":"Loca??ia editorului","note":"Unde ar trebui s?? se deschide CSS-ul personalizat","options":{"settings":"Meniu de set??ri","detached":"Fereastr?? deta??abil??","system":"Editor de sistem"}}},"developer":{"name":"Set??ri de dezvoltator","debuggerHotkey":{"name":"Scurt??tur?? pentru Debugger","note":"Activeaz?? deschiderea debugger-ului la apasarea tastei F8"},"reactDevTools":{"name":"React Developer Tools","note":"Instaleaz?? React Developer Tools in Discord"},"inspectElement":{"name":"Scurt??tur?? pentru Inspect Element","note":"Activeaz?? scurt??tura pentru Inspect Element (CTRL + SHIFT + C) ce se g??se??te in cele mai multe browsere"},"devToolsWarning":{"name":"Dezactiveaz?? avertismentele","note":"Opreste Discord-ul din a afi??a mesajul \\"Stai pu??in!\\""},"debugLogs":{"name":"Debug Logs","note":"Transfer?? tot din consol?? in fi??ierul debug.log din folderul BetterDiscord"}}},"emotes":{"name":"Emoji-uri","general":{"name":"general","download":{"name":"Descarc?? emoji-urile","note":"Descarc?? emoji-urile oric??nd nu mai sunt actualizate la zi"},"emoteMenu":{"name":"Meniu emoji","note":"Arat?? emote-urile Twitch/Favorite ??n meniu"},"hideEmojiMenu":{"name":"Ascunde meniul de emoji-uri","note":"Ascunde meniul de emoji-uri al Discord-ului atunci c??nd folosi??i meniul de emote-uri"},"autoCaps":{"name":"Scriere cu majuscul?? a emote-urilor","note":"Scrie in mod automat cu majuscul?? comenzile pentru emote-uri"},"modifiers":{"name":"Arat?? modific??rile emote-urilor","note":"Activeaz?? mod-urile pentru emote-uri (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animeaz?? la atingere","note":"Animeaz?? emote-urile doar c??nd treci cu cursorul peste ele"}},"categories":{"name":"Categorii","twitchglobal":{"name":"Twitch Globals","note":"Arat?? emote-urile globale Twitch"},"twitchsubscriber":{"name":"Abon??ri Twitch","note":"Arat?? emote-urile"},"frankerfacez":{"name":"FrankerFaceZ","note":"Arat?? emote-urile de la FFZ"},"bttv":{"name":"BetterTTV","note":"Arat?? emote-urile de la BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} de {{author}}","byline":"de {{author}}","openFolder":"Deschide fi??ierul {{type}}","reload":"Re??mprospateaz??","addonSettings":"Set??ri","website":"Site Web","source":"Surs??","invite":"Sus??ine Server-ul","donate":"Doneaz??","patreon":"Patreon","name":"Nume","author":"Autor","version":"Versiune","added":"Data ad??ug??rii","modified":"Data modific??rii","search":"Caut?? {{type}}","editAddon":"Modific??","deleteAddon":"??terge","confirmDelete":"E??ti sigur c?? vrei s?? ??tergi {{name}} ?","confirmationText":"Ai schimb??ri nesalvate la {{name}}. ??nchiderea acestei ferestre v-a duce la pierderea tuturor modific??rilor.","enabled":"{{name}} a fost activat.","disabled":"{{name}} a fost dezactivat.","couldNotEnable":"{{name}} nu a putut fi activat.","couldNotDisable":"{{name}} nu a putut fi dezactivat.","couldNotStart":"{{name}} nu a putut porni.","couldNotStop":"{{name}} nu a putut fi oprit.","settingsError":"Nu s-au putut deschide set??rile pentru {{name}}","methodError":"{{method}} nu a putut fi executat.","unknownAuthor":"Autor necunoscut","noDescription":"F??r?? descriere.","alreadyExists":"Deja exist?? un {{type}} cu numele {{name}}","alreadWatching":"Deja te uiti la addon-uri.","metaError":"META nu a putut fi analizat.","missingNameData":"META nu are un nume.","metaNotFound":"META nu a putut fi g??sit.","compileError":"Nu s-a putut inc??rca.","wasUnloaded":"{{name}} a fost dezactivat.","blankSlateHeader":"Nu ai nici un {{type}}!","blankSlateMessage":"Descarc?? c??teva din [acest website]({{link}}) ??i adaug??-le in folder-ul t??u {{type}}."},"CustomCSS":{"confirmationText":"Ai modific??ri nesalvate in CSS-ul personalizat. ??nchiderea acestei ferestre va duce la anularea schimb??rilor.","update":"Actualizare","save":"Salveaz??","openNative":"Deschide ??n editorul de sistem","openDetached":"Deta??eaz?? fereastra","settings":"Set??rile editor-ului","editorTitle":"Editor de CSS personalizat"},"Emotes":{"loading":"Emote-urile care se incarc?? pe fundal nu se re??ncarc??.","loaded":"Toate emote-urile s-au ??nc??rcat cu succes.","clearEmotes":"Cur?????? datele legate de emote-uri","favoriteAction":"Favorite!","downloadFailed":"Desc??rcarea a e??uat","failureMessage":"BetterDiscord nu a putut ??nc??rca emote-urile, te rug??m s?? verifici conexiunea la internet si firewall-ul."},"PublicServers":{"button":"public","join":"Al??tur??-te","joining":"??n curs de al??turare","joined":"Al??turat","loading":"Se ??ncarc??","loadMore":"??ncarc?? mai multe","notConnected":"Deconectat","connectionRequired":"Trebuie s?? v?? conecta??i pentru a v?? al??tura la servere.","connectionError":"Eroare de conexiune","connectionErrorMessage":"A ap??rut o eroare ??n conectarea la DiscordServers.com, este posibil ca website-ul/API-ul s?? fie offline. V?? rug??m s?? ??ncerca??ti mai t??rziu.","pagination":"Pagina {{page}} din {{count}}","search":"Caut??","connect":"Conecteaz??-te","reconnect":"Reconecteaz??-te","categories":"Categorii","keywords":"Cuvinte cheie","connection":"Conectat ca: {{username}}#{{discriminator}}","results":"Ar??t??nd {{start}}-{{end}} din {{total}} rezultate in {{category}}","query":"pentru {{query}}"},"Modals":{"confirmAction":"E??ti sigur ?","okay":"Okay","done":"Gata","cancel":"Anuleaz??","nevermind":"Nu conteaz??","close":"??nchide","name":"Nume","message":"Mesaj","error":"Eroare","addonErrors":"Eroare a","restartRequired":"Repornirea este necesar??","restartNow":"Reporne??te acum","restartLater":"Re??ncarc?? mai t??rziu","additionalInfo":"Informa??ii adi??ionale","restartPrompt":"Pentru a fi aplicate, Discord trebuie s?? reporneasc??. Dore??ti s?? il reporne??ti acuma ?"},"ReactDevTools":{"notFound":"Extensia nu a putut fi g??sit??","notFoundDetails":"Nu s-au putut g??si extensia React Developer Tools in calculatorul t??u. Te rug??m s?? instalezi extensia ??n cadrul Chrome."},"Sorting":{"sortBy":"Sorteaz?? Dup??","order":"Ordoneaz??","ascending":"Cresc??tor","descending":"Descresc??tor"},"WindowPrefs":{"enabledInfo":"Aceast?? op??iune necesit?? o tem?? transparent?? pentru a func??iona normal. \\nPe Windows ar putea putea s?? strice maximizarea.\\nPentru ca aceste efecte s?? intre ??n vigoare, Discord trebuie s?? reporneasc??. Dore??ti s?? il reporne??ti acum ?","disabledInfo":"Pentru ca aceste set??ri s?? intre ??n efect, Discord trebuie s?? reporneasc??. Dore??ti s?? ??l reporne??ti acum ?"}}');

/***/ }),

/***/ "../assets/locales/ru.json":
/*!*********************************!*\
  !*** ../assets/locales/ru.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"??????????????","themes":"????????","customcss":"?????????????? CSS","updates":"????????????????????"},"Collections":{"settings":{"name":"??????????????????","general":{"name":"????????????????","emotes":{"name":"?????????????? ??????????????????","note":"???????????????? ?????????????? ?????????????????? BD"},"publicServers":{"name":"?????????????????? ??????????????","note":"???????????????????? ???????????? ?????????????????? ????????????????"},"voiceDisconnect":{"name":"???????????????????? ???????????????????? ????????","note":"?????????????????? ???? ???????????????????? ????????, ?????????? Discord ????????????"},"showToasts":{"name":"???????????????????? ??????????????????????","note":"???????????????????? ?????????????????? ?????????????????????? ?? ???????????? ??????????????????????"},"mediaKeys":{"name":"?????????????????? ??????????-????????????","note":"?????????????????????????? ???????????????? ???????????????????????????? ???????????? Discord\'???? ?????????? ?????????????????????????????? ??????????."}},"window":{"removeMinimumSize":{"name":"?????????????? ?????????????????????? ??????????????","note":"?????????????? ?????????????????????? ???????????? ???????? Discord\'?? 940x500"},"name":"?????????????????? ????????","transparency":{"name":"???????????????? ????????????????????????","note":"???????????? ???????????????? ???????? ???????????????????? (?????????? ????????????????????????)"},"frame":{"name":"?????????? ????????","note":"?????????????????? ???????????????????? ?????????? ???????? ?????????????? ?? ?????????????????? ????????"}},"addons":{"name":"???????????????? ????????????????????","addonErrors":{"name":"???????????????????? ???????????? ????????????????????","note":"???????????????? ?????????????????? ???????? ?? ???????????????? ??????????????/????????"},"editAction":{"name":"???????????????? ????????????????????????????","note":"???????????????????? ?????? ????????????????????????????, ?????? ?????????????? ?????? ????????","options":{"detached":"?????????????????? ????????","system":"?????????????????? ????????????????"}}},"customcss":{"name":"?????????????? CSS","customcss":{"name":"?????????????? CSS","note":"???????????????? ???????????? ???????????????? CSS"},"liveUpdate":{"name":"???????????????????? ?? ???????????? ??????????","note":"?????????????????? ?????? CSS, ?????????? ???? ????????????"},"startDetached":{"name":"?????????????? ????????????????","note":"?????? ?????????????? ???? ?????????????? ?????????????? CSS ???????????????? ?????????????????????? ?? ?????????????????? ????????"},"nativeOpen":{"name":"?????????????? ???? ???????????????????? ??????????????????","note":"?????????????? ???? ?????????????? ?????????????? CSS ?????????????????? ?????? ?????????????? CSS ?? ?????????? ???????????????????? ??????????????????"},"openAction":{"name":"?????????????????? ??????????????????","note":"?????? ?????? ?????????????? CSS ???????????? ???????? ???????????? ???? ??????????????????","options":{"settings":"?????????????????? ????????","detached":"?????????????????? ????????","system":"?????????????????? ????????????????"}}},"developer":{"name":"?????????????????? ????????????????????????","debuggerHotkey":{"name":"?????????????? ???????????? ??????????????????","note":"???????????????????? ?????????????? ?????? ?????????????? F8 ?????? ???????????????? ???????? ????????????????????????"},"reactDevTools":{"name":"?????????????????????? React ????????????????????????","note":"???????????????? ???????? ?????????????????? ?????????????????? React Developer Tools ?? Discord"},"inspectElement":{"name":"?????????????? ???????????? ???????????????????? ??????????????????","note":"???????????????? ?????????????????? ???????????????????? ???????????? ???????????????????? ?????????????????? (ctrl + shift + c), ?????? ?? ?????????????????????? ??????????????????"},"devToolsWarning":{"name":"???????????? ???????????????????????????? ?? ??????????????","note":"?????????????????????????? ???????????????? ?????????????????? \\"Hold Up!\\""},"debugLogs":{"name":"???????????????????? ????????????","note":"???????????????????? ???????? ?????????? ???? ?????????????? ?? ???????? debug.log ?? ?????????? BetterDiscord"},"devTools":{"name":"???????? ????????????????????????","note":"???????????????? ?????????????????????? ?????????????? ???????? ???????????????????????? ?????? ?????????????? ctrl+shift+i"}},"editor":{"name":"???????????????? ????????????????","lineNumbers":{"name":"?????????? ??????????","note":"???????????????? ???????????????????? ?????????? ?? ?????????????? ??????????????????"},"fontSize":{"name":"???????????? ????????????","note":"???????????? ???????????? (?? ????????????????) ?? ??????????????????"},"minimap":{"name":"???????? ??????????","note":"???????????????? ?????????? ???????? ?? ???????? ?????????? ?? ?????????????? ??????????????????"},"hover":{"name":"???????????????????? ??????????????????","note":"???????????????? ?????????? ???????????????????? ?????????????????? ?????? ?????????????????? ???????? ?????? ?????????????????? ?? ??????????????????????????????"},"quickSuggestions":{"name":"??????????????????????","note":"???????????????? ?????????????????? ????????-???????????????????? ?????????????????????? ?????? ????????????"},"renderWhitespace":{"name":"???????????????????? ??????????????","note":"?????????? ???????????? ???????????? ???????? ?????????????? ????????????????????","options":{"all":"????????????","none":"??????????????","selection":"??????????"}}}},"emotes":{"name":"????????????????","general":{"name":"????????????????","download":{"name":"?????????????? ????????????????","note":"?????????????????? ????????????????, ?????????? ?????? ????????????????????"},"emoteMenu":{"name":"???????? ??????????????????","note":"???????????????? Twitch/?????????????????? ?? ???????? ??????????????????"},"hideEmojiMenu":{"name":"???????????????? ???????????? ????????????","note":"???????????????? ???????? ???????????? Discord, ?????????? ???????????????????????? ????????????????"},"autoCaps":{"name":"?????????????????????????????????? ??????????????????","note":"???????????????????????????? ???????????? ???????????????? ???????? ???????????????????? ?? ???????????????? ??????????????????"},"modifiers":{"name":"???????????????? ???????????????????????? ??????????????????","note":"???????????????? ???????????????????????? ?????????????????? (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"?????????????????????? ?????? ??????????????????","note":"?????????????????????? ???????????? ???????????????????????? ?????????????????? ?????? ??????????????????"}},"categories":{"name":"??????????????????","twitchglobal":{"name":"???????????????????? Twitch\'a","note":"???????????????? ???????????????????? ???????????????? Twitch\'a"},"twitchsubscriber":{"name":"???????????????? Twitch","note":"???????????????????? ???????????????? ?????????????????????? Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"???????????????? ???????????????? ???? FFZ"},"bttv":{"name":"BetterTTV","note":"???????????????? ???????????????? ???? BTTV"}}}},"Addons":{"title":"{{name}} v{{version}} ???? {{author}}","byline":"???? {{author}}","openFolder":"?????????????? ?????????? {{type}}","reload":"??????????????????????????","addonSettings":"??????????????????","website":"????????","source":"????????????????","invite":"???????????? ??????????????????","donate":"??????????","patreon":"Patreon","name":"??????","author":"??????????","version":"????????????","added":"???????? ????????????????????","modified":"???????? ??????????????????","search":"???????????? {{type}}","editAddon":"??????????????????????????","deleteAddon":"??????????????","confirmDelete":"???? ??????????????, ?????? ???????????? ?????????????? {{name}}?","confirmationText":"?? ?????? ???????? ?????????????????????????? ?????????????????? ?? {{name}}. ?????? ???????????????? ?????????? ???????? ?????? ?????????????????? ?????????? ????????????????.","enabled":"{{name}} ??????????????.","disabled":"{{name}} ????????????????.","couldNotEnable":"{{name}} ???? ?????????? ???????? ??????????????.","couldNotDisable":"{{name}} ???? ?????????? ???????? ????????????????.","couldNotStart":"{{name}} ???? ?????????? ???????? ??????????????.","couldNotStop":"{{name}} ???? ?????????? ???????? ????????????????????.","settingsError":"???? ?????????????? ?????????????? ?????????????????? ?????? {{name}}","methodError":"{{method}} ???? ?????????? ???????? ????????????.","unknownAuthor":"?????????????????????? ??????????","noDescription":"???????? ????????????????.","alreadyExists":"{{type}} ?????? ???????????????????? ?? ???????????? {{name}}","alreadWatching":"?????? ?????????? ???? ????????????????????????.","metaError":"???? ?????????????? ???????????????????????????????? ????????????????????.","missingNameData":"?? ???????????????????? ?????????????????????? ???????????? ???? ??????????.","metaNotFound":"???????????????????? ???? ??????????????.","compileError":"???? ?????????????? ????????????????????????????. ???????????????????? ?? ?????????????? ?????? ???????????????????????????? ????????????????????.","wasUnloaded":"{{name}} ?????? ????????????????.","blankSlateHeader":"?? ?????? ???????? {{type}}","blankSlateMessage":"???????????????? ??????-???? ?? [?????????? ??????????]({{link}}) ?? ???????????????? ???? ?? ???????? ?????????? {{type}}.","isEnabled":"????????????????","wasLoaded":"{{name}} v{{version}} ?????? ????????????????."},"CustomCSS":{"confirmationText":"?? ?????? ???????? ???? ?????????????????????? ?????????????????? ?? ?????????????? CSS.  ?????? ???????????????? ?????????? ???????? ?????? ?????????????????? ?????????? ????????????????.","update":"????????????????","save":"??????????????????","openNative":"?????????????? ?? ?????????????????? ??????????????????","openDetached":"?????????????????? ????????","settings":"?????????????????? ??????????????????","editorTitle":"???????????????? ???????????????? CSS"},"Emotes":{"loading":"???????????????? ?????????????????? ?? ?????????????? ????????????","loaded":"?????? ???????????????? ?????????????? ??????????????????","clearEmotes":"?????????????????? ???????????? ?????????????????? ","favoriteAction":"??????????????????!","downloadFailed":"???????????????? ???? ??????????????","failureMessage":"BetterDiscord\'?? ???? ?????????????? ?????????????????? ????????????????, ?????????????????? ?????????????????????? ?? ?????????????????? ?? ????????????????????."},"PublicServers":{"button":"?????????????????? ??????????????","join":"??????????????????????????","joining":"??????????????????????????","joined":"??????????????????????????","loading":"????????????????","loadMore":"?????????????????? ????????????","notConnected":"???? ??????????????????","connectionRequired":"???? ???????????? ???????????????????? ???????? ?????????????? ????????????, ?????????? ???????????????????????????? ?? ????????????????.","connectionError":"???????????? ????????????????????","connectionErrorMessage":"?????????????????? ???????????? ?????? ?????????????????????? ?? DiscordServers.com, ????????????????, ???? ????????/api ???? ??????????.  ????????????????????, ?????????????????? ?????????????? ??????????.","pagination":"???????????????? {{page}} ?? {{count}}","search":"??????????","connect":"????????????????????","reconnect":"????????????????????????????????","categories":"??????????????????","keywords":"???????????????? ??????????","connection":"?????????????????? ??????: {{username}}#{{discriminator}}","results":"???????????????? {{start}}-{{end}} ???? {{total}} ?????????????????????? ?? {{category}}","query":"?????? {{query}}"},"Modals":{"confirmAction":"???? ?????????????","okay":"????","done":"????????????","cancel":"????????????","nevermind":"??????????","close":"??????????????","name":"??????","message":"??????????????????","error":"????????????","addonErrors":"???????????? ????????????????????","restartRequired":"?????????????????? ????????????????????????","restartNow":"?????????????????????????? ????????????","restartLater":"?????????????????????????? ??????????","additionalInfo":"???????????????????????????? ????????????????????","restartPrompt":"?????????? ?????????????????? ???????????????? ?? ????????, ???????????????????? ?????????????????????????? Discord. ?????????????????????????? ?????????????"},"ReactDevTools":{"notFound":"???????????????????? ???? ??????????????","notFoundDetails":"???? ?????????????? ?????????? ???????????????????? React Developer Tools ???? ?????????? ????. ????????????????????, ???????????????????? ???????????????????? ?? ?????????????????? ?????????????????? Chrome."},"Sorting":{"sortBy":"?????????????????????? ????","order":"??????????????","ascending":"???? ??????????????????????","descending":"???? ????????????????"},"WindowPrefs":{"enabledInfo":"?????? ???????????????????? ???????????? ???????? ?????????? ?????????????????? ???????????????????? ????????.  ?? Windows ?????? ?????????? ???????????????? ???????? aero snapping ?? ????????????????????????.\\n\\n\\n\\n?????????? ?????????????????? ???????????????? ?? ????????, ???????????????????? ?????????????????????????? Discord.  ???? ???????????? ?????????????????????????? ?????????????","disabledInfo":"?????????? ?????????????????? ???????????????? ?? ????????, ???????????????????? ?????????????????????????? Discord.  ???? ???????????? ?????????????????????????? ?????????????"},"Notices":{"moreInfo":"???????????????????????????? ????????????????????"},"Updater":{"updateFailed":"???????????? ????????????????????","updateFailedMessage":"???? ?????????????? ???????????????? BetterDiscord. ???????????????????? ???????????????? ?????????????????? ???????????? ???????????????????? ?? ???????????? ?????????? (https://betterdiscord.app/) ?? ???????????????????????????? ??????????????????.","updateSuccessful":"???????????????????? ??????????????!","updateAvailable":"BetterDiscord ?????????? ???????????????????? (v{{version}})","addonUpdatesAvailable":"BetterDiscord ?????????? ???????????????????? ?????? {{count}} ?????????? {{type}}!","addonUpdated":"{{name}} ?????? ???????????????? ???? ???????????? {{version}}","checking":"?????????????????? ????????????????????!","finishedChecking":"???????????????? ???????????????????? ??????????????????!","checkForUpdates":"?????????????????? ????????????????????!","updateAll":"???????????????? ??????!","noUpdatesAvailable":"???????? ?????????????????? ????????????????????.","versionAvailable":"???????????? {{version}} ????????????????!","upToDateBlankslate":"?????? {{type}} ??????????????????.","updateButton":"????????????????!"}}');

/***/ }),

/***/ "../assets/locales/sk.json":
/*!*********************************!*\
  !*** ../assets/locales/sk.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Pluginy","themes":"T??my","customcss":"Custom CSS"},"Collections":{"settings":{"name":"Nastavenia","general":{"name":"Z??kladn??","emotes":{"name":"Emote Syst??m","note":"Povoli?? BD emote syst??m"},"publicServers":{"name":"Verejn?? servery","note":"Zobrazi?? tla??idlo verejn??ch serverov"},"voiceDisconnect":{"name":"Odpojenie hovoru","note":"Odpoji?? z hovoru pri vypnut?? Discordu"},"showToasts":{"name":"Zobrazi?? toasty","note":"Zobrazi?? notifik??ciu pre d??le??it?? info"},"mediaKeys":{"name":"Zak??za?? M??dia tla??idl??","note":"Zabr??ni Discordu prevzia?? kontrolu nad m??dia tla??idlami po prehrat?? videa."}},"window":{"removeMinimumSize":{"name":"Zru??i?? minim??lnu velkos??","note":"Zru???? minim??lnu ve??kos?? Discord okna 940x500"},"name":"Vlastnosti Okna","transparency":{"name":"Povoli?? prieh??adnos??","note":"Povol??, aby bolo hlavn?? okno prieh??adn?? (potrebn?? re??tart)"},"frame":{"name":"R??m okna","note":"Prid?? klasick?? OS r??m pre hlavn?? okno"}},"addons":{"name":"Mana????r doplnkov","addonErrors":{"name":"Zobrazi?? chyby doplnkov","note":"Zobraz?? panel s chybou pluginu alebo t??my"},"editAction":{"name":"??prava akcie","note":"Kde sa pluginy a t??my zobrazia pri editovan??","options":{"detached":"Oddelen?? okno","system":"Syst??mov?? editor"}}},"customcss":{"name":"Custom CSS","customcss":{"name":"Custom CSS","note":"Aktivuje kartu \\"Custom CSS\\""},"liveUpdate":{"name":"??iv?? update","note":"Aktualizuje css pri zmene"},"startDetached":{"name":"Spusti?? oddelen??","note":"Kliknutie na kartu Custom CSS ju otvori v oddelenom okne"},"nativeOpen":{"name":"Otvori?? v nat??vnom editore","note":"Kliknutie na kartu Custom CSS ju otvori v nat??vnom editore"},"openAction":{"name":"Cesta editora","note":"Predvolen?? sp??sob otvorenia Custom CSS","options":{"settings":"Menu nastaven??","detached":"Oddelen?? okno","system":"Syst??mov?? editor"}}},"developer":{"name":"V??vojarske nastavenia","debuggerHotkey":{"name":"Kl??vesov?? skratka Debuggera","note":"Povol?? spustenie debuggera pri stla??en?? F8"},"reactDevTools":{"name":"React Developer Tools","note":"Prid?? in??tal??ciu React Developer Tools do Discordu"},"inspectElement":{"name":"Kl??vesov?? skratka Inspect Element","note":"Povol?? kl??vesov?? skratku Inspect Element (ctrl + shift + c) ako pre be??n?? prehliada??e"},"devToolsWarning":{"name":"Vypn???? DevTools Upozornenia","note":"Vypne \\"Hold Up!\\" upozornenie od Discordu v konzole"},"debugLogs":{"name":"V??pis ladenia","note":"Zap????e v??etko z konzole do s??boru debug.log v BetterDiscord zlo??ke"}}},"emotes":{"name":"Emoty","general":{"name":"V??eobecn??","download":{"name":"Stiahnu?? Emoty","note":"Stiahnu?? Emoty ak s?? zastaral??"},"emoteMenu":{"name":"Emote Menu","note":"Zobrazi?? Twtich/Ob????ben?? emoty v emote menu"},"hideEmojiMenu":{"name":"Skry?? Emoji Menu","note":"Skryje Discord Emoji menu pri pou????van?? emote menu"},"autoCaps":{"name":"Automatick?? kapitaliz??cia Emote","note":"Automaticky kapitalizuje emote commandy"},"modifiers":{"name":"Zobrazi?? Emote Modifik??tory","note":"Povoli?? emote modifik??tory (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animova?? pri umiestnen?? kurzora","note":"Animova?? emote modifik??tory iba pri umiestnen?? kurzora"}},"categories":{"name":"Kateg??rie","twitchglobal":{"name":"Twtich glob??lne","note":"Zobrazi?? glob??lne Twitch emoty"},"twitchsubscriber":{"name":"Twitch predplatitelia","note":"Zobrazi?? predplatite??sk?? Twitch emoty"},"frankerfacez":{"name":"FrankerFaceZ","note":"Zobrazi?? FFZ emoty"},"bttv":{"name":"BetterTTV","note":"Zobrazi?? BTTV emoty"}}}},"Addons":{"title":"{{name}} v{{version}} od {{author}}","byline":"od {{author}}","openFolder":"Otvori?? {{type}} Zlo??ku","reload":"Znova na????ta??","addonSettings":"Nastavenia","website":"Str??nka","source":"Zdroj","invite":"Server podpory","donate":"Prispie??","patreon":"Patreon","name":"Meno","author":"Autor","version":"Verzia","added":"D??tum pridania","modified":"D??tum zmeny","search":"H??ada?? {{type}}","editAddon":"Upravi??","deleteAddon":"Zmaza??","confirmDelete":"Ste si ist??, ??e chcete zmaza?? {{name}}?","confirmationText":"M??te neulo??en?? zmeny pre {{name}}. Zatvoren??m tohto okna strat??te v??etky zmeny.","enabled":"{{name}} bol aktivovan??.","disabled":"{{name}} bol deaktivovan??.","couldNotEnable":"{{name}} nebolo mo??n?? aktivova??.","couldNotDisable":"{{name}} nebolo mo??n?? deaktivova??.","couldNotStart":"{{name}} nebolo mo??n?? spusti??.","couldNotStop":"{{name}} nebolo mo??n?? zastavi??.","settingsError":"Nie je mo??n?? otvori?? nastavenia pre {{name}}","methodError":"{{method}} nemohla by?? vykonan??.","unknownAuthor":"Nezn??my Autor","noDescription":"Bez popisu.","alreadyExists":"{{type}} s menom {{name}} u?? existuje","alreadWatching":"Doplnky sa u?? sleduj??.","metaError":"META sa nepodarila na????ta??.","missingNameData":"META ch??baj??ce d??ta n??zvu.","metaNotFound":"META nebola n??jedn??.","compileError":"Nepodarilo sa zostavi??.","wasUnloaded":"{{name}} bol odpojen??.","blankSlateHeader":"Nenach??dza sa ??iadny/??iadna {{type}}!","blankSlateMessage":"N??jdi nejak?? na [tejto str??nke]({{link}}) a pridaj ich do zlo??ky pre {{type}}."},"CustomCSS":{"confirmationText":"M??te neulo??en?? zmeny pre Custom CSS. Zatvoren??m tohto okna strat??te v??etky zmeny.","update":"Aktualizova??","save":"Ulo??i??","openNative":"Otvori?? v Syst??movom Editore","openDetached":"Oddeli?? Okno","settings":"Nastavenia Editora","editorTitle":"Custom CSS Editor"},"Emotes":{"loading":"Na????tavanie emotov v pozad??, nerefreshujte.","loaded":"V??etky emoty ??spe??ne na????tan??.","clearEmotes":"Vy??isti?? emote d??ta","favoriteAction":"Ulo??i??!","downloadFailed":"S??ahovanie Zlyhalo","failureMessage":"BetterDiscord nedok??zal na????ta?? emoty, pros??m skontrolujte internetov?? pripojenie a firewall."},"PublicServers":{"button":"verejn??","join":"Prida??","joining":"Prid??vanie","joined":"Pridan??","loading":"Na????tavanie","loadMore":"Na????ta?? Viac","notConnected":"Nepripojen??","connectionRequired":"Mus??te pripoji?? svoj ????et pre pripojenie sa na servery.","connectionError":"Chyba spojenia","connectionErrorMessage":"Pri prip??jan?? k serveru DiscordServers.com sa vyskytla chyba. Je mo??n??, ??e ich webov?? str??nky / rozhranie API nefunguje. Sk??ste nesk??r pros??m.","pagination":"Str??nka {{page}} z {{count}}","search":"H??ada??","connect":"Pripoji??","reconnect":"Znova pripoji??","categories":"Kateg??rie","keywords":"K??????ov?? slov??","connection":"Pripojen?? ako: {{username}}#{{discriminator}}","results":"Zobrazen??ch {{start}}-{{end}} z {{total}} v??sledkov v {{category}}","query":"pre {{query}}"},"Modals":{"confirmAction":"Ste si ist???","okay":"Ok","done":"Dokon??i??","cancel":"Zru??i??","nevermind":"Rad??ej nie","close":"Zavrie??","name":"Meno","message":"Spr??va","error":"Chyba","addonErrors":"Chyby Doplnkov","restartRequired":"Potrebn?? Re??tart","restartNow":"Re??tartova?? Teraz","restartLater":"Re??tartova?? Nesk??r","additionalInfo":"??al??ie Info","restartPrompt":"Pre aplik??ciu zmien je potrebn?? re??tartova?? Discord. Chcete re??tartova?? teraz?"},"ReactDevTools":{"notFound":"Roz????renie sa nena??lo","notFoundDetails":"Nebolo mo??n?? n??js?? roz????renie React Developer Tools na va??om PC. Pros??m nain??talujte roz????renie vo va??om prehliada??i Chrome."},"Sorting":{"sortBy":"Triedi?? pod??a","order":"Poradie","ascending":"Vzostupne","descending":"Zostupne"},"WindowPrefs":{"enabledInfo":"T??to mo??nos?? si vy??aduje prieh??adn?? t??mu, aby spr??vne fungovala. V syst??me Windows to m????e sp??sobi?? preru??enie a maximaliz??ciu v????ho aero.\\n\\nNa to, aby sa prejavila ????innos??, je potrebn?? re??tartova?? Discord. Chcete re??tartova?? teraz?","disabledInfo":"Pre aplik??ciu zmien je potrebn?? re??tartova?? Discord. Chcete re??tartova?? teraz?"}}');

/***/ }),

/***/ "../assets/locales/sv-se.json":
/*!************************************!*\
  !*** ../assets/locales/sv-se.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Till??gg","themes":"Teman","customcss":"Egen CSS"},"Collections":{"settings":{"name":"Inst??llningar","general":{"name":"Generellt","emotes":{"name":"Emotessystem","note":"Aktiverar BD\'s emotessystem"},"publicServers":{"name":"Publika Servrar","note":"Visa knappen f??r publika servrar"},"voiceDisconnect":{"name":"L??mna R??st","note":"L??mna r??stsamtal n??r Discord st??ngs ner"},"showToasts":{"name":"Visa Toasts","note":"Visar en liten notification f??r viktig information"}},"addons":{"name":"Till??ggshanterare","addonErrors":{"name":"Visa till??ggsfel","note":"Visar en modal med till??gg- och temafel"}},"customcss":{"name":"Egen CSS","customcss":{"name":"Egen CSS","note":"Aktiverar \\"Egen CSS\\"-fliken"},"liveUpdate":{"name":"Uppdatera Direkt","note":"Uppdaterar css allteftersom du skriver"},"startDetached":{"name":"Starta Fr??nkopplad","note":"??ppnar CSS redigeraren i ett separat f??nster n??r \\"Egen CSS\\"-fliken klickas"},"nativeOpen":{"name":"??ppna I Standardredigerare","note":"??ppnar CSS filen i operativsystemets standardredigerare n??r \\"Egen CSS\\"-fliken klickas"}},"developer":{"name":"Utvecklarinst??llningar"},"window":{"name":"F??nsterinst??llningar","transparency":{"name":"Aktivera Genomskinlighet","note":"G??r att huvudf??nstret blir genomskinligt (kr??ver omstart)"},"frame":{"name":"F??nsterram","note":"L??gger till operativsystemets standard f??nsterram runt huvudf??nstret"}}},"emotes":{"name":"Emotes","general":{"name":"Generellt","download":{"name":"Ladda Ner Emotes","note":"Ladda ner emotes en g??ng i veckan f??r att h??lla sig uppdaterad"},"emoteMenu":{"name":"Emote Meny","note":"Visa Twitch/Favorit emotes i emote meny"},"hideEmojiMenu":{"name":"G??mmer Emoji Meny","note":"G??mmer Discord\'s emoji meny n??r emote meny ??r aktiverad"},"autoCaps":{"name":"Automatiskt Stor Bokstav I Emotes","note":"G??r automatiskt stor bokstav i emote kommandon"},"modifiers":{"name":"Visa Emote Modifierare","note":"Aktivera emote modifierare (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"Animera N??r Musen H??lls ??ver","note":"Animera endast emote midiferare n??r musen h??lls ??ver emoten"}},"categories":{"name":"Kategorier","bttv":{"name":"BetterTTV","note":"Visa emotes fr??n BTTV"}}}},"CustomCSS":{"confirmationText":"Du har osparade ??ndringar av egna CSS:en. Alla ??ndringar kommer f??rsvinna om du st??nger det h??r f??nstret","update":"Uppdatera","save":"Spara","openNative":"??ppna I Standardredigerare","openDetached":"Koppla Loss F??nster","settings":"Inst??llningar f??r redigerare","editorTitle":"Egen CSS Redigerare"},"Emotes":{"clearEmotes":"Rensa Emote Data","favoriteAction":"Favorit!"},"PublicServers":{"button":"Publik","join":"G?? med","joining":"G??r med","joined":"Gick med","loading":"Laddar","loadMore":"ladda mer","notConnected":"Ingen anslutning till DiscordServers.com!","search":"S??k","connect":"Anslut","reconnect":"??teranslut","categories":"Kategorier","connection":"Ansluten som: {{username}}#{{discriminator}}","results":"Visar {{start}}-{{end}} av {{total}} resultat i {{category}}","query":"f??r {{query}}"},"Modals":{"okay":"Okej","cancel":"Avbryt","name":"Namn","message":"Meddelande","error":"Fel","addonErrors":"Till??ggsfel"}}');

/***/ }),

/***/ "../assets/locales/th.json":
/*!*********************************!*\
  !*** ../assets/locales/th.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/tr.json":
/*!*********************************!*\
  !*** ../assets/locales/tr.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"Eklentiler","themes":"Temalar","customcss":"??zel CSS"},"Collections":{"settings":{"name":"Ayarlar","general":{"name":"Genel","emotes":{"name":"Emoji Sistemi","note":"BD\'nin emoji sistemini etkile??tirir"},"publicServers":{"name":"Herkese-a????k Sunucular","note":"Herkese-a????k Sunucu d????mesini g??ster"},"voiceDisconnect":{"name":"Ses Kanal??ndan Ayr??lma","note":"Discord\'u kapat??rken aktif ses kanal??ndan ayr??l??r"},"showToasts":{"name":"Bildirimleri G??ster","note":"??nemli bilgilendirmeler i??in k??????k bir bidirim g??sterir"},"mediaKeys":{"name":"Medya Tu??lar??n?? Deaktive Et","note":"Bir video oynatt??ktan sonra Discord\'un Multimedya tu??lar??n?? ele ge??irmesini engeller."}},"window":{"removeMinimumSize":{"name":"Minimum boyutu kald??r","note":"Discord\'un 940x500 boyut limitini kald??r??r"},"name":"Pencere Tercihleri","transparency":{"name":"??effafl?????? Etkinle??tir","note":"Ana pencerenin ??effaf olmas??na el verir (yeniden ba??latma gerekli)"},"frame":{"name":"Pencere ??er??evesi","note":"Yerel i??letim sistemi penceresini ana pencereye ekler"}},"addons":{"name":"Eklenti Y??neticisi","addonErrors":{"name":"Eklenti Hatalar??n?? G??ster","note":"Eklenti/tema hatalar??nda yaz?? baloncu??u g??sterir"},"editAction":{"name":"Eylemi d??zenle","note":"Eklenti ve temalar?? d??zenlerken ????kacaklar?? yer","options":{"detached":"Ba????ms??z Pencere","system":"Sistem D??zenleyici"}}},"customcss":{"name":"??zel CSS","customcss":{"name":"??zel CSS","note":"??zel CSS sekmesini aktifle??tirir"},"liveUpdate":{"name":"Canl?? G??ncelleme","note":"Yazd??kca CSS\'i g??nceller"},"startDetached":{"name":"Ba????ms??z Ba??lat","note":"??zel CSS sekme tu??una bas??nca ba????ms??z sekmede a??ar"},"nativeOpen":{"name":"Se??ili edit??r\'de a??","note":"??zel CSS sekme tu??una bas??nca se??ili yaz?? edit??r??n??zde a??ar"},"openAction":{"name":"Edit??r Yeri","note":"??zel CSS\'in varsay??lan a????lma yeri","options":{"settings":"Ayarlar Men??s??","detached":"Ba????ms??z Pencere","system":"Sistem Edit??r??"}}},"developer":{"name":"Geli??tirici (Developer) Ayarlar??","debuggerHotkey":{"name":"Hata ay??klay??c?? k??sayolu","note":"F8\'e bas??nca hata ay??klay??c??n??n a????lmas??n?? sa??lar"},"reactDevTools":{"name":"React Geli??tirici Ara??lar??","note":"Yerli React Geli??tirici ara??lar??n??z?? Discord\'a ekler"},"inspectElement":{"name":"????eyi Denetle K??sayolu","note":"??o??u taray??ca yayg??n olan (ctrl + shift + c) ????eyi Denetle k??sayolunu etkinle??tirir"},"devToolsWarning":{"name":"DevTools uyar??s??n?? kapat","note":"Discord\'un \\"Bekle!\\" mesaj??n?? yazmas??n?? engeller"},"debugLogs":{"name":"Hata Ay??klama ????kt??lar??","note":"Konsoldaki her??eyi BetterDiscord klas??r??ndeki debug.log dosyas??na kaydeder"}}},"emotes":{"name":"Emojiler","general":{"name":"Genel","download":{"name":"Emoji Indir","note":"Eski olduklar??nda emojileri indir"},"emoteMenu":{"name":"Emoji Men??s??","note":"Twitch/Favori emojileri emoji men??s??nde g??ster"},"hideEmojiMenu":{"name":"Emoji Men??s??n?? Gizle","note":"Emoji Men??s??n?? kullan??rken Discord\'??n emoji men??s??n?? gizler"},"autoCaps":{"name":"Emoji Kapitalizasyonu","note":"Otomatik olarak emoji komutlar??n?? kapitalize et"},"modifiers":{"name":"Emoji De??i??tiricilerini G??ster","note":"Emoji modlar??n?? etkinle??tir  (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"??zerindeyken Oynat","note":"Sadece fare emoji ??zerindeyken oynat"}},"categories":{"name":"Kategoriler","twitchglobal":{"name":"Twitch Globaller","note":"Twitch Global emojilerini g??ster"},"twitchsubscriber":{"name":"Twitch Aboneleri","note":"Twitch Abone emojilerini g??ster"},"frankerfacez":{"name":"FrankerFaceZ","note":"FFZ emojilerini g??ster"},"bttv":{"name":"BetterTTV","note":"BTTV emojilerini g??ster"}}}},"Addons":{"title":"{{author}} taraf??ndan {{name}} v{{version}}","byline":"{{author}} taraf??ndan","openFolder":"{{type}} Dosyas??n?? A??","reload":"Yeniden-Ba??lat","addonSettings":"Ayarlar","website":"Website","source":"Kaynak","invite":"Destek Sunucusu","donate":"Ba??????","patreon":"Patreon","name":"??sim","author":"Yap??mc??","version":"Versiyon","added":"Eklenim Tarihi","modified":"D??zenlenme Tarihi","search":"{{type}} ara","editAddon":"D??zenle","deleteAddon":"Sil","confirmDelete":"{{name}} eklentisini silmek istedi??inize emin misiniz?","confirmationText":"{{name}} eklentisinde kaydedilmemi?? de??i??iklikler var. Bu pencereyi kapatmak de??i??ikliklerin kaybolmas??na yol a??ar.","enabled":"{{name}} ba??lat??ld??.","disabled":"{{name}} kapat??ld??.","couldNotEnable":"{{name}} ba??lat??lamad??.","couldNotDisable":"{{name}} kapat??lamad??.","couldNotStart":"{{name}} ba??lat??lamad??.","couldNotStop":"{{name}} durdurulamad??.","settingsError":"{{name}} i??in ayarlar a????lamad??.","methodError":"{{method}} ??al????t??r??lamad??.","unknownAuthor":"Bilinmeyen Yap??mc??","noDescription":"A????klama Yok.","alreadyExists":"{{name}} isimli bir {{type}} zaten var","alreadWatching":"Eklentiler zaten izleniyor.","metaError":"META ayr????t??r??lamad??.","missingNameData":"META isim verisi yok.","metaNotFound":"META bulunamad??.","compileError":"Derlenemedi.","wasUnloaded":"{{name}} ????kar??ld??.","blankSlateHeader":"Hi?? {{type}}(a/e)ar??n yok!","blankSlateMessage":"[Bu siteden]({{link}}) al ve {{type}} klas??r??ne ekle."},"CustomCSS":{"confirmationText":"??zel CSS\'inde kaydedilmemi?? de??i??imler var. Bu pencereyi kapatmak de??i??ikliklerin kaybolmas??na yol a??ar.","update":"G??ncelle","save":"Kaydet","openNative":"Sistem Edit??r??nde a??","openDetached":"Pencereyi Ay??r","settings":"Edit??r Ayarlar??","editorTitle":"??zel CSS Edit??r??"},"Emotes":{"loading":"Arkaplanda emojiler y??kleniyor yeniden ba??latmay??n??z.","loaded":"B??t??n emojiler y??klendi.","clearEmotes":"Emoji Verilerini Sil","favoriteAction":"Favori ekle!","downloadFailed":"Y??kleme ba??ar??s??z oldu","failureMessage":"BetterDiscord emojileri y??klemede ba??ar??s??z oldu, l??tfen internet ba??lant??n??z?? kontrol ediniz."},"PublicServers":{"button":"Herkese A????k","join":"Kat??l","joining":"Kat??l??n??yor","joined":"Kat??l??nd??","loading":"Y??kleniyor","loadMore":"Daha Fazla Y??kle","notConnected":"Ba??l?? De??il","connectionRequired":"Sunuculara kat??lmak i??in hesab??n?? ba??lamal??s??n.","connectionError":"Ba??lant?? Hatas??.","connectionErrorMessage":"DiscordServers.com\'a ba??lan??rken hata oldu, websitelerini kapal?? olmas?? m??mk??n. L??tfen daha sonra tekrar deneyiniz.","pagination":"{{count}} i??erisinden {{page}}. sayfa","search":"Ara","connect":"Ba??lan","reconnect":"Geri Ba??lan","categories":"Kategoriler","keywords":"Anahtar Kelimeler","connection":"{{username}}#{{discriminator}} olarak ba??lan??ld??","results":"{{category}} kategorisinde {{total}} ??zerinden {{start}}-{{end}} g??steriliyor","query":"{{query}} i??in"},"Modals":{"confirmAction":"Emin Misin?","okay":"Tamam","done":"Bitti","cancel":"??ptal","nevermind":"Bo??ver","close":"Kapat","name":"??sim","message":"Mesaj","error":"Hata","addonErrors":"Eklenti Hatalar??","restartRequired":"Yeniden Ba??latma Laz??m","restartNow":"??imdi Yeniden Ba??lat","restartLater":"Sonra Yeniden Ba??lat","additionalInfo":"Ek Bilgi","restartPrompt":"Etki g??rmek i??in Discord\'un yeniden ba??lat??lmas?? gerek. ??imdi yeniden ba??latmak ister misiniz?"},"ReactDevTools":{"notFound":"Eklenti Bulunamad??","notFoundDetails":"React Geli??tirici Ara??lar?? bilgisayar??n??zda bulunamad??.\\nL??tfen eklentiyi Chrome taray??c??n??za indiriniz."},"Sorting":{"sortBy":"G??re S??rala","order":"S??ra","ascending":"Y??kselen","descending":"Azalan"},"WindowPrefs":{"enabledInfo":"Bu se??ene??in d??zg??n ??al????mas?? i??in ??effaf bir tema gerekiyor.\\nWindows\'da bu aero snapping ve maksimize etmeyi bozabilir.\\n\\nEtki etmesi i??in Discord\'un yeniden ba??lat??lmas?? gerek. ??imdi yeniden ba??latmak ister misiniz?","disabledInfo":"Etki etmesi i??in Discord\'un yeniden ba??lat??lmas?? gerek. ??imdi yeniden ba??latmak ister misiniz?"}}');

/***/ }),

/***/ "../assets/locales/uk.json":
/*!*********************************!*\
  !*** ../assets/locales/uk.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"??????????????","themes":"????????","customcss":"?????????????????? CSS"},"Collections":{"settings":{"name":"????????????????????????","general":{"name":"??????????????","emotes":{"name":"?????????????? ????????????","note":"?????????????????? ?????????????? ???????????? BetterDiscord"},"publicServers":{"name":"???????????????? ??????????????","note":"???????????????????????? ???????????? ???????????????? ?????????????????? ????????????????"},"voiceDisconnect":{"name":"?????????????????? ?????? ?????? ?????? ????????????????","note":"???????????????????????? ?????? ???????????????????? ?????????????? ?????? ?????? ???????????????? Discord"},"showToasts":{"name":"???????????????????? ????????????????????","note":"???????????????????? ???????????????? ???????????????????????? ?? ???????????????? ??????????????????????"},"mediaKeys":{"name":"???????????????? ????????????????????","note":"???? ?????????????????????? ???????????????????? Discord ?????????? ?????????????????????? ??????????"}},"window":{"removeMinimumSize":{"name":"???????????????? ?????????????????????? ????????????","note":"???????????????? ???????????????????? ?????????????????????? ???????????? ?????????? 940x500"},"name":"???????????????????????? ??????????","transparency":{"name":"?????????????????? ????????????????????","note":"???????????????? ???????????? ?????????????? ?????????? (?????????????????? ????????????????????)"},"frame":{"name":"??????????","note":"?????????? ?????????????????? ?????????? ???? ?????? ?????????????????? ??????????"}},"addons":{"name":"?????????????????? ??????????????????","addonErrors":{"name":"???????????????????? ?????????????? ????????????????","note":"???????????????????? ?????????????? ?????????? ?? ?????????????????? ???????????????? ?? ??????."},"editAction":{"name":"???????????????????????? ??????????????????","note":"???? ?????????????????????? ???????????????? ???????????????? ?? ??????","options":{"detached":"?? ???????????????? ??????????","system":"?? ???????????????????? ??????????????????"}}},"customcss":{"name":"?????????????????? CSS","customcss":{"name":"???????????????? ???????????????????? CSS","note":"?????????????????? ?????????????? ???? ?????????????? ??????????????????????"},"liveUpdate":{"name":"?????????????????? ????????????","note":"???????????????????? ?????????? ?? ???????????? ?????????????????? ???????? ?? ???????? ??????????????????????"},"startDetached":{"name":"???????????????? ?? ???????????????? ??????????","note":"???????? ???? ?????????????? \'?????????????????? CSS\' ?????????????? ???????????????? ?? ???????????????? ??????????"},"nativeOpen":{"name":"???????????????????? ???????????????????? ????????????????","note":"???????? ???? ?????????????? \'?????????????????? CSS\' ?????????????? ???????????????????? ?????????? ?? ?????????????????????? ??????????????????"},"openAction":{"name":"???????????????????????? ??????????????????","note":"???? ???????????????????? ?????????? ?????????????? ???????????????????????? ???? ???????????????????????????","options":{"settings":"?? ???????? ??????????????????????","detached":"?? ???????????????? ??????????","system":"?? ???????????????????? ??????????????????"}}},"developer":{"name":"???????????????????????? ????????????????????","debuggerHotkey":{"name":"???????????? ?????????????? ??????????????????????????","note":"???????????????? ???????????????????? ???????????????????????? ?????? ???????????????????? ?????????????? F8"},"reactDevTools":{"name":"?????????????????????? ???????????????????? React","note":"?????????????? ???????? ???????????????? ?????????????????? ???????????????????????? ???????????????????? React ?? Discord"},"inspectElement":{"name":"???????????? ?????????????? ?????????????????? ????????????????","note":"???????????? ???????????? ?????????????? ?????????????????? ???????????????? (ctrl+shift+c), ?????? ???????????????????????????????? ?? ?????????????????? ??????????????????"},"devToolsWarning":{"name":"???????????????? ????????????????????????","note":"???? ???????????????? ???????????????????????? \\"??????????????!\\" (\\"????????-????!\\")"},"debugLogs":{"name":"?????????????????????????????? ??????????????","note":"???????????????? ?????? ?? ?????????????? ?? ???????? debug.log ?? ???????? BetterDiscord"}}},"emotes":{"name":"????????????","general":{"name":"General","download":{"name":"???????????????????? ????????????","note":"???????????????????? ???????????? ?????? ????????????????"},"emoteMenu":{"name":"?????????????? ????????????","note":"???????????????????? ?????????????? Twitch/?????????????? ????????????"},"hideEmojiMenu":{"name":"?????????????????????? ?????????????? ????????????","note":"???????????????? ???????? ???????????? Discord ?????? ?????? ???????????????????????? ???????????????? ????????????"},"autoCaps":{"name":"???????????? ???????????? ????????????","note":"?????????????????????? ???????????????????? ?????????? ???????????? ???????????? ?? ???????????? ????????????"},"modifiers":{"name":"???????????????????? ???????????????????????? ????????????","note":"?????????????????? ?????????????????????? ???????????? (flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap)"},"animateOnHover":{"name":"?????????????????? ?????? ??????????????????","note":"?????????????????? ???????????????????????? ???????????? ???????? ?????? ??????????????????"}},"categories":{"name":"??????????????????","twitchglobal":{"name":"Twitch (??????????????)","note":"???????????????????? ?????????????? ???????????? Twitch"},"twitchsubscriber":{"name":"Twitch (??????????????????????)","note":"???????????????????? ???????????? ?????????????????????? Twitch"},"frankerfacez":{"name":"FrankerFaceZ","note":"???????????????????? ???????????? FFZ"},"bttv":{"name":"BetterTTV","note":"???????????????????? ???????????? BTTV"}}}},"Addons":{"title":"{{name}} ??{{version}} ?????? {{author}}","byline":"{{author}}","openFolder":"???????????????? ???????? {{type}}","reload":"??????????????????????????????","addonSettings":"????????????????????????","website":"????????","source":"???????????????? ??????","invite":"???????????? ??????????????????","donate":"????????????????????????","patreon":"??????????????","name":"????\'????","author":"??????????????","version":"??????????????","added":"?????????? ??????????????????","modified":"?????????? ??????????????????","search":"???????????? {{type}}","editAddon":"????????????????????","deleteAddon":"????????????????","confirmDelete":"???? ??????????????????, ???? ?????????? ???????????????? {{name}}?","confirmationText":"?? ?????? ?? ?????????????????????? ?????????? ?? {{name}}. ???????????????? ?????????? ?????????? ???????????????? ???? ???? ????????????.","enabled":"{{name}} ??????????????????.","disabled":"{{name}} ????????????????.","couldNotEnable":"???? ?????????????? ?????????????????? {{name}}.","couldNotDisable":"???? ?????????????? ???????????????? {{name}}.","couldNotStart":"???? ?????????????? ?????????????????? {{name}}","couldNotStop":"???? ?????????????? ???????????????? {{name}}","settingsError":"???? ?????????????? ???????????????? ???????????????????????? {{name}}","methodError":"???? ?????????????? ?????????????????? {{method}}","unknownAuthor":"?????????? ??????????????????","noDescription":"???????? ???? ????????????.","alreadyExists":"{{type}} ?? ???????????? {{name}} ?????? ??????????","alreadWatching":"?????? ???????????????????? ????????????????????","metaError":"META ???? ???????? ???????? ????????????????????????????","missingNameData":"???????????????? META-???????? ????????","metaNotFound":"META ???? ????????????????.","compileError":"???? ?????????????? ????????????????????????.","wasUnloaded":"{{name}} ??????????????????????","blankSlateHeader":"?? ?????? ?????????? ???????????? {{type}}!","blankSlateMessage":"???????????? ?????????? ?? [?????????? ??????????]({{link}}) ?? ?????????? ???? ?? ???????? ?????????? {{type}}."},"CustomCSS":{"confirmationText":"?? ???????? ?? ?????????????????????? ?????????? ?? ?????????????????????? CSS. ???????????????? ?????????? ?????????? ???????????????? ???? ???? ????????????.","update":"??????????????","save":"????????????????","openNative":"???????????????? ?? ???????????????????? ??????????????????","openDetached":"???????????????? ?? ?????????????????????? ??????????","settings":"???????????????????????? ??????????????????","editorTitle":"???????????????????? ???????????????? ????????????"},"Emotes":{"loading":"???????????????????????? ???????????? ?? ???????????????? ???????????? ?????? ????????????????????????????????","loaded":"?????? ???????????? ?????????????? ??????????????????????.","clearEmotes":"???????????????? ???????? ????????????","favoriteAction":"????????????!","downloadFailed":"???????????????????????? ???? ??????????????","failureMessage":"BetterDiscord ???? ?????????????? ?????????????????????? ????????????. ???????? ??????????, ?????????????? ?????????????????????? ???? ?????????????????? ???? ????????????????????."},"PublicServers":{"button":"???????????????? ??????????????","join":"??????????????????????","joining":"????????????????????","joined":"????????????????????","loading":"????????????????????????","loadMore":"???????????????? ????????????","notConnected":"?????????? ????\'????????","connectionRequired":"???? ?????????????? ??????\'???????????? ???????? ?????????????????? ??????????, ?????? ?????????????????????? ???? ????????????????.","connectionError":"?????????????? ??????????????????????","connectionErrorMessage":"?????????????? ?????????????? ?????? ?????????????????????? ???? DiscordServers.com. ??????????????, ?????????? ????????/api ???? ????????????. ???????? ??????????, ?????????????? ???? ?????? ??????????????.","pagination":"{{page}} ???????????????? ???? {{count}}","search":"??????????","connect":"??????????????????????","reconnect":"?????????????????????? ??????????","categories":"??????????????????","keywords":"?????????????? ??????????","connection":"?????????????????????? ????: {{username}}#{{discriminator}}","results":"???????????????????????? {{start}}-{{end}} ???? {{total}} ?????????????????????? ?? {{category}}","query":"?????? {{query}}"},"Modals":{"confirmAction":"???? ???????????????????","okay":"??????","done":"????????????","cancel":"??????????????????????","nevermind":"???? ???????????????? ??????????","close":"??????????????","name":"????\'??","message":"????????????????????????","error":"??????????????","addonErrors":"?????????????? ????????????????????","restartRequired":"?????????????????? ????????????????????","restartNow":"?????????????????????????? ??????????","restartLater":"?????????????????????????? ??????????????","additionalInfo":"?????????????????? ????????????????????","restartPrompt":"?????? ?????????? ?????????????? ????????????????, ???????????????? ?????????????????????????? Discord. ???????????? ?????????????? ???? ???????????"},"ReactDevTools":{"notFound":"???????????????????? ???? ????????????????","notFoundDetails":"???? ?????????????? ???????????? ???????????????????? ???????????????????????? ???????????????????? React ???? ???????????? ????????\'??????????. ???????? ??????????, ???????????????? ???????????????????? ???????????????? ?????????? Chrome."},"Sorting":{"sortBy":"?????????????????? ????","order":"???? ????????????????","ascending":"??????????????????","descending":"????????????????"},"WindowPrefs":{"enabledInfo":"?????? ???????????????????? ???????????? ???????? ?????????? ???????????????? ?????????????? ????????. ?? Windows ???? ???????? ?????????????????? ???? ?????????????????? ????????\'???????? ???? ???????????????????????? Aero.\\n\\n?????? ?????????? ???????????? ????????????????, ?????????????????? ?????????????????????????? Discord. ???????????? ?????????????? ???? ???????????","disabledInfo":"?????? ?????????? ???????????? ????????????????, ?????????????????? ?????????????????????????? Discord. ???????????? ?????????????? ???? ???????????"}}');

/***/ }),

/***/ "../assets/locales/vi.json":
/*!*********************************!*\
  !*** ../assets/locales/vi.json ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = {};

/***/ }),

/***/ "../assets/locales/zh-cn.json":
/*!************************************!*\
  !*** ../assets/locales/zh-cn.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"??????","themes":"??????","customcss":"???????????????"},"Collections":{"settings":{"name":"??????","general":{"name":"??????","emotes":{"name":"????????????","note":"?????? BetterDiscord ????????????"},"publicServers":{"name":"???????????????","note":"???????????????????????????"},"voiceDisconnect":{"name":"??????????????????","note":"??????????????? Discord ???????????????"},"showToasts":{"name":"??????????????????","note":"????????????????????????????????????"},"mediaKeys":{"name":"?????????????????????","note":"?????? Discord ???????????????????????????????????????"}},"window":{"removeMinimumSize":{"name":"?????????????????????","note":"?????? Discord ??????????????????????????????940x500???"},"name":"????????????","transparency":{"name":"?????????","note":"????????????????????????????????????????????????"},"frame":{"name":"?????????","note":"???????????????????????????????????????"}},"addons":{"name":"????????????","addonErrors":{"name":"??????????????????","note":"?????????/?????????????????????????????????"},"editAction":{"name":"?????????","note":"??????????????????????????????","options":{"detached":"????????????","system":"???????????????"}}},"customcss":{"name":"???????????????","customcss":{"name":"???????????????","note":"??????????????????????????????"},"liveUpdate":{"name":"?????????","note":"????????? CSS ?????????????????????"},"startDetached":{"name":"????????????????????????","note":"???????????????????????????????????????"},"nativeOpen":{"name":"???????????????????????????","note":"??????????????????????????????????????????"},"openAction":{"name":"?????????","note":"??????????????????????????????","options":{"settings":"????????????","detached":"????????????","system":"???????????????"}}},"developer":{"name":"???????????????","debuggerHotkey":{"name":"??????????????????","note":"?????? F8 ??????????????????"},"reactDevTools":{"name":"React ???????????????","note":"??? Discord ?????? React ???????????????"},"inspectElement":{"name":"?????????????????????","note":"???????????????????????????????????????????????????????????????Ctrl + Shift + C???"},"devToolsWarning":{"name":"???????????????????????????","note":"?????? Discord ?????????Hold Up!?????????"},"debugLogs":{"name":"????????????","note":"???????????????????????????????????? BetterDiscord ??????????????? debug.log ??????"}}},"emotes":{"name":"??????","general":{"name":"??????","download":{"name":"????????????","note":"?????????????????????????????????"},"emoteMenu":{"name":"????????????","note":"???????????????????????? Twitch/???????????? ??????"},"hideEmojiMenu":{"name":"????????????????????????Hide Emoji Menu","note":"?????????????????????????????? Discord ?????????????????????"},"autoCaps":{"name":"??????????????????","note":"????????????????????????"},"modifiers":{"name":"?????????????????????","note":"????????????????????????flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap???"},"animateOnHover":{"name":"????????????","note":"??????????????????????????????????????????"}},"categories":{"name":"??????","twitchglobal":{"name":"Twitch ??????","note":"?????? Twitch ????????????"},"twitchsubscriber":{"name":"Twitch ??????","note":"?????? Twitch ???????????????"},"frankerfacez":{"name":"FrankerFaceZ","note":"???????????? FFZ ?????????"},"bttv":{"name":"BetterTTV","note":"???????????? BTTV ?????????"}}}},"Addons":{"title":"{{name}} ?????????{{version}} ?????????{{author}}","byline":"????????? {{author}}","openFolder":"??????{{type}}?????????","reload":"????????????","addonSettings":"??????","website":"??????","source":"??????","invite":"???????????????","donate":"??????","patreon":"Patreon","name":"??????","author":"??????","version":"??????","added":"????????????","modified":"??????????????????","search":"??????{{type}}","editAddon":"??????","deleteAddon":"??????","confirmDelete":"??????????????????{{name}}??????","confirmationText":"???????????????????????????????????????????????????????????????{{name}}??????????????????","enabled":"?????????{{name}}","disabled":"?????????{{name}}","couldNotEnable":"????????????{{name}}???","couldNotDisable":"????????????{{name}}???","couldNotStart":"????????????{{name}}???","couldNotStop":"????????????{{name}}???","settingsError":"????????????{{name}}??????","methodError":"????????????{{method}}???","unknownAuthor":"???????????????","noDescription":"??????????????????????????????","alreadyExists":"???????????????????????????{{name}}??????{{type}}???","alreadWatching":"????????????????????????","metaError":"?????????????????????","missingNameData":"????????????????????????","metaNotFound":"?????????????????????","compileError":"???????????????","wasUnloaded":"?????????{{name}}???","blankSlateHeader":"??????????????????{{type}}???","blankSlateMessage":"????????????[?????????]({{link}})????????????????????????????????????{{type}}???????????????"},"CustomCSS":{"confirmationText":"????????????????????????????????????????????????????????????????????????????????????????????????","update":"??????","save":"??????","openNative":"???????????????????????????","openDetached":"????????????????????????","settings":"???????????????","editorTitle":"????????????????????????"},"Emotes":{"loading":"?????????????????????????????????????????????","loaded":"?????????????????????????????????","clearEmotes":"??????????????????","favoriteAction":"?????????","downloadFailed":"????????????","failureMessage":"BetterDiscord ???????????????????????????????????????????????????????????????"},"PublicServers":{"button":"??????","join":"??????","joining":"?????????","joined":"?????????","loading":"?????????","loadMore":"????????????","notConnected":"????????????","connectionRequired":"?????????????????????????????????????????????????????????","connectionError":"????????????","connectionErrorMessage":"?????????D iscordServers.com ??????????????????????????????????????????/??????????????????????????????????????????","pagination":"???{{count}}????????????{{page}}???","search":"??????","connect":"??????","reconnect":"????????????","categories":"??????","keywords":"?????????","connection":"?????? {{username}}#{{discriminator}} ????????????","results":"??????{{category}}????????????{{total}}??????????????????????????????{{start}}-{{end}}?????????","query":"?????? {{query}}"},"Modals":{"confirmAction":"???????????????","okay":"??????","done":"??????","cancel":"??????","nevermind":"?????????","close":"??????","name":"??????","message":"??????","error":"??????","addonErrors":"????????????","restartRequired":"?????????????????????","restartNow":"????????????","restartLater":"??????????????????","additionalInfo":"????????????","restartPrompt":"Discord ??????????????????????????????????????????????????????????????????"},"ReactDevTools":{"notFound":"???????????????","notFoundDetails":"?????????????????????????????? React ??????????????????????????????????????? Chrome ?????????????????????"},"Sorting":{"sortBy":"????????????","order":"??????","ascending":"??????","descending":"??????"},"WindowPrefs":{"enabledInfo":"??????????????????????????????????????????????????? Windows ???????????????????????? AERO ????????????????????????\\n\\n???????????????????????????????????????????????????????????????","disabledInfo":"Discord ??????????????????????????????????????????????????????????????????"}}');

/***/ }),

/***/ "../assets/locales/zh-tw.json":
/*!************************************!*\
  !*** ../assets/locales/zh-tw.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"Panels":{"plugins":"????????????","themes":"????????????","customcss":"???????????????"},"Collections":{"settings":{"name":"??????","general":{"name":"??????","emotes":{"name":"????????????","note":"?????? BetterDiscord ????????????"},"publicServers":{"name":"???????????????","note":"???????????????????????????"},"voiceDisconnect":{"name":"??????????????????","note":"??????????????? Discord ???????????????"},"showToasts":{"name":"??????????????????","note":"?????????????????????????????????"},"mediaKeys":{"name":"?????????????????????","note":"?????? Discord ???????????????????????????????????????"}},"window":{"removeMinimumSize":{"name":"?????????????????????","note":"?????? Discord ??????????????????????????????940x500???"},"name":"????????????","transparency":{"name":"?????????","note":"????????????????????????????????????????????????"},"frame":{"name":"?????????","note":"???????????????????????????????????????"}},"addons":{"name":"??????????????????","addonErrors":{"name":"????????????????????????","note":"???????????????/???????????????????????????????????????"},"editAction":{"name":"?????????","note":"??????????????????????????????????????????","options":{"detached":"????????????","system":"???????????????"}}},"customcss":{"name":"???????????????","customcss":{"name":"???????????????","note":"??????????????????????????????"},"liveUpdate":{"name":"?????????","note":"????????? CSS ???????????????????????????"},"startDetached":{"name":"????????????????????????","note":"???????????????????????????????????????"},"nativeOpen":{"name":"???????????????????????????","note":"??????????????????????????????????????????"},"openAction":{"name":"?????????","note":"??????????????????????????????","options":{"settings":"????????????","detached":"????????????","system":"???????????????"}}},"developer":{"name":"??????????????????","debuggerHotkey":{"name":"??????????????????","note":"?????? F8 ??????????????????"},"reactDevTools":{"name":"React ??????????????????","note":"??? Discord ?????? React ??????????????????"},"inspectElement":{"name":"?????????????????????","note":"???????????????????????????????????????????????????????????????Ctrl + Shift + C???"},"devToolsWarning":{"name":"??????????????????????????????","note":"?????? Discord ?????????Hold Up!?????????"},"debugLogs":{"name":"????????????","note":"???????????????????????????????????? BetterDiscord ??????????????? debug.log ??????"}}},"emotes":{"name":"??????","general":{"name":"??????","download":{"name":"????????????","note":"?????????????????????????????????"},"emoteMenu":{"name":"????????????","note":"???????????????????????? Twitch/???????????? ??????"},"hideEmojiMenu":{"name":"????????????????????????","note":"?????????????????????????????? Discord ?????????????????????"},"autoCaps":{"name":"??????????????????","note":"????????????????????????"},"modifiers":{"name":"?????????????????????","note":"????????????????????????flip, spin, pulse, spin2, spin3, 1spin, 2spin, 3spin, tr, bl, br, shake, shake2, shake3, flap???"},"animateOnHover":{"name":"????????????","note":"??????????????????????????????????????????"}},"categories":{"name":"??????","twitchglobal":{"name":"Twitch ??????","note":"?????? Twitch ????????????"},"twitchsubscriber":{"name":"Twitch ??????","note":"?????? Twitch ???????????????"},"frankerfacez":{"name":"FrankerFaceZ","note":"???????????? FFZ ?????????"},"bttv":{"name":"BetterTTV","note":"???????????? BTTV ?????????"}}}},"Addons":{"title":"{{name}} ?????????{{version}} ?????????{{author}}","byline":"????????? {{author}}","openFolder":"??????{{type}}?????????","reload":"????????????","addonSettings":"??????","website":"??????","source":"??????","invite":"???????????????","donate":"??????","patreon":"Patreon","name":"??????","author":"??????","version":"??????","added":"????????????","modified":"??????????????????","search":"??????{{type}}","editAddon":"??????","deleteAddon":"??????","confirmDelete":"??????????????????{{name}}??????","confirmationText":"???????????????????????????????????????????????????????????????{{name}}??????????????????","enabled":"?????????{{name}}","disabled":"?????????{{name}}","couldNotEnable":"????????????{{name}}???","couldNotDisable":"????????????{{name}}???","couldNotStart":"????????????{{name}}???","couldNotStop":"????????????{{name}}???","settingsError":"????????????{{name}}??????","methodError":"????????????{{method}}???","unknownAuthor":"???????????????","noDescription":"??????????????????????????????","alreadyExists":"???????????????????????????{{name}}??????{{type}}???","alreadWatching":"??????????????????????????????","metaError":"?????????????????????","missingNameData":"????????????????????????","metaNotFound":"?????????????????????","compileError":"???????????????","wasUnloaded":"?????????{{name}}???","blankSlateHeader":"?????????????????????{{type}}???","blankSlateMessage":"????????????[?????????]({{link}})????????????????????????????????????{{type}}???????????????"},"CustomCSS":{"confirmationText":"????????????????????????????????????????????????????????????????????????????????????????????????","update":"??????","save":"??????","openNative":"???????????????????????????","openDetached":"????????????????????????","settings":"???????????????","editorTitle":"????????????????????????"},"Emotes":{"loading":"?????????????????????????????????????????????","loaded":"?????????????????????????????????","clearEmotes":"??????????????????","favoriteAction":"?????????????????????","downloadFailed":"????????????","failureMessage":"BetterDiscord ???????????????????????????????????????????????????????????????"},"PublicServers":{"button":"??????","join":"??????","joining":"?????????","joined":"?????????","loading":"?????????","loadMore":"????????????","notConnected":"????????????","connectionRequired":"?????????????????????????????????????????????????????????","connectionError":"????????????","connectionErrorMessage":"????????? DiscordServers.com ??????????????????????????????????????????/??????????????????????????????????????????","pagination":"???{{count}}????????????{{page}}???","search":"??????","connect":"??????","reconnect":"????????????","categories":"??????","keywords":"?????????","connection":"?????? {{username}}#{{discriminator}} ????????????","results":"??????{{category}}????????????{{total}}??????????????????????????????{{start}}-{{end}}?????????","query":"?????? {{query}}"},"Modals":{"confirmAction":"???????????????","okay":"??????","done":"??????","cancel":"??????","nevermind":"?????????","close":"??????","name":"??????","message":"??????","error":"??????","addonErrors":"??????????????????","restartRequired":"?????????????????????","restartNow":"????????????","restartLater":"??????????????????","additionalInfo":"????????????","restartPrompt":"Discord ??????????????????????????????????????????????????????"},"ReactDevTools":{"notFound":"???????????????","notFoundDetails":"?????????????????????????????? React ????????????????????????????????????????????? Chrome ???????????????????????????"},"Sorting":{"sortBy":"????????????","order":"??????","ascending":"??????","descending":"??????"},"WindowPrefs":{"enabledInfo":"????????????????????????????????????????????????????????? Windows ???????????????????????? AERO ????????????????????????\\n\\n???????????????????????????????????????????????????????????????","disabledInfo":"Discord ????????????????????????????????????????????????????????????"}}');

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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/polyfill/index.js");
/* harmony import */ var _secure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./secure */ "./src/secure.js");
/* harmony import */ var _loadingicon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadingicon */ "./src/loadingicon.js");
/* harmony import */ var _modules_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/core */ "./src/modules/core.js");
/* harmony import */ var _modules_api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/api/index */ "./src/modules/api/index.js");
 // eslint-disable-line no-unused-vars




 // Perform some setup

(0,_secure__WEBPACK_IMPORTED_MODULE_1__["default"])();
Object.defineProperty(window, "BdApi", {
  value: _modules_api_index__WEBPACK_IMPORTED_MODULE_4__["default"],
  writable: false,
  configurable: false
});
window.global = window; // Add loading icon at the bottom right

_loadingicon__WEBPACK_IMPORTED_MODULE_2__["default"].show();
_modules_core__WEBPACK_IMPORTED_MODULE_3__["default"].startup();
})();

/******/ })()
;