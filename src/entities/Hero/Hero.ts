import { IHero } from "./types";
import { makeAutoObservable } from "mobx";

export class Hero implements IHero {
	id: string = "";
	name: string = "";
	damage: number = 0;
	attack: number = 0;
	hp: number = 0;
	position: [number, number] = [0, 0];
	isDead: boolean = false;
	isLeader: boolean = false;
	appearance: string = "";
	typeAttack: "near" | "distant" = "near";

	constructor(props: IHero) {
		makeAutoObservable(this);

		this.id = props.id;
		this.name = props.name;
		this.attack = props.attack;
		this.hp = props.hp;
		this.appearance = props.appearance;
		this.position = props.position;
		if (props.isLeader) this.isLeader = props.isLeader;
		if (props.typeAttack) this.typeAttack = props.typeAttack;
	}

	public getDamage = (damage: number): void => {
		this.damage += damage;
		if (this.hp <= this.damage) this.isDead = true;
	};

	public checkPosition = (x: number, y: number) => {
		const [x1, y1] = this.position;
		return x1 === x && y1 === y;
	};
}
