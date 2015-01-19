/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'portfolio\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-twitter-alt': '&#xf099;',
		'icon-facebook-alt': '&#xf09a;',
		'icon-google-plus-square': '&#xf0d4;',
		'icon-google-plus': '&#xf0d5;',
		'icon-twitter': '&#xf081;',
		'icon-facebook': '&#xf082;',
		'icon-instagram': '&#xf083;',
		'icon-linkedin': '&#xf08c;',
		'icon-github': '&#xf09b;',
		'icon-soundcloud': '&#xf1be;',
		'icon-favorite': '&#xe604;',
		'icon-navigate-before': '&#xe605;',
		'icon-navigate-next': '&#xe606;',
		'icon-close': '&#xe601;',
		'icon-more-horiz': '&#xe607;',
		'icon-more-vert': '&#xe608;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
