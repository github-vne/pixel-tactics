import styled, {css} from 'styled-components';

export const Root = styled.li`
	border: 1px solid #333;
	margin-bottom: 8px;

	background: ${({isSelected}: {isSelected: boolean}) =>
		isSelected ? 'forestgreen' : 'transparent'};
`;
