function labelImageOrientation(){
  var elements = document.querySelectorAll('img');
  Array.prototype.forEach.call(elements, function(el, i){
    src = el.getAttribute('src');

    var img = new Image();

    var width, height;

    img.onload = function(){
      var width = img.width;
      var height = img.height;

      var className = '';
      if (width > height) { className = 'is-landscape'; }
      if (width < height) { className = 'is-portrait'; }
      if (width == height) { className = 'is-square'; }

      if (el.classList) {
        el.classList.add(className);
      } else {
        el.className += ' ' + className;
      }
    }

    img.src = src;
  });
}

labelImageOrientation();
