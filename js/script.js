$(function(){
	setInterval("next()", 3000);

	$('.logoinstagram').mouseenter(function(){
		$('.logoinstagram').attr('src','/img/logoinstagram2.png');
	});

	$('.logoinstagram').mouseout(function(){
		$('.logoinstagram').attr('src','/img/logoinstagram.png');
	});
});

function navt(){
	var x = $('#navt').attr('class');
	
	if(x == "navbar-toggler"){
		$('#navt').attr('class', 'navbar-toggler collapsed');
		$('#navt').attr('aria-expanded', 'true');
		$('#navbarNav').attr('class', 'collapse navbar-collapse show');


	} else {
		$('#navt').attr('class', 'navbar-toggler');
		$('#navt').attr('aria-expanded', 'false');
		$('#navbarNav').attr('class', 'collapse navbar-collapse');
	}
}

function next(){
	var banner1 = $('#banner1');
	var banner2 = $('#banner2');
	var banner3 = $('#banner3');
	var slide1 = $('#slide1');
	var slide2 = $('#slide2');
	var slide3 = $('#slide3');

	if(banner1.attr('class') == 'carousel-item active'){
		banner1.attr('class', 'carousel-item');
		banner2.attr('class', 'carousel-item active');
		slide1.attr('class', "");
		slide2.attr('class', "active");
	} 
	else if(banner2.attr('class') == 'carousel-item active'){
		banner2.attr('class', 'carousel-item');
		banner3.attr('class', 'carousel-item active');
		slide2.attr('class', "");
		slide3.attr('class', "active");
	}
	else if(banner3.attr('class') == 'carousel-item active'){
		banner3.attr('class', 'carousel-item');
		banner1.attr('class', 'carousel-item active');
		slide3.attr('class', "");
		slide1.attr('class', "active");
	}
}

function previous(){
	var banner1 = $('#banner1');
	var banner2 = $('#banner2');
	var banner3 = $('#banner3');
	var slide1 = $('#slide1');
	var slide2 = $('#slide2');
	var slide3 = $('#slide3');

	if(banner1.attr('class') == 'carousel-item active'){
		banner1.attr('class', 'carousel-item');
		banner3.attr('class', 'carousel-item active');
		slide1.attr('class', "");
		slide3.attr('class', "active");
	} 
	else if(banner2.attr('class') == 'carousel-item active'){
		banner2.attr('class', 'carousel-item');
		banner1.attr('class', 'carousel-item active');
		slide2.attr('class', "");
		slide1.attr('class', "active");
	}
	else if(banner3.attr('class') == 'carousel-item active'){
		banner3.attr('class', 'carousel-item');
		banner2.attr('class', 'carousel-item active');
		slide3.attr('class', "");
		slide2.attr('class', "active");
	}
}

function slide1(){
	$('#slide1').attr('class', 'active');
	$('#slide2').attr('class', '');
	$('#slide3').attr('class', '');
	$('#banner1').attr('class', 'carousel-item active');
	$('#banner2').attr('class', 'carousel-item');
	$('#banner3').attr('class', 'carousel-item');

}

function slide2(){
	$('#slide1').attr('class', '');
	$('#slide2').attr('class', 'active');
	$('#slide3').attr('class', '');
	$('#banner1').attr('class', 'carousel-item');
	$('#banner2').attr('class', 'carousel-item active');
	$('#banner3').attr('class', 'carousel-item');
}
function slide3(){
	$('#slide1').attr('class', '');
	$('#slide2').attr('class', '');
	$('#slide3').attr('class', 'active');
	$('#banner1').attr('class', 'carousel-item');
	$('#banner2').attr('class', 'carousel-item');
	$('#banner3').attr('class', 'carousel-item active');
}