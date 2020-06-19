import styled from 'styled-components';

export const Container = styled.div`
	margin: 10px;
	padding: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Illustration = styled.img`
	width: 40vw;
	height: auto;
	display: block;
	margin: 20px auto;
	@media screen and (max-width: 600px) {
		width: 60vw;
	}
`;

export const Disclaimer = styled.h5`
	text-align: center;
	margin: 25px;
`;
