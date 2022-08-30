import React from 'react';
import { Card } from '../../components/Card/Card';

import './HomePage.scss';

export const HomePage = () => {
	return (
		<main className='main-section'>
			<div className='main-section__title'>JavaScript Frameworks</div>
			<div className='cards'>
				<Card link='https://reactjs.org/' title='React' color='#23b0d7' />
				<Card link='https://angular.io/' title='Angular' color='#f50a3e' />
				<Card link='https://vuejs.org/' title='Vue' color='#1db419' />
			</div>
		</main>
	);
};
