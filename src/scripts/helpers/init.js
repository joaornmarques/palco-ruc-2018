document.addEventListener("DOMContentLoaded", function(){
	console.log('tan tan tan')
});

$('.o-block').click(function() {
	blockOverlay = $(this).children('.o-block__content--overlay');
	blockBase = $(this).children('.o-block__content--base');
	if(!blockOverlay.hasClass('o-block__content--overlay-show')){
		//reset state
		$('.o-block__content--base').removeClass('o-block__content--base-hide');
		$('.o-block__content--overlay').removeClass('o-block__content--overlay-show');

		blockOverlay.show();
		setTimeout(function() {
			blockOverlay.addClass('o-block__content--overlay-show');
			blockBase.addClass('o-block__content--base-hide');
		}, 10);
	}
});
