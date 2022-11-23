import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';

import {EmptyCard} from '../components/EmptyCard';
import {gameStore} from '../store/Game';
import {getAreaHeroes} from '../utils/getAreaHeroes';

import {Card} from './containers/Card';
import {Header} from './Header';
import {Board, Boards, Content, Root} from './styled';
import {Menu} from './containers/Menu';

function App() {
	const {band, enemy} = gameStore;

	const myBand = useMemo(() => getAreaHeroes(band), [band]);
	const enemyBand = useMemo(() => getAreaHeroes(enemy), [enemy]);

	return (
		<Root>
			<Menu />
			<Content>
				<Header />
				<Boards>
					<Board>
						{myBand.map((el, index) => {
							if (!el) return <EmptyCard index={index} />;
							return <Card key={el.id} hero={el} />;
						})}
					</Board>
					<Board>
						{enemyBand.map((el, index) => {
							if (!el) return <EmptyCard index={index} />;
							return <Card key={el.id} type="enemy" hero={el} />;
						})}
					</Board>
					{/*<div className={css.board}>*/}
					{/*	{enemy.map((el, index) => {*/}
					{/*		if (!el) return <EmptyCard index={index} />;*/}
					{/*		return <Card key={el.id} hero={el} type="enemy" />;*/}
					{/*	})}*/}
					{/*</div>*/}
				</Boards>
			</Content>
		</Root>
	);
}

export default observer(App);
