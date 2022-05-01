'use strict';

import formView from '../views/formView.js';
import resultView from '../views/resultView.js';
import searchModel from '../models/searchModel.js';

const tag = '[mainController]';

export default {
	init() {
		formView
			.setup(document.querySelector('form'))
			.on('@submit', (eventArg) => this.onSubmit(eventArg.detail.input))
			.on('@reset', () => this.onResetForm());
		resultView.setup(document.querySelector('.divSearchResultContainer'));
	},

	onSubmit(input) {
		console.log(tag, 'onSubmit()', input);
		this.search();
	},

	search(query) {
		console.log(tag, 'search()', query);
		// search API 요청
		searchModel.list(query).then((arrDataArg) => this.onSearchResult(arrDataArg));
	},

	onSearchResult(arrDataArg) {
		resultView.render(arrDataArg);
	},

	onResetForm() {
		console.log(tag, 'onResetForm()');
		resultView.hide();
	},
};
