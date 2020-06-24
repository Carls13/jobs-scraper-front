import React from 'react';

import { Container, Illustration, Disclaimer } from './styles';

import { SearchBlock } from './../../components/SearchBlock/SearchBlock';

import illustration from './rocket.svg';

export const Index = () => {
	return (
		<Container>
			<Illustration src={illustration} alt="Carls 13 jobs scraper"/>
			<SearchBlock id="search"/>
			<Disclaimer>
				The data is obtained from pages like Get On Board, RemoteOk and Triple Byte. <br/>
				Please, note that some of them didn't publish a date so the offer info could mismatch from the actual one.
			</Disclaimer>
		</Container>
	)
};