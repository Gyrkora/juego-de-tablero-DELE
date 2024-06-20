import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Board, BoardImg } from '../styles.css/Tablero.styles.jsx';
import tablero from '../assets/tablero.png';

const Tablero = ({ children, onDrop }) => {
	const refBoard = useRef(null);
	const [, dropRef] = useDrop(
		() => ({
			accept: 'piece',
			drop: (item, monitor) => onDrop(item, monitor, refBoard),
		}),
		[]
	);

	return (
		<Board
			ref={(ref) => {
				dropRef(ref);
				refBoard.current = ref;
			}}
		>
			<BoardImg src={tablero} alt="Game Board" draggable="false" />
			{children}
		</Board>
	);
};

export default Tablero;
