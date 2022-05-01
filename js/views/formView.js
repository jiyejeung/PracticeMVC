'use strict';

import view from './view.js';

const tag = '[formView]';

const formView = Object.create(view);

formView.setup = (objElementArg) => {
	this.init(objElementArg);
	this.inputElement = objElementArg.querySelector('[type=text]');
	this.resetElement = objElementArg.querySelector('[type=reset');
	this.showResetButton(false);
};

formView.showResetButton = (boolArg = true) => {
	this.resetElement.style.display = boolArg ? 'block' : 'none';
};

export default formView;
