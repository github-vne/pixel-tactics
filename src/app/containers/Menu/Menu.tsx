import React from 'react';
import {observer} from 'mobx-react-lite';

import {gameStore} from '../../../store/Game';

import {Root} from './styled';
import {MyCard} from './components/MyCard';

interface IProps {}

export const Menu: React.FC<IProps> = observer(() => {
	const {myCards, getRandomToMyCard, availableHeroes} = gameStore;

	return (
		<Root>
			<span>Осталось карт: {availableHeroes.length}</span>
			<button onClick={getRandomToMyCard}>Get new card</button>
			{myCards.map((card) => (
				<MyCard hero={card} key={card.id} />
			))}
		</Root>
	);
});
