import React from 'react';

import { Container, Text, Anchor } from './styles.js';

export const Footer = () => {
	return (
		<Container>
			<Text>Developed by: 
				<Anchor href="https://carlosshb.com" target="_blank">Carls13.</Anchor>
			</Text>
		</Container>
	)
};