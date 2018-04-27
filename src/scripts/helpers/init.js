document.addEventListener("DOMContentLoaded", function(){
	console.log('site credits !INCLUDE DONT FORGET')
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
	if(!blockOverlay.hasClass('o-block__content--overlay-show')){
		//reset state
		$('.o-block__content--base').removeClass('o-block__content--base-hide');
		$('.o-block__content--overlay').removeClass('o-block__content--overlay-show');
		$('.c-shelf-label').removeClass('c-shelf-label--hidden');

		blockOverlay.show();
		setTimeout(function() {
			blockOverlay.addClass('o-block__content--overlay-show');
			blockBase.addClass('o-block__content--base-hide');
			blockLabel.addClass('c-shelf-label--hidden');
		}, 10);
	}
});
