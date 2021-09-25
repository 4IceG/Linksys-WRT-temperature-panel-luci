'use strict';
'require baseclass';
'require fs';
'require rpc';

return baseclass.extend({
	title: _('Temperature'),

	render: function(data) {


		var fields = [
			_('CPU'),         tempcpu,
			_('DDR'),         tempddr,
			_('Wi-Fi'),        tempwifi,

		];

		var table = E('div', { 'class': 'table' });

		for (var i = 0; i < fields.length; i += 2) {
			table.appendChild(E('div', { 'class': 'tr' }, [
				E('div', { 'class': 'td left', 'width': '33%' }, [ fields[i] ]),
				E('div', { 'class': 'td left' }, [ (fields[i + 1] != null) ? fields[i + 1] : '?' ])
			]));
		}

		return table;
	}
});
