import styled, { css } from 'styled-components';

interface props {
    page?: string;
    classN?: string
}

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

    z-index: 2;
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

    &:hover{
        cursor: pointer;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    width: 25%;
    margin-left: 6em;
    justify-content: space-evenly;

    @media(max-width: 550px) {
        justify-content: space-around;
        margin-left: 1em;
  }
`;

export const Button = styled.button<props>`
    background: none;
    border: none;
    color: grey;


    ${({ classN }) => classN === 'cart' && css`
            background-color: #F6B554;
            border-radius: 2em;
            width: 3.6em;
            height: 3.6em

    `}

    ${({ page }) => page === 'details' && css`
        color: white;
        
    &:active {
        color: #C81A78;
    }
    `}

    &:hover{
        cursor: pointer;
        color:  #B6116E
    }
`;

export const SwitchPageButton = styled.span`
    color:#D14B8F;
    text-decoration: underline 4px;
    text-underline-offset: 1em
`;

export const SearchInput = styled.input`
    border-color: black;
    border-radius: 0.8em;
    padding: 6px;
    width: 15em;
    transition: all 0.5s;
    &:focus, &:hover{
        width: 25em;
    }

    @media(max-width: 550px) {
        &:focus, &:hover{
        width: 15em;
    }
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
    height: 2.6em;
    gap: 1em;
`;

export const SvgImage = styled.img<props>`
    width: 3em;

    ${({ classN }) => classN === 'cart' && css`
        width: 2.6em;
        background-color: orange;
        
        border-bottom-left-radius: 0.9em;
        border-bottom-right-radius: 0.9em;
    `}
`;
