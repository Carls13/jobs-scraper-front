import React from 'react';

import { PaginationDiv, PagesControl, PrevNext, Prev, Next, Pages, Page, Info, Text } from './styles.js';

export const Pagination = ({ data, currentPage, setPage, recordsPerPage }) => {
	const showingFrom = (currentPage - 1) * recordsPerPage + 1;

	let totalPages;
	let total;
	let showingUntil;
	if (data) {
		totalPages = data.length
		total = data.reduce(
	      (counter, page) => counter + page.length
	      ,
	      0
	    );
	    showingUntil = (currentPage === totalPages) ? (currentPage - 1) * recordsPerPage + data[currentPage - 1].length : (currentPage) * recordsPerPage;
	};

	return (
		<PaginationDiv>
			<PagesControl>
				<PrevNext>
					{currentPage !== 1 && <Prev onClick={() => setPage(currentPage - 1)}>Previous</Prev>}
					{(currentPage !== data.length && totalPages > 0) && <Next onClick={() => setPage(currentPage + 1)}>Next</Next>}
				</PrevNext>
					<Pages>
						{
							// eslint-disable-next-line
							data.map((page, i) => {
								const pageToControl = i + 1;
								const condition = (pageToControl === 1)  || (pageToControl === currentPage - 1) ||
												  (pageToControl === currentPage) || (pageToControl === currentPage + 1)
												   || (pageToControl === totalPages);


								if (condition) return <Page 
														onClick={() => setPage(i + 1)} 
														key={i} 
														current={currentPage === i + 1}>{i + 1}</Page>
							})
						}
					</Pages>
			</PagesControl>
			<Info>
				<Text>{`Current page: ${totalPages === 0 ? totalPages : currentPage}`}</Text>
				<Text>{`Showing records from: ${totalPages === 0 ? 0 : `${showingFrom} - ${showingUntil}`}`}</Text>
				<Text>{`Total pages: ${totalPages}`}</Text>
				<Text>{`Records per page: ${recordsPerPage}`}</Text>
				<Text>{`Total records: ${total}`}</Text>
			</Info>
		</PaginationDiv>
	)
};