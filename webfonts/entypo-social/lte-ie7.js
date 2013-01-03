/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo-social\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-br' : '&#x21;',
			'icon-bq' : '&#x22;',
			'icon-bp' : '&#x23;',
			'icon-bo' : '&#x24;',
			'icon-bn' : '&#x25;',
			'icon-bm' : '&#x26;',
			'icon-be' : '&#x27;',
			'icon-bd' : '&#x28;',
			'icon-bc' : '&#x29;',
			'icon-bb' : '&#x2a;',
			'icon-ba' : '&#x2b;',
			'icon-az' : '&#x2c;',
			'icon-at' : '&#x2d;',
			'icon-as' : '&#x2e;',
			'icon-ar' : '&#x2f;',
			'icon-aq' : '&#x30;',
			'icon-ap' : '&#x31;',
			'icon-an' : '&#x32;',
			'icon-af' : '&#x33;',
			'icon-ae' : '&#x34;',
			'icon-ad' : '&#x35;',
			'icon-ac' : '&#x36;',
			'icon-ab' : '&#x37;',
			'icon-aa' : '&#x38;',
			'icon-bl' : '&#x39;',
			'icon-bk' : '&#x3a;',
			'icon-bj' : '&#x3b;',
			'icon-bi' : '&#x3c;',
			'icon-bh' : '&#x3d;',
			'icon-bg' : '&#x3e;',
			'icon-bf' : '&#x3f;',
			'icon-bt' : '&#x40;',
			'icon-ay' : '&#x41;',
			'icon-ax' : '&#x42;',
			'icon-aw' : '&#x43;',
			'icon-ao' : '&#x44;',
			'icon-av' : '&#x45;',
			'icon-au' : '&#x46;',
			'icon-am' : '&#x47;',
			'icon-al' : '&#x48;',
			'icon-ak' : '&#x49;',
			'icon-aj' : '&#x4a;',
			'icon-ai' : '&#x4b;',
			'icon-ah' : '&#x4c;',
			'icon-ag' : '&#x4d;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};