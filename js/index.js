$(function() {

  $('#nav').onePageNav({
    changeHash: true,
    filter: ':not(.external)',
    begin: function() {
      if (window.innerWidth < 768) {
        $('.my-navbar-collapse').slideUp()
      }
    }
  })
  setTimeout(function() {
    document.documentElement.scrollTop += 1
    document.body.scrollTop += 1
  }, 1)

  $('#collapse1').on('click', function() {
    $('.my-navbar-collapse').stop().slideToggle()
  })

  $('.options-btn-wrap').hover(function() {
    $(this).children('.menus-wrap').stop().fadeIn()
  }, function() {
    $(this).children('.menus-wrap').stop().fadeOut()
  })


  $(window).on('resize', setNavContainer)
  setNavContainer()
  function setNavContainer() {
    if (window.innerWidth >= 992) {
      $('.navbar > div').addClass('container').removeClass('container-fluid')
    } else {
      $('.navbar > div').addClass('container-fluid').removeClass('container')
    }
  }
})

;(function() {

  AOS.init()
})()

$(function() {

  var swiperNavs = $('.swiper-nav a')

  swiperNavs.on('click', function() {
    var index = $(this).parent().index()
    roadmapSwiper.slideToLoop(index)
  })

  var roadmapSwiper = new Swiper('.roadmap-swiper .swiper-container', {
    loop: true, 
    autoHeight: true,
    autoplay: {
      delay: 20000,
      disableOnInteraction: false
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on:{
      slideChangeTransitionStart: function(){
        swiperNavs.eq(this.realIndex)
          .addClass('active')
          .parent()
          .siblings()
          .children()
          .removeClass('active')
      }
    }
  })
  roadmapSwiper.el.onmouseover = function(){
    roadmapSwiper.autoplay.stop()
  }
  roadmapSwiper.el.onmouseout = function(){
    roadmapSwiper.autoplay.start()
  }
})