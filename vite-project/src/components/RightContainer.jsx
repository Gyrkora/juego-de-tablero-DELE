import React from 'react';
import {
	BasketStyles,
	LogoImageContainer,
	RightContainerStyles,
} from '../styles.css/General.styles';
import Dado from './Dado';
import logotow from '../assets/logotow.png';

const RightContainer = () => {
	return (
		<RightContainerStyles>
			<Dado />
			<LogoImageContainer>
				<h2>¡La Ciudad!</h2>
				<img src={logotow} alt="logo" />
			</LogoImageContainer>
			<BasketStyles></BasketStyles>
		</RightContainerStyles>
	);
};

export default RightContainer;
