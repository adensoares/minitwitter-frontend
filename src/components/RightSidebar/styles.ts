import styled from "styled-components";


export const Container = styled.div`
    display: none;

    @media (min-width: 1000px) {
        display: flex;
        flex-direction: column;

        width: min-content(399px, 100%);
        min-width: 300px;
        position: sticky;
        top: 0;
        left: 0;

        padding: 9px 19px 20px;

        max-height: 100vh;
        overflow-y: auto;
    }
`;