$(window).scroll(function(evt){
  if ($(window).scrollTop()>0)
    $(".navbar").removeClass("navbar-top");
  else
      $(".navbar").addClass("navbar-top");
});

var s = skrollr.init();


$(window).mousemove(function(evt){
   console.log("("+evt.pageX+","+evt.pageY+")")
   $(".mousesymbel")
     .css("left",evt.pageX+"px")
     .css("top",evt.pageY+"px")
});

$(".title2, .btn").click(function(evt){
  console.log(this)
  var info = $(this).attr("info")
  $(".shownow").text(info)
});

$(function(){
  $(".btn.btn2").click(function(){
  $(window).scrollTop(800)
    .animate("transitionDelay","2000")
           
  })
})

$(function(){
  $(".btn.btn1").click(function(){
  $(window).scrollTop(2000)
    .animate("transitionDelay","2000")
           
  })
})


$(function(){
  $(window).scroll(function () {
    var scrollVal = $(this).scrollTop()
    console.log(scrollVal)
    if(scrollVal < 500){
      $(".shownow").text("Lynn / Portfolio 2020")
    }
    else{
      $(".shownow").text("Works /")
    }
  })
  });



// $(window).scroll(function(evt){
//   if ($(window).scrollTop()=300){
//     $(window).scrollTop(800);
//   }
  
// });

// $(document).ready(function() {
//   $(".btn2").click(function() {
//     $("html, body").animate({
//       scrollTop: $(".btn2").offset().top }, {duration: 500,easing: "swing"});
//     return false;
//   });