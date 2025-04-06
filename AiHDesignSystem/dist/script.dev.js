"use strict";

$(window).scroll(function (evt) {
  if ($(window).scrollTop() > 0) $(".navbar").removeClass("navbar-top");else $(".navbar").addClass("navbar-top");
});
var s = skrollr.init();
$(window).mousemove(function (evt) {
  console.log("(" + evt.pageX + "," + evt.pageY + ")");
  $(".mousesymbel").css("left", evt.pageX + "px").css("top", evt.pageY + "px");
});
$(".title2, .btn").click(function (evt) {
  console.log(this);
  var info = $(this).attr("info");
  $(".shownow").text(info);
});
$(function () {
  $(".btn.btn2").click(function () {
    $(window).scrollTop(800).animate("transitionDelay", "2000");
  });
});
$(function () {
  $(".btn.btn1").click(function () {
    $(window).scrollTop(2000).animate("transitionDelay", "2000");
  });
});
$(function () {
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop();
    console.log(scrollVal);

    if (scrollVal < 500) {
      $(".shownow").text("Lynn / Portfolio 2020");
    } else {
      $(".shownow").text("Works /");
    }
  });
}); 
$(".demo").twentytwenty({

  //  How much of the before image is visible when the page loads
  default_offset_pct: 0.5,

  // or vertical
  orientation: 'horizontal',

  // label text
  before_label: 'Before',
  after_label: 'After',

  // enable/disable overlay
  no_overlay: false,

  // move with handle
  move_with_handle_only: true,

  // click to move
  click_to_move: false
  
});  