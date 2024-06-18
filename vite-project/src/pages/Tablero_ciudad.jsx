import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import '../gamestyles.css';
import Fichas from '../components/Fichas';
import imgTabler from '../assets/tablero.png';
import { getRandomColor } from '../functions/helpers';
import { ButtonAdd } from '../styles.css/Buttonadd.styles';

function Tablero_ciudad() {
	const refBoard = useRef(null);
	const [pieces, setPieces] = useState([
		{ id: '🐦', left: 1050, top: 50, backgroundColor: '#FF5733' },
	]);

	const [, dropRef] = useDrop(
		() => ({
			accept: 'piece',
			drop: (item, monitor) => {
				const delta = monitor.getDifferenceFromInitialOffset();
				if (delta) {
					const rect = refBoard.current.getBoundingClientRect();
					const newLeft = Math.round(item.left + delta.x - rect.left);
					const newTop = Math.round(item.top + delta.y - rect.top);
					updatePiecePosition(item.id, newLeft, newTop);
				}
			},
		}),
		[pieces]
	);

	const updatePiecePosition = (id, left, top) => {
		setPieces((pieces) =>
			pieces.map((piece) => (piece.id === id ? { ...piece, left, top } : piece))
		);
	};

	const addNewPiece = () => {
		const newPiece = {
			id: `🐦${Date.now()}`,
			left: 1050,
			top: 100,
			backgroundColor: getRandomColor(),
		};
		setPieces([...pieces, newPiece]);
	};

	return (
		<div
			ref={(ref) => {
				dropRef(ref);
				refBoard.current = ref;
			}}
			className="board"
		>
			<ButtonAdd
				onClick={addNewPiece}
				style={{ position: 'absolute', top: 20, right: 20, zIndex: 1000 }}
			>
				+
			</ButtonAdd>
			<img
				src={imgTabler}
				alt="Game Board"
				className="board-img"
				draggable="false"
			/>
			{pieces.map((piece) => (
				<Fichas
					key={piece.id}
					id={piece.id}
					left={piece.left}
					top={piece.top}
					backgroundColor={piece.backgroundColor}
				></Fichas>
			))}
		</div>
	);
}

export default Tablero_ciudad;
