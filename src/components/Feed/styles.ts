import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction: column;
    flex-shrink: 0;    
`;

export const EmptyFeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: var(--gray);
  h2 {
    font-size: 18px;
    margin-bottom: 10px;
    color: #000;
  }
  p {
    font-size: 14px;
  }
`;

export const LoadingMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 18px;
`;


export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  color: red;
  font-size: 18px;
`;
