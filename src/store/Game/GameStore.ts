import {makeAutoObservable} from 'mobx';

import {Hero} from '../../entities/Hero';
import {HEROES} from '../../constants/heroes';
import {IHero} from '../../entities/Hero/types';

export class GameStore {
	// My cards
	selectedMyCard: IHero | undefined = undefined;
	myCards: IHero[] = [];

	// Area
	selectHero: undefined | Hero = undefined;
	band: Hero[] = [];
	enemy: Hero[] = [new Hero({...HEROES.fighter, id: 'test', position: [1, 2]})];

	constructor() {
		makeAutoObservable(this);
	}

	get availableHeroes() {
		const myCardIds = this.myCards.map(({id}) => id);
		const myBandIds = this.band.map(({id}) => id);
		const ids = [...myCardIds, ...myBandIds];

		return Object.keys(HEROES)
			.filter((key) => !ids.includes(HEROES[key].id))
			.map((key) => HEROES[key]);
	}

	// My Card
	getRandomToMyCard = () => {
		if (!this.availableHeroes.length) return;
		const hero = this.availableHeroes[Math.floor(Math.random() * this.availableHeroes.length)];
		this.myCards = [...this.myCards, hero];
	};

	setSelectedMyCard = (hero: IHero) => {
		this.selectedMyCard = hero;
	};

	addNewHeroToArea = (position: [number, number]) => {
		if (!this.selectedMyCard) return;
		this.band = [...this.band, new Hero({...this.selectedMyCard, position})];
		this.myCards = this.myCards.filter((el) => el.id !== this.selectedMyCard?.id);
		this.selectedMyCard = undefined;
	};

	// Area heroes
	setSelectHero = (selectHero: Hero) => {
		this.selectHero = this.selectHero?.id === selectHero.id ? undefined : selectHero;
	};

	public attackHero = (target: Hero) => {
		if (!this.selectHero) return;
		target.getDamage(this.selectHero.attack);
		this.selectHero = undefined;
	};
}
