import styled from 'styled-components';

export const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const ModalContent = styled.div`
	background: white;
	padding: 20px;
	border-radius: 4px;
	position: relative;
	max-width: 500px;
	width: 100%;
`;

export const CloseButton = styled.button`
	position: absolute;
	top: 10px;
	right: 10px;
	border: none;
	background: none;
	font-size: 20px;
	cursor: pointer;
`;
