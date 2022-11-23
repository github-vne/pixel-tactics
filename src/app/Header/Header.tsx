import React, {useEffect, useState} from 'react';

import {Info, Root, Time} from './styled';

const DELAY = 1000;

export const Header: React.FC = () => {
	const [time, setTime] = useState<Date>(new Date());

	useEffect(() => {
		setInterval(() => setTime(new Date()), DELAY);
	}, []);

	return (
		<Root>
			<Info>
				<span>Moves: 2</span>
			</Info>
			<Time>{time.getMinutes() + ':' + time.getSeconds()}</Time>
			<Info>
				<span>Moves: 2</span>
			</Info>
		</Root>
	);
};
