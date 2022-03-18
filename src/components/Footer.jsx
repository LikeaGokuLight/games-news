import React from 'react';
// Styled
import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <p>
                © Copyright 2022 made by <span>Vitali Passaro</span> with &#128154; Italia, NA. All rights reserved.
            </p>
        </Wrapper>
    );
};

// Styles
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 10vh;
  background-color: darkgray;
  margin-top: 2.5rem;
  
  p {
    color: white;
    
    span {
      font-weight: bold;
    }
  }
`

export default Footer;
