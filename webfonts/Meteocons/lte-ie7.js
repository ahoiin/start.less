/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'meteocons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-bu' : '&#x21;',
			'icon-bt' : '&#x22;',
			'icon-bs' : '&#x23;',
			'icon-br' : '&#x24;',
			'icon-bq' : '&#x25;',
			'icon-bp' : '&#x26;',
			'icon-bo' : '&#x27;',
			'icon-bn' : '&#x28;',
			'icon-bm' : '&#x29;',
			'icon-bl' : '&#x2a;',
			'icon-bk' : '&#x2b;',
			'icon-bj' : '&#x2c;',
			'icon-bi' : '&#x2d;',
			'icon-bh' : '&#x2e;',
			'icon-bg' : '&#x2f;',
			'icon-bf' : '&#x30;',
			'icon-be' : '&#x31;',
			'icon-bd' : '&#x32;',
			'icon-bc' : '&#x33;',
			'icon-bb' : '&#x34;',
			'icon-ba' : '&#x35;',
			'icon-az' : '&#x36;',
			'icon-ay' : '&#x37;',
			'icon-ax' : '&#x38;',
			'icon-aw' : '&#x39;',
			'icon-av' : '&#x3a;',
			'icon-au' : '&#x3b;',
			'icon-at' : '&#x3c;',
			'icon-as' : '&#x3d;',
			'icon-ar' : '&#x3e;',
			'icon-aq' : '&#x3f;',
			'icon-ap' : '&#x40;',
			'icon-ao' : '&#x41;',
			'icon-an' : '&#x42;',
			'icon-am' : '&#x43;',
			'icon-al' : '&#x44;',
			'icon-ak' : '&#x45;',
			'icon-aj' : '&#x46;',
			'icon-ai' : '&#x47;',
			'icon-ah' : '&#x48;',
			'icon-ag' : '&#x49;',
			'icon-af' : '&#x4a;',
			'icon-ae' : '&#x4b;',
			'icon-ad' : '&#x4c;',
			'icon-ac' : '&#x4d;',
			'icon-ab' : '&#x4e;',
			'icon-aa' : '&#x4f;'
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