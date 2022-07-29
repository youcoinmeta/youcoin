$(function() {
  // 导航跟随
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
  // 移动端点击展开收缩菜单
  $('#collapse1').on('click', function() {
    $('.my-navbar-collapse').stop().slideToggle()
  })
  // PC端鼠标悬浮菜单
  $('.options-btn-wrap').hover(function() {
    $(this).children('.menus-wrap').stop().fadeIn()
  }, function() {
    $(this).children('.menus-wrap').stop().fadeOut()
  })

  // 导航自适应
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
  // 页面动画效果
  AOS.init()
})()

$(function() {
  // 轮播
  var swiperNavs = $('.swiper-nav a')

  swiperNavs.on('click', function() {
    var index = $(this).parent().index()
    roadmapSwiper.slideToLoop(index)
  })

  var roadmapSwiper = new Swiper('.roadmap-swiper .swiper-container', {
    loop: true, // 循环模式选项
    autoHeight: true,
    autoplay: {
      delay: 20000,
      disableOnInteraction: false
    },
    // 如果需要前进后退按钮
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
