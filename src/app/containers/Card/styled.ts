import styled, {css} from 'styled-components';

interface IRootProps {
	isDead?: boolean;
	isSelected?: boolean;
}

export const Root = styled.div`
	height: 200px;
	width: 200px;
	background: forestgreen;
	border-radius: 8px;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	position: relative;
	padding: 8px;
	gap: 4px;
	opacity: ${({isDead}: IRootProps) => (isDead ? 0.3 : 1)};
	background: ${({isSelected}: IRootProps) => (isSelected ? 'forestgreen' : 'blanchedalmond')};
`;

export const Header = styled.div`
	color: black;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid #333;
	padding-bottom: 8px;
`;

export const Indicator = styled.div`
	display: flex;
	gap: 8px;
	align-items: center;
	justify-content: center;

	& img {
		width: 25px;
	}
`;

export const Content = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: auto 1fr auto;
	gap: 8px;
`;

export const Appearance = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const HeroImg = styled.img`
	width: 80%;
	max-width: 200px;
`;

export const Properties = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 8px;
	list-style: none;
`;

export const Property = styled.li`
	background: #fff;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 25px;
	height: 25px;
`;
