import {Hero} from '../entities/Hero';

const MAX_ITEM = 3;

export const getAreaHeroes = (heroes: Hero[]) => {
	const res = [];
	for (let i = 0; i < MAX_ITEM; i++) {
		for (let j = 0; j < MAX_ITEM; j++) {
			const findUser = heroes.find((el) => el.checkPosition(i, j));
			res.push(findUser || undefined);
		}
	}

	return res;
};
