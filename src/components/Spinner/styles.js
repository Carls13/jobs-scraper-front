import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  ${props => props.small ? 'height: auto;' : 'height: 60vh;'}
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid hsl(192, 70%, 31%);
  border-radius: 50%;
  border-top-color: hsl(192, 70%, 51%);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;