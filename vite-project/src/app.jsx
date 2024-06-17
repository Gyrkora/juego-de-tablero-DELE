import './app.css';
import Tablero_ciudad from './pages/Tablero_ciudad';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

import { DndProvider } from 'react-dnd';

function isTouchDevice() {
	return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

export function App() {
	const backend = isTouchDevice() ? TouchBackend : HTML5Backend;

	return (
		<div>
			<DndProvider backend={backend} options={{ enableMouseEvents: true }}>
				<Tablero_ciudad />
			</DndProvider>
		</div>
	);
}
