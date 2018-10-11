const rules = require('./rules');

var elements = document.getElementsByTagName('*');
var regra = 'regra1';

for (i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      // var regex = /(gl[oó]ria)+/gim

      rules.forEach(rule => {
        var replacedText = text.replace(rule.regex, rule.conversao);

        if (replacedText !== text) {
          element.replaceChild(document.createTextNode(replacedText), node);
        }
      });
    }
  }
}
