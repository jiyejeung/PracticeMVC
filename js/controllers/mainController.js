'use strict';

import formView from '../views/formView.js';

const tag = '[mainController]';

export default {
	init() {
		console.log(tag);
		formView.setup(document.querySelector('form'));
	},
};
