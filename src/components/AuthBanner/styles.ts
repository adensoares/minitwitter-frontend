import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px;
  background: var(--twitter);
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
  height: 72px;
  z-index: 999;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  > h2,
  span {
    color: var(--primary);
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button<{ outlined?: boolean }>`
  padding: 8px 16px;
  color: ${({ outlined }) => (outlined ? 'var(--primary)' : '#000')};
  background-color: ${({ outlined }) => (outlined ? 'transparent' : 'var(--primary)')};
  border: 1px solid #fff;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ outlined }) => (outlined ? 'var(--twitter-light-hover)' : 'var(--white)')};
    border-color: ${({ outlined }) => (outlined ? '#fff' : 'var(--white)')};
  }
`;
