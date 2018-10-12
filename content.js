const rules = require('./rules');

var elements = document.getElementsByTagName('*');

for (i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      // var regex = /(gl[oó]ria)+/gim

      for (let i = 0; i >= rules.length - 1; i++) {
        var replacedText = text.replace(rules[i].regex, rules[i].conversao);

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      }
    }
  }
}
