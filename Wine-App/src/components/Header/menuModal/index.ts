import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    background-color: #DEDEDE;;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 25em;
    height: 90%;
    left: 0;
    bottom: 0;
    animation-duration: 0.8s;
    animation-name: slidein;

  @keyframes slidein {
  from {
    margin-left: -45%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

  .menuProfilePic {
    display: flex;
    text-align: center;
    align-items: center;
    gap: 1em;
    color: black;
    font-size: 0.9em;
    font: 700;
  }

  .HeaderContainer {
    display: flex;
    background-color: white;
    width: 100%;
    height: 5em;
    justify-content: start;
    text-align: center;
    padding-left: 1.4em;
  }

`;

export default Container;
