import styled, { css } from 'styled-components';

import { Link as LinkRouter } from '@reach/router';

export const HeaderContainer = styled.header`
	padding: 15px;
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const LogoContainer = styled.div`
	width: 20%;
	margin: 0 5%;

	@media screen and (max-width: 600px) {
		width: 50%;
		margin: 0;
	}
`;

export const Logo = styled.img`
	display: block;
	width: 60%;
`;

export const TitleContainer = styled.div`
	width: 40%;
	margin: 0;
	font-weight: bold;
	font-size: 24px;

	@media screen and (max-width: 600px) {
		display: none;
		width: unset;
		margin: unset;
	}
`;

export const MenuContainer = styled.div`
	width: 35%;
	margin: 0;
	display: flex;
	flex-direction: row;

	@media screen and (max-width: 600px) {
		display: none;
		width: unset;
		margin: unset;
	}
`;

export const Option = styled(LinkRouter)`
	text-decoration: none;
	color: black;
	width: 15%;
	margin: 0 2.5%;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		color: lightgray;
	}
`;

export const ButtonContainer = styled.div`
	width: 15%;
	margin: 0 5%;

	@media screen and (max-width: 600px) {
		display: none;
		width: unset;
		margin: unset;
	}
`;

export const Anchor = styled.a`
	text-decoration: none;
	background: hsl(192, 70%, 51%);
	padding: 12.5px 10px;
	border-radius: 20px;
    width: auto;
	display: block;
	margin: auto;
	text-align: center;
	color: white;
	cursor: pointer;
`;

export const BurgerContainer = styled.div`
	display: none;

	@media screen and (max-width: 600px) {
		display: flex;
		flex-direction: column;
		margin-left: 35%;
		width: 15%;
	}
`;

export const Burger = styled.img`
	width: 70%;
	display: block;
	margin: auto;
	position: relative;
	z-index: 6;
`;

export const BlackBackground = styled.div`
	display: none;
	position: absolute;
	z-index: 5;
	background-color: rgba(0, 0, 0, 0.7);
	width: 100vw;
	height: 577vh;
	top: -50px;

	${props => 
		props.showMenu ? css `display: block;`: null
	}
`;

export const MobileMenu = styled.div`
	display: none;
	
	@media screen and (max-width: 600px) {
		flex-direction: column;
		position: absolute;
		z-index: 6;
		background-color: white;
		width: 90vw;
		left: 5vw;
		flex-direction: column;
		text-align: center;
		${props => 
			props.showMenu ? css `display: flex;`: null
		}
	}
`;

export const MobileOption = styled(LinkRouter)`
	text-decoration: none;
	color: black;
	text-align: center;
	padding: 5px;
	font-size: 20px;
`;