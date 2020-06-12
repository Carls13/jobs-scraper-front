import React, { useState } from 'react';

import { Container, Illustration, Instructions, Input, Button, Disclaimer } from './styles';

import { useNavigate } from "@reach/router";

import illustration from './rocket.svg';

export const Index = () => {
	const [query, setQuery] = useState("");
    const navigate = useNavigate();

	const handleChange = (e) => {
		const { value } = e.target;
		setQuery(value);
	}

	const handleClick = (e) => {
		e.preventDefault();
		navigate(`/results/${query}`);
	}

	return (
		<Container>
			<Instructions>
				Job scraper
			</Instructions>
			<Illustration src={illustration} alt="Carls 13 jobs scraper"/>
			<Input value={query}
				   placeholder="Enter the position you're looking for..."
				   onChange={handleChange}
				   type="text"
				   name="query" />
			<Button onClick={handleClick}>Search</Button>
			<Disclaimer>
				The data is obtained from pages like Get On Board, RemoteOk and Triple Byte. <br/>
				Please, note that some of them didn't publish a date so the offer info could mismatch from the actual one.
			</Disclaimer>
		</Container>
	)
};