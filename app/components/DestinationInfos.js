import React from 'react';
import styled from 'styled-components';

import DestinationTabs from './DestinationTabs';

const DestinationInfos = () => {
  document.title = `TripXpert Destinations`;
  return (
    <DestinationInfosContainer>
        <h1>Barcelona & Tenerife</h1>
        <DestinationInfosCities>Los Gigantes - Casa Mila - Casa Batlo</DestinationInfosCities>
        <Line>-------------------</Line>
        <DestinationInfosPricing>From $700 fro 5 days</DestinationInfosPricing>
        <DestinationInfosView>View full price info</DestinationInfosView>
        <DestinationTabs/>
    </DestinationInfosContainer>
  )
}

const DestinationInfosContainer = styled.section`
    padding-top: 40px;
    height: 560px;
    width: 90%;
    margin: 0 auto;
`

const DestinationInfosCities = styled.p`
    color: gray;
    margin-top: 0px;
`

const Line = styled.p`
  margin-top: 8px;
  color: red;
`

const DestinationInfosPricing = styled.p`
  margin-top: 8px;
`

const DestinationInfosView = styled.p`
  color: #0072ef;
  margin-top: 4px;
  margin-bottom: 40px;
`

export default DestinationInfos;