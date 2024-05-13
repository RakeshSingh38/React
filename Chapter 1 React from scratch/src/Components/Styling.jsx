// import '../styles.css';
// import styled from '../styles.module.css';
import styled from 'styled-components';

const StyledP = styled.p`
    color: red;
    font-size: 20px;
    font-weight: bold;
    background-color: cyan;
`;


function Styling() {
    return (
        <>
            {/*  <h1 className={styled.styledClass}>Styling in React</h1>
            <p className={styled.newStyle}>This is a paragraph.</p> */}

            <StyledP>This is a p tag </StyledP>
        </>
    );
}

export default Styling;