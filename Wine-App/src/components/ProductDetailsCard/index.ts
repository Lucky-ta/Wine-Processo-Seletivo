import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    font-family: 'Lato', sans-serif;

`;

export const DetailsContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    text-align: start;
`;

export const DetailsContentContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 30em;
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
