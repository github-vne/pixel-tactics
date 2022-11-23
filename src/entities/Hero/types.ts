export interface IHero {
	id: string;
	name: string;
	attack: number;
	hp: number;
	position: [number, number];
	damage?: number;
	isDead?: boolean;
	isLeader?: boolean;
	appearance: string;
	typeAttack?: "near" | "distant";
}
