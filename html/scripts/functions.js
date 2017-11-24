
var helper = {

	equalHeight: function (arrayItems, count) {
		if (arrayItems !== undefined && arrayItems.length > 0) {
			arrayItems.height('');

			var maxH = 0;

			if (count) {
				var arrays = [];
				while (arrayItems.length > 0) {
					arrays.push(arrayItems.splice(0, count));
				}

				for (var i = 0; i < arrays.length; i += 1) {
					var data = arrays[i];
					maxH = 0;
					for (var j = 0; j < data.length; j += 1) {
						var currentH = $(data[j]).outerHeight(true);
						if (currentH > maxH) {
							maxH = currentH;
						}
					}

					for (var k = 0; k < data.length; k += 1) {
						$(data[k]).css('height', maxH);
					}
				}
			} else {
				arrayItems.each(function () {
					var currentH2 = $(this).outerHeight(true);
					if (currentH2 > maxH) {
						maxH = currentH2;
					}
				});

				arrayItems.css('height', maxH);
			}
		}
	},
	desktopNav: function () {
		$('.desktop-nav .nav-first-level li').each(function () {
			if ($(this).find('.nav-dropdown').length) {
				$(this).addClass('has-children').attr('aria-haspopup', 'true');
			}
		});
		$('.desktop-nav .nav-first-level').find('.has-children').mouseenter(function () {
			$(this).addClass('open');
			$(this).children('.nav-dropdown').stop().slideDown().removeAttr('aria-hidden');
		}).mouseleave(function () {
			$(this).removeClass('open');
			$(this).children('.nav-dropdown').stop().slideUp().attr('aria-hidden', 'true');
		});
	},
	desktopSearch: function () {
		$('.header .header-actions .search-item button').on('click', function () {
			$('.header .header-right').addClass('search-open');
			$('.desktop-search-wrap').stop().fadeIn().removeAttr('aria-hidden');
			$('.header .header-actions .share-item').removeClass('open');
			$('.header .share-wrap').stop().slideUp().attr('aria-hidden', 'true');
		});
		$('.desktop-search-wrap .close-search').on('click', function () {
			$('.header .header-right').removeClass('search-open');
			$('.desktop-search-wrap').hide().attr('aria-hidden', 'true');
		});
	},
	toggleHeaderShare: function () {
		$('.header .header-actions .share-item button').on('click', function () {
			if (!$(this).parent().hasClass('open')) {
				$(this).parent().addClass('open');
				$('.header .share-wrap').stop().slideDown().removeAttr('aria-hidden');
			} else {
				$(this).parent().removeClass('open');
				$('.header .share-wrap').stop().slideUp().attr('aria-hidden', 'true');
			}
		});
	},
	deviceNav: function () {
		$('.device-nav ul li').each(function () {
			if ($(this).find('ul').length) {
				$(this).attr('aria-haspopup', 'true');
				$(this).find('> .nav-arrow').show().removeAttr('aria-hidden');
			}
		});
		$('.header .menu-trigger').on('click', function () {
			if (!$(this).hasClass('open')) {
				$(this).addClass('open');
				$('.device-nav').stop().slideDown().removeAttr('aria-hidden');
				$('body').css('overflow', 'hidden');
			} else {
				$(this).removeClass('open');
				$('.device-nav').stop().slideUp().attr('aria-hidden', 'true');
				$('body').css('overflow', 'hidden');
			}
		});
		$('.device-nav ul .nav-arrow').on('click', function () {
			if (!$(this).hasClass('open')) {
				$('.device-nav ul .nav-arrow').removeClass('open');
				$('.device-nav ul ul').stop().slideUp().attr('aria-hidden', 'true');
				$(this).addClass('open');
				$(this).siblings('ul').stop().slideDown().removeAttr('aria-hidden');
			} else {
				$(this).removeClass('open');
				$(this).siblings('ul').stop().slideUp().attr('aria-hidden', 'true');
			}
		});
	},
	ariaChecker: function () {
		if ($(window).width() < 1024 ) {
			$('.header .menu-trigger').removeAttr('aria-hidden');
			$('.header').attr('aria-haspopup', 'true');
		}
		 else {
			$('.header .menu-trigger').attr('aria-hidden', 'true');
			$('.header').removeAttr('aria-haspopup');
		 }
	},
	heroSlider: function () {
		var $slider = $('.hero-slider');
		$slider.slick({
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [
				{
					breakpoint: 993,
					settings: {
						dots: true,
						arrows: false
					}
				}
			]
		});
	},
	textDots: function () {
		if ($('.hero-slider .slider-content').length) {
			$('.hero-slider .slider-content p').dotdotdot();
		}
		if ($('.search-holder .search-listing').length) {
			$('.search-holder .search-listing p').dotdotdot();
		}
	},
	accordion: function () {
		$('.accordion .acc-head').on('click', function () {
			if (!$(this).hasClass('open')) {
				$('.accordion .acc-head').removeClass('open');
				$('.accordion .acc-content').stop().slideUp().attr('aria-hidden', 'true');
				$(this).addClass('open');
				$(this).next().slideDown().removeAttr('aria-hidden');
			} else {
				$(this).removeClass('open');
				$(this).next().slideUp().attr('aria-hidden', 'true');
			}
		});
		$('.accordion .acc-head:first').click();
	},
	acc2tabs: function(hideSiblings) {
		var tabs = $('[data-tab]'),
			tabContent = $('.js-tab-content'),
			className = '',
			desktopLink = $('.js-tab-link'),
			mobileLink = $('.js-tab-heading');

		if (tabContent.length) {
			tabs.each(function() {
				var tab = $(this);

				if (tab.hasClass('selected')) {
					className = tab.data('tab');
				}
			});

			tabContent.each(function() {
				var tabC = $(this);

				if (tabC.hasClass('js-' + className)) {
					$(this).show();
				}
			});

			desktopLink.on('click', function() {
				var tab = $(this),
					className = tab.data('tab'),
					tabParents = tab.parents('.tabs-container'),
					tabs = tabParents.find('[data-tab]');

				tabs.removeClass('selected').removeAttr('aria-selected');
				tab.addClass('selected').attr('aria-selected', 'true');
				tabParents.find('[data-tab="' + className + '"]').addClass('selected');
				tabParents.find('.js-tab-content').hide().attr('aria-hidden', 'true');
				tabParents.find('.js-' + className).show().removeAttr('aria-hidden');
			});

			mobileLink.on('click', function() {
				var tab = $(this),
					className = tab.data('tab'),
					tabParents = tab.parents('.tabs-container'),
					tabs = tabParents.find('[data-tab]');

				if (!tab.hasClass('selected')) {
					tabParents.find('.js-tab-heading.selected').next().slideUp("fast").attr('aria-hidden', 'true');
					tabParents.find('.js-' + className).slideDown(500);
					tabs.removeClass('selected').removeAttr('aria-selected');
					tab.addClass('selected').attr('aria-selected', 'true');
					tabParents.find('[data-tab="' + className + '"]').addClass('selected').removeAttr('aria-hidden');
				} else {
					tabParents.find('.js-tab-heading.selected').next().slideUp("fast").attr('aria-hidden', 'true');
					tab.removeClass('selected').removeAttr('aria-selected');
				}
			});
		}
	},
	peopleBox: function () {
		$('.people-wrap .bio-toggle').on('click', function () {
			if (!$(this).parent().hasClass('open')) {
				$('.people-wrap .people-box').removeClass('open');
				$('.people-wrap .bio-wrap').stop().hide();
				$(this).parent().addClass('open');
				$(this).siblings('.bio-wrap').stop().slideDown();
				$('html, body').animate({ scrollTop: $(this).parent().offset().top - 20}, 600);
			} else {
				$(this).siblings('.bio-wrap').stop().slideUp();
				$(this).parent().removeClass('open');
			}
		});
	},
	equalHeightElements: function () {
		if ($('.people-wrap').length) {
			if ($(window).width() > 767) {
				helper.equalHeight($('.people-wrap .text-holder'), 2);
			} else {
				$('.people-wrap .text-holder').css('height', '');
			}
		}
		if ($('.home-boxes-wrap').length) {
			if ($(window).width() > 1023) {
				helper.equalHeight($('.home-boxes-wrap .box-title'), 3);
			} else if ($(window).width() > 767 && $(window).width() < 1024) {
				helper.equalHeight($('.home-boxes-wrap .box-title'), 2);
			} else {
				$('.home-boxes-wrap .box-title').css('height', '');
			}
		}
	}

};
