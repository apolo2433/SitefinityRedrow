$(function () {

	helper.desktopNav();
	helper.desktopSearch();
	helper.toggleHeaderShare();
	helper.deviceNav();
	helper.ariaChecker();
	helper.heroSlider();
	helper.textDots();
	helper.accordion();
	helper.acc2tabs();
	helper.peopleBox();
	helper.equalHeightElements();

});

$(window).resize(function () {

	helper.ariaChecker();
	helper.textDots();
	helper.equalHeightElements();

});
