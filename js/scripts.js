$(document).ready(function () {
    /* Работа формы */
    $(function () {
        var check = $('.check', this),
            email = $('.mail', this),
            message = $('.alert_message', this);
        $(".form_newsletter").on("submit", function () {
            var check = $('.check', this),
                message = $('.alert_message', this),
                reNone = /.+/,
                reEm = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{1,20}$/,
                email = $('.mail', this),
                button = $('.button_mail', this);
            if (!email.val().match(reNone)) {
                message.text('Введите email').slideDown(500);
                return false;
            } 

            else if (!check.prop("checked")) {
                check.next().css("color", "red");
                check.next().children().css("color", "red");
                message.text('Подтвердите соглашение').slideDown(500);
                return false;
            } else {
                $('.infront', this).addClass('hide');
                $(".infront_submit", this).addClass("hide");
                $(".infront_submit", this).html("Зарегистрирован Ваш e-mail: " + email.val() + "<br>Бонус уже у Вас на почте").removeClass("hide");
                button.text('Отправлено');
            }
        });
        email.click(function () {
            email.css("border", "none");
            message.slideUp(500);
        });
        check.click(function () {
            check.next().css("color", "#000");
            check.next().children().css("color", "#000");
            message.slideUp(500);
        });
    });

    /*Сертификаты*/
    $('#certs_carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: true,
        navText: ["‹", "›"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            360: {
                items: 2
            },
            510: {
                items: 3
            },
            670: {
                items: 4
            },
            991: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    });
    /*Видео-отзывы Жанны*/
    $('#jannas_videos').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["‹", "›"],
        dots: false,
        items: 1
    });
    /*Текстовые отзывы Жанны*/
    $('#jannas_texts').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ["‹", "›"],
        dots: false,
        items: 1,
        autoHeight: true
    });
    /*Видео в отзывах*/
    $(".video_wrapper img").click(function () {
        var a = $(this).parent().attr("data-youtube");
        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>')
    });

    /*Конец документа*/
});