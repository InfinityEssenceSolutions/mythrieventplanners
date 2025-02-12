(function($) {
    "use strict";

    let swiper = new Swiper('.promo-slider .swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function(index, className) {
          return '<span class="' + className + '"></span>';
        },
      },
    });

    // ==  slider ==========================================================================
    {
      let slider = document.querySelector('.testimonials-slider__body .swiper-container');
      if (slider) {
        let promoSliderContent = new Swiper(slider, {
          slidesPerView: 1,
          loop: true,
          speed: 600,
          autoHeight: true,
          pagination: false,
          navigation: {
            nextEl: '.testimonials-slider__btn-next',
            prevEl: '.testimonials-slider__btn-prev',
          },
        })

      }
    }

    const scene = document.getElementById('scene');
    const parallaxInstance = new Parallax(scene, {
      relativeInput: true
    });
    const scene2 = document.getElementById('scene2');
    const parallaxInstance2 = new Parallax(scene2, {
      relativeInput: true
    });
    const scene3 = document.getElementById('scene3');
    const parallaxInstance3 = new Parallax(scene3, {
      relativeInput: true
    });
    const scene4 = document.getElementById('scene4');
    const parallaxInstance4 = new Parallax(scene4, {
      relativeInput: true
    });

    let macy = Macy({
      container: '.portfolio-masonry',
      trueOrder: false,
      waitForImages: false,
      margin: 15,
      columns: 3,
      breakAt: {
        1400: 3,
        940: 2,
        520: 1,
        400: 1
      }
    });;

    $('.swipebox').swipebox();

  }(jQuery));
