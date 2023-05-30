import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  right: 0;
  top: 20px;
  background-color: var(--primary);
  border: 1px solid var(--outline);
  border-radius: 10px;
  width: 150px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  z-index: 999;
`;

export const Option = styled.div`
  padding: 12px;
  cursor: pointer;
  color: var(--black);
  
  &:hover {
    background-color: var(--outline);
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--outline);
  }
`;
