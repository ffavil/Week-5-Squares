var wimg = $('.galimg').width();
$('.galimg').height(wimg);

$('.galimg img').each(function(){

	var w = $(this).width();
	var h = $(this).height();

	if(w > h){
		$(this).addClass('landscape');
		$('.landscape').css('text-align' ,'center');
	}

	if (h > w){
		$(this).addClass('portrait');
	}
	
});
