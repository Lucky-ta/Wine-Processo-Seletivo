import styled from 'styled-components';

const StyledPaginateContainer = styled.div`
  .container, .isRender {
    display: flex;
    color: #0366d6;
    gap: 2em;
    align-items: center;
    list-style-type: none;
    width: 100%;
    padding-top: 2.3em;
    padding-bottom: 1.3em;
    justify-content: center;

    @media(max-width:800px) {
      display: none;
  }
  }

  .isRender {
    position: absolute;
    bottom: 0;
  }

  .prev, .next {
    color: white;
    background-color: #B6116E;
    border: 2px solid #B6116E;
    padding: 0.3em;
    border-radius: 4px;
    height: 100%;
    width: 100%;
    font-size: 1.4em;
    text-align: center;
    max-width: 4em;
    
    &:hover {
      cursor: pointer;
      background-color: white;
      color: #B6116E;
    }
  }

  .link:hover {
    cursor: pointer;
    font-size: 2em;
  }
`;

export default StyledPaginateContainer;
