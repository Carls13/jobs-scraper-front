import styled from 'styled-components';

export const Container = styled.div`
	padding: 10px;
	display: flex;
	flex-direction: column;
	text-align: center;
`;

export const Name = styled.h1``;

export const Picture = styled.img`
	width: 60vw;
	height: auto;
	border-radius: 5px;
	display: block;
	margin: 10px auto;
	@media screen and (max-width: 600px) {
		width: 75vw;
	}
`;

export const Description = styled.p`
	margin: 10px 0;
	padding: 0 20vw; 
	@media screen and (max-width: 600px) {
		padding: 0 12.5vw;
	}
`;

export const Link = styled.a`
	text-decoration: none;
	font-weight: bold;
	color: hsl(192, 70%, 51%);
`;