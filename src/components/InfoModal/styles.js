import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Text = styled.h2`
	text-align: center;
	margin: 10px 0;
`;

export const IconDiv = styled.div`
	${props => !props.isError ? 
	css`
		color: #107E08;
	` :
	css`
		color: red;
	`
	}
`;