import React from 'react'

import { ModalContainer, ModalContent } from './styles';

export const Modal = ({ children, isError }) => {
  return (
    <ModalContainer isError={!!isError}>
      <ModalContent>
        {children}
      </ModalContent>
    </ModalContainer>
  )
};