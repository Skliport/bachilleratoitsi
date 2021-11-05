// Custom
$(function() {
  var $typed = $("#typed");
  $typed.typed({
    strings: [$typed.text()],
    typeSpeed: 50,
    startDelay: 1000
  });
});