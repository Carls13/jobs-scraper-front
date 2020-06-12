import React from 'react';

import { FaCheckSquare } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

import { Text, IconDiv } from './styles.js';

import { Modal } from './../Modal/Modal';
import { Button } from './../Button/Button';

export const InfoModal = ({ text, onClick, isError }) => (
   <Modal isError>
   		<IconDiv isError={!!isError}>
   			{!isError ? <FaCheckSquare size="75px"/> : <MdError size="75px"/> }
   		</IconDiv>
    	<Text>{text}</Text>
    	<Button handleClick={onClick} text="Aceptar"/>
   </Modal>
);
