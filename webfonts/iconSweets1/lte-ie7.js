/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'iconsweets1\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-ch' : '&#x21;',
			'icon-cg' : '&#x22;',
			'icon-cf' : '&#x23;',
			'icon-ce' : '&#x24;',
			'icon-cd' : '&#x25;',
			'icon-cc' : '&#x26;',
			'icon-cb' : '&#x27;',
			'icon-ca' : '&#x28;',
			'icon-bz' : '&#x29;',
			'icon-by' : '&#x2a;',
			'icon-bx' : '&#x2b;',
			'icon-bw' : '&#x2c;',
			'icon-bv' : '&#x2d;',
			'icon-bu' : '&#x2e;',
			'icon-bt' : '&#x2f;',
			'icon-bs' : '&#x30;',
			'icon-br' : '&#x31;',
			'icon-bq' : '&#x32;',
			'icon-bp' : '&#x33;',
			'icon-bo' : '&#x34;',
			'icon-bn' : '&#x35;',
			'icon-bm' : '&#x36;',
			'icon-bl' : '&#x37;',
			'icon-bk' : '&#x38;',
			'icon-bj' : '&#x39;',
			'icon-bi' : '&#x3a;',
			'icon-bh' : '&#x3b;',
			'icon-bg' : '&#x3c;',
			'icon-bf' : '&#x3d;',
			'icon-be' : '&#x3e;',
			'icon-bd' : '&#x3f;',
			'icon-bc' : '&#x40;',
			'icon-bb' : '&#x41;',
			'icon-ba' : '&#x42;',
			'icon-az' : '&#x43;',
			'icon-ay' : '&#x44;',
			'icon-ax' : '&#x45;',
			'icon-aw' : '&#x46;',
			'icon-av' : '&#x47;',
			'icon-au' : '&#x48;',
			'icon-at' : '&#x49;',
			'icon-as' : '&#x4a;',
			'icon-ar' : '&#x4b;',
			'icon-aq' : '&#x4c;',
			'icon-ap' : '&#x4d;',
			'icon-ao' : '&#x4e;',
			'icon-an' : '&#x4f;',
			'icon-am' : '&#x50;',
			'icon-al' : '&#x51;',
			'icon-ak' : '&#x52;',
			'icon-aj' : '&#x53;',
			'icon-ai' : '&#x54;',
			'icon-ah' : '&#x55;',
			'icon-ag' : '&#x56;',
			'icon-af' : '&#x57;',
			'icon-ae' : '&#x58;',
			'icon-ad' : '&#x59;',
			'icon-ac' : '&#x5a;',
			'icon-ab' : '&#x5b;',
			'icon-aa' : '&#x5c;'
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