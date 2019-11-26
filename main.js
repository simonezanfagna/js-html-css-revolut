$('.menu-drop span').click(function () {

  if ($(this).next('.drop').is(':visible')) {
    $(this).removeClass('color-active');
    $('.drop').hide();
  }
  else {
    $('.drop').hide();
    $('.menu-drop span').removeClass('color-active');
    $(this).addClass('color-active');
    $(this).next('.drop').toggle();
  }

});
