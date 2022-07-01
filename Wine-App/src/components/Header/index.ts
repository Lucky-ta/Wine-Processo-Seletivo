import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border: 0.5px solid #CCCCCC;
    width: 100%;
    height: 4.8em;
    align-items: center;
    font-family: 'Neo Sans Std', sans-serif;
    background-color: #FFFFFF;
    color: grey;
    position: fixed;
    top: 0;
`;

export const ContentContainer = styled.div`
    display: flex;
    margin-left: 0;
    gap: 2em;
    padding-left: 5em;
    padding-right: 6em;
`;

export const Image = styled.img`
    padding-left: 7em;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 3em;
    margin: auto;
`;

export const Button = styled.button`
    background: none;
    border: none;
    color: grey;
`;

export const SwitchPageButton = styled.span`
    color:#D14B8F;
    text-decoration: underline 4px;
    text-underline-offset: 1.7em
`;

export const SearchInput = styled.input`
    border-color: black;
    border-radius: 3em;
    padding: 5px;
`;

export const SearchButton = styled.button`
    background: none;
    border: none;
    color: grey;
    &:hover {
        cursor: pointer;
        color: yellowgreen
    }
`;

export const SearchInputContainer = styled.div`
    display: flex;
    gap: 1em;
`;
