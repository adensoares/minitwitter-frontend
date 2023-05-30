import styled from 'styled-components';

export const TweetButton = styled.button`
  border: none;
  border-radius: 50px;
  background: var(--twitter);
  font-weight: bold;
  font-size: 15px;
  color: var(--primary);
  cursor: pointer;
  height: 40px;
  width: 40px;


  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background: var(--twitter-light-hover);
  }

  > span {
        display: none;
    }

  @media (min-width: 1280px) {
      width: 250px;
      height: 52px;


      > span {
          display: inline;
      }        
    }


`;
