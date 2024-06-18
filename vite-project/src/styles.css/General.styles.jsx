import styled from 'styled-components';

export const LeftContainerStyles = styled.div`
	position: absolute;
	height: 100vh;
	margin-top: 10px;
	color: white;
	z-index: 1000;
`;

export const RightContainerStyles = styled(LeftContainerStyles)`
	right: 95px;
	color: white;
	top: 40px;
	/* width: 9rem; */

	p {
		font-size: 20px;
		z-index: 1001;
	}
`;

export const LogoImageContainer = styled.div`
	margin-top: 15px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	top: 250px;
	right: -20px;

	h2 {
		text-align: center;
		color: #fe0362;
		font-family: 'Montserrat', sans-serif;
		font-size: 24px;
	}

	position: absolute;

	img {
		width: 96px;
		height: 63.67px;
	}
`;

export const BasketStyles = styled.div`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;

	top: 580px;
	right: -150px;
	height: 110px;
	width: 200px;
	background-color: #ffc7c2;
	transform: translate(-50%, -50%);
	border-radius: 5%;
`;
