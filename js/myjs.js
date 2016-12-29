$(document).ready(function(){
      $('.p-slide').slick({
        dots: true
      });
    });

var previousScroll = 0;
var headerOrgOffset = $("header").height();

$(window).scroll(function(){
  var currentScroll = $(this).scrollTop();
  console.log(currentScroll);
  if(currentScroll > headerOrgOffset){
      if(currentScroll > previousScroll){
        $("header").slideUp();
      }else{
        $("header").slideDown();
      }
  }else{
    $("header").slideDown();
  }
  previousScroll = currentScroll;
});
