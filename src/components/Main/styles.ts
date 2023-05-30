import styled, {css} from "styled-components";
import {Home, Search, Notifications, Email} from '../../assets/styles/icons';


export const Container = styled.div`
    background: var(--primary);
    display: flex;
    flex-direction: column;

    width: min(601px, 100%);

    @media (min-width: 500px) {
        border-left: 1px solid var(--outline);
        border-right: 1px solid var(--outline);
    }
`;

export const Header = styled.div`
    background: var(--primary);
    position: sticky;
    top: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    text-align: start;
    border-bottom: 1px solid var(--outline);

`;

export const Title = styled.div`
   display: flex;

   > h2 {
        padding: 8px 0 9px 13px;
    }

   @media (max-width: 500px) {
        display: flex;
        justify-content: center;
        
        > h2 {
            display: none;
        }

    }
`;

export const Logo = styled.div`
    display: none;
    margin-top: 16px;

    img {
        height: 30px;
        width: 30px;
    }
    margin-bottom: 20px;

    @media (max-width: 500px) {
        display: inline;
    }


`;


export const Tabs = styled.div`
    display: flex;
    flex-direction: row;
`;

export const TabButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 52px;
    width: 100%;
    font-size: 16px;
    cursor: pointer;

    &.active {
        > span {
            border-bottom: 4px solid var(--twitter);
            padding: 15px;

        }
        font-weight: bold;
    }

    &:hover {
    background: var(--outline);
  }
    
`;


export const BottomMenu = styled.div`
    background: var(--primary);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    border-top: 1px solid var(--outline);
    display: flex;
    justify-content: space-between;
    padding: 8px min(46px, max(10vw, 10px));

    @media (min-width: 500px) {
        display: none;
    }

`;

const iconCSS = css`
    width: 31px;
    height: 31px;
    cursor: pointer;

    &.active {
        fill: var(--twitter);
    }
`;

export const HomeIcon = styled(Home)`
    ${iconCSS}
`;
export const SearchIcon = styled(Search)`
    ${iconCSS}
`;
export const BellIcon = styled(Notifications)`
    ${iconCSS}
`;
export const EmailIcon = styled(Email)`
    ${iconCSS}
`;

