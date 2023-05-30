import styled from 'styled-components';

export const TweetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-bottom: 1px solid var(--outline);
    border-radius: 5px;
    padding: 20px;
    background-color: #fff;

    position: relative;
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

export const TweetTextArea = styled.textarea`
    resize: none;
    border: none;
    width: 100%;
    outline: none;
    font-size: 18px;
    padding-left: 59px;
`;

export const TweetButton = styled.button`
    align-self: flex-end;
    padding: 10px 20px;
    border-radius: 20px;
    border: none;
    color: #fff;
    font-size: 16px;
    background-color: #1DA1F2;
    cursor: pointer;
    margin-top: 10px;
    &:disabled {
        background-color: #B0DFF5;
    }
`;
