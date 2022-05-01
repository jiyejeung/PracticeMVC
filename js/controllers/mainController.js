'use strict';

import formView from '../views/formView.js';
import searchModel from '../models/searchModel.js';
import tabView from '../views/tabView.js';
import resultView from '../views/resultView.js';

const tag = '[mainController]';

export default {
	init() {
		formView
			.setup(document.querySelector('form'))
			.on('@submit', (eventArg) => this.onSubmit(eventArg.detail.input))
			.on('@reset', () => this.onResetForm());
		tabView.setup(document.querySelector('.ulContainer')).on('@change', (event) => this.onChangeTab(event.detail.tabName));
		resultView.setup(document.querySelector('.divSearchResultContainer'));

		this.strSelectedTab = '추천 검색어';
		this.renderView();
	},

	renderView() {
		tabView.setActiveTab(this.strSelectedTab);
		resultView.hide();
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

	onChangeTab(tabName) {
		debugger;
	},
};
