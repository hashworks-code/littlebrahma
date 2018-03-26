$(document).ready(function() {
    // $('#fullpage').fullpage({
    //     scrollBar:true
    // });
    $('.dicContents .title').clone().prependTo(".imgContainer").addClass("hckTitle");
    newFunction();
});

function newFunction() {
  var lastScrollTop = 0;
  var deg = 0;
  var leftMove = 50;
  var leftM = $('.fixCont img').position().left;
  var count = 0;
  var orig = 0;
  orig = $('.fixCont').offset().left + ($('.fixCont').width() / 2);
  $(window).scroll(function () {
    var visited = false;
    var st = $(this).scrollTop();
    if ($(window).scrollTop()+80 >= $(".scrollContainer").offset().top) {
      // deg = (deg + (st - lastScrollTop));
      $('.fixCont').addClass('fixedClass');
      if (st > lastScrollTop) {
        if(($(window).scrollTop() + $(window).height()) >= $('.rContent_1').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_2').offset().top+200)){
          // console.log("r1")
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1.5s" });
          if($(window).width() > 1024){
              setTimeout(function(){
                $('.prct .rContent_1').css({visibility:"visible"}).fadeIn();
              },500)
          }
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_2').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_3').offset().top+200)){
          // console.log("r2")
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1.5s"});
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_3').offset().top){
          // console.log("r3");
          $('.fixCont img').css({ transform: 'rotate(210deg)' });
        }
      }
      else {
        // $('.fixCont img').css({ transform: 'rotate(' + deg + 'deg)' });
        if(($(window).scrollTop() + $(window).height()) >= $('.rContent_1').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_2').offset().top+200)){
          // console.log("r1")
          $('.fixCont img').css({ transform: 'rotate(-32deg)',transition: "all 1.5s" });
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_2').offset().top && (($(window).scrollTop() + $(window).height()) < $('.rContent_3').offset().top+200)){
          // console.log("r2")
          $('.fixCont img').css({ transform: 'rotate(90deg)',transition: "all 1.5s"});
        }
        else if(($(window).scrollTop() + $(window).height()) >= $('.rContent_3').offset().top){
          // console.log("r3");
          $('.fixCont img').css({ transform: 'rotate(210deg)' })
        }
      }
    }
    else {
      $(".fixCont").removeClass("fixedClass");
      if($(window).width() > 1024){
        $('.prct .rContent_1').css("visibility","hidden"); 
      }
    //   if($(window).scrollTop()+80 < $(".scrollContainer").offset().top){
    //     if (st < lastScrollTop) {
    //         $('.prct .rContent_1').css("visibility","hidden");
    //     }
    //   }
    //   $('.prct .rContent_1').css("visibility","visible");
    }

    if($(window).scrollTop() + $(window).height() >= $('.strategy_container').offset().top){
    //   console.log('posAbs')
      $('.fixCont').addClass("posAbs");
    }
    else{
      $('.fixCont').removeClass("posAbs");      
    }
    lastScrollTop = st;
  });
}
