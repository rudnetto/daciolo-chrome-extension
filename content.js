var elements = document.getElementsByTagName('*');

for (i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if (node.nodeType === 3) {
      var text = node.nodeValue;
      var replacedText = text;

      for (ruleIndex = 0; ruleIndex < RULES.length; ruleIndex++) {
        replacedText = replacedText.replace(RULES[ruleIndex].selector, RULES[ruleIndex].target);
      }

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
