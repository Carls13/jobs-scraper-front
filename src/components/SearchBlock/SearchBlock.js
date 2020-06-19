import React, { Fragment, useState } from 'react';

import { Input, Button, } from './styles';

import { useNavigate } from "@reach/router";

export const SearchBlock = ({ handleSubmit }) => {
	const [query, setQuery] = useState("");
    const navigate = useNavigate();

	const handleChange = (e) => {
		const { value } = e.target;
		setQuery(value);
	}

	const handleClick = (e) => {
		e.preventDefault();
		const myQuery = query.toLowerCase().replace(" ", "-");
		navigate(`/results/${myQuery}`);
		if (handleSubmit) handleSubmit();
	}

	return (
		<Fragment>
			<Input value={query}
				   placeholder="Enter the position you're looking for..."
				   onChange={handleChange}
				   type="text"
				   name="query" />
			<Button onClick={handleClick}>Search</Button>
		</Fragment>
	)
};