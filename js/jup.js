let navbar = document.querySelector('.nav');
let main = document.querySelector('.main');
let sticky = navbar.offsetTop;

window.onscroll = () => {
	if(window.pageYOffset >= sticky){
		navbar.classList.add('sticky');
		content.style.margin= "100px auto";

	}
	else{
		navbar.classList.remove('sticky');
		content.style.margin= "200px auto";
	}
}
