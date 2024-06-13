const pieces = document.querySelectorAll('.piece');

pieces.forEach((piece) => {
    piece.addEventListener('mousedown', onMouseDown);
    piece.addEventListener('touchstart', onTouchStart);

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

    function onTouchStart(event) {
        event.preventDefault();

        let shiftX = event.touches[0].clientX - piece.getBoundingClientRect().left;
        let shiftY = event.touches[0].clientY - piece.getBoundingClientRect().top;

        function moveAt(pageX, pageY) {
            piece.style.left = pageX - shiftX + 'px';
            piece.style.top = pageY - shiftY + 'px';
        }

        function onTouchMove(event) {
            moveAt(event.touches[0].pageX, event.touches[0].pageY);
        }

        document.addEventListener('touchmove', onTouchMove);

        piece.ontouchend = function () {
            document.removeEventListener('touchmove', onTouchMove);
            piece.ontouchend = null;
        };
    }
});
