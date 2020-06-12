import React from 'react';

import { MyButton } from './styles';

export const Button = ({ handleClick, special, text, disabled, children, icon }) => (
    <MyButton 
    	onClick={handleClick} 
    	special={special} 
    	disabled={disabled} 
    	hasChildren={children ? true : false} 
    	isIcon={icon}>
    	{children ? children : text}
    </MyButton>
);
