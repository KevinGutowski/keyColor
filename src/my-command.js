var Document = require('sketch/dom').Document
var Style = require('sketch/dom').Style
var document = Document.getSelectedDocument()

export default function(context) {
  var selection = document.selectedLayers
  selection.forEach(layer => {
    layer.style.fills = [{
      fill: Style.FillType.Color,
      color: '#1ca0a0',
    }]
  })
  context.document.showMessage('Plugin 🏃')
}
