var content = document.getElementById("content");
var newText = document.getElementById("new-text");

window.addEventListener("scroll", function() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > 0) {
    requestAnimationFrame(function() {
      var opacity = Math.min(1, scrollTop / 500);
      content.style.backgroundColor = "rgba(255, 255, 255, " + opacity + ")";
      newText.style.opacity = opacity;
      content.style.top = -scrollTop + "px";
    });
  }
});
