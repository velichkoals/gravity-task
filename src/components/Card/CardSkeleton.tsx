import React from 'react';
import Skeleton from 'react-loading-skeleton';

import './Card.scss';

interface IProps {
	cards: number;
}

export const CardSkeleton = ({ cards }: IProps) => {
	return (
		<div className='card-skeleton__wrapper'>
			{Array(cards)
				.fill(0)
				.map((card, index) => (
					<div className='card-skeleton card' key={index}>
						<Skeleton circle width={120} height={120} />
						<Skeleton
							className='card-skeleton__title'
							height={40}
							width={100}
						/>
					</div>
				))}
		</div>
	);
};
