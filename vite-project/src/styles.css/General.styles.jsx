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

	p {
		font-size: 20px;
		z-index: 1001;
	}
`;
