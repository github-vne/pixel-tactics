import { IHero } from "../entities/Hero/types";

export const HEROES: Record<string, IHero> = {
	assassin: {
		id: "assassin",
		name: "Ассасин",
		attack: 3,
		hp: 1,
		appearance: "Icons_32",
		position: [1, 2],
	},
	fighter: {
		id: "fighter",
		name: "Боец",
		attack: 4,
		hp: 8,
		appearance: "Icons_06",
		position: [0, 0],
	},
	priestess: {
		id: "priestess",
		name: "Жрица",
		attack: 1,
		hp: 7,
		appearance: "Icons_16",
		position: [0, 0],
	},
	paladin: {
		id: "paladin",
		name: "Паладин",
		attack: 4,
		hp: 6,
		appearance: "Icons_15",
		position: [0, 0],
	},
	dragonMag: {
		id: "dragonMag",
		name: "Дракон-Маг",
		attack: 6,
		hp: 3,
		appearance: "Icons_24",
		position: [0, 0],
	},
};
