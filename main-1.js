
(function() {
    var active, active1, func1, interval, nxt, prv, teX, teY, transit_down, transit_up, try1, try2, tsX, tsY;
  
    active = 1;
  
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

  }).call(this);
  