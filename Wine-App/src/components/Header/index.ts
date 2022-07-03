import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    border: 0.5px solid #CCCCCC;
    width: 100%;
    height: 10%;
    align-items: center;
    font-family: 'Neo Sans Std', sans-serif;
    background-color: #FFFFFF;
    color: grey;
    position: fixed;
    top: 0;
    justify-content: space-evenly;

    transition: left 4s;
    
    .menu{
        display: none;
    }

    @media(max-width: 970px) {
        justify-content: space-around;
    .profileBtn, .content {
        display: none;
    }

    .menu {
        display: block;
        padding-left: 2em;
    }

    .image {
    }

    }`;

export const ContentContainer = styled.div`
    display: flex;
    width: 40%;
    margin-left: 2em;
    justify-content: space-around;
`;

export const Image = styled.img`
`;

export const ButtonsContainer = styled.div`
    display: flex;
    width: 25%;
    margin-left: 6em;
    justify-content: space-evenly;
`;

export const Button = styled.button`
    background: none;
    border: none;
    color: grey;
`;

export const SwitchPageButton = styled.span`
    color:#D14B8F;
    text-decoration: underline 4px;
    text-underline-offset: 1em
`;

export const SearchInput = styled.input`
    border-color: black;
    border-radius: 3em;
    padding: 6px;
    width: 15em;
    transition: all 0.5s;
    &:focus{
        width: 25em;
    }
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
    height: 2.4em;
    gap: 1em;

    /* justify-content: flex-end; */
`;
