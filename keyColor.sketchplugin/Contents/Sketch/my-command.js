var that = this;
function __skpm_run (key, context) {
  that.context = context;

var exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/my-command.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/my-command.js":
/*!***************************!*\
  !*** ./src/my-command.js ***!
  \***************************/
/*! exports provided: applyFillColor1, applyFillColor2, applyFillColor3, applyFillColor4, applyFillColor5, applyFillColor6, applyFillColor7, applyFillColor8, applyFillColor9, applyBorderColor1, applyBorderColor2, applyBorderColor3, applyBorderColor4, applyBorderColor5, applyBorderColor6, applyBorderColor7, applyBorderColor8, applyBorderColor9, getSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor1", function() { return applyFillColor1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor2", function() { return applyFillColor2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor3", function() { return applyFillColor3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor4", function() { return applyFillColor4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor5", function() { return applyFillColor5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor6", function() { return applyFillColor6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor7", function() { return applyFillColor7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor8", function() { return applyFillColor8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyFillColor9", function() { return applyFillColor9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor1", function() { return applyBorderColor1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor2", function() { return applyBorderColor2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor3", function() { return applyBorderColor3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor4", function() { return applyBorderColor4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor5", function() { return applyBorderColor5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor6", function() { return applyBorderColor6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor7", function() { return applyBorderColor7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor8", function() { return applyBorderColor8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyBorderColor9", function() { return applyBorderColor9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
var Document = __webpack_require__(/*! sketch/dom */ "sketch/dom").Document;

var Style = __webpack_require__(/*! sketch/dom */ "sketch/dom").Style;

var Settings = __webpack_require__(/*! sketch/settings */ "sketch/settings");

var doc;
var selection;
var localScriptPath;

function setup(context) {
  doc = Document.getSelectedDocument();
  selection = doc.selectedLayers; // context.document.showMessage('Plugin 🏃')

  if (selection.length == 0) {
    context.document.showMessage('🗝🌈: Please select a layer');
  }

  if (Settings.globalSettingForKey('c1') == undefined) {
    console.log("Setting Colors -- No object");
    initalizeColors();
  } else if (Settings.globalSettingForKey('c1').length == undefined) {
    console.log("Setting Colors -- Object is empty");
    initalizeColors();
  }
} // ****************************
//   Plugin command handlers
// ****************************


function applyFillColor1(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c1'), selection);
}
function applyFillColor2(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c2'), selection);
}
function applyFillColor3(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c3'), selection);
}
function applyFillColor4(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c4'), selection);
}
function applyFillColor5(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c5'), selection);
}
function applyFillColor6(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c6'), selection);
}
function applyFillColor7(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c7'), selection);
}
function applyFillColor8(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c8'), selection);
}
function applyFillColor9(context) {
  setup(context);
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c9'), selection);
}
function applyBorderColor1(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c1'), selection);
}
function applyBorderColor2(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c2'), selection);
}
function applyBorderColor3(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c3'), selection);
}
function applyBorderColor4(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c4'), selection);
}
function applyBorderColor5(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c5'), selection);
}
function applyBorderColor6(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c6'), selection);
}
function applyBorderColor7(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c7'), selection);
}
function applyBorderColor8(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c8'), selection);
}
function applyBorderColor9(context) {
  setup(context);
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c9'), selection);
}

function applyFillColorWithSelection(color, selection) {
  selection.forEach(function (layer) {
    layer.style.fills = [{
      fill: Style.FillType.Color,
      color: color
    }];
  }); // TODO: Support layers within Groups

  doc.sketchObject.inspectorController().reload();
}

function applyBorderColorWithSelection(color, selection) {
  selection.forEach(function (layer) {
    var currentBorderThickness = layer.style.borders[0].thickness;
    var currentBorderPosition = layer.style.borders[0].position;
    layer.style.borders = [{
      fill: Style.FillType.Color,
      color: color,
      position: currentBorderPosition,
      thickness: currentBorderThickness
    }];
  }); // TODO: Support layers within Groups

  doc.sketchObject.inspectorController().reload();
}

function initalizeColors() {
  Settings.setGlobalSettingForKey('c1', 'FF3B30'); //red

  Settings.setGlobalSettingForKey('c2', 'FF9500'); //orange

  Settings.setGlobalSettingForKey('c3', 'FFCC00'); //yellow

  Settings.setGlobalSettingForKey('c4', 'D8FF00'); //lime-green

  Settings.setGlobalSettingForKey('c5', '4CD964'); //green

  Settings.setGlobalSettingForKey('c6', '5AC8FA'); //teal blue

  Settings.setGlobalSettingForKey('c7', '007AFF'); //blue

  Settings.setGlobalSettingForKey('c8', '5856D6'); //purple

  Settings.setGlobalSettingForKey('c9', 'FF2D55'); //pink
}

var labelColumnHeight = 16;
var labelHeight = 18;
var firstColumnWidth = 90;
var secondColumnWidth = 120;
var inputHeight = 22;
var windowWidth = firstColumnWidth + secondColumnWidth;
function getSettings(context) {
  setup(context);
  localScriptPath = context.scriptPath; // context.document.showMessage('🗝🌈: Settings Open');

  var response = triggerAlert();

  if (response.alertOption == NSAlertFirstButtonReturn) {
    Settings.setGlobalSettingForKey('c1', response.options[0]);
    Settings.setGlobalSettingForKey('c2', response.options[1]);
    Settings.setGlobalSettingForKey('c3', response.options[2]);
    Settings.setGlobalSettingForKey('c4', response.options[3]);
    Settings.setGlobalSettingForKey('c5', response.options[4]);
    Settings.setGlobalSettingForKey('c6', response.options[5]);
    Settings.setGlobalSettingForKey('c7', response.options[6]);
    Settings.setGlobalSettingForKey('c8', response.options[7]);
    Settings.setGlobalSettingForKey('c9', response.options[8]);
    context.document.showMessage('🗝🌈: Settings Updated!');
  } else {
    return;
  }
}

function createColumnLabel(_ref) {
  var text = _ref.text,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 12 : _ref$fontSize,
      frame = _ref.withFrame;
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setFont(NSFont.boldSystemFontOfSize(fontSize));
  label.setBezeled(false);
  label.setDrawsBackground(false);
  label.setEditable(false);
  label.setSelectable(false);
  return label;
}

function triggerAlert() {
  var currentColor1 = Settings.globalSettingForKey('c1');
  var currentColor2 = Settings.globalSettingForKey('c2');
  var currentColor3 = Settings.globalSettingForKey('c3');
  var currentColor4 = Settings.globalSettingForKey('c4');
  var currentColor5 = Settings.globalSettingForKey('c5');
  var currentColor6 = Settings.globalSettingForKey('c6');
  var currentColor7 = Settings.globalSettingForKey('c7');
  var currentColor8 = Settings.globalSettingForKey('c8');
  var currentColor9 = Settings.globalSettingForKey('c9');
  var alert = NSAlert.alloc().init();
  alert.setMessageText("Key Color Settings");
  alert.setInformativeText("Update your colors below. Be sure to use proper hex values. There is no validation yet.");
  alert.addButtonWithTitle("Save");
  alert.addButtonWithTitle("Cancel");
  alert.icon = loadLocalImage({
    scriptPath: localScriptPath,
    filePath: "Contents/Resources/icon.png"
  });
  var alertContent = NSView.alloc().init();
  var colorLabel = createColumnLabel({
    text: "Key",
    withFrame: NSMakeRect(0, 0, firstColumnWidth, labelColumnHeight)
  });
  alertContent.addSubview(colorLabel);
  var keyLabel = createColumnLabel({
    text: "Color (HEX)",
    withFrame: NSMakeRect(firstColumnWidth, 0, secondColumnWidth, labelColumnHeight)
  });
  alertContent.addSubview(keyLabel);
  var row1 = getRow({
    text: "Color 1",
    color: currentColor1
  });
  var row2 = getRow({
    text: "Color 2",
    color: currentColor2
  });
  var row3 = getRow({
    text: "Color 3",
    color: currentColor3
  });
  var row4 = getRow({
    text: "Color 4",
    color: currentColor4
  });
  var row5 = getRow({
    text: "Color 5",
    color: currentColor5
  });
  var row6 = getRow({
    text: "Color 6",
    color: currentColor6
  });
  var row7 = getRow({
    text: "Color 7",
    color: currentColor7
  });
  var row8 = getRow({
    text: "Color 8",
    color: currentColor8
  });
  var row9 = getRow({
    text: "Color 9",
    color: currentColor9
  });
  var rows = [row1.rowView, row2.rowView, row3.rowView, row4.rowView, row5.rowView, row6.rowView, row7.rowView, row8.rowView, row9.rowView];
  var stackView = NSStackView.alloc().initWithFrame(NSMakeRect(0, labelColumnHeight + 4, windowWidth, rows[0].frame().size.height * rows.length));
  stackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  stackView.setDistribution(NSStackViewDistributionFillEqually);
  stackView.setSpacing(4);
  stackView.setViews_inGravity(rows, NSStackViewGravityBottom);
  alertContent.addSubview(stackView);
  alertContent.frame = NSMakeRect(0, 0, windowWidth, NSMaxY(stackView.frame()));
  alertContent.setFlipped(true);
  alert.accessoryView = alertContent;
  return {
    alertOption: alert.runModal(),
    options: [String(row1.hexInput.stringValue()), String(row2.hexInput.stringValue()), String(row3.hexInput.stringValue()), String(row4.hexInput.stringValue()), String(row5.hexInput.stringValue()), String(row6.hexInput.stringValue()), String(row7.hexInput.stringValue()), String(row8.hexInput.stringValue()), String(row9.hexInput.stringValue())]
  };
}

function createLabel(_ref2) {
  var text = _ref2.text,
      _ref2$fontSize = _ref2.fontSize,
      fontSize = _ref2$fontSize === void 0 ? 14 : _ref2$fontSize,
      frame = _ref2.withFrame;
  var label = NSTextField.alloc().initWithFrame(frame);
  label.setStringValue(text);
  label.setFont(NSFont.systemFontOfSize(fontSize));
  label.setBezeled(false);
  label.setDrawsBackground(false);
  label.setEditable(false);
  label.setSelectable(false);
  return label;
}

function createTextField(_ref3) {
  var text = _ref3.text,
      frame = _ref3.withFrame;
  var textField = NSTextField.alloc().initWithFrame(frame);
  textField.setStringValue(text);
  return textField;
}

function getRow(_ref4) {
  var text = _ref4.text,
      color = _ref4.color;
  var rowView = NSView.alloc().initWithFrame(NSMakeRect(0, 0, windowWidth, 28));
  rowView.setFlipped(true);
  var label = createLabel({
    text: text,
    withFrame: NSMakeRect(0, 1, firstColumnWidth, labelHeight)
  });
  rowView.addSubview(label);
  var hexInput = createTextField({
    text: color,
    withFrame: NSMakeRect(firstColumnWidth, 0, secondColumnWidth, inputHeight)
  });
  rowView.addSubview(hexInput);
  return {
    rowView: rowView,
    hexInput: hexInput
  };
}

function loadLocalImage(_ref5) {
  var scriptPath = _ref5.scriptPath,
      filePath = _ref5.filePath;
  var basePath = scriptPath.stringByDeletingLastPathComponent().stringByDeletingLastPathComponent().stringByDeletingLastPathComponent();
  return NSImage.alloc().initWithContentsOfFile(basePath + "/" + filePath);
}

/***/ }),

/***/ "sketch/dom":
/*!*****************************!*\
  !*** external "sketch/dom" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/dom");

/***/ }),

/***/ "sketch/settings":
/*!**********************************!*\
  !*** external "sketch/settings" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch/settings");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
that['applyFillColor1'] = __skpm_run.bind(this, 'applyFillColor1');
that['onRun'] = __skpm_run.bind(this, 'default');
that['applyFillColor2'] = __skpm_run.bind(this, 'applyFillColor2');
that['applyFillColor3'] = __skpm_run.bind(this, 'applyFillColor3');
that['applyFillColor4'] = __skpm_run.bind(this, 'applyFillColor4');
that['applyFillColor5'] = __skpm_run.bind(this, 'applyFillColor5');
that['applyFillColor6'] = __skpm_run.bind(this, 'applyFillColor6');
that['applyFillColor7'] = __skpm_run.bind(this, 'applyFillColor7');
that['applyFillColor8'] = __skpm_run.bind(this, 'applyFillColor8');
that['applyFillColor9'] = __skpm_run.bind(this, 'applyFillColor9');
that['applyBorderColor1'] = __skpm_run.bind(this, 'applyBorderColor1');
that['applyBorderColor2'] = __skpm_run.bind(this, 'applyBorderColor2');
that['applyBorderColor3'] = __skpm_run.bind(this, 'applyBorderColor3');
that['applyBorderColor4'] = __skpm_run.bind(this, 'applyBorderColor4');
that['applyBorderColor5'] = __skpm_run.bind(this, 'applyBorderColor5');
that['applyBorderColor6'] = __skpm_run.bind(this, 'applyBorderColor6');
that['applyBorderColor7'] = __skpm_run.bind(this, 'applyBorderColor7');
that['applyBorderColor8'] = __skpm_run.bind(this, 'applyBorderColor8');
that['applyBorderColor9'] = __skpm_run.bind(this, 'applyBorderColor9');
that['getSettings'] = __skpm_run.bind(this, 'getSettings')

//# sourceMappingURL=my-command.js.map