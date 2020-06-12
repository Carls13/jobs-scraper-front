import React, { useState, Fragment } from 'react';

import { HeaderContainer, 
		LogoContainer, 
		Logo, 
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
				<MenuContainer>
					<Option href="#contact">Home</Option>
					<Option href="#contact">About</Option>
				</MenuContainer>
				<ButtonContainer>
					<Anchor href="#contact">Search now!</Anchor>
				</ButtonContainer>
				<BurgerContainer>
					<Burger onClick={() => toggleMenu(!showMenu)} src={burger} alt="Easybank" />
				</BurgerContainer>
			</HeaderContainer>
			<MobileMenu onClick={() => toggleMenu(false)} showMenu={showMenu}>
				<MobileOption href="#contact">Home</MobileOption>
				<MobileOption href="#contact">About</MobileOption>
			</MobileMenu>
		</Fragment>
	)
};