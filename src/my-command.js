const Document = require('sketch/dom').Document
const Style = require('sketch/dom').Style
var Settings = require('sketch/settings')
var doc
var selection
var localScriptPath

function setup(context) {
  doc = Document.getSelectedDocument()
  selection = doc.selectedLayers
  // context.document.showMessage('Plugin 🏃')
  if (selection.length == 0) {
    context.document.showMessage('🗝🌈: Please select a layer')
  }
  if (Settings.globalSettingForKey('c1') == undefined) {
    console.log("Setting Colors -- No object");
    initalizeColors();
  } else if (Settings.globalSettingForKey('c1').length == undefined) {
    console.log("Setting Colors -- Object is empty");
    initalizeColors();
  }
}

// ****************************
//   Plugin command handlers
// ****************************

export function applyFillColor1(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c1'), selection)
}

export function applyFillColor2(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c2'), selection)
}

export function applyFillColor3(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c3'), selection)
}

export function applyFillColor4(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c4'), selection)
}

export function applyFillColor5(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c5'), selection)
}

export function applyFillColor6(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c6'), selection)
}

export function applyFillColor7(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c7'), selection)
}

export function applyFillColor8(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c8'), selection)
}

export function applyFillColor9(context) {
  setup(context)
  applyFillColorWithSelection("#" + Settings.globalSettingForKey('c9'), selection)
}

export function applyBorderColor1(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c1'), selection);
}

export function applyBorderColor2(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c2'), selection);
}

export function applyBorderColor3(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c3'), selection);
}

export function applyBorderColor4(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c4'), selection);
}

export function applyBorderColor5(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c5'), selection);
}

export function applyBorderColor6(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c6'), selection);
}

export function applyBorderColor7(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c7'), selection);
}

export function applyBorderColor8(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c8'), selection);
}

export function applyBorderColor9(context) {
  setup(context)
  applyBorderColorWithSelection("#" + Settings.globalSettingForKey('c9'), selection);
}

function applyFillColorWithSelection(color, selection) {
  selection.forEach(layer => {
    layer.style.fills = [{
      fill: Style.FillType.Color,
      color: color,
    }]
  })
    // TODO: Support layers within Groups
  doc.sketchObject.inspectorController().reload();
}

function applyBorderColorWithSelection(color, selection) {
    selection.forEach(layer => {
      var currentBorderThickness = layer.style.borders[0].thickness
      var currentBorderPosition = layer.style.borders[0].position
      layer.style.borders = [{
        fill: Style.FillType.Color,
        color: color,
        position: currentBorderPosition,
        thickness: currentBorderThickness
    }]
  })
  // TODO: Support layers within Groups
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

const labelColumnHeight = 16;
const labelHeight = 18;
const firstColumnWidth = 90;
const secondColumnWidth = 120;
const inputHeight = 22;
const windowWidth = firstColumnWidth + secondColumnWidth;

export function getSettings(context) {
  setup(context);
  localScriptPath = context.scriptPath;
  // context.document.showMessage('🗝🌈: Settings Open');
  let response = triggerAlert();

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
    return
  }
}

function createColumnLabel({ text, fontSize = 12, withFrame: frame }) {
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

  let alert = NSAlert.alloc().init();
  alert.setMessageText("Key Color Settings");
  alert.setInformativeText("Update your colors below. Be sure to use proper hex values. There is no validation yet.");
  alert.addButtonWithTitle("Save");
  alert.addButtonWithTitle("Cancel");
  alert.icon = loadLocalImage({
    scriptPath: localScriptPath,
    filePath: "Contents/Resources/icon.png"
  })

  let alertContent = NSView.alloc().init();

  var colorLabel = createColumnLabel({
    text:"Key",
    withFrame: NSMakeRect(0, 0, firstColumnWidth, labelColumnHeight) 
  });
  alertContent.addSubview(colorLabel);

  let keyLabel = createColumnLabel({
    text:"Color (HEX)",
    withFrame: NSMakeRect(firstColumnWidth,0,secondColumnWidth, labelColumnHeight)
  });
  alertContent.addSubview(keyLabel);

  let row1 = getRow({ text: "Color 1" , color: currentColor1 });
  let row2 = getRow({ text: "Color 2" , color: currentColor2 });
  let row3 = getRow({ text: "Color 3" , color: currentColor3 });
  let row4 = getRow({ text: "Color 4" , color: currentColor4 });
  let row5 = getRow({ text: "Color 5" , color: currentColor5 });
  let row6 = getRow({ text: "Color 6" , color: currentColor6 });
  let row7 = getRow({ text: "Color 7" , color: currentColor7 });
  let row8 = getRow({ text: "Color 8" , color: currentColor8 });
  let row9 = getRow({ text: "Color 9" , color: currentColor9 });

  let rows = [
    row1.rowView,
    row2.rowView,
    row3.rowView,
    row4.rowView,
    row5.rowView,
    row6.rowView,
    row7.rowView,
    row8.rowView,
    row9.rowView
  ];

  let stackView = NSStackView.alloc().initWithFrame(NSMakeRect(0, labelColumnHeight + 4, windowWidth, rows[0].frame().size.height * rows.length));
  stackView.setOrientation(NSUserInterfaceLayoutOrientationVertical);
  stackView.setDistribution(NSStackViewDistributionFillEqually);
  stackView.setSpacing(4);
  stackView.setViews_inGravity(rows,NSStackViewGravityBottom);

  alertContent.addSubview(stackView);

  alertContent.frame = NSMakeRect(0, 0, windowWidth, NSMaxY(stackView.frame()));
  alertContent.setFlipped(true);

  alert.accessoryView = alertContent;

  return {
    alertOption: alert.runModal(),
    options: [
      String(row1.hexInput.stringValue()),
      String(row2.hexInput.stringValue()),
      String(row3.hexInput.stringValue()),
      String(row4.hexInput.stringValue()),
      String(row5.hexInput.stringValue()),
      String(row6.hexInput.stringValue()),
      String(row7.hexInput.stringValue()),
      String(row8.hexInput.stringValue()),
      String(row9.hexInput.stringValue())
    ]
  }
}

function createLabel({ text, fontSize = 14, withFrame: frame }) {
  var label = NSTextField.alloc().initWithFrame(frame);

  label.setStringValue(text);
  label.setFont(NSFont.systemFontOfSize(fontSize));
  label.setBezeled(false);
  label.setDrawsBackground(false);
  label.setEditable(false);
  label.setSelectable(false);

  return label;
}

function createTextField({ text, withFrame: frame }) {
  var textField = NSTextField.alloc().initWithFrame(frame);
  textField.setStringValue(text);
  return textField;
}

function getRow({ text, color }) {
  let rowView = NSView.alloc().initWithFrame(NSMakeRect(0,0,windowWidth, 28))
  rowView.setFlipped(true);

  let label = createLabel({
    text: text,
    withFrame: NSMakeRect(0,1,firstColumnWidth, labelHeight)
  });
  rowView.addSubview(label);

  let hexInput = createTextField({
    text: color,
    withFrame: NSMakeRect(firstColumnWidth,0,secondColumnWidth,inputHeight)
  });
  rowView.addSubview(hexInput);

  return {
    rowView,
    hexInput
  }
}

function loadLocalImage({ scriptPath, filePath }) {
  let basePath = scriptPath
    .stringByDeletingLastPathComponent()
    .stringByDeletingLastPathComponent()
    .stringByDeletingLastPathComponent();
  return NSImage.alloc().initWithContentsOfFile(basePath + "/" + filePath);

}