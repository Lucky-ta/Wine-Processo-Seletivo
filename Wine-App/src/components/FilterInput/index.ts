import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 3em;
    text-align: center;
    justify-content: flex-end;
    margin-top: 6em;
    padding-right: 6em;
  
    
    @media(max-width: 1050px) {
    justify-content: flex-start;
    padding-left: 2em;
  }
`;

export default Container;
