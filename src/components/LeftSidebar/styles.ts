import styled, {css} from "styled-components";
import {Home, Search, Notifications, Email} from '../../assets/styles/icons';


export const Container = styled.div`
    display: none;

    @media (min-width: 500px) {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        position: sticky;
        top: 0;
        left: 0;
        padding: 9px 19px 20px;
        max-height: 100vh;
        overflow-y: auto;
    }
`;

export const Top = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 1280px) {
        align-items: flex-start;
        min-width: 300px;
    }

`;

export const Logo = styled.div`
    img {
        height: 30px;
        width: 30px;
    }
    margin-bottom: 20px;
`;

export const MenuButton = styled.button`
    display: flex;
    align-items: center;
    flex-shrink: 0;

    > span {
        display: none;
    }

    @media (min-width: 1280px) {
        > span {
            display: inline;
            margin-left: 19px;
            font-size: 19px;
        }

        padding-right: 15px;
    }

    padding: 8.25px 0;
    outline: 0;

    & + button {
        margin-top: 16.5px ;
    }

    cursor: pointer;
    border-radius: 25px;

    &:hover,
    &.active {
        > span {
            font-weight: bold;
        }
    }

`;


export const Bottom = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;

export const Avatar = styled.div`
    width: 39px;
    height: 39px;
    flex-shrink: 0;
    border-radius: 50%;
    background-color: var(--gray);
`;

export const UserInfo = styled.div`
    display: none;

    @media (min-width: 1280px) {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        font-size: 14px;

        > span {
            color: var(--gray);
        }
    }
`;


const iconCSS = css`
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    cursor: pointer;
    fill: var(--secondary);

    &:hover,
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

