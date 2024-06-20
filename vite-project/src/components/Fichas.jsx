import React from 'react';
import { useDrag } from 'react-dnd';
import '../gamestyles.css';
import { Piece } from '../styles.css/Tablero.styles';

function Fichas({ id, left, top, backgroundColor, children }) {
	const [{ isDragging }, dragRef, preview] = useDrag(
		() => ({
			type: 'piece',
			item: { id, left, top },
			collect: (monitor) => ({
				isDragging: !!monitor.isDragging(),
			}),
		}),
		[left, top]
	); // Add dependencies to re-render drag source when left or top changes

	return (
		(
			<div ref={preview} style={{ display: 'none' }}>
				{children}
			</div>
		),
		(
			<Piece
				ref={dragRef}
				className="piece"
				style={{
					opacity: isDragging ? 0 : 1,
					left,
					top,
					position: 'absolute',
					backgroundColor,
				}}
			>
				{children}
			</Piece>
		)
	);
}

export default Fichas;
