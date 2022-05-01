'use strict';

const tag = '[View]';

export default {
	init(objElementArg) {
		if (!objElementArg) throw objElementArg;
		this.objElementArg = objElementArg;
		return this;
	},

	on(event, handler) {
		this.objElementArg.addEventListener(event, handler);
		return this;
	},

	emit(event, data) {
		const evt = new CustomEvent(event, { detail: data });
		this.objElementArg.dispatchEvent(evt);
		return this;
	},

	hide() {
		this.objElementArg.style.display = 'none';
		return this;
	},

	show() {
		this.objElementArg.style.display = 'block';
		return this;
	},
};
