const Document = require('sketch/dom').Document
const Style = require('sketch/dom').Style
var doc
var selection
var color1 = "#1ca9c4"
var color2 = "#FF3B30" //red
var color3 = "#FF9500" //orange
var color4 = "#FFCC00" //yellow
var color5 = "#4CD964" //green
var color6 = "#5AC8FA" //teal blue
var color7 = "#007AFF" //blue
var color8 = "#5856D6" //purple
var color9 = "#FF2D55" //pink

function setup(context) {
  doc = Document.getSelectedDocument()
  selection = doc.selectedLayers
  context.document.showMessage('Plugin 🏃')
}

// ****************************
//   Plugin command handlers
// ****************************

export function applyFillColor1(context) {
  setup(context)
  applyFillColorWithSelection(color1, selection)
}

export function applyFillColor2(context) {
  setup(context)
  applyFillColorWithSelection(color2, selection)
}

export function applyFillColor3(context) {
  setup(context)
  applyFillColorWithSelection(color3, selection)
}

export function applyFillColor4(context) {
  setup(context)
  applyFillColorWithSelection(color4, selection)
}

export function applyFillColor5(context) {
  setup(context)
  applyFillColorWithSelection(color5, selection)
}

export function applyFillColor6(context) {
  setup(context)
  applyFillColorWithSelection(color6, selection)
}

export function applyFillColor7(context) {
  setup(context)
  applyFillColorWithSelection(color7, selection)
}

export function applyFillColor8(context) {
  setup(context)
  applyFillColorWithSelection(color8, selection)
}

export function applyFillColor9(context) {
  setup(context)
  applyFillColorWithSelection(color9, selection)
}

export function applyBorderColor1(context) {
  setup(context)
  applyBorderColorWithSelection(color1, selection);
}

export function applyBorderColor2(context) {
  setup(context)
  applyBorderColorWithSelection(color2, selection);
}

export function applyBorderColor3(context) {
  setup(context)
  applyBorderColorWithSelection(color3, selection);
}

export function applyBorderColor4(context) {
  setup(context)
  applyBorderColorWithSelection(color4, selection);
}

export function applyBorderColor5(context) {
  setup(context)
  applyBorderColorWithSelection(color5, selection);
}

export function applyBorderColor6(context) {
  setup(context)
  applyBorderColorWithSelection(color6, selection);
}

export function applyBorderColor7(context) {
  setup(context)
  applyBorderColorWithSelection(color7, selection);
}

export function applyBorderColor8(context) {
  setup(context)
  applyBorderColorWithSelection(color8, selection);
}

export function applyBorderColor9(context) {
  setup(context)
  applyBorderColorWithSelection(color9, selection);
}

function applyFillColorWithSelection(color, selection) {
  selection.forEach(layer => {
    layer.style.fills = [{
      fill: Style.FillType.Color,
      color: color,
    }]
  })
  // TODO: Support layers within Groups
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
}
