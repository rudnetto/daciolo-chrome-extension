var elements = document.getElementsByTagName('*');

for(i = 0; i < elements.length; i++) {
  var element = elements[i];

  for(j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    if(node.nodeType === 3) {
      var text = node.nodeValue;
      var regex = /(gl[oó]ria)+/gim
      var replacedText = text.replace(regex, '$& a deuxxx');

      if (replacedText !== text) {
        element.replaceChild(document.createTextNode(replacedText), node);
      }
    }
  }
}
