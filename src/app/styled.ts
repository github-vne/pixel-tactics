import styled from 'styled-components';

// @ts-ignore
import bg from '../assets/bg.jpg';

export const Root = styled.div`
	height: 100vh;
	width: 100%;
	background: url(${bg}) no-repeat;
	background-size: cover;
	display: flex;
	gap: 16px;
`;

export const Content = styled.main`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
`;

export const Boards = styled.div`
	padding: 16px;
	display: grid;
	grid-template-columns: auto auto;
	gap: 64px;
`;

export const Board = styled.div`
	display: grid;
	align-items: flex-start;
	grid-template-columns: repeat(3, 200px);
	grid-template-rows: repeat(3, 200px);
	gap: 8px;
`;
