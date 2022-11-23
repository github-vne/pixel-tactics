import React, {useLayoutEffect, useState} from 'react';
import {observer} from 'mobx-react-lite';

import {Hero} from 'entities/Hero/Hero';

import {gameStore} from '../../../store/Game';

import {
	Indicator,
	Root,
	Header,
	HeroImg,
	Appearance,
	Properties,
	Content,
	Property,
} from './styled';

import swordsImg from './assets/swords.png';
import hpImg from './assets/heart-attack.png';

export const Card: React.FC<{hero: Hero; type?: 'enemy' | 'my'}> = observer(
	({hero, type = 'my'}) => {
		const {isDead, hp, name, attack, damage} = hero;
		const {setSelectHero, attackHero, selectHero} = gameStore;

		const [iconModule, setIconModule] = useState<{default: string} | null>(null);
		useLayoutEffect(() => {
			if (!hero.appearance) return;
			import(`../../../assets/heroes/${hero.appearance}.png`).then(setIconModule);
		}, [hero.appearance, name]);

		const onSelect = () => {
			setSelectHero(hero);
		};

		const onAttack = () => {
			attackHero(hero);
		};

		return (
			<Root
				isDead={isDead}
				isSelected={selectHero?.id === hero.id}
				onClick={type === 'enemy' ? onAttack : onSelect}
			>
				<Header>
					<Indicator>
						<img src={hpImg} alt="" />
						<span>
							{hp} / {damage}
						</span>
					</Indicator>
					<Indicator>
						<img src={swordsImg} alt="" />
						<span>{attack}</span>
					</Indicator>
				</Header>
				<Content>
					<Properties>
						<Property>1</Property>
						<Property>1</Property>
						<Property>1</Property>
					</Properties>
					<Appearance>
						{iconModule?.default ? <HeroImg src={iconModule.default} alt="" /> : <div />}
						<span>{name}</span>
					</Appearance>
					<Properties>
						<Property>1</Property>
						<Property>1</Property>
						<Property>1</Property>
					</Properties>
				</Content>
			</Root>
		);
	},
);
