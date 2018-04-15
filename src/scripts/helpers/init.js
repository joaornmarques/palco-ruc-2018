document.addEventListener("DOMContentLoaded", function(){
	console.log('tan tan tan')
});

$('.o-block').click(function() {
	blockOverlay = $(this).children('.o-block__content--overlay');
	blockProduct = $(this).children('.o-block__image-product');
	if(!blockOverlay.hasClass('o-block__content--overlay-show')){
		//reset state
		$('.o-block__content--overlay').removeClass('o-block__content--overlay-show');
		$('.o-block__image-product').removeClass('o-block__image-product--front');


		blockOverlay.show();
		blockProduct.addClass('o-block__image-product--front');
		setTimeout(function() {
			blockOverlay.addClass('o-block__content--overlay-show');
		}, 10);
	}
});
