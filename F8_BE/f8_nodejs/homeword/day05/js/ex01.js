window.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector("#karaokeContainer");
  var lyricsElement = container.querySelector("#lyrics");
  var lyrics = lyricsElement.innerText;
  var words = lyrics.split(" ");
  var currentIndex = 0;

  function highlightNextWord() {
    if (currentIndex >= words.length) {
      return;
    }

    var word = words[currentIndex];
    var wordHighlight = '<span class="highlight">' + word + "</span>";
    words[currentIndex] = wordHighlight;
    lyricsElement.innerHTML = words.join(" ");

    currentIndex++;

    setTimeout(function () {
      var prevWordIndex = currentIndex - 1;
      var prevWord = words[prevWordIndex];
      var prevWordWithoutHighlight = prevWord
        .replace('<span class="highlight">', "")
        .replace("</span>", "");
      words[prevWordIndex] = prevWordWithoutHighlight;
      lyricsElement.innerHTML = words.join(" ");

      if (currentIndex < words.length) {
        setTimeout(highlightNextWord, 1000);
      }
    }, 1000);
  }

  setTimeout(highlightNextWord, 1000);
});
