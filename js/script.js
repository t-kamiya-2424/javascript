// header > nav
// ==================================================
$(function(){
    $('#nav-btn').on('click',function(){
        $(this).toggleClass('-active');
        $('#nav').toggleClass('-active');
    });
});

$('.menu').hover(
    function() {
      //クラス名「open」を付与する
      $(this).children('.dropdown-menu').addClass('open');
      //hoverが外れた場合
    }, function() {
      //クラス名「open」を取り除く
      $(this).children('.dropdown-menu').removeClass('open');
    }
  );

//スクロール
window.addEventListener("scroll", function(){
    var header = document.querySelector(".header-fixed");
    header.classList.toggle('scroll', window.scrollY > 0)
});