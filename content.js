$.ajax({
  type: 'GET',
  url: 'https://www.googleapis.com/customsearch/v1?key=AIzaSyCKAqazg76rulZK_TFv7mu0LPMGYvSInjM&cx=010698837174061216194:e04i0fcmhhk&q=Cabo+Daciolo&fields=items/pagemap/cse_image',
  success: function(response) {
    var results = response.items;
    var images = [];

    for (i = 0; i < results.length; i++) {
      images.push(results[i].pagemap.cse_image[0].src);
    }

    var imageElements = document.getElementsByTagName('img');

    for (i = 0; i < imageElements.length; i++) {
      var imageWidth = imageElements[i].width;
      var imageHeight = imageElements[i].height;

      imageElements[i].src = images[Math.floor(Math.random()*images.length)];
      imageElements[i].width = imageWidth;
      imageElements[i].height = imageHeight;
    }
  }
});

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
