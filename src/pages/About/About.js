import React from 'react';

import { Container, Name, Picture, Description, Link } from './styles';

import myself from './myself.JPG';

export const About = () => {
	return (
		<Container>
			<Name>Carlos Samuel Hernandez</Name>
			<Picture src={myself} alt="Jobs scraper"/>
			<Description>
				This a web scraping project. I scraped 3 pages and extracted the info of job positions
				according to a given query. This was made with BeautifulSoup and served through a Flask
				app, all made with Python.
			</Description>
			<Description>
				This is just one of many projects I have built, to see them all, you can go to my 
				<Link href="https://carlosshb.com/portfolio" target="_blank"> portfolio.</Link> If 
				you want to catch up with me, I leave you my 
				<Link href="https://github.com/Carls13" target="_blank"> Github</Link> and 
				<Link href="https://www.linkedin.com/in/carlos-samuel-hern%C3%A1ndez-blanco-b35075152/" target="_blank"> LinkedIn</Link> profiles. 
				Thank you and I hope this app is useful for you.
			</Description>
		</Container>
	)
};