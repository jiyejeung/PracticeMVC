'use strict';

import view from './view.js';

const tag = '[formView]';

const formView = Object.create(view);

formView.setup = (objElementArg) => {
	view.init(objElementArg);
	formView.inputElement = objElementArg.querySelector('[type=text]');
	formView.resetElement = objElementArg.querySelector('[type=reset');
	formView.showResetButton(false);
	formView.bindEvents();
};

formView.showResetButton = (boolArg = true) => {
	formView.resetElement.style.display = boolArg ? 'block' : 'none';
};

formView.bindEvents = () => {
	formView.inputElement.addEventListener('keyup', (event) => formView.onKeyup(event));
};

formView.onKeyup = () => {
	formView.showResetButton(formView.inputElement.value.length)
};

export default formView;
