import React from 'react';
import { useState } from 'react';
import { DiceContainer, DiceStyles } from '../styles.css/Dado.styles';

function Dado() {
	const [face, setFace] = useState(1);

	const rollDice = () => {
		const newFace = Math.floor(Math.random() * 6) + 1;
		setFace(newFace);
	};

	const faceSymbols = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];

	return (
		<DiceContainer>
			<DiceStyles onClick={rollDice} face={faceSymbols[face - 1]}></DiceStyles>
			<p style={{ fontFamily: 'Montserrat' }}>¡Tira el dado!</p>
		</DiceContainer>
	);
}

export default Dado;
