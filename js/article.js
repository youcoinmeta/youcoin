$(function() {
  $.sidebarMenu($('.sidebar-menu'))

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

  // 导航粘性定位
  // $('.side-menu .menus').positionSticky()
})