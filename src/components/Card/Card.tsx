import React from 'react';
import { ReactComponent as ReactLogo } from '../../assets/react-logo.svg';
import { ReactComponent as AngularLogo } from '../../assets/angular-logo.svg';
import { ReactComponent as VueLogo } from '../../assets/vue-logo.svg';

import './Card.scss';

interface IProps {
	link: string;
	title: string;
	color: string;
}

export const Card = ({ link, title, color }: IProps) => {
	return (
		<a href={`${link}`} target='_blank' className='card' rel='noreferrer'>
			{title === 'React' ? <ReactLogo width='120px' height='120px' /> : null}
			{title === 'Angular' ? (
				<AngularLogo width='120px' height='120px' />
			) : null}
			{title === 'Vue' ? <VueLogo width='120px' height='120px' /> : null}
			<div className='card__title' style={{ color: `${color}` }}>
				{title}
			</div>
		</a>
	);
};
