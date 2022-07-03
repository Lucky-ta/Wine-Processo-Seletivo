import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 90%;
    height: 3em;
    text-align: center;
    justify-content: flex-end;
    padding-top: 6em;
    
    @media(max-width: 1050px) {
    justify-content: flex-start;
    padding-left: 6em;
  }

  @media(max-width: 550px) {
    margin: 0;
    padding-left: 2.3em;
    padding-right: 0;
    justify-content: start;
  }
`;

export default Container;
