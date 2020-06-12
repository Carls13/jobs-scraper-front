import React from 'react';

import { SearchSpan, FilterContainer, FilterBlock, Label, Input } from './styles';

import { Button } from './../../components/Button/Button';

import { FaSearch, FaTrash } from 'react-icons/fa';

export const Filtering = ({ filters, handleChange, handleClear }) => {
	const filterForm = filters.map(({label, param, value}, i) => {
		return (
			<FilterBlock key={i}>
				<Label>{label}:</Label>
				<Input
					placeholder={label}
					name={param}
					type="text"
					value={value}
					onChange={handleChange}
					/>
			</FilterBlock>
			);
	});

	return (
		<FilterContainer>
			<SearchSpan>
				<FaSearch size="23px"/>
			</SearchSpan>
			{filterForm}
			<Button icon special="cancel" handleClick={handleClear}>
				<FaTrash size="22px"/>
			</Button>
		</FilterContainer>
	)
};