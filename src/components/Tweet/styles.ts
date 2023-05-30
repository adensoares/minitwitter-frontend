import styled, {css} from 'styled-components';
import {ThreeDots} from '../../assets/styles/icons';



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 16px;
    border-bottom: 1px solid var(--outline);
    max-width: 100%;
    position: relative;
    cursor: pointer;

    &:hover {
        background: var(--outline);
    }

`;

export const Avatar = styled.div`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--gray);
    position: absolute;
    top: 0;
    left: 0;
    margin: 15px;
`;

export const ActionButtons = styled.div`
    border-radius: 50%;
    position: absolute;
    top: 0;
    right: 0;
    margin: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
`;


export const Content = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    margin-top: 2px;
    padding-left: 59px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  white-space: nowrap;
  
  > strong {
    margin-right: 5px ;
  }

  > span, time {
    color: var(--gray);
  }

> strong, span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

`;

export const Dot = styled.div`
    background: var(--gray);
    width: 2px;
    height: 2px;
    margin: 0 10px;
`;

export const Body = styled.div`
    font-size: 14px;
    margin-top: 4px;
`;

export const ImageContent = styled.div`
    margin-top: 12px;
    width: 100%;
    height: min(285px, max(175px, 41vw));
    background: var(--gray);
    border-radius: 14px;

    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

const iconCSS = css`
    width: 21px;
    height: 21px;
    cursor: pointer;

    &.active {
        fill: var(--twitter);
    }
`;


export const ThreeDotsIcon = styled(ThreeDots)`
    ${iconCSS}
`;
