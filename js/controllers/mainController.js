'use strict';

import formView from '../views/formView.js';
import tabView from '../views/tabView.js';

import searchModel from '../models/searchModel.js';
import keywordModel from '../models/keywordModel.js';
import historyModel from '../models/historyModel.js';

import keywordView from '../views/keywordView.js';
import historyView from '../views/historyView.js';
import resultView from '../views/resultView.js';

const tag = '[mainController]';

export default {
	init() {
		formView
			.setup(document.querySelector('form'))
			.on('@submit', (eventArg) => this.onSubmit(eventArg.detail.input))
			.on('@reset', () => this.onResetForm());
		tabView.setup(document.querySelector('.ulContainer')).on('@change', (event) => this.onChangeTab(event.detail.tabName));
		keywordView.setup(document.querySelector('.divSearchKeywordContainer')).on('@click', (event) => this.onClickKeyword(event.detail.keyword));
		historyView
			.setup(document.querySelector('.divSearchHistoryContainer'))
			.on('@click', (event) => this.onClickHistory(event.detail.keyword))
			.on('@remove', (event) => this.onRemoveHistory(event.detail.keyword));
		resultView.setup(document.querySelector('.divSearchResultContainer'));
		this.strSelectedTab = '추천 검색어';
		this.renderView();
	},

	renderView() {
		tabView.setActiveTab(this.strSelectedTab);
		if (this.strSelectedTab === '추천 검색어') {
			this.fetchSearchKeyword();
			historyView.hide();
		} else {
			this.fetchSearchHistoryKeyword();
			keywordView.hide();
		}
		resultView.hide();
	},

	fetchSearchKeyword() {
		keywordModel.list().then((data) => {
			keywordView.render(data);
		});
	},

	fetchSearchHistoryKeyword() {
		historyModel.list().then((data) => {
			historyView.render(data).bindRemoveButton();
		});
	},

	onSubmit(input) {
		console.log(tag, 'onSubmit()', input);
		this.search();
	},

	search(query) {
		console.log(tag, 'search()', query);
		formView.setValue(query);
		historyModel.add(query);
		searchModel.list(query).then((arrDataArg) => this.onSearchResult(arrDataArg));
	},

	onSearchResult(arrDataArg) {
		tabView.hide();
		keywordView.hide();
		resultView.render(arrDataArg);
	},

	onResetForm() {
		console.log(tag, 'onResetForm()');
		this.renderView();
	},

	onChangeTab(tabName) {
		this.strSelectedTab = tabName;
		this.renderView();
	},

	onClickKeyword(keyword) {
		this.search(keyword);
	},

	onClickHistory(keyword) {
		this.search(keyword);
	},

	onRemoveHistory(keyword) {
		historyModel.remove(keyword);
		this.renderView();
	},
};
