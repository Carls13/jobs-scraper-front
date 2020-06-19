import styled from 'styled-components';

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
