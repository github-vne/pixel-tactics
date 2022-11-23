import styled from 'styled-components';

export const Root = styled.div`
	padding: 16px;
	display: flex;
	justify-content: space-between;
	position: relative;
	gap: 130px;
`;

export const Time = styled.div`
	top: -8px;
	left: calc(50% - 60px);
	height: 30px;
	width: 120px;
	position: absolute;
	background: darkorange;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 8px;
	padding-top: 8px;
	color: white;
`;

export const Info = styled.div`
	width: 100%;
	display: flex;
	gap: 12px;
	color: #ffffff;
`;
