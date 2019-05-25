import React from 'react';
import styled from 'styled-components';

import DestinationInfos from './DestinationInfos';

import { DateRangePicker } from '@progress/kendo-react-dateinputs'
import '@progress/kendo-react-intl'
import '@progress/kendo-react-tooltip'
import '@progress/kendo-react-common'
import '@progress/kendo-react-popup'
import '@progress/kendo-date-math'
import '@progress/kendo-react-dropdowns'

const destinations = [
  { id: 1, name: "Barcelona & Tenerife", cities: ["Barcelona", "Teneriffe", "Santa Cruz", "Teide"], fromPrice: 700 },
  { id: 2, name: "New york & East Coast", cities: ["Boston", "Niagara Falls", "NYC", "Florida"], fromPrice: 2100 },
  { id: 3, name: "Malta & Mediterranean", cities: ["Valetta", "Birgu", "Mdina", "Gozo"], fromPrice: 1200 }
]

const DestinationsPage = () => {
  document.title = `TripXpert Destinations`;
  return (
    <>
      <DestinationsHeader>
        <DatePickerContainer>
          <DateRangePicker />
        </DatePickerContainer>
      </DestinationsHeader>
      <DestinationInfos/>
    </>
  )
}

const DestinationsHeader = styled.div`
  width: 100%;
  height: 480px;
  background-image: url("https://images.unsplash.com/photo-1507619579562-f2e10da1ec86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80");
  background-size: cover;
  position: relative;
`

const DatePickerContainer = styled.div`
  position: absolute;
  right: 40px;
  bottom: 32px;
`

export default DestinationsPage;