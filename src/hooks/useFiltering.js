import { useState } from 'react';

export const useFiltering = (initialFilters, initialData) => {
	const [filters, setFilters] = useState(initialFilters);

	const filterData = () => {
	  let data = initialData
      filters.forEach(({ param, value }) => {
        data = data.filter((element) => element[param].toLowerCase().includes(value.toLowerCase()))
      })

      return data;
	}

	const handleChange = (e) => {
		const { name, value } = e.target;

		const newState = filters.map((filter, i) => {
			if (filter.param !== name) return filter;
			return {
				...filter,
				value
			};
		});

		setFilters(newState);
	};
	
	return [filterData, handleChange, setFilters, filters];
}