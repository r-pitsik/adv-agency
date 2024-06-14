

const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__nav');
let isOpenMenu = false;
burger.addEventListener('click',() => {
	if(burger.classList.contains('open')) {
		closeMenu ();
	} else if (!burger.classList.contains('open')) {
		openMenu();
	}
});

function openMenu () {
	isOpenMenu = true;
	burger.classList.add('open');
	menu.classList.add('open');
	document.body.style.overflowY = 'hidden';
}

function closeMenu () {
	isOpenMenu = false;
	burger.classList.remove('open');
	menu.classList.remove('open');
	document.body.style.overflowY = 'scroll';
}

window.addEventListener('resize', () => {
	if (window.innerWidth <= 710) {
		console.log(isOpenMenu);
	   } else if (isOpenMenu === true) {
		closeMenu();
	   }
})