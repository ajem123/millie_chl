$(document).ready(function () {
	var winH = $(window).height();

	var filter = "win16|win32|win64|mac|macintel";
	if (navigator.platform) {
		if (filter.indexOf(
				navigator.platform.toLocaleLowerCase()) < 0) {

		} else {
			//pc
			//section의 높이는 브라우저의 높이로 설정
			$('secion').css('height', winH);
		}
	}

	var winH = $(window).height();
	//section의 높이는 브라우저의 높이로 설정
	$('.section').css('height', winH);

	//모바일 메뉴의 높이는 장치의 높이와 같음
	var winH = $(window).height();
	$('.mobile_menu').css('height', winH);

	//헤더 배경 변환
	$(window).scroll(function () {
		var top = $(this).scrollTop();
		//console.log(top);

		//만약 scrollTop값이 80보다 크면
		if (top > 80) {
			$('header').addClass('active');
			//scrollTop값이 80보다 크지 않으면	
		} else {

			//헤더의 클래스 제거

			$('header').removeClass('active');
		}
	});


	//모바일 메뉴버튼 클릭하면 메뉴나타남
	$('.mobile_btn').click(function () {
		$('.mobile_menu').animate({
			left: 0
		});
	});
	//모바일 메뉴의 닫기버튼을 클릭하면 메뉴 들어감
	$('.close').click(function () {
		$('.mobile_menu').animate({
			left: '-100vw'
		});
	});
	//탭메뉴
	$('.content div').hide();
	$('.c1').show();
	$('.t1').click(function () {
		$('.t1').addClass('active');
		$('.t2').removeClass('active');
		$('.t3').removeClass('active');
		$('.c1').show();
		$('.c2').hide();
		$('.c3').hide();
	});
	$('.t2').click(function () {
		$('.t2').addClass('active');
		$('.t1').removeClass('active');
		$('.t3').removeClass('active');
		$('.c2').show();
		$('.c1').hide();
		$('.c3').hide();
	});
	$('.t3').click(function () {
		$('.t3').addClass('active');
		$('.t2').removeClass('active');
		$('.t1').removeClass('active');
		$('.c3').show();
		$('.c2').hide();
		$('.c1').hide();
	});
	//swiper3

	var swiper = new Swiper('.swiper3', {
			effect: 'fade',
			loop: true,
			autoplay: {
				delay: 4000
			},
			navigation: {
			nextEl: '.s3_next',
			prevEl: '.s3_prev'
			},
		
		pagination: {
				el: '.swiper-pagination',
				clickavle: true,
			},
		});


	//swiper1
	var swiper = new Swiper('.swiper1', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 100,
		breakpoints: {
			1920: {
				slidesPerView: 3
			},
			1600: {
				slidesPerView: 3
			},
			1200: {
				slidesPerView: 3
			},
			1024: {
				slidesPerView: 2
			},
			960: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 2
			},
			480: {
				slidesPerView: 1
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		
		navigation: {
			nextEl: '.s1_next',
			prevEl: '.s1_prev'
		},
		
	});

	var swiper = new Swiper('.swiper2', {
		loop: true,
		slidesPerView: 5,
		spaceBetween: 10,
		breakpoints: {
			1920: {
				slidesPerView: 5
			},
			1600: {
				slidesPerView: 5
			},
			1200: {
				slidesPerView: 5
			},
			1024: {
				slidesPerView: 3
			},
			960: {
				slidesPerView: 2
			},
			768: {
				slidesPerView: 2
			},
			480: {
				slidesPerView: 2
			}
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.s1_next',
			prevEl: '.s1_prev'
		}
	});

});