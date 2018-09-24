var main = function() {
    //display page when loaded
    //displey page end
    //make random number
    $('#random-number').text(Math.floor((Math.random() * 1000) + 1));

    //random number end
    //slide animated links
    $('body').scrollspy({ target: ".navbar", offset: 50 });

    $("#navbar a, #numbers-button-anchor").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });
    //slide animated links end

    //carousel options
    $(".carousel").carousel({
        pause: false
    })
    //carousel options end

    //statistics animation on scroll
    let window_pos = $(window).scrollTop() + $(window).height();

    let statistics_pos_top = $("#statistics").offset().top;

    let statistics_pos_bottom = $("#statistics").offset().bottom;

    let statistics_visible = false;

    let block_animation = false;

    $(window).on('load', function() {
        $(window).on("scroll", function() {
            window_pos = $(window).scrollTop() + $(window).height();
            if ((window_pos > statistics_pos_top)) {
                statistics_visible = true;
            }
            if (statistics_visible && !block_animation) {
                block_animation = true;
                $('.statistics-number').each(function() {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function(now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });

            }
        });
    });



    //statistic animation on scroll

    //prevent default submit
    $('#form-submit').click(function(e) {
        e.preventDefault();
    });
    //prevent default submit end
};

$(document).ready(main);