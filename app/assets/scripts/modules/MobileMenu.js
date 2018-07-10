import $ from 'jquery';

class MobileMenu {
	constructor(){
		this.menuIcon = $('.site-header__menu-icon');
	}
	event() {
		this.menuIcon.click();
	}
	toggleTheMenu(){
		console.log('Hooray icon was clicked');
	}
}

export default MobileMenu;