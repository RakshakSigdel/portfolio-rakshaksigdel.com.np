import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  overflow: hidden;
  height: 3rem;
  padding: 0 2rem;
  border-radius: 0.5rem;
  background: var(--primary);
  background-size: 400%;
  color: #fff;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: 0 50%;
    width: 100%;
    height: inherit;
    border-radius: inherit;
    background: var(--secondary);
    transition: all 0.475s;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const ButtonContent = styled.span`
  position: relative;
  z-index: 1;
`;

const ButtonHover = ({ buttonText, onClick }) => {
  return (
    <Button onClick={onClick}>
      <ButtonContent>{buttonText}</ButtonContent>
    </Button>
  );
};

export default ButtonHover;
