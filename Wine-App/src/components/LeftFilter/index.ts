import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 2em;
    font-family: 'Lato', sans-serif;
    color: #333333;;
    margin-top: 8em;
    margin-left: 4em;

    @media(max-width: 690px) {
    display: none;
  }

`;

export const FilterContainer = styled.div`
    display:flex;
    flex-direction: column;
    gap: 1em;
`;

export const FilterTitle = styled.h3`
    color: #000000;
    font-weight: 700;
    font-size: 1.3em;
`;

export const RadioInput = styled.input`
    margin-right: 0.8em;
`;

export const RadioLabel = styled.label``;