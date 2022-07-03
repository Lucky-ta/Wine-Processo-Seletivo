import styled from 'styled-components';

const MainContentContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

    .motion {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2em;
    text-align: center;
    margin-top: 4em;
    margin-left: 14em;
    font-family: 'Lato', sans-serif;
    justify-content: center;
    @media(max-width: 1050px) {
        max-width: 100%;
        margin-right: 6em;
        margin-left: 6em;
  }
  @media(max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    max-width: 30em;
  }

  @media(max-width: 550px) {
    grid-template-columns: 1fr;
    width: 100%;
  }

    }

    .motionCard {
    background-color: #FFFFFF;
    box-shadow: 0px 9.73384px 14.6008px rgba(0, 0, 0, 0.1);
    width: 15em;
    color: #1D1D1B;

    @media(max-width: 550px) {
    grid-template-columns: 1fr;
    width: 18em;
    height: 26em;
  }
    }
    z-index: 2;

`;

export default MainContentContainer;
