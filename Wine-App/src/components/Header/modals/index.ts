import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 20em;
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
    margin-top: 2em;
    margin-left: 2em;
    display: flex;
    text-align: center;
    align-items: center;
    gap: 1em;
  }

`;

export default Container;
