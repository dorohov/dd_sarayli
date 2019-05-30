(function($) {
    "use strict"
    $(function() {

        startAnimation()
        $(document).scroll(function() {
            startAnimation()
        })

        function startAnimation() {
            var animation_element = $('.__dd__anim')

            animation_element.each(function() {

                var a_e_transition = $(this).data('animtransition')
                var a_e_animation = $(this).data('animtype')
                var a_e_delay = $(this).data('animdelay')

                $(this).css({
                    "transition": a_e_transition + 's all ease',
                    "-webkit-animation-delay": a_e_delay + 's',
                    "-moz-animation-delay": a_e_delay + 's',
                    "-o-animation-delay": a_e_delay + 's',
                    "animation-delay": a_e_delay + 's'
                })

                var top_of_element = $(this).offset().top;
                var bottom_of_element = $(this).offset().top + $(this).outerHeight();
                var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
                var top_of_screen = $(window).scrollTop();

                if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                    $(this)
                        .addClass('animated')
                        .addClass('__dd__is--show')
                        .addClass(a_e_animation)
                } else {
                    $(this)
                        .removeClass('animated')
                        .removeClass('__dd__is--show')
                        .removeClass(a_e_animation)
                }
            })
        }
    })
})(jQuery);
(function($) {
    "use strict"
    $(function() {

        $('.__dd__slide9__carousel__items').slick({
            prevArrow: '.__dd__slide9__carousel__controls button.is--prev',
            nextArrow: '.__dd__slide9__carousel__controls button.is--next'
        })

    })
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuaW0uanMiLCJtYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgICQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc3RhcnRBbmltYXRpb24oKVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uX2VsZW1lbnQgPSAkKCcuX19kZF9fYW5pbScpXHJcblxyXG4gICAgICAgICAgICBhbmltYXRpb25fZWxlbWVudC5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhX2VfdHJhbnNpdGlvbiA9ICQodGhpcykuZGF0YSgnYW5pbXRyYW5zaXRpb24nKVxyXG4gICAgICAgICAgICAgICAgdmFyIGFfZV9hbmltYXRpb24gPSAkKHRoaXMpLmRhdGEoJ2FuaW10eXBlJylcclxuICAgICAgICAgICAgICAgIHZhciBhX2VfZGVsYXkgPSAkKHRoaXMpLmRhdGEoJ2FuaW1kZWxheScpXHJcblxyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIFwidHJhbnNpdGlvblwiOiBhX2VfdHJhbnNpdGlvbiArICdzIGFsbCBlYXNlJyxcclxuICAgICAgICAgICAgICAgICAgICBcIi13ZWJraXQtYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICBcIi1tb3otYW5pbWF0aW9uLWRlbGF5XCI6IGFfZV9kZWxheSArICdzJyxcclxuICAgICAgICAgICAgICAgICAgICBcIi1vLWFuaW1hdGlvbi1kZWxheVwiOiBhX2VfZGVsYXkgKyAncycsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhbmltYXRpb24tZGVsYXlcIjogYV9lX2RlbGF5ICsgJ3MnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciB0b3Bfb2ZfZWxlbWVudCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xyXG4gICAgICAgICAgICAgICAgdmFyIGJvdHRvbV9vZl9lbGVtZW50ID0gJCh0aGlzKS5vZmZzZXQoKS50b3AgKyAkKHRoaXMpLm91dGVySGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm90dG9tX29mX3NjcmVlbiA9ICQod2luZG93KS5zY3JvbGxUb3AoKSArICQod2luZG93KS5pbm5lckhlaWdodCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRvcF9vZl9zY3JlZW4gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKChib3R0b21fb2Zfc2NyZWVuID4gdG9wX29mX2VsZW1lbnQpICYmICh0b3Bfb2Zfc2NyZWVuIDwgYm90dG9tX29mX2VsZW1lbnQpKXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGRDbGFzcygnYW5pbWF0ZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYWRkQ2xhc3MoJ19fZGRfX2lzLS1zaG93JylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFkZENsYXNzKGFfZV9hbmltYXRpb24pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdhbmltYXRlZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnX19kZF9faXMtLXNob3cnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoYV9lX2FuaW1hdGlvbilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KShqUXVlcnkpOyIsIihmdW5jdGlvbigkKSB7XHJcbiAgICBcInVzZSBzdHJpY3RcIlxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuXHJcbiAgICAgICAgJCgnLl9fZGRfX3NsaWRlOV9fY2Fyb3VzZWxfX2l0ZW1zJykuc2xpY2soe1xyXG4gICAgICAgICAgICBwcmV2QXJyb3c6ICcuX19kZF9fc2xpZGU5X19jYXJvdXNlbF9fY29udHJvbHMgYnV0dG9uLmlzLS1wcmV2JyxcclxuICAgICAgICAgICAgbmV4dEFycm93OiAnLl9fZGRfX3NsaWRlOV9fY2Fyb3VzZWxfX2NvbnRyb2xzIGJ1dHRvbi5pcy0tbmV4dCdcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0pXHJcbn0pKGpRdWVyeSk7Il19
