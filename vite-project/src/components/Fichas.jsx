import React from 'react';
import { useDrag } from 'react-dnd';
import '../gamestyles.css';

function Fichas({ id, left, top, children }) {
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
			<div
				ref={dragRef}
				className="piece"
				style={{
					opacity: isDragging ? 0.5 : 1,
					left,
					top,
					position: 'absolute',
				}}
			>
				{children}
			</div>
		)
	);
}

export default Fichas;
