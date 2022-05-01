'use strict';

import view from './view.js';

const code = '[keywordView]';

const keywordView = Object.create(view);

keywordView.setup = (objElementArg) => {
	keywordView.init(objElementArg);
	return keywordView;
};

keywordView.render = (arrDataArg = []) => {
	keywordView.objElementArg.innerHTML = arrDataArg.length ? keywordView.getKeywordsHtml(arrDataArg) : '추천 검색어가 없습니다.';
	keywordView.bindClickEvent();
	keywordView.show();
	return keywordView;
};

keywordView.getKeywordsHtml = (arrDataArg) => {
	return (
		arrDataArg.reduce((pre, cur, index) => {
			return (pre += `
      <li data-keyword="${cur.keyword}">
        <span class="spanNumber">${index + 1}</span>
        ${cur.keyword}
      </li>
    `);
		}, '<ul class="ulListContainer">') + '</ul>'
	);
};

keywordView.bindClickEvent = () => {
	Array.from(keywordView.objElementArg.querySelectorAll('li')).forEach((value) => {
		value.addEventListener('click', (event) => keywordView.onClickKeyword(event));
	});
};

keywordView.onClickKeyword = (event) => {
	const { keyword } = event.currentTarget.dataset;
	keywordView.emit('@click', { keyword }); /* controller에게 값을 알려줄 때 사용하는 method */
};

export default keywordView;
