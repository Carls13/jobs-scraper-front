import { useState, useEffect } from 'react';
import { useFiltering } from './useFiltering';

import { chunkArray } from './../utils/chunk.js';

export const usePagination = (initialFilters, initialData, amount) => {
	const [filterData, handleChange, setFilters, filters] = useFiltering(initialFilters, initialData);
	const [paginatedData, setPaginatedData] = useState(null);
	const [currentPage, setCurrent] = useState(1);

	const onFiltersSubmit = () => {
		setCurrent(1);
		setPaginatedData(chunkArray(filterData(), amount));
	};

	const handleClear = () => {
		setFilters(initialFilters);
	};

	useEffect(onFiltersSubmit, [filters, initialData])

	return [paginatedData, currentPage, setCurrent, handleChange, handleClear, filters];
}