import React from 'react';
import {observer} from 'mobx-react-lite';

import {IHero} from '../../../../../entities/Hero/types';
import {gameStore} from '../../../../../store/Game';

import {Root} from './styled';

interface IProps {
	hero: IHero;
}

export const MyCard: React.FC<IProps> = observer(({hero}) => {
	const {setSelectedMyCard, selectedMyCard} = gameStore;

	return (
		<Root isSelected={selectedMyCard?.id === hero.id} onClick={() => setSelectedMyCard(hero)}>
			{hero.name}
		</Root>
	);
});
