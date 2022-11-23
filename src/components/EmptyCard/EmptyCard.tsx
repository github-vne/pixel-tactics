import React from 'react';
import {observer} from 'mobx-react-lite';

import {gameStore} from '../../store/Game';

import {Root} from './styled';

interface IProps {
	index: number;
}

export const EmptyCard: React.FC<IProps> = observer(({index}) => {
	const {selectedMyCard, addNewHeroToArea} = gameStore;

	const indexToPosition = () => {
		if (!selectedMyCard) return;

		let res: [number, number] = [];
		let start = index;
		if (start > 5) {
			res.push(2);
			start -= 6;
		} else if (start > 2) {
			res.push(1);
			start -= 3;
		} else {
			res.push(0);
		}
		res.push(start);
		addNewHeroToArea(res);
	};

	return <Root onClick={indexToPosition} />;
});
