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