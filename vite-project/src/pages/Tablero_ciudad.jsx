import React, { useState, useRef } from 'react';
import { useDrop } from 'react-dnd';
import '../gamestyles.css';
import Fichas from '../components/Fichas';
import imgTabler from '../assets/tablero.png';

function Tablero_ciudad() {
	const refBoard = useRef(null);
	const [pieces, setPieces] = useState([{ id: 'piece1', left: 50, top: 50 }]);

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

	return (
		<div
			ref={(ref) => {
				dropRef(ref);
				refBoard.current = ref;
			}}
			className="board"
		>
			<img
				src={imgTabler}
				alt="Game Board"
				className="board-img"
				draggable="false"
			/>
			{pieces.map((piece) => (
				<Fichas key={piece.id} id={piece.id} left={piece.left} top={piece.top}>
					Piece {piece.id}
				</Fichas>
			))}
		</div>

		// <div
		// 	ref={(ref) => {
		// 		dropRef(ref);
		// 		refBoard.current = ref;
		// 	}}
		// 	className="board"
		// >
		// 	{pieces.map((piece) => (
		// 		<Fichas key={piece.id} id={piece.id} left={piece.left} top={piece.top}>
		// 			Piece {piece.id}
		// 		</Fichas>
		// 	))}
		// </div>
	);
}

export default Tablero_ciudad;
