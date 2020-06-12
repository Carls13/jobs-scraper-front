import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
	margin-bottom: 5px;
	display: flex;
	flex-direction: row;
	width: 100%;
	border: 1px solid black;
    border-radius: 10px;
`;

export const FirstColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 70%;
	padding: 10px;
`;

export const SecondColumn = styled.div`
	display: flex;
	flex-direction: column;
	width: 30%;
	padding: 10px;
`;

export const JobTitle = styled.h2`
	margin-bottom: 5px;
`;

export const Author = styled.h4`
	margin-bottom: 10px;
`;

export const Details = styled.h5`
	margin-bottom: 10px;
`;

export const DateContainer = styled.h4``;

export const Link = styled.a`
	background: hsl(192, 70%, 51%);
	text-decoration: none;
	padding: 6.5px 5px;
    width: 70%;
    margin-top: 15px;
	text-align: center;
	color: white;
	cursor: pointer;

	@media screen and (max-width: 600px) {
		width: 70%;
	}
`;