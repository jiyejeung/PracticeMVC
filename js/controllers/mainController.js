'use strict';

import formView from '../views/formView.js';

const tag = '[mainController]';

export default {
	init() {
		formView
			.setup(document.querySelector('form'))
			.on('@submit', (eventArg) => this.onSubmit(eventArg.detail.input))
			.on('@reset', () => this.onResetForm());
	},

	onSubmit(input) {
		console.log(tag, 'onSubmit()', input);
	},

	onResetForm() {
		console.log(tag, 'onResetForm()');
	},
};
