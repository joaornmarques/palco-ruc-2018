document.addEventListener("DOMContentLoaded", function(){
	console.log('%cDesign by:%cRubro del Rubro%c\n http://rubro-del-rubro.tumblr.com/',
	'background: #CFDD02; color: #231F20; font-size: 14px; padding: 2px 4px;',
	'background: #CFDD02; color: #4801FF; font-size: 14px; font-weight: bold; padding: 2px 4px;',
 	'color: #CFDD02; font-size: 12px; margin-bottom: 20px;');
	console.log('%cWebsite by:%cJoão Marques%c\n http://joaomarques.website/',
	'background: #CFDD02; color: #231F20; font-size: 14px; padding: 2px 4px;',
	'background: #CFDD02; color: #4801FF; font-size: 14px; font-weight: bold; padding: 2px 4px;',
 	'color: #CFDD02; font-size: 12px; margin-bottom: 20px;');
});

/*-----------------------------
-----------Page load-----------
-----------------------------*/
$(function() {
	$(window).on('load', function(){
		$('.o-floor').addClass('o-floor--show');
		$('.c-logo').removeClass('c-logo--loading');
		setTimeout(function() {
			$('.o-container').addClass('o-container--show');
		}, 200);
	});
});

$(document).ready(function() {

    $('.c-logo').click(function(){
        $('html, body').animate({scrollTop:$(document).height()}, 'slow', 'swing');
        return false;
    });

});

$('.o-block').click(function() {
	blockOverlay = $(this).children('.o-block__content--overlay');
	blockBase = $(this).children('.o-block__content--base');
	blockLabel = $(this).children('.c-shelf-label');
	blockItems = $(this).children('.c-shelf__item');
	if(!blockOverlay.hasClass('o-block__content--overlay-show')){
		//reset state
		$('.o-block__content--base').removeClass('o-block__content--base-hide');
		$('.o-block__content--overlay').removeClass('o-block__content--overlay-show');
		$('.c-shelf-label').removeClass('c-shelf-label--hidden');
		$('.c-shelf__item').removeClass('c-shelf__item--hidden');

		blockOverlay.show();
		setTimeout(function() {
			blockOverlay.addClass('o-block__content--overlay-show');
			blockBase.addClass('o-block__content--base-hide');
			blockLabel.addClass('c-shelf-label--hidden');
			blockItems.addClass('c-shelf__item--hidden');
		}, 10);
	}
});
