/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'entypo\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-iy' : '&#x21;',
			'icon-ix' : '&#x22;',
			'icon-iw' : '&#x23;',
			'icon-iv' : '&#x24;',
			'icon-iu' : '&#x25;',
			'icon-it' : '&#x26;',
			'icon-is' : '&#x27;',
			'icon-ir' : '&#x28;',
			'icon-iq' : '&#x29;',
			'icon-ip' : '&#x2a;',
			'icon-io' : '&#x2b;',
			'icon-in' : '&#x2c;',
			'icon-im' : '&#x2d;',
			'icon-il' : '&#x2e;',
			'icon-ik' : '&#x2f;',
			'icon-ij' : '&#x30;',
			'icon-ii' : '&#x31;',
			'icon-ih' : '&#x32;',
			'icon-ig' : '&#x33;',
			'icon-if' : '&#x34;',
			'icon-ie' : '&#x35;',
			'icon-id' : '&#x36;',
			'icon-ic' : '&#x37;',
			'icon-ib' : '&#x38;',
			'icon-ia' : '&#x39;',
			'icon-hz' : '&#x3a;',
			'icon-hy' : '&#x3b;',
			'icon-hx' : '&#x3c;',
			'icon-hw' : '&#x3d;',
			'icon-hv' : '&#x3e;',
			'icon-hu' : '&#x3f;',
			'icon-ht' : '&#x40;',
			'icon-hs' : '&#x41;',
			'icon-hr' : '&#x42;',
			'icon-hq' : '&#x43;',
			'icon-hp' : '&#x44;',
			'icon-ho' : '&#x45;',
			'icon-hn' : '&#x46;',
			'icon-hm' : '&#x47;',
			'icon-hl' : '&#x48;',
			'icon-hk' : '&#x49;',
			'icon-hj' : '&#x4a;',
			'icon-hi' : '&#x4b;',
			'icon-hh' : '&#x4c;',
			'icon-hg' : '&#x4d;',
			'icon-hf' : '&#x4e;',
			'icon-he' : '&#x4f;',
			'icon-hd' : '&#x50;',
			'icon-hc' : '&#x51;',
			'icon-hb' : '&#x52;',
			'icon-ha' : '&#x53;',
			'icon-gz' : '&#x54;',
			'icon-gy' : '&#x55;',
			'icon-gx' : '&#x56;',
			'icon-gw' : '&#x57;',
			'icon-gv' : '&#x58;',
			'icon-gu' : '&#x59;',
			'icon-gt' : '&#x5a;',
			'icon-gs' : '&#x5b;',
			'icon-gr' : '&#x5c;',
			'icon-gq' : '&#x5d;',
			'icon-gp' : '&#x5e;',
			'icon-go' : '&#x5f;',
			'icon-gn' : '&#x60;',
			'icon-gm' : '&#x61;',
			'icon-gl' : '&#x62;',
			'icon-gk' : '&#x63;',
			'icon-gj' : '&#x64;',
			'icon-gi' : '&#x65;',
			'icon-gh' : '&#x66;',
			'icon-gg' : '&#x67;',
			'icon-gf' : '&#x68;',
			'icon-ge' : '&#x69;',
			'icon-gd' : '&#x6a;',
			'icon-gc' : '&#x6b;',
			'icon-gb' : '&#x6c;',
			'icon-ga' : '&#x6d;',
			'icon-fz' : '&#x6e;',
			'icon-fy' : '&#x6f;',
			'icon-fx' : '&#x70;',
			'icon-fw' : '&#x71;',
			'icon-fv' : '&#x72;',
			'icon-fu' : '&#x73;',
			'icon-ft' : '&#x74;',
			'icon-fs' : '&#x75;',
			'icon-fr' : '&#x76;',
			'icon-fq' : '&#x77;',
			'icon-fp' : '&#x78;',
			'icon-fo' : '&#x79;',
			'icon-fn' : '&#x7a;',
			'icon-fm' : '&#x7b;',
			'icon-fl' : '&#x7c;',
			'icon-fk' : '&#x7d;',
			'icon-fj' : '&#x7e;',
			'icon-fi' : '&#xe000;',
			'icon-fh' : '&#xe001;',
			'icon-fg' : '&#xe002;',
			'icon-ff' : '&#xe003;',
			'icon-fe' : '&#xe004;',
			'icon-fd' : '&#xe005;',
			'icon-fc' : '&#xe006;',
			'icon-fb' : '&#xe007;',
			'icon-fa' : '&#xe008;',
			'icon-ez' : '&#xe009;',
			'icon-ey' : '&#xe00a;',
			'icon-ex' : '&#xe00b;',
			'icon-ew' : '&#xe00c;',
			'icon-ev' : '&#xe00d;',
			'icon-eu' : '&#xe00e;',
			'icon-et' : '&#xe00f;',
			'icon-es' : '&#xe010;',
			'icon-er' : '&#xe011;',
			'icon-eq' : '&#xe012;',
			'icon-ep' : '&#xe013;',
			'icon-eo' : '&#xe014;',
			'icon-en' : '&#xe015;',
			'icon-em' : '&#xe016;',
			'icon-el' : '&#xe017;',
			'icon-ek' : '&#xe018;',
			'icon-ej' : '&#xe019;',
			'icon-ei' : '&#xe01a;',
			'icon-eh' : '&#xe01b;',
			'icon-eg' : '&#xe01c;',
			'icon-ef' : '&#xe01d;',
			'icon-ee' : '&#xe01e;',
			'icon-ed' : '&#xe01f;',
			'icon-ec' : '&#xe020;',
			'icon-eb' : '&#xe021;',
			'icon-ea' : '&#xe022;',
			'icon-dz' : '&#xe023;',
			'icon-dy' : '&#xe024;',
			'icon-dx' : '&#xe025;',
			'icon-dw' : '&#xe026;',
			'icon-dv' : '&#xe027;',
			'icon-du' : '&#xe028;',
			'icon-dt' : '&#xe029;',
			'icon-ds' : '&#xe02a;',
			'icon-dr' : '&#xe02b;',
			'icon-dq' : '&#xe02c;',
			'icon-dp' : '&#xe02d;',
			'icon-do' : '&#xe02e;',
			'icon-dn' : '&#xe02f;',
			'icon-dm' : '&#xe030;',
			'icon-dl' : '&#xe031;',
			'icon-dk' : '&#xe032;',
			'icon-dj' : '&#xe033;',
			'icon-di' : '&#xe034;',
			'icon-dh' : '&#xe035;',
			'icon-dg' : '&#xe036;',
			'icon-df' : '&#xe037;',
			'icon-de' : '&#xe038;',
			'icon-dd' : '&#xe039;',
			'icon-dc' : '&#xe03a;',
			'icon-db' : '&#xe03b;',
			'icon-da' : '&#xe03c;',
			'icon-cz' : '&#xe03d;',
			'icon-cy' : '&#xe03e;',
			'icon-cx' : '&#xe03f;',
			'icon-cw' : '&#xe040;',
			'icon-cv' : '&#xe041;',
			'icon-cu' : '&#xe042;',
			'icon-ct' : '&#xe043;',
			'icon-cs' : '&#xe044;',
			'icon-cr' : '&#xe045;',
			'icon-cq' : '&#xe046;',
			'icon-cp' : '&#xe047;',
			'icon-co' : '&#xe048;',
			'icon-cn' : '&#xe049;',
			'icon-cm' : '&#xe04a;',
			'icon-cl' : '&#xe04b;',
			'icon-ck' : '&#xe04c;',
			'icon-cj' : '&#xe04d;',
			'icon-ci' : '&#xe04e;',
			'icon-ch' : '&#xe04f;',
			'icon-cg' : '&#xe050;',
			'icon-cf' : '&#xe051;',
			'icon-ce' : '&#xe052;',
			'icon-cd' : '&#xe053;',
			'icon-cc' : '&#xe054;',
			'icon-cb' : '&#xe055;',
			'icon-ca' : '&#xe056;',
			'icon-bz' : '&#xe057;',
			'icon-by' : '&#xe058;',
			'icon-bx' : '&#xe059;',
			'icon-bw' : '&#xe05a;',
			'icon-bv' : '&#xe05b;',
			'icon-bu' : '&#xe05c;',
			'icon-bt' : '&#xe05d;',
			'icon-bs' : '&#xe05e;',
			'icon-br' : '&#xe05f;',
			'icon-bq' : '&#xe060;',
			'icon-bp' : '&#xe061;',
			'icon-bo' : '&#xe062;',
			'icon-bn' : '&#xe063;',
			'icon-bm' : '&#xe064;',
			'icon-bl' : '&#xe065;',
			'icon-bk' : '&#xe066;',
			'icon-bj' : '&#xe067;',
			'icon-bi' : '&#xe068;',
			'icon-bh' : '&#xe069;',
			'icon-bg' : '&#xe06a;',
			'icon-bf' : '&#xe06b;',
			'icon-be' : '&#xe06c;',
			'icon-bd' : '&#xe06d;',
			'icon-bc' : '&#xe06e;',
			'icon-bb' : '&#xe06f;',
			'icon-ba' : '&#xe070;',
			'icon-az' : '&#xe071;',
			'icon-ay' : '&#xe072;',
			'icon-ax' : '&#xe073;',
			'icon-aw' : '&#xe074;',
			'icon-av' : '&#xe075;',
			'icon-au' : '&#xe076;',
			'icon-at' : '&#xe077;',
			'icon-as' : '&#xe078;',
			'icon-ar' : '&#xe079;',
			'icon-aq' : '&#xe07a;',
			'icon-ap' : '&#xe07b;',
			'icon-ao' : '&#xe07c;',
			'icon-an' : '&#xe07d;',
			'icon-am' : '&#xe07e;',
			'icon-al' : '&#xe07f;',
			'icon-ak' : '&#xe080;',
			'icon-aj' : '&#xe081;',
			'icon-ai' : '&#xe082;',
			'icon-ah' : '&#xe083;',
			'icon-ag' : '&#xe084;',
			'icon-af' : '&#xe085;',
			'icon-ae' : '&#xe086;',
			'icon-ad' : '&#xe087;',
			'icon-ac' : '&#xe088;',
			'icon-ab' : '&#xe089;',
			'icon-aa' : '&#xe08a;'
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