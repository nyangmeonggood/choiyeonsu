export const SeparateText = (target, text, type, random) => {
  var $target = document.getElementById(target);
  var $index;

  for (var i = 0; i < text.length; i++) {
    var $word = document.createElement(type);
    if (!random) {
      $index = i + 1;
    } else {
      $index = Math.floor(Math.random() * text.length) + 1;
    }
    $word.style.setProperty("--i", $index);
    $word.dataset.delay = $index;
    $word.innerHTML = text.charAt(i);
    $target.appendChild($word);
  }
};
