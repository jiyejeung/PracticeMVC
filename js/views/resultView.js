'use strict';

import view from './view.js';

const tag = '[resultView]';

const resultView = Object.create(view);

resultView.message = {
	NO_RESULT: '검색 결과가 없습니다.',
};

resultView.setup = (objElementArg) => {
	resultView.init(objElementArg);
};

resultView.render = (arrDataArg = []) => {
	resultView.objElementArg.innerHTML = arrDataArg.length ? resultView.getSearchResultsHtml(arrDataArg) : resultView.message;
	resultView.show();
};

resultView.getSearchResultsHtml = (arrDataArg) => {
	return (
		arrDataArg.reduce((pre, cur) => {
			return pre + resultView.getSearchItemHtml(cur);
		}, '<ul>') + '</ul>'
	);
};

resultView.getSearchItemHtml = (strItemArg) => {
	return `
    <li>
      <div class="divResult" style="background-image: url(${strItemArg.image});"></div>
      <p>${strItemArg.name}</p>
    </li>
  `;
};

export default resultView;
