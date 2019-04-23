$(function(){
	$('body').on('click','.nav li a', function(e){
		e.preventDefault();
		$(this).parent().addClass('active').siblings().removeClass('active');
});


$('.nav li a').click(function(){
	$('html, body').animate({
		scrollTop: $('#' + $(this).data('value')).offset().top
	}, 1000);
});

	
});
