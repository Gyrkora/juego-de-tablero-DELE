const pieces = document.querySelectorAll('.piece');

pieces.forEach((piece) => {
	piece.addEventListener('mousedown', onMouseDown);

	function onMouseDown(event) {
		event.preventDefault();

		let shiftX = event.clientX - piece.getBoundingClientRect().left;
		let shiftY = event.clientY - piece.getBoundingClientRect().top;

		piece.style.cursor = 'grabbing';

		function moveAt(pageX, pageY) {
			piece.style.left = pageX - shiftX + 'px';
			piece.style.top = pageY - shiftY + 'px';
		}

		function onMouseMove(event) {
			moveAt(event.pageX, event.pageY);
		}

		document.addEventListener('mousemove', onMouseMove);

		piece.onmouseup = function () {
			document.removeEventListener('mousemove', onMouseMove);
			piece.onmouseup = null;
			piece.style.cursor = 'grab';
		};

		piece.ondragstart = function () {
			return false;
		};
	}
});
