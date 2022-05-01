'use strict';

import keywordView from './keywordView.js';

const tag = '[historyView]';

const historyView = Object.create(keywordView);

// historyView.messages.NO_KEYWORDS = '검색 이력이 없습니다.';

historyView.setup = (objElementArg) => {
	historyView.init(objElementArg);
	return historyView;
};

historyView.render = (arrDataArg = []) => {
	historyView.objElementArg.innerHTML = arrDataArg.length ? historyView.getKeywordsHtml(arrDataArg) : '추천 검색어가 없습니다.';
	historyView.bindClickEvent();
	historyView.show();
	return historyView;
};

historyView.getKeywordsHtml = (data) => {
	return (
		data.reduce((pre, cur) => {
			pre +=
				`<li data-keyword="${cur.keyword}">
          ${cur.keyword}
          <span class="date">${cur.date}</span>
          <button class="buttonRemove">x</button>
        </li>`;
        console.log(cur.date, cur.keyword)
			return pre;
		}, '<ul class="ulContainer">') + '</ul>'
	);
};

historyView.bindRemoveButton = () => {
	Array.from(historyView.objElementArg.querySelectorAll('button.buttonRemove')).forEach((value) => {
		value.addEventListener('click', (event) => {
			event.stopPropagation();
			historyView.onRemove(value.parentElement.dataset.keyword);
		});
	});
};

historyView.onRemove = (keyword) => {
	historyView.emit('@remove', { keyword });
};

export default historyView;
