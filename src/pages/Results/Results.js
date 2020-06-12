import React, { useState, Fragment } from 'react';

import { useFetching } from './../../hooks/useFetching';
import { usePagination } from './../../hooks/usePagination';

const COUNTRIES_PER_PAGE = 20;

const INITIAL_FILTERS = [
	{
		label: 'Country',
		param: 'country',
		value: ''
	}
];

export const Results = ({ query }) => {
	const [loading, countries, error, setError] = useFetching('https://carls13-scraper-api.herokuapp.com/jobs');
	const [countryDetail, setCountry] = useState(null);

	const [ paginatedData, 
			currentPage, 
			setCurrent, 
			handleChange, 
			handleClear,  
			filters] = usePagination(INITIAL_FILTERS, countries, COUNTRIES_PER_PAGE);

	return (
		<Fragment>
			This is the query: {query}
		</Fragment>
	)
};