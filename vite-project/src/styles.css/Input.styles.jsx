import styled from 'styled-components';

export const InputMainContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 15px;
	flex-direction: column;
`;

export const InputContainer = styled.input`
	padding: 5px 0;
	border: 2px solid #ccc;
	border-radius: 4px;
	font-size: 16px;
	color: black;
	left: 40px;
	font-weight: bold;
	background-color: white;
	margin: 5px;
	width: 250px;
	font-family: 'Montserrat', sans-serif;

	&:focus {
		border-color: #bd1212;
		outline: none;
	}

	&:hover {
		background-color: #f8f8f8;
	}

	&::placeholder {
		color: #513131;
		font-weight: 300;
	}
`;
