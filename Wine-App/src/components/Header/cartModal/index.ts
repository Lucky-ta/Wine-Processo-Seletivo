import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    background-color: #DEDEDE;;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 30em;
    height: 100%;
    right: 0;
    top: 0;
    text-align: center;
    color: black;
    animation-duration: 0.8s;
    animation-name: slidein;

  @keyframes slidein {
  from {
    margin-right: -45%;
  }

  to {
    margin-right: 0%;
  }
  
}
`;

export const ModelHeader = styled.div`
    width: 100%;
    background-color: white;
    height: 3.5em;
    display: flex;
    padding-left: 2em;
    align-items: center;
    gap: 1.6em;
    color: black;
    font-size: 1.6em;
`;

export const CartModelContent = styled.div`

padding-top: 5em;
font-size: 1.8em;
`;
