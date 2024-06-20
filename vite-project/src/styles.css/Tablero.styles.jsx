import styled from 'styled-components';

export const GameContainer = styled.div`
	position: relative;
`;

export const Board = styled.div`
	width: 100%; /* Adjust width to the viewport */
	max-height: 100vh; /* Maximum height based on the viewport height */
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const BoardImg = styled.img`
	max-width: 100%;
	max-height: 100vh;
	object-fit: contain;
	border-radius: 3%;
`;

export const Piece = styled.div`
	cursor: move;
	position: absolute;
	width: 30px;
	height: 30px;
	background-color: red;
	border-radius: 50%;
	border: 2px solid black;
`;
