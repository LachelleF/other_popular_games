import React from 'react';
import styled from 'styled-components';

const PlatformAndPriceRowStyled = styled.div`
  height: 53px;
  padding: 10px;
`;

const PlatformStyled = styled.h2`
  NOTE FIX:  left-justified;
  margin: 0;
`;

const DiscountContainer = styled.div`
  NOTE FIX: to left of price button
  tbd
`;


const PriceButton = styled.div`
  NOTE FIX: right-justified
  tbd
`;

const PlatformAndPrice = (props) => {
  return (
    <PlatformAndPriceRowStyled>
      <PlatformStyled>OS_Platform</PlatformStyled>
      <DiscountConstainer>$3.00</DiscountConstainer>
      <PriceButton>$40.00</PriceButton>
    </PlatformAndPriceRowStyled>
  );
};

export default PlatformAndPrice;