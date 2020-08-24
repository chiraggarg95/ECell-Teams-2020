
(function() {
    var active, active1, func1, interval, nxt, prv, teX, teY, transit_down, transit_up, try1, try2, tsX, tsY;
  
    active = 0;
  
    active1 = 1;
  
    $('#nav-button').click(function() {
      var count;
      $('#main-menu').css('display');
      $('#main-menu').css('display', 'block');
      $('#main-menu').css('opacity');
      $('#main-menu').css('opacity', '1');
      $('#nav-button-exit').css('opacity');
      $('#nav-button-exit').css('opacity', '1');
      $('#ecell-logo').css('filter');
      count = 0;
      return $('#main-menu li a').each(function() {
        var $t, fun;
        count++;
        $t = $(this);
        fun = function() {
          $t.css('opacity');
          $t.css('transform');
          $t.css('opacity', '1');
          return $t.css('transform', 'none');
        };
        return setTimeout(fun, count * 150);
      });
    });
  
    $('#nav-button-exit').click(function() {
      var count, fun, fun2;
      count = 0;
      $('#main-menu li a').each(function() {
        var $t, fun;
        $t = $(this);
        fun = function() {
          $t.css('opacity');
          $t.css('transform');
          $t.css('opacity', '0');
          return $t.css('transform', 'scale(0.5)');
        };
        setTimeout(fun, count * 150);
        return count++;
      });
      fun = function() {
        $('#main-menu').css('opacity');
        $('#main-menu').css('opacity', '0');
        $('#nav-button-exit').css('opacity');
        return $('#nav-button-exit').css('opacity', '0');
      };
      fun2 = function() {
        return $('#main-menu').css('display', 'none');
      };
      setTimeout(fun, (count - 5) * 150);
      return setTimeout(fun2, count * 150);
    });
  
    $('.navlink').hover(function() {
      var left, n, n1, n2, right, width;
      n = parseInt($(this).attr('id').slice(-1));
      n1 = n >= active ? active : n;
      n2 = n + active - n1;
      left = $('#navlink' + n1.toString()).offset().left;
      right = $('#navlink' + n2.toString()).offset().left + parseInt($('#navlink' + n2.toString()).css('width'));
      width = right - left;
      if ($(window).width() > 750) {
        return $('#underline').css('left', left.toString() + 'px').css('width', width.toString() + 'px');
      }
    }, function() {
      var left, width;
      left = $('#navlink' + active.toString()).offset().left;
      width = $('#navlink' + active.toString()).css('width');
      return $('#underline').css('left', left.toString() + 'px').css('width', width);
    });
  
    transit_up = function() {
      $('#plane1, #plane2, #plane3').css('top', 'calc(100vh + 20px)');
      $('#plane1').animate({
        top: (-$(window).height() - 80).toString() + 'px'
      }, 1000, 'swing');
      $('#plane2').animate({
        top: (-$(window).height() - 80).toString() + 'px'
      }, 1500, 'swing');
      return $('#plane3').animate({
        top: (-$(window).height() - 80).toString() + 'px'
      }, 2000, 'swing');
    };
  
    transit_down = function() {
      $('#plane1, #plane2, #plane3').css('top', '-100vh');
      $('#plane1').animate({
        top: ($(window).height() + 80).toString() + 'px'
      }, 1000, 'swing');
      $('#plane2').animate({
        top: ($(window).height() + 80).toString() + 'px'
      }, 1500, 'swing');
      return $('#plane3').animate({
        top: ($(window).height() + 80).toString() + 'px'
      }, 2000, 'swing');
    };
  
    //tries = 0
    //top = $('#section1').offset().top
    //bottom = top + parseInt($('#section1').css('height')) - $(window).height() + 50
  
    //$(document).scrollTop($('#section1').offset().top)
  
    //$(document).on('scroll'
    //->
    //  if tries > 50
    //    $('#navlink2').trigger('click')
    //  else if $(document).scrollTop() > bottom
    //    $(document).scrollTop(bottom)
    //    tries++
    //)
  
    $('#section' + active.toString()).css('display', 'block').css('opacity', '1');
  
    if ($(window).width() < 750) {
      $('.navlink').parent().css('display', 'none');
      $('#navlink' + active.toString()).css('display', 'block').parent().css('display', 'table-cell');
    } else {
      $('.navlink').css('display', 'block');
    }
  
    $(window).resize(function() {
      if ($(window).width() < 750) {
        $('.navlink').parent().css('display', 'none');
        return $('#navlink' + active.toString()).css('display', 'block').parent().css('display', 'table-cell');
      } else {
        return $('.navlink').css('display', 'block');
      }
    });
  
    
    //prv = Math.min(active - 1, 1)
    //nxt = Math.max(active + 1, 4)
  
    //limit_scroll = () ->
    //  top = $('#section' + active.toString()).offset().top - 300
    //  bottom = top + parseInt($('#section' + active.toString()).css('height')) - $(window).height() + 340
    //  $(document).scrollTop(top)
    //  $(document).on('scroll'
    //  ->
    //    if $(document).scrollTop() < top
    //      $('#navlink2').trigger('click');
    //    else if $(document).scrollTop() > bottom
    //      $('#navlink1').trigger('click');
    //  )
  
    //limit_scroll()
    nxt = active + 1;
  
    prv = active - 1;
  
    try1 = 0;
  
    try2 = 0;
  
    func1 = function(e) {
      if ($(document).data('scrolling') === '1') {
        return;
      }
      if (typeof e.originalEvent.detail === 'number' && e.originalEvent.detail !== 0) {
        if (e.originalEvent.detail > 0) {
          try2 += 1;
          try1 = 0;
        } else if (e.originalEvent.detail < 0) {
          try1 += 1;
          try2 = 0;
        }
      } else if (typeof e.originalEvent.wheelDelta === 'number') {
        if (e.originalEvent.wheelDelta < 0) {
          try2 += 1;
          try1 = 0;
        } else if (e.originalEvent.wheelDelta > 0) {
          try1 += 1;
          try2 = 0;
        }
      }
      if (try1 >= 2 && active > 0) {
        $('#navlink' + (active - 1).toString()).trigger('click');
      }
      if (try2 >= 2 && active < 10) {
        return $('#navlink' + (active + 1).toString()).trigger('click');
      }
    };
  
    $('body').on('wheel', func1);
  
    tsY = 0;
  
    teY = 0;
  
    tsX = 0;
  
    teX = 0;
  
    $(document).bind('touchstart', function(e) {
      tsY = e.originalEvent.touches[0].clientY;
      return tsX = e.originalEvent.touches[0].clientX;
    });
  
    $(document).bind('touchend', function(e) {
      if ($(document).data('scrolling') === '1') {
        return;
      }
      teY = e.originalEvent.changedTouches[0].clientY;
      teX = e.originalEvent.changedTouches[0].clientX;
      if ((tsY > teY + 70) && active < 10) {
        return $('#navlink' + (active + 1).toString()).trigger('click');
      } else if ((tsY < teY - 70) && active > 0) {
        return $('#navlink' + (active - 1).toString()).trigger('click');
      } else {
        if (tsX > teX + 70) {
          return $('#right').trigger('click');
        } else if (tsX < teX - 70) {
          return $('#left').trigger('click');
        }
      }
    });
  
    //$(document).on('wheel'
    //  (e) ->
    //    if $(document).data('scrolling') == '1'
    //      return
    //    s = $(document).scrollTop()
    //    if try1 <= 49 && s <= top
    //      try1 += 1
    //      $(document).scrollTop(top)
    //    else if try2 <= 49 && s >= bottom
    //      try2 += 1
    //      $(document).scrollTop(bottom)
  
    //    if (try2 >= 50)
    //      $('#navlink' + (Math.min(4, nxt)).toString()).trigger('click')
    //    else if (try1 >= 50)
    //      $('#navlink' + (Math.max(0, prv)).toString()).trigger('click')
    //)
  
    $('body').on('mousewheel', function(e) {
      if (typeof e.originalEvent.detail === 'number' && e.originalEvent.detail !== 0) {
        if (e.originalEvent.detail > 0) {
          return console.log('Down');
        } else if (e.originalEvent.detail < 0) {
          return console.log('Up');
        }
      } else if (typeof e.originalEvent.wheelDelta === 'number') {
        if (e.originalEvent.wheelDelta < 0) {
          return console.log('Down');
        } else if (e.originalEvent.wheelDelta > 0) {
          return console.log('Up');
        }
      }
    });
  
    $('.navlink').click(function(e) {
      var d, direction, id, left, width;
      e.preventDefault();
      if ($(document).data('scrolling') === '1') {
        return;
      }
      $('.card').css('transition', '1s all');
      $(document).data('scrolling', '1');
      $('.navlink').css('cursor', 'default');
      id = parseInt($(this).attr('id').slice(-1));
      console.log(active, id);
      if (id !== active) {
        direction = id > active ? 1 : -1;
        d = direction * 200;
        $('#section' + active.toString()).find('.card').css('opacity', '0').css('transform', 'translateY(' + (-d).toString() + 'px)');
        $('#section' + id.toString()).find('.card').css('transform');
        $('#section' + id.toString()).find('.card').css('opacity');
        $('#section' + id.toString()).find('.card').css('opacity', '0');
        $('#section' + id.toString()).css('z-index', 2);
        $('#section' + active.toString()).css('z-index', 1);
        $('#section' + id.toString()).find('.card').css('transform', 'translateY(' + d.toString() + 'px)');
        prv = active;
        setTimeout(function() {
          $('html, body').scrollTop(0);
          $('#section' + id.toString()).find('.card').css('opacity');
          $('#section' + id.toString()).find('.card').css('opacity', '0');
          $('#section' + id.toString()).find('.card').css('transform');
          $('#section' + id.toString()).find('.card').css('transform', 'none');
          // $('#section' + id.toString()).css('z-index', 100);
          $('#section' + active.toString()).find('.card').css('transform');
          $('#section' + active.toString()).find('.card').css('transform', 'none');
          // $('#section' + active.toString()).css('z-index', 1);
          $('#section' + id.toString()).find('.card1').css('opacity');
          $('#section' + id.toString()).find('.card1').css('opacity', '1');
          active1 = 1;
          // return $('#background').attr('class', 'b' + $('#section' + id.toString()).find('.card:nth-of-type(' + active1.toString() + ')').find('.title').attr('class').slice(-1));
        }, 1000);
        setTimeout(function() {
          if ($(window).width() < 750) {
            $('.navlink').parent().css('display', 'none');
            return $('#navlink' + id.toString()).css('display', 'block').parent().css('display', 'table-cell');
          } else {
            return $('.navlink').css('display', 'block');
          }
        }, 1000);
        setTimeout(function() {
          nxt = active + 1;
          prv = active - 1;
          try1 = 0;
          try2 = 0;
          $(document).data('scrolling', '0');
          return $('.navlink').css('cursor', 'pointer');
        }, 2000);
        if (id > active) {
          transit_up();
        } else {
          transit_down();
        }
        active = id;
        left = $('#navlink' + active.toString()).offset().left;
        width = $('#navlink' + active.toString()).css('width');
        if ($(window).width() < 750) {
          left = 0;
          width = $(window).width() * active / 4;
        }
        return $('#underline').css('left', left.toString() + 'px').css('width', width);
      }
    });
  
    // interval = setInterval(function() {
    //   if ($(document).data('scrolling') === '1') {
    //     return;
    //   }
    //   return $('#right').trigger('click');
    // }, 60000);
  
    $('#left').click(function() {
      var id1, n;
      clearInterval(interval);
      $('.card').css('transition', '0.25s all');
      n = $('#section' + active.toString()).find('.card').length;
      id1 = (active1 + n - 2) % n + 1;
      $('#left').prop('disabled', 'true');
      $('#right').prop('disabled', 'true');
      $('#section' + active.toString()).find('.card:nth-of-type(' + active1.toString() + ')').css('opacity', '0').css('transform', 'translateX(50%)');
      $('#section' + active.toString()).find('.card:nth-of-type(' + id1.toString() + ')').css('transform', 'translateX(-50%)');
      setTimeout(function() {
        $('#section' + active.toString()).find('.card:nth-of-type(' + active1.toString() + ')').css('opacity', '0').css('transform', 'none');
        $('#section' + active.toString()).find('.card:nth-of-type(' + id1.toString() + ')').css('opacity', '1');
        $('#left').removeAttr('disabled');
        return $('#right').removeAttr('disabled');
      }, 400);
      active1 = id1;
      $('#background').attr('class', 'b' + $('#section' + active.toString()).find('.card:nth-of-type(' + active1.toString() + ')').find('.title').attr('class').slice(-1));
      return interval = setInterval(function() {
        if ($(document).data('scrolling') === '1') {
          return;
        }
        return $('#right').trigger('click');
      }, 60000);
    });
  
    $('#right').click(function() {
      var id1, n;
      clearInterval(interval);
      $('.card').css('transition', '0.25s all');
      n = $('#section' + active.toString()).find('.card').length;
      id1 = 1 + active1 % n;
      $('#left').prop('disabled', 'true');
      $('#right').prop('disabled', 'true');
      $('#section' + active.toString()).find('.card').css('opacity', '0').css('transform', 'translateX(-50%)');
      $('#section' + active.toString()).find('.card:nth-of-type(' + id1.toString() + ')').css('transform', 'translateX(50%)');
      setTimeout(function() {
        $('#section' + active.toString()).find('.card').css('opacity', '0').css('transform', 'none');
        $('#section' + active.toString()).find('.card:nth-of-type(' + id1.toString() + ')').css('opacity', '1');
        $('#left').removeAttr('disabled');
        return $('#right').removeAttr('disabled');
      }, 400);
      active1 = id1;
      $('#background').attr('class', 'b' + $('#section' + active.toString()).find('.card:nth-of-type(' + active1.toString() + ')').find('.title').attr('class').slice(-1));
      return interval = setInterval(function() {
        if ($(document).data('scrolling') === '1') {
          return;
        }
        return $('#right').trigger('click');
      }, 60000);
    });
  
    if ($(window).width() > 750) {
      $('#underline').css('top', $('.navlink').offset().top - $(document).scrollTop() + parseInt($('.navlink').css('height'))).css('left', $('#navlink' + active.toString()).offset().left).css('width', $('#navlink' + active.toString()).css('width')).css('opacity', '1');
    } else {
      $('#underline').css('top', (80 - parseInt($('#underline').css('height'))).toString() + 'px').css('width', ($(window).width() / 4).toString() + 'px').css('opacity', '1').css('left', '0');
    }
  
    $(window).resize(function() {
      if ($(window).width() > 750) {
        return $('#underline').css('top', $('.navlink').offset().top - $(document).scrollTop() + parseInt($('.navlink').css('height'))).css('left', $('#navlink' + active.toString()).offset().left).css('width', $('#navlink' + active.toString()).css('width')).css('opacity', '1');
      } else {
        return $('#underline').css('top', (80 - parseInt($('#underline').css('height'))).toString() + 'px').css('width', ($(window).width() / 4 * active).toString() + 'px').css('opacity', '1').css('left', '0');
      }
    });
  
    if ($(window).width() <= 900) {
      setTimeout(function() {
        return $('#splash').animate({
          opacity: 0
        }, 1000);
      }, 2500);
      setTimeout(function() {
        return $('#splash').css('display', 'none');
      }, 3500);
    }
  
  }).call(this);
  