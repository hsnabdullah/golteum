jQuery('.partnerSlider').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  pauseOnDotsHover:false,
  autoplaySpeed:3000,
  dots: false,
  arrows: true,
  infinite: true,
  responsive: [
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }
  ]
});

jQuery(".navbar-light .navbar-nav .nav-link").on('click', function(e) {
  e.preventDefault();
  var target = jQuery(this).attr('href');
  jQuery('html, body').animate({
    scrollTop: (jQuery(target).offset().top)
  }, 2000);
});

(function ($) {
  "use strict";
  $.fn.aksCountDown = function (options) {
    const aks = $(this);
    var settings = $.extend(
      {
        endTime: "",
        refresh: 1000,
        onEnd: function () {}
      },
      options
    );
    return this.each(function (i) {
      function endTimeCheck(d1, d2) {
        return (
          d1.getFullYear() === d2.getFullYear() &&
          d1.getMonth() === d2.getMonth() &&
          d1.getDate() === d2.getDate()
        );
      }
      function countTimer() {
        var endTime = new Date(settings.endTime);
        endTime = Date.parse(endTime) / 1000;

        var now = new Date();
        now = Date.parse(now) / 1000;

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);
        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(
          timeLeft - days * 86400 - hours * 3600 - minutes * 60
        );

        if (hours < "10") {
          hours = "0" + hours;
        }
        if (minutes < "10") {
          minutes = "0" + minutes;
        }
        if (seconds < "10") {
          seconds = "0" + seconds;
        }

        $(aks).find("[data-days]").html(days);
        $(aks).find("[data-hours]").html(hours);
        $(aks).find("[data-minutes]").html(minutes);
        $(aks).find("[data-seconds]").html(seconds);
      }
      var now = new Date();
      var endTime = new Date(settings.endTime);

      if (endTimeCheck(now, endTime) === true) {
        settings.onEnd.call(aks);
      } else {
        setInterval(function () {
          countTimer();
        }, settings.refresh);
      }
    });
  };
})(jQuery);

$("#timer").aksCountDown({
  endTime: "01 August 2022 9:56:00 GMT+01:00",
  onEnd: function () {
    $(this).html('<div class="timer-end">Finished Time</div>');
  }
});


(function () {
  var circle = document.getElementById('pink-halo');
  var myTimer = document.getElementById('myTimer');
  var t = 60;
  var interval = 30;
  var angle = 0;
  var angle_increment = 360/t;
  var intervalCounter = 0;

  window.timer = window.setInterval(function () {
    intervalCounter ++;    
    if(circle) {
      circle.setAttribute("stroke-dasharray", angle + ", 361");
   
      myTimer.innerHTML = t - parseInt((angle/360)*t);

       if (angle >= 360) {
           window.clearInterval(window.timer);
       }

     angle += angle_increment/(1000/interval);
    }
      
  }.bind(this), interval);
})()

function toggleIcon(e) {
  $(e.target)
      .prev('.panel-heading')
      .find(".more-less")
      .toggleClass('glyphicon-plus glyphicon-minus');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);