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

export const Instructions = styled.h1`
	text-align: center;
`;

export const Input = styled.input`
	&::placeholder {
		text-align: center;
	}
	text-align: center;
	border: 1px solid #CCC;
	border-radius: 10px;
	padding: 8px 4px;
	display: block;
	width: 25%;
	margin: 20px auto;	
	border: 1px solid hsl(192, 70%, 51%);

	@media screen and (max-width: 600px) {
		width: 70vw;
	}
`;

export const Button = styled.button`
	background: hsl(192, 70%, 51%);
	padding: 6.5px 5px;
	border-radius: 20px;
    width: 15%;
	display: block;
	margin: auto;
	text-align: center;
	color: white;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		width: 40vw;
	}
`;

export const Disclaimer = styled.h5`
	text-align: center;
	margin: 25px;
`;
