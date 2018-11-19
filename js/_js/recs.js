$(document).ready(function () {
	/* Якорь */
	$(function () {
		$("a[href='#prices']").click(function (h) {
			h.preventDefault();
			var f = $(this).attr("href"),
				g = $(f).offset().top;
			$("body,html").animate({
				scrollTop: g
			}, 1500)
		});
	});
	/*План курса*/
	$("#course_plan, #module_1, #module_2").tabs({
		hide: {
			effect: "clip",
			duration: 200
		},
		show: {
			effect: "clip",
			duration: 200
		}
	});
	$(function () {
		/* Таймер */
		var clock;
		var futureDate = new Date("November 2, 2018 00:00 AM UTC+3");
		var currentDate = new Date();
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

		function dayDiff(first, second) {
			return (second - first) / (1000 * 60 * 60 * 24);
		}
		if (dayDiff(currentDate, futureDate) < 100) {
			$('.clock').addClass('twoDayDigits');
		} else {
			$('.clock').addClass('threeDayDigits');
		}
		if (diff < 0) {
			diff = 0;
			$('.clock-stop').addClass("alert-danger");
			$('.clock-stop').html("Скидка уменьшилась!");
			// $('#sale_1').text('1 000р.');
			// $('#sale_2').text('2 000р.');
			// $('#today_1').text('10 400р.');
			// $('#today_2').text('20 900р.');
			// $('#link_1').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2378&clean=true&lg=ru');
			// $('#link_2').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2382&clean=true&lg=ru');
			// $('#prepayment_bonus').text('900р.');
			// $('#prepayment_credited').text('2 800р.');
			// $('#prepayment_link').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2391&clean=true&lg=ru');
			// $('#prepayment_link span').text('900р.');
		}
		clock = $('.clock').FlipClock(diff, {
			clockFace: 'HourlyCounter',
			countdown: true,
			language: 'ru',
			callbacks: {
				stop: function () {
					$('.clock-stop').addClass("alert-danger");
					("alert-danger");
					$('.clock-stop').html("Скидка уменьшилась!");
					// $('#sale_1').text('1 000р.');
					// $('#sale_2').text('2 000р.');
					// $('#today_1').text('10 400р.');
					// $('#today_2').text('20 900р.');
					// $('#link_1').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2378&clean=true&lg=ru');
					// $('#link_2').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2382&clean=true&lg=ru');
					// $('#prepayment_bonus').text('900р.');
					// $('#prepayment_credited').text('2 800р.');
					// $('#prepayment_link').attr('href', 'https://aleksandrkudryashov1.autoweboffice.ru/?r=ordering/cart/as1&id=2391&clean=true&lg=ru');
					// $('#prepayment_link span').text('900р.');
				}
			},
		});
	});
		/*План курса*/
		$("#videos_container").tabs({
			hide: {
				effect: "fade",
				duration: 200
			},
			show: {
				effect: "fade",
				duration: 200
			}
		});
	/* Конец документа */
});