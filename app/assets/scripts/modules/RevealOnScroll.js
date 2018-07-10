import $ from 'jquery';
import waypoint from '../../../../node_modules/waypoints/lib/noframework.waypoints.js';

class RevealOnScroll{
	constructor(els, offset){
		this.itemsToReveal = els;
		this.offsetPercenteage = offset;
		this.hideInitially();
		this.createWaypoints();
	}

	hideInitially(){
		this.itemsToReveal.addClass('reveal-item');
	}

	createWaypoints() {
		var that = this;
		this.itemsToReveal.each(function () {
			var currentItem = this;
			new Waypoint({
				element: currentItem,
				handler: function () {
					$(currentItem).addClass('reveal-item--is-visible');
				},
				offset: that.offsetPercenteage
			});
		})
	}
}

export default RevealOnScroll;