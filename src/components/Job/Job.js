import React from 'react';

import { Container, FirstColumn, SecondColumn, JobTitle, Author, Details, DateContainer, Link } from './styles';

export const Job = ({ data }) => {
	const { job, author, place, modality, link, date } = data;
	return (
		<Container>
			<FirstColumn>
				<JobTitle>{job}</JobTitle>
				<Author>{author}</Author>
				<Details>{place} | {modality}</Details>
			</FirstColumn>
			<SecondColumn>
				<DateContainer>{date}</DateContainer>
				<Link href={link} target="_blank">More info</Link>
			</SecondColumn>
		</Container>
	)
};