'use strict';

const data = [
	{
		id: 1,
		name: 'Main Dish01',
		image: '/images/mainDish01.jpg',
	},
	{
		id: 2,
		name: 'Main Dish02',
		image: '/images/mainDish02.png',
	},
];

export default {
	list(query) {
		return new Promise((res) => {
			setTimeout(() => {
				res(data);
			}, 200);
		});
	},
};
