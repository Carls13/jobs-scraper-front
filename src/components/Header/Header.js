import React, { useState, Fragment } from 'react';

import { HeaderContainer, 
		LogoContainer, 
		Logo, 
		TitleContainer, 
		MenuContainer,
		Option, 
		ButtonContainer, 
		Anchor, 
		BurgerContainer, 
		Burger, 
		BlackBackground,
		MobileMenu,
		MobileOption } from './styles';

import logo from './logo.png';
import burger from './icon-hamburger.svg';

export const Header = () => {
	const [showMenu, toggleMenu] = useState(false)

	return (
		<Fragment>
			<BlackBackground showMenu={showMenu} />
			<HeaderContainer>
				<LogoContainer>
					<Logo src={logo} alt="Easybank"/>
				</LogoContainer>
				<TitleContainer>Find the job you're looking for</TitleContainer>
				<MenuContainer>
					<Option to="/">Home</Option>
					<Option to="/about">About</Option>
				</MenuContainer>
				<ButtonContainer>
					<Anchor href="#search">Search now!</Anchor>
				</ButtonContainer>
				<BurgerContainer>
					<Burger onClick={() => toggleMenu(!showMenu)} src={burger} alt="Easybank" />
				</BurgerContainer>
			</HeaderContainer>
			<MobileMenu onClick={() => toggleMenu(false)} showMenu={showMenu}>
				<MobileOption to="/">Home</MobileOption>
				<MobileOption to="/about">About</MobileOption>
			</MobileMenu>
		</Fragment>
	)
};