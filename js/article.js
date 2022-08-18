$(function() {
  $.sidebarMenu($('.sidebar-menu'))


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


  // $('.side-menu .menus').positionSticky()
})