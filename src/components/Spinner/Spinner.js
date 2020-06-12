import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './styles'

export const Spinner = ({ small }) => (
   <SpinnerOverlay small={small}>
		<SpinnerContainer/>
	</SpinnerOverlay>
);