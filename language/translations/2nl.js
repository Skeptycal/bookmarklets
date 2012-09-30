/**
 * Translate the specified or selected text or URL to Dutch using Google.
 *
 * @title Translate to Dutch
 * @keyword 2nl
 */
(function () {
	var s = (<><![CDATA[%s]]></> + '').replace(/\u0025s/, '') || getSelection() + '' || (location.protocol === 'file:' ? '' : location + '') || prompt('Please enter your text:');
	if (s) {
		location = s.match(/^(\w+:(\/\/)?)?[^\s.]+(\.[^\s])+/)
			? 'http://translate.google.com/translate?sl=auto&tl=nl&u=' + encodeURIComponent(s)
			: 'http://translate.google.com/translate_t#auto|nl|' + encodeURIComponent(s);
	}
})();