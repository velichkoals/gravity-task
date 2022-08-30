import React, { useEffect, useState } from 'react';
import { getRandomInteger } from '../../helpers/getRandomInteger';
import { Card } from '../../components/Card/Card';

import './HomePage.scss';

export const HomePage = () => {
	const [isLoading, setIsLoading] = useState<boolean | number | void>(true);
	const [counter, setCounter] = useState<number>(1);

	useEffect(() => {
		if (isLoading) {
			getRandomInteger().then((res) => {
				if (res) {
					setCounter(counter + 1);
					setIsLoading(counter);
				} else {
					setIsLoading(res);
				}
			});
		}
	}, [counter]);

	return !isLoading ? (
		<main className='main-section'>
			<div className='main-section__title'>JavaScript Frameworks</div>
			<div className='cards'>
				<Card link='https://reactjs.org/' title='React' color='#23b0d7' />
				<Card link='https://angular.io/' title='Angular' color='#f50a3e' />
				<Card link='https://vuejs.org/' title='Vue' color='#1db419' />
			</div>
		</main>
	) : (
		<div style={{ textAlign: 'center', color: '#fff' }}>Loading...</div>
	);
};
