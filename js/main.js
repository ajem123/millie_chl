$(function () {
	/*var winHeight=$(window).height();
	var imgHeight=$('.swiper-slideimg').height();
	$('section').css('height', winHeight);
	
	$('.swiper-container').css('height',imgHeight);*/

	var filter = "win16|win32|win64|mac|macintel";

	$(function () {
		if (navigator.platform) {
			if (filter.indexOf(navigator.platform.toLowerCase()) < 0) {

				//mobile('mobile 접속');
				var h = $(window).height();
				$('nav').css('height',h);
				//햄버거 메뉴 클릭하면 nav 나옴
				$('.mobile_menu').click(function () {
					$('nav').stop().animate({
						right: 0
					});
				});
				//삭제버튼 클릭하면 nav 들어감
				$('.close').click(function () {
					$('nav').stop().animate({
						right: "-100vw"
					});
				});


				//내비세이션(아코디언 메뉴)
				$('nav>ul>li>a').click(function () {
					if ($(this).attr('class') != 'active') {
						$('nav>ul>li>a').next().slideUp();
						$('nav > ul > li > a').removeClass('active');
						$(this).addClass('active');
						$(this).next().slideDown();
					} else {
						$(this).removeClass('active');
						$(this).next().slideUp();
					}
				});

			} else {
				//pcalert('pc 접속');
				//내비
				$('nav > ul > li').hover(function () {
					$('.sub').stop().slideDown();
					$('.sub_bg').stop().slideDown();
				}, function () {
					$('.sub').stop().slideUp();
					$('.sub_bg').stop().slideUp()
				});


			}
		}
		//swiper-slide의 가로길이와 세로길이 같게
		var slide_width = $('.swiper3 .swiper-slide').width();
		$('.siper3 .swiper-slide').css('height,slide_width');

		//슬라이드(swiper)
		var swiper = new Swiper('.swiper1', {
			effect: 'fade',
			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			pagination: {
				el: '.swiper-pagination',
				clickavle: true,
			},
		});

		//swiper2
		var swiper = new Swiper('.swiper2',{
			loop:true,
			pagination: {
				el: '.swiper2 .swiper-pagination',
				clickble: true
			}
		});



		//item(swiper)
		var swiper = new Swiper('.swiper3',{
			centeredSlides: true,
			slidesPerView: 5,
			spaceBetween: 30,

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

				960: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 3
				},
				640: {
					slidesPerView: 3
				},
				480: {
					slidesPerView: 3
				},
				320: {
					slidesPerView: 1.5
				}
			},

			loop: true,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			on: {
				init:function() {
					var slideWidth=$('.swiper3.swiper-slide').width();
					$('.swiper3 .swiper-slide').css('height',slideWidth);
				}
			}
		});
		//list(swiper)
		var swiper = new Swiper('.swiper4', {
			centeredSlides: true,
			slidesPerView: 5,
			spaceBetween: 30,

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

				960: {
					slidesPerView: 3
				},
				768: {
					slidesPerView: 3
				},
				640: {
					slidesPerView: 3
				},
				480: {
					slidesPerView: 3
				},
				320: {
					slidesPerView: 1.5
				}
			},

			loop: true,
			autoplay: {
				delay: 4000,
				disableOnInteraction: false,
			},

			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});

		//fullpage.js
		//fullpage (마우스휠로 화면 이동)
		$('#fullpage').fullpage({
			navigation: true,
			navigationPosition: 'left',
			responsiveWidth: 960,

			afterLoad: function (anchorLink, index) {

				//만약 접속한 기기의 가로길이가 961이상이면 동그라미 버튼 보이,960이하이면안보임
				if ($(window).width() > 960) {
					//동그라미 버튼 2,3,4화면에서만 보임
					if (index === 1 || index === 5) {
						$('#fp-nav').fadeOut();
					} else {
						$('#fp-nav').fadeIn();
					}
				}
				
				if($(window).width()>480) {
					//모바일에서는 section의 높이 자동으로 인식
					$('section.section').removeClass('fp-auto-height');
				}else{
					$('.section').addClass('fp-auto-height');
				}

				if (index == 1) {
					$('.banner.animated').removeClass('active');
				} else
				if (index == 2) {
					$('.banner .animated').addClass('active');
					$('.item .animated').removeClass('active');
					$('.list .animated').removeClass('active');

					//swiper3의 slide애니메이션을 첫번째부터 시작하도록 하는 코딩
					$('.swiper3 .swiper-slide').each(function () {
						//$(this)는 .swiper-slide 1개 가리킴
						//idx = .swiper-slide의 인덱스번호 *0.1
						var idx = $(this).index() * 0.1;
						$(this).css('transition-delay', idx + 's');
					});

				} else if (index == 3) {
					$('.banner .animated').removeClass('active');
					$('.item .animated').addClass('active');
					$('.list .animated').removeClass('active');
				} else if (index == 4) {
					$('.banner .animated').removeClass('active');
					$('.item .animated').removeClass('active');
					$('.list .animated').addClass('active');
				}
			}
		});

	});
});
