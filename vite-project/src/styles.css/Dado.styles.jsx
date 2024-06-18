import styled from 'styled-components';

export const DiceContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	margin-top: 10px;
`;

export const DiceStyles = styled.div`
	width: 45px;
	height: 42px;
	line-height: 4px;
	border-radius: 35%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 80px;
	cursor: pointer;
	color: black;
	transition: all 0.2s ease-in-out;

	&:after {
		content: '${(props) => props.face}';
	}

	&:hover {
		transform: scale(1.1) rotate(20deg);
		transition: all 0.2s ease-in-out;
		/* color: #006e00; */
	}

	&:active {
		transform: scale(0.9) rotate(-100deg);
	}
`;
