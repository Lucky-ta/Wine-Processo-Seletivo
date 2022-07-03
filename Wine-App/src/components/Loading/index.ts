import styled from 'styled-components';

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: grey;
    opacity: 0.5;
    color: white;

    display: grid;
    place-content: center;
    min-height: 100vh;
    margin: 0;
    padding: 2px;
    box-sizing: border-box;
    overflow: hidden;

    .loadingText {
        font-size: 3em;
        opacity: unset;
        z-index: 999;
    }
`;

export default Container;
