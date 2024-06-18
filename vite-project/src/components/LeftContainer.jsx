import React from 'react';
import {
	LeftContainerStyles,
	LogoImageContainer,
} from '../styles.css/General.styles';
import InputScore from './InputScore';
import logotow from '../assets/logotow.png';

function LeftContainer() {
	return (
		<LeftContainerStyles>
			<InputScore />
		</LeftContainerStyles>
	);
}

export default LeftContainer;
