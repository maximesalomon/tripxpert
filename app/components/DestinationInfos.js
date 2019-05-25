import React from 'react';
import styled from 'styled-components';

import DestinationTabs from './DestinationTabs';

const DestinationInfos = () => {
  document.title = `TripXpert Destinations`;
  return (
    <DestinationInfosContainer>
        <h1>Barcelona & Tenerife</h1>
        <DestinationTabs/>
    </DestinationInfosContainer>
  )
}

const DestinationInfosContainer = styled.section`
    height: 1000px;
`

export default DestinationInfos;