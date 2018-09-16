window.onload = function (){
		setInterval(next(),3000)
		setInterval(next(),3000)

}

function navt(){
	var x = document.getElementById('navt').getAttribute('class');
	
	if(x == "navbar-toggler"){
		document.getElementById('navt').setAttribute('class', 'navbar-toggler collapsed');
		document.getElementById('navt').setAttribute('aria-expanded', 'true');
		document.getElementById('navbarNav').setAttribute('class', 'collapse navbar-collapse show');

	} else {
		document.getElementById('navt').setAttribute('class', 'navbar-toggler');
		document.getElementById('navt').setAttribute('aria-expanded', 'false');
		document.getElementById('navbarNav').setAttribute('class', 'collapse navbar-collapse');
	}
}

function next(){
	var banner1 = document.getElementById('banner1');
	var banner2 = document.getElementById('banner2');
	var banner3 = document.getElementById('banner3');
	var slide1 = document.getElementById('slide1');
	var slide2 = document.getElementById('slide2');
	var slide3 = document.getElementById('slide3');

	if(banner1.getAttribute('class') == 'carousel-item active'){
		banner1.setAttribute('class', 'carousel-item');
		banner2.setAttribute('class', 'carousel-item active');
		slide1.setAttribute('class', "");
		slide2.setAttribute('class', "active");
	} 
	else if(banner2.getAttribute('class') == 'carousel-item active'){
		banner2.setAttribute('class', 'carousel-item');
		banner3.setAttribute('class', 'carousel-item active');
		slide2.setAttribute('class', "");
		slide3.setAttribute('class', "active");
	}
	else if(banner3.getAttribute('class') == 'carousel-item active'){
		banner3.setAttribute('class', 'carousel-item');
		banner1.setAttribute('class', 'carousel-item active');
		slide3.setAttribute('class', "");
		slide1.setAttribute('class', "active");
	}
}

function previous(){
	var banner1 = document.getElementById('banner1');
	var banner2 = document.getElementById('banner2');
	var banner3 = document.getElementById('banner3');
	var slide1 = document.getElementById('slide1');
	var slide2 = document.getElementById('slide2');
	var slide3 = document.getElementById('slide3');

	if(banner1.getAttribute('class') == 'carousel-item active'){
		banner1.setAttribute('class', 'carousel-item');
		banner3.setAttribute('class', 'carousel-item active');
		slide1.setAttribute('class', "");
		slide3.setAttribute('class', "active");
	} 
	else if(banner2.getAttribute('class') == 'carousel-item active'){
		banner2.setAttribute('class', 'carousel-item');
		banner1.setAttribute('class', 'carousel-item active');
		slide2.setAttribute('class', "");
		slide1.setAttribute('class', "active");
	}
	else if(banner3.getAttribute('class') == 'carousel-item active'){
		banner3.setAttribute('class', 'carousel-item');
		banner2.setAttribute('class', 'carousel-item active');
		slide3.setAttribute('class', "");
		slide2.setAttribute('class', "active");
	}
}