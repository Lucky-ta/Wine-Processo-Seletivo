import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    /* height: 100vh; */
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
    /* margin-top: 6em; */
    /* max-height: 45em; */
    @media(max-width: 660px) {
        flex-direction: column;
        text-align: center;
        padding: 0;
}
`;

export const DetailsContentContainer = styled.div`
    width: 100%;
    max-width: 40em;

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

export const QuantityButton = styled.button`
    
`;

export const RegionContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1em;
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
`;

export const Span = styled.span`
    color:#888888;
`;
