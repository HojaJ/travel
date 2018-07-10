import MobileMenu from './modules/MobileMenu.js';
import RevealOnScroll from './modules/RevealOnScroll.js';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader.js';
import Modal from './modules/Modal.js';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.testimonial'), '60%');
var stickyHeader = new StickyHeader();

var modal  = new Modal();