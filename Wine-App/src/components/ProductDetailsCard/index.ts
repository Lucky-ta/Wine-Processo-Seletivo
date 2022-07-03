import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 20% 80%;
    justify-content:center;
    font-family: 'Lato', sans-serif;

`;

export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    text-align: start;
    height: 100%;
    padding-right: 2em;
    padding-top: 4em;
    @media(max-width: 660px) {
        flex-direction: column;
        text-align: center;
        padding: 0;
    }


`;

export const DetailsContentContainer = styled.div`
    width: 100%;
    max-width: 40em;
    padding-left: 1em;
    padding-right: 1.2em;

    @media(max-width: 440px) {
        font-size: 0.6em;
    }   

`;

export const SommelierComentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5em;
`;

export const SommelierTitle = styled.h3`
    color: #111111;
    font-size: 1.3em;
`;

export const SommelierComment = styled.p`
    color: #666666;
    font-family: 'Saira', sans-serif;
    line-height: 150%;
    width: 100%;
    word-wrap: break-word;
`;

export const RegionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
    @media(max-width: 660px) {
        margin: auto;
    }
`;

export const FlagImage = styled.img`
    width: 1.4em;
`;

export const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5em;
    color: #555555;
    font-size: 1.2em;
    font-weight: 700;
    margin-bottom: 2em;
`;

export const LocationContainer = styled.div`
    display: flex;
    gap: 1em;
    color: #C81A78;
    font-size: 1.1em;
    font-weight: 700;
    .region {
        color: #888888;;
    }

    @media(max-width: 660px) {
        justify-content: center;
    }
`;

export const Span = styled.span`
    color:#888888;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4em;
    font-size: 1.2em;
    font-weight: 700;
`;

export const AddItemButton = styled.button`
    background: none;
    border: none;
    color: white;
    width: 100%;
    height: 100%;
    font-weight: 700;

    &:active {
        transform: scale(0.98);
        box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
        color: #C81A78;
    }
`;

export const ArrowButton = styled.button`
    display: flex;
    position: absolute;
    top: 6em;
    left: 2em;
    background: none;
    border: none;
    align-items: center;
    gap: 1em;
    font-size: 1.2em;
    color: #111111;
    margin-top: 2em;
    width: 5em;
    z-index: 1;
    &:hover {
        cursor: pointer;
    }
    &:active {
        cursor: initial;
    }
`;
