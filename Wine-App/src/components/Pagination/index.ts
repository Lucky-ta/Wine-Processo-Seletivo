import styled from 'styled-components';

const StyledPaginateContainer = styled.div`
  .container {
    display: flex;
    color: #0366d6;
    gap: 2em;
    align-items: center;
    list-style-type: none;
    width: 100%;
    max-width: 30em;
    margin-top: 2.3em;
    margin-bottom: 1.3em;
    margin-left: 60vh;
    
    @media(max-width: 690px) {
      margin: auto;
      margin-top: 2.4em;
  }
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
