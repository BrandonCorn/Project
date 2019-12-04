function openNav() {
  document.getElementById("SideNav").style.width = "250px";
  document.getElementById("Main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "#D7CEC7";
}
function closeNav() {
  document.getElementById("SideNav").style.width = "0";
  document.getElementById("Main").style.marginLeft = "0";
  document.body.style.backgroundColor = "#D7CEC7";
}

$(function() {

  var $btn = $('#btnTop');
  var $home = $('#TopSection');
  var startpoint = $home.scrollTop() + $home.height();

  $(window).on('scroll', function() {
    if($(window).scrollTop() > startpoint) {
      $btn.show();
    } else {
      $btn.hide();
    }
  });
});
