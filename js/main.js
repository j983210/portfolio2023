$(document).ready(function () {
  let menu = $(".nav > li");
  let contents = $("#wrap > div");
  let quickMenu = $("#q_mn");
  let header = $(".header");
  let newHeader = $(".newHeader");
  let main = $('#main');
  let skillBtn = $('.skill_btn');

  let count = 0;

  $(".nav> li").click(function (event) {
    event.preventDefault();

    let tg = $(this);
    let i = tg.index();

    let section = $("#wrap > div").eq(i);
    let tt = section.offset().top;

    $("html, body").stop().animate({ scrollTop: tt });
  });

  // 화면 스크롤에 따른 이벤트
  $(window).scroll(function () {
    newHeader.removeClass("on");

    count = 0;

    let sct = $(window).scrollTop();
    let mainHeight = main.height();

    // 메인화면 이후에 header 요소 사라지게 하기
    if (sct >= mainHeight) {
      header.removeClass("on");
    } else {
      header.addClass("on");
    }

    // 화면 위치에 따른 메뉴에 색 변화 주기
    $(".contents").each(function () {
      let tg = $(this);
      let i = tg.index();
      if (tg.offset().top <= sct) {
        $(".newHeader > ul > li").removeClass("on");
        $(".newHeader > ul > li").eq(i).addClass("on");
      }
    });
  });

  // 퀵 메뉴 클릭 시 상단 메뉴바 나타내기
  quickMenu.click(function (e) {
    e.preventDefault();

    let sct = $(window).scrollTop();
    let mainHeight = main.height();

    // 메인화면의 높이에서 newHeader 요소 나타나지 않게 하기
    if (sct < mainHeight) {
      newHeader.removeClass("on");
    } else {
      header.removeClass("on");

      if (count == 0) {
        newHeader.addClass("on");
        count = 1;
      } else {
        newHeader.removeClass("on");
        count = 0;
      }
    }
  });

  // 모바일 버전에서 skill_btn 요소 클릭 시 하단에 내용 나타나게 하기
  skillBtn.click(function (e) {
    e.preventDefault();

    // 같은 버튼을 클릭하면 하단 내용 다시 사라지게 하기
    if ($(this).children('.my_skill_text').css('display') == 'block') {
      $(this).children('.my_skill_text').css({ display: 'none' });
    } else {
      skillBtn.children('.my_skill_text').css({ display: 'none' });
      $(this).children('.my_skill_text').css({ display: 'block' });
    }
  });
});
