
jQuery(function ($) {
  //збільшення margin-bottom для submenu_link при наведенні
  $('.submenu_link').hover(
    function () {
      $(this).append($('.submenu_link').css("margin-bottom", "150px"));
    },
    function () {
      $(this).find($('.submenu_link').css("margin-bottom", "0px"));
    }
  );

  $('.submenu').hover(
    function () {
      $('.submenu_link').append($('.submenu_link').css("margin-bottom", "150px"));
    },
    function () {
      $('.submenu_link').find($('.submenu_link').css("margin-bottom", "0px"));
    }
  );
  //збільшення margin-bottom для submenu_link
});

function secrets_button() {
  window.location.href = "bіlbord.html"
}