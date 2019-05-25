import React from 'react';
import styled from 'styled-components';

import queryString from 'query-string';
import DestinationTabs from './DestinationTabs';

const destinations = [
  { id: 1, name: "Barcelona & Tenerife", photo: "app/images/Gallery/Barcelona-and-Tenerife/Arc-de-Triomf,-Barcelona,-Spain_Liliya-Karakoleva.JPG", cities: ["Barcelona", "Teneriffe", "Santa Cruz", "Teide"], fromPrice: 700 },
  { id: 2, name: "New york & East Coast", photo: "app/images/Gallery/New-York-City/Brooklyn-Bridge_Pavlina-Hadjieva_Attraction.JPG", cities: ["Boston", "Niagara Falls", "NYC", "Florida"], fromPrice: 2100 },
  { id: 3, name: "Malta & Mediterranean", photo: "app/images/Gallery/Malta/Bibliotheca-National-Library_Marie-Lan-Nguyen.JPG",cities: ["Valetta", "Birgu", "Mdina", "Gozo"], fromPrice: 1200 }
]

const DestinationInfos = () => { 
  return (
    <DestinationInfosContainer>
        <h1>Barcelona & Tenerife</h1>
        <DestinationInfosCities>Los Gigantes - Casa Mila - Casa Batlo</DestinationInfosCities>
        <Line>-------------------</Line>
        <DestinationInfosPricing>From $700 for 5 days</DestinationInfosPricing>
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