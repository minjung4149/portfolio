$(function () {
  $(window).scroll(function () {
    let currentSCT = $(this).scrollTop(); //스크롤 양
    let abilityPointOST = $("#ability_point").offset().top;
    let abilityPoint = $("#ability_point ul");
    console.log("test");
    if (abilityPointOST - 700 < currentSCT) {
      abilityPoint.addClass("active");
    }
  }); //scroll event END

  accordionToggle();
  backToTop();
  lottieAni();
  mobileMenu();
  menuClick();
});

//역량 아코디언 효과
function accordionToggle() {
  let ability_tt = $("#ability_basic .tt_line");
  ability_tt.click(function () {
    $(this).parent().toggleClass("on");

    // 1. 열려있는 상태에서 다른 탭 클릭하였을때
    if ($(this).parent().hasClass("on")) {
      // 1-1. 다른 열려있는 탭 비활성화 처리
      ability_tt.parent().removeClass("on");
      ability_tt.find("img").attr("src", "img/arrow_down.svg");
      ability_tt.next().slideUp();

      // 1-2 클릭한 탭 활성화 처리
      $(this).parent().addClass("on");
      $(this).find("img").attr("src", "img/arrow_up.svg");
      $(this).next().slideDown();
    } else {
      // 2. 현재 열려있는 동일한 탭 클릭 하였을때
      $(this).find("img").attr("src", "img/arrow_down.svg");
      $(this).next().slideUp();
    }
  });
}

//최상단이동 버튼
function backToTop() {
  let $window = $(window);
  $window.scroll(function () {
    if ($(this).scrollTop() > 500) {
      $("#back-to-top").addClass("visible");
    } else {
      $("#back-to-top").removeClass("visible");
    }
  });

  $("#back-to-top").click(function (e) {
    e.preventDefault();

    $("html, body").animate({ scrollTop: 0 }, 700);
  });
}

//로티 에니메이션
function lottieAni() {
  var lottieAni = bodymovin.loadAnimation({
    container: document.getElementById("lottie-pop"), // 필수, 애니메이션 들어가는 곳
    // path: "https://dev.anthonyfessy.com/check.json",
    renderer: "svg", // 필수
    loop: true, // 반복재생
    autoplay: true, // 자동재생
    animationData: {
      nm: "Comp 1",
      ddd: 0,
      h: 900,
      w: 900,
      meta: { g: "@lottiefiles/toolkit-js 0.25.4" },
      layers: [
        {
          ty: 4,
          nm: "Layer 2 Outlines",
          sr: 1,
          st: 0,
          op: 48,
          ip: 0,
          hd: false,
          ddd: 0,
          bm: 0,
          hasMask: false,
          ao: 0,
          ks: {
            a: { a: 0, k: [132.5, 74.5, 0], ix: 1 },
            s: { a: 0, k: [100, 100, 100], ix: 6 },
            sk: { a: 0, k: 0 },
            p: {
              a: 1,
              k: [
                {
                  o: { x: 1, y: 0 },
                  i: { x: 0.73, y: 1 },
                  s: [449.5, 446, 0],
                  t: 0,
                  ti: [0, 0, 0],
                  to: [0, -10.667, 0],
                },
                {
                  o: { x: 1, y: 0 },
                  i: { x: 0.73, y: 1 },
                  s: [449.5, 382, 0],
                  t: 24,
                  ti: [0, 0, 0],
                  to: [0, 0, 0],
                },
                {
                  o: { x: 1, y: 0 },
                  i: { x: 0.833, y: 0.83 },
                  s: [449.5, 446, 0],
                  t: 47,
                  ti: [0, 0, 0],
                  to: [0, 0, 0],
                },
                {
                  o: { x: 0.167, y: 0.163 },
                  i: { x: 0.833, y: 0.833 },
                  s: [449.5, 382, 0],
                  t: 71,
                  ti: [0, -10.667, 0],
                  to: [0, 0, 0],
                },
                { s: [449.5, 446, 0], t: 94 },
              ],
              ix: 2,
            },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: { a: 0, k: 100, ix: 11 },
          },
          ef: [
            {
              ty: 0,
              mn: "ADBE Slider Control",
              nm: "Position - Stretch",
              ix: 1,
              en: 1,
              ef: [
                {
                  ty: 0,
                  mn: "ADBE Slider Control-0001",
                  nm: "Slider",
                  ix: 1,
                  v: { a: 0, k: 60, ix: 1 },
                },
              ],
            },
            {
              ty: 0,
              mn: "ADBE Slider Control",
              nm: "Position - Gravity",
              ix: 2,
              en: 1,
              ef: [
                {
                  ty: 0,
                  mn: "ADBE Slider Control-0001",
                  nm: "Slider",
                  ix: 1,
                  v: { a: 0, k: 8, ix: 1 },
                },
              ],
            },
            {
              ty: 0,
              mn: "ADBE Slider Control",
              nm: "Position - Max Jumps",
              ix: 3,
              en: 1,
              ef: [
                {
                  ty: 0,
                  mn: "ADBE Slider Control-0001",
                  nm: "Slider",
                  ix: 1,
                  v: { a: 0, k: 8, ix: 1 },
                },
              ],
            },
            {
              ty: 0,
              mn: "ADBE Checkbox Control",
              nm: "Position - Jump In/Out",
              ix: 4,
              en: 1,
              ef: [
                {
                  ty: 7,
                  mn: "ADBE Checkbox Control-0001",
                  nm: "Checkbox",
                  ix: 1,
                  v: { a: 0, k: 0, ix: 1 },
                },
              ],
            },
          ],
          shapes: [
            {
              ty: "gr",
              bm: 0,
              hd: false,
              mn: "ADBE Vector Group",
              nm: "Group 1",
              ix: 1,
              cix: 2,
              np: 2,
              it: [
                {
                  ty: "sh",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Shape - Group",
                  nm: "Path 1",
                  ix: 1,
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      c: false,
                      i: [
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [58.748, 58.694],
                        [-58.748, -58.694],
                      ],
                    },
                    ix: 2,
                  },
                },
                {
                  ty: "st",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Graphic - Stroke",
                  nm: "Stroke 1",
                  lc: 2,
                  lj: 1,
                  ml: 10,
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 30, ix: 5 },
                  c: { a: 0, k: [0.9882, 0.3333, 0.0588], ix: 3 },
                },
                {
                  ty: "tr",
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  sk: { a: 0, k: 0, ix: 4 },
                  p: { a: 0, k: [191.177, 74.399], ix: 2 },
                  r: { a: 0, k: 0, ix: 6 },
                  sa: { a: 0, k: 0, ix: 5 },
                  o: { a: 0, k: 100, ix: 7 },
                },
              ],
            },
            {
              ty: "gr",
              bm: 0,
              hd: false,
              mn: "ADBE Vector Group",
              nm: "Group 2",
              ix: 2,
              cix: 2,
              np: 2,
              it: [
                {
                  ty: "sh",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Shape - Group",
                  nm: "Path 1",
                  ix: 1,
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      c: false,
                      i: [
                        [0, 0],
                        [0, 0],
                      ],
                      o: [
                        [0, 0],
                        [0, 0],
                      ],
                      v: [
                        [-58.677, 58.677],
                        [58.677, -58.677],
                      ],
                    },
                    ix: 2,
                  },
                },
                {
                  ty: "st",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Graphic - Stroke",
                  nm: "Stroke 1",
                  lc: 2,
                  lj: 1,
                  ml: 10,
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 30, ix: 5 },
                  c: { a: 0, k: [0.9882, 0.3333, 0.0588], ix: 3 },
                },
                {
                  ty: "tr",
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  sk: { a: 0, k: 0, ix: 4 },
                  p: { a: 0, k: [73.751, 74.382], ix: 2 },
                  r: { a: 0, k: 0, ix: 6 },
                  sa: { a: 0, k: 0, ix: 5 },
                  o: { a: 0, k: 100, ix: 7 },
                },
              ],
            },
          ],
          ind: 1,
        },
        {
          ty: 4,
          nm: "Layer 4 Outlines",
          sr: 1,
          st: 0,
          op: 48,
          ip: 0,
          hd: false,
          ddd: 0,
          bm: 0,
          hasMask: false,
          ao: 0,
          ks: {
            a: { a: 0, k: [293.5, 293.5, 0], ix: 1 },
            s: { a: 0, k: [103.222, 103.222, 100], ix: 6 },
            sk: { a: 0, k: 0 },
            p: { a: 0, k: [449.5, 446, 0], ix: 2 },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: { a: 0, k: 100, ix: 11 },
          },
          ef: [],
          shapes: [
            {
              ty: "gr",
              bm: 0,
              hd: false,
              mn: "ADBE Vector Group",
              nm: "Group 1",
              ix: 1,
              cix: 2,
              np: 2,
              it: [
                {
                  ty: "sh",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Shape - Group",
                  nm: "Path 1",
                  ix: 1,
                  d: 1,
                  ks: {
                    a: 0,
                    k: {
                      c: true,
                      i: [
                        [0, 137.136],
                        [137.136, 0],
                        [0, -137.136],
                        [-137.136, 0],
                      ],
                      o: [
                        [0, -137.136],
                        [-137.136, 0],
                        [0, 137.136],
                        [137.136, 0],
                      ],
                      v: [
                        [248.307, 0],
                        [0, -248.307],
                        [-248.307, 0],
                        [0, 248.307],
                      ],
                    },
                    ix: 2,
                  },
                },
                {
                  ty: "st",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Graphic - Stroke",
                  nm: "Stroke 1",
                  lc: 1,
                  lj: 1,
                  ml: 10,
                  o: { a: 0, k: 100, ix: 4 },
                  w: { a: 0, k: 18, ix: 5 },
                  c: { a: 0, k: [1, 0.898, 0.8549], ix: 3 },
                },
                {
                  ty: "tr",
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: { a: 0, k: [100, 100], ix: 3 },
                  sk: { a: 0, k: 0, ix: 4 },
                  p: { a: 0, k: [293.5, 293.4], ix: 2 },
                  r: { a: 0, k: 0, ix: 6 },
                  sa: { a: 0, k: 0, ix: 5 },
                  o: { a: 0, k: 100, ix: 7 },
                },
              ],
            },
          ],
          ind: 2,
        },
        {
          ty: 4,
          nm: "Shape Layer 1",
          sr: 1,
          st: 0,
          op: 48,
          ip: 0,
          hd: false,
          ddd: 0,
          bm: 0,
          hasMask: false,
          ao: 0,
          ks: {
            a: { a: 0, k: [0, 0, 0], ix: 1 },
            s: { a: 0, k: [121.002, 121.002, 100], ix: 6 },
            sk: { a: 0, k: 0 },
            p: { a: 0, k: [450, 450, 0], ix: 2 },
            r: { a: 0, k: 0, ix: 10 },
            sa: { a: 0, k: 0 },
            o: { a: 0, k: 100, ix: 11 },
          },
          ef: [],
          shapes: [
            {
              ty: "gr",
              bm: 0,
              hd: false,
              mn: "ADBE Vector Group",
              nm: "Ellipse 1",
              ix: 1,
              cix: 2,
              np: 3,
              it: [
                {
                  ty: "el",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Shape - Ellipse",
                  nm: "Ellipse Path 1",
                  d: 1,
                  p: { a: 0, k: [0, 0], ix: 3 },
                  s: { a: 0, k: [428, 428], ix: 2 },
                },
                {
                  ty: "st",
                  bm: 0,
                  hd: false,
                  mn: "ADBE Vector Graphic - Stroke",
                  nm: "Stroke 1",
                  lc: 1,
                  lj: 1,
                  ml: 4,
                  o: {
                    a: 1,
                    k: [
                      {
                        o: { x: 0.167, y: 0.167 },
                        i: { x: 0.833, y: 0.833 },
                        s: [100],
                        t: 22,
                      },
                      { s: [0], t: 46 },
                    ],
                    ix: 4,
                  },
                  w: {
                    a: 1,
                    k: [
                      {
                        o: { x: 0.167, y: 0.167 },
                        i: { x: 0.833, y: 0.833 },
                        s: [3],
                        t: 22,
                      },
                      { s: [25], t: 46 },
                    ],
                    ix: 5,
                  },
                  c: { a: 0, k: [0.9882, 0.3333, 0.0588], ix: 3 },
                },
                {
                  ty: "tr",
                  a: { a: 0, k: [0, 0], ix: 1 },
                  s: {
                    a: 1,
                    k: [
                      {
                        o: { x: 0.167, y: 0.167 },
                        i: { x: 0.833, y: 0.833 },
                        s: [100, 100],
                        t: 22,
                      },
                      { s: [137, 137], t: 46 },
                    ],
                    ix: 3,
                  },
                  sk: { a: 0, k: 0, ix: 4 },
                  p: { a: 0, k: [-2, -4.5], ix: 2 },
                  r: { a: 0, k: 0, ix: 6 },
                  sa: { a: 0, k: 0, ix: 5 },
                  o: { a: 0, k: 100, ix: 7 },
                },
              ],
            },
          ],
          ind: 3,
        },
      ],
      v: "5.6.4",
      fr: 24,
      op: 48,
      ip: 0,
      assets: [],
    },
  });
}

//메뉴 클릭이벤트
function menuClick() {
  let topMenu = $("nav ul li");
  topMenu.click(function () {
    switch (this.innerHTML) {
      case "About":
        $("html").animate({ scrollTop: 0 }, 500);
        break;
      case "Skill":
        $("html").animate({ scrollTop: $("#skill").offset().top }, 500);
        break;
      case "Work":
        $("html").animate({ scrollTop: $("#work").offset().top - 75 }, 500);
        break;
      case "Contact":
        $("html").animate({ scrollTop: $("#contact").offset().top }, 500);
        break;
    }

    topMenu.removeClass("on");
    $(this).addClass("on");
  });
}

//햄버거 메뉴
function mobileMenu() {
  let mobile_menuBtn = $(".mobile_menu");
  mobile_menuBtn.click(function () {
    if ($(".effect").hasClass("on")) {
      $(".effect").removeClass("on");
      $(".mobile_nav").slideUp();
    } else {
      $(".effect").addClass("on");
      $(".mobile_nav").slideDown();
    }
  });

  let mobile_menu = $(".mobile_nav li");
  mobile_menu.click(function () {
    setTimeout(() => {
      $(".effect").removeClass("on");
      $(".mobile_nav").slideUp();
    }, 200);
  });
}
