import React from 'react';

import { useFetching } from './../../hooks/useFetching';
import { usePagination } from './../../hooks/usePagination';

import { Spinner } from './../../components/Spinner/Spinner';
import { Pagination } from './../../components/Pagination/Pagination';
import { Filtering } from './../../components/Filtering/Filtering';
import { InfoModal } from './../../components/InfoModal/InfoModal';
import { Job } from './../../components/Job/Job';

import { Container, JobsSection, JobsList } from './styles.js';

const JOBS_PER_PAGE = 10;

const INITIAL_FILTERS = [
	{
		label: 'Modality',
		param: 'modality',
		value: ''
	}
];

export const Results = ({ query }) => {
	const [loading, jobs, error, setError] = useFetching(`https://carls13-scraper-api.herokuapp.com/jobs?query=${query}`);

	const [paginatedData, 
			currentPage, 
			setCurrent, 
			handleChange, 
			handleClear,  
			filters] = usePagination(INITIAL_FILTERS, jobs, JOBS_PER_PAGE);

	return (
		<Container>
			{error && <InfoModal isError text={`Ocurrió un error: ${error}`} onClick={() => setError(null)}/>}
			{
				loading ? <Spinner/> : 
				<JobsSection>
					<Filtering filters={filters} handleChange={handleChange} handleClear={handleClear}/>
					<JobsList>
						{
							paginatedData.length > 0 && paginatedData[currentPage - 1].map((job, i) => {
								return <Job key={i} data={job}/>
							})
						}
					</JobsList>
					<Pagination 
					currentPage={currentPage} 
					data={paginatedData} 
					setPage={setCurrent}
					recordsPerPage={JOBS_PER_PAGE}
					/>
				</JobsSection>
			}
		</Container>
	)
};