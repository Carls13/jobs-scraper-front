import styled from 'styled-components';

export const PaginationDiv = styled.div`
	margin: 10px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const PagesControl = styled.div`
	font-weight: bold;
	margin: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PrevNext = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Prev = styled.div`
	margin: 0 30px;
	cursor: pointer;
	color: hsl(304, 93%, 17%);
`;

export const Pages = styled.div`
	margin: 0 30px;
	display: flex;
	flex-direction: row;
`;

export const Page = styled.div`
	padding: 15px;
	cursor: pointer;
	margin: 5px;
	color: white;
	${props => props.current ? 'background-color: hsl(304, 93%, 17%);' : 'background-color: black;'}
`

export const Next = styled.div`
	margin: 0 30px;
	cursor: pointer;
	color: hsl(304, 93%, 17%);
`;

export const Info = styled.div`
	text-align: center;
`;

export const Text = styled.h5`
	margin-bottom: 10px;
`;
