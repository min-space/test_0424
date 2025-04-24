$(document).ready(function(){

  $('#fullpage').fullpage({
    menu: '.gnb',
    anchors: ['menu1', 'menu2', 'menu3', 'menu4'],

    navigation: true,
    navigationPosition: 'left',
    navigationTooltips: ['SINSIWAY', 'Solution', 'Busniness', 'Partner'],
    showActiveTooltip: true,
    autoScrolling: true,
    responsiveWidth: 1024,

    onLeave: function (origin, destination, direction, trigger) {
        if (destination == 2 || destination == 4) {
            $("header, #fp-nav").addClass("active");
        } else {
            $("header, #fp-nav").removeClass("active");
        }

        if (destination == 5) {
            $("header, #fp-nav").fadeOut();
        } else {
            $("header, #fp-nav").fadeIn();
        }
      }
    });


    // 모바일 메뉴
    $(".ham").click(function () {
      $(this).toggleClass("active");
      $(".mgnb_wrap").fadeToggle();
      $("body").toggleClass("active");


      let txt = $(this).text();
      if (txt == "메뉴보기") {
          $(this).text("메뉴닫기");
      } else {
          $(this).text("메뉴보기");
      }
    });


    const solution_list = new Swiper(".solution_list", {
      breakpoints: {
          0: {
              slidesPerView: 1.5,
              spaceBetween: 10,
          },
          768: {
              slidesPerView: 2.5,
              spaceBetween: 10,
          },
          1600: {
              slidesPerView: 3.5,
              spaceBetween: 10,
          },
      },
    });



    const partner_list = new Swiper(".partner_list", {
      breakpoints: {
          0: {
              slidesPerView: 2.5,
              spaceBetween: 20,
          },
          574: {
              slidesPerView: 4,
              spaceBetween: 30,
          },
          1024: {
              slidesPerView: 6,
              spaceBetween: 40,
          },
          1500: {
              slidesPerView: 8,
              spaceBetween: 50,
          },
      },
      autoplay: {
          delay: 0,
          disableOnInteraction: false,
      },
      speed: 6000,
      loop: true,
    });


});