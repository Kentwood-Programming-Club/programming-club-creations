function resize() {
  /*let max_width = 0;
  $.each($('.button'), function() {
    let width = $(this).width();
    if(width > max_width) {
      max_width = width;
    }
  });
  $('.button').width(max_width);*/
  /*if($(window).width() < 992) {
    $('#responsive-buttons').addClass('btn-group-vertical');
  }
  else {
    $('#responsive-buttons').removeClass('btn-group-vertical');
  }*/
  if($(window).width() <= 1250) {
    let fontSize = 100 - ($(window).width() * 0.8);
    $('.main').css('font-size', fontSize);
  }
  if($(window).width() < 992) {
    $('#home').addClass('center-all');
  }
  else {
    $('#home').removeClass('center-all');
  }
}

$(document).ready(function() {
  resize();
});

$(window).on('resize', function() {
  resize();
});

$(function(){
  // mobile menu slide from the left
  $('[data-toggle="collapse"]').on('click', function() {
    let navMenuCont = $($(this).data('target'));
    navMenuCont.animate({'width':'toggle'}, 500);
  });
})
