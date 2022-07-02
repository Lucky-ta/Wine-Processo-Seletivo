import styled from 'styled-components';

export const GlobalContainer = styled.div`

`;

export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
    text-align: center;
    margin-top: 4em;

    margin-right: 4em;
    font-family: 'Lato', sans-serif;

    @media(max-width: 690px) {
    margin-left: 4em;
    margin-right: 4em;

  }
`;

export const CardContainer = styled.div`
    background-color: #FFFFFF;
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    width: 15em;
    color: #1D1D1B;
    /* height: 90%; */
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    max-height: 12em;
    object-fit: contain;
`;

export const AddItemButton = styled.button`
    border: none;
    background-color: #7EBC43;
    color: white;
    width: 100%;
    height: 2.6em;
    border-radius: 3.89354px;
    margin-top: 1em;
    box-shadow: 0px 0.973384px 1.94677px rgba(0, 0, 0, 0.2);
`;

export const ItemName = styled.h3`
    font-size: 1em;
    font-weight: 700;
    font-style: normal;
    letter-spacing: -0.222488px;
    padding: 0.5em;
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

export const MemberPrice = styled.span`
    color: #B6116E;
    font-weight: 700;
    font-size: 1.3em;
`;

export const RS = styled.span`
    color: #B6116E;
    font-size: 0.8em;
`;

export const NotMember = styled.p`
    color:  #888888;
    padding: 1em;
    font-size: 0.8em;
`;

export const SideToSideSpansContainer = styled.div`
    padding-top: 0.6em;
`;
