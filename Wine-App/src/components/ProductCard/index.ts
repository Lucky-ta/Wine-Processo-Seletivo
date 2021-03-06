import styled, { css } from 'styled-components';

interface props {
    page: string
}

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const GlobalContainer = styled.div`
    width: 100%;
    height: 100%;
    
`;

export const Image = styled.img<props>`
    width: 100%;
    height: 100%;
    max-height: 12em;
    object-fit: contain;

    ${({ page }) => page === 'details' && css`
    object-fit: none;
    max-height: none;
    max-width: 40em;
    max-height: 40em;


    @media(max-width: 440px) {
        width: 50%;
        object-fit: contain;
        margin-top: 10em;
    }   
    `}

`;

export const AddItemButtonDiv = styled.div<props>`
    border: none;
    background-color: #7EBC43;
    color: white;
    width: 100%;
    height: 2.6em;
    border-radius: 3.89354px;
    margin-top: 1em;
    box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);

        display: flex;
        justify-content: center;

    ${({ page }) => page === 'details' && css`
        height: 4em;
        align-items: center;
        max-width: 25em;
        
        @media(max-width: 660px) {
            max-width: none;
            height: 6em;
        }       
    `}
`;

export const ItemName = styled.h3<props>`
    font-size: 1em;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.222488px;
    padding: 0.5em;

    ${({ page }) => page === 'details' && css`
    margin: 0;
    padding: 0;
    font-size: 2em;
    color: #111111;
    padding-bottom: 0.3em;
    `}
`;

export const DiscountPrice = styled.span`
    color: grey;
    text-decoration: line-through;
    margin-right: 1em;
    font-size: 0.8em;
`;

export const Discount = styled.span`
    background-color: #F79552;
    color: white;
    font-size: 0.8em;
    border-radius: 1.94677px;
    padding: 0.1em;
`;

export const Member = styled.span`
    color: #1D1D1B;
    font-weight: 700;
    font-size: 0.8em;
    padding: 0.5em;
`;

export const MemberPrice = styled.span<props>`
    color: #B6116E;
    font-weight: 700;
    font-size: 1.3em;

    ${({ page }) => page === 'details' && css`
    margin: 0;
    padding: 0;
    font-size: 2.7em;
    `}
`;

export const RS = styled.span<props>`
    color: #B6116E;
    font-size: 0.8em;

    ${({ page }) => page === 'details' && css`
    margin: 0;
    padding: 0;
    font-size: 1.7em;
    font-weight: 800;
    `}
`;

export const NotMember = styled.p<props>`
    color:  #888888;
    padding: 1em;
    font-size: 0.8em;

    ${({ page }) => page === 'details' && css`
    margin: 0;
    padding: 0;
    padding-bottom: 2.2em;
    font-size: 1em;
    font-weight: 700;
    `}
`;

export const SideToSideSpansContainer = styled.div`
    padding-top: 0.6em;
`;

export const ShowMoreButton = styled.button`
    display: none;
    @media(max-width: 800px) {
        display: block;
        background: none;
        border: 2px solid #B6116E;
        width: 100%;
        height: 3em;
        color:  #B6116E;
        transition: 0.2s all;
        max-width: 30em;
        margin: auto;
        margin-top: 2em;
        margin-bottom: 2em;
        &:hover {
            background-color: #B6116E;
            color: white;
            cursor: pointer;
        }

        &:active {
            background-color: white;
            color: #B6116E;
            transform: scale(0.98);
            box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        }
  }
`;
