'use strict';

import view from './view.js';

const tag = '[tabView]';

const tabView = Object.create(view);

tabView.setup = (objElementArg) => {
	tabView.init(objElementArg);
	tabView.bindClick();
	return tabView;
};

tabView.setActiveTab = (strArg) => {
	Array.from(tabView.objElementArg.querySelectorAll('li')).forEach((value) => {
		value.className = value.innerHTML === strArg ? 'active' : '';
	});
	tabView.show();
};

tabView.bindClick = () => {
	Array.from(tabView.objElementArg.querySelectorAll('li')).forEach((value) => {
		value.addEventListener('click', () => tabView.onClick(value.textContent));
	});
};

tabView.onClick = (tabName) => {
	tabView.setActiveTab(tabName);
	tabView.emit('@change', { tabName });
};

export default tabView;
