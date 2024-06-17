import styled from 'styled-components';

export const ButtonAdd = styled.button`
	border-radius: 50%;
	width: 30px;
	height: 30px;
	background-color: white;
	border: none;
	cursor: pointer;
	font-size: 20px;
`;

export const ButtonAddBlockInput = styled(ButtonAdd)`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px auto;
`;
