import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    background-color: grey;
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
    /* width: 300%; */
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
`;

export default Container;
