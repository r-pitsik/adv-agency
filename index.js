const button = document.querySelector('.feedback__button');
const closeButton = document.querySelector('.modal__close');
const modal = document.querySelector('.modal');
let isOpen = false;

button.addEventListener('click', () => {
    openModal();
});

closeButton.addEventListener('click', () => {
    closeModal();
});

window.addEventListener('click', (e) => {
    console.log(1);
    if(e.target.closest('.modal') && !e.target.closest('.modal__body')){
        closeModal();
    }
})

function openModal () {
    modal.classList.add('open');
    isOpen = true;
    document.body.style.overflowY = 'hidden';
}

function closeModal () {
    modal.classList.remove('open');
    isOpen = false;
    document.body.style.overflowY = 'scroll';
}

const formButton = document.querySelector('.modal__form > button');
const nameInput = document.querySelector('.modal__form > input');
const textInput = document.querySelector('.modal__form > textarea');
const errorText = document.querySelector('.modal__error');

const feedList = document.querySelector('.feedback__list');

if(!!localStorage.getItem('name') && !!localStorage.getItem('text')) {
    setFeed(localStorage.getItem('name'),localStorage.getItem('text'));
}

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!!nameInput.value.trim() &&  !!textInput.value.trim() && !localStorage.getItem('name') 
        && !localStorage.getItem('text')) {
        addFeed(nameInput.value,textInput.value)
        closeModal();
        clearForm();
    } else if (!!localStorage.getItem('name') && !!localStorage.getItem('text')) {
        errorText.textContent = 'Вы уже оставили отзыв';
    }else if (!nameInput.value.trim() ||  !textInput.value.trim()) {
        errorText.textContent = 'Не все поля заполнены';
    } 
})

function clearForm() {
    textInput.value = '';
    nameInput.value = '';
    errorText.textContent = '';
}

function addFeed(name, text) {
    localStorage.setItem('name',name);
    localStorage.setItem('text',text);
    setFeed(name,text);
}

function setFeed(name, text) {
    feedList.insertAdjacentHTML('beforeend',`
    <div class="feedback__item">
              <h2 class="feedback__name"><img src="./public/images/feed.png" alt="person">${name}</h2>
              <div class="feedback__text">${text}</div>
    </div>
    `)
}

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