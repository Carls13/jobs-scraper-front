import styled, { css } from 'styled-components';

export const MyButton = styled.button`
	&[disabled] {
		opacity: .3;
	}
	
    border-radius: 5px;
	color: #FFF;
	width: 50%;
	text-align: center;
	cursor: pointer;
	
	${ props => {
		if(props.hasChildren) {
			return css`
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: center;
				height: auto;
				padding: 5px;
				margin-left: auto;
				`;
		} else {
			return css`
				display: block;
				height: 32px;
				margin: 20px auto;
				`;
			}
		}
	}

	${props => props.isIcon ? css`
		margin-left: unset!important;
		margin-right: 5px;
		padding: 10px!important;
		width: auto!important;
		` : null}

	${ props => {
		switch (props.special){
			case 'confirm': 
				return css`
					background: #185904;
				`
			case 'cancel':
				return css`
					background: #F00;
					`
			default: 
				return css`
					background: black;
					`
			}
		}
	}
`;