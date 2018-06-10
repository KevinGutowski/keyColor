import { Colors } from './Colors'

const Document = require('sketch/dom').Document
const Style = require('sketch/dom').Style
var doc
var selection

function setup(context) {
  doc = Document.getSelectedDocument()
  selection = doc.selectedLayers
  // context.document.showMessage('Plugin 🏃')
  if (selection.length == 0) {
    context.document.showMessage('🗝🌈: Please select a layer')
  }
}

// ****************************
//   Plugin command handlers
// ****************************

export function applyFillColor1(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c1, selection)
}

export function applyFillColor2(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c2, selection)
}

export function applyFillColor3(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c3, selection)
}

export function applyFillColor4(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c4, selection)
}

export function applyFillColor5(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c5, selection)
}

export function applyFillColor6(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c6, selection)
}

export function applyFillColor7(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c7, selection)
}

export function applyFillColor8(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c8, selection)
}

export function applyFillColor9(context) {
  setup(context)
  applyFillColorWithSelection(Colors.c9, selection)
}

export function applyBorderColor1(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c1, selection);
}

export function applyBorderColor2(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c2, selection);
}

export function applyBorderColor3(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c3, selection);
}

export function applyBorderColor4(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c4, selection);
}

export function applyBorderColor5(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c5, selection);
}

export function applyBorderColor6(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c6, selection);
}

export function applyBorderColor7(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c7, selection);
}

export function applyBorderColor8(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c8, selection);
}

export function applyBorderColor9(context) {
  setup(context)
  applyBorderColorWithSelection(Colors.c9, selection);
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
