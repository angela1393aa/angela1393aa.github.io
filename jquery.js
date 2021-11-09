// aos
AOS.init();
// 漢堡選單
$("#menu").on("click", function () {
  $("nav").toggle();
});
// 彈跳視窗
$(".btn-close").on("click", function () {
  $(".fix").fadeOut();
});
// QA開關
$(".Q-1").on("click", function () {
  $(".A-1").slideToggle();
});
$(".Q0").on("click", function () {
  $(".A0").slideToggle();
});
$(".Q1").on("click", function () {
  $(".A1").slideToggle();
});
$(".Q2").on("click", function () {
  $(".A2").slideToggle();
});
$(".Q3").on("click", function () {
  $(".A3").slideToggle();
});
$(".Q4").on("click", function () {
  $(".A4").slideToggle();
});
// 首頁輪播圖
var slide = 0;
var sliderWidth = 600;
var slideCount = 4; //取得陣列長度
//timer
var autoSlide = setInterval(slideTimer, 3000);

function slideTimer() {
  slide = slide >= slideCount - 1 ? 0 : slide + 1;
  goSlider(slide);
}
$(".slides").hover(
  function () {
    clearInterval(autoSlide);
  },
  function () {
    autoSlide = setInterval(slideTimer, 3000);
  }
);
