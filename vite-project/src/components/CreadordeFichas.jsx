import React, { useState } from 'react';
import { getRandomColor } from '../functions/helpers';
import Fichas from '../components/Fichas';
import { ButtonAdd } from '../styles.css/Buttonadd.styles';

const CreadordeFichas = ({ pieces, updatePiecePosition }) => {
	const addNewPiece = () => {
		const newPiece = {
			id: `🐦${Date.now()}`,
			left: 1050,
			top: 100,
			backgroundColor: getRandomColor(),
		};
		updatePiecePosition(
			newPiece.id,
			newPiece.left,
			newPiece.top,
			newPiece.backgroundColor
		);
		console.log(pieces);
	};

	return (
		<>
			<ButtonAdd
				onClick={addNewPiece}
				style={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
			>
				+
			</ButtonAdd>
			{pieces.map((piece) => (
				<Fichas
					key={piece.id}
					id={piece.id}
					left={piece.left}
					top={piece.top}
					backgroundColor={piece.backgroundColor}
				/>
			))}
		</>
	);
};

export default CreadordeFichas;
