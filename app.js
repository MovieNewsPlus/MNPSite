$(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 10) {
        $("header").css("background-position", "center " + (scroll/4) + "px");
      } else {
        $("header").css("background-position", "center 0px");
      }
    });
  });