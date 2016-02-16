// var wimg = $('.galimg').width();
// $('.galimg').height(wimg);

// $('.galimg img').each(function(){

// 	var w = $(this).width();
// 	var h = $(this).height();

// 	if(w > h){
// 		$(this).addClass('landscape');
// 		$('.landscape').css('text-align' ,'center');
// 	}

// 	if (h > w){
// 		$(this).addClass('portrait');
// 	}
	
// });

var wimg = $('.galimg').width();
var himg = $('.galimg').height(wimg).height();
console.log(wimg, himg);

$('.galimg img').each(function(){

	var w = $(this).width();
	var h = $(this).height();
	console.log(w, h);

	if(w > h) {
		$(this).addClass('landscape');
	}

	else if (h > w) {
		$(this).addClass('portrait');
	}

	var nw = $(this).width();
	var nh = $(this).height();
	console.log(nw, nh);

	if (w > h){
		$(this).css('left', '-' + ((nw-wimg)/2) + 'px')
	}
	if (h > w){
		$(this).css('bottom', ((nh-himg)/2) + 'px')

	console.log((nh-himg)/2);
	};

});